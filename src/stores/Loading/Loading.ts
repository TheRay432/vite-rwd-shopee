import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore = defineStore("loading", () => {
  /** 是否顯示loading */
  const isShow = ref(false);
  /** 顯示loading */
  function showLoading(): void {
    isShow.value = true;
  }
  /** 關閉loading */
  function hideLoading(): void {
    isShow.value = false;
  }

  return {
    /** 是否顯示loading */
    isShow,
    showLoading,
    hideLoading,
  };
});
