import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
const character = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/characters")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0]);
        const items = data.data.map((animeCharacter) => ({
          name: animeCharacter.name,
          image: animeCharacter.images.jpg.image_url,
          about: animeCharacter.about,
          nicknames: animeCharacter.nicknames,
        }));
        setCharacter(items);
      });
  }, []);
  const getCharacterInfo = (animeCharacter) => {
    setSelectedAnime(animeCharacter);
  };
  return (
    <>
      <div className="nav">
        <h1>AnimeHub</h1>
        <Link to="/">Anime</Link>
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
          />
        </div>
      ) : null}
      <div className="header">
        {character.map((post, i) => (
          <div key={i} onClick={() => getCharacterInfo(post)}>
            <img src={post.image} alt="" />
            <h2>{post.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default character;
