import React, { ReactNode } from "react";
import TopNavBar from "../navigation/TopNavBar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full">
      <TopNavBar />
      {children}
    </div>
  );
};

export default Layout;
