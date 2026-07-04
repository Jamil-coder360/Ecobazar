import React from "react";
import Section from "./global/Section";
import Container from "./global/Container";
import Button from "./global/Button";

// import images
import bannar_big from "../assets/bannar_big.png";
import bannar_up from "../assets/bannar_up.png";
import bannar_down from "../assets/bannar_down.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

//  background image setup
const getBgImage = (image) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const Hero = () => {
  return (
    <Section className="py-6 sm:py-8 lg:py-10">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[872px_423px]">
          <div
            style={getBgImage(bannar_big)}
            className="rounded-[10px] px-4 py-10 sm:px-6 sm:py-16 lg:py-[155px] lg:pl-15"
          >
            <h2 className="max-w-full pb-4 text-[28px] font-semibold leading-[120%] text-white sm:max-w-[596px] sm:pb-6 sm:text-[40px] lg:text-[72px] lg:pb-7">
              Fresh & Healthy Organic Food
            </h2>
            <div className="relative flex flex-col after:absolute after:left-0 after:bottom-0 after:-ml-3 after:h-[65px] after:w-[2px] after:bg-success_bright after:content-['']">
              <h4 className="pb-2 text-[16px] font-medium leading-[150%] text-white sm:text-[20px] lg:max-w-[596px]">
                Sale up to{" "}
                <span className="rounded-sm bg-branding_warm px-3 py-1">
                  30% OFF
                </span>
              </h4>
              <p className="text-[13px] font-normal leading-[150%] text-white/80 sm:text-[14px] lg:max-w-[596px]">
                Free shipping on all your order.
              </p>
            </div>
            <div className="flex mt-6">
              <Button as={Link} to={"/shop"} >
                Shop now <ArrowRight />{" "}
              </Button>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 sm:gap-6">
            <div
              style={getBgImage(bannar_up)}
              className="min-h-[220px] rounded-[10px] px-4 py-8 sm:px-6 sm:py-10 lg:pl-8"
            >
              <div className="max-w-[180px] sm:max-w-[220px]">
                <p className="pb-2 text-[13px] font-medium leading-[100%] text-gray_900 sm:text-[14px]">
                  Summer Sale
                </p>
                <h4 className="text-[24px] font-semibold leading-[120%] text-gray_900 sm:text-[28px] lg:text-[32px]">
                  75% OFF
                </h4>
                <p className="pb-4 pt-3 text-[13px] font-normal leading-[150%] text-gray_600 sm:pb-6 sm:text-[14px]">
                  Only Fruit & Vegetable
                </p>

                <Button
                  as={Link}
                  to={"/shop"}
                  className=""
                  variant="transparent"
                >
                  Shop Now
                  <ArrowRight />
                </Button>
              </div>
            </div>
            <div
              style={getBgImage(bannar_down)}
              className="min-h-[220px] rounded-[10px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-17"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-[13px] font-medium leading-[100%] text-white sm:text-[14px]">
                  Best Deal
                </p>
                <h4 className="px-2 pb-4 pt-3 text-[22px] font-semibold leading-[120%] text-white sm:pb-6 sm:text-[28px] lg:px-0 lg:pb-8 lg:text-[32px]">
                  Special Products Deal of the Month
                </h4>
                <Button
                  as={Link}
                  to={"/shop"}
                  className=""
                  variant="transparent"
                >
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
