<template>
    <div>
      <div class="banner-section">
        <div class="overlay">
          <h1 class="banner-heading">Legal Notice</h1>
        </div>
      </div>
      <div class="row section-2 mb-3">
        <p>
          MiHCM provides products and services to you on following Copyrights,
          Terms of Use and Trademarks. Please follow the copyright/ trademark
          notices for respective products for product specific legal notices.

          <span class="d-block">Copyright</span>
          All content included on this site such as text, logos, graphics, images,
          icons, audio/video clips, animations, news items, press releases,
          software and downloads is the property of MiHCM or it’s business
          alliance partners. International copyright laws protect all the content
          on this site. The content and the software on this site should be used
          for getting to know about MiHCM and it’s product/ services. You may not
          modify, reproduce, distribute, transmit, republish or display the
          content and related items on this site without prior written approval of
          MiHCM.

          <span class="d-block">Trademarks</span>
          MiHCM logo is a registered trademark and all the other MiHCM product
          logos are trademarks of Microimage (Private) Limited and they are
          registered in Sri Lanka and other regional countries where the company
          operates. All the other trademarks or registered trademarks are
          properties of their respective owners.
        </p>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "BannerSection",
  };
  </script>

  <style scoped>
  /* Banner Section */
  .banner-section {
    position: relative;
    background-image: url("/src/assets/images/legal/clients-bg.jpg"); /* Replace with your image URL */
    background-size: cover; /* Ensures the image covers the entire section */
    background-position: center;
    height: 350px; /* Adjust the height as needed */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Gradient Overlay */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 122, 28, 0.7); /* Orange color (#f7a66e) with opacity */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Heading in Banner */
  .banner-heading {
    color: white;
    font-size: 3rem; /* Adjust font size as needed */
    text-align: center;
  }

  /* Section 2 */
  .section-2 {
    width: 87%;
    margin: -30px auto 0px auto; /* Add proper spacing */
    z-index: 2; /* Ensure it's on top of the banner */
    position: relative; /* Keeps it layered above the banner */
    background: white; /* Optional: Add background to make the text more readable */
    padding: 40px; /* Optional: Add padding to create spacing within the content */
    /* Optional: Add shadow for better separation */
    border-radius: 10px;
}
   .section-2 span{
    font-size: 2rem;
    color:#404041;
    font-weight: bolder;
   }
  </style>
