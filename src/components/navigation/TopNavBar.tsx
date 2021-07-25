import React from "react";
import Image from "next/image";
import kervintech from "public/images/kervintech.png";
import kervintechsmall from "public/images/kervintechsmall.png";

interface Props {}

const TopNavBar = (props: Props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-8 flex justify-between items-center z-50">
      <div className="w-28 hidden md:inline-block">
        <Image src={kervintech} placeholder="blur" layout="responsive" />
      </div>
      <div className="w-11 inline-block md:hidden">
        <Image src={kervintechsmall} placeholder="blur" layout="responsive" />
      </div>
      <ul>
        <li>
          <a
            className="font-extrabold text-2xl md:text-4xl hover:bg-black hover:text-white p-3 transition-colors"
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
