import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import hammerIcon from "../../assets/sold_hammer.png";
import hammer_gif from "../../assets/sold_gif.gif";
import nextPlayer from "../../assets/next_player.png";
import "./PlayerDetails.scss";

const PlayerDetails = ({
  player,
  handleNextBtnClick,
  setPlayerOwner,
  onPlayerSold,
}) => {
  const { name, base_price, imageUrl, skills, rank } = player;
  const [sellingInProgress, setSellingInProgress] = useState(false);
  const [price, setPrice] = useState("");

  const handleSoldBtnClick = () => {
    setSellingInProgress(true);
    setTimeout(() => {
      onPlayerSold();
      setSellingInProgress(false);
    }, 2800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const handleTeamChange = (e) => {
    console.log(e.target.value);
    setPlayerOwner(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="player-form-wrapper">
      <div className="profile-img-wrapper">
        <img src={imageUrl} className="player_image" />
      </div>
      <div className="player_details_wrapper">
        <div className="details-section half-width">
          <TextField
            className="input-field"
            label="Name"
            type="text"
            variant="outlined"
            color="secondary"
            value={name}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className="input-field"
            label="Skills"
            type="text"
            variant="outlined"
            color="secondary"
            value={skills}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className="input-field"
            label="T20 Ranking"
            type="text"
            variant="outlined"
            color="secondary"
            value={rank}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div className="bid_container half-width">
          <TextField
            className="input-field"
            label="Asking Price"
            type="text"
            variant="outlined"
            color="secondary"
            value={base_price}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className="input-field"
            label="Bid Price"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />
          <Select
            labelId="select-label"
            id="select"
            defaultValue="SelectTeam"
            label="TEAM"
            className="dropdown-section"
            onChange={handleTeamChange}
          >
            <MenuItem value="SelectTeam" disabled fullWidth>
              Select Team
            </MenuItem>
            <MenuItem value="UNSOLD_PLAYER">UNSOLD</MenuItem>
            <MenuItem value="CSK">CSK</MenuItem>
            <MenuItem value="KXIP">KXIP</MenuItem>
            <MenuItem value="MI">MI</MenuItem>
            <MenuItem value="KKR">KKR</MenuItem>
          </Select>
        </div>
        <div className="icon-wrapper">
          {sellingInProgress ? (
            <img
              src={hammer_gif}
              className="icon"
            />
          ) : (
            <img
              src={hammerIcon}
              className="icon"
              onClick={handleSoldBtnClick}
            />
          )}
          <div onClick={handleNextBtnClick}>
          <img
              src={nextPlayer}
              className="icon"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlayerDetails;
