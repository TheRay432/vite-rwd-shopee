<script setup lang="ts">
import type { IButtonSizeProps } from "../class/index-obj";

const props = defineProps<IButtonSizeProps>();
const emit = defineEmits<{
  clickEvent: [data: any];
}>();
function handleSelect(data: any): void {
  data === props.selectData
    ? emit("clickEvent", null)
    : emit("clickEvent", data);
}
</script>
<template>
  <button
    class="py-2 px-6 text-center border border-gray-300 rounded-md hover:border-orange hover:text-orange relative"
    :class="{
      'triangle-corner': data === selectData,
      'border-orange': data === selectData,
      'text-orange': data === selectData,
    }"
    @click="() => handleSelect(data)"
  >
    {{ data }}
  </button>
</template>
<style lang="scss" scoped>
.triangle-corner::after {
  @apply absolute bottom-0 right-0 border-l-[1rem] border-l-transparent border-b-[1rem] border-b-orange rounded-br-md;
  content: "";
}
</style>
