import React, { useEffect, useState } from "react";
import Section from "../global/Section";
import Container from "../global/Container";
import Button from "../global/Button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import ProductLoading from "./ProductLoading";

const Product = () => {
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
    <Section>
      <Container>
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-base lg:text-[32px] leading-[120%] text-gray_900">
              Popular Products
            </h3>
            <Button variant={"transparent"}>
              View All <ArrowRight />{" "}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:gap-0 lg:grid-cols-5">
            {loading
              ? Array.from({ length: 10 }).map((_, i) => <ProductLoading key={i} />)
              : products.slice(0, 10).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Product;
