<template>
  <div>
    <h4>工程化</h4>
    <pre>
      webpack 两个优化方面 1. 优化开发体验， 2. 优化输出质量
      1. 优化开发体验，
        优化webpack构建速度
        优化使用体验
      2. 优化输出质量
        优化发布线上的代码，减少用户能感知的加载时间
        提升代码性能，性能好，执行就快
    </pre>
    <pre>
      <h5>webpack 做过哪些优化，开发效率方面、打包策略方面等等</h5>
      影响前端发布速度的有两个方面，一个是构建，一个就是压缩，把这两个东西优化起来，可以减少很多发布的时间
       1. 优化webpack构建速度

       2. 优化webpack打包体积
        压缩代码
        提取页面公共资源：
        Tree shaking
        Scope hoisting
        图片压缩
        动态Polyfill
       3. speed-measure-webpack-plugin(多核压缩)
       简称 SMP，分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时，有助于找到构建过程中的性能瓶颈。
       开发阶段开启 多核压缩 插件：** terser-webpack-plugin **
       const TerserPlugin = require('terser-webpack-plugin')
        module.exports = {
            optimization: {
                minimizer: [
                    new TerserPlugin({
                        parallel: true,
                        terserOptions: {
                            ecma: 6,
                        },
                    }),
                ]
            }
        }

    </pre>
  </div>
</template>