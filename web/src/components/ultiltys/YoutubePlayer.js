import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* Flex */
  display: flex;
  justify-content: center;
  align-items: center;
  /* size */
  width: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  margin: 24px 16px;
  width: ${(props) => (props.isPortable == "true" ? "24px 16px" : "0px 24px")};
  aspect-ratio: 1.75;
  /* Alignment */
  align-self: center;
  justify-self: center;
  border-radius: 12px;
  /* Sizing */
  margin-bottom: 16px;
  box-shadow: 5px 10px 5px black;
  @media screen and (min-width: 600px) {
    aspect-ratio: 2;
  }
  @media screen and (min-width: 900px) {
    width: ${(props) => (props.isPortable == "true" ? "90%" : "80%")};
    margin-bottom: 32px;
    margin-top: 32px;
    height: 450px;
  }
  @media screen and (min-width: 1500px) {
    height: 600px;
  }
`;
const YoutubePlayer = ({ video, isPortable, title, ...props }) => {
  const [portable, setPortable] = useState(isPortable.toString());
  return (
    <Wrapper>
      <Iframe
        src={video}
        isPortable={portable}
        loading="lazy"
        title={title}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </Wrapper>
  );
};

export default YoutubePlayer;
