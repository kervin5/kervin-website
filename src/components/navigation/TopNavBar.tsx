import React from "react";

interface Props {}

const TopNavBar = (props: Props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-8 flex justify-end z-50">
      <ul>
        <li>
          <a
            className="font-bold text-2xl hover:bg-black hover:text-white p-3 transition-colors"
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
