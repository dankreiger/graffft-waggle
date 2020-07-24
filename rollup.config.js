import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { prepend } from 'rollup-plugin-insert';

import pkg from './package.json';

const input = 'index.ts';

const config = {
  input,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    prepend('/* eslint-disable */\n'), // helpful in dev since CRA's eslint is no longer configurable without ejecting
    resolve(),
    commonjs(),
    typescript(),
    sizeSnapshot(),
  ],
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.devDependencies),
  ],
};

export default config;
