"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import BlogShimmer from "../components/BlogShimmer";
import Data from "../components/Data";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
}

function Blogs() {
  const [blogs, setBlogs] = useState<Post[]>([]);

  useEffect(() => {
    setBlogs(Data);
  }, []);

  return (
    <div className="pb-5">
      <h2 className="uppercase text-center text-3xl md:text-4xl font-bold text-gray-800 tracking-wide relative">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Our Blogs
        </span>
      </h2>
      {blogs.length === 0 ? (
        <BlogShimmer />
      ) : (
        <div className="flex flex-col gap-10 sm:p-10 p-2 mt-10">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row  p-4 shadow-xl hover:scale-95 duration-500 shadow-zinc-900 bg-white/30 w-full items-center"
            >
              <div className="md:w-[60%] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  height={1000}
                  width={1000}
                  className="w-full object-cover h-48 md:h-96"
                />
              </div>
              <div className="md:w-2/3 w-full flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mt-2">{post.description}</p>
                </div>
                <Link
                  href={`blog/${post.id}`}
                  className="text-blue-300 mt-4 inline-block hover:text-white duration-500"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="h-[2px] bg-gray-300 mx-10"></div>
    </div>
  );
}

export default Blogs;
