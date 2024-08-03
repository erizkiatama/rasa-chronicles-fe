<template>
  <main>
    <section class="welcome">
      <div class="welcome-msg-box">
        <h2>Welcome Everyone!</h2>
        <p class="welcome-msg">
          Welcome to Our website! We are Ezra and Salsa, a couple with a shared passion for exploring the world, savoring life’s little moments, and celebrating our journey together. This website is our digital scrapbook, where we document our adventures, share our thoughts, and connect with fellow travelers and dreamers.
        </p>
        <p class="welcome-msg">
          Our story began with a mutual love for adventure and curiosity about the world around us. From wandering through bustling city streets to finding tranquility in nature’s hidden gems, we’ve experienced a tapestry of cultures, cuisines, and landscapes that have enriched our lives and strengthened our bond. Through RaSaChronicles, we invite you to join us on this incredible journey.
        </p>
        <p class="welcome-msg">
          Here, you’ll find tales of our travels, from the majestic mountains to the serene beaches, and everything in between. We’ll also share our favorite recipes, inspired by the diverse flavors we’ve encountered, as well as tips and tricks for making the most out of every adventure. But RaSaChronicles is more than just a travel diary; it’s a celebration of life, love, and the joy of experiencing the world together.
        </p>
        <p class="welcome-msg">
          We believe that every moment is an opportunity to create memories, and we hope our stories inspire you to embark on your own adventures. Whether you’re a seasoned traveler or someone who dreams of exploring new horizons, there’s something here for everyone. So, take a look around, get to know us, and let’s explore the world together, one story at a time.
        </p>
        <p class="welcome-msg">
          Thank you for visiting RaSaChronicles. We’re thrilled to have you here and can’t wait to share our journey with you!
        </p>
      </div>
      <div class="welcome-img-box">
        <img src="../assets/welcome-image-1.jpg" alt="Ezra & Salsa" class="welcome-img">
      </div>
    </section>
  </main>
</template>

<style>
/* Start of Welcome CSS */

.welcome {
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C2B280;
}

.welcome-msg-box {
  width: 500px;
  height: fit-content;
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  border-color: white;
  border-style: solid;
}

.welcome-msg-box h2 {
  margin-bottom: 10px;
}

.welcome-msg {
  font-size: 1rem;
  margin-bottom: 15px;
}

.welcome-img-box {
  width: fit-content;
  height: 500px;
  margin-left: 3rem;
}

.welcome-img {
  height: 100%;
}

/* End of Welcome CSS*/
</style>