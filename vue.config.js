module.exports = {
    configureWebpack: {
      //https://www.webpackjs.com/configuration/devtool/
      //devtool: 'none',
        resolve: {
            alias: {
              //https://cn.vuejs.org/v2/guide/installation.html
              'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
            }
          }
    }
  }