import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { getGatsbyImageData } from "gatsby-source-sanity";
const Wrapper = styled.div`
  /* Flex */
  display: flex;
  flex-flow: row wrap;
  /* Size */
  width: 100%;
  margin: 24px 0px;
  p {
    font-size: 12px;
    color: #808080;
    font-style: italic;
    @media screen and (min-width: 600px) {
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (min-width: 600px) {
    justify-content: center;
  }
`;

const Pic = styled(GatsbyImage)`
  width: 50%;
  aspect-ratio: 1;
  @media screen and (min-width: 600px) {
    width: 45%;
  }
`;
const SanityConfig = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID || "99znwbju",
  dataset: process.env.GATSBY_SANITY_DATASET || "production",
};

function ImageCollage({ pics }) {
  return (
    <Wrapper>
      {pics.picCollage.map((payload, i) => {
        let imageId = payload.picData.asset._ref;
        let gatsbyImagePayload = getGatsbyImageData(imageId, {}, SanityConfig);
        return <Pic key={i} image={gatsbyImagePayload} alt={payload.alt} />;
      })}
      <p>{pics.text}</p>
    </Wrapper>
  );
}

export default ImageCollage;
