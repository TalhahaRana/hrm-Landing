<template>
  <div class="row justify-content-center my-3">
    <!-- Event Card -->
    <div class="col-lg-5 col-md-6 col-sm-12 my-3">
      <div class="card event-card">
        <div class="card-body">
          <p class="event-header">Out & About</p>
          <h2 class="card-title">Events</h2>
          <p class="card-text">Explore our past, present & upcoming events.</p>
          <div class="event-box">
            <div class="image-overlay">
              <img
                src="@/assets/images/event2.jpg"
                alt="Event Image"
                class="img-fluid event-img"
              />
            </div>
            <div class="event-details">
              <p class="date">
                July 10, 2024 | Courtyard by Marriott, Colombo 02
              </p>
              <h3 class="event-title">IASL HR Conference</h3>
              <a href="#" class="btn btn-outline-primary">Explore More</a>
            </div>
            <!-- Read More button -->
            <div class="read-more-btn">
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsroom Card -->
    <div class="col-lg-5 col-md-6 col-sm-12 my-3">
      <div class="card event-card">
        <div class="card-body">
          <p class="news-header">Press Releases</p>
          <h2 class="card-title">Newsroom</h2>
          <p class="card-text">Uncover our latest stories in the HR space.</p>
          <div class="news-box">
            <div class="image-overlay">
              <img
                src="@/assets/images/event1.jpg"
                alt="News Image"
                class="img-fluid news-img"
              />
            </div>
            <div class="news-details">
              <p class="date">October 7, 2024</p>
              <h3 class="news-title">
                MIHCM Asia showcases latest HR tech innovations in KL
              </h3>
              <a href="#" class="btn btn-outline-primary">Explore More</a>
            </div>
            <!-- Read More button -->
            <div class="read-more-btn">
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
};
</script>

<style scoped>
/* Ensure card has a fixed height */
.event-card {
  background-color: #e0e0e0;
  height: auto; /* Allow auto height for responsiveness */
  margin-top: 50px; /* Default margin for large screens */
  overflow: hidden;
  position: relative;
  border-radius: 5px;
}

.card-body {
  text-align: center;
  margin: 0;
}

.event-header,
.news-header {
  font-weight: bold;
  color: #495057;
}

.card-title {
  font-size: 1.5rem;
  color: #000;
}

/* Image container */
.event-box,
.news-box {
  position: relative;
  overflow: hidden;
  height: 260px;
  border-radius: 8px;
}

/* Overlay effect with image zoom */
.image-overlay {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.image-overlay img {
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Add a dark gradient to improve text visibility */
.image-overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.8)
  );
  transition: opacity 0.5s ease;
}

/* Zoom effect on hover */
.event-card:hover .image-overlay img,
.event-card:hover .image-overlay::after {
  transform: scale(1.1); /* Zoom the image */
  opacity: 1; /* Make the image fully visible */
}

.event-details,
.news-details {
  position: absolute;
  bottom: 66px;
  left: 0px;
  color: white;
  width: 100%;
}

.date {
  font-size: 0.8rem;
  color: white;
}

.event-title,
.news-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
}

.btn-outline-primary {
  border: 1px solid white;
  color: white;
}

.btn-outline-primary:hover {
  background-color: white;
  color: #111111;
}
/* Read More button styling */
.read-more-btn {
  text-align: center;
  margin-top: 10px; /* Space between the button and the image */
}

.read-more-btn .btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}

.read-more-btn .btn-primary:hover {
  background-color: #0056b3;
}

/* Responsive size handling */
@media (max-width: 992px) {
  .event-card {
    margin-top: 40px; /* Adjust margin-top for medium devices */
  }
}

@media (max-width: 768px) {
  .event-card {
    margin-top: 30px; /* Adjust margin-top for tablets */
    height: auto; /* Auto height for flexibility */
  }

  .event-box,
  .news-box {
    height: 200px; /* Reduce image height for smaller screens */
  }

  .event-title,
  .news-title {
    font-size: 1rem;
  }

  .date {
    font-size: 0.7rem;
  }

  .card-title {
    font-size: 1.3rem;
  }

  .btn-outline-primary {
    padding: 5px 10px; /* Adjust button padding */
  }
}

@media (max-width: 576px) {
  .event-card {
    margin-top: 20px; /* Further reduce margin-top for small devices */
  }

  .event-box,
  .news-box {
    height: 180px; /* Further reduce image height for extra small screens */
  }

  .event-title,
  .news-title {
    font-size: 0.9rem;
  }

  .card-title {
    font-size: 1.2rem;
  }
}
@media (max-width: 1020px) {
  .event-card {
    margin-top: 300px; /* Further reduce margin-top for small devices */
  }
}
@media (max-width: 786px) {
  .event-card {
    margin-top: 300px; /* Further reduce margin-top for small devices */
  }
}
@media (max-width: 576px) {
  .event-card {
    margin-top: 1200px; /* Further reduce margin-top for small devices */
  }
}
</style>
