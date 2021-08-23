/* eslint-disable import/no-extraneous-dependencies,global-require */
/* eslint-disable import/no-extraneous-dependencies,global-require */
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-import-css";
import includePaths from "rollup-plugin-includepaths";
import commonjs from "rollup-plugin-commonjs";
// import { nodeResolve } from "@rollup/plugin-node-resolve";

const pkg = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    peerDepsExternal(),
    css(),
    // typescript({ module: "CommonJS", typescript: require("typescript") }),
    // nodeResolve(),
    commonjs({ extensions: [".js"] }),
    includePaths({ paths: ["./"] }),
  ],
};
