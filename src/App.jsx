import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AvailablePlayers></AvailablePlayers>

      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
