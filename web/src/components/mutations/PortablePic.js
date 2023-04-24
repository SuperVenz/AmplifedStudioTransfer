import React, { Children } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useState } from "react";
import Portable from "../ultiltys/Portable";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media screen and (min-width: 900px) {
    flex-flow: ${(props) =>
      props.margin === "true" ? "row nowrap" : "column wrap"};

    align-self: center;
    p,
    h1,
    h2,
    h3,
    h4,
    li {
      padding-left: 5%;
    }
    margin-top: 48px;
    padding-left: 32px;
  }
`;
const PortContainer = styled.div`
  padding-top: 16px;
  @media screen and (min-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin-left: ${(props) => (props.margin === "true" ? "0px" : "0px")};
    width: ${(props) => (props.margin === "true" ? "100%" : "80%")};
    align-self: ${(props) =>
      props.margin === "true" ? "flex-start" : "center"};
    padding-top: ${(props) => (props.margin === "true" ? "0px" : "auto")};
    height: ${(props) => (props.margin === "true" ? "500px" : "auto")};
  }
`;
const Pic = styled(GatsbyImage)`
  align-self: center;
  box-shadow: ${(props) =>
    props.margin === "true" ? "5px 10px 5px black" : "null"};
  width: ${(props) => (props.margin === "true" ? "90%" : "100%")};

  @media screen and (min-width: 600px) {
    height: 500px;
  }
  @media screen and (min-width: 900px) {
    width: ${(props) => (props.margin === "true" ? "100%" : "80%")};
    height: ${(props) => (props.margin === "true" ? "500px" : "700px")};
  }
`;

function PortablePic({ image, alt, portable, isReverse, isArticle, children }) {
  const [margin, setMargin] = useState(isArticle.toString());

  return (
    <Wrapper
      className="portablePic"
      isReverse={isReverse ?? ""}
      margin={margin}
    >
      <Pic image={image} alt={alt} margin={margin} />
      <PortContainer margin={margin}>
        <Portable content={portable} />
        {children}
      </PortContainer>
    </Wrapper>
  );
}

export default PortablePic;
