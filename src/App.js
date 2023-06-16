import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./NavComponents/Nav";
import Footer from "./home_components/Footer";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Playlists from "./playlist_components/Playlists";
import Sign from "./pages/Sign";
import { useRef, useState } from "react";

function App() {
  let login = useRef(window.localStorage.getItem("session"));

  return (
    <div>
      <Nav login={login} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist" element={<Playlists />} />
        <Route path="/sign" element={<Sign login={login} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
