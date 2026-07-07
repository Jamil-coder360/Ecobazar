import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import PageHading from "../components/global/PageHading";
import GroceryFilter from "../components/shop/GroceryFilter";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
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

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedTags, priceRange, sort]);

  useEffect(() => {
    const query = selectedCategory ? `?category=${encodeURIComponent(selectedCategory)}` : "";
    Promise.resolve().then(() => setLoading(true));
    fetch(`https://ecobazar-ktbd.onrender.com/products${query}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedTags([]);
  }, [selectedCategory]);

  const availableTags = useMemo(() => {
    const uniqueTags = new Set();
    products.forEach((product) => {
      if (Array.isArray(product.tags)) {
        product.tags.forEach((tag) => uniqueTags.add(tag));
      }
    });
    return [...uniqueTags].sort();
  }, [products]);

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

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

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
                tags={availableTags}
                loadingTags={loading}
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
                  ? Array.from({ length: 15 }).map((_, i) => <ProductLoading key={i} />)
                  : currentProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
              </div>

              {/* Pagination */}
              {!loading && totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-8 py-4">
                  {/* Previous Button */}
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((page, index) => {
                    if (page === "...") {
                      return (
                        <span key={`ellipsis-${index}`} className="text-gray-400 px-1 select-none font-medium text-sm">
                          ...
                        </span>
                      );
                    }
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-medium transition-colors text-sm cursor-pointer ${
                          currentPage === page
                            ? "bg-[#00B207] text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  {/* Next Button */}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className={`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-colors cursor-pointer ${
                      currentPage === totalPages
                        ? "bg-white text-gray-300 cursor-not-allowed"
                        : "bg-white hover:bg-gray-50 text-gray-800 hover:border-gray-300"
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ShopPage;
