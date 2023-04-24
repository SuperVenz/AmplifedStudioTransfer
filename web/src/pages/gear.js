import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import Portable from "../components/ultiltys/Portable";
import PortablePic from "../components/mutations/PortablePic";
const Wrapper = styled.div`
  /* flex */
  display: flex;
  flex-flow: column nowrap;
  @media screen and (min-width: 900px) {
    .portablePic:nth-child(2n) {
      flex-flow: row-reverse nowrap;
      padding-right: 32px;
    }
  }
`;
const StyledPic = styled(GatsbyImage)`
  margin-bottom: 16px;
  @media screen and (min-width: 600px) {
    height: 500px;
  }
`;
function gear({ data }) {
  return (
    <Layout seo={data.sanityGearPage.seo}>
      <StyledPic
        image={data.sanityGearPage.heroPic.picData.asset.gatsbyImageData}
        alt={data.sanityGearPage.heroPic.alt}
      />
      <Wrapper>
        {data.sanityGearPage.gearCatagories.map((payload, i) => {
          return (
            <PortablePic
              image={payload.pic.picData.asset.gatsbyImageData}
              alt={payload.pic.alt}
              portable={payload.portableText._rawPortableText}
              isArticle={true}
            />
          );
        })}
      </Wrapper>
    </Layout>
  );
}
export const query = graphql`
  {
    sanityGearPage {
      seo {
        description
        pageTitle
        keywords
      }
      gearCatagories {
        pic {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
        portableText {
          _rawPortableText
        }
      }
      seo {
        pageTitle
        keywords
        description
      }
      heroPic {
        alt
        picData {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default gear;
