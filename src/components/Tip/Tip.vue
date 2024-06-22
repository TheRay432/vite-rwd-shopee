<script setup lang="ts">
import { useTipStore } from "@/stores/Tip/Tip";
import { onMounted } from "vue";

const tipStore = useTipStore();
onMounted(() => {
  setTimeout(() => {
    tipStore.hideTip();
  }, 2500);
});
</script>
<template>
  <div
    class="fixed top-32 left-1/2 -translate-x-1/2 opacity-75 z-50 flex items-center gap-x-4 py-2 px-4 rounded-md text-white"
    :class="{
      'bg-green-500': tipStore.showType === 'add',
      'bg-red-500': tipStore.showType === 'delete',
    }"
  >
    <i class="bi bi-check-circle text-2xl"></i>
    <p>{{ tipStore.showType === "add" ? "已加入到購物車" : "已移除此商品" }}</p>
  </div>
</template>
