<script setup>
//引入组件VUE3组合式写法时，尽可能都写为setup属性，以方便直接引入子组件
import Face from "@/views/card_turn_over_3d/Face.vue";
</script>

<template>
    <!-- 这里的 "lg:h-450"  指在tailwind配置文件中 自定义默认主题扩展样式-->
    <!-- https://daisyui.com/components/card/ -->
    <div class="card card-side bg-slate-400 rounded-3xl shadow-2xl top-20 left-60 lg:h-450 w-96 perspective-1000">
      <Face/>
    </div>
</template>

<style scoped></style>
