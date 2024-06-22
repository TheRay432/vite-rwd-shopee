<script setup lang="ts">
import { computed } from "vue";

import { IButtonSize } from "../enum/index-enum";
import type { IButtonProps } from "../class/index-obj";

const props = withDefaults(defineProps<IButtonProps>(), {
  bgColor: "bg-orange",
  size: IButtonSize.fitContent,
  isGroup: false,
  isSelect: false,
});

const emit = defineEmits<{
  /** 按鈕點擊事件 */
  clickEvent: [];
}>();

/** 按鈕背景色 */
const getBgColor = computed(() => {
  return props.isGroup ? checkIsSelect.value : props.bgColor;
});
/** 按鈕是否選取中 */
const checkIsSelect = computed(() => {
  return props.isSelect ? "bg-orange" : "";
});

/** 按鈕文字顏色 */
const textColor = computed(() => {
  return props.isGroup
    ? props.isSelect
      ? "text-white"
      : "text-orange"
    : "text-white";
});
</script>
<template>
  <button
    class="border-none ring-0 rounded-md py-2 px-3 flex items-center justify-center"
    :class="{
      'w-fit': size === IButtonSize.fitContent,
      'w-full': size === IButtonSize.full,
      [getBgColor]: true,
      [textColor]: true,
    }"
    @click.stop="emit('clickEvent')"
  >
    <i
      v-if="!!dataOption.icon"
      class="text-lg mr-2"
      :class="dataOption.icon"
    ></i>
    <p>{{ dataOption.content }}</p>
  </button>
</template>
