import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/landingpage/home.vue'; 
import Blogs from '@/components/nav-component/resources/Blogs.vue';
import BoardDirectors from '@/components/nav-component/company/BoardDirectors.vue'
import Carrers from '@/components/nav-component/company/Carrers.vue';
const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path:'/blogs', name:'Blogs', component: Blogs
  },
  {
    path:'/board-of-directors', component: BoardDirectors
  },
  {
    path:'/careers' ,component: Carrers
  }
  
  // Add more routes as necessary
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
