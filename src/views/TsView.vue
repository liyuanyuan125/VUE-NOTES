<template>
  <div class="home">
    <div class="header">
      <span>TypeScript 文档</span>
      <span><router-link to="/">to home</router-link></span>
    </div>
    <div class="page">
      <div class="left">
        <ul>
          <li><router-link to="/tsview/ts-a">什么是TS，TS和JS区别</router-link></li>
          <li><router-link to="/tsview/ts-b">TS-基础-函数</router-link></li>
           <li><router-link to="/tsview/ts-c">TS-interface接口</router-link></li>
          <li><router-link to="/tsview/ts-d">TS-class类</router-link></li>
          <li><router-link to="/tsview/ts-e">TS-枚举（enum）</router-link></li>
          <li><router-link to="/tsview/ts-h">TS进阶-高级类型</router-link></li>
          <li><router-link to="/tsview/ts-i">TS进阶-高级类型泛型</router-link></li>
          <li><router-link to="/tsview/ts-j">TS进阶-高级索引类型</router-link></li>
          <li><router-link to="/tsview/ts-f">TS进阶-高级映射类型</router-link></li>
          <li><router-link to="/tsview/ts-g">TS进阶-高级条件类型</router-link></li>

           <li><router-link to="/tsview/ts-k">TS进阶-高级工具类型</router-link></li>
            <li><router-link to="/tsview/ts-l">TS声明文件</router-link></li>
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
