<template>
  <div>
    
    <pre>
      参考地址：https://juejin.cn/post/7068081327857205261
      参考地址；https://mp.weixin.qq.com/s/_tsqaGVNo3-emvgen-OFwg
      <h5>1.TS是什么</h5>
      TypeScript是JS超级，在js基础上增加了一些语法，类型验证，错误提示等；
      TS缺点：
      浏览器不支持，需要转化js浏览器才支持
      <h5>2.TS类型声明的方式</h5>
      使用type声明类型
      使用interface声明类型
      使用class，enum声明类型，即可以为值，也可以为类型
      <h5>3.ts和js对比</h5>
      1. ts提供了类型检测功能，有助于我们的开发速度，类型检测和语法提示
      2. ts支持面向对象的特性，比如类，泛型，接口，继承等
      3. ts支持最新的js特性，如es6/es7/es8
      4. ts支持静态类型，任意类型，模块和可选参数等

      TypeScript
        js超集，用于解决大型项目的代码复杂性
        支持es6
        支持强类型和静态类型
        编译提示报错
        支持面向对象
        支持泛型和模块


      JavaScript
        不支持es6
        不支持强类型和静态类型
        运行的时候提示报错
        是一个脚本语言，弱类型语言
        不支持模块
      <h5>3. TS类型操作符（！，as，&， ｜，keyof，typeof）</h5>
       ！强制表明这个类型有值，不为空
       as 强制转化类型
       & 对象合并类型
       ｜ 联合类型（将多了类型组合为联合类型）
       keyof 获取对象类型的key集合
       typeof 获取值的类型
       [...] 元组的展开与合并
       in 遍历对象键值  在对象类型中，通过[临时类型变量 in 联合类型]

       & - 对象合并类型
       type a = {a: string};
       type b = {c: string}
       type c = a & b // c 包含了a，c两个类型变量
       注意使用 & 时，两个类型的键如果相同，但类型不同，会报错：、
       type A = { a: number }
       type B = { a: string }
       type C = A & B; // (property) a: never

       keyof - 获取对象类型的键key（只能应用于某些对象类型的key）
       type People = {a: string, b: string, c: string}
       type PeopleKey = keyof People // 'a' | 'b' |'c'

       typeof - 获取值的类型（反推）
       const obj = {a: 1, b:'b'}
       type Obj = typeof obj // {a:number, b: string}

       in - 遍历对象的键值
       type MyType = {
         // 注意能遍历的类型只有 string、number、symbol，也就是对象键允许的类型
         [K in '1' | '2' | '3']: K 
       }
       <h5>4. interface 和 type的区别</h5>
       （1）interface（）
          》interface定义对象类型，规范对象中的属性，防止缺少/多出的属性；
          》interface定义函数类型，用来描述函数结构
          》interface可以定义多个合并相同的接口，然后合并接口
          》interface可以用来约束class类，要实现约束需要用到implement关键字
            implements就是实现的意思，一个类定义了约束后这个类就必须要实现定义接口中所有的条件，不然就会报错
            interface约束了class类，只要类实现了interface中的规定 = 实现了类继承的功能（但是interface约束更简洁明了）
       （2）type（声明类型，别名）
          》type 可以声明基本类型、联合类型、交叉类型、元组，interface 不行
          》type 给类型起个别名 如 type name = string
          type可以通过 typeof 操作符来定义，如 type myType = typeof someObj
          type可以申明 联合类型，如 type unionType = myType1 | myType2
          type可以申明 元组类型，如 type yuanzu = [myType1, myType2]
        共同点：
          在ts中可以都定义类型对象和函数 如 type obj = {a: string, b: string}; type fn = (a: number, b: number) => void
          在ts中都允许继承（interface => extends, type => &）

          interface A { name: string}
          interface B extends A { age: number}

          type a = { name:string}
          type b = a & { grade: number  } 

          interface B extends a // interface 继承 type

          type b = a & A  // type 继承 interface
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const columns = [
  {
    title: 'typeScript',
    dataIndex: 'ts',
    key: 'ts'
  },
  {
    title: 'JavaScript',
    dataIndex: 'js',
    key: 'js'
  }
]
const data = [
  { key: '1', ts: '后缀ts', js: '后缀js' },
  { key: '2', ts: '支持es6', js: '不支持es6' },
  { key: '3', ts: '支持强类型和静态类型', js: '不支持' },
  { key: '4', ts: '编译报错', js: '运行报错' },
  { key: '5', ts: '支持面向对象', js: '是一个脚本语言' },
  { key: '6', ts: '支持模块和泛型', js: '不支持' }
]
export default defineComponent({
  setup () {
    return {
      columns, data
    }
  }
})
</script>
