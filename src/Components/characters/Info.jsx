import React from "react";
const Info = ({ name, nicknames, name_kanji, image, about }) => {// props destructuring
  return (
    <>
      <h3>{name}</h3>
      <p>{nicknames}</p>
      <p>{name_kanji}</p>
      <img src={image} alt="" />
      <h2>About Character</h2>
      <p>{about}</p>
    </>
  );
};

export default Info;
