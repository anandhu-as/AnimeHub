import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
const character = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/characters")
      .then((res) => res.json())
      .then((data) => {
        const items = data.data.map((animeCharacter) => ({
          name: animeCharacter.name,
          image: animeCharacter.images.webp.image_url,
          about: animeCharacter.about,
          nicknames: animeCharacter.nicknames,
          name_kanji:animeCharacter.name_kanji
        }));
        setCharacter(items);
        setLoading(false);
      });
  }, []);
  const getCharacterInfo = (animeCharacter) => {
    setSelectedAnime(animeCharacter);
  };
  return (
    <>
      <div className="nav">
        <h1>AnimeHub</h1>
        <Link to="/header">Anime</Link>
        <Link to="/manga">Manga</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/popular">popular</Link>
        <Link to="/characters">characters </Link>
        <Link to="/about">About</Link>
      </div>
      {selectedAnime ? (
        <div className="description">
          <Info
            name={selectedAnime.name}
            image={selectedAnime.image}
            about={selectedAnime.about}
            nicknames={selectedAnime.nicknames}
            name_kanji={selectedAnime.name_kanji}
          />
        </div>
      ) : null}
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
          {character.map((post, i) => (
            <div key={i} onClick={() => getCharacterInfo(post)}>
              <img src={post.image} alt="" />
              <h2>{post.name}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default character;
