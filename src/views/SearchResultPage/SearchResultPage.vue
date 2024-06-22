<script setup lang="ts">
import FilterCondition from "@/components/FilterCondition/FilterCondition.vue";
import SearchResult from "./components/SearchResult.vue";
</script>
<template>
  <div class="flex mt-4">
    <div class="hidden md:block md:w-[20%] pe-4">
      <FilterCondition />
    </div>
    <div class="w-full md:w-[80%]">
      <SearchResult />
    </div>
  </div>
</template>
