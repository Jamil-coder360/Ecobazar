import React, { useEffect, useState } from "react";
import Section from "../global/Section";
import Container from "../global/Container";
import Button from "../global/Button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import HotDealCard from "./HotDealCard";

const HotDeal = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <Section className="py-15">
      <Container>
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900">
              Hot Deals
            </h3>
            <Button variant={"transparent"}>
              View All <ArrowRight />{" "}
            </Button>
          </div>
          <div className="grid  grid-cols-[528px_auto] grid-rows-[654px_auto]">
            <div className="w-[528px] h-[654px] ">
              {products.length > 0 && <HotDealCard product={products[0]} />}
            </div>
            <div className="grid grid-cols-3">
              {products.slice(6, 12).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-5 w-(--container) ">
            {products.slice(6, 11).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HotDeal;
