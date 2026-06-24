import React from 'react'
import PageHading from '../components/global/PageHading';
import {  X } from 'lucide-react';
import Button from '../components/global/Button';
import Section from '../components/global/Section';
import Container from '../components/global/Container';
import { useAppDispatch } from '../store/hooks';
import { useAppSelector } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length ? 10 : 0;
  const total = subtotal + shipping;

  return (
     <>
      <PageHading
       pagename="Shopping cart"
        />
      <Section className="pt-10 pb-20">
        <Container>
          <div>
            <h3 className="font-semibold text-[32px] leading-[120%] text-gray_900 text-center">
             Shopping cart
            </h3>
            <div className=" grid grid-cols-[872px_auto] gap-6">

            <div className="w-full space-y-10 mt-8">
              <table className="w-full">
                <thead>
                  <tr className="text-gray_500 text-[14px] font-medium tracking-[3%] shadow-sm rounded-md border border-gray_100">
                    <th className="px-5 h-[72px] text-left">Product</th>
                    <th className="px-5 h-[72px] text-left">Price</th>
                    <th className="px-5 h-[72px] text-center">Quantity</th>
                    <th className="px-5 h-[72px] text-center">Stock Status</th>
                    <th className="px-5 h-[72px] text-right">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="text-black text-[16px] shadow-sm rounded-md border border-gray_100">
                      <td className="px-5 h-[72px]">
                        <div className="flex items-center gap-2">
                          <div className="size-[54px] overflow-hidden py-3">
                            <img src={item.image} alt={item.name} className="h-full" />
                          </div>
                          <p>{item.name}</p>
                        </div>
                      </td>
                      <td className="px-5 h-[72px] py-12.5">${item.price.toFixed(2)}</td>
                      <td className="px-5 h-[72px] text-center">
                        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2">
                          <button
                            type="button"
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                            className="text-gray-600 font-bold"
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                            className="text-gray-600 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-5 h-[72px] text-center">
                        <span className="text-green-600 font-medium">In Stock</span>
                      </td>
                      <td className="px-5 h-[72px]">
                        <div className="flex items-center justify-end gap-3">
                          <button
                            type="button"
                            className="p-2 rounded-full border border-gray_200"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <X size={16} className="text-gray_600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              		<div className="flex items-start  justify-between gap-[173px]">
					<div className="border border-gray-500 w-[470px]">
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
										className="mt-4 mb-8 "
									>
										Proceed To Checkout
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default CartPage