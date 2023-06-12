import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Description from "./Description";
import animeContext from "./AnimeContext";
import Loader from "./Loader/Loader";
const Header = ({ section }) => {
  const [animepost, setAnimepost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    let url = "";
    section === "manga"
      ? (url = `https://api.jikan.moe/v4/manga?q=${inputSearch}`)
      : section === "trending"
      ? (url = `https://api.jikan.moe/v4/anime?q=${inputSearch}`)
      : section === "popular"
      ? (url = `https://api.jikan.moe/v4/top/anime?q=${inputSearch}`)
      : (url = `https://api.jikan.moe/v4/top/anime?q=${inputSearch}`);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const Posts = data.data.map((anime) => ({
          title: anime.title,
          image: anime.images.jpg.large_image_url,
          description: anime.background,
          trailer: anime.trailer ? anime.trailer.embed_url : null,
          episodes: anime.episodes,
          year: anime.year,
          rating: anime.rating,
          type: anime.type,
          duration: anime.duration,
          japanesetitle: anime.title_japanese,
          source: anime.source,
          status: anime.status,
        }));
        setAnimepost(Posts);
        setLoading(false);
      });
  }, [section, inputSearch]);

  const getDescription = (anime) => {
    setSelectedAnime(anime);
  };

  const changeBackgroundColor = () => {
    setBackgroundColor((prev) => (prev === "#000" ? "#fff" : "#000"));
  };

  return (
    <>
      <animeContext.Provider value={selectedAnime}>
        <div className="nav" style={{ backgroundColor }}>
          <h1>AnimeHub </h1>
          <Link to="/">Anime</Link>
          <Link to="/manga">Manga</Link>
          {section === "manga" || section === "trending" ? (
            <input
              type="text"
              placeholder="search your anime"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          ) : null}
          <Link to="/trending">Trending</Link>
          <Link to="/popular">popular</Link>
          <Link to="/characters">characters </Link>
          <Link to="/about">About</Link>
          <i
            className="fas fa-star-half-alt"
            onClick={() => changeBackgroundColor()}
          ></i>
        </div>
        {selectedAnime ? (
          <div className="description">
            <Description />
          </div>
        ) : (
          false
        )}
        {loading ? (
          <>
            <Loader />{" "}
          </>
        ) : (
          <div className="header" style={{ backgroundColor: backgroundColor }}>
            {animepost.map((post, i) => (
              <div key={i} onClick={() => getDescription(post)}>
                <img src={post.image} alt="" />
                <h2>{post.title}</h2>
              </div>
            ))}
          </div>
        )}
      </animeContext.Provider>
    </>
  );
};

export default Header;
