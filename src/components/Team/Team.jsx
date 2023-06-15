import React from "react";
import "./Team.scss";

const renderPlayerList = (playersList, teamName) => {
  console.log("Inside render player list function");
  return playersList.map((player) => {
    if (player.team === teamName) {
      return (
        <li className="team-content avatar-container" key={player.id}>
          <img className="thumbnail-img" src={player.imageUrl} />
          <p className="player-name">{player.name}</p>
        </li>
      );
    }
  });
};

const Team = ({ playersList, teamName }) => {
  return (
    <ul className="team-container">
      {renderPlayerList(playersList, teamName)}
    </ul>
  );
};
export default Team;
