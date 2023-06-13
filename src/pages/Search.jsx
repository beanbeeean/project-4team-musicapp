import React from "react";
import { Container } from "react-bootstrap";
import SearchTracks from "../search_components/SeachTracks";
import SearchArtists from "../search_components/SearchArtists";
import SearchMain from "../search_components/SearchMain";
const Search = () => {
  return (
    <Container>
      <SearchMain />
      <SearchArtists />
      <SearchTracks />
    </Container>
  );
};

export default Search;
