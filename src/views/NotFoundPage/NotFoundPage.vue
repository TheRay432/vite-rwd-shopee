<script setup lang="ts">
import nodata from "@/assets/image/error.svg";
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <img class="w-80 h-80" :src="nodata" alt="" />
    <h1 class="font-bold text-2xl">
      你在找尋的頁面不存在。請檢察網址是否正確，或是回到首頁重新瀏覽網站
    </h1>
  </div>
</template>
