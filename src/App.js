import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./NavComponents/Nav";
import Footer from "./home_components/Footer";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import SearchArtists from "./search_components/SearchArtists";
import SeachAlbums from "./search_components/SearchAlbums";
import SearchTracks from "./search_components/SeachTracks";
import SearchMain from "./search_components/SearchMain";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/search" element={<SearchMain />} /> */}
        {/* <Route path="/search/artists" element={<SearchArtists />} />
        <Route path="/search/albums" element={<SeachAlbums />} />
        <Route path="/search/tracks" element={<SearchTracks />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
