import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: './src/index.js',
  dest: 'dist/build.js',
  format: 'umd',
  sourceMap: true,
  useStrict: true,
  moduleName: 'VHub',
  plugins: [
    commonjs(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    buble({
      objectAssign: 'Object.assign'
    })
  ]
};
