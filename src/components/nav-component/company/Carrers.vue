<template>
  <div>
    <NavBar />
    <div class="header-section">
      <img src="/src/assets/images/carrersHeader.png" alt="header-image" class="img-fluid" />
    </div>

    <div class="content-section">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <h2 class="fs-1 fw-normal">We foster a team of <br /> people <br />
            who are eager to<span class="fw-bold fs-2"> <br />learn and grow.</span></h2>
          <p class="fw-bold">
            Want to discover the latest tech or a different career path? We
            believe that thrilled employees create better products and solutions.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <!-- Bootstrap Carousel -->
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(image, index) in images" :key="image.id" :class="['carousel-item', { active: index === 0 }]">
                <div class="row">
                  <div class="col-6">
                    <img :src="image.src" class="d-block w-100" alt="team member" />
                  </div>
                  <div class="col-6">
                    <img :src="getDifferentImage(image.id)" class="d-block w-100" alt="team member" />
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="call-to-action">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <img src="/src/assets/images/girl.png" alt="invitation" class="custom-img img-fluid" />
        </div>

        <div class="col-12 col-md-6 text-center text-md-start">
          <h1 class="fw-normal">An invitation to brilliant minds!</h1>
          <p class="fw-normal">
            Join us in the space where brilliant minds from across the South Asian and South East Asian regions flock together to build the path to innovation. At MiHCM you will find more than a career- 
            You will find a new way of becoming a Global Influencer in Technology!
          </p>
      <br/>
          <p class="fw-bold">Check out the Opportunities at MiHCM</p>
          <a href="#" class="btn btn-primary">Visit MIHCM Career Portal</a>
        </div>
      </div>
    </div>

    <div class="why-join-us-section">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <h1 class="fw-normal">Why Join Us?</h1>
          <p>
            MiHCM is a diverse collective of dreamers, thinkers, and go-getters, relentlessly reimagining our products and technology. This innovation is inspired by a collaborative dedication and team spirit to deliver great work.
<br/>
<br/>
<br/>
Here’s why you should join our collective of dreamers: 
          </p>
        </div>
        <div class="col-12 col-md-6 text-center">
          <img src="/src/assets/images/joinus.png" class="jumping-image img-fluid" alt="Join us image" />
        </div>
      </div>

     
      <div class="row justify-content-center pt-5">
  <div class="col-12 col-md-6 text-center mb-4">
    <div class="feature-box">
      <img src="/src/assets/images/icon01.png" alt="Global Workplace Icon" class="icon img-fluid" />
      <h3>A Global Workplace with a Homely Feel</h3>
      <p>
        We’ve got offices in Sri Lanka, Malaysia,
        <br/> and Australia. Our employees are from <br/> many nations across the world, and <br/> MiHCM is home to us all.
      </p>
    </div>
  </div>

  <div class="col-12 col-md-6 text-center mb-4">
    <div class="feature-box">
      <img src="/src/assets/images/icon02.png" alt="Career Icon" class="icon img-fluid" />
      <h3>Ignite Your Career</h3>
      <p>
        Inspiring our people to stand out in their work and progress in their careers is a major part of our leadership style and company culture. With MiHCM, you will gain invaluable opportunities to ignite your career and further kindle your passion. 
      </p>
    </div>
  </div>
  <div class="col-12 col-md-6 text-center mb-4">
    <div class="feature-box">
      <img src="/src/assets/images/icon03.png" alt="Career Icon" class="icon img-fluid" />
      <h3>Diversity & Inclusion:
        A workplace that celebrates and empowers everyone.</h3>
      <p>
        Inclusion, growth & originality, and diversity are central to everything we do. We invite people from all around the world to join us and thrill our customers & partners by working as part of the MiHCM family.  
      </p>
    </div>
  </div>
  <div class="col-12 col-md-6 text-center mb-4">
    <div class="feature-box">
      <img src="/src/assets/images/icon04.png" alt="Career Icon" class="icon img-fluid" />
      <h3>A company that invests in
        PEOPLE’S WELL-BEING</h3>
      <p>
        Investing in our own people, and their betterment, has been our best investment. Whether in times of comfort or calamity, our priority is always the happiness, health, and well-being of our employees.  
      </p>
    </div>
  </div>
  <div class="col-12 col-md-6 text-center mb-4">
    <div class="feature-box">
      <img src="/src/assets/images/icon05.png" alt="Career Icon" class="icon img-fluid" />
      <h3>Diverse teams for dynamic minds </h3>
      <p>
        With a workforce exceeding 100 passionate and dynamic individuals, MiHCM has large teams in Engineering, R&D, Finance, Sales & Marketing, Professional Services and Customer Support. While we welcome more talent to these operations, we have opportunities for all kinds of talent to join us.   
      </p>
    </div>
  </div>
  <div class="col-12 col-md-6 text-center mb-4">
    <div class="feature-box">
      <img src="/src/assets/images/icon06.png" alt="Career Icon" class="icon img-fluid" />
      <h3>We have people who Passionately Innovate  </h3>
      <p>
        The world is changing at a fast pace. To keep up, our people dream passionately and innovate continuously to bring about the technology of tomorrow. Become part of our team now to make a big impact in shaping the future of work!    
      </p>
    </div>
  </div>
