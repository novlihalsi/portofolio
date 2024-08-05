import getConfig from "next/config";

export type PublicRuntimeConfig = {
  appURL: string;
};

export const publicRuntimeConfig: PublicRuntimeConfig =
  getConfig()?.publicRuntimeConfig || {};
