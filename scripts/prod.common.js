import replace from 'rollup-plugin-replace';
import jsx from 'rollup-plugin-jsx';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    jsx( {factory: 'React.createElement'} ),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ],
  output: {
    sourcemap: true,
    exports: 'named',
    name: 're-sizable',
    globals: {
      react: 'React',
    },
  },
  external: ['react'],
};
