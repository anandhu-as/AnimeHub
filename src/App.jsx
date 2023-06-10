import React from "react";
import Header from "../src/Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manga from "./Components/Manga";
import { NotFound } from "./Components/NotFound";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import About from "./Components/About";
import character from "./Components/characters/character";

const App = () => {
  return (
    <BrowserRouter>
      <>
      {/* routes */}
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
