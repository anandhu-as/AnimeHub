import React from "react";
const Info = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.nicknames}</p>
      <p>{props.name_kanji}</p>
      <img src={props.image} alt="" />
      <h2>About Character</h2>
      <p>{props.about}</p>
    </>
  );
};

export default Info;
