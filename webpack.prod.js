const { merge } = require('webpack-merge')
const common = require('./webpack.config')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  // plugins: [new BundleAnalyzerPlugin()],
})
