import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PortablePic from "../components/mutations/PortablePic";
import ServiceNav from "../components/ServiceNav";
import styled from "styled-components";
const ServiceWrapper = styled.div`
  margin-top: 40px;
`;
function ArtistDevelopment({ data }) {
  return (
    <Layout seo={data.sanityArtistDevelopment.seo}>
      <PortablePic
        image={
          data.sanityArtistDevelopment.mainContent.pic.picData.asset
            .gatsbyImageData
        }
        alt={data.sanityArtistDevelopment.mainContent.pic.alt}
        portable={
          data.sanityArtistDevelopment.mainContent.portableText._rawPortableText
        }
        isArticle={false}
      />
      <ServiceWrapper>
        <ServiceNav
          mainTitle={data.sanityArtistDevelopment.serviceTitle}
          cardInfo={data.sanityArtistDevelopment.services}
        />
      </ServiceWrapper>
    </Layout>
  );
}

export const query = graphql`
  {
    sanityArtistDevelopment {
      serviceTitle
      services {
        button
        cardTitle
        description {
          header
          text
        }
        serviceRef {
          seo {
            slug {
              current
            }
          }
        }
      }
      seo {
        slug {
          current
        }
        pageTitle
        keywords
        description
      }
      mainContent {
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
    }
  }
`;
export default ArtistDevelopment;
