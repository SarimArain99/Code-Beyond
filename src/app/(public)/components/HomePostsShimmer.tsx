import React from "react";

const HomePostsShimmer = () => {
  const shimmerPlaceholder = Array(3).fill(0);
  return (
    <div className="grid gap-x-10 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-10 p-3">
      {shimmerPlaceholder.map((_, index) => (
        <div
          key={index}
          className="border p-4 shadow-xl bg-gray-200 animate-pulse shadow-gray-400"
        >
          <div className="h-96 bg-gray-300 w-full mb-4"></div>

          <div className="bg-gray-300 h-6 w-3/4 rounded-md mb-2"></div>

          <div className="bg-gray-300 h-4 w-full rounded-md mb-2"></div>
          <div className="bg-gray-300 h-4 w-2/3 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default HomePostsShimmer;
