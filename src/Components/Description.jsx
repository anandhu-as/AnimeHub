import React from "react";
const Description = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <img src={props.image} alt="" />
      {props.description ? (
        <p>{props.description}</p>
      ) : (
        <p>
          Anime is a form of Japanese animation whose origins go back before the
          1920s. Later, before and during World War II, many organizations for
          artists and cartoonists were established.The term anime [a·nuh·mei] is
          a Japanese colloquialism used as an abbreviation for the term
          “animation.” Generally in Japan, the word anime (written アニメ) is
          synonymous with animation of any kind from anywhere. Internationally,
          however, anime is typically referred to as animation that is produced
          from Japan
        </p>
      )}
    </>
  );
};

export default Description;
