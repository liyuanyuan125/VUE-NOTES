<template>
  <div>
    <pre>
      css+html总结：
      1. 布局单位（display），盒子模型，定位（position），布局方式（rem，em，百分比，flex，viewport，浮动布局）、两/三栏布局、水平/垂直居中
      2. BFC，IFC，FFC
      3. css3动画、H5新特性
      4. css中的Calc函数方法中的正负号前后要加空格calc(100% - 100px) 可能是为了更好的分出是减号还是负号吧、
      5. css选择器及优先级 important！(10000)》style(1000)》id(100)》class(10)》〉标签(1)》*通配符(0)
      6. 
    <h5>css基本布局单位</h5>
     元素的类型和display属性决定了box（盒子）的类型
     display：block  块级元素
     display：inline｜inline-block 行内级元素
     display：flex 弹性容器
     display：gird 栅格容器
    <h5>什么是BFC</h5>
     块级格式化上下文 Block Formatting Context
    <b>css会在什么情况下创建一个块级格式化上下文（BFC）/ 如何触发BFC</b>
     1）根元素，即是html元素（最大的一个BFC/或者其他元素）
     2）浮动（float：none除外）
     3）相对/绝对定位（postion：absoulte/fixed）
     4）行内块（display：inline-block）
     5）弹性盒（display：flex/inline-flex）
     6）表格单元格 display: table-cell
     7）溢出元素 overflow: hidden/scroll/auto/inherit

    <b>BFC布局规则</b>
     1）内部的box会在垂直方向，一个接一个的放置
     2）box垂直方向的距离有margin决定，属于同一个BFC并垂直相邻的两个box，margin值会重合
     3）每个元素margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
     4）BFC区域不会与float box重叠
     5）BFC就是页面上一个独立的容器，容器里面的子元素不会影响到外面的元素，反之如此
     6）计算BFC高度的时候，浮动元素会参与计算

    <b>BFC的作用/应用场景</b>
     1）解决高度塌陷的问题 
       父元素包含子浮动元素，清除内部浮动（对子元素设置浮动后，父元素的高度会塌陷（父没有设置高度），也就是父元素的高度为0）
       解决方案：就是把父元素变成一个BFC，在父元素里面设置一个属性overflow：hidden（遵循了BFC规则6计算BFC高度，浮动元素也会参与）
     2）解决块级元素垂直方向margin重叠（分属不同的BFC，可以解决margin重合问题）
       解决方案：给任意一个子元素在外包裹一个块级元素，并给这个元素设置overflow：hidden（遵循了BFC规则2）
       注意⚠️：应该避免两个相邻的BFC，margin设置
     3）解决浮动问题（当前元素被浮动元素覆盖的问题同级元素）
       早期大家喜欢用浮动布局，但是浮动会脱离文档流，覆盖旁边的元素
       比如同级两个box，第一个box设置了浮动，脱离了文档流，后面的元素就会被覆盖
       解决方案：给后面的元素形成BFC元素，从而清除浮动给其他元素造成的影响（遵守了BFC规则4，BFC区域不会和float盒子重叠）
    <h5>什么是IFC</h5>
     行级格式化上下文 Inline Formatting Context
    <b>如何生成IFC环境</b>
     只需要在块元素中包含内联元素
    <b>IFC的作用/应用场景</b>
    1）元素水平居中 在块级元素设置text-align：center，内联元素则会水平居中
    2）元素垂直居中 在IFC元素中设置 vertical-align:middle 则会垂直居中
    <h5>什么是GFC-网格格式化上下文 Grids Formatting Context</h5>
    <h5>什么是FFC</h5>
    弹性格式化上下文 Flex Formatting Context，css3引进了一种新的布局方式，一般称之为弹性布局
    <b>如何触发FFC</b>
    我们只需要将元素设置为display：flex/inline-flex，一个弹性容器为其内容创建了一个新的弹性格式化上下文（FFC）
    <b>FFC布局规则</b>
    1）属性设置为flex的容器被渲染成一个块级元素
    2）属性设置为inline-flex的容器被渲染为一个行内元素
    <b>FFC应用场景</b>
    1）自动撑开剩余高度/宽度
      1. 左侧固定，右侧使用css中calc函数动态计算 
      2. 左侧固定，右侧使用flex：1 
    <h5>css3动画、H5新特性</h5>
    css3新特性:
     1. css3 选择器 :not(p), :input:checked
     2. css3 边框(border)
     3. css3 背景
       background-clip:规定背景颜色的绘制区域 border-box｜padding-box｜content-box
       background-orgin:规定背景图片的定位区域 border-box｜padding-box｜content-box
       background-size:规定背景的绘制区域大小
     4. css3 自定义字体
       定义一些特殊的UI字体，
       @font-face
       {
        font-family: myFirstFont;
        src: url(sansation_light.woff);
       }
       然后引用 自定义的名称
       div{ font-family: myFirstFont;}
     5. css3 转换和变形 transform / translate
     6. css3 过渡 transtion
     7. css3 动画 @keyframes aniName {}
     8. css3 盒模型
      在 CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框，主要包括以下用户界面属性：
      resize：none | both | horizontal | vertical | inherit
      box-sizing: content-box | border-box | inherit
      outline:outline-color outline-style outline-width outine-offset

      resize属性指定一个元素是否应该由用户去调整大小。
      box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。
      outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓
     9. css3 弹性盒子模型
     10. css3 多媒体查询 @media all and (min-width: 800px) { ... }
         @media all 是媒体类型，也就是说，将此 CSS 应用于所有媒体类型
         (min-width:800px) 是包含媒体查询的表达式，如果浏览器的最小宽度为 800 像素，则会告诉浏览器只运用下列 CSS
    H5新特性:
     1. H5新元素/语义元素-提供了新的元素更好的规划了页面的结构（footer，header，aside，nav）
     2. H5 canvas - 用于图形绘制
     3. H5 video/audio - 
     4. H5 拖放 - 为了一个元素可以拖放，则可以添加draggable = 'true'
     5. H5 input类型/属性 - 
           类型type = color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week
           属性 max/min, placeholder,step ....
     6. H5 Web存储 - sessionStorage/localStorage
     7. H5 离线web应用 - web应用缓存，这意味着web应用可以缓存，并可以在没有网络的时候可以访问
     8. H5 WebSocket - websocked是html5提供的双通信协议，服务器和浏览器只需要一次握手的动作，然后两者就可以相互传输数据
    <h5>css选择器及优先级</h5>
    选择器：
      id选择器(#myid)
      类选择器(.myclass)
      属性选择器(a[rel="external"])
      伪类选择器(a:hover, li:nth-child)
      标签选择器(div, h1,p)
      相邻选择器（h1 + p）
      子选择器(ul > li)
      后代选择器(li a)
      通配符选择器(*)

    优先级：
     !important(10000)
     内敛样式（style）（1000）
     id #（100）
     class / 属性 / 伪类（10）
     元素选择器（1）
     通配符（0）
     !important > style > id >class >标签 > 通配符 
    <h5>box-sizing属性</h5>
      box-sizing 属性就是规定两个并排带边框的框；
      content-box：宽度和高度应用到盒子的内容层，总体的盒子会因为内边距和边框变化而变化（标准盒子模型）
      border-box：为元素设定的宽和高决定了元素的边框盒（IEIE盒子模型）
      inhert：继承父元素box-sizing值；
    <h5>css盒子模型</h5>
      css盒子模型就是一个盒子，里面包括边距，边框，内容和填充，css盒子模型包含 IE盒子模型和标准盒子模型
      在标准盒子模型中：width = content（内容）的宽度；
      在IE盒子模型中：width = content+border+padding这三个部分；

      标准盒子模型： 总宽度 = width + padding + margin + border
      IE盒子模型：  总宽度 = width + margin
    <h5>页面布局</h5>
      1. flex布局： 弹性盒子布局：
      2. rem布局： 相对于html根元素font-size布局（等比缩放）js动态的控制根元素的font-size大小；
      3. 百分比布局
      4. viewport 布局
      5. 浮动布局
      6. em布局 （相对于父元素的font-size布局）
    <h5>position属性值及区别</h5>
     fixed：固定定位，相对于浏览器窗口固定定位，fixed定位于文档流无关，因此不占用dom空间，fixed元素和其他元素重叠；
     relative：相对定义，如果对一个元素相对定位，它将出现在它所在的位置上，如果给这个元素移动，这个元素会相对于它的起点移动，无论是否移动 
              元素都占有原有的空间；
     absoulte：绝对定位，相对于最近的定位的父元素，absolute 定位使元素的位置与文档流无关，因此不占据空间，会和其他元素重叠；
     sticky：
     static：默认值，没有定位
    <h5>让一个元素水平/垂直居中+两/三栏布局</h5>
      水平居中
        》已知元素width
        1. width和margin实现，margin： 0 auto；
        3. absoulte+margin, left:0,top:0,right:0,bottom:0, margin:auto;(绝对定位 + left/right/bottom/top + margin)
        2. absoult+width, left: calc((100vw - width) / 2)
        》不知宽度
        2. absoulte+transform实现 left：50%，transform：translateX(-50%) // transform: translate(-50%,-50%); 
        3. flex+justify-content：center
     自动撑开剩余高度/宽度
      两栏元素布局：
      1. 左侧固定，右侧使用css中calc函数动态计算 （float）
      2. 左侧固定，右侧使用flex：1 （flex）
      三栏 一个父容器，三个子容器，两边的子容器宽度固定，中间自适应
    <h5>隐藏页面中的某个元素</h5>
     1. opacity: 0 元素隐藏，不会改变页面布局，如果绑定了元素会触发，
     2. visibility: hidden 元素隐藏，不会改变页面布局，不会触发绑定的事件，在文档流中保留原有的空间
     3. display: none 元素隐藏，会改变布局界面，文档流中不占用空间，触发重排和重绘
 
    参考地址：https://juejin.cn/post/7072174649735381029（BFC）
    参考地址：https://juejin.cn/post/6950082193632788493（BFC）
    参考地址：https://www.cnblogs.com/star91/p/5659134.html（css3+html5新特性）
    </pre>

  









    
  <div class="layout">
    <h3>九宫格</h3>
    <div id="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>
    <h3>margin重合问题（）</h3>
    <div class="father">
      <div class="children1">child1</div>
      <div class="children2">child2</div>
    </div>
    
  </div>
  <h3>一个父容器，三个子容器，两边的子容器宽度固定，中间自适应</h3>
    <div class="flex-fu" style="display:flex">
      <div class="left" >left</div>
      <div class="container" >container</div>
      <div class="right" >right</div>
    </div>
</div>
</template>
<style lang="less" scoped>
.flex-fu {
  display: flex;
  .left {
    width: 200px;
    border: solid 1px red;
  }
  .right {
    width: 200px;
    border: solid 1px green;
  }
  .container {
    flex: 1;
    border: solid 1px orange;
  }
}
pre b {
  font-weight: bold;
}
.father {
  width: 100px;
  border: 3px solid rgb(83, 141, 230);
}
.children1 {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  background-color: coral;
}
.children2 {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  background-color: coral;
}

.layout {
  width: 300px;
  margin: 0 auto;
  .text {
    // opacity: 0;
    // display: none;
    // visibility: hidden;
  }
}
#container {
  width: 150px;
  display: flex;
  flex-wrap: wrap;
}

.item {
  box-sizing: border-box;
  flex: 0 1 33.33%;
    font-size: 2em;
    text-align: center;
    border: 1px solid #e5e4e9;
}

.item-1 {
    background-color: #ef342a;
}

.item-2 {
    background-color: #f68f26;
}

.item-3 {
    background-color: #4ba946;
}

.item-4 {
    background-color: #0376c2;
}

.item-5 {
    background-color: #c077af;
}

.item-6 {
    background-color: #f8d29d;
}

.item-7 {
    background-color: #b5a87f;
}

.item-8 {
    background-color: #d0e4a9;
}

.item-9 {
    background-color: #4dc7ec;
}
</style>
