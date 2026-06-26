import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import History from "../components/icon/History";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import OrderHistory from "../components/account/OrderHistory";
import Dashboard from "../components/account/Dashboard";
import WishlistPage from "./WishlistPage";
import CartPage from "./CartPage";
import Setting from "../components/account/Setting";
import LogOut from "../components/account/LogOut";

const navItems = [
  {
    label: "Dashboard",
    icon:<MdDashboard />,
    component :<Dashboard />
},
{
    label: "Order History",
    icon: <History  className="fill-[#cccccc]"/>,
    component: <OrderHistory />
  },
  {
    label: "Wishlist",
    icon: <IoMdHeartEmpty />,
    component : <WishlistPage />
  },
  {
    label: "Shopping Cart",
    icon:  <HiOutlineShoppingBag /> ,
    component : <CartPage />
  },
  {
    label: "Settings",
    icon:<IoSettingsOutline />,
    component : <Setting />
  },
  {
    label: "Log out",
    icon:<IoLogOutOutline />,
    component: <LogOut />
  },
];



export default function AccounPage() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
const activeItem = navItems.find(
  (item) => item.label === activeNav
);
  return (
    <div className=" bg-gray-50 font-sans">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between  py-3 bg-white border-b border-gray-100 shadow-sm">
        <span className="font-semibold text-gray-800 text-base">My Account</span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {sidebarOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className="container mx-auto py-6 flex gap-5">
        {/* Sidebar */}
        <aside
          className={`
            ${sidebarOpen ? "block" : "hidden"} md:block
            w-full md:w-56 shrink-0
            absolute md:static top-[57px] left-0 right-0 z-20 md:z-auto
            bg-white md:bg-white
            shadow-lg md:shadow-none
            rounded-b-xl md:rounded-xl
            border border-gray-100
            overflow-hidden
            md:self-start
          `}
        >
          <div className="px-5 py-4 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Navigation</span>
          </div>
          <nav className="py-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActiveNav(item.label);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm transition-all
                  ${
                    activeNav === item.label
                      ? "bg-green-50 text-green-600 font-semibold border-l-4 border-green-500"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700 border-l-4 border-transparent"
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
        <div className="flex-1">
                      {activeItem?.component}
        </div>

      </div>
    </div>
  );
}