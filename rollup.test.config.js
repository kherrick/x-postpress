import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import common from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';

import path from 'path';
import glob from 'glob';

const isProduction = () => process.env.NODE_ENV === 'production';
console.log(`Rollup building: ${isProduction() ? 'production' : 'development'}`);

export default [
  {
    output: {
      dir: path.join('dist'),
      format: 'esm',
    },
    input: [...glob.sync('./out-tsc/**/*.js')],
    plugins: [
      replace({
        'process.env.NODE_ENV': isProduction() ? JSON.stringify('production') : JSON.stringify('development'),
      }),
      builtins(),
      json(),
      common(),
      resolve({
        browser: true,
        preferBuiltins: true,
      }),
      babel({ babelHelpers: 'bundled' }),
      isProduction()
        ? terser({
            output: {
              comments: false,
            },
          })
        : undefined,
    ],
  },
];
