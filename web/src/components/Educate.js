import React from "react";
import styled from "styled-components";
import PicArticle from "./mutations/PicArticle";
import { useStaticQuery, graphql } from "gatsby";
import GearCarousel from "./GearCarousel";
const Wrapper = styled.div`
  @media screen and (min-width: 900px) {
    margin-bottom: 100px;
  }
`;

function Educate() {
  const data = useStaticQuery(graphql`
    {
      sanityIndex {
        educate {
          mainContent {
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
          statisticList {
            highlightText
            textContent
          }
          carouselTitle

          gearCarousel {
            bgPicture {
              picData {
                asset {
                  gatsbyImageData
                }
              }
              alt
            }
            callToAction {
              pageLink
              text
            }
            description
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <PicArticle
        image={
          data.sanityIndex.educate.mainContent.pic.picData.asset.gatsbyImageData
        }
        alt={data.sanityIndex.educate.mainContent.pic.alt}
        header={data.sanityIndex.educate.mainContent.content.header}
        text={data.sanityIndex.educate.mainContent.content.text}
        array={data.sanityIndex.educate.statisticList}
      />
      {/* Statistics Array */}
      {/* List Of Gears */}
      <h2>{data.sanityIndex.educate.carouselTitle}</h2>
      <GearCarousel slides={data.sanityIndex.educate.gearCarousel} />
    </Wrapper>
  );
}

export default Educate;
