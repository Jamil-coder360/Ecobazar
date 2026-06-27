import React, { useEffect, useState } from "react";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import view from "../assets/view.png";
import view_1 from "../assets/view_1.png";
import view_2 from "../assets/view_2.png";
import view_3 from "../assets/view_3.png";
import view_4 from "../assets/view_4.png";
import DetailRight from "../components/product/Detailright";
import { X } from "lucide-react";
import PageHading from "../components/global/PageHading";
import ProductDes from "../components/product/ProductDes";
import ProductCard from "../components/product/ProductCard";
import { useParams } from "react-router";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const imageUrl = product?.image ? product.image.replace(/^\.\//, "/") : "";

  useEffect(() => {
    if (!id) return;
    // fetch(`http://localhost:3000/products/${id}`)
    fetch(`https://ecobazar-ktbd.onrender.com/products${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <>
      <PageHading
        pagename="Chinese Cabbage"
        mainname={"Category "}
        subname={"Vegetables"}
      />

      <Section className="">
        <Container className=" bg-white ">
          <div>
            <div className="grid grid-cols-[648px_auto] gap-6 p-10 relative">
             <div className="grid grid-cols-[80px_auto] gap-3 items-center justify-between">
              <div className="grid grid-cols-1 gap-4">
                <div className="w-20 h-22.5 overflow-hidden">
                  <img src={imageUrl} alt={product?.name} className="w-full h-full" />
                </div>
                <div className="w-20 h-22.5 overflow-hidden">
                  <img src={imageUrl} alt={product?.name} className="w-full h-full" />
                </div>
                <div className="w-20 h-22.5 overflow-hidden">
                  <img src={imageUrl} alt={product?.name} className="w-full h-full" />
                </div>
                <div className="w-20 h-22.5 overflow-hidden">
                  <img src={imageUrl} alt={product?.name} className="w-full h-full" />
                </div>
              </div>
              <div className="w-[556px] h-[556px] overflow-hidden">
                <img src={imageUrl} alt={product?.name} className="w-full h-full" />
              </div>
            </div>
              <div>
                {/* <h3 className="text-[36px] font-semibold text-gray_900 leading-[120%] flex items-center">
                Chinese Cabbage
                <span className=" text-[14px] font-normal text-success_207 leading-[150%] bg-[#20B526]/20 ml-2 py-1 px-2 rounded-sm">In Stock</span>
            </h3> */}
                <DetailRight product={product} />
              </div>
            </div>
            <div>
              <ProductDes />
            </div>
            <div className="py-20">
              <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900 text-center mb-8">
                Related Products
              </h3>
              <div className="grid grid-cols-4 gap-6">
                {detail.slice(1, 5).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ProductDetailPage;
