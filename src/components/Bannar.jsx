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
    <Section className="py-15">
      <Container>
        <div className="grid grid-cols-3 gap-6">
          <div
            style={getBgImage(Banner_1)}
            className=" w-106  pt-[35px] pb-[296px] rounded-xl"
          >
            <div className="flex flex-col  items-center ">
              <p className=" text-[14px] leading-[100%] font-medium text-white tracking-[3%]">
                Best Deals
              </p>
              <h3 className=" text-[40px] leading-[120%] font-semibold text-white pt-4 pb-2">
                {" "}
                Sale of the Month
              </h3>

              {/* timmer layout */}
              <div className="flex items-center justify-center gap-10  pb-6">
                <div className="flex flex-col items-center justify-center  ">
                  <span className="text-[18px] leading-[150%]  font-medium text-white">
                    {days}
                  </span>
                  <span className="text-[10px] leading-[100%] tracking-[3%] font-medium text-white/80">
                    Days
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <span className="text-[18px] leading-[150%]  font-medium text-white">
                    {hours}
                  </span>
                  <span className="text-[10px] leading-[100%] tracking-[3%] font-medium  text-white/80">
                    Hours
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center  ">
                  <span className="text-[18px] leading-[150%]  font-medium text-white">
                    {minutes}
                  </span>
                  <span className="text-[10px] leading-[100%] tracking-[3%] font-medium  text-white/80">
                    Mins
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <span className="text-[18px] leading-[150%]  font-medium text-white">
                    {seconds}
                  </span>
                  <span className="text-[10px] leading-[100%] tracking-[3%] font-medium  text-white/80">
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
            className=" w-106  pt-[35px] pb-[296px] rounded-xl"
          >
            <div className="flex flex-col  items-center ">
              <p className=" text-[14px] leading-[100%] font-medium text-white tracking-[3%]">
                85% Fat Free
              </p>
              <h3 className=" text-[40px] leading-[120%] font-semibold text-white pt-4 pb-2">
                {" "}
                Low-Fat Meat
              </h3>
              <p className="text-[18px] leading-[150%] font-normal text-white  pb-7.5">
                Started at{" "}
                <span className="text-[20px] leading-[150%] font-semibold text-branding_warm ">
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
            className=" w-106  pt-[35px] pb-[296px] rounded-xl"
          >
            <div className="flex flex-col  items-center ">
              <p className=" text-[14px] leading-[100%] font-medium text-gray_900 tracking-[3%]">
                Summer Sale
              </p>
              <h3 className=" text-[40px] leading-[120%] font-semibold text-gray_900 pt-4 pb-2">
                {" "}
                100% Fresh Fruit
              </h3>

              <p className="text-[18px] leading-[150%] font-normal text-white  pb-7.5">
                Up to{" "}
                <span className="text-[20px] leading-[150%] font-semibold text-[#FCC900] bg-gray_900 py-1.5  px-3 rounded-[5px] pl-3">
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
