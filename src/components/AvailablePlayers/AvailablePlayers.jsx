import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="w-[85%] mx-auto mt-8 grid md:grid-cols-3 grid-cols-1 gap-4">
      {playerData.map((player) => (
        <PlayerCard
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
