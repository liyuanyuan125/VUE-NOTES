<template>
  <div>
    <h3>vue+react前端框架</h3>
    <pre>
      框架的底层原理是一定会问的，至少要深入掌握一个前端框架。目前业界内比较流行的框架是 React 和 Vue，React 的知识点
      有 React diff、生命周期、Fiber 架构、Hooks 等；Vue 的知识点有Vue diff、响应式原理、Vue3.0新特性等
    </pre>
    <pre>
      <h5>简述MVVM</h5>
        mvvm双向数据绑定，view视图更新通过viewmodel传给model，数据更新后又viewmodel传递给view
      <h5>vue底层实现的原理</h5>
      vuejs采用数据劫持观察者模式，通过object.defineprototype（）方法来劫持每个对象的属性，遍历对象的每一个属性的set和get方法
      如果数据发生变动通知订阅者，触发对象的监听函数；
      vue是一个典型的mvvm框架，修改model（model只是普通的js对象）视图（view）就会更新
      <h5>谈谈对vue生命周期的理解</h5>
       vue生命周期就是一个组件的初期的创建和后期的销毁
        beforeCreate vue实例创建前 data ， dom还没有创建完成
        created      vue实例创建完成 data有数据
        beforemount  可以发起服务端请求 虚拟dom元素
        mounted      真实dom元素可以操作dom元素；
        beforeUpdate 数据更新前
        updated
        beforeDestroy
        destroy
      组件生命周期
        生命周期（父子组件） 父组件beforecreate- 父组件create - 父组件beforemount - 子组件beforecreate- 子组件create - 子组件beforemount
         - 子组件mounted - 父组件mounted - 父组件beforeupdate - 父组件 update - 父组件destrory

        加载渲染过程 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
      <h5>组件中的data为什么是一个函数</h5>
        一个函数在执行的时候会形成自己的私有作用域，一个组件可以被多次引用，这样可以保证多个vue实例之间data属性不冲突
      <h5>为什么v-for和v-if不建议用在一起</h5>
      v-for比v-if优先级高一些，这样每次遍历v-if将重复运行，数据数据量很大，而真正要展示的数据很少时，很消耗性能
      <h5>React/Vue 项目中 key 的作用</h5>
        key的作用为了在执行diff算法更快的找到对应的节点，提高diff速度，更高效的更新虚拟dom；
        通过新数据的key对比旧数据的key，从而找到相应旧节点数据，如果没有变化则采用旧数据；
        如果在旧数据中没有找到新数据的key，则是新增的节点，
      <h5>vue组件的通信方式</h5>
       父子组件 props / emit
       孙子 $attr / $listener , 
       vuex, 
       ref
       slot 插槽
      <h5>nextTick的实现</h5>
      nexttick是vue2 全局的api，是在下次dom更新循环完执行的回调函数，在修改数据之后使用nexttick，则可以获取更新后的dom；
      比如我们更新了一个dom元素，dom更新是异步的，nexttick是在dom更新完成之后执行回调函数，所以我们可以在回调函数中操作更新后的dom元素
      <h5>插槽（匿名，具名，作用域）</h5>
        匿名插槽  - 默认插槽 就是单个插槽 父 Com xxxxxx /com  子  slot标签接受
        具名插槽  - 有名字指定name插槽位置  父 Com xxxxxx /com   slot name =“header”
        作用域插槽 - 带数据的插槽（子组件提供数据，父组件提供一套样式  slot-scope="user"）


      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      <h5></h5>
    </pre>
  </div>
</template>