import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const isDEV = process.env.NODE_ENV !== 'production';

export default {
  entry: isDEV ? './src/demo.js' : './src/index.js',
  dest:  isDEV ? 'dist/demo.js'  : 'dist/build.js',
  format: 'umd',
  sourceMap: true,
  useStrict: true,
  moduleName: 'VHub',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
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
