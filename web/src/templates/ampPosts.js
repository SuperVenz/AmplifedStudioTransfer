import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import HeroVideo from "../components/HeroVideo";
import { GatsbyImage } from "gatsby-plugin-image";
const Wrapper = styled.div`
  margin-bottom: 250px;
`;
const ProfilePic = styled(GatsbyImage)`
  /* size */
  height: 50px;
  width: 50px;
  /* border */
  border-radius: 32px;

  /* Spacing */
  margin: 16px;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const ProfileLink = styled(Link)`
  /* Flex */
  text-decoration: none;

  /* Themeing */
  color: black;
`;
function ampPosts({ data }) {
  return (
    <Layout seo={data.sanityAmpPosts.seo}>
      <Wrapper>
        <HeroVideo
          video={data.sanityAmpPosts.content.video}
          content={data.sanityAmpPosts.content.textContent._rawPortableText}
        />
        <h2>{data.sanityAmpPosts.profileTitle}</h2>
        <div>
          {data.sanityAmpPosts.profileRefs.map((payload, i) => {
            return (
              <ProfileWrapper key={i}>
                <ProfileLink to={`/team/${payload.seo.slug.current}`}>
                  <ProfilePic
                    image={
                      payload.profileContent.pic.picData.asset.gatsbyImageData
                    }
                    alt={payload.profileContent.pic.alt}
                  />
                </ProfileLink>
                <ProfileLink to={`/team/${payload.seo.slug.current}`}>
                  <span>{payload.seo.pageTitle}</span>
                </ProfileLink>
              </ProfileWrapper>
            );
          })}
        </div>
      </Wrapper>
    </Layout>
  );
}
export const query = graphql`
  query ampPostsQuery($current: String!) {
    sanityAmpPosts(seo: { slug: { current: { eq: $current } } }) {
      content {
        textContent {
          _rawPortableText
        }
        title
        video
      }
      profileRefs {
        seo {
          pageTitle
          slug {
            current
          }
        }
        profileContent {
          pic {
            picData {
              asset {
                gatsbyImageData
              }
            }
            alt
          }
        }
      }
      seo {
        pageTitle
        description
        keywords
      }
      profileTitle
    }
  }
`;
export default ampPosts;
