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
          <h3 class="heading heading-startups">Employee Profile</h3>
          <!-- Card text -->
          <p class="text text-startups">
            Manage & track employee information, important documents & letters.
            Assign users & roles for each module.
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
          <h3 class="heading heading-payroll">Organisation Charts</h3>
          <!-- Card text -->
          <p class="text text-payroll">
            Create organisation structures with clear reporting lines & view
            down to employee profiles.
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
          <h3 class="heading heading-attendance">Organisation Planning</h3>
          <!-- Card text -->
          <p class="text text-attendance">
            Define job descriptions, qualifications & experience. View automated
            workflow approvals for each level.
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
          <h3 class="heading heading-performance">Employee Dynamics</h3>
          <!-- Card text -->
          <p class="text text-performance">
            Manage the employee lifecycle from transfers, promotions,
            resignations & terminations to reactivations.
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
          <h3 class="heading heading-leave">Employee Self Service</h3>
          <!-- Card text -->
          <p class="text text-leave">
            Empower employees to oversee their attendance, submit timesheets &
            handle their leave.
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
          <h3 class="heading heading-analytics">Leave & Absence Management</h3>
          <!-- Card text -->
          <p class="text text-analytics">
            Administer leave, off day & end-of-the-year leave encashment so
            easily!
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
  width: 360px; /* Fixed width for large screens */
  background-color: #f5fafd;
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
    width: 30px;
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
