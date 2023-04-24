import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { graphql } from "gatsby";
import VideoArticle from "../components/mutations/VideoArticle";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const StyledSwiper = styled(Swiper)`
  /* Boxing */
  margin-bottom: 16px;
`;
const GalleryWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-self: center;
  width: 92%;
`;
const Pic = styled(GatsbyImage)`
  cursor: grab;
  width: 33%;
  :nth-child(4n) {
    width: 66%;
  }
  :nth-child(6n) {
    width: 33%;
  }
  :nth-child(7n) {
    width: 66%;
  }
  @media screen and (min-width: 600px) {
    height: 350px;
  }
`;

function gallery({ data }) {
  return (
    <Layout seo={data.sanityGallery.seo}>
      <Wrapper>
        <h1>{data.sanityGallery.title}</h1>
        <GalleryWrapper>
          {data.sanityGallery.mainCarousel.map((payload, i) => {
            return (
              <Pic
                image={payload.picData.asset.gatsbyImageData}
                alt={payload.alt}
                objectFit="cover"
                className="pic"
              />
            );
          })}
        </GalleryWrapper>

        {data.sanityGallery.videoList.map((payload, i) => {
          return (
            <VideoArticle
              key={i}
              title={payload.title}
              video={payload.video}
              portable={payload.textContent._rawPortableText}
            />
          );
        })}
      </Wrapper>
    </Layout>
  );
}
export const query = graphql`
  {
    sanityGallery {
      mainCarousel {
        alt
        picData {
          asset {
            gatsbyImageData
          }
        }
      }
      altCarousel {
        alt
        picData {
          asset {
            gatsbyImageData
          }
        }
      }
      videoList {
        video
        title
        textContent {
          _rawPortableText
        }
      }
      title
      seo {
        pageTitle
        keywords
        description
      }
    }
  }
`;
export default gallery;
