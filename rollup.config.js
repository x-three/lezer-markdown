import typescript from "rollup-plugin-typescript2"

export default {
  input: "./src/markdown.ts",
  output: [{
    format: "cjs",
    file: "./dist/index.cjs",
    externalLiveBindings: false
  }, {
    format: "es",
    file: "./dist/index.es.js",
    externalLiveBindings: false
  }],
  external: ["lezer-tree", "lezer", "lezer-html"],
  plugins: [
    typescript({
      check: false,
      tsconfigOverride: {
        compilerOptions: {
          lib: ["es5", "es6"],
          sourceMap: true,
          target: "es6",
          strict: false,
          declaration: true
        }
      },
      include: ["src/*.ts"]
    })
  ]
}
