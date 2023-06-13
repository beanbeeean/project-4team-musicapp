import React from "react";

const Test = () => {
  const CLIENT_ID = "e27a41062e2a4ed8839eb8c8ded5e793";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div>
      <h1>Spodsakdnaskd</h1>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login
      </a>
    </div>
  );
};

export default Test;
