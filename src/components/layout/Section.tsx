import React from "react";

interface Props {
  children?: React.ReactNode;
  fullHeight?: boolean;
  className?: string;
}

const Section = ({ children, fullHeight = false, className = "" }: Props) => {
  return (
    <section
      className={`w-full relative ${fullHeight ? "h-screen" : ""} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
