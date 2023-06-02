const path = require('path');
// console.log(path.resolve(__dirname, 'dist'))
module.exports = {
  entry : "./build/index.js",
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : "bundle.js"
  },
  // 특정 파일에 대한 변환, 처리 작업 수행
  module :  {
    rules : [{
    // 로더를 적용할 파일 형식
    test : /\.js$/,
    use : {
      loader : 'babel-loader',
      options : {
        presets : ['@babel/preset-env'],
      },
    },
  }]},
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}