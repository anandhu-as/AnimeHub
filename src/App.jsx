import React from "react";
import Header from "../src/Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manga from "./Components/Manga";
import { NotFound } from "./Components/NotFound";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import About from "./Components/About";
const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="/manga" Component={Manga} />
          <Route path="*" Component={NotFound} />
          <Route path="/trending" Component={Trending}/>
          <Route path="/popular" Component={Popular}/>
          <Route path="/about" Component={About}/>
        </Routes>
      </>
    </BrowserRouter>
  );
};
export default App;
