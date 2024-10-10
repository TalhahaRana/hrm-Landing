<template>
    <footer class="bg-light text-dark pt-5">
  <div class="container">
    <div class="row">
      <!-- Home Section -->
      <div class="col-md-2">
        <h5 class="text-uppercase font-weight-bold text-orange">Home</h5>
        <ul class="list-unstyled">
          <li><a href="#">Why MiHCM?</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Brand Guidelines</a></li>
        </ul>
      </div>

      <!-- Products Section -->
      <div class="col-md-2">
        <h5 class="text-uppercase font-weight-bold">Products</h5>
        <ul class="list-unstyled">
          <li><a href="#">MiHCM Lite</a></li>
          <li><a href="#">MiHCM Enterprise</a></li>
          <li><a href="#">MiA</a></li>
          <li><a href="#">MiHCM Data & AI</a></li>
        </ul>
      </div>

      <!-- Company Section -->
      <div class="col-md-2">
        <h5 class="text-uppercase font-weight-bold">Company</h5>
        <ul class="list-unstyled">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <!-- Resources Section -->
      <div class="col-md-2">
        <h5 class="text-uppercase font-weight-bold">Resources</h5>
        <ul class="list-unstyled">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Vlogs</a></li>
          <li><a href="#">Infographics</a></li>
        </ul>
      </div>

      <!-- Newsletter Subscription -->
      <div class="col-md-4">
        <h5 class="text-uppercase font-weight-bold">Newsletter Subscription</h5>
        <form>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Enter Your Email Here">
          </div>
          <button type="submit" class="btn">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
  
  <div class="container my-3">
   <hr>
      <div class="row align-items-center">
        <!-- Certifications Section -->
        <div class="col-md-6 d-flex align-items-center">
          <img src="../../assets/images/MiHCM-ISO-27001.svg" alt="ISO 27001 Certification" class="img-fluid me-4" width="100">
          <img src="../../assets/images/MiHCM-ISO-9001.svg" alt="ISO 9001 Certification" class="img-fluid" width="100">
        </div>

        <!-- Legal and Social Links Section -->
        <div class="col-md-6 text-md-right text-center mt-4 mt-md-0">
          <ul class="list-inline m-3 d-flex justify-content-end">
            <li class="list-inline-item mx-3"><a href="#" class="text-dark">Legal Notice</a></li>
            <li class="list-inline-item mx-3"><a href="#" class="text-dark">Cookie Policy</a></li>
            <li class="list-inline-item mx-3"><a href="#" class="text-dark">Privacy Policy</a></li>
            <li class="list-inline-item "><a href="#" class="text-dark">Terms of Use</a></li>
          </ul>

          <ul class="list-inline d-flex justify-content-end">
            <li class="list-inline-item mx-3"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="list-inline-item mx-3"><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li class="list-inline-item mx-3"><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="list-inline-item mx-3"><a href="#"><i class="fab fa-youtube"></i></a></li>
            <li class="list-inline-item mx-3"><a href="#"><i class="fab fa-linkedin"></i></a></li>
          </ul>
          <p class="mb-0  d-flex justify-content-end">&copy; 2024 MiHCM, All Rights Reserved</p>
        </div>
      </div>
    </div> 
</footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
<style scoped>
 @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
.text-orange {
  color: orange;
}
.form-group{
    border-style: solid;
    border-width: 0px 0px 3px 0px;
    border-color: #AAAAAA8A;
}
.form-control{
    border: none;
    box-shadow: none;
    padding: .375rem 0rem;
}
.btn{
    color: #AAAAAA8A;
    padding: 1rem 0rem;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 0.25rem;
}
footer ul li a {
  color: #000;
  text-decoration: none;
  font-size: 1rem;
    font-weight: 400;
    line-height: 3em;
}

footer ul li a:hover {
  text-decoration: none;
  color: orange;
}
hr{
  border: 3px solid orange;
    padding: 0px 0px;
    opacity: 1.25;
}
i{
  font-size: 28px;

}
</style>