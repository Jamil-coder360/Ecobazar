import { useState } from "react";

const navItems = [
  {
    label: "Dashboard",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm8-8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    label: "Order History",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Wishlist",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    label: "Shopping Cart",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
      </svg>
    ),
  },
  {
    label: "Settings",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Log out",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    ),
  },
];

const orders = [
  { id: "#738", date: "8 Sep, 2024", total: "$135.00", products: 5, status: "Processing" },
  { id: "#703", date: "24 May, 2020", total: "$25.00", products: 1, status: "On the way" },
  { id: "#130", date: "22 Oct, 2020", total: "$250.00", products: 4, status: "Completed" },
  { id: "#561", date: "1 Feb, 2020", total: "$35.00", products: 1, status: "Completed" },
  { id: "#536", date: "21 Sep, 2020", total: "$578.00", products: 13, status: "Completed" },
  { id: "#492", date: "22 Oct, 2020", total: "$345.00", products: 7, status: "Completed" },
];

const statusStyle = {
  Processing: "text-amber-500 bg-amber-50",
  "On the way": "text-blue-500 bg-blue-50",
  Completed: "text-green-600 bg-green-50",
};

export default function AccounPage() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

        {/* Main content */}
        <main className="flex-1 min-w-0 flex flex-col gap-5">
          {/* Profile + Billing cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Profile card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-green-100 mb-3">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-white text-2xl font-bold select-none">
                  DN
                </div>
              </div>
              <p className="font-semibold text-gray-800 text-lg leading-tight">Dennis Nzioki</p>
              <p className="text-gray-400 text-sm mt-0.5 mb-4">Customer</p>
              <button className="text-green-600 text-sm font-medium hover:text-green-700 hover:underline transition">
                Edit Profile
              </button>
            </div>

            {/* Billing card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Billing Address</p>
              <p className="font-semibold text-gray-800 text-base">Dennis Nzioki</p>
              <p className="text-gray-500 text-sm mt-1 leading-snug">
                4140 Parker Rd. Allentown, New Runda 31134
              </p>
              <p className="text-gray-500 text-sm mt-3">dennisnzioki@gmail.com</p>
              <p className="text-gray-500 text-sm mt-1">254 555-0110</p>
              <button className="text-green-600 text-sm font-medium hover:text-green-700 hover:underline transition mt-4 block">
                Edit Address
              </button>
            </div>
          </div>

          {/* Order History */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-base">Recent Order History</h2>
              <button className="text-green-600 text-sm font-medium hover:text-green-700 hover:underline transition">
                View All
              </button>
            </div>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 uppercase text-xs tracking-wider">
                    <th className="px-6 py-3 text-left font-semibold">Order ID</th>
                    <th className="px-6 py-3 text-left font-semibold">Date</th>
                    <th className="px-6 py-3 text-left font-semibold">Total</th>
                    <th className="px-6 py-3 text-left font-semibold">Status</th>
                    <th className="px-6 py-3 text-right font-semibold"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-6 py-3.5 font-medium text-gray-700">{order.id}</td>
                      <td className="px-6 py-3.5 text-gray-500">{order.date}</td>
                      <td className="px-6 py-3.5 text-gray-700">
                        <span className="font-medium">{order.total}</span>
                        <span className="text-gray-400 text-xs ml-1">
                          ({order.products} {order.products === 1 ? "Product" : "Products"})
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            statusStyle[order.status] || "text-gray-500 bg-gray-100"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        <button className="text-green-600 text-sm font-medium hover:text-green-700 hover:underline transition">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile order cards */}
            <div className="sm:hidden divide-y divide-gray-100">
              {orders.map((order) => (
                <div key={order.id} className="px-5 py-4 flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-700 text-sm">{order.id}</span>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                          statusStyle[order.status] || "text-gray-500 bg-gray-100"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs">{order.date}</p>
                    <p className="text-gray-700 text-sm mt-1">
                      <span className="font-medium">{order.total}</span>
                      <span className="text-gray-400 text-xs ml-1">
                        · {order.products} {order.products === 1 ? "product" : "products"}
                      </span>
                    </p>
                  </div>
                  <button className="text-green-600 text-xs font-medium hover:underline shrink-0 mt-0.5">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}