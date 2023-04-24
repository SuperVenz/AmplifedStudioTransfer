import React from "react";
import PortableText from "react-portable-text";
import styled from "styled-components";
import Portable from "../ultiltys/Portable";
import YoutubePlayer from "../ultiltys/YoutubePlayer";
import Button from "./Button";
const Wrapper = styled.div`
  display: flex;

  flex-flow: column nowrap;
  margin-top: 48px;
  @media screen and (min-width: 900px) {
    align-self: center;
    p,
    h1,
    h2,
    h3,
    h4,
    li {
      padding-left: 10%;
    }
  }
`;

const Title = styled.h3`
  width: 80%;
  @media screen and (min-width: 900px) {
    padding-left: 0px;
    margin-bottom: 0px;
  }
`;
const StyledButton = styled(Button)``;
function VideoArticle({ video, title, portable }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <YoutubePlayer video={video} isPortable="false" />
      <Portable content={portable} />
    </Wrapper>
  );
}

export default VideoArticle;
