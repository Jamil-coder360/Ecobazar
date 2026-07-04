import React from "react";
import { Link } from "react-router";
import Section from "./global/Section";
import Container from "./global/Container";

// image import
import Banner_1 from "../assets/Bannar-3.png";
import Banner_2 from "../assets/Bannar-4.png";
import Banner_3 from "../assets/Bannar-5.png";
import UseCountDown from "../hooks/UseCountDown";
import Button from "./global/Button";
import { ArrowRight } from "lucide-react";

//  background image setup
const getBgImage = (image) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const Bannar = () => {
  const { days, hours, minutes, seconds } = UseCountDown("2026-08-29");

  return (
    <Section className="py-10 lg:py-15">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          <div
            style={getBgImage(Banner_1)}
            className="w-full rounded-xl px-4 py-8 sm:px-6 lg:py-8 lg:pt-[35px] lg:pb-[296px]"
          >
            <div className="flex flex-col items-center text-center">
              <p className="text-[13px] font-medium leading-[100%] tracking-[3%] text-white sm:text-[14px]">
                Best Deals
              </p>
              <h3 className="pb-2 pt-4 text-[26px] font-semibold leading-[120%] text-white sm:text-[32px] lg:text-[40px]">
                {" "}
                Sale of the Month
              </h3>

              <div className="flex items-center justify-center gap-4 pb-6 sm:gap-8 lg:gap-10">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[16px] font-medium leading-[150%] text-white sm:text-[18px]">
                    {days}
                  </span>
                  <span className="text-[10px] font-medium leading-[100%] tracking-[3%] text-white/80">
                    Days
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[16px] font-medium leading-[150%] text-white sm:text-[18px]">
                    {hours}
                  </span>
                  <span className="text-[10px] font-medium leading-[100%] tracking-[3%] text-white/80">
                    Hours
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[16px] font-medium leading-[150%] text-white sm:text-[18px]">
                    {minutes}
                  </span>
                  <span className="text-[10px] font-medium leading-[100%] tracking-[3%] text-white/80">
                    Mins
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[16px] font-medium leading-[150%] text-white sm:text-[18px]">
                    {seconds}
                  </span>
                  <span className="text-[10px] font-medium leading-[100%] tracking-[3%] text-white/80">
                    Secs
                  </span>
                </div>
              </div>
              <Button as={Link} to="/shop">
                Shop Now <ArrowRight />
              </Button>
            </div>
          </div>
          <div
            style={getBgImage(Banner_2)}
            className="w-full rounded-xl px-4 py-8 sm:px-6 lg:py-8 lg:pt-[35px] lg:pb-[296px]"
          >
            <div className="flex flex-col items-center text-center">
              <p className="text-[13px] font-medium leading-[100%] tracking-[3%] text-white sm:text-[14px]">
                85% Fat Free
              </p>
              <h3 className="pb-2 pt-4 text-[26px] font-semibold leading-[120%] text-white sm:text-[32px] lg:text-[40px]">
                {" "}
                Low-Fat Meat
              </h3>
              <p className="pb-7.5 text-[15px] font-normal leading-[150%] text-white sm:text-[18px]">
                Started at{" "}
                <span className="text-[17px] font-semibold leading-[150%] text-branding_warm sm:text-[20px]">
                  $79.99
                </span>
              </p>

              <Button as={Link} to="/shop">
                Shop Now <ArrowRight />
              </Button>
            </div>
          </div>
          <div
            style={getBgImage(Banner_3)}
            className="w-full rounded-xl px-4 py-8 sm:px-6 lg:py-8 lg:pt-[35px] lg:pb-[296px]"
          >
            <div className="flex flex-col items-center text-center">
              <p className="text-[13px] font-medium leading-[100%] tracking-[3%] text-gray_900 sm:text-[14px]">
                Summer Sale
              </p>
              <h3 className="pb-2 pt-4 text-[26px] font-semibold leading-[120%] text-gray_900 sm:text-[32px] lg:text-[40px]">
                {" "}
                100% Fresh Fruit
              </h3>

              <p className="pb-7.5 text-[15px] font-normal leading-[150%] text-white sm:text-[18px]">
                Up to{" "}
                <span className="rounded-[5px] bg-gray_900 px-3 py-1.5 pl-3 text-[17px] font-semibold leading-[150%] text-[#FCC900] sm:text-[20px]">
                  64% OFF
                </span>
              </p>
              <Button as={Link} to="/shop">
                Shop Now <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Bannar;
