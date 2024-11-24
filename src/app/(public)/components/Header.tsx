"use client";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="bg-transparent text-white h-20 my-5 lg:mx-20 md:mx-16 sm:mx-8 mx-4 flex justify-between items-center">
      <Link
        href="/"
        className="lg:text-4xl md:text-4xl text-2xl font-mono font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
      >
        Code <span className="italic first-letter:text-blue-500">&</span> Beyond
      </Link>

      <div className="flex items-center gap-x-2">
        <div className="lg:flex hidden flex-row gap-x-10 text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
          <Link href="blog">Blogs</Link>
          <Link href="contact">Contact Us</Link>
        </div>
        <div className="lg:hidden flex">
          <button className="relative" onClick={() => setIsOpen(!isOpen)}>
            <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all">
              <div
                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
                  isOpen ? "-rotate-[45deg]" : ""
                } origin-center`}
              >
                <div
                  className={`bg-white h-[3px] w-1/2 rounded transform transition-all duration-300 ${
                    isOpen
                      ? "-rotate-90 h-[2px] origin-right -translate-y-[1.5px]"
                      : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[1px] rounded ${
                    isOpen ? "h-[2px]" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[3px] w-1/2 rounded self-end transform transition-all duration-300 ${
                    isOpen
                      ? "-rotate-90 h-[2px] origin-left translate-y-[1.5px]"
                      : ""
                  }`}
                ></div>
              </div>
            </div>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 w-full h-full text-white flex flex-col items-center justify-center space-y-6 p-8 z-20 bg-gradient-to-br from-gray-950 via-gray-700 to-gray-900 shadow-lg">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-semibold transition duration-300 hover:text-gray-300 hover:scale-105"
            onClick={clickHandler}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-xl sm:text-2xl font-semibold transition duration-300 hover:text-gray-300 hover:scale-105"
            onClick={clickHandler}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-xl sm:text-2xl font-semibold transition duration-300 hover:text-gray-300 hover:scale-105"
            onClick={clickHandler}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-xl sm:text-2xl font-semibold transition duration-300 hover:text-gray-300 hover:scale-105"
            onClick={clickHandler}
          >
            Contact Us
          </Link>
          <button
            onClick={clickHandler}
            className="absolute top-5 right-5 text-white hover:bg-gray-700 p-3 rounded-full transition duration-300 focus:bg-gray-500 sm:mx-10 mx-2"
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
