<script setup lang="ts">
import BaseContainer from "@/components/BaseContainer/BaseContainer.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseSwiper from "@/components/BaseSwiper/BaseSwiper.vue";
import SidebarDrawer from "@/components/SidebarDrawer/SidebarDrawer.vue";
import Modal from "@/components/Modal/Modal.vue";
import Loading from "@/components/Loading/Loading.vue";
import Tip from "./components/Tip/Tip.vue";
import { useTipStore } from "@/stores/Tip/Tip";

const route = useRoute();
const isHome = computed(() => route.path === "/");
const tipStore = useTipStore();
</script>

<template>
  <Navbar />
  <BaseSwiper v-if="isHome" />
  <div class="pb-12">
    <BaseContainer>
      <router-view></router-view>
    </BaseContainer>
  </div>
  <SidebarDrawer />
  <Modal />
  <Loading />
  <Tip v-if="tipStore.isShow" />
</template>

<style scoped></style>
