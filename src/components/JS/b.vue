<template>
  <div>
    <h3>1. 数组乱序</h3>、
    <pre>
      const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5) 。
      // 测试
      const arr = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\];
      console.log(shuffleArray(arr))。
    </pre>
     <h3>2. 复制到剪贴板</h3>
     <pre>
      const copyToClipboard = (text) =>
      navigator.clipboard?.writeText && navigator.clipboard.writeText（text）。
      // 测试
      copyToClipboard("Hello World!")。
     </pre>

     <h3>3. 数组去重</h3>
     <pre>
       const getUnique = (arr) => \[...new Set(arr)\]。
      // 测试
      const arr = \[1, 1, 2, 3, 3, 4, 4, 5, 5\];
      console.log(getUnique(arr))。
     </pre>

     <h3>4. 滚动到顶部 | 滚动到底部</h3>
     <pre>
      const scrollToTop = (element) => element.scrollIntoView({ behavior: "smooth", block: "start" })。
      const scrollToTop = (element) => element.scrollIntoView({ behavior: "smooth", block: "end" })。
     </pre>

     <h3>5. 生成随机颜色</h3>
     <pre>
       const generateRandomHexColor = () =>`#${Math.floor(Math.random() * 0xffffff) .toString(16)}`;
       </pre>

      <h3></h3>
     <pre></pre>

    参考地址； https://mp.weixin.qq.com/s/gfD4OdB48uc_Klw4kIUQeA
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  name: '',
  setup() {
    onMounted(() => {
      // const copyToClipboard = (text) => navigator.clipboard?.writeText && navigator.clipboard.writeText（text）;
      // copyToClipboard("Hello World!")
    })
    return {}
  },
}
</script>

