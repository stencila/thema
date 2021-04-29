const CopyWebpackPlugin = require('copy-webpack-plugin')
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin')
const HtmlInsertTagWebpackPlugin = require('html-insert-tag-webpack-plugin')
const path = require('path')
const plugins = require('./webpack.plugins')
const rules = require('./webpack.rules')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

module.exports = {
  target: 'electron-renderer',
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    new HtmlInsertTagWebpackPlugin([
      {
        tagName: 'base',
        inject: {
          tagName: 'head',
          location: 'after',
        },
        attributes: {
          href: 'stencila://rse',
        },
      },
    ]),
    new CspHtmlWebpackPlugin(
      {
        'base-uri': "'self' stencila://rse",
        'default-src': 'stencila://rse',
        'script-src': ["'self'"],
        'img-src': ["'self'", 'data:'],
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          'https://unpkg.com/',
          'https://fonts.googleapis.com/',
        ],
        'connect-src': "'self'",
        'font-src': ["'self'", 'https://fonts.gstatic.com/'],
      },
      {
        hashEnabled: {
          'script-src': true,
          'style-src': true,
        },
        nonceEnabled: {
          'script-src': true,
          'style-src': false,
        },
      }
    ),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'www', 'build'),
          to: 'build',
        },
        {
          from: path.resolve(__dirname, 'www', 'assets'),
          to: 'assets',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.mjs', '.ts', '.css'],
  },
}