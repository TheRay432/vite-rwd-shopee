<script setup lang="ts" generic="T">
import { computed, ref, onMounted } from "vue";
import type { InputCheckboxGroupProps } from "../interface";
import InputCheckbox from "../InputCheckbox/InputCheckbox.vue";

const props = defineProps<{
  data: InputCheckboxGroupProps;
}>();
/** 外部傳進來的-主要用來抓選取後的key值 */
const model = defineModel<string[]>();
/** 是否會出現更多/收合按鈕 */
const isMore = ref(false);
/** 控制按鈕名稱- true => 收起 false => 顯示更多 */
const isShowAll = ref(false);
/** 控制篩選小項中要顯示幾列 */
const maxVisibleItems = 4;
/** 預設會顯示的篩選小項資料 */
const dispalyList = computed(() => props.data.value.slice(0, maxVisibleItems));
/** 預設會隱藏的篩選小項資料 */
const hiddenList = computed(() => props.data.value.slice(maxVisibleItems));
/** 篩選小項資料高度 */
const hiddenHeight = computed(() => props.data.value.length * 20);

/** 顯示更多/收合按鈕點擊事件 */
function handleShowMore(): void {
  isShowAll.value = !isShowAll.value;
}

onMounted(() => {
  isMore.value = props.data.value.length > maxVisibleItems;
});
</script>
<template>
  <p class="font-bold my-2">{{ data.name }}</p>
  <template v-for="dispalyItem in dispalyList" :key="dispalyItem.id">
    <InputCheckbox
      :id="dispalyItem.id"
      :value="dispalyItem.value"
      v-model="model"
    />
  </template>
  <!-- 隱藏的checkbox區塊 -->
  <transition name="slide-fade">
    <div v-if="isShowAll">
      <div v-for="hiddenItem in hiddenList" :key="hiddenItem.id">
        <InputCheckbox
          :id="hiddenItem.id"
          :value="hiddenItem.value"
          v-model="model"
        />
      </div>
    </div>
  </transition>
  <!-- 顯示更多/收合 -->
  <div class="flex items-center" v-if="isMore">
    <i
      class="bi mr-2"
      :class="{
        'bi-caret-down-fill': !isShowAll,
        'bi-caret-up-fill': isShowAll,
      }"
    ></i>
    <p class="cursor-pointer" @click.stop="handleShowMore">
      {{ isShowAll ? "收起" : "顯示更多" }}
    </p>
  </div>
  <!-- 底線 -->
  <div class="w-2/3 h-[0.5px] bg-gray-400 my-4"></div>
</template>
<style scoped lang="css">
.slide-fade-enter-active {
  opacity: 1;
  transition: max-height 0.4s ease;
}
.slide-fade-leave-active {
  opacity: 0;
  transition: max-height 0.3s ease;
}

.slide-fade-enter-from {
  max-height: 0;
}
.slide-fade-enter-to {
  max-height: v-bind(hiddenHeight + "px");
}
.slide-fade-leave-from {
  max-height: v-bind(hiddenHeight + "px");
}
.slide-fade-leave-to {
  max-height: 0;
}
</style>
