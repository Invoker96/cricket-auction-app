import React from "react";
import "./Loader.scss";
import ball from "../../assets/ball.gif"

export default function LoadingSpinner() {
  return (
    <div className="loader-container" >
        <img src={ball} className="loader"/>
    </div>
  );
}
