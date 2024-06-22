<script setup lang="ts">
import type ButtonFill from "@/components/Button/ButtonFill/ButtonFill.vue";
import { useModalStore } from "@/stores/Modal/modal";

const modalStore = useModalStore();
</script>
<template>
  <div class="flex flex-col justify-center items-center gap-y-4">
    <text-body2>{{ $t("系統異常，請稍後在試") }}</text-body2>
    <ButtonFill
      :data-option="{ content: '我知道了' }"
      @click-event="modalStore.closeModal()"
    />
  </div>
</template>
