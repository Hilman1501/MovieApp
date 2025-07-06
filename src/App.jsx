import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from './pages/Home';
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Counter from "./components/Counter/Counter";
import DetailMovie from "./pages/movie/Detail";
import MovieContext from "./components/context/MoviesContext";
import data from "./components/utils/constants/data";

function App() {
  const [movies, setMovies] = useState(data);
  const contextValue = { movies, setMovies };

  return (
    <MovieContext.Provider value={contextValue}>
   
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/now" element={<NowPlayingMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Footer />
     
    </MovieContext.Provider>
  );
}

export default App;
