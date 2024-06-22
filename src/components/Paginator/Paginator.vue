<script setup lang="ts">
import { computed, ref } from "vue";
import type { PaginatorData } from "./class/index-obj";
import { watch } from "vue";

const props = defineProps<PaginatorData>();
const emit = defineEmits<{
  pageChange: [currenPage: number];
}>();

const totalItems = props.dataLength;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(totalItems / props.perPage));
watch(currentPage, () => {
  window.scrollTo(0, 0);
  emit("pageChange", currentPage.value);
});

const paginationRange = computed(() => {
  const totalDisplayedPages = 5;
  const range: any[] = [];
  let startPage = Math.max(
    currentPage.value - Math.floor(totalDisplayedPages / 2),
    1
  );
  let endPage = Math.min(startPage + totalDisplayedPages - 1, totalPages.value);
  console.log(startPage, endPage);

  if (startPage > 1) {
    range.push(1);
    if (startPage > 2) {
      range.push("...");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    range.push(i);
  }

  if (endPage < totalPages.value) {
    if (endPage < totalPages.value - 1) {
      range.push("...");
    }
    range.push(totalPages.value);
  }

  console.log(range);
  return range;
});

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>
<template>
  <div class="w-full">
    <div class="flex justify-center mt-4">
      <button
        class="px-4 py-2 bg-transparent text-gray-500"
        :disabled="currentPage === 1"
        @click="previousPage"
      >
        <i class="bi bi-chevron-compact-left"></i>
      </button>
      <button
        v-for="page in paginationRange"
        :key="page"
        class="px-4 py-2 rounded-sm"
        :class="{
          'bg-orange text-white': page === currentPage,
          'bg-transparent': page !== currentPage,
          'cursor-not-allowed': page === '...',
          'cursor-pointer': page !== '...',
          'text-white': page === currentPage,
          'text-gray-500': page !== currentPage,
        }"
        @click="page !== '...' && (currentPage = Number(page))"
      >
        {{ page }}
      </button>
      <button
        class="px-4 py-2 bg-transparent text-gray-500"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        <i class="bi bi-chevron-compact-right"></i>
      </button>
    </div>
  </div>
</template>
