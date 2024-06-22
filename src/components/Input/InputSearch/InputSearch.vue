<script setup lang="ts">
const model = defineModel<string>();
const emit = defineEmits<{
  enterEvent: [];
}>();
</script>
<template>
  <input
    class="w-full mr-2 p-2 rounded-lg bg-white border-none focus:outline-none"
    type="search"
    placeholder="搜尋商品"
    aria-label="Search"
    v-model="model"
    autocomplete="off"
    @keyup.enter="emit('enterEvent')"
  />
</template>
