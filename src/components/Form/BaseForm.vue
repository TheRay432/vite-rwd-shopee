<script setup lang="ts">
import { Form as VForm } from "vee-validate";

const emit = defineEmits<{
  submitEvent: [data: any];
}>();

function handelSubmit(data: any): void {
  emit("submitEvent", data);
}
</script>
<template>
  <v-form @submit="handelSubmit" v-slot="{ errors }">
    <slot :errors="errors"></slot>
  </v-form>
</template>
