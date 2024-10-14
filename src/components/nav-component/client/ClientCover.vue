<template>
  <div class="cover-section"></div>
</template>

<script>
export default {
  name: "ClientCover",
};
</script>

<style scoped>
.cover-section {
  background-image: url("@/assets/images/cover.png");
  background-size: cover;
  background-position: center;
  /* height: 530px; */
  border-radius: 4px;
  padding: 19vw 0; /* Responsive padding */
  color: #242222;
  margin: 0 10px;
}
</style>
