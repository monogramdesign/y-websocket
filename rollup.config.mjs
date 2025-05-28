import { nodeResolve } from '@rollup/plugin-node-resolve'

  export default [{
    input: ['./src/y-websocket.js'],
    external: id => /^(lib0|yjs|y-protocols|ws|http)/.test(id),
    output: [{
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      entryFileNames: '[name].cjs',
      chunkFileNames: '[name]-[hash].cjs'
    }]
  }, {
    input: './src/y-websocket.js',
    output: [{
      dir: 'dist',
      format: 'amd',
      sourcemap: true,
      entryFileNames: '[name].amd.js',
      chunkFileNames: '[name]-[hash].amd.js',
    }],
    plugins: [
      nodeResolve({
        browser: true,
        extensions: ['.js', '.ts'],
        preferBuiltins: false
      })
    ]
  }]
