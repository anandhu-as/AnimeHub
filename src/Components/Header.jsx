import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Description from "./Description";
const Header = ({ section }) => {
  const [animepost, setAnimepost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [search, setSearch] = useState("");
  let url = section;
  if (section === "manga") url = `https://api.jikan.moe/v4/manga?q=${search}`;
  else if (section === "trending")
    url = `https://api.jikan.moe/v4/anime?q=slayer=${search}`;
  else if (section === "popular")
    url = `https://api.jikan.moe/v4/anime?q=naruto=${search}`;
  else url = `https://api.jikan.moe/v4/anime?q=${search}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[7].type);
        const Posts = data.data.map((anime) => ({
          title: anime.title,
          image: anime.images.jpg.large_image_url,
          description: anime.background,
          trailer: anime.trailer ? anime.trailer.embed_url : null,
          episodes:anime.episodes,
          year:anime.year,
          rating:anime.rating,
          type:anime.type
        }));
        setAnimepost(Posts);
        setLoading(false);
      });
  }, [search]);
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
          />
        </div>
      ) : (
        false
      )}
      {loading ? (
        <div className="loading">Loading...</div>
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
