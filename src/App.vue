<template>
  <div id="app">
    <Navbar />
    <home />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/nav/Navbar.vue';
import Footer from '@/components/nav/Footer.vue';
import home from '@/components/landingpage/Home.vue';

export default {
  components: {
    Navbar,
    home,
    Footer
  },
};
</script>
