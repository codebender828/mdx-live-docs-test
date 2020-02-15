const path = require('path')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.mdx?$/,
          use: [
            'babel-loader',
            '@mdx-js/vue-loader'
          ]
        }
      ]
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common'
      }
    }
  }
}
