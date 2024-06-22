<script setup lang="ts">
import { ref } from "vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import InputRange from "../Input/InputRange/InputRange.vue";
import InputCheclboxGroup from "../Input/InputCheclboxGroup/InputCheclboxGroup.vue";

/** 假資料,之後call api */
const condition = ref([
  {
    id: "cagotory",
    name: "分類",
    value: [
      { id: "1", value: "家電類" },
      { id: "2", value: "家具類" },
      { id: "3", value: "服飾類" },
      { id: "4", value: "食品類" },
      { id: "5", value: "其他" },
    ],
  },
  {
    id: "place",
    name: "出貨地點",
    value: [
      { id: "6", value: "國內" },
      { id: "7", value: "海外" },
    ],
  },
]);
/** 選取的項目 */
const selectList = ref<string[]>([]);
/** 套用查詢條件事件 */
function handelFilter(min: string, max: string): void {
  console.log("min:", min, "max:", max);
}
</script>
<template>
  <!-- 標題 -->
  <div class="flex items-center">
    <IconButton
      :icon-position="'left'"
      :icon="'bi bi-menu-button-wide'"
      :icon-size="'large'"
      :icon-color="'text-black'"
    />
    <p>條件篩選</p>
  </div>
  <div>
    <!-- 篩選項目 -->
    <template v-for="conditionItem in condition" :key="conditionItem.id">
      <InputCheclboxGroup :data="conditionItem" v-model="selectList" />
    </template>
    <!-- 測試選取項目 -->
    <!-- {{ selectList }} -->
    <!-- 價格區間元件 -->
    <InputRange
      @click-event="(min:string, max: string) => handelFilter(min, max)"
    />
  </div>
</template>
