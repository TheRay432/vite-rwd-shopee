<script setup lang="ts">
import { useModalStore } from "@/stores/Modal/modal";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const { modalConfig, isModalOpen } = storeToRefs(modalStore);
</script>

<template>
  <div class="modal-bg" :class="{ 'bg-active': modalStore.isModalOpen }">
    <div
      class="modal"
      :class="{
        'modal-active': isModalOpen,
        [modalConfig.borderColor]: isModalOpen,
        'border-t-4': modalConfig.borderColor,
      }"
    >
      <div class="w-full">
        <div class="w-full text-end">
          <i
            className="bi bi-x-circle cursor-pointer text-2xl"
            @click="modalStore.closeModal()"
          ></i>
        </div>
        <div
          class="overflow-y-auto scrollbar pr-4"
          :style="{ width: modalConfig.width, maxHeight: modalConfig.height }"
        >
          <component :is="modalStore.modalComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-bg {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 invisible opacity-0 z-[120] flex justify-center items-center;

  &.bg-active {
    @apply visible opacity-100;
  }
}

.modal {
  @apply bg-white shadow-card transform scale-50 flex flex-col py-8 pl-8 pr-4 overflow-y-auto;
  transition: transform 0.3s linear;

  &.modal-active {
    @apply scale-100;
  }
}
.scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #aaaaaa transparent;
}
</style>
