import "./App.css";
import { ToastContainer } from "react-toastify";

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

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    // console.log(filteredData);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };
  // const addPlayers = () => {};
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="flex justify-between items-center w-[85%] mx-auto mt-4">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : ` Selected Player (${purchasedPlayers.length}/6)`}
        </h1>
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
            Selected <span>({purchasedPlayers.length})</span>{" "}
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
        <SelectedPlayers
          toggle={toggle}
          setToggle={setToggle}
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
