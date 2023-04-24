import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import PortablePic from "../components/mutations/PortablePic";

function contact({ data }) {
  return (
    <Layout seo={data.sanityContact.seo}>
      <PortablePic
        image={
          data.sanityContact.contactContent.pic.picData.asset.gatsbyImageData
        }
        alt={data.sanityContact.contactContent.pic.alt}
        isArticle={false}
        portable={
          data.sanityContact.contactContent.portableText._rawPortableText
        }
      />
    </Layout>
  );
}

export default contact;
export const query = graphql`
  {
    sanityContact {
      seo {
        pageTitle
        keywords
        description
      }
      contactContent {
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
