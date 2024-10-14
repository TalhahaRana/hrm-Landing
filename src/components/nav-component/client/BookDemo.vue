<template>
  <div class="card-demo">
    <div class="card-content">
      <h2>Let’s get talking!</h2>
      <hr />
      <div class="button-group">
        <button class="btn-primary">Book a Demo</button>
        <button class="btn-secondary">Speak to Us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDemo",
};
</script>

<style scoped>
.card-demo {
  background: linear-gradient(90deg, #f3f4fa, #f7dfc8);
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 100%;
  margin: 0 5px;
}

.card-content {
  /* background-color: rgba(255, 255, 255, 0.8); */
  padding: 20px;
  border-radius: 10px;
}

.card-content h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2b2b2b;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.btn-primary {
  background-color: #ff6600;
  color: white;
  margin-top: 15px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-secondary {
  background-color: transparent;
  color: #2b2b2b;
  margin-top: 15px;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .card-content h2 {
    font-size: 1.5rem;
  }

  .button-group {
    flex-direction: column;
    gap: 10px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>
