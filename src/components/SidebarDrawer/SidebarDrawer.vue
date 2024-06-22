<script setup lang="ts">
import { useSidebarStore } from "@/stores/Sidebar/Sidebar";
import FilterCondition from "../FilterCondition/FilterCondition.vue";
import IconButton from "../IconButton/IconButton.vue";

/** 側邊欄store */
const sidebarStore = useSidebarStore();
</script>
<template>
  <div
    class="fixed top-0 z-50 h-full bg-white w-[400px] max-w-full p-4 overflow-y-auto transition-all duration-500 ease-in-out"
    :class="{
      'left-0': sidebarStore.isShow,
      '-left-[400px]': !sidebarStore.isShow,
    }"
  >
    <div class="w-full flex justify-end">
      <IconButton
        :icon-color="'text-gray-500'"
        :icon="'bi bi-x-circle'"
        :icon-size="'large'"
        @click-event="() => sidebarStore.hideSidebar()"
      />
    </div>
    <FilterCondition />
  </div>
</template>
