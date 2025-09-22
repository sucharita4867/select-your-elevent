import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({
  purchasedPlayers,
  removePlayer,
  setToggle,
  // toggle,
}) => {
  return (
    <div className="w-[85%] mx-auto mt-4">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
      <div className="border border-black w-[13%] p-1 rounded-xl text-center mt-4">
        <h3
          onClick={() => setToggle(true)}
          className={`px-1 py-2 rounded-xl font-bold bg-[#E7FE29]`}
        >
          Add More Player
        </h3>
      </div>
    </div>
  );
};

export default SelectedPlayers;
//  className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${
//               toggle === false ? "bg-[#E7FE29]" : ""
//             }`}
