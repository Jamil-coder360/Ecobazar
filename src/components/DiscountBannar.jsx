import React from 'react'
import { Link } from 'react-router';
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
   <Section className="py-10 lg:py-15">
    <Container style={getBgImage(Discount)} className="overflow-hidden rounded-[10px]">
        <div className="flex items-center justify-center px-4 py-10 sm:justify-end sm:px-6 sm:py-14 lg:px-0 lg:py-15">

          <div className="flex max-w-full flex-col items-start justify-end sm:max-w-[441px] sm:pr-[20px] lg:pr-[51px]">
              <p className="text-[14px] font-medium leading-[100%] tracking-[2%] text-white sm:text-[16px]">
               Summer Sale
              </p>
              <h3 className="pb-4 pt-3 text-[36px] font-semibold leading-[120%] text-branding_warm sm:text-[48px] lg:text-[56px]">
             37%  <span className="text-[36px] font-semibold leading-[120%] text-white sm:text-[48px] lg:text-[56px]" > OFF</span>
              </h3>
              <p className="pb-7 text-[14px] font-normal leading-[150%] text-white/70 sm:text-[16px]">
               Free on all your order, Free Shipping and  30 days money-back guarantee
              </p>

              <Button as={Link} to="/shop" variant="green" className="w-full sm:w-auto">
                Shop Now <ArrowRight />
              </Button>
            </div>
        </div>
    </Container>
   </Section>
  )
}

export default DiscountBannar