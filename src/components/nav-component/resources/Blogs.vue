<template>

    <div class="blog-card">
      <div class="card-content">
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
        <!-- Place an illustration image or SVG here -->
        <img src= "@/assets/images/res-1.png" alt="HR Analytics illustration">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogCard',
  }
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
    max-width: 60%;
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
  </style>
  