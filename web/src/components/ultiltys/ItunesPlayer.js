import React from "react";
import styled from "styled-components";
import Spotify from "react-spotify-embed";
import Portable from "./Portable";
const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  align-self: center;
  p,
  h1,
  h2,
  h3 {
    padding-left: 0px;
  }
  @media screen and (min-width: 900px) {
    width: 80%;
    align-self: none;
  }
`;
const Itunes = styled.iframe`
  height: 400px;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 900px) {
    height: 450px;
  }
`;
function ItunesPlayer({ link, portable, title }) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <Itunes loading="lazy" title={title} src={link} />
      <Portable content={portable} />
    </Wrapper>
  );
}

export default ItunesPlayer;
