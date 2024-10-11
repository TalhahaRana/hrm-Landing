<template>
  <div id="app">

    <Nav/>
    <router-view></router-view>
    <Footer/>
  </div>

</template>

<script>
import Nav from './components/nav/Navbar.vue';
import Footer from './components/nav/Footer.vue';



export default {
  components: {

    Nav,
    Footer
  },
};
</script>
