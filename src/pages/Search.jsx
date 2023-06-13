import React from "react";
import { Container } from "react-bootstrap";
import SearchTracks from "../search_components/SeachTracks";
import SearchArtists from "../search_components/SearchArtists";

const Search = () => {
  return (
    <Container>
      {/* <SearchTracks /> */}
      <SearchArtists />
    </Container>
  );
};

export default Search;
