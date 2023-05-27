import React from "react";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="text">
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/789/892/desktop-wallpaper-zoro-one-piece-roronoa-zoro-anime.jpg"
        alt=""
      />
      <h1>404NotFound...................</h1>
      <Link to="/">Go back</Link>
    </div>
  );
};
