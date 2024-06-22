import { defineStore } from "pinia";
import { ref } from "vue";

export const useTipStore = defineStore("tip", () => {
  const isShow = ref(false);
  const showType = ref<"add" | "delete">("add");
  const showTip = (type: "add" | "delete") => {
    isShow.value = true;
    showType.value = type;
  };
  const hideTip = () => {
    isShow.value = false;
    showType.value = "add";
  };
  return { isShow, showTip, hideTip, showType };
});
