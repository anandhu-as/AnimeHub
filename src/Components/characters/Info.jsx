import React from "react";
const Info = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.nicknames}</p>
      <img src={props.image} alt="" />
      <p>{props.about}</p>
    </>
  );
};

export default Info;
