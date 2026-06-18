import React from 'react'
import Section from './global/Section';
import Container from './global/Container';

import Discount from "../assets/discount.png"
import Button from './global/Button';
import { ArrowRight } from 'lucide-react';

//  background image setup
const getBgImage = (image) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});
const DiscountBannar = () => {
  return (
   <Section className="py-15">
    <Container style={getBgImage(Discount)} className="rounded-[10px]" >
        <div className=" flex items-center justify-end">

          <div className="flex flex-col  items-start justify-end py-15 max-w-[441px]  pr-[51px]">
              <p className=" text-[16px] leading-[100%] font-medium text-white tracking-[2%]">
               Summer Sale
              </p>
              <h3 className=" text-[56px] leading-[120%] font-semibold text-branding_warm pt-3 pb-4">
             37%  <span className=" text-[56px] leading-[120%] font-semibold text-white" > OFF</span>
              </h3>
              <p className="text-[16px] leading-[150%] font-normal text-white/70  pb-7">
               Free on all your order, Free Shipping and  30 days money-back guarantee
                {/* <span className="text-[20px] leading-[150%] font-semibold text-branding_warm ">
                  $79.99
                </span> */}
              </p>

              <Button variant="green">
                Shop Now <ArrowRight />
              </Button>
            </div>
        </div>
    </Container>
   </Section>
  )
}

export default DiscountBannar