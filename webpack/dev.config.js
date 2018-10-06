const URL = 'http://localhost:5000'
const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = merge(baseConfig(), {
	devtool: 'eval-source-map',
	devServer: {
		publicPath: '/',
		historyApiFallback: true,
		hot: true,
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
			},
			url: JSON.stringify(URL)
		})
	]
})

/* const webpack = require('webpack')
const path = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

const sourcePath = path.join(__dirname, './client')
const staticsPath = path.join(__dirname, './static')

module.exports = function(env) {
	if (env.prod == 'true') {
		console.log('\x1b[44m%s\x1b[0m', 'STARTING IN PRODUCTION MODE')
		console.log('\x1b[42m%s\x1b[0m', 'POINTING TO URL ' + env.url)
		return {
			devtool: 'cheap-module-source-map',
			context: sourcePath,
			entry: {
				js: './index.js',
			},
			output: {
				path: staticsPath,
				filename: 'bundle.js',
			},
			module: {
				rules: [{
					test: /\.html$/,
					exclude: /node_modules/,
					use: {
						loader: 'file-loader',
						query: {
							name: '[name].[ext]'
						},
					},
				},
				{
					test: /\.css$/,
					//exclude: /node_modules/,
					use: [
						'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.(sass|scss)$/,
					exclude: /node_modules/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader',
					]
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						'babel-loader'
					],
				},
				{
					test: /\.png$/,
					exclude: /node_modules/,
					use: [
						'file-loader?name=images/[name].[ext]'
					]
				}
				],
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env': {
						'NODE_ENV': JSON.stringify('production')
					},
					prod: JSON.stringify(env.prod),
					url: JSON.stringify(env.url)
				}),
				new webpack.optimize.UglifyJsPlugin({
					compress: {
						warnings: false
					}
				})
			],
			resolve: {
				extensions: ['.js', '.jsx'],
				modules: [
					'node_modules',
					sourcePath
				]
			}
		}

	} else {
		console.log('\x1b[44m%s\x1b[0m', 'STARTING IN DEVELOPMENT MODE')
		console.log('\x1b[42m%s\x1b[0m', 'POINTING TO URL ' + env.url)
		return {
			devtool: 'eval-source-map',
			context: sourcePath,
			entry: {
				js: './index.js',
			},
			output: {
				path: staticsPath,
				filename: 'bundle.js',
			},
			module: {
				rules: [{
					test: /\.html$/,
					exclude: /node_modules/,
					use: {
						loader: 'file-loader',
						query: {
							name: '[name].[ext]'
						},
					},
				},
				{
					test: /\.css$/,
					//exclude: /node_modules/,
					use: [
						'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.(sass|scss)$/,
					exclude: /node_modules/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader',
					]
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						'babel-loader'
					],
				},
				{
					test: /\.png$/,
					exclude: /node_modules/,
					use: [
						'file-loader?name=images/[name].[ext]'
					]
				},
				{
					test: /\.jpeg$/,
					exclude: /node_modules/,
					use: [
						'file-loader?name=images/[name].[ext]'
					]
				}
				],
			},
			devServer: {
				contentBase: './client',
				historyApiFallback: true,
				port: 3000,
				compress: false,
				inline: true,
				hot: true,
				stats: {
					assets: true,
					children: false,
					chunks: false,
					hash: false,
					modules: false,
					publicPath: false,
					timings: true,
					version: false,
					warnings: true,
					colors: {
						green: '\u001b[32m',
					}
				},
			},
			plugins: [
				new OpenBrowserPlugin({
					url: 'http://localhost:3000'
				}),
				new webpack.HotModuleReplacementPlugin(),
				new webpack.DefinePlugin({
					lastUpdated: 'new Date()',
					prod: JSON.stringify(env.prod),
					url: JSON.stringify(env.url)

				})
			],
			resolve: {
				extensions: ['.js', '.jsx'],
				modules: [
					'node_modules',
					sourcePath
				]
			}
		}
	}
} */
