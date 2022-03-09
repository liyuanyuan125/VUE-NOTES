<template>
  <div>
    <pre>
      参考地址；https://mp.weixin.qq.com/s/_tsqaGVNo3-emvgen-OFwg
      <h5>TS类型声明的方式</h5>
      使用type声明类型
      使用interface声明类型
      使用class，enum声明类型，即可以为值，也可以为类型

      基础类型：string，number，symol，boolean，null，undefined，never，
      字面量类型： type ‘12’
      对象类型： { a: string}
      函数类型：() => void
      元组类型：[12,2,3]
      数组类型：string[]

      type typeA = '1233' // 使用type定义了类型变量，其类型是一个字面量‘123’
      interface TypeA { // 使用interface定义了一个类型变量；
        a: string
      }

      type TypeC = { num: number, b: typeA}

      <h5>TS类型操作符（！，as，&， ｜，keyof，typeof）</h5>
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

       <h5>泛型 - 类型函数</h5>
       定义泛型：
       <!-- // 接口泛型
      interface Obj1<T> {
        a: T
      }
      // 使用 type 也能定义泛型
      type Type1<T> = { b: T }
      // 函数泛型
      type Fn1 = <T>(...args: any[]) => any;

      // 泛型也可以有默认值，这样如果没有指定泛型参数，默认是 string
      interface Obj1<T = string> {
        a: T
      } -->

    </pre>
  </div>
</template>

<script lang='ts' setup>
</script>