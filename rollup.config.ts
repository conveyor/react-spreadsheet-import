import typescript from "rollup-plugin-typescript2"
import { babel } from "@rollup/plugin-babel"
import postcss from "rollup-plugin-postcss"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"
// import commonjs from "@rollup/plugin-commonjs"

export default {
  input: `src/index.ts`,
  preserveModules: true,
  output: [
    {
      format: "commonjs",
      dir: "./dist-commonjs",
    },
    {
      format: "esm",
      dir: "./dist",
    },
  ],
  external: [],
  plugins: [
    // commonjs(),
    postcss({
      plugins: [autoprefixer(), tailwindcss()],
      sourceMap: true,
      extract: true,
      minimize: true,
    }),
    babel({
      // babelHelpers: "bundled",
      // presets: ["@babel/env", "@babel/typescript", "@babel/preset-react"],
      // plugins: ["@babel/plugin-proposal-nullish-coalescing-operator", "@babel/plugin-proposal-optional-chaining"],
      plugins: [
        // "@babel/plugin-proposal-object-rest-spread",
        // "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
      ],
      presets: [
        "@babel/typescript",
        "@babel/react",
        [
          "@babel/env",
          {
            targets: {
              node: "8",
            },
          },
        ],
      ],
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: require("ttypescript"),
      tsconfigDefaults: {
        exclude: ["**/*.test.ts", "**/*.test.tsx", "**/tests", "**/stories", "./dist", "./dist-commonjs"],
        compilerOptions: {
          declarationDir: "./types",
          declaration: true,
          plugins: [{ transform: "typescript-transform-paths", afterDeclarations: true }],
        },
      },
    }),
  ],
}
