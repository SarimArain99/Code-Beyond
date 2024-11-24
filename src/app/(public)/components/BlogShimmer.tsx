import React from "react";

const BlogShimmer = () => {
  const shimmerPlaceholder = Array(10).fill(0);

  return (
    <div className="flex flex-col gap-6 sm:p-10 p-2 mt-10">
      {shimmerPlaceholder.map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row border p-4 shadow-xl bg-gray-200 w-full items-center animate-pulse h-72"
        >
          <div className="md:w-[60%] w-full bg-gray-300 h-48 md:h-full"></div>
          <div className="md:w-2/3 w-full flex flex-col justify-between p-4 gap-2">
            <div className="bg-gray-300 h-6 w-3/4 rounded-md"></div>
            <div className="bg-gray-300 h-4 w-full rounded-md"></div>
            <div className="bg-gray-300 h-4 w-2/3 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogShimmer;
