import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
const Wrapper = styled.div`
  background: black;
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  /* Size */
  width: 100%;
  height: 10vh;
  /* Boxing */

  /* Positioning */
  position: sticky;
  z-index: 50;
  top: 0px;
  // Theme
  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontAltColor.hex};
    font-size: 12px;
    padding: 2% 4%;
    font-weight: bold;
    @media screen and (min-width: 600px) {
      padding: 2% 4%;
    }
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 900px) {
    /* Size */
    display: none;
  } ;
`;
const Logo = styled(GatsbyImage)`
  /* Size */
  @media screen and (min-width: 600px) {
    width: 70%;
  }
`;
const MobileIcon = styled(GatsbyImage)`
  padding-right: 32px;
  z-index: 55;
  height: 25px;
  cursor: pointer;
`;
const NavBox = styled.div`
  display: ${(props) => (props.open ? "display" : "none")};
  /* Size */
  height: 100vh;
  width: 100vw;
  /* Position */
  position: absolute;
  top: 100%;
  z-index: 40;
  /* Themeing */
  background-color: rgba(1, 1, 1, 0.9);
  color: ${(props) => props.theme.fontAltColor.hex};
  /* Flex */
  /* Needs to be in div for navbox not to touch mobileIcon */
  div {
    display: flex;
    flex-flow: column nowrap;
  }
  a {
    margin-top: 24px;
    font-size: 18px;
    background-color: rgba(1, 1, 1, 0.1);
  }
`;
const StyledLink = styled(Link)`
  width: 40%;
  @media screen and (min-width: 900px) {
    width: 300px;
  }
`;
const Number = styled.a`
  background-color: ${(props) => props.theme.buttonMainColor.hex};
  white-space: nowrap;
`;
function Nav() {
  const [open, setOpen] = useState(false);

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
      sanityWidgets {
        mobileNavBarIcon {
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
      <StyledLink to="/">
        <div>
          <Logo
            loading="lazy"
            image={data.sanitySiteInfo.logo.picData.asset.gatsbyImageData}
            alt={data.sanitySiteInfo.logo.alt}
            objectFit="contain"
          />
        </div>
      </StyledLink>
      <>
        <Number href={`tel:${data.sanitySiteInfo.phoneNumber}`}>
          <span>{data.sanitySiteInfo.phoneNumber}</span>
        </Number>
        <div onClick={() => setOpen(!open)} onKeyDown={() => setOpen(!open)}>
          <>
            <MobileIcon
              loading="lazy"
              image={
                data.sanityWidgets.mobileNavBarIcon.picData.asset
                  .gatsbyImageData
              }
              alt={data.sanityWidgets.mobileNavBarIcon.alt}
              objectFit="contain"
            />
          </>
        </div>
      </>
      <NavBox open={open}>
        <div>
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
        </div>
      </NavBox>
    </Wrapper>
  );
}

export default Nav;
