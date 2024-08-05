import * as React from "react";
import { SVGProps } from "react";

const TwitterIcon = ({
  width = 16,
  height = 16,
  fill = "black",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.389974 0.5L6.11426 8.68197L0.279297 15.5H2.4847L7.10059 10.0915L10.8848 15.5H15.8099L9.81217 6.91439L15.2874 0.5H13.1162L8.83073 5.50814L5.33301 0.5H0.389974Z"
      fill={fill}
    />
  </svg>
);

export default TwitterIcon;
