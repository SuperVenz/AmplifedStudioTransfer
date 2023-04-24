import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import VideoArticle from "../components/mutations/VideoArticle";
import Button from "../components/mutations/Button";
import SoundCloudPortable from "../components/SoundCloudPortable";
import ItunesPlayer from "../components/ultiltys/ItunesPlayer";
const Wrapper = styled.div`
  /* Flex */
`;

const Title = styled.h1`
  padding-top: 16px;
  padding-bottom: 0px;
  text-align: center;
  @media screen and (min-width: 900px) {
  }
`;

const VideoFlex = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media screen and (min-width: 900px) {
    justify-content: space-around;
    flex-flow: row wrap;
    margin-bottom: 100px;
  }
`;
function portfolio({ data }) {
  return (
    <Layout seo={data.sanityGeneralAmp.seo}>
      <Wrapper>
        <Title>{data.sanityGeneralAmp.headerMain}</Title>
        <VideoFlex>
          {data.sanityGeneralAmp.mainCarousel.map((payload, i) => {
            return (
              <SoundCloudPortable
                key={i}
                title={payload.title}
                video={payload.uri}
                content={payload.portableText._rawPortableText}
              />
            );
          })}
        </VideoFlex>
        <Title>{data.sanityGeneralAmp.finalHeader}</Title>
        <VideoFlex>
          {data.sanityGeneralAmp.finalCarousel.map((payload, i) => {
            return (
              <ItunesPlayer
                key={i}
                title={payload.title}
                link={payload.uri}
                portable={payload.portableText._rawPortableText}
              />
            );
          })}
        </VideoFlex>
        <Title>{data.sanityGeneralAmp.middleHeader}</Title>
        {data.sanityGeneralAmp.middleCarousel.map((payload, i) => {
          return (
            <div key={i}>
              <VideoArticle
                video={payload.videoContent.video}
                title={payload.videoContent.title}
                portable={payload.videoContent.textContent._rawPortableText}
              />
              <Button to={payload.postRef.seo.slug.current}>
                {payload.buttontitle}
              </Button>
            </div>
          );
        })}
      </Wrapper>
    </Layout>
  );
}
export const query = graphql`
  {
    sanityGeneralAmp {
      mainCarousel {
        uri
        title
        portableText {
          _rawPortableText
        }
      }
      headerMain
      middleCarousel {
        buttontitle
        postRef {
          seo {
            slug {
              current
            }
          }
        }
        videoContent {
          textContent {
            _rawPortableText
          }
          video
          title
        }
      }
      middleHeader
      finalCarousel {
        uri
        title
        portableText {
          _rawPortableText
        }
      }
      finalHeader
      seo {
        description
        pageTitle
        keywords
      }
    }
  }
`;

export default portfolio;
