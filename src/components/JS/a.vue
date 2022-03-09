<template>
  <div>
    <h3>10个常用的JS工具库</h3>
    <p>
      高手在善于用库，把更多的时间用来规划和思考，写代码也如此，用更多的时间来攻克难题
    </p>

    <pre>
  1. dayjs 一个处理时间和日期的js库，和momentjs设计一样，但是体积2kb
  npm install dayjs
  import dayjs from 'dayjs'

  dayjs().format('YYYY-MM-DD HH:mm') // => 2022-01-03 15:06
  dayjs('2022-1-3 15:06').toDate() // => Mon Jan 03 2022 15:06:00 GMT+0800 (中国标准时间)

  2. qs 一个轻量url参数转转换js库
  npm install qs
  import qs from 'qs'

  qs.parse('user=tom &age=22') // => { user: "tom", age: "22" }
  qs.stringify({ user: "tom", age: "22" }) // => user=tom&age=22

  3. JS-Cookie 一个简单的、轻量的处理 cookies 的 js API
  npm install js-cookie
  import Cookies from 'js-cookie'

  Cookies.set('name', 'value', { expires: 7 }) // 有效期7天
  Cookies.get('name') // => 'value'

  4. flv.js bilibili 开源的 html5 flash 视频播放器，使浏览器在不借助 flash 插件的情况下可以播放 flv，目前主流的直播、点播解决方案。
  npm install flv.js
  <!-- <video autoplay controls width="100%" height="500" id="myVideo"></video> -->
  import flvjs from 'flv.js'

  // 页面渲染完成后执行
  if (flvjs.isSupported()) {
    var myVideo = document.getElementById('myVideo')
    var flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: 'http://localhost:8080/test.flv' // 视频 url 地址
    })
    flvPlayer.attachMediaElement(myVideo)
    flvPlayer.load()
    flvPlayer.play()
  }

  5.vConsole 移动端调试
  npm install vconsole
  import VConsole from 'vconsole'

  const vConsole = new VConsole()
  console.log('Hello world')

  6. Animate.css 一个跨浏览器的 css3 动画库，内置了很多典型的 css3 动画，兼容性好，使用方便
  npm install animate.css
  基本用法：
  <!-- <h1 class="animate__animated animate__bounce">An animated element</h1> -->
  import 'animate.css'

  7. animejs 一款功能强大的 Javascript 动画库。可以与CSS3属性、SVG、DOM元素、JS对象一起工作，制作出各种高性能、平滑过渡的动画效果。
  <!-- <div class="ball" style="width: 50px; height: 50px; background: blue"></div> -->

   import anime from 'animejs/lib/anime.es.js'

  // 页面渲染完成之后执行
  anime({
    targets: '.ball',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#F00',
    duration: 800
  })

  8. loadsh.js 一个一致性、模块化、高性能的 JavaScript 实用工具库
  npm install lodash
  import _ from 'lodash'

  _.max([4, 2, 8, 6]) // 返回数组中的最大值 => 8
  _.intersection([1, 2, 3], [2, 3, 4]) // 返回多个数组的交集 => [2, 3]

  9. mescroll.js n一款精致的、在H5端运行的下拉刷新和上拉加载插件，主要用于列表分页、刷新等场景
  </pre>
    参考地址： https://mp.weixin.qq.com/s/Mrz8vHJaFAAjCT164kh5gw
  </div>
</template>

<script lang="ts">
import {onMounted} from 'vue'
export default {
  // setup() {
  //   onMounted(() => {
  //     const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
  //     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //     console.log(shuffleArray(arr))
  //   })
  //   // return {}
  // }

}
</script>
<style scoped lang="less"></style>
