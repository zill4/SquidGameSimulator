import React, { useState } from "react";
import { postAPI } from "../../utils/FetchData";
import { InputChange } from "../../utils/TypeScript";

const games = [
  {
    name: "Ddakji",
    gameId: "game0",
    engName: "Pog",
    symbol: "🟥🟦",
  },
  {
    name: "Mugunghwa flower has blossomed",
    gameId: "game1",
    engName: "Red light, green light",
    symbol: "👧🌼",
  },
  {
    name: "Dalgona Challenge",
    gameId: "game2",
    engName: "Honeycrisp Challenge",
    symbol: "🐝🍪",
  },
  {
    name: "Juldarigi",
    gameId: "game3",
    engName: "Tug of War",
    symbol: "🧑🔗🧑",
  },
  {
    name: "Holjjang ",
    gameId: "game4",
    engName: "Evens and Odds",
    symbol: "🔵🟢",
  },
  {
    name: "Sabancchigi",
    gameId: "game5",
    engName: "Hopscotch",
    symbol: "🕺",
  },
  {
    name: "Ojingeo",
    gameId: "game6",
    engName: "Squid Game",
    symbol: "🦑🕹️",
  },
];

export default function GameSim() {
  const [playerId, setPlayerId] = useState("203");

  async function playGame(game: object) {
    const res = await postAPI("link", game);
    if (res.status === 200) {
      window.location.replace(res.data.linkUrl);
    } else {
      console.log("Error getting Link:", res.status);
    }
  }

  const handleGame = (game: any) => {
    const session = "gameSession_" + Math.floor(Math.random() * 1000);
    const gameName = game.name;
    playGame({ name: gameName, session: session, player: playerId });
  };

  const handleChangeInput = (event: InputChange) => {
    const val = event.target.value;
    setPlayerId(val);
  };

  return (
    <div className="bg-gray-800 min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-itss-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-squid-cyan sm:text-5xl">
            Simulate
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-squid-red tracking-tight sm:text-5xl">
                Game?
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Please enter your desired number and select your game.
              </p>
            </div>
          </div>
        </main>

        <div className="mt-10 sm:border-transparent flex justify-center">
          <div className="px-3 py-3">
            <label htmlFor="player" className="sr-only">
              PlayerID
            </label>
            <input
              type="playerId"
              name="playerId"
              id="player"
              onChange={handleChangeInput}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="203"
              defaultValue="203"
            />
          </div>
        </div>
        <div className="py-4 px-3 grid grid-cols-3 gap-4 sm:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.gameId}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="flex-shrink-0">{game.symbol}</div>
              <div className="flex-1 min-w-0">
                <a
                  onClick={() => handleGame(game)}
                  className="focus:outline-none"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {game.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {game.engName}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
