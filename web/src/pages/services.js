import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import ServiceNav from "../components/ServiceNav";
function services({ data }) {
  return (
    <Layout seo={data.sanityGeneralServices.seo}>
      <ServiceNav
        mainTitle={data.sanityGeneralServices.serviceTitle}
        cardInfo={data.sanityGeneralServices.services}
      />
    </Layout>
  );
}
export const query = graphql`
  {
    sanityGeneralServices {
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
        pageTitle
        keywords
        description
      }
    }
  }
`;
export default services;
