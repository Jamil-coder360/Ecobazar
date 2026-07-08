import React from 'react'
import { v4 as uuidv4 } from "uuid";
import Section from './global/Section';
import Container from './global/Container';

import feature_1 from "../assets/feature_1.png"
import feature_2 from "../assets/feature_2.png"
import feature_3 from "../assets/feature_3.png"
import feature_4 from "../assets/feature_4.png"

// featuresData
const data=[
    {
        id: uuidv4(),
        image: feature_1,
        title:"Free Shipping",
        subtitle:"Free shipping on all your order"
    },
    {
        id: uuidv4(),
        image: feature_2,
        title:"Free Shipping",
        subtitle:"Free shipping on all your order"
    },
    {
        id: uuidv4(),
        image: feature_3,
        title:"Free Shipping",
        subtitle:"Free shipping on all your order"
    },
    {
        id: uuidv4(),
        image: feature_4,
        title:"Free Shipping",
        subtitle:"Free shipping on all your order"
    },
]


const Feature = () => {
  return (
    <Section className="px-5 lg:px-0">
        <Container>
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-4 lg:gap-8 lg:p-10 rounded-[8px] shadow-lg">
                {data.map((item)=>(

            <div key={item.id} className="flex max-w-full items-center gap-3 sm:gap-4 lg:max-w-[306px]">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt=""  className="h-full w-full " />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">

                <h4 className="text-[14px] font-semibold leading-[120%] text-gray_900 sm:text-[16px]">{item.title}</h4>
                <p className="text-[12px] font-normal leading-[150%] text-gray_400 sm:text-[14px]">{item.subtitle}</p>
                </div>
            </div>
))}
            </div>
        </Container>
    </Section>
  )
}

export default Feature