<script setup lang="ts">
import { ref } from "vue";
import test1 from "@/assets/image/test1.jpg";
import ButtonSize from "@/components/Button/ButtonSize/ButtonSize.vue";
import IuputNumber from "@/components/Input/InputNumber/InputNumber.vue";
import ButtonFill from "@/components/Button/ButtonFill/ButtonFill.vue";
import { onMounted } from "vue";
import type { IProductItem } from "./class/index-obj";
import { getProductItemData } from "@/api/Products/Product";
import { formatMoney } from "@/shared/utils/number/number-util";
import { useCartStore } from "@/stores/Cart/Cart";
import { useTipStore } from "@/stores/Tip/Tip";

const productList = ref<IProductItem>();
const selectItem = ref<any>(null);
const isCehck = ref(false);
const cartStore = useCartStore();
const tipStore = useTipStore();
const handelSelectItem = (data: any) => {
  selectItem.value = data;
};
onMounted(async () => {
  const res = await getProductItemData();
  productList.value = res.data;
});
const number = ref("1");

function handleAddCart(): void {
  isCehck.value = true;
  if (!selectItem.value) return;
  productList.value
    ? cartStore.addProudctToCart({ ...productList.value, amount: number.value })
    : "";
  tipStore.showTip("add");
}
</script>
<template>
  <div class="my-4 p-4 shadow-md flex items-stretch">
    <div class="shrink w-80">
      <img
        class="object-contain w-full h-full shrink inset-y-0"
        :src="productList?.productImg"
        alt=""
      />
    </div>
    <div class="ml-4 flex flex-col grow flex-1">
      <h1>{{ productList?.productTitle }}</h1>
      <h1 class="text-orange text-2xl font-bold mt-4 p-4">
        ${{ formatMoney(productList?.productPrice) }}
      </h1>
      <div class="bg-gray-50 p-4">
        <!-- 尺寸 -->
        <div class="flex">
          <p class="w-1/5">口味</p>
          <div class="">
            <template v-for="item in productList?.taste" :key="item">
              <ButtonSize
                class="mx-2"
                :data="item"
                :select-data="selectItem"
                @click-event="(data) => handelSelectItem(data)"
              />
            </template>
          </div>
        </div>
        <!-- 數量 -->
        <div class="flex mt-4">
          <p class="w-1/5">數量</p>
          <IuputNumber v-model="number" />
        </div>
        <p v-if="isCehck && !selectItem" class="pt-4 text-red-500">
          請選擇商品規格
        </p>
      </div>
      <ButtonFill
        class="mt-auto"
        :data-option="{ content: '加入購物車', icon: 'bi bi-cart-plus' }"
        @click-event="handleAddCart"
      />
    </div>
  </div>
</template>
