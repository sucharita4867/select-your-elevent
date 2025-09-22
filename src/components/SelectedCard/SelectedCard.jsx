import React from "react";
import deleteBtn from "../../assets/Frame.png";
const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border-1 border-gray-200 rounded-xl flex items-center justify-between px-4 py-2 mb-2">
      <div className="flex items-center gap-2">
        <img
          src={player.player_img}
          className="h-[50px] w-[50px] rounded-lg"
          alt=""
        />
        <div>
          <p className="font-bold">{player.player_name}</p>
          <p className="text-[#131313b3]">{player.player_role}</p>
        </div>
      </div>
      <img onClick={handleRemove} src={deleteBtn} alt="" />
    </div>
  );
};

export default SelectedCard;
