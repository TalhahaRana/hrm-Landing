<template>
    <div class="banner-container">
        <div class="text-overlay">
            <h1>NEWSROOM</h1>
            <h2>MIHCM Asia showcases latest HR tech innovations in KL</h2>
            <h3>October 7, 2024</h3>
        </div>
        <img src="../../../assets/images/inner-frame.webp" alt="inner-frame" class="inner-frame">
        <img src="../../../assets/images/ShowCases.jpg" alt="ShowCases" class="showcase rounded-3">
    </div>
    <br>
    <section class="news-section">
    <div class="text-center mb-4">
      <p>Read our</p>
      <h1 class="section-title">Previous News Reports</h1>
    </div>

    <div class="row justify-content-center">
      <!-- First News Card -->
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="news-card p-3 rounded shadow">
          <img src="../../../assets/images/news1.jpg" alt="News Image" class="img-fluid new-img rounded-3 mb-3">
          <p class="news-date"><i class="bi bi-calendar"></i> August 28, 2024</p>
          <h5 class="news-title">MiHCM receives prestigious Malaysia Digital status</h5>
          <p class="news-description">Empowered with incentives, rights, and privileges from Malaysian Govt. Enables MiHCM to operate, grow, expand, or invest anywhere in Malaysia...</p>
          <a href="#" class="news-link">Read More <i class="bi bi-arrow-right-circle"></i></a>
        </div>
      </div>

      <!-- Second News Card -->
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="news-card p-3 rounded shadow">
          <img src="../../../assets/images/news2.jpg" alt="News Image" class="img-fluid new-img rounded-3 mb-3">
          <p class="news-date"><i class="bi bi-calendar"></i> June 24, 2024</p>
          <h5 class="news-title">MiHCM unveils AI innovations: Redefining the future of HR</h5>
          <p class="news-description">Colombo, Sri Lanka – 24th June 2024 – MiHCM, a global HR technology provider recently unveiled a host of new AI-powered solutions...</p>
          <a href="#" class="news-link">Read More <i class="bi bi-arrow-right-circle"></i></a>
        </div>
      </div>

      <!-- Third News Card -->
      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="news-card p-3 rounded shadow">
          <img src="../../../assets/images/news3.jpg" alt="News Image" class="img-fluid new-img rounded-3 mb-3">
          <p class="news-date"><i class="bi bi-calendar"></i> April 3, 2024</p>
          <h5 class="news-title">MiHCM signs on ‘Evia Sign’ with Enadoc</h5>
          <p class="news-description">Kuala Lumpur, Malaysia – MiHCM announced the integration of ‘Evia Sign’ – a digital signature solution developed by Enadoc...</p>
          <a href="#" class="news-link">Read More <i class="bi bi-arrow-right-circle"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
.banner-container {
    position: relative;
    width: 98%;
    height: 600px; /* Adjust the height as needed */
    background-image: url('../../../assets/images/News-Banner.webp');
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    padding: 40px;
    margin: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.inner-frame {
    width: 60%;
    height: auto;
    object-fit: contain;
}

.showcase {
    width: 43%;
    height: auto;
    position: absolute;
    right: 50px;
    object-fit: contain;
    z-index: 4;
}

.text-overlay {
    position: absolute;
    top: 10%;
    left: 5%;
    color: white;
    text-align: left;
    z-index: 2;
    width: 50%; /* Adjust based on how much space you want to take */
}

.text-overlay h1, .text-overlay h2, .text-overlay h3 {
    margin: 0;
    padding: 5px 0;
}

.text-overlay h1 {
    font-size: 8vw; 
    font-weight: bold;
    letter-spacing: 5px;
    color: transparent;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.813);
    position: relative;
    text-transform: uppercase;
    -webkit-background-clip: text;
    background-clip: text;
    /* left: -100px;
    top: -70px; */
}

.text-overlay h1::after {
    content: "NEWSROOM";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


.text-overlay h2 {
    font-size: 1.5rem;
    font-weight: bold;
}

.text-overlay h3 {
    font-size: 1.2rem; /* Adjust as needed */
}
.news-section {
  padding: 40px 0;
}

.section-title {
  font-size: 2.5rem;
  color: #f26522;
}

.news-card {
  background-color: #EEEEF1;
  transition: transform 0.3s ease, background-color 0.3s ease;
  min-height: 500px;
}
.news-card:hover {
  transform: translateY(-10px);
  background-color: rgba(194, 183, 183, 0.746);
}

.news-date {
  font-size: 0.9rem;
  color: #888;
}

.news-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 10px;
}

.news-description {
  font-size: 0.8rem;
  color: #666;
}

.news-link {
  font-size: 0.9rem;
  color: #f26522;
  font-weight: bold;
  text-decoration: none;
}
.new-img{
    min-height: 270px;
}
.news-link:hover {
  text-decoration: underline;
}
</style>
