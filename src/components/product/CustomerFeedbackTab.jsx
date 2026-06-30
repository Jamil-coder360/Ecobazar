import Button from "../global/Button";

const StarRating = ({ rating = 5 }) => (
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

const ReviewCard = ({ name, avatar, rating, time, comment }) => (
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

export default function CustomerFeedbackTab() {
  return (
    <div className="max-w-2xl py-6">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
      <Button className="!bg-[#56AC59]/10 border-0 mt-6">Load More</Button>
    </div>
  );
}
