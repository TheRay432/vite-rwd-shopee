<script setup lang="ts">
import { ref } from "vue";
import type { IButtonGroupProps } from "../class/index-obj";
import ButtonFill from "../ButtonFill/ButtonFill.vue";
import type { SearchButtonGroupEnum } from "@/views/SearchResultPage/enum/index-enum";

const props = defineProps<IButtonGroupProps>();

const emit = defineEmits<{
  tabChange: [type: SearchButtonGroupEnum];
}>();
/** 頁籤切換事件 */
function handleTabChange(type: SearchButtonGroupEnum) {
  emit("tabChange", type);
}
</script>
<template>
  <div class="p-2 bg-gray-200 rounded-md flex gap-x-2">
    <template v-for="item in data" :key="item.id">
      <ButtonFill
        :is-group="true"
        :is-select="tab === item.id"
        :data-option="{ content: item.content }"
        @click.stop="() => handleTabChange(item.id)"
      />
    </template>
  </div>
</template>
