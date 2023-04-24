import React, { useState } from "react";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
const Wrapper = styled(BackgroundImage)`
  /* Flex */
  display: flex;
  flex-flow: column nowrap;
  /* Alignment */
  justify-content: space-between;
  align-items: center;
  /* boxing */
  height: 250px;
  padding-top: 16px;
  /* Themeing */
  color: ${(props) => props.theme.fontAltColor.hex};
  background-color: rgba(0, 0, 0, 0.5);
  /* Text */
  p {
    width: 80%;
    font-size: 12px;
    @media screen and (min-width: 600px) {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 600px) {
    /* Sizing */
    width: ${(props) => (props.isLastComponent === "true" ? "100%" : "50%")};
  }
  @media screen and (min-width: 900px) {
    height: 300px;
  }
  @media screen and (min-width: 1300px) {
    height: 400px;
  }
`;
const Row = styled.div`
  /* flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  /* Sizing */
  width: 100%;
  a,
  h4 {
    color: ${(props) => props.theme.fontAltColor.hex};
    text-decoration: none;
  }
`;
const Arrow = styled(GatsbyImage)`
  /* Size */
  width: 24px;
  height: 24px;
`;
function AboutCard({ text, name, image, alt, link, isLast }) {
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
      }
    }
  `);
  const heroBackground = convertToBgImage(image);
  const [isLastOne, setIsLastOne] = useState(isLast.toString());

  return (
    <Wrapper
      isLastComponent={isLastOne}
      loading="eager"
      {...heroBackground}
      preserveStackingContext
      alt={alt}
      objectFit="contain"
    >
      <p>{text}</p>
      <Row>
        <Link to={`/team/${link}`}>
          <h4>{name}</h4>
        </Link>
        <Link to={`/team/${link}`}>
          <>
            <Arrow
              image={
                data.sanityWidgets.rightArrowMain.picData.asset.gatsbyImageData
              }
              alt={data.sanityWidgets.rightArrowMain}
            />
          </>
        </Link>
      </Row>
    </Wrapper>
  );
}

export default AboutCard;
