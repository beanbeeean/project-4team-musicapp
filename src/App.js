import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./NavComponents/Nav";
import Footer from "./home_components/Footer";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Playlists from "./playlist_components/Playlists";
import Sign from "./pages/Sign";
import PlaylistItem from "./playlist_components/PlaylistItem";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist" element={<Playlists />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/playlistitem" element={<PlaylistItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
