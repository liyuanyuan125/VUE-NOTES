<template>
  <div>
  <pre>
  高级类型1总结:
   联合类型：｜ 选择其中的一个类型
   交叉类型：& 合并类型
   类型别名：给类型起个别名（type定义）
   类型保护： typeof
   类型断言： as
  <h5>联合类型 ｜（一个变量支持多种类型则可以使用联合 ｜）</h5>
   但是在ts中联合类型，不确定这个变量是什么类型，则只能访问他们几个共有的属性和方法
   let types = string | number | boolean
   let a:types = 'string'
  <h5>交叉类型 & </h5>
   交叉类型用 & 把多个类型合并起来（交叉类型和interface的extend是非常相似，都是为了合并类型）
   interface Ia {
    name: string
    age: number
   }
   interface Ib {
     sex: string
   }
   type c = Ia & Ib & {sum: number}
  <h5>类型别名（给类型起个别名）</h5>
   type name = string
   type sum = number
   type fn = () => void
   type types = "left" | "right" | "top" | "bottom"
   const a = (optin: name):sum => {}

   type arrItem = number | string  // 给联合类型起了个别名
   const arr: arrItem[] = [1,'2', 3]
  <h5>类型保护（typeof，in）</h5>
   类型保护就是让类型不报错，比如在联合类型中，我们不确定这个变量到底是什么类型，所以只能取它们共有的属性和方法
   》typeof类型保护
   但是我们可以使用typeof判断这个类型，然后在操作下面的代码
   function double(val: string|number) {
      if (typeof val === 'string') {
        return val
      } else {
        return val
      }
    }
   》 还可以使用 in 判断是否包含这个属性
    interface IFish {
      swimming: string
    }
    interface IBirde{
      fly: string;
      leg: number
    }

    function getType(animal: IFish | IBirde) {
      if ('swimming' in animal) {
        return 'fish'
      } else {
        return 'birder'
      }
    }
    console.log(getType({swimming: 'xxx'}))
  <h5>类型断言 as</h5>
  const sum = (a: string | number) => {
   return  (a as string).length
  }
  <h5>字面量类型</h5>
  </pre>
  </div>
</template>