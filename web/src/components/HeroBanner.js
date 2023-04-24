import React from "react";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// Styles
const Hero = styled(BackgroundImage)`
  /* Flex */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* Size */
  height: 92vh;
  /* Background */
  background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media screen and (min-width: 900px) {
    /* Size */
    height: 93vh;
  } ;
`;
const Header = styled.h1`
  /* color */
  color: ${(props) => props.theme.fontAltColor.hex};
  width: 80%;
  padding-left: 0%;
  @media screen and (min-width: 900px) {
    width: 40%;
  } ;
`;
const Text = styled.p`
  /* color */
  color: ${(props) => props.theme.fontAltColor.hex};
  padding-left: 0%;
  padding-right: 0%;
  width: 80%;
  @media screen and (min-width: 900px) {
    width: 40%;
  }
`;
const Button = styled(Link)`
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  /* Alignment */
  justify-content: center;
  align-items: center;
  text-align: center;
  /* Theme */
  background-color: ${(props) => props.theme.buttonMainColor.hex};

  color: ${(props) => props.theme.fontAltColor.hex};

  width: 250px;
  font-size: 25px;
  /* Boxing */
  margin-top: 70px;
  white-space: nowrap;
  padding-top: 12px;
  padding-bottom: 12px;
  /* Button Misc */
  cursor: pointer;
  text-decoration: none;
  /* Themeing */
  box-shadow: 10px 10px 5px black;
  @media screen and (min-width: 600px) {
    width: 40%;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  @media screen and (min-width: 900px) {
    width: 25%;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 8px;
  }
  @media screen and (min-width: 1500px) {
    width: 15%;
  }
  span {
    cursor: pointer;
    color: ${(props) => props.theme.fontAltColor.hex};
  }
`;
const ButtonArrow = styled(GatsbyImage)`
  /* Size */
  width: 11px;
  height: 18px;
  margin-left: 5%;
  margin-right: 8px;
`;

function HeroBanner() {
  const data = useStaticQuery(graphql`
    {
      sanityIndex {
        hero {
          content {
            text
            header
          }
          pic {
            alt
            picData {
              asset {
                gatsbyImageData
              }
            }
          }
          button {
            pageLink
            text
          }
        }
      }
      sanityWidgets {
        rightArrowMain {
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
  const heroBackground = convertToBgImage(
    data.sanityIndex.hero.pic.picData.asset.gatsbyImageData
  );
  return (
    <Hero
      {...heroBackground}
      preserveStackingContext
      alt={data.sanityIndex.hero.pic.alt}
      objectFit="contain"
    >
      <Header>{data.sanityIndex.hero.content.header}</Header>
      <Text>{data.sanityIndex.hero.content.text}</Text>
      <Button to="/contact">
        <span>{data.sanityIndex.hero.button.text}</span>
        <ButtonArrow
          image={
            data.sanityWidgets.rightArrowMain.picData.asset.gatsbyImageData
          }
          alt={data.sanityWidgets.rightArrowMain.alt}
        />
      </Button>
    </Hero>
  );
}

export default HeroBanner;
