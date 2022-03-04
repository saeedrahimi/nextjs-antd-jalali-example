/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");
const pluginAntdLess = withAntdLess({
  // modifyVars: {
  //   '@THEME--DARK': 'theme-dark',
  // },
  lessVarsFilePath: "./assets/antd-custom.less",
  // cssLoaderOptions: {
  esModule: true,
  // sourceMap: false,
  // modules: {
  // mode: 'local',
  // localIdentName: '[hash:2]',
  // },
  // },
});

module.exports = withPlugins([pluginAntdLess], {
  webpack(config) {
    return config;
  },
  reactStrictMode: true,
  esmExternals: true,
  // images: {
  //   disableStaticImages: true,
  // },
  // NextFuture
  // future: {
  //   webpack5: true,
  // },
});
