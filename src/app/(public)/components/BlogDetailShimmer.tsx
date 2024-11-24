import React from "react";

const BlogDetailShimmer = () => {
  return (
    <div className="lg:max-w-6xl md:max-w-3xl sm:max-w-3xl max-w-xl mx-auto p-10 bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl shadow-zinc-950 space-y-6">
      <div className="h-20 bg-gray-300 rounded-md animate-pulse w-96 mx-auto"></div>
      <div className="max-w-3xl h-96 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded-md animate-pulse w-2/3 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded-md animate-pulse w-4/5 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded-md animate-pulse w-4/5 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded-md animate-pulse w-4/5 mx-auto"></div>
    </div>
  );
};

export default BlogDetailShimmer;
