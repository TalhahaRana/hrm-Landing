<template>
  <div class="container-fluid">
    <div class="card-container">
      <!-- Card 1 -->
      <div class="card card-startups">
        <div class="card-body">
          <img src="../../assets/images/icon1.png" class="icon" alt="Icon 1" />
          <h3 class="heading">Info On The Move</h3>
          <p class="text">
            Our Mobile app empowers your employees to engage with their teams &
            wish them for their work anniversaries & birthdays. Deliver company
            announcements & updates directly into the MiHCM mobile app.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card card-payroll">
        <div class="card-body">
          <img src="../../assets/images/icon2.png" class="icon" alt="Icon 2" />
          <h3 class="heading">Attendance Tracking</h3>
          <p class="text">
            Clock in & out from any location. The mobile app uses GPS to track
            employee locations at all times.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card card-attendance">
        <div class="card-body">
          <img src="../../assets/images/icon3.png" class="icon" alt="Icon 3" />
          <h3 class="heading">Workforce Analytics & Dashboard</h3>
          <p class="text">
            Gain more detailed information on headcount, turnover & diversity to
            improve productivity & overall morale.
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
  justify-content: center; /* Center cards horizontally */
  gap: 20px; /* Space between cards */
}

/* Base Card Styling */
.card {
  width: 437px; /* Fixed width for larger screens */
  height: auto; /* Auto height to accommodate content */
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
    width: calc(100% - 40px); /* Full width minus some padding */
    max-width: 437px; /* Ensure cards do not exceed this width */
    height: auto; /* Allow height to adapt based on content */
  }
  .card-container {
    flex-wrap: wrap; /* Allow wrapping for smaller screens */
  }
  .heading {
    font-size: 1rem; /* Adjusted font size */
  }

  .text {
    font-size: 0.9rem; /* Adjusted font size */
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
