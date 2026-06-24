import React from "react";
import deal from "../../assets/deal.png";
import { useQuickView } from "../../context/QuickViewContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import Button from "../global/Button";
import UseCountDown from "../../hooks/UseCountDown";

const HotDealCard = ({ product }) => {
  const { showQuickView } = useQuickView();
  const { name, image, price, originalPrice, rating, sale } = product;
  const {days,hours ,minutes,seconds} = UseCountDown("2026-08-29")
  const discount =
    originalPrice &&
    Math.round(((originalPrice - price) / originalPrice) * 100);
  return (
    <div className=" relative group bg-white border border-gray-100 hover:border-success_207 hover:shadow-success_207 rounded-md hover:shadow-sm transition-all duration-300 w-[528px] h-[654px] overflow-hidden ">
      {/* Sale Badge */}
      {sale && (
        <span className=" absolute top-4 left-4  bg-success_error text-white text-sm font-medium px-3 py-1 rounded-md">
          Sale {discount}%
        </span>
      )}
      {/* Sale Badge */}
      {/* {sale && ( */}
      <span className=" absolute top-4 left-27  bg-[#2388FF] text-white text-sm font-medium px-3 py-1 rounded-md">
        Sale {discount}%
      </span>
      {/* )} */}

      {/* floating icons */}

      <div className="flex items-center justify-center gap-2 absolute top-[377px] left-6">
        <button className="  opacity-0 group-hover:opacity-100 p-2.5 rounded-full bg-gray_50 flex items-center justify-center hover:bg-green-500 hover:text-white transition">
          <IoMdHeartEmpty size={20} />
        </button>
        <Button variant="green" className="w-[371px] !text-center">
          Add to Cart <HiOutlineShoppingBag size={15} />
        </Button>
        <button
          type="button"
          onClick={() => showQuickView(product)}
          className="opacity-0 group-hover:opacity-100 p-2.5 rounded-full bg-gray_50 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
        >
          <LuEye size={20} />
        </button>
      </div>

      {/* Product Image */}
      <div className="w-[525px] h-[448px]">
        <img src={deal} alt={name} className="w-full h-full " />
      </div>

      {/* Product Info */}
      <div className="p-3">
        <div className="flex items-center justify-center text-center">
          <div>
            <h3 className="text-[18px] leading-[150%] font-normal text-gray_700 group-hover:text-success_207">
              {name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-[24px] font-semibold leading-[150%] text-gray_900">
                ${price}
              </span>

              {originalPrice && (
                <span className="text-[24px] leading-[150%]  text-gray_400 font-normal line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Rating */}
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
          <p className="text-[14px] leading-[18px] text-gray_400 text-center font-normal pb-1.5">Hurry up! Offer ends In:</p>
{/* timmer layout */}
        <div className="flex items-center justify-center gap-10 ">
              <div className="flex flex-col items-center justify-center  ">
                <span className="text-[18px] leading-[150%]  font-medium text-gray-900">{days}</span>
                <span className="text-[10px] leading-[100%] tracking-[3%] font-medium text-gray-400">
                  Days
                </span>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <span className="text-[18px] leading-[150%]  font-medium text-gray-900">{hours}</span>
                <span className="text-[10px] leading-[100%] tracking-[3%] font-medium text-gray-400">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center justify-center  ">
                <span className="text-[18px] leading-[150%]  font-medium text-gray-900">{minutes}</span>
                <span className="text-[10px] leading-[100%] tracking-[3%] font-medium text-gray-400">
                  Mins
                </span>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <span className="text-[18px] leading-[150%]  font-medium text-gray-900">{seconds}</span>
                <span className="text-[10px] leading-[100%] tracking-[3%] font-medium text-gray-400">
                 Secs
                </span>
              </div>
            </div>
    </div>
  );
};

export default HotDealCard;
