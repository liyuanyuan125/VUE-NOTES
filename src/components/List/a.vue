<template>
  <div>
    <h3>js基础</h3>
    <pre>
      参考地址：https://juejin.cn/post/7016593221815910408（八股文）
      参考地址： https://juejin.cn/post/6844904200917221389#heading-1 
      参考地址： https://juejin.cn/post/6934500357091360781（字节跳动）

      包括原型与原型链、继承、事件循环、作用域、ES6语法
      this指向、设计模式、call, apply, bind,；
      new实现、防抖节流、let, var, const 区别、暂时性死区，
      promise使用及实现、promise并行执行和顺序执行；async/await的优缺点；
      闭包、垃圾回收和内存泄漏、数组方法、数组乱序, 数组扁平化、事件委托、事件监听、事件模型

      <h5>1. 基本数据类型和引用数据类型，值是如何存储的</h5>
      基本类型：Number、Boolean、String、null、undefined、symbol（ES6 新增的），BigInt（ES2020）
      引用类型：Object，对象子类型（Array，Function）

      基本数据类型值是不可变得存放在栈内存；（基本数据类型简称为简单的数据类型）
      引用数据类型值是变的，同时存放在栈和堆内存中；
      <h5>2. && 、 ||和!! 运算符分别能做什么</h5>
        && : 逻辑与，找到最后一个false并且返回，如果没有找到则返回最后一个参数； 9 && 6 && 0 // 0 
        || : 逻辑或，找到最后一个true并且返回，如果没有找到则返回最后一个参数；
        !! : 强制将将右侧的参数转化为布尔类型（这是转化为布尔类型最简单的方法）
      <h5>3. js的数据类型的转换</h5>
      // -------------- 类型转换 ------- 
       在转换不同的数据类型时，相等操作符遵循下列基本规则：
       1. 如果有一个操作数是布尔值，则在比较相等性之前，将其转换为数值;
       2. 如果一个操作数是字符串，另一个操作数是数值，在比较之前先将字符串转换为数值;
       3. 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较
       4. 如果有一个操作数是 NaN，无论另一个操作数是什么，相等操作符都返回 false
       5. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果指向同一个对象，则相等操作符返回 true；
       6. 在比较相等性之前，不能将 null 和 undefined 转成其他值。
       7. null 和 undefined 是相等的。

       总结1，2，3规律：如果两边不包含null和undefined，且两边不全是对象，在比较之前会调用Number（）方法，先转number在比较 
       如：false == 0; true， "wise" == 3;false， [] == 0 true 
       4 如果有一个操作数是NaN，另一边无论是什么都是false； 如NaN == NaN false;
       5 如果他们是两个对象，看他们是不是指向同一个指针空间，引用数据类型都是有一个独立的引用指针空间的； [] == [] false, {} == {} false 
       6. null == undefined true 
       
       // -------------js优先级运算符--------
       [] == ![] 和 {} == !{} ; !的优先级高于=== 
       1. [] == false ---> Number([]) == Number(false) ----> 0==0 true 
       2. {} == false ----> Number({}) == Number(false) -----> NaN == 0 false

       Array(4) => ['','','',''] 四个空数组
       Array(8,9) => [8,9]
       Array.of(8,9) = [8,9]
       Array.of(4) => [4]
      <h5>4. JS中数据类型的判断（ typeof，instanceof，constructor，Object.prototype.toString.call()</h5>
      (1) typeof 能判断出基本数据类型的类型（除null）
          typeof null =》 object
          typeof [] = > object 
          typeof {} => object 
          typeof function sun() => {}  => function 
          typeof 不能判断出具体的类型
      （2）instanceof 
         console.log(1 instanceof Number);                    // false
          console.log(true instanceof Boolean);                // false 
          console.log('str' instanceof String);                // false  
          console.log([] instanceof Array);                    // true
          console.log(function(){} instanceof Function);       // true
          console.log({} instanceof Object);   
       (3) constructor
       (4) object.prototype.tostring().call()可以具体的判断出具体类型 [arry, ]
       
       对比：
       typeof 可以更准备的判断出基本数据类型（除null外）；
       instanceof 可以准备的判断出 Array，function，object 对象的类型（string，number，boolean基本类型吧不能判断）
       object.prototype.tostring().call()： 更准备的判断出所有的类型


      
      <h5>9. 数组方法renduce使用</h5>
      /** renduce 为数组中的每个元素执行一次回调函数
      * 语法 renduce(callback, [init])
      * callback接受四个参数 分别是pre，current，index，arry
      *   pre：上一次调用回调返回的值（或是init）
      *   current：当前处理的元素
      * 
      */
      let ary = [1,2,3,4]; //// 返回数组的倍数
      let ary1 = [{ name: 'a', age: 3},{ name: 'b', age: 3},{ name: 'b', age: 3}]//返回数组对象中name值
      let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']; // 计算每个元素出现的次数

      const a = ary.reduce((pre, next) => pre.concat(next*next),[]);
      const b = ary1.reduce((pre, next) => pre.concat(next.name), []);
      const c = names.reduce((pre, next) => {
        if (next in pre) {
          pre[next] ++ // pre[next] = pre[next] ++
        } else {
          pre[next] = 1
        }
        return pre
      }, {})


      const fn1 = x => x+1;
      const fn2 = x => x+2;
      const fn3 = x => x+3;
      const fn4 = x => x+4;
      const pipe = (...fns) => {
        return function (params) { //调用pipe最终 返回一个函数并带有一个参数
          return fns.reduce((pre, cur) => {
            return cur(pre) //pre = 3, 5, 8, 12, 最终返回的fns是一个12数字，因为我们传入的params就是一个数字，最终返回就是一个number类型
          }, params) // params = 2
        }
      }
      const res = pipe(fn1, fn2, fn3, fn4) // res => fn
      console.log(res(2))
      <h5>10.JS三种加在的方式的区别: 正常模式，异步（async），defie（延迟） </h5>
       正常模式：
        这种模式js加在会阻碍浏览器加载；浏览器必须要等index.js 执行完和加载完才能执行其他的事情
       <!-- <script src="index.js" />-->
       异步模式：
        这种模式js加载是异步的，不会阻碍浏览器做其他的事情；
       延迟模式：
        这种模式是异步的但是会延迟加载，等整个文档解析完成，

      总结：
        当我们的js脚本和dom元素或者其他脚本依赖关系不大时，我们才会采用async
        当我们的js脚本依赖dom元素和其他脚本运行结果时才会采用define；
      <h5>11. 闭包</h5>
       什么是作用预：es5有全局作用预和函数作用预， es6新增了块句作用预；
       什么是作用域链：当前作用域查找这个变量如果没有在从父级查找，一级一级向上；
       什么是闭包：
       闭包的本质是：当前环境中存在父级作用域的引用，则不会被释放
       闭包如何产生：1.返回的函数被占用； 2. 函数当作参数被传递（返回出去的函数被外部占用或者是外部传进来的函数参数被占用）
       闭包的应用场景：模块化
      <h5>12. 原型链和继承</h5>
      什么是原型链：
         当一个对象查找一个属性的时候，现在自身查找，如果没有则去prototype原型上查找，直到Object.prototype(基类的原型)
         如果还没有找到，就返回null，停止查找，这种一层一层查找的链叫做原型链；
      什么是继承：
         一个对象继承了另外一个对象，他就可以使用另外对象的属性和方法，这种方式就叫继承；
      <h5>13. var let const 区别</h5>
       》var 没有块的概念，可以跨块访问，不能夸函数访问；
         let 定义的变量 有块级作用域概念，
         const 定义的常量 有块级作用域概念
       》 var 可以先使用，后声明存在变量提升
          let const 必须是先声明在使用；
       》 var可以在相同的作用域里面重复声明，let const 则不可
       》 var 暂时性死区 检测一个未被声明的一个变量类型
      <h5>14.js垃圾回收机制 </h5>
        1. 在项目中，如果有大量的内存（栈/堆/上下文）不被释放，页面的性能就会变的很慢，某些不合理的代码不能被释放，
        就会造成内存泄漏，尽量少用闭包，因为他会消耗内存；
        2. 浏览器垃圾回收机制和内存回收机制
          浏览器的js具有自动回收垃圾机制，垃圾收集器会定期去查找那些不在使用的变量然后进行释放；垃圾回收机制有3种
          （1）标记清除：在js中，当变量进入执行环境中，就会被贴上标签，进入环境和离开环境的标签，垃圾回收器会收回那些带有标记的值并回收它们的内存空间；
          （2）谷歌浏览器：浏览器会不定期的查找内存的引用，如果不被占用，浏览器会回收它，如果被占用则不回收；
          （3）IE浏览器：
        3. 优化手段：内存优化，手动释放，取消内存的占用空间
        （1）堆内存：fn = null（null为空指针对象）
        （2）栈内存：把上下文被外部占用的资源取消即可；
        4. 内存泄露
          在项目中如果代码不当，使用未声明的变量，就容易造成内存泄漏；
          在js中常见的4中内存泄漏： 全局变量，定时器，闭包，dom元素的引用（删除了引用的dom元素）
      <h5>15. 作用域和作用域链</h5>
        作用域：当函数执行的时候，就会形成一个函数作用域空间；
            全局作用域：在全局作用域中声明的属性和方法都是window对象的属性和方法
            函数作用域：当一个函数执行的时候就会形成一个函数作用域；
            块级作用域：let const可以用来声明块级作用域；
        作用： 作用域最大用途就是隔离变量，保护自己私有变量，避免命名冲突；
      <h5>16. 闭包的两个作用（保存/保护）</h5>
       闭包的概念：
         当我们执行一个函数，就会形成一个上下文空间，如果声明的变量被占用，从而不能被释放
         保护：保护自己的私有变量不被外界干扰；
         保存：如果上下文不被释放，上下文定义的变量可以理解为保存了下来，可以供下级调取使用
         函数执行形成私有上下文，来保护和保存私有的变量机制就是闭包；
       闭包的形成：
         函数的嵌套。
         内部函数引用外部函数的变量不会释放/ 函数引用外部参数，参数被函数占用，不能释放
       闭包用途：
        模仿块级作用域；
        封装私有属性变量；
      <h5>17.js中this的5中指向 </h5>
        1. 普通函数的this指向window
        2. 箭头函数的this指向上级作用域
        3. 构造函数的this指向返回new 创建的对象
        4. 对象中的函数this之前该对象本身
        5. Function.prototy了原型上的call，apply，bind可以指定函数的this指向，
           apply参数接受的是一个数组，call参数接受的是一个列表，
      <h5>18.原型和原型链 </h5>
        在js中，每个定义的对象（函数也是对象），对象中都会有一些预定的属性，每个对象都有一个prototy属性，这个属性指向原型对象；
        在js中，查找一个对象的属性，首先会从自己本身查找，没有在往上一级一级查找，直到基类，如果没有则返回null；
      <h5>19 new运算符的实现机制</h5>
        1. 会创建一个新的对象；
        2. 将对象的prototype设置为函数的prototype对象
        3. 让函数的this指向这个对象，执行构造函数的代码，初始化
        4. 判断函数的返回类型，如果值类型，返回创建的对象，如果是引用类型，返回引用类型的对象；
      <h5>20 setTimeout、Promise、Async/Await 的区别</h5>
         setTimeout回调函数放到宏任务执行，等到执行栈清空以后执行
         Promise 当调用resolve/reject才会执行异步操作，会执行的then/catch操作，
         async/await 返回的是一个promise对象，在函数执行的时候如果入到await，会将后面的表达式执行一遍
         然后将下面的代码放入微任务中，然后跳出函数
      <h5>22 介绍节流防抖原理、区别以及应用</h5>
        节流：事件在触发后，在规定的时间内不能再被触发，只能是先触发的那次事件；
        防抖：多次触发事件，事件处理函数只能执行一次，并且是在触发操作结束时执行（也就是频繁的操作事件函数，只有在操作结束后最后一次事件执行）
             防抖函数  一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效
        应用场景：
         节流：在项目中ajax请求，我们必须需要拿到后台数据后才能再次触发ajax请求；滚动加载更多
         防抖：模糊查询，搜索框查询（在规定的时间内）
      <h5>1. 数组的差集，并集，交集</h5>
      <h5>2. 数组深拷贝</h5>

  <h5>5 谈谈js事件循环机制和运行机制  参考地址： https://www.infoq.cn/article/jpbS9MZ8oeF*6s0RDRVd</h5>
      
      js单线程: JavaScript语言的一大特点就是单线程，即同一时间只能做一件事情。
      js事件循环（event loop）机制: 
        js代码执行的顺序就是事件循环机制，指浏览器解决了js单线程运行的时候不会阻塞的一种机制；

      宏任务：
        宏任务 --》 页面渲染 --》宏任务
        script(整体代码)、setTimeout、setInterval、I/O、UI交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)

      微任务：
         当前任务队列执行完成后 立刻执行微任务，然后页面渲染
         Promise.then、MutaionObserver、process.nextTick(Node.js 环境)
      运行机制：
        执行一个宏任务（如果没有从事件队列获取）
        执行中如果遇到宏任务存放事件队列中；
        执行中遇到微任务，存放微任务队列中；
        宏任务执行完后，立即执行微任务队列中的微任务（依次执行）
        当前宏任务执行完毕，立即渲染页面，执行下一个宏任务（也就是在从新执行第一步）

      promise 和 await 立即执行
       promise的异步体现在 then 和catch中，放在then中的代码是同步执行的；

       await：
        await（等待）的是一个表达式，这个表达式的返回值可以是promise对象也可以是其他值； await new Promise()
        很多人任务await会等待后面的表达式在执行下面的代码，其实await是让出线程的标志；
        await首先会执行一遍后面的表达式，然后将下面的代码加入到微任务中；
        await async2(); // 执行一遍async2
	      console.log('async1 end'); // await下面的代码是微任务（promise）， 所以要加入到微任务中
        下面是一个案列：
        async function async1() {
            console.log('async1 start');
            await async2();
            //更改如下：
            setTimeout(function() {
                console.log('setTimeout1')
            },0)
        }
        async function async2() {
            //更改如下：
          setTimeout(function() {
            console.log('setTimeout2')
          },0)
        }
        console.log('script start');

        setTimeout(function() {
            console.log('setTimeout3');
        }, 0)
        async1();

        new Promise(function(resolve) {
            console.log('promise1');
            resolve();
        }).then(function() {
            console.log('promise2');
        });
        console.log('script end');
      
      <h5>6. 哪些操作会造成内存泄漏？</h5>
      ① 意外的全局变量
        由于我们使用了未定义的变量，从而创建了全局变量，停留在内存中一直未被销毁；
      ② 定时器 / 回调函数
        由于我们定义了一个定时器setinterval，然而我们却没有取消/清除这个定时器；
      ③ 必报
      ④
      <h5>7.ES6有哪些新特性？ </h5>
        块级作用域，箭头函数，扩展运算符，promise，模版字符串，类，解构赋值，
      <h5>8.js 的节流与防抖 </h5>
      函数防抖：是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，
       避免因为用户的多次点击向后端发送多次请求。
      函数节流： 是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，
       只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
   
    </pre>
  </div>
</template>

<script setup>

// let obj = {}
// Object.values(obj)

// console.log(Object.keys(obj))
// </script>
