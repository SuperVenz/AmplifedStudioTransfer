import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import PortablePic from "../components/mutations/PortablePic";
import { GatsbyImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  /* Flex */
  display: flex;
  flex-flow: column nowrap;
`;
const StyledSocial = styled(GatsbyImage)``;
const Title = styled.p`
  color: blue;
  width: 100%;
  margin-top: 32px;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
`;
const SocialContainer = styled.div`
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  /* Size */
  width: 75%;
  /* Alignment */
  align-self: center;
  justify-content: space-around;
  /*Boxing */
  padding-bottom: 32px;
  padding-top: 24px;
`;
function profiles({ data }) {
  return (
    <Layout seo={data.sanityProfilePage.seo}>
      <Wrapper>
        <PortablePic
          image={
            data.sanityProfilePage.profileContent.pic.picData.asset
              .gatsbyImageData
          }
          alt={data.sanityProfilePage.profileContent.pic.alt}
          portable={
            data.sanityProfilePage.profileContent.portableText._rawPortableText
          }
          isArticle={false}
        />

        {/* Social Media */}
        <Title>{data.sanityProfilePage.socialTitle}</Title>
        <SocialContainer>
          {data.sanityProfilePage.socialHandles.map((data, i) => {
            return (
              <a href={data.link} key={i}>
                <StyledSocial
                  objectFit="contain"
                  image={data.icon.picData.asset.gatsbyImageData}
                  alt={data.icon.alt}
                />
              </a>
            );
          })}
        </SocialContainer>
      </Wrapper>
    </Layout>
  );
}

export default profiles;
export const query = graphql`
  query MyQuery($current: String!) {
    sanityProfilePage(seo: { slug: { current: { eq: $current } } }) {
      seo {
        slug {
          current
        }
        pageTitle
        keywords
        description
      }
      profileContent {
        pic {
          _type
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
      socialHandles {
        text
        link
        icon {
          picData {
            asset {
              gatsbyImageData
            }
          }
          alt
        }
      }
      socialTitle
    }
  }
`;
