import des from "../../assets/des.png";
import des_1 from "../../assets/des_1.png";
import des_2 from "../../assets/des_2.png";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-white flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const features = [
  "100 g of fresh leaves provides.",
  "Aliquam ac est at augue volutpat elementum.",
  "Quisque nec enim eget sapien molestie.",
  "Proin convallis odio volutpat finibus posuere.",
];

export default function DescriptionTab() {
  return (
    <div className="grid grid-cols-[648px_auto] gap-34">
      {/* Left */}
      <div className="w-[648px] flex-1 space-y-4 text-gray-600 text-sm leading-relaxed">
        <p>
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit.
        </p>
        <p>
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
          iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
          pellentesque tristique neque mi eget nulla. Proin luctus elementum
          neque et pharetra.
        </p>

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
          Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
          blandit eros non turpis lobortis iaculis at ut massa.
        </p>
      </div>

      {/* Right */}
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
