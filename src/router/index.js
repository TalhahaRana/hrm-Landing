import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/landingpage/home.vue'; // Ensure this path is correct

const routes = [
    { path: '/', name: 'home', component: Home },
    // Add more routes as necessary
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;