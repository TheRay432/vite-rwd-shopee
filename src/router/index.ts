import App from "@/App.vue";
import HomePage from "@/views/HomePage/HomePage.vue";
import NotFoundPage from "@/views/NotFoundPage/NotFoundPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/search",
      component: () => import("@/views/SearchResultPage/SearchResultPage.vue"),
    },
    {
      path: "/products/:id",
      name: "products",
      component: () => import("@/views/ProductPage/ProductPage.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: NotFoundPage,
    },
  ],
});

export default router;
