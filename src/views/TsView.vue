<template>
  <div class="home">
    <div class="header">
      <span>TypeScript 文档</span>
      <span><router-link to="/">to home</router-link></span>
    </div>
    <div class="page">
      <div class="left">
        <ul>
          <li><router-link to="/tsview/tsa">ts类型编程基础</router-link></li>
          <li><router-link to="/tsview/tsb">ts类型表达式</router-link></li>
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
    width: 200px;
    border-right: solid 1px #ccc;
    padding: 20px 0;
    overflow-y: scroll;
    padding-left: 20px;
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
    margin-bottom: 50px;
  }
}
</style>
