<script setup lang="ts">
import type { BannerProps } from "./class/index.obj";

defineProps<BannerProps>();
</script>
<template>
  <span
    class="absolute top-0 right-0 py-1 px-2 bg-orange text-xs rounded-md text-white"
  >
    {{ content }}
  </span>
</template>
