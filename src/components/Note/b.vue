<template>
  <div>
    参考地址 https://mp.weixin.qq.com/s/UWsjDSQjyPIe0KvQmC-6Nw
    <h3>什么是viewport</h3>
    <pre>
      viewport 就是视图，视窗，在移动端端中，整块显示屏就是视图
      viewport 分为3种 layout viewport(浏览器), visual viweport, ideal viewport（移动端）; 
    </pre>

    <h3>viewport设计单位 vw，vh</h3>
    <pre>
      viewport将浏览器分成了100份，vw就是view width，vh就是view height；
      1vw = 等于视图宽度的1%； 
      1vh = 等于视图高度的1%；
      如果设计的视图为375px，1vw = 3.75px
      <!-- <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"> -->
    </pre>

    <h3>viweport 适配解决方案</h3>
    <pre>
      1. npm install postcss-px-to-viewport --save-dev // 将px 转化为vw vh
      //postcss.config.js

        module.exports = {
          plugins: {
            'postcss-px-to-viewport': {
            unitToConvert: "px", // 要转化的单位       
            viewportWidth: 375, // UI设计稿的宽度       
            unitPrecision: 6, // 转换后的精度，即小数点位数       
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换     
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw       
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw      selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，       
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换       
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false      
            replace: true, // 是否转换后直接更换属性值       
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配       
            }
          }
        }


        值得注意的是:postcss-px-to-viewport 同样存在第三方组件库兼容性的问题。比如在设计稿为750px时使用vant组件库会将vant组件的样式缩小。
        解决第三方组件库兼容问题
        vant组件库的设计稿是按照375px来开发的。因此在viewportWidth为750px时会出现转换问题。
        // postcss.config.js
        const path = require('path');

        module.exports = ({ webpack }) => {
          const viewWidth = webpack.resourcePath.includes(path.join('node_modules', 'vant')) ? 375 : 750;
          return {
            plugins: {
              autoprefixer: {},
              "postcss-px-to-viewport": {
                unitToConvert: "px",
                viewportWidth: viewWidth,
                unitPrecision: 6,
                propList: ["*"],
                viewportUnit: "vw",
                fontViewportUnit: "vw",
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: true,
                exclude: [],
                landscape: false
              }
            }
          }
        }
        复制代码
        如果读取的node_modules中的文件是vant,那么就将设计稿变为375px。如果读取的文件不是vant的文件,那么就将设计稿变为750px。这样就可以避免vant组件在750px下出现样式缩小的问题了。
        同理 这对于其他的移动端UI组件库同样有效果。我们只需要改动这行代码即可
        const viewWidth = webpack.resourcePath.includes(path.join('node_modules', 'vant')) ? 375 : 750; 


    </pre>

    <h3></h3>
    <pre></pre>
    
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'


</script>
<style scoped lang='less'>
</style>