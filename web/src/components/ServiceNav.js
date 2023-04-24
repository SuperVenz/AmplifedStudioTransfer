import React, { useState } from "react";
import styled from "styled-components";
import InfoCard from "./mutations/InfoCard";
import ServiceCard from "./mutations/ServiceCard";

const Wrapper = styled.div`
  margin-bottom: 56px;
  @media screen and (min-width: 900px) {
    position: relative;
    height: 700px;
  }
`;
const Pos = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media screen and (min-width: 900px) {
    position: absolute;
    top: 5%;
    left: 45%;
  }
`;

// Card Info accepts an array of objects that contain the info for card
function ServiceNav({ mainTitle, cardInfo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Wrapper>
      <h2>{mainTitle}</h2>
      {cardInfo.map((data, i) => {
        return (
          <div key={i}>
            <ServiceCard
              index={i}
              activeIndex={activeIndex}
              onClick={() => setActiveIndex(i)}
              title={data.cardTitle}
              cardTitle={data.description.header}
              cardLink={data.serviceRef.seo.slug.current}
              cardButton={data.button}
              cardContent={data.description.text}
              open={i === activeIndex ? true : false}
            />
            <Pos key={i}>
              {i === activeIndex ? (
                <InfoCard
                  index={i}
                  activeIndex={activeIndex}
                  cardTitle={data.description.header}
                  cardLink={data.serviceRef.seo.slug.current}
                  cardButton={data.button}
                  cardContent={data.description.text}
                  open={true}
                />
              ) : null}
            </Pos>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default ServiceNav;
