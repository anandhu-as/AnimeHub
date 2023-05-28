import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Description from "./Description";
const Header = ({ section }) => {
  const [animepost, setAnimepost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    let url = "";
    if (section === "manga") {
      url = `https://api.jikan.moe/v4/top/manga?q=${inputSearch}`;
    } else if (section === "trending") {
      url = `https://api.jikan.moe/v4/anime?q=${inputSearch}`;
    } else if (section === "popular") {
      url = `https://api.jikan.moe/v4/top/anime?q=${inputSearch}`;
    } else {
      url = `https://api.jikan.moe/v4/top/anime?q=${inputSearch}`;
    }

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
        }));
        setAnimepost(Posts);
        setLoading(false);
      });
  }, [section, inputSearch]);

  const getDescription = (anime) => {
    setSelectedAnime(anime);
  };

  return (
    <>
      <div className="nav">
        <h1>AnimeHub</h1>
        <Link to="/">Anime</Link>
        <Link to="/manga">Manga</Link>
        <input
          type="text"
          placeholder="search your anime"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to="/trending">Trending</Link>
        <Link to="/popular">popular</Link>
        <Link to="/about">About</Link>
      </div>
      {selectedAnime ? (
        <div className="description">
          <Description
            description={selectedAnime.description}
            title={selectedAnime.title}
            image={selectedAnime.image}
            trailer={selectedAnime.trailer}
            episodes={selectedAnime.episodes}
            year={selectedAnime.year}
            rating={selectedAnime.rating}
            type={selectedAnime.type}
            duration={selectedAnime.duration}
            japanesetitle={selectedAnime.japanesetitle}
          />
        </div>
      ) : (
        false
      )}
      {loading ? (
        <>
          <div className="box-of-star1">
            <div className="star star-position1"></div>
            <div className="star star-position2"></div>
            <div className="star star-position3"></div>
            <div className="star star-position4"></div>
            <div className="star star-position5"></div>
            <div className="star star-position6"></div>
            <div className="star star-position7"></div>
          </div>
          <div className="box-of-star2">
            <div className="star star-position1"></div>
            <div className="star star-position2"></div>
            <div className="star star-position3"></div>
            <div className="star star-position4"></div>
            <div className="star star-position5"></div>
            <div className="star star-position6"></div>
            <div className="star star-position7"></div>
          </div>
          <div className="box-of-star3">
            <div className="star star-position1"></div>
            <div className="star star-position2"></div>
            <div className="star star-position3"></div>
            <div className="star star-position4"></div>
            <div className="star star-position5"></div>
            <div className="star star-position6"></div>
            <div className="star star-position7"></div>
          </div>
          <div className="box-of-star4">
            <div className="star star-position1"></div>
            <div className="star star-position2"></div>
            <div className="star star-position3"></div>
            <div className="star star-position4"></div>
            <div className="star star-position5"></div>
            <div className="star star-position6"></div>
            <div className="star star-position7"></div>
          </div>
          <div data-js="astro" className="astronaut">
            <div className="head"></div>
            <div className="arm arm-left"></div>
            <div className="arm arm-right"></div>
            <div className="body">
              <div className="panel"></div>
            </div>
            <div className="leg leg-left"></div>
            <div className="leg leg-right"></div>
            <div className="schoolbag"></div>
          </div>
        </>
      ) : (
        <div className="header">
          {animepost.map((post, i) => (
            <div key={i} onClick={() => getDescription(post)}>
              <img src={post.image} alt="" />
              <h2>{post.title}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
