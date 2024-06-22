<script setup lang="ts">
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import test1 from "@/assets/image/test1.jpg";
import { ref } from "vue";
const images = ref([
  test1,
  "https://bruce-fe-ec.web.app/images/banner.png",
  "https://bruce-fe-ec.web.app/images/banner.png",
  "https://bruce-fe-ec.web.app/images/banner.png",
]);
const modules = [Autoplay, Pagination, Navigation];
</script>
<template>
  <div class="my-swiper">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3500 }"
      pagination
      navigation
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="flex items-center justify-center"
      >
        <img
          :src="image"
          alt="Image Slide"
          class="w-full h-full object-cover"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped lang="scss">
.my-swiper {
  @apply w-full h-96;
}

.swiper-slide img {
  @apply w-full h-96 object-cover;
}
</style>
