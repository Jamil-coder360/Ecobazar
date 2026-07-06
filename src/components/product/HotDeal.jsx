import React, { useEffect, useState } from "react";
import Section from "../global/Section";
import Container from "../global/Container";
import Button from "../global/Button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import HotDealCard from "./HotDealCard";
import ProductLoading from "./ProductLoading";

const HotDeal = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://ecobazar-ktbd.onrender.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
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
          <div className="grid  grid-cols-1 lg:grid-cols-[528px_auto] grid-rows-[654px_auto]">
            <div className="w-full lg:w-[528px] h-full lg:h-[654px] ">
              {loading ? <ProductLoading /> : products.length > 0 && <HotDealCard product={products[0]} />}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => <ProductLoading key={i} />)
                : products.slice(6, 12).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:w-(--container) ">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => <ProductLoading key={i} />)
              : products.slice(6, 11).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HotDeal;
