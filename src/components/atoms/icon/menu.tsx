import * as React from "react";
import { SVGProps } from "react";

const MenuIcon = ({
  width = 16,
  height = 16,
  fill = "#041242",
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
    <circle cx="3" cy="3" r="3" fill={fill} />
    <circle cx="13" cy="3" r="3" fill={fill} />
    <circle cx="3" cy="13" r="3" fill={fill} />
    <circle cx="13" cy="13" r="3" fill={fill} />
  </svg>
);

export default MenuIcon;
