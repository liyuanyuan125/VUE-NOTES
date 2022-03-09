<template>
  <div>
    参考地址： https://mp.weixin.qq.com/s/Dhu_b7eYTZwUzK0tsLYhnw
    <h3>vue3.2到底更新了什么</h3>
    <pre>
      1. SSR服务器渲染
      2. 新的单文件组件特性（New SFC Features）
      3. Effect Scope API：effect 作用域 用来直接控制响应式副作用的释放时间(computed 和 watchers)。
    </pre>

    <h3>setup简单介绍</h3>
    <pre>
      起初 Vue3.0 报漏的变量必须return出来，template模版才可以使用；
      这样导致在页面上出现很多变量，很不友好

      vue3.2 在script标签中添加了setup属性，带来的好处是
      1. 组件只引入不注册，声明的属性和方法也不需要return返回；
      2. 也不用写setup函数，也不用返回export default
      3. 自定义指令也可以在template模版中自动获得
      4. 新增defineProps属性和defineEmits属性（父子组件传递参数，父组件接受子组件参数）
      5. 如何获取子组件中定义的属性值 defineExpose({}) 将组件中属性报漏出去，父组件就可以获取 （ref方式）
      6. 新增指令 v-memo
      7. style 使用 v-bind 样式
       const state = reactive({
         color: 'red',
         fontSize: '16',
       })
       // style lang=“less”
       // v-bind绑定state变量
       span {
         color: v-bind('state.color')
       }

      
    </pre>

    <h3></h3>
    <pre></pre>

    <h3></h3>
    <pre></pre>

    <h3></h3>
    <pre></pre>

    <!-- 模版测试 -->
    <div>
      <p>代码测试</p>
      
      <p>{{ flag }}</p>
      <button @click="changeFlag">测试</button>
      <text-com :info="props" msg="yuanyuanli" @handleEmit="getOptions" ref="textdom" />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue'
import TextCom from './com/TextCom'

// 定义参数
let flag = ref('第一次循环')
let changeFlag = () => {
  flag.value = '第二次循环'
}

// 父子传参
let props = 'xxxxx';
const getOptions = (...arg) => {
  console.log(arg)
}

// defineExpose 报漏参数获取
const textdom = ref();
onMounted(() => {
  const sex1 = textdom.value.sex;
  const list1 = textdom.value.list;
  console.log(sex1, list1)
})


</script>
