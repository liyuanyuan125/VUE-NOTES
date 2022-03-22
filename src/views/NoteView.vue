<template>
  <div class="home">
    <div class="header">
      <span>web文档</span>
      <span><router-link to="/">to home</router-link></span>
    </div>
    <div class="page">
      <div class="left">
        <ul>
          <!-- css  -->
          <li><router-link to="/note/note-a">1.vue内点击url下载文件</router-link></li>
          <li><router-link to="/note/note-b">1-1.移动端适配方案viewport</router-link></li>
          <li><router-link to="/note/note-d">1-2.盒子模型</router-link></li>
          <li><router-link to="/note/note-e">1-3.为什么要使用flex布局</router-link></li>
          <li><router-link to="/note/note-g">1-4.css中的权重（优先级）</router-link></li>

          <!-- vue -->
          <li><router-link to="/note/note-c">2. vue3.2中setup语法糖</router-link></li>
          <li><router-link to="/note/note-h">2-1. vue3七种组件通信方式</router-link></li>


          <!-- js -->
          <li><router-link to="/note/note-f">3. js基础类型转换与换算</router-link></li>



        </ul>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 60px;
  font-weight: bold;
  font-size: 27px;
  border-bottom: solid 1px #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}
.page {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  .left {
    height: calc(100% - 60px);
    width: 220px;
    border-right: solid 1px #ccc;
    padding: 20px 20px 0;
    overflow-y: scroll;
    li {
      text-align: left;
      line-height: 35px;
      font-size: 15px;
    }
  }
  .right {
    flex: 1;
    padding: 20px;
    overflow-y: scroll;
    padding-bottom: 140px;
  }
}
</style>
