import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import HighlightText from "./HighlightText";

const Wrapper = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 100px;
    margin-top: 50px;
    p,
    h1,
    h2,
    h3,
    h4 {
      padding-left: 0px;
    }
  }
`;
const Pic = styled(GatsbyImage)`
  margin: 16px;
  box-shadow: 10px 10px 5px black;
  @media screen and (min-width: 600px) {
    height: 400px;
  }
  @media screen and (min-width: 900px) {
    margin: 0px 50px;
    height: 700px;
    width: 100%;
  }
  @media screen and (min-width: 1500px) {
    height: 800px;
  }
`;
const Row = styled.div`
  @media screen and (min-width: 900px) {
    width: 90%;
  }
`;
function PicArticle({ image, alt, header, text, array }) {
  return (
    <Wrapper>
      <Pic image={image} alt={alt} />
      <Row>
        <h2>{header}</h2>
        <p>{text}</p>
        <HighlightText array={array} />
      </Row>
    </Wrapper>
  );
}

export default PicArticle;
