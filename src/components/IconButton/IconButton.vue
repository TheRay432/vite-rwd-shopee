<script setup lang="ts">
import type { IconButtonProps } from "./class/index-obj";

withDefaults(defineProps<IconButtonProps>(), {
  isNeedBorder: false,
  iconSize: "normal",
  iconColor: "text-white",
  iconPosition: "center",
});
const emit = defineEmits(["clickEvent"]);
</script>
<template>
  <i
    class="rounded-md w-12 cursor-pointer"
    :class="{
      border: isNeedBorder,
      [icon]: !!icon,
      [iconSize]: true,
      [iconColor]: true,
      [iconPosition]: true,
    }"
    @click.prevent="() => emit('clickEvent')"
  >
  </i>
</template>
<style scoped lang="scss">
.normal {
  @apply text-lg;
}
.large {
  @apply text-2xl;
}
.left {
  @apply text-left;
}
.center {
  @apply text-center;
}
.right {
  @apply text-right;
}
</style>
