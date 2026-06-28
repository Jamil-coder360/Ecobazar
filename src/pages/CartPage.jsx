import React from "react";
import PageHading from "../components/global/PageHading";
import { X } from "lucide-react";
import Button from "../components/global/Button";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";
import { Link } from "react-router";

const CartPage = ({ showPageHeading = true }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const normalizeImage = (src) => (src ? src.replace(/^\.\//, "/") : "");
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = cartItems.length ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <>
      {showPageHeading && <PageHading pagename="Shopping cart" />}
      <Section className="pt-10 pb-20">
        <Container>
          <div>
            <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900 text-center mb-8">
              Shopping cart
            </h3>
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_424px] gap-6 items-start">
              <div className="w-full space-y-10 ">
                <div className=" overflow-scroll rounded-xl border border-gray_100">
                  <table className="w-full">
                    <thead>
                      <tr className="text-gray_500 text-[14px] font-medium tracking-[3%] shadow-sm rounded-md border border-gray_100">
                        <th className="px-5 h-[72px] text-left">Product</th>
                        <th className="px-5 h-[72px] text-left">Price</th>
                        <th className="px-5 h-[72px] text-center">Quantity</th>
                        <th className="px-5 h-[72px] text-center">Subtotal</th>
                        {/* <th className="px-5 h-[72px] text-right">Action</th> */}
                      </tr>
                    </thead>

                    <tbody>
                      {cartItems.map((item) => (
                        <tr
                          key={item.id}
                          className="text-black text-[16px] shadow-sm rounded-md border border-gray_100"
                        >
                          <td className="px-5 h-[72px]">
                            <div className="flex items-center gap-2">
                              <div className="size-[54px] overflow-hidden py-3">
                                <img
                                  src={normalizeImage(item.image)}
                                  alt={item.name}
                                  className="h-full"
                                />
                              </div>
                              <p>{item.name}</p>
                            </div>
                          </td>
                          <td className="px-5 h-[72px] py-12.5">
                            ${item.price.toFixed(2)}
                          </td>
                          <td className="px-5 h-[72px] text-center">
                            <div className="flex items-center justify-between gap-2 border border-gray-200 rounded-full px-3 py-2">
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    updateQuantity({
                                      id: item.id,
                                      quantity: item.quantity - 1,
                                    }),
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center text-gray-600 text-[14px] font-bold bg-gray_100 rounded-full"
                              >
                                −
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    updateQuantity({
                                      id: item.id,
                                      quantity: item.quantity + 1,
                                    }),
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center text-gray-600 text-[14px] font-bold bg-gray_100 rounded-full"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-5 h-[72px] text-center">
                            <span className="text-gray_900 font-medium text-base">
                              <span>
                                {(item.price * item.quantity)?.toLocaleString()}
                              </span>
                            </span>
                          </td>
                          <td className="px-5 h-[72px]">
                            <div className="flex items-center justify-end gap-3">
                              <button
                                type="button"
                                className="p-2 rounded-full border border-gray_200"
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                              >
                                <X size={16} className="text-gray_600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="w-full">
                      <tr className="w-full">
                        <td
                          colSpan={5}
                          className="border border-gray_100 shadow-sm rounded-md"
                        >
                          <div className="flex items-center justify-between py-4 px-5">
                            <Button as={Link} to="/shop">Return to Shop</Button>

                            <Button>Update Cart</Button>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div>
                {/* <div className="flex items-start  justify-between gap-[173px]"> */}
                <div className="border border-gray_100 w-full rounded-[8px]">
                  <div className="px-6">
                    <h3 className="pt-8 font-medium text-[20px] space-y-4">
                      Cart Total
                    </h3>
                    <div className="pt-4 text-black text-[16px]">
                      <div className="flex justify-between border-b border-gray-500 py-4">
                        <span>Subtotal</span>
                        <span>{subtotal?.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-500 py-4">
                        <span>Shipping</span>
                        <span>{shipping?.toLocaleString() || "free"}</span>
                      </div>
                      <div className="flex justify-between py-4">
                        <span>Total</span>
                        <span>${total?.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-center pb-10">
                        <Button
                          TagName={"Link"}
                          href="/checkout"
                          className="mt-4 mb-8  w-full"
                          variant="green"
                        >
                          Proceed To Checkout
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CartPage;
