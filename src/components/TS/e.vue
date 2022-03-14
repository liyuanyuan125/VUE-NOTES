<template>
  <div>
  <pre>
  <h5>总结</h5>
    枚举的作用在于集合了一些范围内的常量，定义一些有名字的常量，使代码更好阅读与理解
    常用于后端返回的字典列表（不用再去注视每个status是代码的什么意思）
  <h5>枚举Enum（一定范围的取值而且值不会被改变）</h5>
    》在项目中我们经常会用const来定义一个值不会被改变，但是常量（const）只能定义一个，
      但是有时候取值在一定范围的常量，这个时候我们就会用到枚举（一定范围的取值而且值不被改变）
    》定义范围内一系列常量，如一周7天，方向上下左右，后台字典列表等
    enum Direction {left, right, top, bottom}
    Direction.left ==> 0 // 数字递增
    Direction[0] ==> left // 反向映射

    enum Direction {left=6, right, top, bottom}
    Direction.left ==> 6// 第一个元素赋有初始值，就会从初始值开始递增
    Direction.right ==> 7
  <h5>手动赋值定义状态（如字典列表状态）</h5>
    在项目中我们会遇到数据status，但是后台返回的数据状态也是乱的（可能从数据库读取过来的时候就是乱的，所以不方便修改，就需要我们前端手改赋值）
    enum ItemStatu {
      Buy = 200
      Send = 3
      Rective = 1
    }
  <h5>字符串枚举（可以更容易的理解代码和调试）</h5>
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  const value = 'UP'
  if (value === Direction.Up) {
      // do something
  }
  <h5>const常量枚举</h5>
  常量枚举可以避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问。
  使用常量枚举编译出来的 JS 代码会简洁很多，提高了性能。
  const enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  const value = 'UP'
  if (value === Direction.Up) {
      // do something
  }
  
  </pre>
  </div>
</template>