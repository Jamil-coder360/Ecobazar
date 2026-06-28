import React from "react";

const Dashboard = () => {
  const orders = [
    {
      id: "#738",
      date: "8 Sep, 2024",
      total: "$135.00",
      products: 5,
      status: "Processing",
    },
    {
      id: "#703",
      date: "24 May, 2020",
      total: "$25.00",
      products: 1,
      status: "On the way",
    },
    {
      id: "#130",
      date: "22 Oct, 2020",
      total: "$250.00",
      products: 4,
      status: "Completed",
    },
    {
      id: "#561",
      date: "1 Feb, 2020",
      total: "$35.00",
      products: 1,
      status: "Completed",
    },
    {
      id: "#536",
      date: "21 Sep, 2020",
      total: "$578.00",
      products: 13,
      status: "Completed",
    },
    {
      id: "#492",
      date: "22 Oct, 2020",
      total: "$345.00",
      products: 7,
      status: "Completed",
    },
  ];

  const statusStyle = {
    Processing: "text-amber-500 bg-amber-50",
    "On the way": "text-blue-500 bg-blue-50",
    Completed: "text-green-600 bg-green-50",
  };
  return (
    <>
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
            <p className="font-medium text-gray_900 text-[20px] leading-[150%]">
              Dennis Nzioki
            </p>
            <p className="text-gray_500 text-sm leading-[150%] font-normal mt-0.5 mb-4">
              Customer
            </p>
            <button className=" text-success_207 text-sm font-medium hover:text-green-700 hover:underline transition">
              Edit Profile
            </button>
          </div>

          {/* Billing card */}
          <div className="bg-white rounded-xl border border-gray_100 shadow-sm p-6">
            <p className="text-[14px] font-medium text-gray_400 uppercase tracking-[3%] mb-3">
              Billing Address
            </p>
            <p className="font-medium text-gray_900 text-[18px] leading-[150%] ">
              Dennis Nzioki
            </p>
            <p className="text-gray_600 text-sm mt-1 leading-[150%] font-normal">
              4140 Parker Rd. Allentown, New Runda 31134
            </p>
            <p className="text-gray_900 text-[16px] leading-[150%] font-normal mt-3">
              dennisnzioki@gmail.com
            </p>
            <p className="text-gray900 text-[16px] leading-[150%] font-normal mt-1">
              254 555-0110
            </p>
            <button className=" text-success_207 text-sm font-medium hover:text-green-700 hover:underline transition mt-4 block">
              Edit Address
            </button>
          </div>
        </div>

        {/* Order History */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-medium text-gray_900 text-[20px] leading-[150%]">
              Recent Order History
            </h2>
            <button className="text-success_207 text-sm font-medium hover:text-green-700 hover:underline transition">
              View All
            </button>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray_50 text-gray_700 uppercase text-xs tracking-[3%] leading-[100%]">
                  <th className="px-6 py-3 text-left font-medium">Order ID</th>
                  <th className="px-6 py-3 text-left font-medium">Date</th>
                  <th className="px-6 py-3 text-left font-medium">Total</th>
                  <th className="px-6 py-3 text-left font-medium">Status</th>
                  <th className="px-6 py-3 text-right font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50/60 transition-colors"
                  >
                    <td className="px-6 py-3.5 font-medium text-gray-700">
                      {order.id}
                    </td>
                    <td className="px-6 py-3.5 text-gray-500">{order.date}</td>
                    <td className="px-6 py-3.5 text-gray-700">
                      <span className="font-medium">{order.total}</span>
                      <span className="text-gray-400 text-xs ml-1">
                        ({order.products}{" "}
                        {order.products === 1 ? "Product" : "Products"})
                      </span>
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          statusStyle[order.status] ||
                          "text-gray-500 bg-gray-100"
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
              <div
                key={order.id}
                className="px-5 py-4 flex items-start justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-700 text-sm">
                      {order.id}
                    </span>
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
                      · {order.products}{" "}
                      {order.products === 1 ? "product" : "products"}
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
    </>
  );
};

export default Dashboard;
