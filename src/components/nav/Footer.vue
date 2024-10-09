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
</footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
<style scoped>
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
</style>