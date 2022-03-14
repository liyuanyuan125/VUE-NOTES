<template>
  <div>
    <pre>
      TS常用的工具类型总结：
      keyof（索引查询）：查询类型所有的键（key）并返回联合类型
      T[K](索引引用): T[K]= 接口T的属性K的类型
      extends(泛型约束): T extends U，泛型变量T 通过继承 U类型，就获得U类型的属性，从而泛型变量T的传参就受到了约束
      in(映射in操作符): 用来对联合类型实现遍历 [p in Types]:string
      partial(映射可选): Partial I> 将某个类型里面的属性映射为可选的
      Readonly(映射): Readonly I> 将某个类型里面的属性映射为只读的
      pick():待定
      Record（）：待定
      Exclude(条件类型排除不需要的类型): Exclude T, U> 会返回 联合类型 T 中不包含 联合类型 U 的部分。
      Extract(条件类型找出共有的类型): Extract T, U>提取联合类型 T 和联合类型 U 的所有交集。
      omit(去除指定的属性) Omit T, U>从类型 T 中剔除 U 中的所有属性。
      NoNullable：NoNullable《T》用来过滤类型中的null 和 undefined类型
      Parameters: 获取函数参数的类型，并将每个参数放在元组中；
      ReturnType：ReturnType 获取函数的返回值类型。
    </pre>
    <pre>
      <h5>工具类型- TS内置的常用工具</h5>
      为了方便开发者开发，TS内置了一些常用的工具类型（索引类型，映射类型，条件类型）
      <h5>内置工具-omit</h5>
      interface IPerson {
        name: string
        age: number
    }
    type IOmit = Omit /IPerson, 'age'>
    <h5>内置工具-NoNullable</h5>
    type test = NoNullable《'string'|9|null|undefined》 // 'string'|9
    <h5>内置工具-Parameters</h5>
    type T1 = Parameters《() => string>  // []
    type T2 = Parameters《(arg: string) => void>  // [string]
    type T3 = Parameters《(arg1: string, arg2: number) => void> // [arg1: string, arg2: number]
    <h5>内置工具-ReturnType</h5>
    type T1 = ReturnType《(s: string) => void>  // void
    </pre>
  </div>
</template>