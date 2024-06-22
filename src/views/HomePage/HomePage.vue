<script setup lang="ts">
import { getProductsData } from "@/api/Products/Product";
import CardGroup from "@/components/CardGroup/CardGroup.vue";
import { CardObj } from "@/components/CardGroup/class/index-obj";
import { onMounted } from "vue";
import { ref } from "vue";

/** 所有產品資料 */
const productList = ref<CardObj[]>([]);

onMounted(async () => {
  const res = await getProductsData();
  productList.value = res.data;
});
</script>
<template>
  <div class="w-full">
    <div
      class="bg-white shadow-lg text-center py-4 border-b-4 border-b-orange text-orange"
    >
      <h1 class="font-bold">每日新發現</h1>
    </div>

    <CardGroup v-if="productList.length" :product-list="productList" />
  </div>
</template>
