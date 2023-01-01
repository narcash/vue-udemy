module.exports = {
  transpileDependencies: [
      'vuetify',
  ],
  chainWebpack: config => {
      config.module
          .rule('vue')


           .use('vue-loader')
  }
};
