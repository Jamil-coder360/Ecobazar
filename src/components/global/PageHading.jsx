import React from 'react'
import Section from './Section';
import Container from './Container';
import { GoHome } from 'react-icons/go';
import page from "../../assets/page.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


const bgPage = (image) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});
const PageHading = ({pagename="404 Error Page"}) => {
  return (
    <Section style={bgPage(page)} className="py-12">
        <Container>
            <div className="flex items-center gap-2">
            <GoHome size={24}  className="text-gray_500" />
            <MdOutlineKeyboardArrowRight size={16}  className="text-gray_500" />
            <h4 className="text-success_207 text-base font-normal">{pagename}</h4>

            </div>
        </Container>
    </Section>
  )
}

export default PageHading