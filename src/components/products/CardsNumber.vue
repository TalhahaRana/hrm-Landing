<template>
  <div class="container-fluid">
    <div class="card-container">
      <!-- Card 1 -->
      <div class="card card-startups">
        <div class="card-body">
          <img src="../../assets/images/icon1.png" class="icon" alt="Icon 1" />
          <h3 class="heading">Standard Reports</h3>
          <p class="text">
            Access real-time data on employee attendance, leave & more.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card card-payroll">
        <div class="card-body">
          <img src="../../assets/images/icon2.png" class="icon" alt="Icon 2" />
          <h3 class="heading">Snapshot View</h3>
          <p class="text">
            Get a snapshot of your complete workforce. Access info on employee
            demographics, movements & more.
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

      <!-- Card 4 -->
      <div class="card card-performance">
        <div class="card-body">
          <img src="../../assets/images/icon4.png" class="icon" alt="Icon 4" />
          <h3 class="heading">Advanced Search</h3>
          <p class="text">
            Go deep into your data. Build your queries & get the information you
            need instantly.
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
  width: 327px; /* Fixed width for larger screens */
  height: auto; /* Auto height */
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
    max-width: 327px; /* Ensure cards do not exceed this width */
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
