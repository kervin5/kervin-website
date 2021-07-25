import React from "react";

interface Props {
  children?: React.ReactNode;
  fullHeight?: boolean;
  className?: string;
  id?: string;
}

const Section = ({
  children,
  fullHeight = false,
  className = "",
  id,
}: Props) => {
  return (
    <section
      className={`w-full relative ${fullHeight ? "h-screen" : ""} ${className}`}
      {...(id ? { id } : {})}
    >
      {children}
    </section>
  );
};

export default Section;
