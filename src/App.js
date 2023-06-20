import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./NavComponents/Nav";
import Footer from "./home_components/Footer";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Playlists from "./playlist_components/Playlists";
import { useRef, useState } from "react";
import Charts from "./charts_components/Charts";
import PlaylistItem from "./playlist_components/PlaylistItem";
import CreatePlaylist from "./playlist_components/CreatePlaylist";
import SignIn from "./sign_components/SignIn";
import SignUp from "./sign_components/SignUp";
import ArtistDetail from "./artist_components/ArtistDetail";
import AlbumDetail from "./album_components/AlbumDetail";
import AllPlaylist from "./playlist_components/AllPlaylist";

function App() {
  let login = useRef(window.localStorage.getItem("session"));
  let playlists = useState(window.localStorage.getItem("storage"));

  return (
    <div>
      <Nav login={login} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist" element={<Playlists />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/signin" element={<SignIn login={login} />} />
        <Route path="/signup" element={<SignUp login={login} />} />
        <Route path="/playlistitem" element={<PlaylistItem />} />
        <Route path="/allplaylist" element={<AllPlaylist />} />
        <Route path="/playlist/create_playlist" element={<CreatePlaylist />} />
        <Route path="/artists/:id" element={<ArtistDetail />} />
        <Route path="/albums/:id" element={<AlbumDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
