import React, { useContext, useState } from "react";
import animeContext from "./AnimeContext";
const Description = ({}) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const selectedAnime = useContext(animeContext);
  const {
    title,
    image,
    trailer,
    episodes,
    year,
    rating,
    type,
    duration,
    japanesetitle,
    source,
    status,
    description,
  } = selectedAnime;
  const showAnimeTrailer = () => {
    setShowTrailer(true);
  };
  return (
    <>
      <h3>
        {title} {year}
      </h3>
   
      <p>{japanesetitle}</p>
      <p>
        {rating} {type} {source}
      </p>
      <p>status {status}</p>
      <p>{duration}</p>
      <img src={image} alt="" />
      {trailer ? (
        showTrailer ? (
          <iframe
            width="560"
            height="315"
            src={trailer}
            title="YouTube video player"
          ></iframe>
        ) : (
          <button onClick={showAnimeTrailer}>Show Trailer</button>
        )
      ) : (
        <h3>No trailer found.</h3>
      )}
      <h2>{episodes} episodes</h2>
      {description ? (
        <p>{description}</p>
      ) : (
        <p>
          Anime is a form of Japanese animation whose origins go back before the
          1920s. Later, before and during World War II, many organizations for
          artists and cartoonists were established. The term anime [a·nuh·mei]
          is a Japanese colloquialism used as an abbreviation for the term
          “animation.” Generally in Japan, the word anime (written アニメ) is
          synonymous with animation of any kind from anywhere. Internationally,
          however, anime is typically referred to as animation that is produced
          from Japan.
        </p>
      )}
    </>
  );
};

export default Description;
