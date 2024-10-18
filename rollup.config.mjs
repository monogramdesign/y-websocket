import { nodeResolve } from "@rollup/plugin-node-resolve"

export default [
  {
    input: "./src/y-websocket.js",
    output: [
      {
        external: (id) => /^(lib0|yjs|y-protocols)/.test(id),
        name: "y-websocket",
        file: "dist/y-websocket.cjs",
        format: "cjs",
        sourcemap: true,
        paths: (path) => {
          if (/^lib0\//.test(path)) {
            return `lib0/dist${path.slice(4)}.cjs`
          } else if (/^y-protocols\//.test(path)) {
            return `y-protocols/dist${path.slice(11)}.cjs`
          }
          return path
        },
      },
    ],
  },
  {
    input: "./src/y-websocket.js",
    output: [
      {
        name: "y-websocket",
        file: "dist/y-websocket.amd.js",
        format: "amd",
        sourcemap: true,
      },
    ],
    external: ["yjs"],
    plugins: [
      nodeResolve({
        browser: true,
        extensions: [".js", ".ts"],
        preferBuiltins: false,
        // context: "window",
      }),
      // postcss({
      // plugins: [],
      // extract: true,
      // minimize: true,
      // }),
    ],
  },
]
