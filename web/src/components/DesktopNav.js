import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    /* Size */
    /* Flex */
    display: flex;
    background-color: ${(props) => props.theme.navBarColor.hex};
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    /* Positioning */
    position: sticky;
    z-index: 50;
    top: 0px;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.fontAltColor.hex};
      font-size: 18px;
      @media screen and (min-width: 900px) {
        font-size: 22px;
      }
    }
  }
`;
const StyledLink = styled(Link)``;
const Logo = styled(GatsbyImage)`
  height: 75px;
  width: 150px;
`;
const Number = styled.a`
  background-color: ${(props) => props.theme.buttonMainColor.hex};
  padding: 15px 10px;
  border-radius: 30px;
`;
function DesktopNav(props) {
  const data = useStaticQuery(graphql`
    {
      sanitySiteInfo {
        phoneNumber
        logo {
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
      <Link activeStyle={{ color: "#ffd75f" }} to="/">
        Home
      </Link>
      <Link activeStyle={{ color: "#ffd75f" }} to="/artist-development">
        Artist Development
      </Link>
      <Link activeStyle={{ color: "#ffd75f" }} to="/services">
        Music Production
      </Link>
      <Link activeStyle={{ color: "#ffd75f" }} to="/services/lessons">
        Lessons
      </Link>
      <StyledLink to="/">
        <Logo
          image={data.sanitySiteInfo.logo.picData.asset.gatsbyImageData}
          alt={data.sanitySiteInfo.logo.alt}
          objectFit="contain"
        />
      </StyledLink>

      <Link activeStyle={{ color: "#ffd75f" }} to="/about">
        About Us
      </Link>
      <Link activeStyle={{ color: "#ffd75f" }} to="/gallery">
        Gallery
      </Link>

      <Link activeStyle={{ color: "#ffd75f" }} to="/gear">
        Gear
      </Link>
      <Link activeStyle={{ color: "#ffd75f" }} to="/portfolio">
        Portfolio
      </Link>

      <Number href={`tel:${data.sanitySiteInfo.phoneNumber}`}>
        {data.sanitySiteInfo.phoneNumber}
      </Number>
    </Wrapper>
  );
}

export default DesktopNav;
