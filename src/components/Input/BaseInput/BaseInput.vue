<script setup lang="ts">
import { ErrorMessage, Field as VField } from "vee-validate";
import { InputType } from "../enum/index-enum";
import type { BaseInputProps } from "../interface";

const props = withDefaults(defineProps<BaseInputProps>(), {
  /** 預設顯示文字 */
  placeholder: "請輸入欄位",
  /** input類型 */
  inputType: InputType.Text,
});
const model = defineModel<string>();
</script>
<template>
  <div class="flex flex-col">
    <v-field
      class="w-full px-4 py-2 h-8 rounded-md border border-gray-300 outline-none focus:shadow-boxOrange focus:ring-orange focus:border-orange relative"
      :class="{ 'border-red-500': errors[name] }"
      :id="name"
      :name="name"
      :type="inputType"
      :rules="rules"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="model"
    />
    <ErrorMessage class="text-red-500" :name="name" />
  </div>
</template>
