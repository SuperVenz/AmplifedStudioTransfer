import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import PortablePic from "../components/mutations/PortablePic";

const Wrapper = styled.div``;
function services({ data }) {
  return (
    <Layout seo={data.sanityServicePage.seo}>
      <Wrapper>
        <PortablePic
          image={
            data.sanityServicePage.mainContent.pic.picData.asset.gatsbyImageData
          }
          alt={data.sanityServicePage.mainContent.pic.alt}
          portable={
            data.sanityServicePage.mainContent.portableText._rawPortableText
          }
          isArticle={false}
        />
      </Wrapper>
    </Layout>
  );
}
export const query = graphql`
  query ServiceQuery($current: String!) {
    sanityServicePage(seo: { slug: { current: { eq: $current } } }) {
      seo {
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
export default services;
