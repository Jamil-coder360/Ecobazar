import { useContext, useEffect, useState, useRef } from "react";
import Button from "../global/Button";
import { ChevronDownIcon, User, Menu, X } from "lucide-react";
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
import axios from "axios";

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
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  useEffect(() => {
    axios
      .get("https://ecobazar-ktbd.onrender.com/products")
      .then((res) => {
        setProducts(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(user);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setShowDropdown(true);
  };

  const searchResult = (products || []).filter((element) => {
    if (!searchText || searchText.trim().length === 0) {
      return false;
    }

    return (
      element.name &&
      element.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  return (
    <header>
      {/* desktop section */}
      <section className="py-3.25 border-b border-b-gray_200 px-5 lg:px-0 ">
        <Container>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-4 lg:gap-10">
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
      <Section className=" py-6 px-5 lg:px-0 ">
        <Container className="flex items-center  justify-between lg:gap-10">
          <Link to={"/"}>
            <div>
              <img src="./logo.png" alt="logo" className="w-[183px] h-[38px]" />
            </div>
          </Link>
          <div
            ref={dropdownRef}
            className="relative w-full max-w-[498px] hidden sm:block "
          >
            <div className="flex items-center w-full border border-gray_200 rounded-lg bg-white overflow-hidden shadow-sm focus-within:border-green-500 transition-colors">
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
                value={searchText}
                onChange={handleSearch}
                onFocus={() => setShowDropdown(true)}
                type="search"
                placeholder="Search"
                className="flex-1 min-w-0 py-3 px-2 text-base text-gray_700 bg-transparent outline-none border-none"
              />

              {/* Button */}
              <button className=" shrink-0 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-7 py-3 transition-colors cursor-pointer">
                Search
              </button>
            </div>

            {/* Dropdown Results */}
            {showDropdown && searchText.trim().length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[350px] overflow-y-auto z-50">
                {searchResult.length > 0 ? (
                  <div className="py-1">
                    {searchResult.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={() => {
                          setSearchText("");
                          setShowDropdown(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 object-contain rounded border border-gray-100 bg-white"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {product.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-green-600 font-semibold">
                              ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-[10px] text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-gray-500">
                    No products found for "{searchText}"
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="lg:flex items-center hidden">
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
          <div
            className="flex sm:hidden cursor-pointer text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </div>
        </Container>
      </Section>
      <nav className="bg-gray_800 py-4 hidden lg:block">
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
      {/* mobile section */}
      {isOpen && (
        <div className="lg:hidden  border-t bg-gray_800 border-gray-700 py-5 px-5">
          {/* mobile cart and wishlist icon */}
          <div className="flex items-center justify-end text-white ">
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
          </div>
          {/* mobile search box */}
          <div ref={dropdownRef} className="relative w-full max-w-[498px] my-5">
            <div className="flex items-center w-full border border-gray_200 rounded-lg bg-white overflow-hidden shadow-sm focus-within:border-green-500 transition-colors">
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
                value={searchText}
                onChange={handleSearch}
                onFocus={() => setShowDropdown(true)}
                type="search"
                placeholder="Search"
                className="flex-1 min-w-0 py-3 px-2 text-base text-gray_700 bg-transparent outline-none border-none"
              />

              {/* Button */}
              <button className="shrink-0 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-7 py-3 transition-colors cursor-pointer flex justify-end">
                Search
              </button>
            </div>

            {/* Dropdown Results */}
            {showDropdown && searchText.trim().length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[350px] overflow-y-auto z-50">
                {searchResult.length > 0 ? (
                  <div className="py-1">
                    {searchResult.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={() => {
                          setSearchText("");
                          setShowDropdown(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 object-contain rounded border border-gray-100 bg-white"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {product.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-green-600 font-semibold">
                              ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-[10px] text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-gray-500">
                    No products found for "{searchText}"
                  </div>
                )}
              </div>
            )}
          </div>
          {/* mobile menu */}
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white font-bold text-base"
                  >
                    {item.name}
                  </Link>

                  {item.hasDropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.id ? null : item.id,
                        )
                      }
                    >
                      <ChevronDownIcon
                        size={18}
                        className={`transition-transform duration-300 text-white ${
                          mobileDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.hasDropdown && mobileDropdown === item.id && (
                  <div className="mt-3 ml-4 border-l border-white/30 pl-4 flex flex-col gap-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.id}
                        to={subitem.href}
                        onClick={() => {
                          setMobileDropdown(null);
                          setIsOpen(false);
                        }}
                        className="text-sm text-white/80 hover:text-white transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 mt-5 border-t border-gray-700 pt-4">
            <LuPhoneCall size={22} className="text-white" />
            <p className="text-white">(219) 555-0114</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
