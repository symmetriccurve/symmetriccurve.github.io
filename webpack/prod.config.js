const baseConfig = require('./base.config.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const staticsPath = path.join(__dirname, '../')

module.exports = merge(baseConfig(), {
	output: {
		path: '/',
		filename: 'bundle.js',
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
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'resources/[name].[ext]',
						}
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
})
