<script setup lang="ts">
import { useLoadingStore } from '@/stores/Loading/Loading';



const loadingStore = useLoadingStore();
</script>
<template>
  <template v-if="loadingStore.isShow">
    <div className="loading_bg">
      <div className="loading_circle"></div>
    </div>
  </template>
</template>

<style scoped lang="scss">
.loading_bg {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-80  z-[150] flex justify-center items-center;
  & .loading_circle {
    @apply w-24 h-24 border-8 border-t-8 border-t-black border-solid border-gray-200 rounded-[50%] absolute animate-spin;
  }
}
</style>
