<template>
  <div>
    <pre>
      图片优化的方式
      500 张图片，如何实现预加载优化
      懒加载具体实现
      减少http请求的方式
      webpack如何配置大型项目
    </pre>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "",
  setup() {
    console.log("1-开始创建组件-setup");
    const data = reactive({});
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped lang="scss"></style>
