import * as React from "react";
import { SVGProps } from "react";

const CloseIcon = ({
  width = 14,
  height = 14,
  fill = "#DFDFDF",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 13L13 1M1 1L13 13"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 13L13 1M1 1L13 13"
      stroke="black"
      strokeOpacity="0.3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
