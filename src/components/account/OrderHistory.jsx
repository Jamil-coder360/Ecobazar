import React from "react";

const OrderHistory = () => {
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
    <main>
      <h3 className="text-[20px] leading-[150%] font-medium text-gray_900 mb-4">
        Order History
      </h3>
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
    </main>
  );
};

export default OrderHistory;
