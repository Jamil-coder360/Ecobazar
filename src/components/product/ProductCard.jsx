import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { useQuickView } from "../../context/QuickViewContext";
import { Link } from "react-router";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wish/wishlistSlice";
import { useCartPopup } from "../../context/CartPopupContext";

const ProductCard = ({ product }) => {
  const dispatch = useAppDispatch();
  const { showQuickView } = useQuickView();
  const {showCartPopup} = useCartPopup();
  const { name, image, price, originalPrice, rating, sale } = product;
  const imageUrl = image ? image.replace(/^\.\//, "/") : "";
  const discount =
    originalPrice &&
    Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className=" relative group bg-white border border-gray-100 hover:border-success_207 hover:shadow-success_207 rounded-md hover:shadow-sm transition-all duration-300 w-full h-[327px] overflow-hidden ">
      {/* Sale Badge */}
      {sale && (
        <span className=" absolute top-4 left-4  bg-success_error text-white text-sm font-medium px-3 py-1 rounded-md">
          Sale {discount}%
        </span>
      )}

      {/* floating icons */}

      <button
        type="button"
        onClick={() => dispatch(addToWishlist(product))}
        className=" absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2.5 rounded-full bg-gray_50 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
      >
        <IoMdHeartEmpty size={20} />
      </button>
      <button
        type="button"
        onClick={() => showQuickView?.(product)}
        className="absolute top-15.5 right-4 opacity-0 group-hover:opacity-100 p-2.5 rounded-full bg-gray_50 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
      >
        <LuEye size={20} />
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="w-full h-[240px]">
          <img src={imageUrl} alt={name} className="w-full h-full " />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-3">
        {/* 
        <h3 className="text-[14px] leading-[150%] font-normal text-gray_700">
          {name}
        </h3> */}
        <div className="flex items-center justify-between">
          <div>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-[14px] leading-[150%] font-normal text-gray_700 group-hover:text-success_207">
                {name}
              </h3>
            </Link>
            <div className="flex items-center gap-.5">
              <span className="text-base font-medium text-gray_900">
                ${price}
              </span>

              {originalPrice && (
                <span className="text-base text-gray_400 font-normal line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
        onClick={() => {
  dispatch(addToCart({ ...product, quantity: 1 }));
  showCartPopup(product);
}}
            className="p-2.5 rounded-full bg-gray_50 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition"
          >
            <HiOutlineShoppingBag size={20} />
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 pt-1.5 text-branding_warm">
          {[1, 2, 3, 4, 5].map((star) => {
            if (rating >= star) {
              return <FaStar key={star} size={12} />;
            }

            if (rating >= star - 0.5) {
              return <FaStarHalfAlt key={star} size={12} />;
            }

            return <FaRegStar key={star} size={12} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
