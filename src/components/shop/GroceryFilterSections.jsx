import { ChevronUp } from "lucide-react";

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

function SectionHeader({ title, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-3 text-left"
    >
      <span className="font-medium text-gray_900 text-[20px] leading-[150%]">
        {title}
      </span>
      <ChevronUp
        className={`w-4 h-4 text-gray-500 transition-transform ${open ? "" : "rotate-180"}`}
      />
    </button>
  );
}

export default function GroceryFilterSections({
  categories,
  loadingCategories,
  currentCategory,
  changeCategory,
  currentPriceRange,
  changePriceRange,
  ratings,
  currentRatings,
  changeToggleRating,
  tags,
  loadingTags,
  currentTags,
  changeToggleTag,
  openSections,
  toggleSection,
}) {
  return (
    <>
      <div className="p-3 mb-2">
        <SectionHeader
          title="All Categories"
          open={openSections.categories}
          onToggle={() => toggleSection("categories")}
        />
        {openSections.categories && (
          <div className="space-y-2 mt-1">
            {loadingCategories
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 rounded-lg bg-gray-200 animate-pulse"
                  />
                ))
              : categories.map((cat) => (
                  <label
                    key={cat.slug}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        currentCategory === cat.slug
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300 group-hover:border-green-400"
                      }`}
                      onClick={() => changeCategory(cat.slug)}
                    >
                      {currentCategory === cat.slug && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                    <span
                      className="text-sm text-gray_900 flex-1"
                      onClick={() => changeCategory(cat.slug)}
                    >
                      {cat.label || cat.name}
                      {cat.count !== undefined && (
                        <span className="text-gray-400"> ({cat.count})</span>
                      )}
                    </span>
                  </label>
                ))}
          </div>
        )}
      </div>

      <div className="border-b border-gray-100 pb-4">
        <SectionHeader
          title="Price"
          open={openSections.price}
          onToggle={() => toggleSection("price")}
        />
        {openSections.price && (
          <div className="mt-2 px-1 space-y-4">
            <div className="relative h-10">
              <input
                type="range"
                min={0}
                max={1500}
                value={currentPriceRange[0]}
                onChange={(e) =>
                  changePriceRange([
                    Math.min(Number(e.target.value), currentPriceRange[1] - 1),
                    currentPriceRange[1],
                  ])
                }
                className="absolute inset-x-0 top-0 w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #22c55e ${(currentPriceRange[0] / 1500) * 100}%, #e5e7eb ${(currentPriceRange[0] / 1500) * 100}%)`,
                  accentColor: "#22c55e",
                }}
              />
              <input
                type="range"
                min={0}
                max={1500}
                value={currentPriceRange[1]}
                onChange={(e) =>
                  changePriceRange([
                    currentPriceRange[0],
                    Math.max(Number(e.target.value), currentPriceRange[0] + 1),
                  ])
                }
                className="absolute inset-x-0 top-0 w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #e5e7eb ${(currentPriceRange[1] / 1500) * 100}%, #22c55e ${(currentPriceRange[1] / 1500) * 100}%)`,
                  accentColor: "#22c55e",
                }}
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>
                Min:{" "}
                <span className="font-medium text-gray-700">
                  {currentPriceRange[0]}
                </span>
              </span>
              <span>
                Max:{" "}
                <span className="font-medium text-gray-700">
                  {currentPriceRange[1]}
                </span>
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-gray-100 pb-4">
        <SectionHeader
          title="Rating"
          open={openSections.rating}
          onToggle={() => toggleSection("rating")}
        />
        {openSections.rating && (
          <div className="space-y-2 mt-1">
            {ratings.map((r) => (
              <label
                key={r}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                    currentRatings.includes(r)
                      ? "border-green-500 bg-green-500"
                      : "border-gray-300 group-hover:border-green-400"
                  }`}
                  onClick={() => changeToggleRating(r)}
                >
                  {currentRatings.includes(r) && (
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M10 3L5 8.5 2 5.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className="flex items-center gap-2"
                  onClick={() => changeToggleRating(r)}
                >
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

      <div className="border-b border-gray-100 pb-4">
        <SectionHeader
          title="Popular Tag"
          open={openSections.tags}
          onToggle={() => toggleSection("tags")}
        />
        {openSections.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {loadingTags
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 min-w-18 rounded-full bg-gray-200 animate-pulse"
                  />
                ))
              : tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => changeToggleTag(tag)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all font-medium ${
                      currentTags.includes(tag)
                        ? "bg-green-500 text-white border-green-500"
                        : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
          </div>
        )}
      </div>
    </>
  );
}
