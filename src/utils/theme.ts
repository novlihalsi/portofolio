/* eslint-disable @typescript-eslint/no-explicit-any */
import tailwindResolver from "../../tailwind-resolver";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const tailwind: any = tailwindResolver;

const { primary1, primary2, primary3, neutral1 } = tailwind.theme
  ?.colors as any;
const { sm, md, lg, xl, ["2xl"]: xxl } = tailwind.theme?.screens as any;

const colors = {
  primary1,
  primary2,
  primary3,
  neutral1,
};

const screens = {
  sm,
  md,
  lg,
  xl,
  xxl,
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export { colors, screens, cn };
