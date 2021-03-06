import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';

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
      resolve(),
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
