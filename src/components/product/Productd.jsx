import { useState } from "react";
import des from "../../assets/des.png"
import des_1 from "../../assets/des_1.png"
import des_2 from "../../assets/des_2.png"
const CheckIcon = () => (
  <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const DiscountIcon = () => (
  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const tabs = ["Descriptions", "Additional Information", "Customer Feedback"];

const features = [
  "100 g of fresh leaves provides.",
  "Aliquam ac est at augue volutpat elementum.",
  "Quisque nec enim eget sapien molestie.",
  "Proin convallis odio volutpat finibus posuere.",
];

  const details = [
    { label: "Weight:", value: "03" },
    { label: "Color:", value: "Green" },
    { label: "Type:", value: "Organic" },
    { label: "Category:", value: "Vegetables" },
    {
      label: "Stock Status:",
      value: (
        <span>
          Available{" "}
          <span className="text-gray-400">(5,413)</span>
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

         function StarRating({ rating = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ name, avatar, rating, time, comment }) {
  return (
    <div className="py-5 border-b border-gray-200 last:border-0">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-11 h-11 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{name}</p>
            <StarRating rating={rating} />
          </div>
        </div>
        <span className="text-sm text-gray-400 whitespace-nowrap">{time}</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">{comment}</p>
    </div>
  );
}

const reviews = [
  {
    name: "Kristin Watson",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 4,
    time: "2 min ago",
    comment: "Duis at ullamcorper nulla, eu dictum eros.",
  },
  {
    name: "Robert Fox",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    time: "1 hour ago",
    comment: "Excellent quality vegetables, very fresh and organic!",
  },
  {
    name: "Jenny Wilson",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    time: "Yesterday",
    comment: "Great product, will definitely order again.",
  },
];

export default function ProductDes() {
  const [activeTab, setActiveTab] = useState("Descriptions");

  return (
    <div className="  py-8 font-sans">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-8 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === tab
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Descriptions" && (
        <div className="grid grid-cols-[648px_auto] gap-34">
          {/* Left: Text content */}
          <div className="w-[648px] flex-1 space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac,
              viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas
              auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel
              dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
              mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
              scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo
              quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
              Phasellus nec fringilla elit.
            </p>
            <p>
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis,
              metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque
              tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.
            </p>

            {/* Feature list */}
            <ul className="space-y-2 pt-1">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <CheckIcon />
                  </span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit
              eros non turpis lobortis iaculis at ut massa.
            </p>
          </div>

          {/* Right: Video + badges */}
          <div className=" flex-shrink-0 space-y-4">
            {/* Video thumbnail */}
            <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] w-[535px] h-[300px]">
              <img
                src={des}
                alt="Delivery person with groceries"
                className="w-full h-full object-cover"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
                  <PlayIcon />
                </button>
              </div>
            </div>

            {/* Discount + Organic badges */}
            <div className="border border-gray-200 rounded-xl px-5 py-6 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div>
                  <img src={des_2} alt="" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">64% Discount</p>
                  <p className="text-xs text-gray-500">Save your 64% money with us</p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex items-center gap-3">
                  <div>
                  <img src={des_1} alt="" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">100% Organic</p>
                  <p className="text-xs text-gray-500">100% Organic Vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Additional Information" && (
        <div className="grid grid-cols-2 gap-[271px]  justify-between text-sm text-gray-500 py-6">


    <div className="py-4">
      <table className="w-full">
        <tbody>
          {details.map((item, index) => (
            <tr key={index} className="border-b border-gray-100 last:border-0">
              <td className="py-3 pr-6 text-sm font-semibold text-gray-800 whitespace-nowrap w-32 align-top">
                {item.label}
              </td>
              <td className="py-3 text-sm text-gray-500">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <div className=" flex-shrink-0 space-y-4">
            {/* Video thumbnail */}
            <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] w-[535px] h-[300px]">
              <img
                src={des}
                alt="Delivery person with groceries"
                className="w-full h-full object-cover"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
                  <PlayIcon />
                </button>
              </div>
            </div>

            {/* Discount + Organic badges */}
            <div className="border border-gray-200 rounded-xl px-5 py-6 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div>
                  <img src={des_2} alt="" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">64% Discount</p>
                  <p className="text-xs text-gray-500">Save your 64% money with us</p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex items-center gap-3">
                  <div>
                  <img src={des_1} alt="" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">100% Organic</p>
                  <p className="text-xs text-gray-500">100% Organic Vegetables</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {activeTab === "Customer Feedback" && (



    <div className="max-w-2xl mx-auto px-4 py-6">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>

      )}
    </div>
  );
}