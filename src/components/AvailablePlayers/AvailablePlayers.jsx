import React, { use } from "react";
import userImg from "../../assets/user1.png";
import reportPng from "../../assets/report1.png";
const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="w-[85%] mx-auto mt-8 grid md:grid-cols-3 grid-cols-1 gap-4">
      {playerData.map((player) => (
        <div class="card bg-base-100 shadow-sm p-6">
          <figure>
            <img
              src={player.player_img}
              alt="Shoes"
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div class=" space-y-3">
            <div className="flex gap-4 mt-4">
              <img src={userImg} alt="" />
              <h2 class="card-title">{player.player_name}</h2>
            </div>
            <div className="flex justify-between border-b-1 pb-2 border-gray-300">
              <div className="flex gap-2 items-center">
                <img className="h-[50%] w-[50%]" src={reportPng} alt="" />
                <h4 className="text-[#131313b3]"> {player.player_country}</h4>
              </div>
              <button className="bg-[#1313130d] btn py-1 px-2 rounded-lg">
                {player.player_role}
              </button>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Rating</span>
              <span> {player.rating} </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">{player.batting_style} </span>
              <span className="text-[#131313b3]">{player.bowling_style} </span>
            </div>
            <div className="flex justify-between items-center card-actions">
              <p className="font-bold">Price: {player.price}</p>
              <button className="border border-gray-200 py-1 px-2 rounded-lg  btn">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
