import React from "react";
import styled from "styled-components";
import PortablePic from "../components/mutations/PortablePic";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Button from "../components/mutations/Button";

const Wrapper = styled.div``;
function rooms({ data }) {
  return (
    <Layout seo={data.sanityRooms.seo}>
      <Wrapper>
        <h1>{data.sanityRooms.header}</h1>
        {data.sanityRooms.rooms.map((payload, i) => {
          return (
            <div key={i}>
              <PortablePic
                image={payload.content.pic.picData.asset.gatsbyImageData}
                isArticle={true}
                alt={payload.content.pic.alt}
                portable={payload.content.portableText._rawPortableText}
              >
                <Button to={`${payload.rooms.seo.slug.current}`}>
                  {payload.buttonTitle}
                </Button>
              </PortablePic>
            </div>
          );
        })}
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  {
    sanityRooms {
      rooms {
        rooms {
          seo {
            slug {
              current
            }
          }
        }
        buttonTitle
        content {
          pic {
            picData {
              asset {
                gatsbyImageData
              }
            }
            alt
          }
          portableText {
            _rawPortableText
          }
        }
      }
      header
      seo {
        pageTitle
        keywords
        description
      }
    }
  }
`;

export default rooms;
