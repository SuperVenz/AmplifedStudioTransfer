import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import GearCard from "./mutations/GearCard";

const StyledSwiper = styled(Swiper)`
  height: 500px;
  @media screen and (min-width: 1500px) {
    height: 700px;
  }
`;
const Wrapper = styled.div`
  margin-left: 16px;
`;

function GearCarousel({ slides }) {
  return (
    <Wrapper>
      <StyledSwiper
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
      >
        {slides.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <GearCard
                image={data.bgPicture.picData.asset.gatsbyImageData}
                alt={data.bgPicture.alt}
                content={data.description}
                button={data.callToAction.text}
                link={data.callToAction.pageLink}
              />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </Wrapper>
  );
}

export default GearCarousel;
