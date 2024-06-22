<script setup lang="ts">
import BaseForm from "@/components/Form/BaseForm.vue";
import { ref } from "vue";
import { getLengthValidate } from "@/shared/validate/index";
import { IButtonSize } from "@/components/Button/enum/index-enum";
import BaseInput from "../BaseInput/BaseInput.vue";
import ButtonFill from "@/components/Button/ButtonFill/ButtonFill.vue";

const emit = defineEmits<{
  /** 按鈕點擊事件 */
  clickEvent: [minPrice: string, maxPrice: string];
}>();
const minPrice = ref("");
const maxPrice = ref("");
/** 套用事件-檢核過才執行 */
const handleSubmit = () => {
  emit("clickEvent", minPrice.value, maxPrice.value);
};
</script>
<template>
  <BaseForm @submit-event="() => handleSubmit()" v-slot="{ errors }">
    <div class="flex items-center w-full">
      <div class="w-5/12">
        <BaseInput
          :name="'minPrice'"
          :placeholder="'最低價'"
          :errors="errors"
          :rules="getLengthValidate('請輸入數字')"
          v-model="minPrice"
        />
      </div>
      <div class="w-2/12 h-[0.5px] bg-gray-400 mx-4"></div>
      <div class="w-5/12">
        <BaseInput
          :name="'maxPrice'"
          :placeholder="'最高價'"
          :errors="errors"
          :rules="getLengthValidate('請輸入數字')"
          v-model="maxPrice"
        />
      </div>
    </div>
    <ButtonFill
      class="my-2"
      :size="IButtonSize.full"
      :data-option="{ content: '套用' }"
    />
  </BaseForm>
</template>
