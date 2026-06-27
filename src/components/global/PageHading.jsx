import React from "react";
import Section from "./Section";
import Container from "./Container";
import { GoHome } from "react-icons/go";
import page from "../../assets/page.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";

const bgPage = (image) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});
const PageHading = ({ pagename = "404 Error Page", mainname, subname }) => {
  return (
    <Section style={bgPage(page)} className="py-12">
      <Container>
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <GoHome size={24} className="text-gray_500" />
          </Link>
          <MdOutlineKeyboardArrowRight size={16} className="text-gray_500" />
          <h4 className="text-gray_500 text-base font-normal">{mainname}</h4>
          {mainname && (
            <MdOutlineKeyboardArrowRight size={16} className="text-gray_500" />
          )}
          <h4 className="text-gray_500 text-base font-normal">{subname}</h4>
          {subname && (
            <MdOutlineKeyboardArrowRight size={16} className="text-gray_500" />
          )}
          <h4 className="text-success_207 text-base font-normal">{pagename}</h4>
        </div>
      </Container>
    </Section>
  );
};

export default PageHading;
