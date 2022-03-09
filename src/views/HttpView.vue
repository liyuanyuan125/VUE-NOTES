<template>
  <div>
    <pre>
      HTTP1, HTTP2, HTTPS、常见的http状态码；
      浏览从输入网址到回车发生了什么；
      前端安全（CSRF、XSS）
      前端跨域、浏览器缓存、cookie, session, token, localstorage, sessionstorage；
      TCP连接(三次握手, 四次挥手)
    </pre>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: '',
  setup() {
    console.log('1-开始创建组件-setup')
    const data = reactive({})
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style scoped lang='scss'>
</style>