const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		historyApiFallback: true,
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'static'),
		publicPath: '/',
	},
	mode: 'development',
	entry: './src/index.js',

	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: ['file-loader?name=[name].[ext]'],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
			favicon: './public/favicon.ico',
		}),
	],
}
