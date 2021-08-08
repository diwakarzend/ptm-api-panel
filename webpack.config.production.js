const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackGoogleCloudStoragePlugin = require('webpack-google-cloud-storage-plugin');

process.traceDeprecation = true;

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: '[name].[hash].min.js',
    chunkFilename: '[name].[hash].js',
    publicPath: process.env.publicPath,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [{ loader: 'url-loader' }]
        },
        {
          test: /\.(eot|ttf|otf|woff2|woff|svg|gif|png|jpg)$/,
          use: [{ loader: 'file-loader' }],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
      ]
  },
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            drop_console: true,
            warnings: true,
            drop_debugger: true,
          },
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_SERVER: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new WebpackGoogleCloudStoragePlugin({
      directory: path.resolve(__dirname, 'public/build'),
      include: [/.*\.js/],
      storageOptions: {
        projectId: process.env.projectId,
      },
      uploadOptions: {
        bucketName: process.env.bucketName,
        destinationNameFn: file =>
           path.join('new-folder/assets/js/', file.name)
        ,
        metadataFn: file => ({
          cacheControl: 'public, max-age=31536000',
        }),
        gzip: true,
        makePublic: true,
        resumable: true,
        concurrency: 5,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      inject: 'body',
      tenantToken: process.env.tenantToken || '',
    }),
  ],
};
