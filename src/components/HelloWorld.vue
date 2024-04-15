<script setup lang="ts">
import { ref } from 'vue'
import init, { greet } from "wasm/@jinyinqiao/hello/pkg/hello.js";

/* 声明该组件需要接收的props，它需要传递一个包含props字段的对象，每个字段表示该props的默认值和类型等信息 */
defineProps<{ msg: string }>()

const count = ref(0)

const click = function () {
  count.value = count.value + 1
  init().then(() => {
        greet();
  });
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="click">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
wasm/@jinyinqiao/hello/pkg/hello.js