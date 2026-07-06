
import React, { useEffect, useState } from "react";
import Section from "../global/Section";
import Container from "../global/Container";
import Button from "../global/Button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import ProductLoading from "./ProductLoading";

const Featured = () => {
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
            <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900">
             Featured Products
            </h3>
            <Button variant={"transparent"}>
              View All <ArrowRight />{" "}
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <ProductLoading key={i} />
                ))
              : products.slice(0, 5).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};



export default Featured