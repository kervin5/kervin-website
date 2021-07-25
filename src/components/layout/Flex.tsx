import React from "react";

interface Props {
  children?: React.ReactNode;
  center?: boolean;
  centerX?: boolean;
  className?: string;
  column?: boolean;
}

const Flex = ({ children, center, centerX, className, column }: Props) => {
  return (
    <div
      className={`flex ${centerX ? "justify-center" : ""} ${
        center ? "justify-center items-center" : ""
      } ${className ?? ""}
      ${column ? "flex-col" : ""}
      `}
    >
      {children}
    </div>
  );
};

export default Flex;
