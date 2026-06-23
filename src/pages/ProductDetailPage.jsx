import React from "react";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import view from "../assets/view.png";
import view_1 from "../assets/view_1.png";
import view_2 from "../assets/view_2.png";
import view_3 from "../assets/view_3.png";
import view_4 from "../assets/view_4.png";
import ProductDetail from "./ProductDetailPage";
import DetailRight from "../components/product/Detailright";
import { X } from "lucide-react";
import PageHading from "../components/global/PageHading";

const ProductDetailPage = () => {
  return (
    <>
    <PageHading 
    pagename="Chinese Cabbage"
    mainname={"Category "}
    subname={"Vegetables"}

    />
    
    <Section className="">
      <Container className=" bg-white ">
        <div className="grid grid-cols-[648px_auto] gap-6 p-10 relative">
          <div className="grid grid-cols-[80px_auto]">
            <div className="grid grid-cols-1">
              <div className="w-20 h-22.5 overflow-hidden">
                <img src={view_1} alt="image" className="w-full h-full" />
              </div>
              <div className="w-20 h-22.5 overflow-hidden">
                <img src={view_2} alt="image" className="w-full h-full" />
              </div>
              <div className="w-20 h-22.5 overflow-hidden">
                <img src={view_3} alt="image" className="w-full h-full" />
              </div>
              <div className="w-20 h-22.5 overflow-hidden">
                <img src={view_4} alt="image" className="w-full h-full" />
              </div>
            </div>
            <div className="w-[556px] h-[556px] overflow-hidden">
              <img src={view} alt="image" className="w-full h-full" />
            </div>
          </div>
          <div>
            {/* <h3 className="text-[36px] font-semibold text-gray_900 leading-[120%] flex items-center">
                Chinese Cabbage
                <span className=" text-[14px] font-normal text-success_207 leading-[150%] bg-[#20B526]/20 ml-2 py-1 px-2 rounded-sm">In Stock</span>
            </h3> */}
          <DetailRight />
          <X  className=" absolute -top-8 text-white right-4"/>
          </div>
        </div>
      </Container>
    </Section>
    </>
  );
}

export default ProductDetailPage




