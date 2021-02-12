const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    alias: {
      'styled-components': path.resolve(
        __dirname,
        'node_modules',
        'styled-components'
      ),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  entry: ['./src/index.tsx'],
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader?url=false'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.template.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({ patterns: [{ from: 'public', to: '.' }] }),
    new Dotenv({
      path: path.join(__dirname, '.env'),
      systemvars: true // for deploy env
    }),
  ],
}
