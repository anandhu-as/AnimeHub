import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../About/About.css";
const About = () => {
  return (
    <>
      <div className="nav">
        <h1>AnimeHub</h1>
        <Link to="/">Anime</Link>
        <Link to="/manga">Manga</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/popular">popular</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="description">
        <h3>AnimeHub</h3>
        <p>
          This website allow users to explore and discover various anime
          series,we use the Jikan API which provide data about anime,manga and
          anime related content{" "}
        </p>
      </div>
      <img
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/Itachi-Cropped.jpg"
        className="aboutImage"
        alt=""
      />
      <footer className="footer">
        {" "}
        Created by @anandhu-as{" "}
        <a href="https://github.com/anandhu-as">
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
};

export default About;
