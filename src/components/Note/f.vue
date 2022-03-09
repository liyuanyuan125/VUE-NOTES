<template>
  <div>
    // --------------   类型转换   -------
// 在转换不同的数据类型时，相等操作符遵循下列基本规则：
// 1. 如果有一个操作数是布尔值，则在比较相等性之前，将其转换为数值；
// 2. 如果一个操作数是字符串，另一个操作数是数值，在比较之前先将字符串转换为数值；
// 3. 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较；
// 4. 如果有一个操作数是 NaN，无论另一个操作数是什么，相等操作符都返回 false；
// 5. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果指向同一个对象，则相等操作符返回 true；
// 6. 在比较相等性之前，不能将 null 和 undefined 转成其他值。
// 7. null 和 undefined 是相等的。

// 总结1，2，3规律：如果两边不包含null和undefined，且两边不全是对象，在比较之前会调用Number（）方法，先转number在比较
// 如：false == 0; true， "wise" == 3;false， [] == 0 true

// 4 如果有一个操作数是NaN，另一边无论是什么都是false； 如NaN == NaN false
// 5 如果他们是两个对象，看他们是不是指向同一个指针空间，引用数据类型都是有一个独立的引用指针空间的； [] == [] false,  {} == {} false
// 6. null == undefined true

// -------------js优先级运算符--------
// [] == ![] 和 {} == !{} ;   !的优先级高于===
// 1. [] == false --->  Number([]) == Number(false) ---->  0==0    true
// 2. {} == false ----> Number({}) == Number(false) -----> NaN == 0  false
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