<script setup lang="ts">
import { computed } from "vue";
import type { InputCheckboxGroupItem } from "../interface";


const props = defineProps<InputCheckboxGroupItem>();

/** 外部傳進來的-主要用來抓選取後的key值 */
const model = defineModel<string[]>();
/** 判斷是否已選取 */
const checked = computed(() => model.value?.includes(props.id));
/** checkbox選取事件 */
function handleClick(): void {
  checked.value
    ? (model.value = model.value?.filter((v) => v !== props.id))
    : (model.value = [...(model.value ?? []), props.id]);
}
</script>
<template>
  <div class="flex items-center my-4 cursor-pointer" @click.stop="handleClick">
    <input
      :id="id"
      type="checkbox"
      class="custom-checkbox cursor-pointer"
      :value="value"
      :name="id"
      :checked="checked"
    />
    <p class="text-sm ml-2">{{ value }}</p>
  </div>
</template>

<style scoped lang="scss">
.custom-checkbox {
  @apply appearance-none h-4 w-4 border border-gray-400 rounded-[0.25rem] cursor-pointer;
}

.custom-checkbox:checked {
  @apply bg-red-500 border-red-500 shadow-boxOrange;
}

.custom-checkbox:checked::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='white' stroke-width='2' d='M4 12l6 6L20 6'/%3E%3C/svg%3E");
  background-size: 1rem 1rem;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
