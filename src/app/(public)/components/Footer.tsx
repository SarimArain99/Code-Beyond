import React from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div>
        <SocialMedia />
      </div>
      <div className="px-2 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left text-white mt-20">
        <div>
          <h2 className="text-lg font-bold mb-4">Subscribe</h2>
          <p className="text-sm mb-4">
            Join our newsletter to stay updated with our latest blogs and news.
          </p>
          <form className="flex lg:flex-row flex-col items-center gap-y-5">
            <input
              type="email"
              placeholder="Email address"
              className="outline-none p-3 w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-3 md:mt-0 md:ml-2"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Our Blogs</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Latest Posts
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Popular Blogs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Blog Archives
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm mb-4">
            We&apos;re passionate bloggers sharing insights on technology,
            lifestyle, and more. Learn more about our journey and mission.
          </p>
          <Link
            href="/about"
            className="text-blue-500 hover:text-blue-400 underline"
          >
            Read More
          </Link>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Online Support</h2>
          <p className="text-sm mb-4">
            Need help? Our support team is here for you.
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Live Chat
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mt-8 pt-4 text-center text-xs text-gray-400 mb-5">
        &copy; {new Date().getFullYear()} Code & Beyond. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
