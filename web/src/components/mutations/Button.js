import React, { Children } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const FlexParent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Wrapper = styled(Link)`
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  /* Alignment */
  justify-content: center;
  align-items: center;
  /* margin and padding */
  padding-left: 8px;
  margin-top: 10%;
  margin-bottom: 15%;
  /* Size */
  width: 60%;
  height: 70px;
  /* Border */
  border-radius: 3px;
  /* Theming */
  text-decoration: none;
  color: ${(props) => props.theme.fontAltColor.hex};
  background-color: ${(props) => props.theme.buttonMainColor.hex};
  box-shadow: 5px 10px 5px black;

  @media screen and (min-width: 600px) {
    margin-top: 5%;
    margin-bottom: 5%;
    width: 33%;
  }
  @media screen and (min-width: 900px) {
    width: 200px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  @media screen and (min-width: 1500px) {
    width: 250px;
  }
  span {
    font-size: 20px;
    padding: 0px;
    margin: 0px;
    width: 100%;
    text-align: center;
  }
`;
const ButtonArrow = styled(GatsbyImage)`
  /* Size & Boxing */

  width: 18px;
  height: 18px;
  margin-left: 5%;
  margin-right: 15%;
`;

function Button({ to, children }) {
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
  return (
    <FlexParent>
      <Wrapper to={to}>
        <span>{children} </span>
        <ButtonArrow
          objectFit="contain"
          image={
            data.sanityWidgets.rightArrowMain.picData.asset.gatsbyImageData
          }
          alt={data.sanityWidgets.rightArrowMain.alt}
        />
      </Wrapper>
    </FlexParent>
  );
}

export default Button;
