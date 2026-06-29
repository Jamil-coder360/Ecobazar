import React from "react";
import TestimonialCard from "./TestimonialCard";
import Section from "../global/Section";
import Container from "../global/Container";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonial = () => {
  return (
    <Section className="bg-gray_50 py-15">
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

        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <TestimonialCard />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonial;
