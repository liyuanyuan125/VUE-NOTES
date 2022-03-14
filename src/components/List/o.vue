<template>
  <div>
    <h4>工程化</h4>
    <pre>
       参考地址： https://juejin.cn/post/7002839760792190989
       参考地址： https://juejin.cn/post/6957597810938085384
       参考地址： https://juejin.cn/post/6892994632968306702#heading-18
      webpack 两个优化方面 1. 优化开发体验(优化webpack构建速度)， 2. 优化输出质量(优化发布线上的代码，减少用户能感知的加载时间)
      <h5>1. webpack分析工具</h5>
      1. speed-measure-webpack-plugin（smp）
       通过smp了解webpack构建过程中，每一个阶段的loader和plugin工作花费的时间；
      2. webpack-bundle-analyzer
       webpack打包后的文件，占用体积
      3. 查看vue-cli webpack默认配置
       #根据mode，分别生成开发环境、生产环境的配置
        vue inspect --mode production > output.js
        #输入命令后，在根目录会生产一个output.js文件
      <h5>2. webpack 常见的plugin有哪些</h5>
      html-webpack-plugin: 根据模版自动生成html文件，自动引入css和js
      compression-webpack-plugin: 生产环境可采用gzip压缩JS和CSS
      speed-measure-webpack-plugin(smp): 分析每个打包文件的loader和plugin消耗时间
      webpack-bundle-analyzer: 生产环境快速分出打包文件的体积大小
      <h5>3. 如何⽤webpack来优化前端性能？</h5>
       压缩代码：webpack4+默认开启压缩，我们可以采用Gzip压缩（compression-webpack）
       提取公共第三⽅库： SplitChunksPlugin插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码
       Tree shaking：排除没有引用的模块，webpack4采用的em6（esmodule）模式，tree-shaking才回起作用
       Code Splitting：将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存
       图片压缩
      <h5>webpack 常见的plugin有哪些</h5>
      <h5>webpack 常见的plugin有哪些</h5>
      <h5>webpack 常见的plugin有哪些</h5>
    </pre>

    <pre>
      <h5>webpack 做过哪些优化，开发效率方面、打包策略方面等等</h5>
  
       1. 优化webpack构建速度

       2. 优化webpack打包体积
        
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