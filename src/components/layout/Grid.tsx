import React from "react";
import { styled } from "twin.macro";

interface Props {
  children?: React.ReactNode;
  columns?: ColumnsType;
}

type ColumnsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const columnClasses = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12",
};

const StyledGrid = styled.div`
  height: -webkit-fill-available;
`;

const Grid = ({ children, columns }: Props) => {
  const numberOfColumns = React.Children.toArray(children).length;

  return (
    <div
      className={`grid grid-cols-1 h-full ${
        columns
          ? columnClasses[columns]
          : numberOfColumns
          ? columnClasses[numberOfColumns as ColumnsType]
          : columnClasses[1]
      }`}
    >
      {children}
    </div>
  );
};

export default Grid;
