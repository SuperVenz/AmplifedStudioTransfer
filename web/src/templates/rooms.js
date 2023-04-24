import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PortablePic from "../components/mutations/PortablePic";
function rooms({ data }) {
  return (
    <Layout seo={data.sanityRoomsPosts.seo}>
      <PortablePic
        image={data.sanityRoomsPosts.content.pic.picData.asset.gatsbyImageData}
        alt={data.sanityRoomsPosts.content.pic.alt}
        portable={data.sanityRoomsPosts.content.portableText._rawPortableText}
        isArticle={false}
      />
    </Layout>
  );
}

export const query = graphql`
  query Query($current: String!) {
    sanityRoomsPosts(seo: { slug: { current: { eq: $current } } }) {
      seo {
        slug {
          current
        }
        pageTitle
        keywords
        description
      }
      content {
        portableText {
          _rawPortableText
        }
        pic {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
export default rooms;
