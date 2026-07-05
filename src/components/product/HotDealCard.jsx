import React from "react";
import deal from "../../assets/deal.png";
import { useQuickView } from "../../context/QuickViewContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import Button from "../global/Button";
import UseCountDown from "../../hooks/UseCountDown";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wish/wishlistSlice";
import { Link } from "react-router";

const HotDealCard = ({ product }) => {
  const dispatch = useAppDispatch();
  const { showQuickView } = useQuickView();
  const { name, image, price, originalPrice, rating, sale } = product;
  const { days, hours, minutes, seconds } = UseCountDown("2026-08-29");
  const discount =
    originalPrice &&
    Math.round(((originalPrice - price) / originalPrice) * 100);
  const imageSrc = image || deal;

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-md border border-gray-100 bg-white transition-all duration-300 hover:border-success_207 hover:shadow-sm hover:shadow-success_207 lg:h-[654px] lg:w-[528px]">
      {sale && (
        <span className="absolute left-3 top-3 z-10 rounded-md bg-success_error px-3 py-1 text-sm font-medium text-white">
          Sale {discount}%
        </span>
      )}

      <div className="absolute inset-x-3 bottom-3 z-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center lg:bottom-auto lg:left-6 lg:top-[377px] lg:flex-row lg:gap-2 lg:pr-2">
        <button
          type="button"
          onClick={() => dispatch(addToWishlist(product))}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray_50 transition hover:bg-green-500 hover:text-white lg:h-auto lg:w-auto lg:p-2.5 lg:opacity-0 lg:group-hover:opacity-100"
        >
          <IoMdHeartEmpty size={20} />
        </button>
        <Button
          type="button"
          variant="green"
          className="w-full px-3 py-2 text-[12px] sm:w-auto sm:text-[14px] lg:w-[371px] lg:!text-center lg:px-4 lg:py-4"
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        >
          Add to Cart <HiOutlineShoppingBag size={15} />
        </Button>
        <button
          type="button"
          onClick={() => showQuickView(product)}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray_50 transition hover:bg-green-500 hover:text-white lg:h-auto lg:w-auto lg:p-2.5 lg:opacity-0 lg:group-hover:opacity-100"
        >
          <LuEye size={20} />
        </button>
      </div>

      <Link to={`/product/${product.id}`}>
        <div className="h-[260px] w-full sm:h-[320px] lg:h-[448px] lg:w-[525px]">
          <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
        </div>
      </Link>

      <div className="px-3 pb-3 pt-4 sm:px-4">
        <div className="flex items-center justify-center text-center">
          <div>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-[16px] font-normal leading-[150%] text-gray_700 group-hover:text-success_207 sm:text-[18px]">
                {name}
              </h3>
            </Link>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[20px] font-semibold leading-[150%] text-gray_900 sm:text-[24px]">
                ${price}
              </span>

              {originalPrice && (
                <span className="text-[18px] font-normal leading-[150%] text-gray_400 line-through sm:text-[24px]">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 pt-2 text-branding_warm">
          {[1, 2, 3, 4, 5].map((star) => {
            if (rating >= star) {
              return <FaStar key={star} size={18} />;
            }

            if (rating >= star - 0.5) {
              return <FaStarHalfAlt key={star} size={18} />;
            }

            return <FaRegStar key={star} size={18} />;
          })}
        </div>
      </div>
      <p className="pb-1.5 text-center text-[13px] font-normal leading-[18px] text-gray_400 sm:text-[14px]">
        Hurry up! Offer ends In:
      </p>
      <div className="flex items-center justify-center gap-4 px-2 pb-4 sm:gap-6 lg:gap-10">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[16px] font-medium leading-[150%] text-gray-900 sm:text-[18px]">
            {days}
          </span>
          <span className="text-[10px] font-medium leading-[100%] tracking-[3%] text-gray-400">
            Days
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[16px] font-medium leading-[150%] text-gray-900 sm:text-[18px]">
            {hours}
          </span>
          <span className="text-[10px] font-medium leading-[100%] tracking-[3%] text-gray-400">
            Hours
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[16px] font-medium leading-[150%] text-gray-900 sm:text-[18px]">
            {minutes}
          </span>
          <span className="text-[10px] font-medium leading-[100%] tracking-[3%] text-gray-400">
            Mins
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[16px] font-medium leading-[150%] text-gray-900 sm:text-[18px]">
            {seconds}
          </span>
          <span className="text-[10px] font-medium leading-[100%] tracking-[3%] text-gray-400">
            Secs
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotDealCard;
