<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid px-5">
      <!-- Brand Logo -->
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/images/logo.png" alt="Logo" height="60" >
      </router-link>

      <!-- Toggle button for mobile view -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse px-5" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>

          <!-- Dropdown Example for Products -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu" aria-labelledby="productsDropdown">
              <li><a class="dropdown-item" href="#">Product 1</a></li>
              <li><a class="dropdown-item" href="#">Product 2</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <!-- <router-link class="nav-link" to="/clients">Clients</router-link> -->
          </li>

          <!-- Dropdown Example for Resources -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
            </a>
            <ul class="dropdown-menu" aria-labelledby="resourcesDropdown">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">Case Studies</a></li>
            </ul>
          </li>

          <!-- Dropdown Example for Company -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="companyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="companyDropdown">
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Careers</a></li>
            </ul>
          </li>
        </ul>

        <!-- Call to Action Buttons -->
        <div class="d-flex">
          <button class="btn btn-orange me-2">Book a Demo</button>
          <button class="btn btn-blue">Speak to Us</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-brand img {
  height: 70px; /* Adjust based on your logo size */
}

.btn-orange {
  background-color: #f47920;
  color: white;
  border: none;
}

.btn-orange:hover {
  background-color: #e66918 !important;
}

.btn-blue {
  background-color: #203b90;
  color: white;
  border: none;
}

.btn-blue:hover {
  background-color: #1b3380;
}

.nav-link.active {
  color: #f47920 !important; /* Orange for the active link */
  font-weight: bold;
}
</style>
