import React from "react";
import Section from "./global/Section";
import Container from "./global/Container";
import Button from "./global/Button";

// import images
import bannar_big from "../assets/bannar_big.png";
import bannar_up from "../assets/bannar_up.png";
import bannar_down from "../assets/bannar_down.png";
import { ArrowRight } from "lucide-react";

//  background image setup
const getBgImage = (image) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const Hero = () => {
  return (
    <Section className="py-6">
      <Container>
        <div className="grid grid-cols-[872px_423px] gap-6">
          <div
            style={getBgImage(bannar_big)}
            className="py-[155px] pl-15 rounded-[10px] "
          >
            <h2 className="text-white text-[72px] leading-[120%] font-semibold w-[596px]  pb-7">
              Fresh & Healthy Organic Food
            </h2>
            <div className="relative after:content-[''] after:absolute after:-ml-3 after:left-0 after:bottom-0 after:w-[2px] after:h-[65px] after:bg-success_bright flex flex-col">
              <h4 className="text-white text-[20px] leading-[150%] font-medium w-[596px]  pb-2">
                Sale up to{" "}
                <span className="bg-branding_warm py-1 px-3 rounded-sm ">
                  30% OFF
                </span>
              </h4>
              <p className="text-white/80 text-[14px] leading-[150%] font-normal w-[596px]  ">
                Free shipping on all your order.
              </p>
            </div>
            <Button className="mt-7">
              Shop now <ArrowRight />{" "}
            </Button>
          </div>
          <div className="grid  grid-rows-2 gap-6">
            <div
              style={getBgImage(bannar_up)}
              className="rounded-[10px] pt-8 pl-8"
            >
              <div className="max-w-[156px] ">
                <p className="font-medium text-[14px] leading-[100%] text-gray_900 pb-2">
                  Summer Sale
                </p>
                <h4 className="font-semibold text-[32px] leading-[120%] text-gray_900 ">
                  75% OFF
                </h4>
                <p className="font-normal text-[14px] leading-[150%] text-gray_600 pt-3 pb-6">
                  Only Fruit & Vegetable
                </p>

                <Button className="" variant="transparent">
                  Shop Now
                  <ArrowRight />
                </Button>
              </div>
            </div>
            <div
              style={getBgImage(bannar_down)}
              className=" rounded-[10px] py-17 px-10"
            >
              <div className=" flex flex-col items-center text-center">
                <p className="font-medium text-[14px] leading-[100%] text-white">
                  Best Deal
                </p>
                <h4 className="font-semibold text-[32px] leading-[120%] text-white pt-3 pb-8">
                  Special Products Deal of the Month
                </h4>
                <Button className="" variant="transparent">
                  Shop Now
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
