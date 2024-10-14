
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/landingpage/home.vue'; 
import Blogs from '@/components/nav-component/resources/Blogs.vue';
import BoardDirectors from '@/components/nav-component/company/BoardDirectors.vue'
import Carrers from '@/components/nav-component/company/Carrers.vue';
import AboutUs from '@/components/nav-component/company/AboutUs.vue'
import NewsRoom from '@/components/nav-component/company/NewsRoom.vue'
import MainClient from "@/components/nav-component/client/MainClient.vue";
import MihcmLite from "@/components/products/MihcmLite.vue";
import ContactUs from "@/components/nav-component/company//Contact/ContactUs.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path:'/blogs', name:'Blogs', component: Blogs
  },  { path: "/MainClient", name: "MainCLient", component: MainClient },
  { path: "/ContactUs", name: "ContactUs", component: ContactUs },
  {
    path:'/about-us', name:'AboutUs', component: AboutUs
  },
    {
    path: "/mihcm",
    name: "MihcmLite",
    component: MihcmLite,
  },
  {
    path:'/news-room', name:'NewsRoom', component: NewsRoom
  },
  {
    path:'/board-of-directors', component: BoardDirectors
  },
  {
    path:'/careers' ,component: Carrers
  },
   {
     path: '/whymihcm', name: 'whymihcm', component: () => import ('../components/nav-component/company/WhyMiHCM.vue')
    },

    {
        path: '/legal-notice', name: 'legalnotice', component: () => import ('../components/legal/LegalNotice.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;