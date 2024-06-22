import { CardObj } from "@/components/CardGroup/class/index-obj";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  /** 商品資料  */
  const productList = ref<CardObj[]>([]);
  return { productList };
});
