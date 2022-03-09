<template>
  <div>
    text-com 
    <p>info: {{info}}</p>
    <p>msg: {{msg}}</p>
    <button @click="handleChange">emit options</button>
  </div>
</template>
<script lang="ts" setup>
import {defineProps, defineEmits, defineExpose, ref, reactive} from 'vue';
defineProps({
  info: {
    type: String,
    default: "--"
  },
  msg: {
    type: String,
    default: '--'
  }
})

//使用defineEmits创建名称，参数接受一个数组 
let myEmit = defineEmits(['handleEmit, mydel'])
const handleChange = () => {
  myEmit('handleEmit', 'change-parent-info', 'xxxxx')
}

// defineExpose 报漏出属性
let sex = ref('男');
let list = reactive({
  mes: 'xxx',
  age: 23
})
defineExpose({
  sex,
  list
})
</script>