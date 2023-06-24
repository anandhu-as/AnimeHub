import React from "react";
import Header from "../src/Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manga from "./Components/Manga/Manga";
import { NotFound } from "./Components/NotFound";
import Trending from "./Components/Trending/Trending";
import Popular from "./Components/Popular/Popular";
import About from "./Components/About/About";
import character from "./Components/characters/character";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="/manga" Component={Manga} />
          <Route path="*" Component={NotFound} />
          <Route path="/trending" Component={Trending} />
          <Route path="/popular" Component={Popular} />
          <Route path="/about" Component={About} />
          <Route path="/characters" Component={character} />
  
        </Routes>
      </>
    </BrowserRouter>
  );
};
export default App;
