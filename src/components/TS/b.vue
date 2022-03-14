<template>
  <div>
  <pre>
  <h5>TS基础</h5>
    基础类型：string，number，symol，boolean，null，undefined，never，
    字面量类型： type ‘12’
    对象类型： { a: string}
    void类型：和any相反，它表示没有任何类型（比如一个函数没有返回值）
    函数类型：() => void
    元组类型：[12,2,3]用于限制长度
    数组类型：string[]
    枚举类型：enum
    any类型：任意类型不清楚是什么类型的时候可以使用，但是不建议用，失去了ts作用
    unknow类型：不清楚这个是什么类型
    symol类型：唯一类型
    never类型：标识哪些不存在值的类型（函数异常  throw new Error(msg)）
    Bigint类型
    <h5>TS函数类型</h5>
    TS定义函数主要用于定义输入参数类型和输出参数类型（输出可以忽略，可以自动推导出来）
    1. fn函数写法类型
    2. 表达式写法
    3. 函数可选参数，默认参数，
    4. 函数赋值
    5. 函数重载（相同的函数名字，参数传入不同，返回类不同，泛型可以达到这个效果）
  </pre>
  </div>
</template>
