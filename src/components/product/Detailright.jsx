import { HeartOffIcon } from "lucide-react";
import { useState } from "react";
import { FaInstagram, FaPinterestP, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";

function StarRating({ count, total = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const tags = ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"];

export default function DetailRight() {
  const [quantity, setQuantity] = useState(5);
  const [wishlisted, setWishlisted] = useState(false);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  return (
    <div className=" bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">

        {/* Title + Badge */}
        <div className="flex items-start gap-4 flex-wrap">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Chinese Cabbage
          </h1>
          <span className="mt-1.5 px-3 py-1 rounded-lg bg-green-100 text-green-700 text-sm font-semibold self-start">
            In Stock
          </span>
        </div>

        {/* Rating + SKU */}
        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <StarRating count={4} />
          <span className="text-gray-500 text-sm">4 Review</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-700">SKU:</span> 2,51,594
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 mt-5 flex-wrap">
          <span className="text-2xl text-gray-400 line-through font-medium">$48.00</span>
          <span className="text-4xl font-extrabold text-gray-900">$17.28</span>
          <span className="px-4 py-1.5 rounded-full bg-red-100 text-red-500 text-sm font-semibold">
            64% Off
          </span>
        </div>

        <hr className="my-6 border-gray-100" />

        {/* Brand + Share */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-semibold text-base">Brand:</span>
            <div className="border border-gray-200 rounded-xl px-4 py-2 flex flex-col items-center shadow-sm">
              <span className="text-green-600 text-lg">🌿</span>
              <span className="text-gray-500 text-xs italic font-medium">farmary</span>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-semibold text-base">Share item:</span>
            <button className="w-9 h-9 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors">
              {/* <FacebookIcon /> */}
              <RiFacebookFill />
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 flex items-center justify-center transition-colors">
             
             <IoLogoTwitter />
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 flex items-center justify-center transition-colors">
             <FaPinterestP />
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 flex items-center justify-center transition-colors">
             <FaInstagram />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-gray-500 leading-relaxed text-base">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla
          varius magna a consequat pulvinar.
        </p>

        <hr className="my-6 border-gray-100" />

        {/* Quantity + Add to Cart + Wishlist */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Quantity stepper */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
            <button
              onClick={decrement}
              className="w-7 h-7 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors font-bold text-lg leading-none"
            >
              −
            </button>
            <span className="w-6 text-center font-semibold text-gray-800 text-base">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="w-7 h-7 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors font-bold text-lg leading-none"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button className="flex-1 min-w-[180px] flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold text-base rounded-full py-3 px-6 transition-colors shadow-sm">
            Add to Cart
            <HiOutlineShoppingBag size={15} />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => setWishlisted((w) => !w)}
            className="w-12 h-12 rounded-full bg-green-50 hover:bg-green-100 flex items-center justify-center transition-colors"
          >
            {/* <HeartIc filled={wishlisted} /> */}
            <FaRegHeart />
          </button>
        </div>

        <hr className="my-6 border-gray-100" />

        {/* Category + Tags */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-gray-800">Category:</span>
            <span className="text-gray-400">Vegetables</span>
          </div>
          <div className="flex items-start gap-2 flex-wrap">
            <span className="font-bold text-gray-800">Tag:</span>
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={`text-gray-400 hover:text-gray-600 cursor-pointer transition-colors ${
                  tag === "Chinese" ? "underline text-gray-600" : ""
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
