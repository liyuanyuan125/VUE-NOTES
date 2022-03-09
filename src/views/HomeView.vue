<template>
  <div class="home">
    <div class="items">
      <router-link to="/tsview">Ts 文档学习</router-link>
    </div>
    <div class="items">
      <router-link to="/vite">Vite2 文档学习</router-link>
    </div>
    <div class="items" to="/vue">Vue3 文档+面试问题</div>
    <!-- <div class="items">Vue-Router4.x 文档学习</div> -->
    <div class="items">
      <router-link to="/js">js基础+面试问题</router-link>
    </div>
    
     <div class="items">
      <router-link to="/note">学习笔记记录</router-link>
    </div>

    <div class="items">
      <router-link  to="/list" >面试汇总</router-link>
      </div>
   
    
    <!-- <div class="items">
       <router-link to="/hcss">HTML/CSS面试问题总结</router-link>
    </div> -->
    <!-- <div class="items">
       <router-link to="/http">网络通信面试</router-link>
    </div>
    <div class="items">
       <router-link to="/pre">性能面试问题总结</router-link>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
});
</script>
<style scoped lang="less">
.home {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .items {
    border: solid 1px #ccc;
    flex: 0 0 18%;
    box-sizing: border-box;
    padding: 30px;
    cursor: pointer;
    margin-bottom: 25px;
    margin-right: 2%;
  }
  .items:nth-child(5n) {
    margin-right: 0;
  }
}
</style>
