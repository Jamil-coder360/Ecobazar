import React, { useEffect, useState } from "react";
import Section from "../global/Section";
import Container from "../global/Container";
import Button from "../global/Button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
       fetch(`https://ecobazar-ktbd.onrender.com/products`)

      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);
  return (
    <Section>
      <Container>
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900">
              Popular Products
            </h3>
            <Button variant={"transparent"}>
              View All <ArrowRight />{" "}
            </Button>
          </div>
          <div className="grid grid-cols-5">
            {products.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Product;
