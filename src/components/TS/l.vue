<template>
  <div>
    <h5>TS 声明文件</h5>
    <pre>
    <h5>1. declare</h5>
    》在使用第三方插件的时候，很多第三方插件都不是ts写的，我们需要引用它的声明文件，才能获取对应的代码补全，接口提示，里面的方法和属性提示功能
    
    实例：src/Vue.d.ts文件
    我们使用declare来模拟vue的类型
    interface VueOptions {
      data: string
      data: any
    }
    declare class Vue {
      options: VueOption
      constructor(options: VueOption)
    }
    使用declare关键字，相当于告诉ts编译器，这个变量Vue的类型已经在其他地方定义了，在编译的时候不用报错了；
    我们通常把声明的文件放在一个单独的文件中（.d.ts）这就是声明文件，以.d.ts后缀

    一般来说ts会解析项目中所有的*.ts文件，包含.d.ts文件，当我们把Vue.d.ts文件放在src目录下的时候，其他所有的 *.ts文件就能获的Vue定义的类型了
    <h5>2. 使用第三方库</h5>
    在我们使用第三方库的时候，是否都需要定义declare这样的声明文件呢，答案是否定的，一般的第三方库都有ts类型包（npmjs 搜 @types/）
    找到直接npm i 安装即可
    当然如果一个库就是ts写的，则就不用安装，比如vue3就是Ts写的
    </pre>
  </div>
</template>