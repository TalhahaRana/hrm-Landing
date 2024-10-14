<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <!-- Card 1 -->
      <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
        <div class="card card-startups">
          <div class="card-body">
            <img
              src="../../assets/images/icon1.png"
              class="icon"
              alt="Icon 1"
            />
            <h3 class="heading">Mobile Attendance</h3>
            <p class="text">
              Empower your employees to clock in & clock out daily with their
              exact locations & submit daily timesheets. Track employee
              attendance so easily.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
        <div class="card card-payroll">
          <div class="card-body">
            <img
              src="../../assets/images/icon2.png"
              class="icon"
              alt="Icon 2"
            />
            <h3 class="heading">Reports & Analytics</h3>
            <p class="text">
              Get a complete analytical overview of employee work hours,
              absenteeism & overtime with demographic filtration, with advanced
              scheduling.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
        <div class="card card-attendance">
          <div class="card-body">
            <img
              src="../../assets/images/icon3.png"
              class="icon"
              alt="Icon 3"
            />
            <h3 class="heading">Roster Management</h3>
            <p class="text">
              Define shifts & manage rosters. Supports unlimited, flexible &
              split shifts, including midnight crossovers, with advanced
              scheduling.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div class="card card-performance">
          <div class="card-body">
            <img
              src="../../assets/images/icon4.png"
              class="icon"
              alt="Icon 4"
            />
            <h3 class="heading">Device Integration</h3>
            <p class="text">
              Connect effortlessly to any automated biometric device, including
              fingerprint scanning, facial & iris recognition for a seamless
              employee experience.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div class="card card-leave">
          <div class="card-body">
            <img
              src="../../assets/images/icon5.png"
              class="icon"
              alt="Icon 5"
            />
            <h3 class="heading">Overtime Management</h3>
            <p class="text">
              Track employee overtime & ensure they get compensated accurately.
              Calculate single, double, or even triple overtime both.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Main container styling */
.container-fluid {
  padding: 20px;
}

/* Base Card Styling */
.card {
  background-color: #f5fafd;
  border: none;
  border-radius: 8px;
  display: flex;
  text-align: start;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card:hover {
  background-color: lightblue;
}

/* Flexbox for Card Body */
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

/* Icon Styling */
.icon {
  width: 33px;
  height: 33px;
  margin-bottom: 10px;
}

/* Heading Styling */
.heading {
  color: #282f4c;
  font-family: "Poppins", Sans-serif;
  font-size: 1.5625rem;
  font-weight: 700;
  line-height: 1.1em;
}

/* Card text styling */
.text {
  font-family: "Sintony", Sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: 0rem;
}

/* Responsive Layout for Smaller Screens */
@media (max-width: 768px) {
  .card {
    width: 100%;
    height: auto;
  }

  .heading {
    font-size: 1rem;
  }

  .text {
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .icon {
    width: 30px;
    height: 30px;
  }

  .heading {
    font-size: 0.9rem;
  }

  .text {
    font-size: 0.75rem;
  }
}
</style>
