import * as React from "react";
import styled from "styled-components";
import Educate from "../components/Educate";
import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import VideoArticle from "../components/mutations/VideoArticle";
import { graphql } from "gatsby";
import ServiceNav from "../components/ServiceNav";

const Wrapper = styled.main`
  @media screen and (min-width: 900px) {
  }
`;
// styles

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout seo={data.sanityIndex.seo}>
      <Wrapper>
        <HeroBanner />
        <Educate />
        <VideoArticle
          video={data.sanityIndex.videoContent.video}
          portable={data.sanityIndex.videoContent.textContent._rawPortableText}
          title={data.sanityIndex.videoContent.title}
        />
        <ServiceNav
          mainTitle={data.sanityIndex.serviceNav.serviceTitle}
          cardInfo={data.sanityIndex.serviceNav.services}
        />
      </Wrapper>
    </Layout>
  );
};
export const query = graphql`
  {
    sanityIndex {
      seo {
        pageTitle
        keywords
        description
      }
      videoContent {
        video
        title
        textContent {
          _rawPortableText
        }
      }
      serviceNav {
        serviceTitle
        services {
          button
          cardTitle
          description {
            text
            header
          }
          serviceRef {
            seo {
              slug {
                current
              }
            }
          }
        }
      }
      seo {
        pageTitle
        keywords
        description
      }
    }
  }
`;
export default IndexPage;
