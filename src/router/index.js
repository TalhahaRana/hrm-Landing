import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/landingpage/home.vue"; // Ensure this path is correct
import Blogs from "@/components/nav-component/resources/Blogs.vue";
import MihcmLite from "@/components/products/MihcmLite.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/mihcm",
    name: "MihcmLite",
    component: MihcmLite,
  },

  // Add more routes as necessary
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
