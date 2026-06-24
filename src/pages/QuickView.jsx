import React from "react";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import DetailRight from "../components/product/Detailright";
import { X } from "lucide-react";
const QuickView = ({ onClose, product }) => {
  if (!product) return null;

  return (
    <Section className="fixed inset-0 z-50 bg-[#000000]/70 overflow-auto">
      <div className="min-h-screen flex items-center justify-center p-6">
        <Container className="bg-white ">
          <div className="grid grid-cols-[648px_auto] gap-6 p-10 relative">
            <div className="grid grid-cols-[80px_auto] gap-3 items-center justify-between">
              <div className="grid grid-cols-1 gap-4">
                <div className="w-20 h-22.5 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full" />
                </div>
                <div className="w-20 h-22.5 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full" />
                </div>
                <div className="w-20 h-22.5 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full" />
                </div>
                <div className="w-20 h-22.5 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full" />
                </div>
              </div>
              <div className="w-[556px] h-[556px] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full" />
              </div>
            </div>
            <div>
              <DetailRight product={product} />
              <X
                onClick={onClose}
                className="absolute -top-8 right-4 cursor-pointer text-white"
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default QuickView;
