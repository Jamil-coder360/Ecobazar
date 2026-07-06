import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import PageHading from "../components/global/PageHading";
import GroceryFilter from "../components/shop/GroceryFilter";
import { ChevronDown } from "lucide-react";
import ProductCard from "../components/product/ProductCard";
import ProductLoading from "../components/product/ProductLoading";

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("Latest");
  const selectedCategory = searchParams.get("category") || "";
  const [products, setProducts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = selectedCategory ? `?category=${encodeURIComponent(selectedCategory)}` : "";
    setLoading(true);
    fetch(`https://ecobazar-ktbd.onrender.com/products${query}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [selectedCategory]);
  const filteredProducts = products.filter((product) => {
    const matchesTags =
      selectedTags.length === 0 ||
      (Array.isArray(product.tags) && product.tags.some((tag) => selectedTags.includes(tag)));
    const matchesPrice =
      typeof product.price === "number" &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1];
    return matchesTags && matchesPrice;
  });

  return (
    <>
      <PageHading pagename="Categories" />
      <Section className="pt-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[312px_auto] gap-6">
            <div>
              <GroceryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={(category) => {
                  if (category) {
                    setSearchParams({ category });
                  } else {
                    setSearchParams({});
                  }
                }}
                selectedTags={selectedTags}
                onToggleTag={(tag) => {
                  setSelectedTags((prev) =>
                    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
                  );
                }}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className=" flex items-center justify-center gap-2">
                  <span className="text-sm leading-[150%] font-normal text-gray_500">
                    Sort by:
                  </span>

                  <div className="relative w-41.5">
                    <button
                      onClick={() => setOpen(!open)}
                      className="w-full border border-gray-200 rounded-md px-4 py-2 bg-white text-left flex items-center justify-between"
                    >
                      {sort}
                      <ChevronDown />
                    </button>

                    {open && (
                      <div className="absolute z-100 top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            setSort("Latest");
                            setOpen(false);
                          }}
                        >
                          Latest
                        </button>

                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            setSort("Oldest");
                            setOpen(false);
                          }}
                        >
                          Oldest
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-base leading-[150%] font-normal text-gray_600">
                  <span className="text-base leading-[120%] font-semibold text-gray_900 pr-2">
                    {filteredProducts.length}
                  </span>
                  Results Found
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {loading
                  ? Array.from({ length: 9 }).map((_, i) => <ProductLoading key={i} />)
                  : filteredProducts.slice(0, 15).map((product) => (
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

export default ShopPage;
