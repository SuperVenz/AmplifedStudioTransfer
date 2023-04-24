import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
const InfoBox = styled.div`
  /* flex */
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-flow: column nowrap;
  /* Size */
  width: 90%;
  /* Border */
  border-radius: 20px;
  border: solid black 3px;
  /* Margins & Padding */
  margin-top: 16px;
  padding-bottom: 32px;
  /* Themeing */
  box-shadow: 5px 10px 5px black;
  /* Pos */
  align-self: center;
  /* Title */
  h4 {
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: 24px;
  }
  p {
    margin-left: 24px;
    flex-grow: 1;
    width: 75%;
  }
  @media screen and (min-width: 600px) {
    width: 90%;
  }
  @media screen and (min-width: 900px) {
    p {
      line-height: 35px;
    }
    height: 100%;
    width: 50vw;
  }
  @media screen and (min-width: 1500px) {
    p {
      line-height: 60px;
    }
  }
`;
const StyledButton = styled.div`
  @media screen and (min-width: 900px) {
  }
`;
function InfoCard({ cardTitle, cardContent, cardLink, cardButton, open }) {
  return (
    <InfoBox open={open}>
      <h4>{cardTitle}</h4>
      <p>{cardContent}</p>
      <StyledButton>
        <Button to={`/services/${cardLink}`}>{cardButton}</Button>
      </StyledButton>
    </InfoBox>
  );
}

export default InfoCard;
