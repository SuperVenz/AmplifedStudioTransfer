import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  /* Spacing */
  padding: 24px 16px;
  @media screen and (min-width: 900px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  p {
    text-align: bottom;
    display: flex;
    align-items: center;
    padding-left: 24px;
    flex-grow: 1;
    @media screen and (min-width: 900px) {
      padding-left: 0px;
    }
  }
`;
const Highlight = styled.span`
  font-size: 40px;
  padding-left: 16px;
  color: ${(props) => props.theme.buttonMainColor.hex};
  @media screen and (min-width: 900px) {
    padding-right: 16px;
    padding-left: 0px;
  }
`;
function HighlightText({ array }) {
  return (
    <div>
      {array.map((obj, i) => {
        return (
          <Wrapper key={i}>
            <Highlight>{obj.highlightText}</Highlight>
            <p>{obj.textContent}</p>
          </Wrapper>
        );
      })}
    </div>
  );
}
export default HighlightText;
