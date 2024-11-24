"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HomePostsShimmer from "./HomePostsShimmer";
import postsData from "./Data";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
}

function LatestPosts() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  useEffect(() => {
    const firstSixPosts = postsData.slice(0, 6);
    setLatestPosts(firstSixPosts);
  }, []);

  return (
    <div className="bg-white pb-5">
      <h2 className="uppercase text-center text-3xl md:text-4xl py-20 font-bold text-gray-800 tracking-wide relative">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Latest Posts
        </span>
      </h2>
      {latestPosts.length === 0 ? (
        <HomePostsShimmer />
      ) : (
        <div className="grid gap-x-10 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-10 p-3">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="border p-4 shadow-xl hover:scale-95 duration-500 shadow-gray-400"
            >
              <Image
                src={post.image}
                alt={post.title}
                height={1000}
                width={1000}
                className="h-96 w-full object-contain"
              />
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-700 mt-2">{post.description}</p>
              <Link
                href={`blog/${post.id}`}
                className="text-blue-500 mt-4 inline-block"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="h-[2px] bg-gray-300 mx-10"></div>
    </div>
  );
}

export default LatestPosts;
