import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
  /** 是否顯示 */
  const isShow = ref(false);
  /** 隱藏側邊欄 */
  function hideSidebar(): void {
    isShow.value = false;
  }
  /** 顯示側邊欄 */
  function showSidebar(): void {
    isShow.value = true;
  }

  return { isShow, hideSidebar, showSidebar };
});
