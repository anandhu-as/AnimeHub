import React from "react";

const AnimePost = ({ animepost, getDescription }) => {
  return (
    <div className="header">
      {animepost.map((post, i) => (
        <div key={i} onClick={() => getDescription(post)}>
          <img src={post.image} alt="" />
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AnimePost;
