import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/landingpage/home.vue'; // Ensure this path is correct
import Blogs from '@/components/nav-component/resources/Blogs.vue'
import AboutUs from '@/components/nav-component/company/AboutUs.vue'
import NewsRoom from '@/components/nav-component/company/NewsRoom.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path:'/blogs', name:'Blogs', component: Blogs
  },
  {
    path:'/about-us', name:'AboutUs', component: AboutUs
  },
  {
    path:'/news-room', name:'NewsRoom', component: NewsRoom
  }

  
  // Add more routes as necessary
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
