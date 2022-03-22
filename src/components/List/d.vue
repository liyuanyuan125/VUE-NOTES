<template>
  <div>
  参考地址：https://juejin.cn/post/6984210440276410399 <br />
  参考地址：https://juejin.cn/post/7064740689178787871#heading-1
  
    <pre>
  <h5>1. vue2优点/缺点/为什么说Vue是一个渐进式框架</h5>
    vue2: 轻量级，易上手，渐进式框架，组件化，单页面路由
    缺点：兼容性不支持ie8
    渐进式：通俗的说就是不限制，想用component，vuex就可以用不想用也可以不用，不强制
  <h5>2. vue与react区别和相同点</h5>
   相同点：
     都使用了虚拟dom，
     都是组件化开发，
     都是单向数据流（父子之间）
   不同点：
    vue属性是双向绑定，react属性单项绑定
    vue模版是template，react是jsx
    vue数据自动变化，react是手动setState
  <h5>3. 简述MVVM，mvc</h5>
  mvvm双向数据绑定，view视图更新通过viewmodel传给model，数据更新后又viewmodel传递给view
  mvc input修改的数据通过Controller通知给视图（view）
  <h5>Vue和JQuery的区别在哪？为什么放弃JQuery用Vue？</h5>
  JQuery是直接操作dom，vue数据和视图是分开的，vue直接操作数据
  <h5>4. vue组件的通信方式</h5>
  父子：组件 props / emit
  孙子：$attrs / $listeners，在对一些组件进行二次封装时可以方便传值，例如A->B->C
  $refs获取组件实例dom元素，进而获取数据
  使用Vuex进行状态管理
  slot 插槽
  使用浏览器本地缓存，例如localStorage
  <h5>5. 如何设置动态class，动态style？</h5>
  动态class对象：《div :class="{ 'is-active': true, 'red': isRed }">
  动态class数组：《div :class="['is-active', isRed ? 'red' : '' ]">
  动态style对象：《div :style="{ color: textColor, fontSize: '18px' }">
  动态style数组：《div :style="[{ color: textColor, fontSize: '18px' }, { fontWeight: '300' }]">
  <h5>6. v-if和v-show有何区别？</h5>
  v-if：控制dom删除/增加，需要绘制dom，显示和隐藏组件的销毁和生成
  v-show：css控制就是隐藏，不会销毁（优先选择使用v-show）
  <h5>7. 为什么v-for和v-if不建议用在一起</h5>
  v-for比v-if优先级高一些，首先将所有的数据都遍历一遍，然后再去执行v-if的条件，坏处就是渲染了无用的v-if条件节点，数据如果很大则很消耗性能
  建议用computed将数据赛选出来，在进行v-for遍历
  <h5>8. vuex的有哪些属性？用处是什么？</h5>
  state：默认的数据状态
  getter：获取state数据进行操作
  mutation：是唯一更改 store 中状态的方法，且必须是同步函数
  Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作
  module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中
  <h5>9. 父子组件生命周期顺序</h5>
  父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted
  <h5>10. vue生命周期</h5>
  <img src="./image/8.png" style="width: 40%" />
  <h5>11. 对象新属性无法更新视图，删除属性无法更新视图 / 直接arr[index] = xxx无法更新视图怎么办？为什么？怎么办？</h5>
  原因：Object.defineProperty没有对对象的新属性进行属性劫持
  对象新属性无法更新视图：使用Vue.$set(obj, key, value)，组件中this.$set(obj, key, value)
  删除属性无法更新视图：使用Vue.$delete(obj, key)，组件中this.$delete(obj, key)
  原因：Vue没有对数组进行Object.defineProperty的属性劫持，所以直接arr[index] = xxx是无法更新视图的
  使用Vue.$set(arr, index, value)
  <h5>12. 插槽（匿名，具名，作用域）</h5>
  匿名插槽  - 默认插槽 就是单个插槽 父 Com xxxxxx /com  子  slot标签接受
  具名插槽  - 有名字指定name插槽位置  父 Com xxxxxx /com   slot name =“header”
  作用域插槽 - 带数据的插槽（子组件提供数据，父组件提供一套样式  slot-scope="user"）
  <h5>13. 为什么不建议用index做key，为什么不建议用随机数做key？</h5>
  index做key，在数组的头部添加一条数据，渲染的key则发生变化数据错乱，diff对比的时候需要从新对比，因为所有的节点都发生了变化，比较消耗性能
  <p style="display:flex">
   <img src="./image/9.png" style="width: 40%" />
  <img src="./image/10.png" style="width: 40%" />
  </p>
  <h5>14. 说说nextTick的用处</h5>
  比如我们更新了一个dom元素，dom更新是异步的，nexttick是在dom更新完成之后执行回调函数，所以我们可以在回调函数中操作更新后的dom元素
  this.name = '林三心'， this.age = 18， this.gender = '男'
  vue会修改一次更新一次dom吗，不会的，vue采用的是 异步更新 策略，在同一事件循环内多次修改，会统一进行一次 视图更新，这样才能解决性能
  <img src="./image/11.png" style="width: 40%" />
  <h5>15. Vue的SSR是什么？有什么好处？</h5>
  ssr就是服务器渲染
  基于node server服务器环境开发，所有的html代码在服务端渲染
  数据返回给前端，然后前端进行激活，即可成为浏览器识别的html
  SSR首次加载更快，有更好的用户体验，有更好的seo优化
  <h5>16. Vue响应式是怎么实现的？（属性的双向绑定）</h5>
   实现就是object.defineprototy数据劫持+观察者模式(watch)
   使用使用 Object.defineProperty 将属性进行劫持对象属性（只会劫持已经存在的属性，新增的属性需要从新绑定劫持事件）
   数组则是通过重写数组方法来实现
   当属性变化后会通知自己对应的 watcher 去更新(派发更新)
  <h5>17. 为什么只对对象劫持，而要对数组进行方法重写</h5>
  因为对象最多也就几十个属性，拦截起来数量不多，但是数组可能会有几百几千项，拦截起来非常耗性能，所以直接重写数组原型上的方法，是比较节省性能的方案
  <h5>18.React/Vue 项目中 key 的作用</h5>
  key的作用为了在执行diff算法更快的找到对应的节点，提高diff速度，更高效的更新虚拟dom；
  通过新数据的key对比旧数据的key，从而找到相应旧节点数据，如果没有变化则采用旧数据；
  如果在旧数据中没有找到新数据的key，则是新增的节点，
  <h5>19. vue2中的computed如何实现传递参数</h5>
  {total(9)}
  computed: {
    total(n) {
      return function(n) {
        return return n * this.num
      }
    }
  }
  <h5>20. 相同的路由组件如何重新渲染？</h5>
  <h5></h5>
  <h5></h5>
  <h5></h5>






















     
      <h5>vue底层实现的原理</h5>
      vuejs采用数据劫持观察者模式，通过object.defineprototype（）方法来劫持每个对象的属性，遍历对象的每一个属性的set和get方法
      如果数据发生变动通知订阅者，触发对象的监听函数；
      vue是一个典型的mvvm框架，修改model（model只是普通的js对象）视图（view）就会更新
     

        加载渲染过程 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
      <h5>组件中的data为什么是一个函数</h5>
        一个函数在执行的时候会形成自己的私有作用域，一个组件可以被多次引用，这样可以保证多个vue实例之间data属性不冲突
      <h5>为什么v-for和v-if不建议用在一起</h5>
      v-for比v-if优先级高一些，这样每次遍历v-if将重复运行，数据数据量很大，而真正要展示的数据很少时，很消耗性能
      <h5></h5>
        
      
      
     
    </pre>
  </div>
</template>
<style scoped>

</style>