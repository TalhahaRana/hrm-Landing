import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/landingpage/home.vue'; // Ensure this path is correct

const routes = [
    { path: '/', name: 'home', component: Home },
    {
        path: '/whymihcm',
        name: 'whymihcm',
        component: () =>
            import ('../components/nav-component/company/WhyMiHCM.vue')
    },

    {
        path: '/legal-notice',
        name: 'legalnotice',
        component: () =>
            import ('../components/legal/LegalNotice.vue')
    },
    // Add more routes as necessary
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;