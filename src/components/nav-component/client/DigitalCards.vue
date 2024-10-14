<template>
  <div>
    <!-- Card container section -->
    <div class="card-container">
      <h2 class="section-title">
        Enabling HR Digital Transformation for businesses with 100 to 20,000+
        employees across diverse industry verticals
      </h2>
      <div class="row">
        <!-- Static card 1 -->
        <div class="col-md-3 col-sm-6 mb-4">
          <div class="card custom-card">
            <div class="card-body">
              <h3 class="card-title">Companies</h3>
              <p class="card-text">1,000+</p>
            </div>
          </div>
        </div>
        <!-- Static card 2 -->
        <div class="col-md-3 col-sm-6 mb-4">
          <div class="card custom-card">
            <div class="card-body">
              <h3 class="card-title">Industries</h3>
              <p class="card-text">20+</p>
            </div>
          </div>
        </div>
        <!-- Static card 3 -->
        <div class="col-md-3 col-sm-6 mb-4">
          <div class="card custom-card">
            <div class="card-body">
              <h3 class="card-title">Partner Presence</h3>
              <p class="card-text">15+</p>
            </div>
          </div>
        </div>
        <!-- Static card 4 -->
        <div class="col-md-3 col-sm-6 mb-4">
          <div class="card custom-card">
            <div class="card-body">
              <h3 class="card-title">Markets</h3>
              <p class="card-text">20+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importing ClientCover component
</script>

<style scoped>
.card-container {
  text-align: center;
  margin: 20px 8px;
  padding: 40px;
  background: linear-gradient(90deg, #f3f4fa, #f7dfc8);
  border-radius: 15px;
}

.section-title {
  font-size: 1.95rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #2442a3;
}

/* Bootstrap card customization */
.custom-card {
  position: relative;
  background-color: #2442a3;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  min-height: 200px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;
}

.custom-card:hover {
  transform: scale(1.05);
}

/* Card title and text */
.section-title {
  font-size: 2.3rem;
  margin-top: 14px;
  font-weight: bold;
}
.card-title {
  text-align: left;
  margin-left: 15px;
  font-size: 1.5rem;
  margin-top: 39px;
  margin-bottom: 8px;
}

.card-text {
  text-align: left;
  margin-left: 15px;
  font-size: 1.8rem;
  font-weight: bold;
}

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 576px) {
  .section-title {
    font-size: 1.3rem;
  }
  .card-title {
    font-size: 1.2rem;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .card-text {
    font-size: 1.4rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.6rem;
  }
  .card-title {
    font-size: 1.3rem;
    margin-top: 25px;
    margin-bottom: 6px;
  }

  .card-text {
    font-size: 1.5rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (max-width: 992px) {
  .card-title {
    font-size: 1.4rem;
    margin-top: 30px;
    margin-bottom: 7px;
  }

  .card-text {
    font-size: 1.6rem;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .card-title {
    font-size: 1.5rem;
    margin-top: 39px;
    margin-bottom: 8px;
  }

  .card-text {
    font-size: 1.8rem;
  }
}

/* Background icon styling */
.custom-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center;
  opacity: 0.15;
  z-index: 1;
}

/* Different background images for each card */
.col-md-3:nth-child(1) .custom-card::before {
  background-image: url("@/assets/images/building5.png"); /* Replace with actual path */
  height: 200px;
  width: 200px;
  margin-inline-start: 125px;
}

.col-md-3:nth-child(2) .custom-card::before {
  background-image: url("@/assets/images/industry2.png"); /* Replace with actual path */
  height: 200px;
  width: 200px;
  margin-inline-start: 125px;
}

.col-md-3:nth-child(3) .custom-card::before {
  background-image: url("@/assets/images/partner2.png"); /* Replace with actual path */
  height: 260px;
  width: 200px;
  margin-inline-start: 125px;
}

.col-md-3:nth-child(4) .custom-card::before {
  background-image: url("@/assets/images/market2.png"); /* Replace with actual path */
  height: 200px;
  width: 200px;
  margin-inline-start: 125px;
}

/* Ensuring the text stays on top of the background */
.card-body {
  position: relative;
  z-index: 2;
}
</style>
