import React from "react";
import styled from "styled-components";
import ReactSoundcloud from "react-soundcloud-embed";
const Wrapper = styled.div``;
const CloudWrapper = styled.div`
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 16px;
  box-shadow: 5px 10px 5px black;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 900px) {
    margin: 32px 5%;
    box-shadow: none;
  }
`;
function Soundcloud({ video, title }) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <CloudWrapper>
        <ReactSoundcloud url={video} />
      </CloudWrapper>
    </Wrapper>
  );
}

export default Soundcloud;
