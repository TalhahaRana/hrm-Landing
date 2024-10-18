<template>
  <div class="landing-page">
    <div class="background-cover">
      <!-- Headings are now outside the form container -->
      <div class="headings">
        <h2 class="top-heading">
          Every digital transformation starts with a Hello!
        </h2>
        <h1 class="main-heading">Connect With Us</h1>
      </div>
      <!-- Form Container -->
      <div class="form-container">
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input type="text" id="name" placeholder="Full Name" required />
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div class="form-group">
            <label for="contact">Contact No *</label>
            <input type="text" id="contact" placeholder="Contact No" required />
          </div>
          

          <!-- Added Country Dropdown -->
          <div class="form-group">
            <label for="country">Country *</label>
            <select id="country" required>
              <option value="" disabled selected>- Select -</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <!-- Add more options as needed -->
            </select>
          </div>

         

          
          <!-- Added Agreement Checkbox -->
          <div class="form-group">
            <input type="checkbox" id="agreement" required />
            <label for="agreement">
              I agree to share the above information with MiHCM, to be used in
              accordance with the MiHCM Privacy Policy and Terms of Use.
            </label>
          </div>

          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.background-cover {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, #0047ab, #00b7ff);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  margin: 0 10px;
}

.headings {
  text-align: center;
  margin-top: 80px; /* Adds space between headings and the form container */
}

.top-heading {
  font-size: 23px;
  color: white;
  font-weight: 400;
  margin-bottom: 5px;
}

.main-heading {
  font-size: 32px;
  color: white;
  font-weight: 700;
  margin-bottom: 30px;
}

.form-container {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  min-height: 550px; /* Decreased the height */
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-group textarea {
  resize: none;
}

.form-group input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin-right: 5px;
}

.submit-btn {
  padding: 10px 20px;
  border: none;
  background-color: #f4623a;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #d9534f;
}

@media (max-width: 768px) {
  .form-container {
    padding: 20px;
  }

  .headings {
    margin-top: 340px;
  }
  .top-heading {
    font-size: 16px;
  }

  .main-heading {
    font-size: 24px;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    font-size: 14px;
  }

  .submit-btn {
    font-size: 14px;
  }
}
</style>
