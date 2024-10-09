import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import custom global styles (optional)
import '@/assets/main.css'; // If you have a global stylesheet

const app = createApp(App);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
