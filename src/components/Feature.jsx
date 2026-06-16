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
    <Section>
        <Container>
            <div className="grid  grid-cols-4 items-center justify-between gap-1.25 p-10">
                {data.map((item)=>(

            <div key={item.id} className="flex items-center gap-4  max-w-[306px]">
                <div className="w-10 h-10 overflow-hidden">
                    <img src={item.image} alt=""  className=" w-full h-full " />
                </div>
                <div className="flex flex-col gap-2">

                <h4 className="font-semibold text-[16px] leading-[120%] text-gray_900">{item.title}</h4>
                <p className="font-normal text-[14px] leading-[150%] text-gray_400">{item.subtitle}</p>
                </div>
            </div>
))}
            </div>
        </Container>
    </Section>
  )
}

export default Feature