import * as React from "react";
import { SVGProps } from "react";

const ArrowLeftIcon = ({
  width = 17,
  height = 12,
  fill = "#041242",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.935162 5.43516C0.623209 5.74711 0.623209 6.25289 0.935162 6.56484L6.01871 11.6484C6.33066 11.9603 6.83644 11.9603 7.14839 11.6484C7.46034 11.3364 7.46034 10.8307 7.14839 10.5187L2.62968 6L7.14839 1.48129C7.46034 1.16934 7.46034 0.663563 7.14839 0.351611C6.83644 0.0396595 6.33066 0.0396595 6.01871 0.351611L0.935162 5.43516ZM16.5 5.2012L1.5 5.2012V6.7988L16.5 6.7988V5.2012Z"
      fill={fill}
    />
  </svg>
);

export default ArrowLeftIcon;
