<template>
  <!-- global offices cards  -->
  <div class="global-offices">
    <h2 class="title">MiHCM Global Offices</h2>
    <div class="container">
      <div class="row">
        <!-- Malaysia Card -->
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="office-card">
            <img
              src="@/assets/images/malasiya.jpg"
              alt="Malaysia"
              class="office-image"
            />
            <div class="overlay">
              <div class="office-details">
                <h3 class="office-name">Malaysia</h3>
                <p class="office-text">
                  Address: 123 Malaysia Street, Kuala Lumpur
                </p>
                <p class="office-text">Telephone: +60 123456789</p>
                <p class="office-text">Email: malaysia@mihcm.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sri Lanka Card -->
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="office-card">
            <img
              src="@/assets/images/sirilanka.jpg"
              alt="Sri Lanka"
              class="office-image"
            />
            <div class="overlay">
              <div class="office-details">
                <h3 class="office-name">Sri Lanka</h3>
                <p class="office-text">Address: 45 Colombo Street, Colombo</p>
                <p class="office-text">Telephone: +94 987654321</p>
                <p class="office-text">Email: srilanka@mihcm.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bangladesh Card -->
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="office-card">
            <img
              src="@/assets/images/bangladesh.jpg"
              alt="Bangladesh"
              class="office-image"
            />
            <div class="overlay">
              <div class="office-details">
                <h3 class="office-name">Bangladesh</h3>
                <p class="office-text">
                  Level 8, AR Tower, Kemal Ataturk Avenue, Dhaka 1213
                </p>
                <p class="office-text">Telephone: +880 1645890168</p>
                <p class="office-text">Email: bangladesh@mihcm.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pakistan Card -->
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="office-card">
            <img
              src="@/assets/images/lahore.jpg"
              alt="Pakistan"
              class="office-image"
            />
            <div class="overlay">
              <div class="office-details">
                <h3 class="office-name">Pakistan</h3>
                <p class="office-text">
                  Address: 78 Islamabad Avenue, Islamabad
                </p>
                <p class="office-text">Telephone: +92 3211234567</p>
                <p class="office-text">Email: pakistan@mihcm.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* global office css  */
.global-offices {
  margin-top: 480px;
  height: 400px;
  text-align: center;
  padding: 20px;
  background-color: #eefbff;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #3751ff;
  margin-bottom: 20px;
}

.office-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
  height: 100%; /* Make card height responsive */
}

.office-card:hover {
  transform: scale(1.05);
}

.office-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2; /* Ensure the overlay appears above the image */
}

.office-card:hover .overlay {
  opacity: 1;
}

.office-details {
  text-align: center;
  padding: 10px;
}

/* Responsive Text for Office Name */
.office-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.office-text {
  font-size: 1rem;
}

/* Adjust text sizes for smaller screens */
@media (max-width: 1440px) {
  .global-offices {
    margin-top: 500px;
  }
}
@media (max-width: 768px) {
  .global-offices {
    margin-top: 650px;
  }
  .title {
    font-size: 1.5rem;
  }

  .office-name {
    font-size: 1.25rem;
  }

  .office-text {
    font-size: 0.875rem;
  }
}

@media (max-width: 576px) {
  .title {
    font-size: 1.2rem;
  }

  .office-name {
    font-size: 1rem;
  }

  .office-text {
    font-size: 0.75rem;
  }
}
</style>
