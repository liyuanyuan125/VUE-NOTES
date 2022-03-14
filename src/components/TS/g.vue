<template>
  <div>
    参考地址： https://mp.weixin.qq.com/s/_tsqaGVNo3-emvgen-OFwg <br />
    参考地址：https://juejin.cn/post/7068081327857205261#heading-101
    <h5>条件类型if else</h5>
  <pre>
    <h5>1. 条件类型</h5>
    使用extends三元表达式能够进行条件的判断，并返回一个新的类型
    类型表达式1 extends 类型表达式2 ？类型表达式 ：类型表达式
    T extends U ? X : Y // 若类型 T 可被赋值给类型U，那么结果就是x类型，否则就是y类型
    比如
    type c = "a" extends "a"|"b" ? true : false // 类型T可以赋值给类型U，所以 type c = true
    <h5>2. infert推断类型</h5>
    可以使用infer关键字推断条件类型中的某一个条件类型，待定理解------
    <h5>3. Exclude和Extract的实现</h5>
    exclude: 意思不包含
    Exclude T,U> 联合类型T 中不包含 联合类型U 的部分(差集：检查的类型T，排除的类型U)
    type test = Exclude 'a'|'b'|'c' |' a','d'>  // type test = 'b' | 'c' | 'd'

    extract：共有的部分，Extract T,U> 提取联合类型T和联合类型U所有的交集
    type test = Extract 'key1'|'key2'|'key3'|'key1','key3'> // type test = 'key1'|'key3'
  </pre>
  </div>
</template>