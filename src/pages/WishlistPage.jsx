import React from "react";
import PageHading from "../components/global/PageHading";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import { X } from "lucide-react";
import Button from "../components/global/Button";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeFromWishlist } from "../features/wish/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";

const WishlistPage = ({showPageHeading=true}) => {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const normalizeImage = (src) => (src ? src.replace(/^\.\//, "/") : "");

  return (
    <>
      {showPageHeading&&<PageHading pagename="Wishlist" />}
      <Section className="pt-5 lg:pt-10 pb-8 lg:pb-20">
        <Container>
          <div>
            <h3 className="font-semibold text-[16px] lg:text-[32px] leading-[120%] text-gray_900 text-center">
              My Wishlist
            </h3>
         <div className="w-full mt-8 overflow-x-auto">
  <table className="min-w-[750px] w-full border-separate border-spacing-y-3">
    <thead>
      <tr className="text-gray_500 text-xs lg:text-sm font-medium shadow-sm border border-gray_100">
        <th className="px-4 py-4 text-left">Product</th>
        <th className="px-4 py-4 text-left">Price</th>
        <th className="px-4 py-4 text-center">Stock Status</th>
        {/* <th className="px-4 py-4 text-right">Action</th> */}
      </tr>
    </thead>

    <tbody>
      {wishlistItems.map((item) => (
        <tr
          key={item.id}
          className="shadow-sm border border-gray_100 bg-white"
        >
          <td className="px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-14 lg:h-14 flex-shrink-0">
                <img
                  src={normalizeImage(item.image)}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs lg:text-base whitespace-nowrap">
                {item.name}
              </p>
            </div>
          </td>

          <td className="px-4 py-4 text-xs lg:text-base">
            ${item.price.toFixed(2)}
          </td>

          <td className="px-4 py-4 text-center">
            <span className="text-green-600 text-xs lg:text-base font-medium">
              In Stock
            </span>
          </td>

          <td className="px-4 py-4">
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="green"
                className="text-xs lg:text-sm px-3 lg:px-5"
                onClick={() =>
                  dispatch(addToCart({ ...item, quantity: 1 }))
                }
              >
                Add to Cart
              </Button>

              <button
                className="p-2 rounded-full border border-gray_200"
                onClick={() => dispatch(removeFromWishlist(item.id))}
              >
                <X size={16} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>

    <tfoot>
      <tr>
        <td colSpan={4} className="px-4 py-6 border border-gray_100">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-semibold text-sm lg:text-base">
              Share
            </span>

            <button className="w-9 h-9 rounded-full hover:bg-green-600 hover:text-white flex items-center justify-center">
              <RiFacebookFill />
            </button>

            <button className="w-9 h-9 rounded-full hover:bg-green-600 hover:text-white flex items-center justify-center">
              <IoLogoTwitter />
            </button>

            <button className="w-9 h-9 rounded-full hover:bg-green-600 hover:text-white flex items-center justify-center">
              <FaPinterestP />
            </button>

            <button className="w-9 h-9 rounded-full hover:bg-green-600 hover:text-white flex items-center justify-center">
              <FaInstagram />
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WishlistPage;
