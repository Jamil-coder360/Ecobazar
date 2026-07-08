import React, { useEffect, useState } from "react";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import DetailRight from "../components/product/Detailright";
import PageHading from "../components/global/PageHading";
import ProductDes from "../components/product/ProductDes";
import ProductCard from "../components/product/ProductCard";
import { useParams } from "react-router";
import ProductLoading from "../components/product/ProductLoading";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [detail, setDetail] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelated, setLoadingRelated] = useState(true);
  const { id } = useParams();

  const imageUrl = product?.image ? product.image.replace(/^\.\//, "/") : "";

  const getProductValue = (item, keys) => {
    for (const key of keys) {
      const value = item?.[key];
      if (Array.isArray(value)) {
        const firstValue = value.find((entry) => typeof entry === "string" && entry.trim());
        if (firstValue) return firstValue.trim();
      }
      if (typeof value === "string" && value.trim()) {
        return value.trim();
      }
    }
    return "";
  };

  const getRelatedItems = (currentItem, items) => {
    if (!currentItem || !items?.length) return [];

    const currentId = currentItem.id ?? currentItem._id;
    const currentCategory = getProductValue(currentItem, [
      "category",
      "categoryName",
      "type",
      "subcategory",
      "subCategory",
    ]);
    const currentTag = getProductValue(currentItem, ["tag", "tags"]);

    const matched = items.filter((item) => {
      const itemId = item.id ?? item._id;
      if (itemId === currentId) return false;

      const itemCategory = getProductValue(item, [
        "category",
        "categoryName",
        "type",
        "subcategory",
        "subCategory",
      ]);
      const itemTag = getProductValue(item, ["tag", "tags"]);

      const sameCategory =
        currentCategory && itemCategory && currentCategory.toLowerCase() === itemCategory.toLowerCase();
      const sameTag =
        currentTag && itemTag && currentTag.toLowerCase() === itemTag.toLowerCase();

      return sameCategory || sameTag;
    });

    return matched.length ? matched.slice(0, 4) : items.filter((item) => (item.id ?? item._id) !== currentId).slice(0, 4);
  };

  useEffect(() => {
    if (!id) return;
    // fetch(`http://localhost:3000/products/${id}`)
fetch(`https://ecobazar-ktbd.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://ecobazar-ktbd.onrender.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        setRelatedProducts(getRelatedItems(product, data));
        setLoadingRelated(false);
      });
  }, []);

  useEffect(() => {
    if (!product || !detail.length) return;
    setRelatedProducts(getRelatedItems(product, detail));
  }, [product, detail]);

  return (
    <>
      <PageHading
        pagename={product?.name || "Product Detail"}
        mainname={getProductValue(product, ["category", "categoryName", "type"]) || "Category"}
        subname={getProductValue(product, ["subcategory", "subCategory"]) || "Products"}
      />

      <Section className="px-5 lg:px-0">
        <Container className=" bg-white ">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-[648px_auto] gap-6  lg:py-10 relative">
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
              <div className="w-full lg:w-[556px] h-full lg:h-[320px] sm:h-[420px] lg:h-[556px] overflow-hidden">
                <img src={imageUrl} alt={product?.name} className="w-full h-full object-cover" />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {loadingRelated
                  ? Array.from({ length: 4 }).map((_, i) => <ProductLoading key={i} />)
                  : relatedProducts.map((item) => (
                      <ProductCard key={item.id ?? item._id} product={item} />
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
