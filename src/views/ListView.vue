<template>
  <div class="home">
    <div class="header">
      <span>面试汇总解答</span>
      <span><router-link to="/">to home</router-link></span>
    </div>
    <div class="page">
      <div class="left">
        <ul>
          <li><router-link to="/list/list-a">1. JS基础面试题</router-link></li>
          <li><router-link to="/list/list-b">2. 网络+浏览器</router-link></li>
          <li><router-link to="/list/list-c">3. HTML和CSS面试题</router-link></li>
          <li><router-link to="/list/list-d">4. vue+react框架面试题</router-link></li>
          <li><router-link to="/list/list-r">5. React hooks 面试题</router-link></li>
          <li><router-link to="/list/list-e">5. typeScript面试题</router-link></li>
          <li><router-link to="/list/list-m">5. Vite2面试题</router-link></li>
          <li><router-link to="/list/list-n">5. Vue3.2面试题</router-link></li>
          <li><router-link to="/list/list-o">5. webpack打包工具</router-link></li>
          <li><router-link to="/list/list-p">5.性能优化面试题</router-link></li>
          <li><router-link to="/list/list-q">5.git面试题</router-link></li>


          <li><router-link to="/list/list-f">6. 美团面试题</router-link></li>
          <li><router-link to="/list/list-g">7. 商汤科技面试题</router-link></li>
          <li><router-link to="/list/list-h">8. 神策面试题</router-link></li>
          <li><router-link to="/list/list-i">9. 王者荣耀面试题</router-link></li>
          <li><router-link to="/list/list-j">10. 天眼查面试题</router-link></li>
          <li><router-link to="/list/list-k">11. 酷家乐面试题</router-link></li>
          <li><router-link to="/list/list-l">12. 中国人寿</router-link></li>
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
    padding-bottom: 100px;
  }
}
</style>
