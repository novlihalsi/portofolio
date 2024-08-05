import * as React from "react";
import { SVGProps } from "react";

const FacebookIcon = ({
  width = 10,
  height = 18,
  fill = "black",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.60482 6.50001H6.66732V4.83334C6.66732 3.97334 6.73732 3.43168 7.96982 3.43168H9.52648V0.781678C8.76898 0.703345 8.00732 0.665011 7.24482 0.666678C4.98398 0.666678 3.33398 2.04751 3.33398 4.58251V6.50001H0.833984V9.83335L3.33398 9.83251V17.3333H6.66732V9.83084L9.22232 9.83001L9.60482 6.50001Z"
      fill={fill}
    />
  </svg>
);

export default FacebookIcon;
