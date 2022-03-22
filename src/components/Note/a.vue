<template>
  <pre>
    参考地址：https://juejin.cn/post/7062888582465191944
    
    在项目中会遇到这样的功能，用户将文件/附件上传到服务器，在前端页面有个下载的入口，有时候后端返回的是blod，这种情况是最好的
    但是有的时候为了方便，直接返回一个文件存在的地址url，对于前端来说可能会存在一些问题，比如下载文件时浏览器会出现闪动，下载图片，json文件
    等不会下载也是直接打开了这类文件，
    解决思路：
    封装自定义指令
    将url转化为blod，在创建a标签下载blod

  </pre>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: '',
  setup() {
    const data = reactive({})
   
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style scoped lang='less'>
</style>