import React, { useState } from "react";
import Section from "./global/Section";
import Container from "./global/Container";
import Book from "./icon/Book";
import Food from "./icon/Food";
import FoodNet from "./icon/FoodNet";
import Gseries from "./icon/Gseries";
import Mango from "./icon/Mango";
import Steps from "./icon/Steps";

const companyLogos = [
  { id: 1, Icon: Book },
  { id: 2, Icon: Food },
  { id: 3, Icon: FoodNet },
  { id: 4, Icon: Gseries },
  { id: 5, Icon: Mango },
  { id: 6, Icon: Steps },
];

const CompanyLogo = () => {
  return (
    <Section className="py-15">
      <Container>
        <div className="lg:flex grid grid-cols-3 items-center justify-between">
          {companyLogos.map(({ id, Icon }, index) => (
            <div
              key={id}
              className={`lg:relative cursor-pointer ${
                index !== companyLogos.length - 1
                  ? "lg:after:content-[''] lg:after:absolute lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:-right-20 lg:after:h-8 lg:after:border-r lg:after:border-gray_200"
                  : ""
              }`}
            >
              <Icon
                className={
                  "transition-colors duration-300 fill-gray_200 hover:fill-success_207 "
                }
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CompanyLogo;
