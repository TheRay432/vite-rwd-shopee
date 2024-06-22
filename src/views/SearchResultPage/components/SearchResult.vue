<script setup lang="ts">
import { ref } from "vue";
import {
  SearchButtonGroupEnum,
  stringToSearchButtonGroupEnum,
} from "../enum/index-enum";
import IconButton from "@/components/IconButton/IconButton.vue";
import type { ButtonGroupOption } from "@/components/Button/class/index-obj";
import Card from "@/components/Card/Card.vue";

import { onMounted } from "vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import { CardObj } from "@/components/CardGroup/class/index-obj";
import ButtonGroup from "@/components/Button/ButtonGroup/ButtonGroup.vue";
import CardGroup from "@/components/CardGroup/CardGroup.vue";
import { useSidebarStore } from "@/stores/Sidebar/Sidebar";

import { useProductsStore } from "@/stores/Products/Products";
import { getSearchProductsData } from "@/api/Products/Product";

const productStore = useProductsStore();

const route = useRoute();

const searchText = ref(route.query.keyword || "");
console.log("123", searchText.value);

/** 頁籤 - 預設為綜合排名 */
const tab = ref(SearchButtonGroupEnum.Composite);

/** 頁籤切換事件 */
function handleTabChange(type: SearchButtonGroupEnum) {
  tab.value = type;
}

const tabList = ref<ButtonGroupOption[]>([
  { id: stringToSearchButtonGroupEnum("composite"), content: "綜合排名" },
  { id: stringToSearchButtonGroupEnum("new"), content: "最新商品" },
  { id: stringToSearchButtonGroupEnum("popular"), content: "熱銷商品" },
]);

/** 所有產品資料 */
const productList = ref<CardObj[]>([]);
/** 是否顯示 */
const isShow = ref(false);
/** 側邊欄store */
const sidebarStore = useSidebarStore();

watch(
  () => route.query.keyword,
  async (newVal) => {
    searchText.value = newVal as string;
    const res = await getSearchProductsData();
    productStore.productList = res.data;
  }
);
onMounted(async () => {
  // productList.value = new Array(99).fill("0").map((_, index) => {
  //   return new CardObj(
  //     index.toString(),
  //     index === 0
  //       ? "測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品測試商品"
  //       : "這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳",
  //     "https://bruce-fe-ec.web.app/images/item.png",
  //     (2000 + index).toString(),
  //     (1000 + index).toString(),
  //     index % 2 === 0 ? "雙11優惠" : ""
  //   );
  // });
  const res = await getSearchProductsData();
  productStore.productList = res.data;
  isShow.value = true;
});

/** 打開篩選彈窗 */
function handleOpen(): void {
  sidebarStore.showSidebar();
}
</script>
<template>
  <!-- 搜尋結果 -->
  <div class="flex justify-between">
    <div class="flex items-center">
      <IconButton
        :icon="'bi bi-lightbulb'"
        :icon-size="'large'"
        :icon-color="'text-black'"
      />
      <p>
        <span class="text-orange me-1 font-bold">{{
          searchText || "全部"
        }}</span
        >的搜尋結果
      </p>
    </div>
    <IconButton
      class="block md:hidden"
      :icon="'bi bi-filter'"
      :icon-size="'large'"
      :icon-color="'text-orange'"
      @click-event="() => handleOpen()"
    />
  </div>
  <!-- 按鈕群組區域 -->
  <ButtonGroup
    class="mx-2"
    :data="tabList"
    :tab="tab"
    @tab-change="(type) => handleTabChange(type)"
  />
  <!-- 卡片與分頁器 -->
  <div class="mx-2">
    <CardGroup
      v-if="productStore.productList.length"
      :product-list="productStore.productList"
    />
  </div>
</template>
