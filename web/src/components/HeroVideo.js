import React from "react";
import styled from "styled-components";
import Portable from "./ultiltys/Portable";
const Wrapper = styled.div`
  /* Flex */
  display: flex;
  flex-flow: column nowrap;
  /* Positioning */
  justify-content: center;
  align-items: center;
  /* size */
  width: 100%;
`;
const Iframe = styled.iframe`
  /* Alignment */
  align-self: center;
  justify-self: center;
  /* Sizing */
  width: 100%;
  height: 300px;
  @media screen and (min-width: 900px) {
    width: 100%;
    height: 500px;
  }
  @media screen and (min-width: 1500px) {
    width: 100%;
    height: 750px;
  }
  margin-bottom: 16px;
`;
function HeroVideo({ content, video, ...props }) {
  return (
    <Wrapper>
      <Iframe
        src={video}
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
      <Portable content={content} />
    </Wrapper>
  );
}

export default HeroVideo;
