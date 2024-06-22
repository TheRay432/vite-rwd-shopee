<script setup lang="ts">
import ButtonFill from "@/components/Button/ButtonFill/ButtonFill.vue";
import { useCartStore } from "@/stores/Cart/Cart";
import { formatMoney } from "@/shared/utils/number/number-util";
import { useTipStore } from "@/stores/Tip/Tip";

const cartStore = useCartStore();
const tipStore = useTipStore();

function handleDelete(id: string): void {
  tipStore.showTip("delete");
  cartStore.cart = cartStore.cart.filter((item) => item.productId !== id);
}
</script>
<template>
  <div class="flex items-center gap-x-4 border-b border-gray-400 pb-4">
    <i class="bi bi-cart-plus text-2xl"></i>
    <h1 class="text-2xl">購物車</h1>
  </div>

  <div
    class="flex justify-between items-center mt-4 border-b border-gray-200 pb-4"
    v-for="item in cartStore.cart"
    :key="item.productId"
  >
    <div class="flex items-center gap-x-4 grow w-1/2">
      <img class="object-contain w-20" :src="item.productImg" alt="" />
      <p class="w-1/2 text-wrap">{{ item.productTitle }}</p>
      <p class="ml-4">x {{ formatMoney(item.amount) }}</p>
    </div>
    <div class="flex items-center justify-end gap-x-4 grow w-1/2">
      <p class="text-orange">${{ formatMoney(item.productPrice) }}</p>
      <i
        class="text-lg bi bi-trash-fill text-orange cursor-pointer"
        @click="() => handleDelete(item.productId)"
      ></i>
    </div>
  </div>
  <div class="flex justify-between items-center mt-4">
    <p>
      共<span class="text-orange">{{ cartStore.cart.length }}</span
      >筆商品
    </p>
    <ButtonFill
      v-if="cartStore.cart.length"
      :data-option="{ content: '去買單' }"
    />
  </div>
</template>
