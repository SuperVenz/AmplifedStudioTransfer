import React from "react";
import Reset from "../style/Reset";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import Nav from "./Nav";
import Footer from "./Footer";
import { useStaticQuery, graphql } from "gatsby";
import DesktopNav from "./DesktopNav";
const Wrapper = styled.div``;

const Css = createGlobalStyle`
body
  {
  color: ${(props) => props.theme.fontMainColor.hex};
  font-family:"Abel";
}


h1,h2,h3,h4
{
  color: ${(props) => props.theme.fontHeaderColor.hex}; 
  margin-top: 18px;
    margin-bottom:18px;
    font-family:"Typewriter Serial";
    font-weight:bold ;
    padding-left:16px;
    padding-right:16px;

    
  @media screen and (min-width: 600px) {
    padding-left:32px;
  }
    @media screen and (min-width: 900px) {
    }

}

h1
{
    font-size:32px;
  }
   h2 
   {
     /* Size */
    font-size:28px;
  }
  
  h3
  {
    font-size:24px;
  }
  h4
  {
    font-size:20px ;
  }

span,a{
    font-family: "Open Sans Condensed";

  }
  
  p,li,ol,ul
  {
    padding-left:16px;
    line-height:35px;
    width:90%;
    @media screen and (min-width: 600px) {
      padding-left:32px;
    font-size:18px ;
  }
  @media screen and (min-width: 900px) {
    font-size:20px;
  }
  @media screen and (min-width: 1500px) {
      line-height:40px;
    }
}
  `;
function Layout({ children, seo }) {
  const data = useStaticQuery(graphql`
    {
      sanityWidgets {
        socialOg {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
      }
      sanitySiteInfo {
        cannonicalLink
      }
      sanityThemes {
        borderMainColor {
          hex
          alpha
        }
        buttonMainColor {
          hex
          alpha
        }
        fontAltColor {
          hex
          alpha
        }
        fontHeaderColor {
          alpha
          hex
        }
        fontMainColor {
          alpha
          hex
        }
        navBarColor {
          hex
          alpha
        }
        backgroundMainColor {
          hex
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Helmet>
        <meta
          name="image"
          content={data.sanityWidgets.socialOg.picData.asset.gatsbyImageData}
        />
        <meta
          property="og:image"
          content={data.sanityWidgets.socialOg.picData.asset.gatsbyImageData}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={data.sanityWidgets.socialOg.picData.asset.gatsbyImageData}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.sanitySiteInfo.cannonicalLink} />
        <meta charSet="utf-8" />
        <meta lang="en" />
        <title>Amp Studio | {seo.pageTitle}</title>
        <link rel="canonical" href={data.sanityWidgets.cannonicalLink} />
        <meta name="keywords" content={seo.keywords.join(",")} />
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <meta name="author" content="Alec Venzor" />
        <base target="_ self" href={data.sanitySiteInfo.cannonicalLink} />
        <meta name="description" content={seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Reset />
      <ThemeProvider theme={data.sanityThemes}>
        <Css />
        <DesktopNav />
        <Nav />
        {children}
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
}

export default Layout;
