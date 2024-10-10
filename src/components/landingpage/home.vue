<template>
    <div>
    <Navbar/>
      <h1>Welcome to the Landing Page!</h1>
   <Footer/>
    </div>
  </template>

  <script>
import Navbar from '../nav/Navbar.vue'
import Footer from '../nav/Footer.vue'
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
  