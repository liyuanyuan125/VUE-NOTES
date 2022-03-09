<template>
  <div>
    <h3>HTML和CSS</h3>
    <pre>
      重点从布局入手，比如单位、盒模型、定位、响应式布局等知识点。
      浏览器内核
      盒模型、flex布局、两/三栏布局、水平/垂直居中；
      BFC、清除浮动；
      css3动画、H5新特性。
    </pre>
    <h5>HTML5新特性，语义话</h5>
    <pre>
      概念：html5语义话就是合适的标签做合适的事情；
      语义话标签： header，footer，nav，section，
      语义话的优点：清晰的代码结构，利于开发与维护，有利于搜索引擎优化
    </pre>

    <h5>css选择器及优先级</h5>
    <pre>
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
    </pre>

    <h5>box-sizing属性</h5>
    <pre>
      box-sizing 属性就是规定两个并排带边框的框；
      content-box：宽度和高度应用到盒子的内容层，总体的盒子会因为内边距和边框变化而变化（标准盒子模型）
      border-box：为元素设定的宽和高决定了元素的边框盒（IEIE盒子模型）
      inhert：继承父元素box-sizing值；
    </pre>

    <h5>css盒子模型</h5>
    <pre>
      css盒子模型就是一个盒子，里面包括边距，边框，内容和填充，css盒子模型包含 IE盒子模型和标准盒子模型
      在标准盒子模型中：width = content（内容）的宽度；
      在IE盒子模型中：width = content+border+padding这三个部分；

      标准盒子模型： 总宽度 = width + padding + margin + border
      IE盒子模型：  总宽度 = width + margin
    </pre>

    <h5>页面布局</h5>
    <pre>
      1. flex布局： 弹性盒子布局：
      2. rem布局： 相对于html根元素font-size布局（等比缩放）
        对于pc端使用的次数不多，一般应用于移动端；
        在响应式布局中，需要通过js动态的控制根元素的font-size大小；
      3. 百分比布局
      4. viewport 布局
    </pre>
    <pre>
    <h5>position属性值及区别</h5>
     fixed：固定定位，相对于浏览器窗口固定定位，fixed定位于文档流无关，因此不占用dom空间，fixed元素和其他元素重叠；
     relative：相对定义，如果对一个元素相对定位，它将出现在它所在的位置上，如果给这个元素移动，这个元素会相对于它的起点移动，无论是否移动 
              元素都占有原有的空间；
     absoulte：绝对定位，相对于最近的定位的父元素，absolute 定位使元素的位置与文档流无关，因此不占据空间，会和其他元素重叠；
     sticky：
     static：默认值，没有定位
    <h5>让一个元素水平/垂直居中</h5>
      水平居中
        》已知元素width
        1. width和margin实现，margin： 0 auto；
        3. absoulte+margin, left:0,top:0,right:0,bottom:0, margin:auto;(绝对定位 + left/right/bottom/top + margin)
        2. absoult+width, left: calc((100vw - width) / 2)
        》不知宽度
        2. absoulte+transform实现 left：50%，transform：translateX(-50%) // transform: translate(-50%,-50%); 
        3. flex+justify-content：center
      垂直居中
    <h5>隐藏页面中的某个元素</h5>
     1. opacity: 0 元素隐藏，不会改变页面布局，如果绑定了元素会触发，
     2. visibility: hidden 元素隐藏，不会改变页面布局，不会触发绑定的事件，在文档流中保留原有的空间
     3. display: none 元素隐藏，会改变布局界面，文档流中不占用空间，触发重排和重绘
    <h5></h5>
    <h5></h5>
    <h5></h5>
    <h5></h5>
    <h5></h5>



    </pre>

  









    
    <div class="layout">
      <h3>九宫格</h3>
      <!-- <h4 class="text">ceshi1</h4>
      <h4>ceshi2</h4> -->
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
</div>
  </div>
</template>
<style lang="less" scoped>
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
