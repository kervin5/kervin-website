import React from "react";
import Image from "next/image";
import kervintech from "public/images/kervintech.png";

interface Props {}

const TopNavBar = (props: Props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-8 flex justify-between items-center z-50">
      <div className="w-28">
        <Image src={kervintech} placeholder="blur" layout="responsive" />
      </div>
      <ul>
        <li>
          <a
            className="font-bold text-2xl md:text-4xl hover:bg-black hover:text-white p-3 transition-colors"
            href="https://kervin.blog"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavBar;
