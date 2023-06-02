// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: "./build/index.tsx"
	}, // 진입점 파일
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: [/\.ts/, /\.tsx/],
				use: [
					"babel-loader",
					"ts-loader"
				],
        exclude: /node_modules/
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		port: 8000,
		hot: true,
	},
	resolve: {
		extensions: [
			".js", ".jsx", "...", ".tsx"
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./build/index.html"
		})
	]
}