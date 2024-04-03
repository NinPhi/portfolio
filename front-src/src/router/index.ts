import PortfolioView from "@/views/PortfolioView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "portfolio",
      component: PortfolioView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (savedPosition) {
        return savedPosition;
      }

      return {
        top: 96,
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
