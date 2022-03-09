<template>
  <div>
    参考地址： https://blog.csdn.net/weixin_42008209/article/details/80318180
    <h3>css中的权重（样式优先级）</h3>
    <pre>
      1. 什么是css权重 无疑是css使用样式的优先级
      2. 权重等级
       !import 加在样式属性后（10000权重最大） > 
       style行业样式（权重为1000） >
       id（权重为100） > 
       类class，伪类和属性选择器 （权重为10） >
       标签，伪元素选择器（权重1）>
       通配符（*），子选择器（>）,相邻选择器（+），兄弟选择器（～）（权重0）

      
    </pre>
    <h3>伪类和伪元素的区别</h3>
    <pre>
      伪元素: 
        两个冒号（::）::before, ::after, ::placeholder
        伪元素只是给页面添加一个元素（不是真正的添加到dom中，视觉添加）
      伪类:
        一个冒号（:）:hover, :link, :active, :focus
        伪类是给一个存在的元素添加一个类名
    </pre>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
}

</script>
<style scoped lang='less'>
</style>