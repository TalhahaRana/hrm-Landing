<template>
  <div class="testimonial-container p-5 rounded shadow text-center">
    <div class="quote-icon top-left">
      <i class="fas fa-quote-left fa-3x"></i>
    </div>
    <div
      class="testimonial-profile d-flex justify-content-center align-items-center mt-4"
    >
      <img
        src="@/assets/images/salman.png"
        alt="Siddartha Chowdhury"
        class="rounded-circle"
      />
    </div>
    <p class="testimonial-text">
      Choosing MiHCM is one of the best decisions we have made this year. Our
      team members now have the ability to access their own information, request
      time off, update personal details, all with just a few clicks. This has
      drastically reduced the administrative burden on our HR department and has
      allowed our employees to take more control over their own HR needs. Kudos
      to the support team who are always ready to assist us with any questions
      or issues. Their dedication to ensuring that we get the most out of the
      software is truly commendable. If you want to experience the game-changer
      mode of your HR operations – Try MiHCM!!
    </p>

    <h5 class="mt-3">Salman Chowdhury</h5>
    <p class="text-muted">Senior Team lead, Operations, Tekarsh</p>
    <p class="text-muted">Afghanistan</p>
    <div class="quote-icon bottom-right">
      <i class="fas fa-quote-right fa-3x"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.testimonial-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  background-color: #f7eadf; /* Match the light yellow background color */
  border-radius: 10px;
}

.quote-icon {
  color: #002b80;
}

.top-left {
  position: absolute;
  top: -20px;
  left: -20px;
}

.bottom-right {
  position: absolute;
  bottom: -20px;
  right: -20px;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
  margin: 20px auto;
  max-width: 600px;
}

.testimonial-profile img {
  border: 5px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

h5 {
  font-weight: bold;
}

.text-muted {
  color: #666;
}
</style>
