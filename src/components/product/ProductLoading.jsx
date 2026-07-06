const ProductLoading = () => {
  return (
    <div className="relative w-full h-[327px] overflow-hidden rounded-lg border border-gray-100 bg-white">
      {/* Shimmer */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10" />

      {/* Sale Badge */}
      <div className="absolute top-4 left-4 h-7 w-20 rounded-md bg-gray-200" />

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex flex-col gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200" />
        <div className="h-10 w-10 rounded-full bg-gray-200" />
      </div>

      {/* Product Image */}
      <div className="flex h-[220px] items-center justify-center bg-gray-100">
        <div className="h-36 w-36 rounded-xl bg-gray-200" />
      </div>

      {/* Info */}
      <div className="space-y-3 p-4">
        <div className="flex justify-between">
          <div className="flex-1">
            {/* Title */}
            <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />

            {/* Subtitle */}
            <div className="h-4 w-1/2 rounded bg-gray-100" />

            {/* Price */}
            <div className="mt-3 flex items-center gap-3">
              <div className="h-5 w-16 rounded bg-gray-300" />
              <div className="h-4 w-12 rounded bg-gray-200" />
            </div>
          </div>

          {/* Cart */}
          <div className="h-11 w-11 rounded-full bg-gray-200" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 pt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-full bg-gray-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLoading;