<template>
  <div>
    <h3>1.为什么要使用弹性布局（flex）</h3>
    <pre>
      1. 传统的布局基于盒子模型，而盒子模型依赖diplay，positon，transform属性；（比如垂直居中需要positon+transform）
      2. flex 弹性布局，可以简约，响应式布局，flex可以用来为盒子模型提供很大的灵活性；
    </pre>
    <h3>2.flex: 0 1 auto具体详解</h3>
    <pre>
    flex属性是flex-gorw、flex-shrink、flex-basic 
    1. flex-grow: 项目放大比例，按照比例分配—多余空间—，默认值是0（方法比例基于多余的空间）
      如果项目flex-grow属性是0，项目存在剩余空间也不放大；
      如果项目flex-grow属性是1，则等分剩余空间（如果有多余空间）；
      如果项目一个项目flex-grow属性是2，其他是1，前者占有剩余空间多余其他项目一倍；
    2. flex-shrink：项目缩小比列，空间不足，项目按比缩小空间， 默认值是1（可选）（基于空间不足时）；
       如果项目flex-shrink属性是1，空间不足所有项目等比例缩小；
       如果第一个项目flex-shrink是0，其他是1，空间不足时，前者不缩小，后者缩小；
    3. flex-basic: 项目的初始宽度 默认值是auto（可选）

    flex-grow：基于有多余空间的时候，按照比例扩大空间（如果没有多余空间此属性不起作用）
    flex-shrink：基于空间不足时，按照比例缩小空间（没有不足空间此属性不起作用）
    flex：1 表示等分剩余空间；

    </pre> 
    <h2>container的宽度600px，left的宽度是flex: 1 2 500px; right的宽度是flex：2 1 400px；求 left，right的最终宽度；</h2>
    <h2>container的宽度600px，left的宽度是flex: 1 2 100px; right的宽度是flex：2 1 200px；求 left，right的最终宽度；</h2>
    <pre>
      flex-grow: 项目有多余空间生效
      flex-sharking：项目空间不足生效

      收缩计算过程：
      1. 计算收缩值：500+400-600 = 300  （溢出300空间）
      2. 计算收缩总的权重值：500*2 + 400*1 = 1400
      3. 计算项目收缩空间：项目宽度 - （项目宽度*溢出空间*flex-sharking / 总权重）
      left = 500 - 500 × 300 × 2 / 1400 ≈ 285.71
      right = 400 - 400 × 300 × 1 / 1400 ≈ 314.28

      扩张计算方式：
      1. 计算扩张总容量：container-（left+right）
      2. 计算每份扩张值：总内容/(left(flex-grow) + right(flex-grow))
      3. 计算项目扩张大小：(项目宽度 + 每份扩张值 × 扩张系数(flex-grow))

      子元素的 flex-grow的值分别为 1，2
      剩余空间：1000 - 500+400= 100。
      子元素所得到的多余空间分别为：
      100 * 1 / 3= 33.33
      100 * 2 / 3 = 66.67
      子元素最终宽度分别为：
      500 + 33.33 = 533.33
      400 + 66.67 =466.67

    </pre>
    <div class="container">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {};
</script>
<style scoped lang="less">
 .container {
    width: 600px;
    height: 300px;
    display: flex;
  }
  .left {
    flex: 1 2 500px;
    background: red;
  }
  .right {
    flex: 2 1 400px;
    background: blue;
  }</style>
