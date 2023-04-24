import React from "react";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
// Styles
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 200px;

  @media screen and (min-width: 600px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 250px;
  }
  @media screen and (min-width: 1500px) {
    width: 20vw;
  }
`;
const Overlay = styled.div`
  /* Flex */
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to bottom right,
    rgba(19, 19, 19, 0.7) 100%,
    rgba(73, 73, 73, 1) 100%
  );
  opacity: 0.7;
  cursor: grab;
  /* Themeing */
  box-shadow: 10px 10px 5px black;
`;
const CardWrapper = styled(BackgroundImage)`
  /* Size */
  width: 200px;
  height: 400px;
  /* Padding */
  margin-bottom: 24px;

  /* Text Alignment */
  p {
    text-align: center;
    color: ${(props) => props.theme.fontAltColor.hex};
    padding-right: 8px;
    z-index: 30;
    @media screen and (min-width: 600px) {
      padding: 0px 24px;
    }
  }
  @media screen and (min-width: 600px) {
    width: 250px;
  }
  @media screen and (min-width: 1500px) {
    width: 20vw;
    height: 600px;
  }
`;
const Button = styled(Link)`
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  border: ${(props) => `solid ${props.theme.buttonMainColor.hex} 1px`};
  border-radius: 4px;
  font-size: 18px;
  text-decoration: none;
  color: ${(props) => props.theme.buttonMainColor.hex};
  /* Size */
  padding: 16px 0px;
  /* Pos */
  align-items: center;
  justify-content: space-around;
  /* Themeing */
  box-shadow: 5px 10px 5px black;
  width: 100%;
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
  @media screen and (min-width: 900px) {
    width: 70%;
    font-size: 24px;
    align-self: center;
  }
  @media screen and (min-width: 1500px) {
  }
`;
const ButtonArrow = styled(GatsbyImage)`
  /* Size & Boxing */
  width: 12px;
  margin-top: 4px;
  margin-left: 24px;
`;
function GearCard({ image, alt, content, button, link }) {
  const heroBackground = convertToBgImage(image);
  const data = useStaticQuery(graphql`
    {
      sanityWidgets {
        gearCarouselArrow {
          picData {
            asset {
              gatsbyImageData
            }
          }
          alt
        }
      }
    }
  `);
  return (
    <Wrapper>
      <CardWrapper
        loading="eager"
        {...heroBackground}
        preserveStackingContext
        alt={alt}
      >
        <Overlay>
          <p>{content}</p>
        </Overlay>
      </CardWrapper>
      {/* Button Outside of background */}
      <Button to={link}>
        {button}
        <ButtonArrow
          image={
            data.sanityWidgets.gearCarouselArrow.picData.asset.gatsbyImageData
          }
          alt={data.sanityWidgets.gearCarouselArrow.alt}
        />
      </Button>
    </Wrapper>
  );
}
export default GearCard;
