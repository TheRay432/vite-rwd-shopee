<script setup lang="ts">
import IconButton from "@/components/IconButton/IconButton.vue";

const model = defineModel<string>();
const handleDecrease = () => {
  if (Number(model.value) <= 1) return;
  model.value = String(Number(model.value) - 1);
};
</script>
<template>
  <div class="flex mx-2">
    <IconButton
      :icon="'bi bi-dash'"
      :icon-color="'text-gray-400'"
      is-need-border
      @click-event="handleDecrease"
    />
    <input type="number" class="border outline-none w-20" v-model="model" />
    <IconButton
      :icon="'bi bi-plus-lg'"
      :icon-color="'text-gray-400'"
      is-need-border
      @click-event="() => (model = String(Number(model) + 1))"
    />
  </div>
</template>
<style lang="scss" scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
