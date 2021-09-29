import typescript from 'rollup-plugin-typescript2'
import commonjs from "@rollup/plugin-commonjs";
import globals from "rollup-plugin-node-globals";
import json from '@rollup/plugin-json';
import builtins from "rollup-plugin-node-builtins";
import resolve from "@rollup/plugin-node-resolve";
export default [
  {
    input: './src/index.ts',
    output: {
      file: './lib/mylib.mjs',
      format: 'esm',
      indent: '\t',
      // intro: 'var global = typeof self !== undefined ? self : this;',
      // sourcemap: true
      // intro: 'const global = window; global.index = global.index ? global.index : {};'
    },
    plugins: [
      typescript(),
      resolve({
        browser:true,
        preferBuiltins: true,
        customResolveOptions: { }
      }),
      commonjs(),
      json(),
      globals(),
      builtins(),
    ],
  },
]