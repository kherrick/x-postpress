import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

import glob from 'glob'
import path from 'path'

const isProduction = () => process.env.NODE_ENV === 'production'

export default [
  {
    output: {
      dir: path.join('dist', 'esm'),
      format: 'esm'
    },
    input: [...glob.sync('./src/**/*.ts')],
    plugins: [
      replace({
        'process.env.NODE_ENV': isProduction() ? JSON.stringify('production') : JSON.stringify('development')
      }),
      resolve(),
      typescript(),
      isProduction() ? terser() : undefined
    ]
  },
  {
    output: {
      dir: path.join('dist', 'umd'),
      format: 'umd',
      name: 'x-postpress'
    },
    input: [path.join('src/x-postpress/module.ts')],
    plugins: [
      replace({
        'process.env.NODE_ENV': isProduction() ? JSON.stringify('production') : JSON.stringify('development')
      }),
      resolve(),
      typescript(),
      isProduction() ? terser() : undefined
    ]
  }
]
