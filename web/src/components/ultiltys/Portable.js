import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "react-portable-text";
import styled from "styled-components";
import Button from "../mutations/Button";
import ImageCollage from "../ImageCollage";
import YoutubePlayer from "./YoutubePlayer";
import HighlightText from "../mutations/HighlightText";
import Soundcloud from "./Soundcloud";

const Wrapper = styled.div``;
const Port = styled(PortableText)`
  margin-top: 12px;
  @media screen and (min-width: 900px) {
    margin-top: 16px;
  }
`;

const Pic = styled(GatsbyImage)``;
function Portable({ content }) {
  return (
    <Wrapper>
      <Port
        content={content}
        serializers={{
          buttonPageLink: (props) => (
            <Button to={props.pageLink}>{props.text}</Button>
          ),
          imageCollage: (props) => <ImageCollage pics={props} />,
          youtubeHeader: (props) => (
            <YoutubePlayer
              video={props.video}
              title={props.title}
              isPortable={true}
            />
          ),
          highlightText: (props) => <HighlightText arr={props} />,
          soundCloud: (props) => (
            <Soundcloud video={props.video} title={props.title} />
          ),
        }}
      />
    </Wrapper>
  );
}

export default Portable;
