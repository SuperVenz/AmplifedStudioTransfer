import React from "react";
import { graphql } from "gatsby";
import PortablePic from "../components/mutations/PortablePic";
import Layout from "../components/Layout";

function thankyou({ data }) {
  return (
    <Layout seo={data.sanityThankyou.seo}>
      <PortablePic
        image={
          data.sanityThankyou.mainContent.pic.picData.asset.gatsbyImageData
        }
        alt={data.sanityThankyou.mainContent.pic.alt}
        isArticle={true}
        portable={data.sanityThankyou.mainContent.portableText._rawPortableText}
      />
    </Layout>
  );
}

export const query = graphql`
  {
    sanityThankyou {
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
      seo {
        keywords
        description
        pageTitle
      }
    }
  }
`;
export default thankyou;
