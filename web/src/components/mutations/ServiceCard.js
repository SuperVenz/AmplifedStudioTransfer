import React, { useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Button from "./Button";

const Wrapper = styled.div`
  /* Flex */
  display: flex;
  flex-flow: column nowrap;
  margin: 16px;

  @media screen and (min-width: 900px) {
    flex-flow: row nowrap;
  }
`;
const Label = styled.div`
  /* Flex */
  display: flex;
  position: static;
  flex-flow: row nowrap;
  /* Alignments */
  justify-content: space-between;
  align-items: center;
  /* Paddings */
  /* Size */
  height: 85px;
  width: 100%;
  /* Border */
  border: ${(props) =>
    props.open
      ? `solid ${props.theme.buttonMainColor.hex} 1px`
      : `solid ${props.theme.borderMainColor.hex}`};
  border-radius: 8px;
  /* Colors */
  background-color: ${(props) =>
    props.open
      ? props.theme.buttonMainColor.hex
      : props.theme.backgroundMainColor.hex};
  cursor: pointer;

  h3 {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* No
    /* Size */
    font-size: 24px;
    cursor: pointer;
    margin: 0px;
    padding-left: 16px;
    @media screen and (min-width: 900px) {
      padding-left: 0px;
      text-align: center;
      width: 100%;
    }
    /* Color */
    color: ${(props) =>
      props.open
        ? props.theme.fontAltColor.hex
        : props.theme.fontMainColor.hex};
  }

  @media screen and (min-width: 600px) {
    /* Size */
    width: 97%;
  }
  @media screen and (min-width: 900px) {
    /* Size */
    width: ${(props) => (props.open ? "44%" : "40%")};
  }
`;
// Arrow UI
const StyledImage = styled(GatsbyImage)`
  width: 16px;
  height: 24px;
  margin-right: 16px;
  display: flex;
`;
const StyledImageActive = styled(GatsbyImage)`
  width: 16px;
  height: 24px;
  margin-right: 16px;
  display: flex;
  transform: rotate(90deg);
`;

// PopUp Box

function ServiceCard({ title, activeIndex, index, onClick, open }) {
  const data = useStaticQuery(graphql`
    {
      sanityWidgets {
        rightArrowMain {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
        rightArrowAlt {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  function HandleClick(i) {
    onClick(i);
  }

  return (
    <Wrapper>
      <Label
        open={open}
        onClick={() => {
          HandleClick(index);
        }}
      >
        <h3>{title}</h3>
        {open ? (
          <StyledImageActive
            image={
              data.sanityWidgets.rightArrowMain.picData.asset.gatsbyImageData
            }
            alt={data.sanityWidgets.rightArrowMain.alt}
          />
        ) : (
          <StyledImage
            image={
              data.sanityWidgets.rightArrowAlt.picData.asset.gatsbyImageData
            }
            alt={data.sanityWidgets.rightArrowAlt.alt}
          />
        )}
      </Label>
    </Wrapper>
  );
}

export default ServiceCard;
