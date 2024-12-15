import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import path from "path";
// import terser from "@rollup/plugin-terser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  input: "./src/index.ts",
  plugins: [
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    }),
    typescript(),
    resolve(),
    commonjs(),
  ],
  external: ["@ffmpeg/ffmpeg", "@ffmpeg/util", "mitt", "uuid"],
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    sourcemap: true,
    paths: {
      "@/*": "./src/*",
    },
  },
};
