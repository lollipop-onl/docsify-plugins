import { fileURLToPath } from "node:url";

/** @type {import('@rspack/cli').Configuration} */
const config = {
  devServer: {
    port: 4001,
  },
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: fileURLToPath(new URL("lib", import.meta.url)),
  },
};

export default config;
