const path = require('path');
// console.log(path.resolve(__dirname, 'dist'))
module.exports = {
  entry : "build/index.js",
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : "bundle.js"
  },
  // module : [ {

  // }]
}