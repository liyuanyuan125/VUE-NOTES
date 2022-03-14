<template>
  <div>
  <pre>
    <h5>映射类型</h5>
    在ts中允许将一个类型映射成另外一个类型

    <h5>1. in操作符（用来对联合类型实现遍历）</h5>
    type Person = "name"|"school"|"major";
    type obj = {
      [p in Person]:string
    }
    等价于
    type obj = {
      name: string 
      school: string 
      major: string 
    }
    <h5>2. Partial,Readonly</h5>
      Partial T>将T的所有属性映射为可选的
      Readonly T>T类型里面的属性变成只读的
       <img src="./image/4.png" style="width: 70%" />
    <h5>3. Pick 用来抽取对象子集，挑选一组属性并组成新的类型</h5>
      <img src="./image/5.png" style="width: 70%" />
    <h5>4. Record 只作用于obj属性而不会引入新的属性</h5>
  </pre>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // Pick<T, 联合属性> 组成新的类型
    interface IPerson {
      name: string
      age: number
      sex: string
    }
    type IPick = Pick<IPerson, 'name' | 'age'>
    let p1: IPick = {
      name: 'lin',
      age: 18
    }

  },
})
</script>
