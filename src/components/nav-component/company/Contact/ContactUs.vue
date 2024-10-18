<script setup lang="ts">
import ContactForm from "./ContactForm.vue";
import CountryCards from "./CountryCards.vue";
import EventCards from "./EventCards.vue";
// import SetPassword from "./SetPassword.vue";
</script>
<template>
  <div>
    <section><ContactForm /></section>
    <section><CountryCards /></section>
    <section><EventCards /></section>
    <!-- <section><SetPassword /></section> -->
  </div>
</template>
<style>
html, body {
  overflow-x: hidden;
}
</style>