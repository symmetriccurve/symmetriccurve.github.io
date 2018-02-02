const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = merge(baseConfig(), {
	devtool: 'eval-source-map',
	devServer: {
		inline: true,
		contentBase: './client',
		port: 3000,
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				//exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			}
		]
	},
	plugins: [
		new OpenBrowserPlugin({
			url: 'http://localhost:3000'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		})
	]
})