</div>
</div>
<div class="m-5 consultant">
  <img src="/src/assets/images/consultant01.jpg" class="consultant-image" />
  <img src="/src/assets/images/consultant02.png" class="consultant-image" />
  <img src="/src/assets/images/consultant03.png" class="consultant-image" />
</div>
<div class="layout-container">
    <div class="text-section">
      <h1 class="fw-normal">We have a place for every kind of amazing mind at MiHCM.</h1>
    
      <p>We value persistence, passion, leadership, and original thinking in every individual in every team. Find your place here.
<br/>
<br/>
We value persistence, passion, leadership, and original thinking in every individual in every team. Find your place here.</p>
      <button class="cta-button">Jobs at MiHCM</button>
    </div>
    <div class="image-section">
      <img src="/src/assets/images/chair.png" alt="Floating Chair">
    </div>
  </div>
    <Footer />
  </div>
</template>

<script setup>
 import NavBar from '@/components/nav/Navbar.vue';
  import Footer from '@/components/nav/Footer.vue';
  
import { reactive } from 'vue';

const images = reactive([
  { id: 1, src: '/src/assets/images/career01.png' },
  { id: 2, src: '/src/assets/images/career03.png' },
  { id: 3, src: '/src/assets/images/career05.png' }
]);

// Function to return a different image
const getDifferentImage = (id) => {
  const differentImages = {
    1: '/src/assets/images/career02.png',
    2: '/src/assets/images/career04.png',
    3: '/src/assets/images/career06.png'
  };
  
  return differentImages[id] || '/src/assets/images/defaultImage.png'; // fallback image
};
</script>


<style scoped>
.header-section {
  background: linear-gradient(to bottom, #b2f8ff, #eef4ff);
  text-align: center;
  padding: 40px 0;
}

.header-section img {
  max-width: 100%;
  height: auto;
}

.content-section {
  padding: 60px 20px;
  background-color: #eef4ff;
}




.carousel-inner img {
width: 200px;
  height: 200px;
}

.call-to-action {
  padding: 40px 20px;
  height: 400px;

  background-color: #f5f5f5;
}

.call-to-action h2 {
  font-size: 1.75rem;


}
.consultant {
  position: relative;
  width: 92%; 
  height: 300px; 

}

.consultant-image {
  position: absolute;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: blink 6s infinite; 
}

.consultant-image:nth-child(1) {
  animation-delay: 0s; 
}

.consultant-image:nth-child(2) {
  animation-delay: 2s;
}

.consultant-image:nth-child(3) {
  animation-delay: 4s; 
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  43.33% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}


.call-to-action p {
  font-size: 1rem;


  
}
.call-to-action img {
    position: relative;
max-width: 300px;

    top: -60px;
    left: 20%;
    bottom:30%;
        transform: translateY(-15%);
}

.btn-primary {
  background-color:#f47920;
border-radius: 30px;
border-color: #f47920;
width: 250px;
  margin-bottom: 200px;
}
.why-join-us-section {
  padding: 0px 20px;
  background-color: #fff;
  margin-left: 76px;
}



.why-join-us-section p {
  font-size: 1rem;
  color:#203b90;
}

.jumping-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.feature-box {
 padding: 10px;
 width: 400px;
  border-radius: 10px;
}
.feature-box:hover {
  background-color: white; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.icon {
  width: 80px;
  height: 50px;
  margin-bottom: 10px;
}


.feature-box h3 {
  font-size: 1.5rem;
  font-weight: normal;
  color:#203b90;
  margin-top: 20px;
}

.feature-box p {
  font-size: 1rem;
  color: #6c757d;
}
.layout-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f4ff;
  padding: 50px;
}

.text-section {
  max-width: 50%;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #2b2b2b;
}

p {
  font-size: 1rem;
  color: #777;
  margin-top: 10px;
}

.cta-button {
  margin-top: 20px;
  background-color: #1a3da3;
  color: #fff;
  border: none;
  padding: 4px 10px;
  border-radius: 50px;
  width: 40%;
  cursor: pointer;
}


.image-section {
  max-width: 25%;
  margin-right: 20%;
}

.image-section img {
  max-width: 100%;
}


@media (max-width: 768px) {
    .call-to-action {

  height: 5%;

  background-color: #f5f5f5;
}
.cta-button {
  margin-top: 20px;
  background-color: #1a3da3;
  color: #fff;
  border: none;
  padding: 4px 10px;
  border-radius: 50px;
  width: 90%;
  cursor: pointer;
}

.consultant {
  position: relative;
  width: 80%; 
  height: 300px; 

}
.feature-box {
 padding: 10px;
 width: 300px;
  border-radius: 10px;
}

  }
</style>