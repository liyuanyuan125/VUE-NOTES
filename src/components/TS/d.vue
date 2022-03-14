<template>
  <div>
  参考地址：https://juejin.cn/post/7068081327857205261#heading-24
  <pre>
  总结：
   1. ts增加了public, protected, private修饰符，来加强了ts中的类
   2. ts扩展了js的新概念 抽象类（抽象类更像一个基类，实现共有的属性和方法，让子类去实现，有利于代码复用）
   3. interface和class的关系实现了interface对class类的约束，从而用implements实现了类的继承功能
  <h5>类</h5>
  》js是通过原型和原型链实现面向对象（面向对象三大特征：封装，继承，多态）；
  》es6新增了class类
  》ts在es6的基础上给class类新增了几个修饰符（public, protected, private，readonly），来加强了TS中的类
    public（谁都可以访问，默认可以不写）
    protected（受保护的，继承它的子类可以访问，实例不能访问）
    private(私有的，只属于这个类自己，它的实例和继承它的子类都访问不到)
    static 静态属性 （可以理解为类的常量，实例和子类都访问不到）
    readonly修饰符 （仅读修饰符
  》Ts 还对js扩展了一个新概念 抽象类
   抽象类：就是指这个类只能被继承，不被被实例化
   抽象类有两个特点：
    抽象类不被实例化
    抽象类的抽象方法必须被子类实现
   抽象类用一个关键字类表示abstract
  <h5>类的封装</h5>
  定义Person类，增加了name属性和方法
  class Person {
    name: string
    constructon(name:string) {
      this.name = name
    }
    speak() {}
  }
  const p1 = new Person() // 新建实例
  p1.name // 访问属性
  <h5>类的继承（extends关键字）</h5>
  class Student extends Person{
    study() {
      console.log(this.name)
    }
  }
  》 super()关键字
  Student类没有自己的属性可以不写super关键字，如果Student有自己的属性，就要写super关键字把父元素的属性继承过来
  class Student extends Person {
    grade: number
    constructor(name: string,grade:number) {
        super(name)
        this.grade = grade
    }
  }

  <h5>类的多态</h5>
  类的多态就是子类对父的方法进行了修改（实现），但是子类和父类在用时会不一样；
  类的多态就是父类定义抽象方法，多个子类可以有不同的实现，运行时不同的子类对应不同的操作；
  class Student extends Person{
    speak() {
      console.log(this.name)
    }
  }
  TS 中一般对抽象方法实现多态，详细见后文抽象类。
  <h5>TS中抽象类</h5>
   》抽象类的概念：抽象类就是一个不被实例化的类，在TS中用于实现类的多态
   》抽象类的特点：
     抽象类不能被实例化
     抽象类中的方法子类必须实现
   》抽象类用一个关键字来表示 abstract

   abstract class Animal {
      constructor(name:string) {
          this.name = name
      }
      public name: string
      public abstract sayHi():void
  }

  class Dog extends Animal {
      constructor(name:string) {
          super(name)
      }
      public sayHi() {
          console.log('wang')
      }
  }

  》为什么叫抽象类（好处：抽离出事物的共性，有利于代码的复用）
   在面向对象的概念中，所有的对象都是通过类来描述的，但是反过来，所有的类并不是都是用来描述对象的，
   一个类中没有充足的信息来描述一个对象，这个类就是抽象类

   比如Amial类中有一个属性和方法，但不会具体到是那个动物的属性和方法
   所以抽象类定义的是一个基类，声明共有属性和方法，拿去继承
  <h5>抽象方法和多态</h5>
  类的多态就是父类定义抽象方法，多个子类可以有不同的实现，运行时不同的子类对应不同的操作；
  abstract class Animal {
      constructor(name:string) {
          this.name = name
      }
      public name: string
      public abstract sayHi():void
  }

  class Dog extends Animal {
      constructor(name:string) {
          super(name)
      }
      public sayHi() {
          console.log('wang')
      }
  }

  class Cat extends Animal {
      constructor(name:string) {
          super(name)
      }
      public sayHi() {
          console.log('miao')
      }
  }
  Dog 类和 Cat 类都继承自 Animal 类，Dog 类和 Cat 类都不同的实现了 sayHi 这个方法。
  <h5>interface和class的关系</h5>
   1. interface可以用来约束class类，要实现约束需要用到implements关键字
    implements是实现的意思，class实现interface

    interface IMusic {
      playMusic():void
    }
    class Cellphone implements IMusic{
      playMusic() {}
    }
    定义了约束后，class类就必须要满足上面定义接口类中的所有条件，不然会报错
   2. implements处理共同的属性和方法
   不同的类有共同的属性和方法，可以使用继承，但是使用implements更容易完成
    interface MusicInterface {
       playMusic(): void
    }
    interface CallInterface {
      makePhoneCall(): void
    }

    class Cellphone implements MusicInterface, CallInterface {
      playMusic() {}
      makePhoneCall() {}
    }
    interface用来约束class类，class类只要实现interface接口的属性和方法就行，不必要使用类中的继承
   3. implement来约束构造函数和静态属性
     interface CircleStatic {
      new (radiu: number):void
      p1:number
     }
     const Circle:CircleStatic = class Circle {
       static p1: 2
       radiu: number
       constructor(radiu: number) {
         this.radiu = radiu
       }
     }
  </pre>
  </div>
</template>