import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import React from 'react'
import ReactIs from 'react-is'
// import ReactDOM from 'react-dom'
import * as ReactDOM from 'react-dom'
export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            },
        ],
        external: ['prop-types'],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            commonjs({
                include: /node_modules/,
                namedExports: {
                    'react-is': Object.keys(ReactIs),
                    react: Object.keys(React),
                    'react-dom': Object.keys(ReactDOM),
                    '@apollo/client': [
                        'ApolloProvider',
                        'ApolloClient',
                        'HttpLink',
                        'InMemoryCache',
                        'useQuery',
                        'gql',
                    ],
                    'styled-components': ['styled', 'css', 'ThemeProvider'],
                },
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            resolve(),
            terser(),
        ],
    },
]
