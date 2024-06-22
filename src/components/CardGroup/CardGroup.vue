<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { CardObj } from "./class/index-obj";
import Paginator from "@/components/Paginator/Paginator.vue";
import Card from "@/components/Card/Card.vue";
import router from "@/router";

const props = defineProps<{
  productList: CardObj[];
}>();

/** 現在分頁 */
const currentPage = ref(1);
/** 每頁顯示幾個產品 */
const perPage = 20;
/** 是否顯示 */
const isShow = ref(false);

/** 每頁顯示的產品資料 */
const displayList = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.productList.slice(start, end);
});

/** 分頁變更事件 */
function handelPageChange(page: number) {
  currentPage.value = page;
}

onMounted(async () => {
  // const res = await getProductsData();
  // productList.value = res.data;

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
  isShow.value = true;
});
</script>
<template>
  <template v-if="isShow">
    <!-- 卡片 -->
    <div class="-mx-2 my-4 flex flex-wrap">
      <template v-for="item in displayList" :key="item.productId">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2 h-full">
          <Card
            :data="item"
            @click-event="
              router.push({
                name: 'products',
                params: { id: item.productId },
              })
            "
          />
        </div>
      </template>
    </div>
    <!-- 分頁器 -->
    <Paginator
      :data-length="productList.length"
      :per-page="perPage"
      @page-change="(page) => handelPageChange(page)"
    />
  </template>
</template>
