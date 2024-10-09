<template>
    <div>
      <Nav />
      <h1>Welcome to the Landing Page!</h1>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/nav/Navbar.vue';
  import Footer from '@/components/nav/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for the landing page */
  </style>
  