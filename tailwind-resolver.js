/* eslint-disable @typescript-eslint/no-var-requires */
const resolveConfig = require("tailwindcss/resolveConfig.js");
const tailwindConfig = require("./tailwind.config.js");
module.exports = resolveConfig(tailwindConfig);
