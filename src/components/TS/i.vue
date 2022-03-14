<template>
<div>
  <pre>
  总结：
   1. 泛型可以解决函数参数不确定性（函数重载的问题）
   2. 泛型和interface结合，使interface更灵活
   3. 泛型可以不用确定什么类型，传入什么类型，输入什么类型
   4. 泛型约束，约束传入的类型必须包含指定的属性才可以通过ts编译，否则报错
   5. 不必写多余的联合类型
  <h5>泛型</h5>
  》泛型中的T就想一个占位符，变量一样，在使用的时候可以把定义的类型像参赛一样传递进去，它也可以原封不动的输出来
    先声明，然后在使用
    const sum = T>(a: T) => a
    sum string>('xxxx')
  》type和interface可以定义类型，用泛型定义
  type fn = T> (sum: T):T => T
  const sum = T,K> (a:T,b:K) => a
  <h5>泛型-解决函数传参不确定性</h5>
  let sum = T,K>(a:T,b:K) => a
  <h5>泛型-默认参数</h5>
  let sum = T= number,K>(a:T,b:K) => a
  <h5>泛型-约束泛型</h5>
   假如我们传入的参数希望打印它的长度length，但是我们不确定这个参数是否有这个属性
   我们要约束这个泛型一定要有这个属性，我们和interface结合，来约束类型
   interface Ilen {
     length: number
   }
   let sum = T extends Ilen >(a:T) => a.length // 从而约束了我们传入的参数必须包含Ilen接口中的lenth属性才可以通过ts编译
   我们定义的变量一定要有 length 属性，比如下面的 str、arr 和 obj，才可以通过 TS 编译。
  <h5>泛型应用-泛型约束接口</h5>
   泛型应用于interface，可以对接口进行改装，使interface更灵活
   interface IKeyValue T,k> {
     key:T 
     value: K
   }
   const a1:IKeyValue number,string> = {key: 9, value: 'xxx'}
   const a2:IKeyValue string, number> = {key: 'xx', value: 9}
  <h5>泛型应用-泛型定义数组</h5>
  const ary: number|string|null> = [1, "5", null]
  </pre>
</div>
</template>
