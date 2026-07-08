import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Banner_6 from "../../assets/Bannar-6.png";
import GroceryFilterSections from "./GroceryFilterSections";

const ratings = [5, 4, 3, 2, 1];

const products = [
  {
    name: "Red Capsicum",
    price: 32.0,
    original: 20.99,
    rating: 4,
    color: "bg-red-100",
    emoji: "🫑",
    highlighted: false,
  },
  {
    name: "Chanise Cabbage",
    price: 24.0,
    original: 20.99,
    rating: 4,
    color: "bg-yellow-100",
    emoji: "🥬",
    highlighted: true,
  },
  {
    name: "Green Capsicum",
    price: 32.0,
    original: 20.99,
    rating: 4,
    color: "bg-green-100",
    emoji: "🥒",
    highlighted: false,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GroceryFilter({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedRatings,
  onToggleRating,
  selectedTags,
  onToggleTag,
  tags: propTags,
  loadingTags: propLoadingTags,
}) {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [localSelectedCategory, setLocalSelectedCategory] =
    useState("fresh-vegetables");
  const [localPriceRange, setLocalPriceRange] = useState([0, 1500]);
  const [localSelectedRatings, setLocalSelectedRatings] = useState([]);
  const [localSelectedTags, setLocalSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    rating: true,
    tags: true,
  });

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingTags, setLoadingTags] = useState(true);
  const currentCategory = selectedCategory ?? localSelectedCategory;
  const currentPriceRange = priceRange ?? localPriceRange;
  const currentRatings = selectedRatings ?? localSelectedRatings;
  const currentTags = selectedTags ?? localSelectedTags;
  const changeCategory = onCategoryChange ?? setLocalSelectedCategory;
  const changePriceRange = onPriceRangeChange ?? setLocalPriceRange;
  const changeToggleRating =
    onToggleRating ??
    ((r) => {
      setLocalSelectedRatings((prev) =>
        prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r],
      );
    });
  const changeToggleTag =
    onToggleTag ??
    ((tag) => {
      setLocalSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
      );
    });

  const displayTags = propTags !== undefined ? propTags : tags;
  const displayLoadingTags = propLoadingTags !== undefined ? propLoadingTags : loadingTags;

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  useEffect(() => {
    Promise.resolve().then(() => setLoadingCategories(true));
    fetch("https://ecobazar-ktbd.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setCategories([]))
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    Promise.resolve().then(() => setLoadingTags(true));
    fetch("https://ecobazar-ktbd.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueTags = new Set();
        data.forEach((product) => {
          if (Array.isArray(product.tags)) {
            product.tags.forEach((tag) => uniqueTags.add(tag));
          }
        });
        setTags([...uniqueTags].sort());
      })
      .catch(() => setTags([]))
      .finally(() => setLoadingTags(false));
  }, []);

  const getBgImage = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  return (
    <div className="">
      <div className="w-full lg:max-w-78 ">
        {/* Header */}
        <div className="  pb-6 flex items-center justify-between">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
            Filter
          </button>

          <div
            className="flex sm:hidden cursor-pointer text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>

        <div className="space-y-1 hidden sm:block">
          <GroceryFilterSections
            categories={categories}
            loadingCategories={loadingCategories}
            currentCategory={currentCategory}
            changeCategory={changeCategory}
            currentPriceRange={currentPriceRange}
            changePriceRange={changePriceRange}
            ratings={ratings}
            currentRatings={currentRatings}
            changeToggleRating={changeToggleRating}
            tags={displayTags}
            loadingTags={displayLoadingTags}
            currentTags={currentTags}
            changeToggleTag={changeToggleTag}
            openSections={openSections}
            toggleSection={toggleSection}
          />

          {/* Promo Banner */}
          <div
            className="rounded-xl overflow-hidden w-78 h-73.75 bg-gray-100 mt-4 relative hidden lg:block"
            style={getBgImage(Banner_6)}
          >
            <div className="px-5 pt-4 pb-2 relative z-10">
              <p className="text-2xl font-bold text-orange-500">
                79%{" "}
                <span className="text-gray-700 font-semibold text-lg">
                  Discount
                </span>
              </p>
              <p className="text-sm text-gray-500">on your first order</p>
              <Link
                to="/shop"
                className="mt-2 text-green-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Sale Products */}
          <div className="pt-4">
            <h3 className="font-bold text-gray-800 text-base mb-3">
              Sale Products
            </h3>
            <div className="space-y-3">
              {products.map((p) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                    p.highlighted
                      ? "border-green-400 bg-white shadow-sm"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center text-2xl shrink-0`}
                  >
                    {p.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate ${
                        p.highlighted ? "text-green-600" : "text-gray-800"
                      }`}
                    >
                      {p.name}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-bold text-gray-800">
                        ${p.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ${p.original.toFixed(2)}
                      </span>
                    </div>
                    <StarRating count={p.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* mobile filter */}
        {isOpen && (
          <GroceryFilterSections
            categories={categories}
            loadingCategories={loadingCategories}
            currentCategory={currentCategory}
            changeCategory={changeCategory}
            currentPriceRange={currentPriceRange}
            changePriceRange={changePriceRange}
            ratings={ratings}
            currentRatings={currentRatings}
            changeToggleRating={changeToggleRating}
            tags={displayTags}
            loadingTags={displayLoadingTags}
            currentTags={currentTags}
            changeToggleTag={changeToggleTag}
            openSections={openSections}
            toggleSection={toggleSection}
          />
        )}
      </div>
    </div>
  );
}
