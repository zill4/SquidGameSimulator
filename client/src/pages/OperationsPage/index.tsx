import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootStore } from "../../utils/TypeScript";
import MaskedOperative from "../../assets/images/squid-game-mask.png";

export function OperationsPage() {
  const dispatch = useDispatch();

  const { auth } = useSelector((state: RootStore) => state);
  const { feedbacks } = useSelector((state: RootStore) => state);
  const [myData, setData] = useState(feedbacks);
  const [direction, setDirection] = useState(false);
  const [type, setType] = useState("score");
  const [scoreMin, setScoreMin] = useState(5);
  const history = useHistory();

  if (!auth.user) {
    history.push("/login");
  }
  function setTime(time: string | undefined) {
    if (!time) {
      return 0;
    }
    return new Date(time).getTime();
  }
  function sortByScore(typer: boolean) {
    if (typer) {
      setData([...feedbacks].sort((a, b) => b.score - a.score));
    } else {
      setData([...feedbacks].sort((a, b) => a.score - b.score));
    }
  }
  function sortByTime(typer: boolean) {
    if (typer) {
      setData(
        [...feedbacks].sort(
          (a, b) => setTime(b.createdAt) - setTime(a.createdAt)
        )
      );
    } else {
      setData(
        [...feedbacks].sort(
          (a, b) => setTime(a.createdAt) - setTime(b.createdAt)
        )
      );
    }
  }
  function sorter(val: string) {
    // could use a switch
    setType(val);
    if (type === "score") {
      sortByScore(direction);
    } else if (type === "time") {
      sortByTime(direction);
    }
  }
  function sortDirection() {
    setDirection(!direction);
    sorter(type);
  }
  function minScore(val: string) {
    setScoreMin(parseInt(val));
  }

  return (
    <div className="bg-squid-pink">
      {auth.user ? (
        <div>
          <div className="flex">
            <div className="mb-1 mt-2 flex-shrink-0 sm:mb-0 sm:mr-4">
              <img
                className="h-24  w-auto rounded-full"
                src={MaskedOperative}
                alt="masked profile"
              />
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold">{auth.user.name}</h4>
              <p className="mt-1">{auth.user.account}</p>
            </div>
          </div>
          <div className="min-h-full">
            <div className="flex flex-col">
              <main className="flex-1">
                <div className="hidden mt-8 sm:block">
                  <div className="align-middle inline-block min-w-full border-b border-gray-400">
                    <div className="px-2 py-2 m-3">
                    <button onClick={() => sortDirection()} className="mr-3">
                       {direction ? <div>⬆️</div> : <div>⬇️</div>}
                    </button>
                    Sort By {"   "}
                    <select onChange={(e) => sorter(e.target.value)}>
                      <option value="score">Score</option>
                      <option value="time">Time Created</option>
                    </select>
                    {"  "} Filter by Score {"   "}
                    <select onChange={(e) => minScore(e.target.value)}>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                    </div>
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-t border-gray-700">
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-bold text-black uppercase tracking-wider">
                            <span className="lg:pl-2">Game</span>
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-bold text-black uppercase tracking-wider">
                            <span className="lg:pl-2">Feedback</span>
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-bold text-black  uppercase tracking-wider">
                          <span className="lg:pl-2">Created at</span>
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-bold text-black uppercase tracking-wider">
                          <span className="lg:pl-2">Session</span>
                          </th>
                          <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-bold text-black uppercase tracking-wider">
                            Player
                          </th>
                          <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-bold text-black uppercase tracking-wider">
                            Score
                          </th>
                          <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-bold text-black uppercase tracking-wider" />
                        </tr>
                      </thead>
                      <tbody className="bg-gray-500 divide-y divide-gray-100">
                        {myData.map((feedback) =>
                          feedback.score <= scoreMin ? (
                            <tr key={feedback._id}>
                              <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-200">
                                <div className="flex items-center space-x-3 lg:pl-2">
                                  <div
                                    className="flex-shrink-0 w-2.5 h-2.5 rounded-full"
                                    aria-hidden="true"
                                  />

                                  <span>{feedback.game}</span>
                                </div>
                              </td>
                              <td className="px-6 py-3 max-w-2 whitespace-nowrap text-sm font-medium text-gray-200">
                                <div className="flex items-center space-x-3 lg:pl-2">
                                  <div
                                    className="flex-shrink-0 w-2.5 h-2.5 rounded-full"
                                    aria-hidden="true"
                                  />

                                  <span>{feedback.review}</span>
                                </div>
                              </td>
                              <td className="px-6 py-3 text-sm text-gray-200 font-medium">
                                <div className="flex items-center space-x-2">
                                  {feedback.createdAt}
                                  <div className="flex flex-shrink-0 -space-x-1"></div>
                                </div>
                              </td>
                              <td className="px-6 py-3 text-sm text-gray-200 font-medium">
                                <div className="flex items-center space-x-2">
                                  {feedback.session}
                                  <div className="flex flex-shrink-0 -space-x-1"></div>
                                </div>
                              </td>
                              <td className="px-6 py-3 text-sm text-gray-200 font-medium">
                                <div className="flex items-center space-x-2">
                                  {feedback.player}
                                  <div className="flex flex-shrink-0 -space-x-1"></div>
                                </div>
                              </td>
                              <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-200 text-right">
                                {feedback.score}
                              </td>
                            </tr>
                          ) : (
                            <br></br>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <p>sad</p>
        </div>
      )}
    </div>
  );
}
