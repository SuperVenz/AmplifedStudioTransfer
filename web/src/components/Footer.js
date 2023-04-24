import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Form from "./ultiltys/Form";
import { useStaticQuery, graphql } from "gatsby";
const Wrapper = styled.div`
  /* Flex */
  display: flex;
  flex-flow: column nowrap;
  /* Alignment */
  @media screen and (min-width: 600px) {
    margin-top: 50px;
  }
  @media screen and (min-width: 900px) {
    margin-top: 100px;
    flex-flow: row nowrap;
    align-items: space-between;
    h2 {
      text-align: center;
    }
  }
`;
const Maps = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media screen and (min-width: 900px) {
    width: 100%;
  }
`;
const Iframe = styled.iframe`
  width: 90%;
  height: 300px;
  box-shadow: 5px 5px 5px black;
  align-self: center;
  margin-bottom: 16px;
  @media screen and (min-width: 600px) {
    height: 500px;
  }
  @media screen and (min-width: 900px) {
    height: 650px;
  }
`;
const StyledIcon = styled(GatsbyImage)`
  width: 20px;
  aspect-ratio: 1;
  margin-right: 16px;
  margin-left: 16px;
  @media screen and (min-width: 600px) {
    margin-left: 5%;
  }
`;
const ContactInfo = styled.div`
  /* flex */
  display: flex;
  flex-flow: column nowrap;
  /* Size */
  width: 100%;
  /* Boxing */
  margin-bottom: 24px;
  @media screen and (min-width: 600px) {
  }
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 900px) {
  }
`;
const StyledSocial = styled(GatsbyImage)`
  @media screen and (min-width: 900px) {
    margin: 32px;
  }
`;
const SocialContainer = styled.div`
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  /* Size */
  width: 80%;
  /* Alignment */
  align-self: center;
  justify-content: space-around;
  /*Boxing */
  padding-bottom: 32px;
  margin-top: 16px;

  @media screen and (min-width: 900px) {
    justify-content: center;
  }
`;
const Number = styled.a`
  text-decoration: none;
  font-size: 20px;
`;
const Alec = styled.div`
  color: white;
  display: none;
`;

function Footer(props) {
  const data = useStaticQuery(graphql`
    {
      sanitySiteInfo {
        socialMedia {
          link
          icon {
            alt
            picData {
              asset {
                gatsbyImageData
              }
            }
          }
        }
        phoneNumber
        location
        companyEmail
      }
      sanityWidgets {
        phoneIcon {
          picData {
            asset {
              gatsbyImageData
            }
          }
          alt
        }
        gpsIcon {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
        emailIcon {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
      }
      sanityHeaderFooter {
        footertitle
        gpsTitle
      }
    }
  `);
  return (
    <Wrapper>
      <Form title={data.sanityHeaderFooter.footertitle} />
      <Maps>
        <h2>{data.sanityHeaderFooter.gpsTitle}</h2>

        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.1203570023044!2d-117.25528608432734!3d33.132202480866134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7497cb700001%3A0xe51e07312d0ef67d!2sAmplified%20Studios!5e0!3m2!1sen!2sus!4v1647651239293!5m2!1sen!2sus"
          allowfullscreen="false"
          loading="lazy"
        />
        <ContactInfo>
          <Row>
            <StyledIcon
              objectFit="contain"
              image={data.sanityWidgets.emailIcon.picData.asset.gatsbyImageData}
              alt={data.sanityWidgets.emailIcon.alt}
            />
            <Number href={`mailto: ${data.sanitySiteInfo.companyEmail}`}>
              {data.sanitySiteInfo.companyEmail}
            </Number>
          </Row>
          <Row>
            <StyledIcon
              objectFit="contain"
              image={data.sanityWidgets.gpsIcon.picData.asset.gatsbyImageData}
              alt={data.sanityWidgets.gpsIcon.alt}
            />
            <address>{data.sanitySiteInfo.location}</address>
          </Row>
          <Row>
            <StyledIcon
              objectFit="contain"
              image={data.sanityWidgets.phoneIcon.picData.asset.gatsbyImageData}
              alt={data.sanityWidgets.phoneIcon.alt}
            />
            <Number href={`tel:${data.sanitySiteInfo.phoneNumber}`}>
              {data.sanitySiteInfo.phoneNumber}
            </Number>
          </Row>
        </ContactInfo>
        <SocialContainer>
          {data.sanitySiteInfo.socialMedia.map((data, i) => {
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
        <Alec>
          Design by Karen Malhtora and Developed by Alec Venzor contact:
          alec@creativexps.com
        </Alec>
      </Maps>
    </Wrapper>
  );
}

export default Footer;
