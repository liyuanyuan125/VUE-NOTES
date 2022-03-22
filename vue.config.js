const { defineConfig } = require("@vue/cli-service");
// const path = require("path");
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  lintOnSave: false,
});

// 
/**
 * Webpack 的构建速
 * 1. 缩小打包作用域
    exclude/include (确定 loader 规则范围)
    resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
    resolve.extensions 尽可能减少后缀尝试的可能性
    noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
    IgnorePlugin (完全排除模块)
    合理使用alias
 * 
 */
