import React from "react";
import { Container } from "react-bootstrap";
import SearchTracks from "../search_components/SeachTracks";
import SearchArtists from "../search_components/SearchArtists";
import SeachAlbums from "../search_components/SeachAlbums";
import SearchMain from "../search_components/SearchMain";
import SearchNav from "../search_components/SearchNav";

const Search = () => {
  return (
    <Container>
      {/* <SearchTracks /> */}
      <SearchNav />
      <SeachAlbums />
      <SearchArtists />
      <SearchMain />
    </Container>
  );
};

export default Search;
