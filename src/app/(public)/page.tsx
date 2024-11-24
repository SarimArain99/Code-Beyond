import React from "react";
import HeroSec from "./components/HeroSec";
import Featured from "./components/Featured";
import PopularBlogs from "./components/PopularBlogs";
import LatestPosts from "./components/LatestPosts";

function page() {
  return (
    <div>
      <HeroSec/>
      <Featured/>
      <PopularBlogs/>
      <LatestPosts/>
    </div>
  );
}

export default page;
