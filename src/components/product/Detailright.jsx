import { useState } from "react";
import { FaInstagram, FaPinterestP, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wish/wishlistSlice";

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

export default function DetailRight({ product }) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const wishlisted = useAppSelector((state) =>
    product ? state.wishlist.items.some((item) => item.id === product.id) : false,
  );

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  return (
    <div className="flex items-center justify-center bg-white py-4 sm:py-6">
      <div className="w-full">
        <div className="flex flex-wrap items-start gap-3">
          <h1 className="flex items-center text-[24px] font-semibold leading-[120%] text-gray_900 sm:text-[30px] lg:text-[36px]">
            {product?.name || "Product"}
          </h1>
          <span className="mt-1.5 self-start rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            In Stock
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <StarRating count={4} />
          <span className="text-sm text-gray-500">{product?.rating || 0} Review</span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">SKU:</span> 2,51,594
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
          <span className="text-2xl font-medium text-gray-400 line-through">
            {product?.originalPrice ? `$${product.originalPrice}` : ""}
          </span>
          <span className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ${product?.price ?? "0.00"}
          </span>
          <span className="rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-500">
            64% Off
          </span>
        </div>

        <hr className="my-6 border-gray-100" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-gray-700">Brand:</span>
            <div className="flex flex-col items-center rounded-xl border border-gray-200 px-4 py-2 shadow-sm">
              <span className="text-lg text-green-600">🌿</span>
              <span className="text-xs font-medium italic text-gray-500">farmary</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-base font-semibold text-gray-700">Share item:</span>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-green-600 hover:text-white sm:h-9 sm:w-9">
              <RiFacebookFill />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-green-600 hover:text-white sm:h-9 sm:w-9">
              <IoLogoTwitter />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-green-600 hover:text-white sm:h-9 sm:w-9">
              <FaPinterestP />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-green-600 hover:text-white sm:h-9 sm:w-9">
              <FaInstagram />
            </button>
          </div>
        </div>

        <p className="mt-5 text-base leading-relaxed text-gray-500 sm:text-[15px]">
          {product?.description || "No description available for this product."}
        </p>

        <hr className="my-6 border-gray-100" />

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-3 rounded-full bg-gray-100 px-4 py-2">
            <button
              onClick={decrement}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg font-bold leading-none text-gray-600 shadow transition-colors hover:bg-gray-50"
            >
              −
            </button>
            <span className="w-6 text-center text-base font-semibold text-gray-800">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg font-bold leading-none text-gray-600 shadow transition-colors hover:bg-gray-50"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="flex flex-1 min-w-[180px] items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-green-600 active:bg-green-700"
            onClick={() => product && dispatch(addToCart({ ...product, quantity }))}
          >
            Add to Cart
            <HiOutlineShoppingBag size={15} />
          </button>

          <button
            type="button"
            onClick={() => product && dispatch(addToWishlist(product))}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 transition-colors hover:bg-green-100"
          >
            <FaRegHeart className={wishlisted ? "text-red-500" : "text-gray-500"} />
          </button>
        </div>

        <hr className="my-6 border-gray-100" />

        <div className="space-y-3 text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-gray-800">Category:</span>
            <span className="text-gray-400">Vegetables</span>
          </div>
          <div className="flex flex-wrap items-start gap-2">
            <span className="font-bold text-gray-800">Tag:</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className={`cursor-pointer text-gray-400 transition-colors hover:text-gray-600 ${
                  tag === "Chinese" ? "text-gray-600 underline" : ""
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
