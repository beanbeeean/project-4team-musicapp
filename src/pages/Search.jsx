import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchTracks from "../search_components/SeachTracks";
import SearchArtists from "../search_components/SearchArtists";
import SearchAlbums from "../search_components/SearchAlbums";
import SearchMain from "../search_components/SearchMain";
import SearchNav from "../search_components/SearchNav";

const Search = () => {
  const [option, setOption] = useState(0);

  // useEffect(() => {
  //   console.log("token", window.localStorage.getItem("token"));
  // }, [option]);
  if (option == 0) {
    return (
      <Container>
        <SearchNav setOption={setOption} />
        <SearchMain />
      </Container>
    );
  } else if (option == 1) {
    return (
      <Container>
        <SearchNav setOption={setOption} />
        <SearchArtists />
      </Container>
    );
  } else if (option == 2) {
    return (
      <Container>
        <SearchNav setOption={setOption} />
        <SearchTracks />
      </Container>
    );
  } else if (option == 3) {
    return (
      <Container>
        <SearchNav setOption={setOption} />
        <SearchAlbums />
      </Container>
    );
  }
};

export default Search;
