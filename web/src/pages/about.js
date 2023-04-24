import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import PortablePic from "../components/mutations/PortablePic";
import { graphql } from "gatsby";
import AboutCard from "../components/mutations/AboutCard";

const Wrapper = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;
const Title = styled.h2`
  margin-top: 16px;
  @media screen and (min-width: 600px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 900px) {
    margin-top: 48px;
    width: 80%;
    align-self: center;
  }
`;
const AboutFlex = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
    justify-content: space-around;
  }
  @media screen and (min-width: 900px) {
    width: 80%;
    align-self: center;
  }
`;
function about({ data }) {
  let totalPeople = Number(data.sanityAbout.aboutCards.length - 1);
  let IsOddOrEven = oddOrEven(totalPeople);
  function oddOrEven(x) {
    return x & 1 ? "odd" : "even";
  }
  return (
    <Layout seo={data.sanityAbout.seo}>
      <Wrapper>
        <PortablePic
          image={
            data.sanityAbout.aboutContent.pic.picData.asset.gatsbyImageData
          }
          alt={data.sanityAbout.aboutContent.pic.alt}
          portable={data.sanityAbout.aboutContent.portableText._rawPortableText}
          isArticle={false}
        ></PortablePic>
        <Title>{data.sanityAbout.cardListTitle}</Title>
        <AboutFlex>
          {data.sanityAbout.aboutCards.map((payload, i) => {
            if (i === totalPeople && oddOrEven === "odd") {
              return (
                <AboutCard
                  key={i}
                  text={payload.content.content.text}
                  name={payload.content.content.header}
                  image={payload.content.pic.picData.asset.gatsbyImageData}
                  alt={payload.content.pic.alt}
                  link={payload.profileReference.seo.slug.current}
                  isLast={true}
                ></AboutCard>
              );
            }
            return (
              <>
                <AboutCard
                  key={i}
                  text={payload.content.content.text}
                  name={payload.content.content.header}
                  image={payload.content.pic.picData.asset.gatsbyImageData}
                  alt={payload.content.pic.alt}
                  link={payload.profileReference.seo.slug.current}
                  isLast={false}
                />
              </>
            );
          })}
        </AboutFlex>
      </Wrapper>
    </Layout>
  );
}
export const query = graphql`
  {
    sanityAbout {
      aboutContent {
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
      cardListTitle
      aboutCards {
        content {
          content {
            header
            text
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
        profileReference {
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

export default about;
