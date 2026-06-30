import des from "../../assets/des.png";
import des_1 from "../../assets/des_1.png";
import des_2 from "../../assets/des_2.png";

const PlayIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const details = [
  { label: "Weight:", value: "03" },
  { label: "Color:", value: "Green" },
  { label: "Type:", value: "Organic" },
  { label: "Category:", value: "Vegetables" },
  {
    label: "Stock Status:",
    value: (
      <span>
        Available <span className="text-gray-400">(5,413)</span>
      </span>
    ),
  },
  {
    label: "Tags:",
    value: (
      <span className="text-gray-500">
        Vegetables, Healthy,{" "}
        <span className="underline cursor-pointer hover:text-green-600 transition-colors">
          Chinese
        </span>
        , Cabbage, Green Cabbage,
      </span>
    ),
  },
];

export default function AdditionalInfoTab() {
  return (
    <div className="grid grid-cols-2 gap-[271px] justify-between text-sm text-gray-500 py-6">
      {/* Left: Details Table */}
      <div className="py-4">
        <table className="w-full">
          <tbody>
            {details.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="py-3 pr-6 text-sm font-semibold text-gray-800 whitespace-nowrap w-32 align-top">
                  {item.label}
                </td>
                <td className="py-3 text-sm text-gray-500">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right: Video + Badges */}
      <div className="flex-shrink-0 space-y-4">
        <div className="relative rounded-xl overflow-hidden bg-gray-100 w-[535px] h-[300px]">
          <img
            src={des}
            alt="Delivery person with groceries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
              <PlayIcon />
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl px-5 py-6 flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={des_2} alt="" />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                64% Discount
              </p>
              <p className="text-xs text-gray-500">
                Save your 64% money with us
              </p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="flex items-center gap-3">
            <img src={des_1} alt="" />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                100% Organic
              </p>
              <p className="text-xs text-gray-500">100% Organic Vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
