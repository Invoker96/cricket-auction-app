import { useState, useEffect } from "react";
import "./App.css";
import { firestore } from "./firebase";
import PlayerDetails from "./components/PlayerDetails/PlayerDetails";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import "./LandingPage.scss";
import { config } from "./components/TeamDetails/config";
import LoadingSpinner from "./components/Loader/Loader";
import NavBar from "./components/NavBar/NavBar";

const LandingPage = () => {
  const [players, setPlayersData] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerOwner, setPlayerOwner] = useState("");

  const getPlayersList = () => {
    setIsLoading(true);
    firestore
      .collection("players")
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        console.log("Items", items[0]);
        setPlayersData(items);
        setCurrentPlayer(items[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  };

  useEffect(() => {
    getPlayersList();
  }, []);

  const handleNextBtnClick = () => {
    const nextPlayer = players.find((player) => player.team === "undefined");
    if (nextPlayer) {
      setCurrentPlayer(nextPlayer);
    }
  };

  const onSoldPlayerHandler = () => {
    console.log("Owner", playerOwner);
    const newPlayerList = [...players];

    const index = newPlayerList.findIndex(
      (player) => player.id === currentPlayer.id
    );
    newPlayerList[index].team =
      playerOwner !== "UNSOLD_PLAYER" ? playerOwner : config.TEAM.UNSOLD_PLAYER;
    setPlayersData(newPlayerList);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="landing_page_container">
          <NavBar />
          <div className="app-wrapper">
            <PlayerDetails
              player={currentPlayer}
              handleNextBtnClick={handleNextBtnClick}
              setPlayerOwner={setPlayerOwner}
              onPlayerSold={onSoldPlayerHandler}
            />
            <TeamDetails playersList={players} />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
