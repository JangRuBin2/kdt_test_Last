const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(path.resolve(__dirname, 'dist'))
module.exports = {
  entry : "./build/index.js",
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : "[name].bundle.js"
  },
  // 특정 파일에 대한 변환, 처리 작업 수행
  module :  {
    rules : [{
    // 로더를 적용할 파일 형식
    test : [/\.js$/, /\ts$/,/\tsx$/],
    exclude: /node_modules/,
    use : {
      loader : 'babel-loader',
      options : {
        presets : ['@babel/preset-env', "@babel/preset-react"],
      },
    },
  }]},
  // 어떤 유형의 파일들을 해석할 것인지 지정
  resolve: {
		extensions: [
			".js", ".jsx", ".ts", ".tsx"
		]
	},
  plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html" // index.html을 템플릿으로 번들링 결과 복사본 생성
		})
	]
}