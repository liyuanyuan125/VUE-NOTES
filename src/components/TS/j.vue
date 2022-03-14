<template>
<pre>
  <h5>索引类型</h5>
  比如从对象中抽取一些属性，然后拼接出数组
  <img src="./image/1.png" style="width: 70%" />
  <h5>keyof（索引查询）</h5>
  keyof操作符可以用于获取某种类型的所有键，其返回的是联合类型
   type objKeys = keyof obj // objKeys = string | number | symbol
   type strKeys = keyof string // number |  "toString" | "concat" | "indexOf" | "lastIndexOf" 等
   type nullKeys = keyof null // nullKeys = never
  <h5>T[K]（索引访问）</h5>
  T[K]= 定义类型 T：表示接口， k表示接口属性 比如 Person['name'] = string
  interface Person {
    name: string
    age: number
  }
  let type1: Person['name'] = 'xxx' // type1:string
  let type2: Person['age'] = 9
  <h5>extends (泛型约束)</h5>
  T extends U, 泛型变量可以通过extend继承某个类型，从而添加某个属性，从而限制了在使用的时候传入的参数必须包含这个属性
  <img src="./image/2.png" style="width: 70%" />
  <h5>检查动态属性</h5>
  对keyof，索引引用，extend了解之后，我们就可以用泛型来实现上面的需求
  <img src="./image/3.png" style="width: 70%" />
</pre>
</template>
<script>
// 获取对象中属性的值，并拼接成数组
// const obj = {name: 'yuanyuan', age: 18, sex: 'nv'}
// const getval =<T,K extends keyof T> (info:T, keys:k[]) => {
//   return keys.map( item => info[item])
// }
// getVal(obj, ['name', 'age'])
// getVal(obj, ['a', 'b']) //报错，不包含
// const getVal = (obj: any, keys: string[]) => {
//   return keys.map( item => obj.item)
// }
// const ary1 = getVal(obj, ['name', 'age']) // ['yuanyuan', 18]
// const ary2 = getVal(obj, ['a', 'b']) // ['undefined', undefined]

// keyof操作符可以用于获取某种类型的所有键，返回联合类型
// type objKeys = keyof obj // objKeys = string | number | symbol
// type strKeys = keyof string // number |  "toString" | "concat" | "indexOf" | "lastIndexOf" 等
// type nullKeys = keyof null // nullKeys = never

// 索引引用
// interface Person {
//   name: string
//   age: number
// }
// let type1: Person['name'] = 'xxx' // type1:string
// let type2: Person['age'] = 9

// 泛型变量可以通过extend继承某个类型，从而添加某个属性，从而限制了在使用的时候传入的参数必须包含这个属性
// interface ILen {
//   length: number
// }
// const sum3 =<T extends ILen> (a:T):T => {
//   return a.length
// }
// sum3('999') 
// sum3([9,8]) 
// sum3(9) 报错因为number没有length属性
</script>