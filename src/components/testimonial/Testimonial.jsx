import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Section from "../global/Section";
import Container from "../global/Container";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonial = () => {
  const swiperRef = useRef(null);
  return (
    <Section className="bg-gray_50 py-15 px-5 lg:px-0">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900">
            Hot Deals
          </h3>
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="size-[36px] rounded-full bg-white hover:bg-success_207 hover:text-white flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="size-[36px] rounded-full bg-white hover:bg-success_207 hover:text-white flex items-center justify-center cursor-pointer"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          autoplay={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </Container>
    </Section>
  );
};

export default Testimonial;
