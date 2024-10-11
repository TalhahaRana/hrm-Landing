<template>
    <div>
      <NavBar />
      <div class="board">
        <h2>Board of Directors</h2>
      </div>
  
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="director in directors" :key="director.id">
            <div class="card text-center">
              <img :src="director.image" class="card-img-top" alt="Director Image" />
              <div class="card-body">
                <h5 class="card-title">{{ director.name }}</h5>
                <p class="card-text">{{ director.title }}</p>
                <div class="card-footer">
                  <a :href="director.linkedin" target="_blank" class="linkdin">
                    Connect on 
                    <span class="linkedin-icon">
                      <i class="bi bi-linkedin"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import NavBar from '@/components/nav/Navbar.vue';
  import Footer from '@/components/nav/Footer.vue';
  
  const directors = [
    {
      id: 1,
      name: "Harsha Purasinghe",
      title: "Chairman/ CEO",
      image: "/src/assets/images/71073955.jpeg",
      linkedin: "https://linkedin.com/in/example1"
    },
    {
      id: 2,
      name: "Mah Xian-Zhen",
      title: "Director",
      image: "/src/assets/images/D2.PNG",
      linkedin: "https://linkedin.com/in/example2"
    },
    {
      id: 3,
      name: "Damindu Jayaweera",
      title: "Director",
      image: "/src/assets/images/D3.PNG",
      linkedin: "/src/assets/images/D3.PNG"
    },
    {
      id: 4,
      name: "Suren Rupasinghe",
      title: "Director/ CPO",
      image: "/src/assets/images/D4.PNG",
      linkedin: "/src/assets/images/D4.PNG"
    }
  ];
  </script>
  
  <style scoped>
  .board {
    background-color: #1c648b;
    height: 100px;
    padding: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .board h2 {
    margin: 0;
    font-size: 2rem;
    color: white;
    font-weight: 600;
  }
  
  .card {
    height: 300px;
    border: none;
  }
  
  .card-img-top {
    width: 50%;
    height: 200px;
    object-fit: cover;
    margin-left: 60px;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .card-title {
    font-size: 0.8rem;
    font-weight: bold;
  }
  
  .card-footer {
    padding-top: 10px;
  }
  
  .linkdin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    font-size: 0.8rem;
    color: black;
  }
  
  .linkedin-icon {
    background-color: orange;


    padding: 15px;
    margin-left: auto;
  }
  
  .linkedin-icon i {
    color: white;
  }
  </style>
  