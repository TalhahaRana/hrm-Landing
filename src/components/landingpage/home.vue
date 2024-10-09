<template>
    <div>
      <Navbar />
      <h1>Welcome to the Landing Page!</h1>
      <Foooter/>
    </div>
  </template>

  <script>
  import Navbar from '@/components/nav/Navbar.vue';
  import Foooter from '@/components/nav/Footer.vue';

  export default {
    components: {
      Navbar,
      Foooter,
    },
  };
  </script>

  <style scoped>
  /* Custom styles for the landing page */
  </style>
