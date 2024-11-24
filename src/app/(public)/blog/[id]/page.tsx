"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Data from "../../components/Data";
import BlogDetailShimmer from "../../components/BlogDetailShimmer";
import Image from "next/image";
import CommentSection from "../../components/CommentSection";


interface Post {
  id: number;
  title: string;
  description: string;
  body: string;
  image: string;
}

function BlogDetailPage() {
  const [blog, setBlog] = useState<Post | null>(null);
  const params = useParams();
  const blogId = params.id ? parseInt(params.id as string, 10) : null;

  useEffect(() => {
    if (blogId !== null) {
      const blogPost = Data.find((item: Post) => item.id === blogId);
      setBlog(blogPost || null);
    }
  }, [blogId]);

  if (!blog) {
    return <BlogDetailShimmer />;
  }

  return (
    <div className="lg:max-w-6xl md:max-w-3xl sm:max-w-3xl max-w-xl mx-auto py-10 sm:px-10 px-5 bg-white/30 backdrop-blur-[5px] rounded-2xl shadow-xl shadow-zinc-950">
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold text-white text-center mb-5">
        {blog.title}
      </h1>
      <div className="w-full mb-5 flex justify-center">
        <Image
          src={blog.image}
          height={1000}
          width={1000}
          alt={blog.title}
          className="object-cover rounded-md flex items-center sm:w-[50%] w-full"
        />
      </div>
      <div className="text-white lg:text-lg md:text-sm text-xs mb-5">
        <p>{blog.description}</p>
      </div>
      <div className="prose lg:prose-xl text-white mb-5">
        <p className="whitespace-pre-wrap lg:text-lg md:text-sm text-xs">
          {blog.body}
        </p>
      </div>
      <CommentSection/>
    </div>
  );
}

export default BlogDetailPage;
