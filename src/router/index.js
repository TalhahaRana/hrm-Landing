import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/landingPage/home.vue";
import MainClient from "@/components/nav-component/client/MainClient.vue";
import ContactUs from "@/components/nav-component/company//Contact/ContactUs.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/MainClient", name: "MainCLient", component: MainClient },
  { path: "/ContactUs", name: "ContactUs", component: ContactUs },
  // Add more routes as necessary
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
