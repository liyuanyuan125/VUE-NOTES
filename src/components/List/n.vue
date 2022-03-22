<template>
  <div>
    参考地址：https://juejin.cn/post/6940454764421316644<br />
    参考地址：https://juejin.cn/post/6952671223989927943

  <pre>
  vue3更改总结：
  1. setup的作用：让一个功能的api组合在一起，模块化，不至于这么分散，主要还是提高了可读性和维护性，但是一些小的功能可以使用使用之前的 methods、data
  2. Reactive：接受一个{}参数返回一个响应式对象，如果参数不是对象的话，也可以渲染到dom模版上，但数据不是响应式的
     Ref：接受可以是单个值，也可以是一个对象，并且都是响应式的数据，当传入一个{}时，内部调用reactive方法进行转换为响应式数据
  3. computed 当默认传入一个函数，获取的参数时只读的，不可以修改，当传入一个对象set和get函数方法，这样就可以修改啦
  4. Readonly 该方法接收传入一个对象，默认是只读功能，是深层对象只读，不管嵌套多少层的属性都是只读状态。Readonly(obj) / isReadonly()
  5. vue3.x出现的生命钩子只能出现在setup中，这些钩子的写法。钩子函数里面是一个回调函数
  6. Refs：该方法相当于Vue2.x的refs一样获取元素，在setup中配合ref对象进行获取
   《p ref='el'》xxxxx《/p》  const el = ref(null)
  7. isReadonly, isRef, isReactive 返回boolean
  8. 移除过滤器filters 建议用computed过滤
  9. 自定义指令更改
 <h5>Vue2 与 Vue3 的区别</h5>
  1. vue2.x 中当我们写一个功能的时候，会把代码写在data，methed，computed，watch中来回跳转，代码累计，不以维护和阅读
     vue3.x 推出了compositon Api（组合式api）将单独的逻辑写在一个文件中
  2. vue2.x的双向数据绑定采用es5中的object.defineproporty方法对数据劫持结合发布订阅模式实现的；
     vue3.x的双向数据绑定采用es6中的ProxyApi对对象进行代理实现的；
  3. Vue3支持碎片(Fragments)多根
  4. Vue3完全用TS进行重构的，对类型提示和类型判断有很好的提示
  5. Vue2 使用Options API而 Vue3 使用的Composition API 生命周期钩子变化:
 
 <h5>一, Vue3 特性</h5>
 1. Suspense：只是一个带插槽的组件，只是它的插槽指定了default 和 fallback（刚开始渲染的内容） 加载数据两种状态
 2. Fragment：片段 vue2只允许有一个根，但是Vue3.x 中可以有很多根
 3. Tree-shaking 
 4. composition Api
 5. 单文件组件（SFC自定义hooks）
 6. 声明周期钩子
 7. Teleport：传送门 传送指定的位置  《teleport to="#dialog"》
 8. Vue3对比vue2.x 变更
 9. Better TypeScript support：更优秀的Ts支持
 <h5>二, 为什么要升级 Vue3和性能优化</h5>
  》为什么要大版本迭代 （Why）
    主流浏览器对新的JavaScript语言特性的普遍支持。
    当前Vue代码库随着时间的推移而暴露出来的设计和体系架构问题。
  》他是如何提升的（How）
    响应式系统提升： 使用Proxy提升了响应式的性能和功能
    编译优化：对 diff 算法优化、静态提升等等标记和提升所有的静态节点，diff时只需要对比动态节点内容
    事件缓存： 提供了事件缓存对象cacheHandlers，无需重新创建函数直接调用缓存的事件回调
    打包和体积优化： 按需引入，Tree shaking支持（ES Module）
    响应式系统。Proxy()替代Object.defineProperty()监听对象。监听一个对象，不需要再深度遍历，Proxy()就可以劫持整个对象
    体积包减少。Compostion API 的写法，可以更好的进行 tree shaking，减少上下文没有引入的代码，减少打包后的文件体积
    新增片段特性。Vue 文件的 template>标签内，不再需要强制声明一个的 div>标签，节省额外的节点开销

 <h5>三, composition Api</h5>
  compositon api（组合式api）包含以下
  1. setup（prop是，context）
    setup是composition api的入口
    setup的执行机制 是在beforeCreate之前
    setup的两个参数分别是props和context，props组件传入的属性，它是响应式，因为props是响应式的所以它不支持es6解构，便会失去响应式
    在vue3中没有this的概念，所以context中提供了this常用的三个属性 attr，slot，emit
  2. ref，toRefs，reactive
   ref 和 reactive区别
   ref
    ref返回一个响应式ref对象
    ref在内部访问.value获取，在dom中直接访问

   reactive
    reactive返回一个响应式proxy对象
    reactive 则直接访问
    reactive函数只能代理一个对象，不能代理基本数据类型比如string，number等
    reactive解构或者扩展将失去响应式我们可以用toRef方法，将响应式对象的属性转化成响应式的ref对象
    const { a } = objReactive或者return { ...objReactive }

   toRefs方法用于将一个reactive对象转化为属性全部为ref对象的普通对象，
  3. watch 
    watch 用来监听指定的数据源（source）并在回调函数中执行副作用，默认是懒惰的就是监听的数据发生了变化才会执行回调函数
    watch(source,callback,[option])
    source：可以是string，object，function， array用来监听响应式变量
    callback：回调函数中执行副作用
    options：deep，immediate

    比如监听多个数据
    const year = ref(0)
    const list = ref({name: 'li', age: 3})
    watch([() => {year,list.age}],([curAge, newVal], [preAge, oldVal]) => {
      console.log('xxx')
    },deep)
  4. watchEffect
    watchEffect（callback, [options]）
    callback：当依赖发生变化则会执行副作用函数，返回值是一个函数，则可以清除这个副作用函数
    options: 主要作用是指定调度器，即何时运行副作用函数(收集的依赖，指定我们依赖的参数，如果我们不传则收集所有的依赖)

    watchEffect(() => {})会自动收集依赖，执行回调函数，在初始化的时候会执行一次来收集依赖，当收集到依赖发生了变化便会自动执行回到函数、、
    watchEffect不需要传入依赖，自动收集
    watchEffect 自动收集依赖，当依赖发生变化则会执行回调函数
    watchEffect 不能获取变化前的数据
  5. computed （响应式计算和侦听）
     const count = ref(1)
     1. 只读（不允许修改）
      const getCount = computed(() => count.value + 1)
      getCount.value ++ // 报错
     2. 可以修改(传入对象)
     const plueone = computed({
       get() {
         return count.value +1
       },
       set(val) {
         count.value = val -1
       }
     })
  6. 生命周期钩子
   <img src="./image/WX20220315-142343@2x.png" style="width: 50%" />
 <h5>四, 自定义hooks</h5>
 CFU 单文件，我们自定义的hook以use为前缀
 <h5>五, 简单对比 vue2.x 与 vue3.x 响应式</h5>
  1. vue3不在使用Object.defineProperty代理数据，而是选择了proxy代理数据，proxy直接代理了对象，Object.defineProperty则是代理的对象属性
    由于Object.defineProperty只能劫持对象属性，需要遍历对象的属性，如果属性还是一个对象，则需要更深度的遍历下去；
    由于proxy代理的是对象，则不需要遍历操作
  2. Object.defineProperty对新增属性需要手动进行Observe
   在vue2中对数组和对象增加属性时，是需要重新遍历对象的，对新增的属性再次使用Object.defineProperty进行代理
   因为只有使用$set方法采用保证新增的属性是响应式的，
 <h5>六, 更好的 Tree-Shaking</h5>
  vue3.x 考虑到的tree-shaking的基础上重构了全局Api和内部的api，全局Api的引用修改成了EsMoudle引用方式
 <h5>七, Vue3 变更（内部的api）</h5>
  1. slot 具名插槽语法
   》在vue2.x中具名插槽和作用域插槽分别使用了slot和slot-scoped
    父组件引用：
    《template slot="content" slot-scope="scoped">
      《div v-for="item in scoped.data">《/div》
    《template》
   》在 Vue3.0 中将slot和slot-scope进行了合并同意使用。 Vue3.0 中v-slot：
   《template v-slot:content ="scoped">  可以简写 v-slot:content ="scoped" =  #content="{data}"
      《div v-for="item in scoped.data">《/div》
   《template》
  2. 自定义指令 
  <img src="./image/2.png" style="width: 50%" />
  3. v-model升级
   》变更：在自定义组建上使用v-model时，属性和事件的默认名称变了
   》变更：v-bind的sync修饰符在vue3中又被去掉了，合并到了v-model中
   》新增：同一个组件可以同时设置多个v-model
   》新增：开发者可以自定义v-model修饰符
   vue2中的v-model的场景：
    有些场景我们需要对父组件传过来的prop进行双向绑定，以model为例，model很适合属性的双向绑定
    外部可以控制组件的visible显示或者隐藏，组件内部关闭可以控制 visible属性隐藏，同时 visible 属性同步传输到外部
    在子组件关闭model时在子组件中以 update:PropName 模式触发事件：this.$emit('update:visible', false)
    然后在父组件中可以监听这个事件进行数据更新：《modal :visible="isVisible" @update:visible="isVisible = $event">
    我们也可以使用v-bind.sync（.sync进行数据同步更新）来简化实现：《modal :visible.sync="isVisible" >
    
  在 Vue3 中, 在自定义组件上使用v-model, 相当于传递一个modelValue 属性， 同时触发一个update:modelValue事件
  如果要绑定属性名， 只需要给v-model传递一个参数就行, 同时可以绑定多个v-model：
  《modal v-model:visible="isVisible" v-model:content="content">
   相当于==
  《modal
      :visible="isVisible"
      :content="content"
      @update:visible="isVisible"
      @update:content="content"
  />


 <h5>八, Vue3 特性</h5>
 <h5>九, Vue3 特性</h5>
 <h5>十, Vue3 特性</h5>
 <h5>十一, Vue3 特性</h5>
 <h5>十二, Vue3 特性</h5>
 <h5>十三, Vue3 特性</h5>
 <h5>十四, Vue3 特性</h5>
 <h5>十五, Vue3 特性</h5>
 <h5>十六, Vue3 特性</h5>
 <h5>十七, Vue3 特性</h5>
 <h5>十八, Vue3 特性</h5>
  </pre>
  </div>
</template>
<script >
import { set } from 'lodash'
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
export default defineComponent({
  beforeCreate() {
    console.log("----beforeCreate----");
  },
  created() {
    console.log("----created----");
  },
  setup() {
    console.log("----setup----");
    onMounted(() => {
      console.log('onmounted')
    })
    // onMounted(){
    //   console.log('onmounted')
    // }
  },
});
</script>