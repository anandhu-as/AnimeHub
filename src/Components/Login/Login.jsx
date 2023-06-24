import React, { useState } from "react";
import {
  auth,
  googleProvider,
  githubProvider,
} from "../../../../Config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import Header from "../Header";
import "../../styles/Login.css";

const Login = () => {
  const [loggedin, setLoggedIn] = useState(false);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then(() => {
      setLoggedIn(true);
    });
  };

  const signInWithGitHub = () => {
    signInWithPopup(auth, githubProvider).then(() => {
      setLoggedIn(true);
    });
  };

  if (loggedin) return <Header />;

  return (
    <div className="container">
      <img src="https://zoro.to/images/discussion.png" alt="" />
      <h1 className="Login-title">AnimeHub</h1>
      <button onClick={signInWithGoogle} className="google-btn">
        Google<i className="fab fa-google"></i>
      </button>
      <button onClick={signInWithGitHub}>
        GitHub<i className="fab fa-github"></i>
      </button>
    </div>
  );
};

export default Login;
