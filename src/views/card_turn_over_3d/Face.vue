<script setup>
import Reverse from "@/views/card_turn_over_3d/Reverse.vue";
</script>

<template>
  <!-- 定义卡片颜色和形状 -->
  <div
    class="w-96 rounded-3xl relative transform-style-3d duration-1000 perspective-origin-center hover:rotate-y-180 bg-gradient-to-br from-teal-300 from-10% via-sky-400 via-30% to-pink-300 to-90%"
  >
    <!-- 定义背面隐藏 -->
    <div class="absolute backface-hidden z-[2]">
      <h4 class="text-4xl mt-14 ml-40 font-semibold antialiased">正面</h4>
      <figure class="mt-8 ml-32 w-32 h-32 transform-gpu">
        <!-- 图片可自行在emojiall进行下载 -->
        <img
          src="../../assets/emoji/1f600.webp"
          alt="嘿嘿笑脸"
          class=""
        />
      </figure>
    </div>

    <Reverse />
  </div>
</template>

<style scoped></style>