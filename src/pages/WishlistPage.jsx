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
      <Section className="pt-10 pb-20">
        <Container>
          <div>
            <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900 text-center">
              My Wishlist
            </h3>
            <div className="w-full space-y-10 mt-8">
              <table className="w-full">
                <thead>
                  <tr className="text-gray_500 text-[14px] font-medium tracking-[3%] shadow-sm rounded-md border border-gray_100">
                    <th className="px-5 h-[72px] text-left">Product</th>
                    <th className="px-5 h-[72px] text-left">Price</th>
                    <th className="px-5 h-[72px] text-center">Stock Status</th>
                    {/* <th className="px-5 h-[72px] text-right">Action</th> */}
                  </tr>
                </thead>

                <tbody>
                  {wishlistItems.map((item) => (
                    <tr key={item.id} className="text-black text-[16px] shadow-sm rounded-md border border-gray_100">
                      <td className="px-5 h-[72px]">
                        <div className="flex items-center gap-2">
                          <div className="size-[54px] overflow-hidden py-3">
                            <img src={normalizeImage(item.image)} alt={item.name} className="h-full" />
                          </div>
                          <p>{item.name}</p>
                        </div>
                      </td>
                      <td className="px-5 h-[72px] py-12.5">${item.price.toFixed(2)}</td>
                      <td className="px-5 h-[72px] text-center">
                        <span className="text-green-600 font-medium">In Stock</span>
                      </td>
                      <td className="px-5 h-[72px]">
                        <div className="flex items-center justify-end gap-3">
                          <Button
                            variant="green"
                            onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                          >
                            Add to Cart
                          </Button>
                          <button
                            className="p-2 rounded-full border border-gray_200"
                            onClick={() => dispatch(removeFromWishlist(item.id))}
                          >
                            <X size={16} className="text-gray_600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                      <tr className="text-black text-[16px] shadow-sm rounded-md border border-gray_100 ">
                          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-semibold text-base py-8 pl-6">Share </span>
            <button className="w-9 h-9 rounded-full  hover:bg-green-600 hover:text-white  text-gray-600  flex items-center justify-center transition-colors">
              {/* <FacebookIcon /> */}
              <RiFacebookFill />
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-green-600 hover:text-white  text-gray-600 flex items-center justify-center transition-colors">
             
             <IoLogoTwitter />
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-green-600 hover:text-white  text-gray-600 flex items-center justify-center transition-colors">
             <FaPinterestP />
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-green-600 hover:text-white  text-gray-600 flex items-center justify-center transition-colors">
             <FaInstagram />
            </button>
          </div>
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
