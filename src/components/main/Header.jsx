import { useContext } from "react";
import Button from "../global/Button";
import { ChevronDownIcon, User } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";

import { Link } from "react-router";
import Container from "../global/Container";
import { CiLocationOn } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Section from "../global/Section";
import { LuPhoneCall } from "react-icons/lu";
import { useAppSelector } from "../../store/hooks";
import { AuthContext } from "../../context/AuthContext";

export const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Shop",
    path: "/shop",
    hasDropdown: true,
    submenu: [
      {
        id: 1,
        label: "Electronics",
        href: "/shop/electronics",
      },
      {
        id: 2,
        label: "Fashion",
        href: "/shop/fashion",
      },
      {
        id: 3,
        label: "Furniture",
        href: "/shop/furniture",
      },
      {
        id: 4,
        label: "Accessories",
        href: "/shop/accessories",
      },
    ],
  },
  {
    id: 3,
    name: "Pages",
    path: "/pages",
    hasDropdown: true,
    submenu: [
      {
        id: 1,
        label: "About Us",
        href: "/about",
      },
      {
        id: 2,
        label: "Contact Us",
        href: "/contact",
      },
      {
        id: 3,
        label: "FAQ",
        href: "/faqs",
      },
      {
        id: 4,
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
    ],
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "About Us",
    path: "/about",
  },
  {
    id: 6,
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  const wishlistCount = useAppSelector((state) => state.wishlist.items.length);
  const cartCount = useAppSelector((state) => state.cart.items.length);
  const cartTotal = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
  const { user } = useContext(AuthContext);

  return (
    <header>
      <section className="py-3.25 border-b border-b-gray_200">
        <Container>
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center gap-2 text-gray_600 text-[12px] font-normal leading-[130%]">
              <CiLocationOn />
              <p> Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-5">
                <select className="text-gray_600 text-[12px] font-normal leading-[130%]">
                  <option value="English">English</option>
                  <option value="Bangla">Bangla</option>
                </select>
                <select className="text-gray_600 text-[12px] font-normal leading-[130%]">
                  <option value="USD">USD</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <span className="text-gray_100 w-[1px] px-5">|</span>

              {user ? (
                <>
                  <Link to={"/account"}>
                    <User />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/signin"}
                    className="text-gray_600 text-[12px] font-normal leading-[130%]"
                  >
                    Sign In
                  </Link>
                  <span className="text-gray_600 text-[12px] font-normal leading-[130%] px-1">
                    /
                  </span>
                  <Link
                    to={"/signup"}
                    className="text-gray_600 text-[12px] font-normal leading-[130%] "
                  >
                    Sign Up
                  </Link>
                </>
              )}

              {/* {user && (
                <User />
              )} */}
            </div>
          </div>
        </Container>
      </section>
      <Section className=" py-6">
        <Container className="flex items-center  justify-between gap-10">
          <Link to={"/"}>
            <div>
              <img src="./logo.png" alt="logo" className="w-[183px] h-[38px]" />
            </div>
          </Link>
          <div className="flex items-center w-full max-w-[498px] border border-gray_200 rounded-lg bg-white overflow-hidden shadow-sm">
            {/* Search Icon */}
            <span className="pl-4 pr-3 text-gray_400 flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
            </span>

            {/* Input */}
            <input
              type="search"
              placeholder="Search"
              className="flex-1 py-3 px-2 text-base text-gray_700 bg-transparent outline-none border-none"
            />

            {/* Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-base px-7 py-3 transition-colors">
              Search
            </button>
          </div>
          <div className="flex items-center ">
            <Link to={"/wishlist"}>
              <div className="relative">
                <IoMdHeartEmpty size={32} />
                <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 text-white text-[11px] font-semibold">
                  {wishlistCount}
                </span>
              </div>
            </Link>
            <span className="text-gray-200 w-[1px] px-4">|</span>
            <Link to={"/cart"}>
              <div className="relative">
                <HiOutlineShoppingBag size={32} />
                <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-green-500 text-white text-[11px] font-semibold">
                  {cartCount}
                </span>
              </div>
            </Link>
            <div className="pl-3">
              <p className="text-gray_700 text-[11px] font-normal leading-[120%] ">
                Shopping cart:
              </p>
              <strong className="text-gray_900 text-[14px] font-medium leading-[100%] pt-2">
                ${cartTotal.toFixed(2)}
              </strong>
            </div>
          </div>
        </Container>
      </Section>
      <nav className="bg-gray_800 py-4">
        <Container>
          <div className="flex items-center justify-between gap-10">
            <div>
              <ul className="flex items-center gap-5">
                {menuItems.map((item) => (
                  <li key={item.id} className="relative group">
                    <Link
                      to={item.path}
                      className="flex items-center gap-1 text-gray_400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}

                      {item.hasDropdown && (
                        <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </Link>

                    {item.hasDropdown && item.submenu && (
                      <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-40">
                        <div className="bg-white rounded-md shadow-lg border border-gray-200 min-w-[200px] py-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.id}
                              to={subitem.href}
                              className="block px-4 py-2.5 text-black_900 font-medium text-sm hover:bg-home hover:text-gray_500 transition-colors duration-150"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <LuPhoneCall size={28} className="text-white" />
              <p className="text-white text-[14px] font-medium leading-[150%]">
                (219) 555-0114
              </p>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
