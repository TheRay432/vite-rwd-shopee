import type { IProductItem } from "@/views/ProductPage/class/index-obj";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("Cart", () => {
  const cart = ref<IProductItem[]>([
    {
      productId: "0",
      productImg:
        "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productTitle: "測試商品",
      productPrice: "1500",
      amount: "1",
      taste: ["口味一", "口味二"],
    },
  ]);
  function addProudctToCart(product: IProductItem) {
    cart.value.push(product);
  }
  return { cart, addProudctToCart };
});
