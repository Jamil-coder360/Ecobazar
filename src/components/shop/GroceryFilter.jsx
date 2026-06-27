import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Banner_6 from "../../assets/Bannar-6.png"
const categories = [
  { name: "Fresh Fruit", count: 25, total: 134 },
  { name: "Vegetables", count: 150, total: 150 },
  { name: "Cooking", count: 54, total: 54 },
  { name: "Snacks", count: 47, total: 47 },
  { name: "Beverages", count: 43, total: 43 },
  { name: "Beauty & Health", count: 38, total: 38 },
  { name: "Bread & Bakery", count: 15, total: 15 },
];

const tags = [
  "Healthy", "Low fat", "Vegetarian", "Kid foods",
  "Vitamins", "Bread", "Meat", "Snacks", "Tiffin",
  "Launch", "Dinner", "Breackfast", "Fruit",
];

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

function StarRating({ count, filled }) {
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

function SectionHeader({ title, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-3 text-left"
    >
      <span className="font-medium text-gray_900 text-[20px] leading-[150%]">{title}</span>
      <ChevronUp   className={`w-4 h-4 text-gray-500 transition-transform ${open ? "" : "rotate-180"}`}/>
      {/* <svg
        className={`w-4 h-4 text-gray-500 transition-transform ${open ? "" : "rotate-180"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg> */}
    </button>
  );
}

export default function GroceryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");
  const [priceRange, setPriceRange] = useState([50, 15000]);
  const [selectedRatings, setSelectedRatings] = useState([4]);
  const [selectedTags, setSelectedTags] = useState(["Low fat", "Dinner"]);
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    rating: true,
    tags: true,
  });

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleRating = (r) =>
    setSelectedRatings((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    );

  const toggleTag = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

    const getBgImage = (image) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

  return (
    <div className="">
      <div className="w-full max-w-[312px] ">
        {/* Header */}
        <div className="px-4  pb-6 flex items-center justify-between">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
            Filter
          </button>
        </div>

        <div className=" space-y-1">
          {/* Categories */}
          <div className=" p-3 mb-2">
            <SectionHeader
              title="All Categories"
              open={openSections.categories}
              onToggle={() => toggleSection("categories")}
            />
            {openSections.categories && (
              <div className="space-y-2 mt-1">
                {categories.map((cat) => (
                  <label
                    key={cat.name}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selectedCategory === cat.name
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300 group-hover:border-green-400"
                      }`}
                      onClick={() => setSelectedCategory(cat.name)}
                    >
                      {selectedCategory === cat.name && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                    <span
                      className="text-sm text-gray_900 flex-1"
                      onClick={() => setSelectedCategory(cat.name)}
                    >
                      {cat.name}{" "}
                      <span className="text-gray-400">({cat.count})</span>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price */}
          <div className="border-b border-gray-100 pb-4">
            <SectionHeader
              title="Price"
              open={openSections.price}
              onToggle={() => toggleSection("price")}
            />
            {openSections.price && (
              <div className="mt-2 px-1">
                <div className="relative">
                  <input
                    type="range"
                    min={50}
                    max={15000}
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #22c55e ${((priceRange[0] - 50) / 1450) * 100}%, #22c55e ${((priceRange[1] - 50) / 1450) * 100}%, #e5e7eb ${((priceRange[1] - 50) / 1450) * 100}%)`,
                      accentColor: "#22c55e",
                    }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Price:{" "}
                  <span className="font-medium text-gray-700">
                    {priceRange[0]} — {priceRange[1]}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="border-b border-gray-100 pb-4">
            <SectionHeader
              title="Rating"
              open={openSections.rating}
              onToggle={() => toggleSection("rating")}
            />
            {openSections.rating && (
              <div className="space-y-2 mt-1">
                {ratings.map((r) => (
                  <label key={r} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selectedRatings.includes(r)
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300 group-hover:border-green-400"
                      }`}
                      onClick={() => toggleRating(r)}
                    >
                      {selectedRatings.includes(r) && (
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                          <path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center gap-2" onClick={() => toggleRating(r)}>
                      <StarRating count={r} />
                      <span className="text-sm text-gray-600">
                        {r === 5 ? "5.0" : `${r}.0 & up`}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Popular Tags */}
          <div className="border-b border-gray-100 pb-4">
            <SectionHeader
              title="Popular Tag"
              open={openSections.tags}
              onToggle={() => toggleSection("tags")}
            />
            {openSections.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all font-medium ${
                      selectedTags.includes(tag)
                        ? "bg-green-500 text-white border-green-500"
                        : tag === "Dinner"
                        ? "border-violet-400 text-violet-600 bg-violet-50 hover:bg-violet-100"
                        : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Promo Banner */}
          <div className="rounded-xl overflow-hidden w-[312px] h-[295px] bg-gray-100 mt-4 relative" style={getBgImage(Banner_6)}>
            <div className="px-5 pt-4 pb-2 relative z-10">
              <p className="text-2xl font-bold text-orange-500">
                79% <span className="text-gray-700 font-semibold text-lg">Discount</span>
              </p>
              <p className="text-sm text-gray-500">on your first order</p>
              <Link to="/shop" className="mt-2 text-green-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Shop Now →
              </Link>
            </div>
       
          </div>

          {/* Sale Products */}
          <div className="pt-4">
            <h3 className="font-bold text-gray-800 text-base mb-3">Sale Products</h3>
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
                    className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center text-2xl flex-shrink-0`}
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
      </div>
    </div>
  );
}
