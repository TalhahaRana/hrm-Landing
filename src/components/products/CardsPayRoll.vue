<template>
  <div class="container-fluid">
    <div class="card-container">
      <!-- Card 1 -->
      <div class="card card-startups">
        <div class="card-body">
          <!-- Card icon -->
          <img
            src="../../assets/images/icon1.png"
            class="icon icon-startups"
            alt="Icon 1"
          />
          <!-- Card heading -->
          <h3 class="heading heading-startups">Country Statutory Compliance</h3>
          <!-- Card text -->
          <p class="text text-startups">
            Payroll software designed to handle country-specific compliances.
            Localised to suit the statutory requirements of any country with
            immediate changes.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card card-payroll">
        <div class="card-body">
          <!-- Card icon -->
          <img
            src="../../assets/images/icon2.png"
            class="icon icon-payroll"
            alt="Icon 2"
          />
          <!-- Card heading -->
          <h3 class="heading heading-payroll">Payroll Process Checklist</h3>
          <!-- Card text -->
          <p class="text text-payroll">
            Run a complete payroll checklist, including attendance & loans
            before you process salaries.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card card-attendance">
        <div class="card-body">
          <!-- Card icon -->
          <img
            src="../../assets/images/icon3.png"
            class="icon icon-attendance"
            alt="Icon 3"
          />
          <!-- Card heading -->
          <h3 class="heading heading-attendance">
            Integrated into Time & Attendance
          </h3>
          <!-- Card text -->
          <p class="text text-attendance">
            Seamlessly integrates into our attendance management system &
            ensures automatic attendance & overtime calculations.
          </p>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="card card-performance">
        <div class="card-body">
          <!-- Card icon -->
          <img
            src="../../assets/images/icon4.png"
            class="icon icon-performance"
            alt="Icon 4"
          />
          <!-- Card heading -->
          <h3 class="heading heading-performance">Reconciliation Analysis</h3>
          <!-- Card text -->
          <p class="text text-performance">
            Conduct reconciliation between allowances, deductions & overtime to
            ensure everything runs smoothly.
          </p>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="card card-leave">
        <div class="card-body">
          <!-- Card icon -->
          <img
            src="../../assets/images/icon5.png"
            class="icon icon-leave"
            alt="Icon 5"
          />
          <!-- Card heading -->
          <h3 class="heading heading-leave">Payroll Reports</h3>
          <!-- Card text -->
          <p class="text text-leave">
            Access monthly statutory, attendance & leave reports to efficiently
            check absence without leave, daily absenteeism & more.
          </p>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="card card-analytics">
        <div class="card-body">
          <!-- Card icon -->
          <img
            src="../../assets/images/icon6.png"
            class="icon icon-analytics"
            alt="Icon 6"
          />
          <!-- Card heading -->
          <h3 class="heading heading-analytics">Remittance & Payslips</h3>
          <!-- Card text -->
          <p class="text text-analytics">
            Easily download the payroll file & upload it to any bank. MiHCM
            Payroll automatically sends employee payslips to the MiHCM Mobile &
            web app.
          </p>
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

/* Flexbox container for the cards */
.card-container {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  justify-content: center; /* Center cards horizontally */
  gap: 20px; /* Space between cards */
}

/* Base Card Styling */
.card {
  width: 360px; /* Fixed width for larger screens */
  background-color: #f6fbff;
  border: none;
  border-radius: 8px;
  display: flex;
  text-align: start;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth transition on hover */
}

.card:hover {
  background-color: lightblue; /* Corrected hover state */
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
  font-size: 1.2rem; /* Adjusted font size */
  font-weight: 700;
  line-height: 1.1em;
}

/* Card text styling */
.text {
  font-family: "Sintony", Sans-serif;
  font-size: 1rem; /* Adjusted font size */
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: 0rem;
}

/* Responsive Layout for Smaller Screens */
@media (max-width: 768px) {
  .card {
    width: calc(100% - 40px); /* Full width minus padding */
    height: auto; /* Auto height */
  }

  .heading {
    font-size: 1rem; /* Adjusted font size */
  }

  .text {
    font-size: 0.8rem; /* Adjusted font size */
  }
}

@media (max-width: 576px) {
  .icon {
    width: 30px; /* Adjusted icon size */
    height: 30px;
  }

  .heading {
    font-size: 0.9rem; /* Adjusted font size */
  }

  .text {
    font-size: 0.75rem; /* Adjusted font size */
  }
}
</style>
