<template>
    <div>
      <NavBar />

      <div class="blog-card">
        <div class="card-content m-5">
          <div class="header">
            <span class="latest-blog">Latest Blog</span>
            <span class="read-time">5 min Read</span>
          </div>
          <h2 class="title">
            HR analytics, the superstar in the digital HR deck
          </h2>
          <div class="meta">
            <span class="author">Marianne David</span>
            <span class="date">October 2, 2024</span>
          </div>
          <a href="#" class="read-more">Read More <i class="arrow-right"></i></a>
        </div>
        <div class="illustration">
          <img src="@/assets/images/res-1.png" alt="HR Analytics illustration">
        </div>
      </div>
  
      <!-- HR Cards -->
      <div class="container">
        <div class="row justify-content-center">
          <div v-for="(card, index) in blogCards" :key="index" class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="image-wrapper">
                <img :src="card.image" alt="profile image" class="profile-image">
              </div>
  
              <div class="card-content">
                <div class="author-details">
                  <span class="icon"><i class="fas fa-user"></i></span>
                  <span>{{ card.author }}</span>
                  <span class="icon"><i class="fas fa-calendar-alt"></i></span>
                  <span>{{ card.date }}</span>
                  <span class="icon"><i class="fas fa-clock"></i></span>
                  <span>{{ card.readTime }}</span>
                </div>
                <p class="card-title">{{ card.title }}</p>
                <p class="card-description">{{ card.description }}</p>
                <a href="#" class="read-more">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="containers">
    <div class="content">
      <h1>Let’s get talking!</h1>
      <div class="buttons">
        <button class="btn-orange">Book a Demo</button>
        <button class="btn-link">Speak to Us</button>
      </div>
    </div>
  </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import NavBar from '@/components/nav/Navbar.vue';
  import Footer from '@/components/nav/Footer.vue';
  
  const blogCards = ref([
    {
      image: '/src/assets/images/blog01.png',
      title: 'Why should businesses invest in a digital HR solution?',
      description: 'How do you know whether your business needs to invest in a digital HR software?',
      author: 'Marianne David',
      date: 'September 26, 2024',
      readTime: '3 min Read',
    },
    {
      image: '/src/assets/images/blog02.webp',
      title: 'Streamline workforce operations with cutting-edge HR software',
      description: 'In today’s fast-paced and ever-evolving digital landscape, businesses are constantly seeking ways to enhance their',
      author: 'MIHCM Reporter',
      date: 'December 11, 2023',
      readTime: '5 min Read',
    },
    {
      image: '/src/assets/images/blog03.webp',
      title: '7 easy tips to boost workplace productivity',
      description: 'Your boss wanted that report yesterday. Your colleague requires your help with that project proposal,',
      author: 'MIHCM Reporter',
      date: 'November 14, 2023',
      readTime: '5 min Read',
    },
    {
      image: '/src/assets/images/blog04.webp',
      title: 'Elevate your small business with the MiHCM Lite Digital HR solution',
      description: 'As a small business owner, you may have limited resources to manage your HR and',
      author: 'MIHCM Reporter',
      date: 'July 11, 2023',
      readTime: '3 min Read',
    },
    {
      image: '/src/assets/images/blog05.webp',
      title: 'Simplify your HR activities in the digital world',
      description: 'From the hiring to the retirement of an employee, every HR team needs to be',
      author: 'MIHCM Reporter',
      date: 'July 11, 2023',
      readTime: '2 min Read',
    },
    {
      image: '/src/assets/images/blog06.webp',
      title: 'Workforce productivity, a mouthful for biz across the world',
      description: 'With the global economy still adjusting to the long-term economic effects of the pandemic, businesses',
      author: 'MIHCM Reporter',
      date: 'July 11, 2023',
      readTime: '3 min Read',
    },
    {
      image: '/src/assets/images/blog07.webp',
      title: 'Adapting to the new normal with face recognition devices',
      description: '2020, unlike any other year, shook the entire world with the spread of Covid-19 virus',
      author: 'MIHCM Reporter',
      date: 'April 6, 2021',
      readTime: '2 min Read',
    },
    {
      image: '/src/assets/images/blog08.webp',
      title: 'How we enabled our workforce at MiHCM to work from home',
      description: 'COVID-19 is impacting everyone around the world and every aspect of our daily lives: our',
      author: 'MIHCM Reporter',
      date: 'March 13, 2020',
      readTime: '7 min Read',
    },
    {
      image: '/src/assets/images/blog09.webp',
      title: 'Can Digital HR help attract and retain people?',
      description: 'Business processes keep embracing digital transformation through social, mobile, analytics and cloud technology, which makes',
      author: 'MIHCM Reporter',
      date: 'February 5, 2020',
      readTime: '3 min Read',
    },
    {
      image: '/src/assets/images/blog10.webp',
      title: 'Essential features for time & attendance software',
      description: 'With the global economy still adjusting to the long-term economic effects of the pandemic, businesses',
      author: 'MIHCM Reporter',
      date: 'July 11, 2023',
      readTime: '3 min Read',
    },
    {
      image: '/src/assets/images/blog11.webp',
      title: 'Workforce productivity, a mouthful for biz across the world',
      description: 'With the global economy still adjusting to the long-term economic effects of the pandemic, businesses',
      author: 'MIHCM Reporter',
      date: 'July 11, 2023',
      readTime: '3 min Read',
    },
    {
      image: '/src/assets/images/blog12.webp',
      title: 'Workforce productivity, a mouthful for biz across the world',
      description: 'With the global economy still adjusting to the long-term economic effects of the pandemic, businesses',
      author: 'MIHCM Reporter',
      date: 'July 11, 2023',
      readTime: '3 min Read',
    },
 
  ]);
  </script>
  
  <style scoped>

  .blog-card {
    background-color: #80C342;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    color: white;
  }
  
  .card-content {
    max-width: 100%;
  }
  
  .header {
    display: flex;
    gap: 10px;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .title {
    font-size: 2rem;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .meta {
    display: flex;
    gap: 20px;
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  
  .read-more {
    display: inline-flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .read-more i {
    margin-left: 5px;
  }
  
  .illustration img {
    max-width: 300px;
    border-radius: 8px;
  }
  

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  
  .card {
    position: relative;
    background-color: #f0f0f0;
    border-radius: 20px;
    width: 100%;
    max-width: 320px;
    max-height: 450px;
    margin-top: 90px;
    text-align: center;
    padding: 60px 20px 40px;
  }
  
  .image-wrapper {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .profile-image {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .card-content {
    margin-top: 150px;
  
  }
  
  .author-details {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .card-title {
    font-weight: bold;
    font-size: 1;
    margin-bottom: 10px;
  }
  
  .card-description {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  
  .read-more {
    text-decoration: none;
    color: #4b4b4b;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .read-more:hover {
    color: #1a73e8;
  }
  .containers {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 200px; 
  background: linear-gradient(90deg, #f7f7f7, #fde0c5); 
  border-radius: 15px;
}

.content {
  text-align: center;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2b2b2b;
  position: relative;
  padding-bottom: 10px; 
}

h1::after {
  content: "";
  display: block;
  width: 900px; 
  height: 1px; 
  background-color: black; 
  margin-top: 20px; 
}


.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn-orange {
  background-color: #f15a24;
  color: white;
  padding: 8px 40px;
  border: none;

  cursor: pointer;
  font-size: 16px;
}

.btn-link {
  background: none;
  border: none;
  color: #2b2b2b;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
}

.btn-orange:hover {
  background-color: #e04b18; 
}

.btn-link:hover {
  color: #ff6600; 
}

@media (max-width: 768px) {
   .illustration img{
    width: 200px;
   }
   h1::after {
  content: "";
  display: block;
  width: 400px; 
  height: 1px; 
  background-color: black; 
  margin-top: 20px; 
}
.card{
    margin-left: 83px;
}


  }
  </style>
  