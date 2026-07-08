import React from "react";
import Section from "./global/Section";
import Container from "./global/Container";
import { v4 as uuidv4 } from "uuid";
// import images

import instra_1 from "../assets/instra_1.png";
import instra_2 from "../assets/instra_2.png";
import instra_3 from "../assets/instra_3.png";
import instra_4 from "../assets/instra_4.png";
import instra_5 from "../assets/instra_5.png";
import instra_6 from "../assets/instra_6.png";

const followData=[
    {
        id: uuidv4(),
        image: instra_1
    },
    {
        id: uuidv4(),
        image: instra_2
    },
    {
        id: uuidv4(),
        image: instra_3
    },
    {
        id: uuidv4(),
        image: instra_4
    },
    {
        id: uuidv4(),
        image: instra_5
    },
    {
        id: uuidv4(),
        image: instra_6
    },
]
import { Plus } from "lucide-react";
import { SlSocialInstagram } from "react-icons/sl";

const Follow = () => {
  return (
    <Section className="pb-8 lg:pb-15 px-5 lg:px-0">
      <Container>
        <div>
          <div className="flex items-center justify-center pb-8">
            <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900">
              Follow us on Instagram
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 lg:gap-6">

          {followData.map((item)=>(

          <div className="group relative overflow-hidden rounded-lg w-full h-full lg:w-50 lg:h-50">
            {/* Image */}
            <img
              src={item.image}
              alt="Product"
              className="w-full h-full object-cover"
            />

            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />

            {/* Center Icon */}
            <button
              className="absolute top-1/2 left-1/2 
                   -translate-x-1/2 -translate-y-1/2
                   w-14 h-14 rounded-full text-white
                   flex items-center justify-center
                   opacity-0 scale-75
                   group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-300"
            >
              <SlSocialInstagram size={24} />
            </button>
          </div>
          ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Follow;
