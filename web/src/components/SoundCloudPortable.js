import React from "react";
import Soundcloud from "./ultiltys/Soundcloud";
import Portable from "./ultiltys/Portable";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 48px;
  @media screen and (min-width: 900px) {
    border: black solid 1px;
    padding-bottom: 32px;
    width: 31%;
    align-self: space-around;
    box-shadow: 5px 10px 5px black;

    p,
    h1,
    h2,
    h3,
    h4,
    li {
    }
  }
`;

function SoundCloudPortable({ video, title, content }) {
  return (
    <Wrapper>
      <Soundcloud video={video} title={title} />
      <Portable content={content} />
    </Wrapper>
  );
}

export default SoundCloudPortable;
