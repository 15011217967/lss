const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
  chainWebpack: config => {
   config.resolve.alias
    .set('#', resolve('src/assets'))
    .set('_@', resolve('src/components'))
  },
  devServer: {
    proxy: 'http://222.128.6.194:8192'
  }
}
