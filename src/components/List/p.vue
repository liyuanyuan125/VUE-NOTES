<template>
  <div>
    <pre>
      参考地址：https://juejin.cn/post/6966857691381645325
      参考地址： https://juejin.cn/post/6892994632968306702#heading-0

      参考地址：https://juejin.cn/post/6898630134530752520
      前端鉴权的兄弟们：cookie、session、token、jwt、单点登录
      基于 HTTP 的前端鉴权背景
      cookie 为什么是最方便的存储方案，有哪些操作 cookie 的方式
      session 方案是如何实现的，存在哪些问题
      token 方案是如何实现的，如何进行编码和防篡改？jwt 是做什么的？refresh token 的实现和意义
      session 和 token 有什么异同和优缺点
      单点登录是什么？实现思路和在浏览器下的处理
      
     <h4>一，代码层级优化性能</h4>
     <h5>1. 为什么v-for和v-if不建议用在一起</h5>
      v-for比v-if优先级高一些，这样每次遍历v-if将重复运行，数据数据量很大，而真正要展示的数据很少时，很消耗性能
      可以用computed过滤一遍数据，然后在进行v-for数据展示
    <h5>2. 尽量减少无意义重排和重绘</h5>
     重排会导致dom重新渲染，节点重新布局，重新加载
     》改变窗口大小，
     》dom元素删除
     》改变元素尺寸和位置变动

     有些情况重排无法避免，但是有些时候我们可以省去无意义的重排
     比如：隐藏元素我们尽量避免使用display：none，会引起重排
     比如：定位一个元素动画，我们尽量使用fixed，absoulte，脱离文档的
     比如：集中修改样式，不要一条一条的修改样式（集中渲染一次，不要修改一次渲染一次）
    <h5>3. tree-sharking</h5>
     tree-sharking消除没有被引用的模块代码，减少模块体积大小，已提高页面的性能（来减少最终的bundle体积。）
     wepack4默认开启tree-sharking，基于ESMoule静态编译而成，想要支持这个效果不要使用Commonjs（require）模块引入；

     对于一些第三方库来说为了兼容性考虑通常入口文件都是CommonJS的形式，这时想要成功抖掉不需要的部分通常有两种方式
     以出镜率极高的lodash为例。
     lodash默认是CommonJS的形式，使用常规的方法import { cloneDeep } from 'lodash'导入后，
     webpack会把整个lodash打包进来，这对于只用到了一个函数的我们的来说显然不可接受，
     此时可以改写为：import cloneDeep from 'lodash/cloneDeep'
     供了ESModule的版本 import { cloneDeep } from 'lodash-es
     前者是精准导入不依赖re-exports，后者则是一个正经的Tree-shaking
    <h5>4. 使用图标字体（iconfont）代替UI图标</h5>
     使用fontmin-webpack插件对字体文件进行压缩（也可以将UI图标上传到iconfont）
    <h5>5. 图片优化</h5>
     》延迟加载图片：当图片出现在可视区域对时候再去加载图片 data-src
    <h5>6. 使用事件委托</h5>
     事件委托就是采用的事件冒泡机制，把元素点击事件绑定到父元素身上，而不是所有的子元素身上，可以节约内存；
    <h5>7. if-else 对比 switch</h5>
     当判断条件数量越来越多时，越倾向于使用 switch 而不是 if-else。
    <h5>8.使用 transform 和 opacity 属性更改来实现动画</h5>
     transforms 和 opacity 这两个属性更改不会触发重排与重绘，它们是可以由合成器（composite）单独处理的属性。
    
     <h4>二，web优化性能方案</h4>
     <h5>1.dns-prefetch进行DNS预查询</h5>
     DNS查询：通常我们发送一个http请求，首先会请求DNS服务器，进行域名解析对应的ip地址，首先浏览器会先查自己的缓存，然后再去本地hosts，
             如果还没有查找才会想DNS服务器发送请求；
     进行DNS预查询：进行预查询这样省去了dns服务器查询的时间
     dns-prefetch（DNS预获取）就是尝试在请求之前解析域名，这可能是后面要加载的资源，也就可能是用户打开的连接
     在文档顶部我们可以将我们要请求的时间地址DNS预查询，通过插入一个link标签
     link rel="dns-prefetch" href="https://fonts.googleapis.com/">
     告诉浏览器我们要从这个（通常是存放静态资源的CDN地址）地址请求资源，你先查询一下，当我们用到的时候就可以直接拿到对应的ip地址；
     <h5>2.缓存（http，CDN）</h5>
     （1）Http缓存主要分两种分别是强制缓存和协商缓存，都是通过header控制
     （2）CDN缓存会把源站的资源缓存到CDN服务器，当用户访问的时候就会从最近的CDN服务器拿取资源而不是从源站拿取，
         这样做的好处是分散了压力，同时也会提升返回访问速度和稳定性。
         内容分发网络（CDN）是一组分布在多个不同地理位置的 Web 服务器。我们都知道，当服务器离用户越远时，延迟越高。
         CDN 就是为了解决这一问题，在多个位置部署服务器，让用户离服务器更近，从而缩短请求时间。
     <h5>4.压缩（zip，gzip）</h5>
      webpack4+ 无需配置默认会压缩代码（zip）
      
      gzip 压缩：可以通过向 HTTP 请求头中的 Accept-Encoding 头添加 gzip 标识来开启这一功能。当然，服务器也得支持这一功能
      gzip 是目前最流行和最有效的js压缩方法
      compression-webpack-plugin（gzip压缩）
     <h5>5.reload预加载</h5>
      使用link的reload属性预加载一个资源
      ling rel="reload" href="index.less" as="style"
      as 指定预加载的类型，一般就是style和Javascript，css和js
     <h5>6.script加标记（defer，async）</h5>
     》async标记：  
      当浏览器解析script标签的时候，浏览器主线成回等待script或者运行script，然后在往下继续构建（在以前将js放在文档上面，影响页面处于白屏的时间过程）
      async标记告诉浏览器js在解析可以去做别的事情，不影响js解析，多个js可以并行下载
      async的好处可以让互相不依赖的js异步下载，异步执行，如果有相互依赖的js我们可以使用defer延迟一会，等待上面的执行完后在执行
      script src="index.js" async 
     》defer标记：
      加上defer标签也是异步操作，多条js并行下载，下载完成之后不会立即执行而是让html解析完成之后在运行，多条defer的js是在解析完后同步运行的；
      script src="main.js" defer />
      script src="main2.js" defer />
     》不同
     async 解析完后会立刻执行，多个async的js，异步解析，异步执行
     defer 解析完后会等html完成后在执行，延后执行，多个defer的js出行同步执行
     如果两个模块之间没有依赖我们使用async，如果有依赖我们使用defer，等待html解析后在执行js
     <h5>7.进行DNS预查询</h5>
    <h4>三，优化性能-调试工具</h4>
      <h5>调试工具-Network面板</h5>
      network记录了和服务器交互的具体细节,可以看到请求的数量，传入体积及解压后的体积，同时还知道哪些资源命中强制缓存和协商缓存
     （1）请求的一个资源从服务器到我们的页面展示出来所花销的时间
        Queueing: 在请求队列中的时间。
        Stalled: 从TCP 连接建立完成，到真正可以传输数据之间的时间差，此时间包括代理协商时间。
        Proxy negotiation: 与代理服务器连接进行协商所花费的时间。
        DNS Lookup: 执行DNS查找所花费的时间，页面上的每个不同的域都需要进行DNS查找。
        Initial Connection / Connecting: 建立连接所花费的时间，包括TCP握手/重试和协商SSL。
        SSL: 完成SSL握手所花费的时间。
        Request sent: 发出网络请求所花费的时间，通常为一毫秒的时间。
        Waiting(TFFB): TFFB 是发出页面请求到接收到应答数据第一个字节的时间。
        Content Download: 接收响应数据所花费的时间。

        initial connection(进行TCP握手的时间)
        DNS Lookup  DNS查询时间
        SSL握手时间 
        request send
        wating（TTFB） 请求资源服务器查询时间
        content Download 接受服务器发送过来的文档时间

        如果能在请求资源之前得到DNS地址（预查询）便可以省去DNS的查询时间
        如果能在请求资源之前 已经握过手（预连接）便可以省去SSL握手时间
        如果能在请求资源之前 不去请求（缓存）

        network可以让我们初步估计网站性能，辅助功能 如禁用缓存，block某些资源
     <h5>调试工具-Lighthouse面板</h5>
     lighthouse是对整个网站的评估，通过以下几个指标对网站进行打分
     [first contentful pain]（FCP）：首屏幕渲染时间，chrome 会取出第一个渲染出来的元素作为参考时间
     [time to intetactive]（TTI） : 可交互时间
     [speed index]（SL）速度指数，页面的填充速度
     [Total Blocking Time]（TBT） 从能看到能摸之间超过50ms的任务总和
     [Largest Contentful Paint]（LCP） 页面中最大的那块渲染的时间点
     [Cumulative Layout Shift]（CLS） 元素移动所累积的时间点，比如有一个absolute的元素突然从左边移到了右边。

     Performance - 性能检测，如网页的加载速度、响应时间等
     Accessibility - 铺助检测，如网页的可访问性问题，HTML代码标签之类的优化等
     Best Practices - 实践性检测，如网页安全性，如是否开启HTTPS、网页存在的漏洞等
     SEO - 搜索引擎优化检测，如网页title是否符合搜索引擎的优化标准等
     调试工具 - performance面板
     webpack-bundle-analyze（webpack打包插件）
    </pre>
  </div>
</template>