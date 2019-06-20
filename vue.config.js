module.exports = {
    // 选项...
    chainWebpack: config => {
      config.module
        .rule('swf')
        .test(/\.swf$/)
        .use('url-loader')
          .loader('url-loader')
          .tap(options => {
            return {
              limit: 10000
            }
          })
    }
  }