import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputChange, FormSubmit } from "../../utils/TypeScript";
import { sendFeedback } from "../../redux/actions/feedbackAction";
import squidGameShapes from "../../assets/images/squid-game-shapes.webp";
import { useHistory } from "react-router-dom";

export function FeedbackPage() {
  const initialState = {
    game: "",
    player: "",
    session: "",
    review: "",
    score: -1,
    read: false,
    flagged: false,
  };
  //   const [userRegister, setUserRegister] = useState(initialState)
  const [feedback, setFeedback] = useState(initialState);
  //
  const queryParams = new URLSearchParams(window.location.search);
  const game = queryParams.get("game");
  const player = queryParams.get("player");
  const session = queryParams.get("session");
  const { review, score } = feedback;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    if (game && player && session) {
      setFeedback({
        game: game,
        player: player,
        session: session,
        score: feedback.score,
        review: feedback.review,
        read: false,
        flagged: false,
      });
      dispatch(sendFeedback(feedback));
    } else {
      console.log("Not valid url");
    }
    history.push("/game");
  };

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-24 w-auto"
          src={squidGameShapes}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Submit Feedback
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="score"
                className="block text-sm font-medium text-gray-700"
              >
                Score
              </label>
              <select
                id="score"
                name="score"
                className=" justify-self-center mt-1 block w-full pl-3  py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue="5"
                value={score}
                onChange={handleChangeInput}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="review"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Feedback
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="review"
                  name="review"
                  rows={3}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                  onChange={handleChangeInput}
                  value={review}
                />
                <p className="mt-2 text-sm text-gray-500">
                  How did you ike the game?
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-squid-cyan hover:bg-squid-yellow focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
