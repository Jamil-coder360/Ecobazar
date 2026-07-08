import { useState } from "react";
import { useAppSelector } from "../store/hooks";

import PageHading from "../components/global/PageHading";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import Button from "../components/global/Button";

const CheckOutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shipToDifferent, setShipToDifferent] = useState(false);

  // Cart items 
  const cartItems = useAppSelector((state) => state.cart.items);

  // Total calculate 
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    return sum + price * item.quantity;
  }, 0);
  return (
    <>
      <PageHading pagename="Checkout" mainname={"Shopping Cart"} />

      <Section className="pt-4 lg:pt-8 pb-8 lg:pb-20 px-5 lg:px-0">
        <Container>
          <div className="">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start">
              {/* Left: Billing Form */}
              <div className="w-full lg:w-[872px]">
                <h2 className="text-2xl font-medium leading-[150%] text-gray_900 mb-6">
                  Billing Information
                </h2>

                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray_700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray_700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm leading-[150%] font-normal text-gray_900mb-1">
                      Company Name{" "}
                      <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray_700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Street Address */}
                <div className="mb-4">
                  <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="Street address"
                    className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray_700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Country / State / Zip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                      Country / Region
                    </label>
                    <select className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray_700 focus:outline-none focus:border-green-500 bg-white">
                      <option value="">Select</option>
                      <option>Bangladesh</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                      States
                    </label>
                    <select className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray-500 focus:outline-none focus:border-green-500 bg-white">
                      <option value="">Selects</option>
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Barisal</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Email / Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray_700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray_700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Ship to different */}
                <div className="flex items-center gap-2 mb-8">
                  <input
                    type="checkbox"
                    id="ship-diff"
                    checked={shipToDifferent}
                    onChange={() => setShipToDifferent(!shipToDifferent)}
                    className="w-4 h-4 accent-green-500 cursor-pointer"
                  />
                  <label
                    htmlFor="ship-diff"
                    className="text-sm leading-[150%] font-normal text-gray_900 cursor-pointer"
                  >
                    Ship to a different address
                  </label>
                </div>

                {/* Additional Info */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Additional Info
                </h2>
                <div>
                  <label className="block text-sm leading-[150%] font-normal text-gray_900 mb-1">
                    Order Notes{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    className="w-full border border-gray_100 rounded-md px-4 py-3.5 text-sm text-gray_700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>

              {/* Right: Order Summary */}
              <div className="w-full max-w-[424px] bg-white border border-gray-200 rounded-xl p-6 ">
                <h3 className="text-[20px] font-medium leading-[150%] text-gray_900 mb-3">
                  Order Summery
                </h3>

                {/* Cart Items */}
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 py-3 border-b border-gray-100"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-15 h-15 rounded-lg bg-green-50 flex items-center justify-center text-xl shrink-0">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-normal leading-[150%] text-gray_900">
                            {item.name}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-sm font-normal leading-[150%] text-gray_900">
                              x{item.quantity}
                            </p>
                          )}
                        </div>
                      </div>

                      <span className="text-sm font-normal leading-[150%] text-gray_900">
                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="py-4 text-center text-gray-400">
                    <p>No Product on CheckOut</p>
                  </div>
                )}

                {/* Totals */}
                <div className="pt-3 pb-6 space-y-2">
                  <div className="flex justify-between text-sm text-gray_700 py-3 border-b border-b-gray_100">
                    <span>Subtotal:</span>
                    <span className="text-gray-800">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray_700 py-3 border-b border-b-gray_100">
                    <span>Shipping:</span>
                    <span className="text-green-500 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-gray-800  pt-3">
                    <span>Total:</span>
                    <span className="text-base">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Method */}
                <h4 className="text-[20px] font-medium leading-[150%] text-gray_900  mb-3">
                  Payment Method
                </h4>
                <div className="space-y-2 mb-5">
                  {[
                    { value: "cod", label: "Cash on Delivery" },
                    { value: "paypal", label: "Paypal" },
                    { value: "amazon", label: "Amazon Pay" },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.value}
                        checked={paymentMethod === method.value}
                        onChange={() => setPaymentMethod(method.value)}
                        className="w-4 h-4 accent-green-500 "
                      />
                      <span className="text-sm text-gray_700">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>

                <Button variant="green" className="w-full !py-4">
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CheckOutPage;
