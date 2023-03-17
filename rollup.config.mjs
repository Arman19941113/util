import fs from 'fs'
import path from 'path'

import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

import rollupPostcss from 'rollup-plugin-postcss'
import postcssPresetEnv from 'postcss-preset-env'
import postcssNested from 'postcss-nested'
import cssnano from 'cssnano'

const npmPkgPath = path.resolve('package.npm.json')
const npmPkg = JSON.parse(fs.readFileSync(npmPkgPath, 'utf-8'))
const pkgName = npmPkg.name
const outputName = pkgName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')

const jsTasks = {
  input: 'src/index.ts',
  external: ['vue'],
  output: [
    {
      name: outputName,
      file: 'dist/index.global.js',
      format: 'iife',
      globals: { vue: 'Vue' },
      plugins: [terser()],
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
    }),
    typescript({
      compilerOptions: {
        removeComments: true,
      },
    }),
    nodeResolve(),
  ],
}

const cssTask = {
  input: 'src/index.css',
  output: {
    file: 'dist/index.css',
    format: 'es',
  },
  plugins: [
    rollupPostcss({
      extract: true,
      plugins: [
        postcssNested,
        postcssPresetEnv({
          stage: 0,
        }),
        cssnano,
      ],
    }),
  ],
}

export default [
  jsTasks,
  cssTask,
]
