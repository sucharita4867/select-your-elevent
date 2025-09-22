import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="flex justify-between items-center w-[85%] mx-auto mt-4">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border-1 border-gray-40 rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>(0)</span>{" "}
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span class="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
