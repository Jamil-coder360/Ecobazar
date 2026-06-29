import { useState } from "react";

import PageHading from '../components/global/PageHading';
import Section from "../components/global/Section";
import Container from "../components/global/Container";

const CheckOutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shipToDifferent, setShipToDifferent] = useState(false);
  return (
   <>
   <PageHading 
   pagename="Checkout"
   mainname={"Shopping Cart"}
   />

   <Section>
    <Container>
      <div className="">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left: Billing Form */}
          <div className="w-[872px]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Billing Information</h2>

            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">First name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Last name</label>
                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Company Name <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Street Address</label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>

            {/* Country / State / Zip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Country / Region</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-green-500 bg-white">
                  <option value="">Select</option>
                  <option>Bangladesh</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">States</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-green-500 bg-white">
                  <option value="">Selects</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Barisal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            {/* Email / Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500"
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
              <label htmlFor="ship-diff" className="text-sm text-gray-600 cursor-pointer">
                Ship to a different address
              </label>
            </div>

            {/* Additional Info */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Info</h2>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Order Notes <span className="text-gray-400">(Optional)</span>
              </label>
              <textarea
                rows={5}
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-500 resize-y"
              />
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full max-w-[424px] bg-white border border-gray-200 rounded-xl p-5 ">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summery</h3>

            {/* Item 1 */}
            <div className="flex items-center gap-3 py-3 border-b border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-xl flex-shrink-0">
                🥒
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Green Capsicum</p>
                <p className="text-xs text-gray-400">x5</p>
              </div>
              <span className="text-sm font-semibold text-gray-800">$70.00</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 py-3 border-b border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-xl flex-shrink-0">
                🍅
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Red Capsicum</p>
                <p className="text-xs text-gray-400">x1</p>
              </div>
              <span className="text-sm font-semibold text-gray-800">$14.00</span>
            </div>

            {/* Totals */}
            <div className="py-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal:</span>
                <span className="text-gray-800">$84.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping:</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-gray-800 pt-2 border-t border-gray-100">
                <span>Total:</span>
                <span className="text-base">$84.00</span>
              </div>
            </div>

            {/* Payment Method */}
            <h4 className="text-base font-semibold text-gray-800 mb-3">Payment Method</h4>
            <div className="space-y-2 mb-5">
              {[
                { value: "cod", label: "Cash on Delivery" },
                { value: "paypal", label: "Paypal" },
                { value: "amazon", label: "Amazon Pay" },
              ].map((method) => (
                <label key={method.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value={method.value}
                    checked={paymentMethod === method.value}
                    onChange={() => setPaymentMethod(method.value)}
                    className="w-4 h-4 accent-green-500"
                  />
                  <span className="text-sm text-gray-700">{method.label}</span>
                </label>
              ))}
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-3 rounded-full transition-colors duration-200">
              Place Order
            </button>
          </div>

        </div>
      </div>
    </Container>
   </Section>
   </>
  )
}

export default CheckOutPage

