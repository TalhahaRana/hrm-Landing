<template>
  <div id="app">
    <Navbar />
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/nav/Navbar.vue';
import Footer from '@/components/nav/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>
