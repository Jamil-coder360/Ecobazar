import React from "react";

import pay_1 from "../../assets/pay_1.png";
import pay_2 from "../../assets/pay_2.png";
import pay_3 from "../../assets/pay_3.png";
import pay_4 from "../../assets/pay_4.png";
import pay_5 from "../../assets/pay_5.png";
import Container from "../global/Container";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const payData = [
  {
    id: 1,
    image: pay_1,
  },
  {
    id: 2,
    image: pay_2,
  },
  {
    id: 3,
    image: pay_3,
  },
  {
    id: 4,
    image: pay_4,
  },
  {
    id: 5,
    image: pay_5,
  },
];

const socialData = [
  { id: 1, icon: <FaFacebook /> },
  { id: 1, icon: <FaTwitter /> },
  { id: 1, icon: <TiSocialPinterest /> },
  { id: 4, icon: <FaInstagram /> },
];
const Footer = () => {
  return (
    <div>
      {/* Newsletter Strip */}
      <div className="bg-gray-100 px-5 lg:px-8 py-8">
        <Container>
          <div className=" flex flex-col md:flex-row items-center gap-6">
            {/* Left text */}
            <div className="flex-1 min-w-0">
              <h2 className="text-[24px] font-semibold text-gray_900 mb-1 leading-[150%]">
                Subcribe our Newsletter
              </h2>
              <p className="text-sm text-gray_400 leading-[150%]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus.
                <br />
                Phasellus imperdiet elit eu magna.
              </p>
            </div>

            {/* Email input + button */}
            <div className="flex items-center">
              {/* Input Container */}
              <div className="bg-white border border-gray-200 border-r-0 rounded-l-full px-5 py-3.5 shadow-sm lg:w-[400px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full text-sm text-gray-500 outline-none bg-transparent"
                />
              </div>

              {/* Button */}
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-base px-7 py-[14px] border border-green-500 rounded-r-full transition-colors">
                Search
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {socialData.map((item) => {
                return (
                  <a
                    key={item.id}
                    href="#"
                    className="hover:text-white text-[18px] p-2.75 rounded-full hover:bg-success_207  flex items-center justify-center transition-colors"
                  >
                    {item.icon}
                  </a>
                );
              })}
              {/* Facebook */}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray_900 text-gray_400 px-8 pt-12 pb-6">
        <Container>
          <div>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[336px_repeat(4,1fr)] gap-8 mb-10">
              {/* Brand */}
              {/* Brand */}
              <div className="w-[336px]">
                <div className="flex items-center gap-2 mb-4">
                  <img src="./logof.png" alt="logo" />
                </div>

                <p className="text-sm leading-relaxed mb-5">
                  Morbi cursus porttitor enim lobortis molestie. Duis gravida
                  turpis dui, eget bibendum magna congue nec.
                </p>

                <div className="flex  gap-2 text-sm">
                  <span className="text-white font-medium border-b border-green-500 pb-1 inline-block w-fit">
                    (219) 555-0114
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">or</span>

                    <span className="text-green-400 border-b border-green-500 pb-1 inline-block w-fit">
                      Proxy@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              {/* My Account */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">
                  My Account
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/account"
                      className="hover:text-green-400 transition-colors"
                    >
                      My Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="/order_history"
                      className="hover:text-green-400 transition-colors"
                    >
                      Order History
                    </a>
                  </li>
                  <li className="text-white font-semibold pt-1">
                    Shoping Cart
                  </li>
                  <li>
                    <a
                      href="/wishlist"
                      className="hover:text-green-400 transition-colors"
                    >
                      Wishlist
                    </a>
                  </li>
                </ul>
              </div>

              {/* Helps */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">Helps</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-green-400 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faqs"
                      className="hover:text-green-400 transition-colors"
                    >
                      Faqs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Terms & Condition
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Proxy */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">Proxy</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-green-400 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product/:id"
                      className="hover:text-green-400 transition-colors"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="/check"
                      className="hover:text-green-400 transition-colors"
                    >
                      Track Order
                    </a>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">
                  Categories
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/shop?category=fruit-vegetables"
                      className="hover:text-green-400 transition-colors"
                    >
                      Fruit & Vegetables
                    </a>
                  </li>
                  <li>
                    <a
                      href="/shop?category=meat-fish"
                      className="hover:text-green-400 transition-colors"
                    >
                      Meat & Fish
                    </a>
                  </li>
                  <li>
                    <a
                      href="/shop?category=bread-bakery"
                      className="hover:text-green-400 transition-colors"
                    >
                      Bread & Bakery
                    </a>
                  </li>
                  <li>
                    <a
                      href="/shop?category=beverages"
                      className="hover:text-green-400 transition-colors"
                    >
                      Beauty & Health
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-500">
                Ecobazar eCommerce © 2021. All Rights Reserved
              </p>
              <div className="flex items-center gap-2">
                {/* Apple Pay */}
                {payData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className=" rounded px-2 py-1 flex items-center gap-2 h-7"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-5 w-auto"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
