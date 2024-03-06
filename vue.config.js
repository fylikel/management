const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: ['http://192.168.166.148:8183'],
        ws: false
      }
    }
  }
})
