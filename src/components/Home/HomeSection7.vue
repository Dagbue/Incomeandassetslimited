<template>
  <div class="alpha">
    <main>
      <h1>Testimonials</h1>
      <p class="text-1">What our Customers Say.</p>

      <div class="slider">
        <div class="slide-row" id="slide-row">
          <div class="slide-col">
            <div class="content">
              <p>Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.</p>
              <h2>Zen</h2>
              <p>Author</p>
            </div>
            <div class="hero">
              <img src="https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg" alt="avatar">
            </div>
          </div>

          <div class="slide-col">
            <div class="content">
              <p>Jonathan Koletic is an American internet entrepreneur and media proprietor, and investor. He is the founder of the multi-national technology company Treymont.</p>
              <h2>Jonathan</h2>
              <p>Treymont Inc.</p>
            </div>
            <div class="hero">
              <img src="https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg" alt="avatar">
            </div>
          </div>

          <div class="slide-col">
            <div class="content">
              <p>Charlie Green is an European entrepreneur and media consultant, and investor. He is the founder of the Hallmark Inc.</p>
              <h2>Charlie</h2>
              <p>Hallmark Inc.</p>
            </div>
            <div class="hero">
              <img src="https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg" alt="avatar">
            </div>
          </div>

          <div class="slide-col">
            <div class="content">
              <p>Sarah Dam is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.</p>
              <h2>Sarah</h2>
              <p>Zara Inc.</p>
            </div>
            <div class="hero">
              <img src="https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3" alt="avatar">
            </div>
          </div>

        </div>
      </div>

      <div class="indicator">
        <span class="btn active"></span>
        <span class="btn"></span>
        <span class="btn"></span>
        <span class="btn"></span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeSection7",
  mounted() {
    const btns = document.querySelectorAll(".btn");
    const slideRow = document.getElementById("slide-row");
    const main = document.querySelector("main");

    let currentIndex = 0;
    let intervalTime = 3000; // Interval time in milliseconds

    function updateSlide() {
      const mainWidth = main.offsetWidth;
      const translateValue = currentIndex * -mainWidth;
      slideRow.style.transform = `translateX(${translateValue}px)`;

      btns.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentIndex);
      });
    }

    function startSlider() {
      setInterval(() => {
        currentIndex = (currentIndex + 1) % btns.length; // Loop back to the first slide after the last one
        updateSlide();
      }, intervalTime);
    }

    btns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        currentIndex = index;
        updateSlide();
      });
    });

    window.addEventListener("resize", updateSlide);

    startSlider(); // Start the automatic slider
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

/*body {*/
/*  position: relative;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  min-height: 100vh;*/
/*  width: 100%;*/
/*  background-image: radial-gradient(*/
/*      at 40% 20%,*/
/*      rgb(255, 184, 122) 0px,*/
/*      transparent 50%*/
/*  ),*/
/*  radial-gradient(at 80% 0%, rgb(31, 221, 255) 0px, transparent 50%),*/
/*  radial-gradient(at 0% 50%, rgb(255, 219, 222) 0px, transparent 50%),*/
/*  radial-gradient(at 80% 50%, rgb(255, 133, 173) 0px, transparent 50%),*/
/*  radial-gradient(at 0% 100%, rgb(255, 181, 138) 0px, transparent 50%),*/
/*  radial-gradient(at 80% 100%, rgb(107, 102, 255) 0px, transparent 50%),*/
/*  radial-gradient(at 0% 0%, rgb(255, 133, 167) 0px, transparent 50%);*/
/*  background-repeat: no-repeat;*/
/*}*/

main {
  width: 800px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
  padding-bottom: 5%;
}

.alpha{
  padding-top: 5%;
  padding-bottom: 5%;
  background: #f4f5f6;
}

main h1 {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.4rem);
  color: #000000;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-1 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #697582;
  margin-bottom: 24px;
}

.slide-row {
  display: flex;
  width: 3200px;
  transition: 0.5s;
}

.slide-col {
  position: relative;
  width: 800px;
  height: 400px;
}

.hero {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}

.hero img {
  height: 100%;
  border-radius: 10px;
  width: 320px;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
}

.content {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 520px;
  height: 270px;
  color: #4d4352;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  padding: 45px;
  z-index: 2;
  user-select: none;
}

.content p {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3;
}

.content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 35px;
  color: #4d4352;
}

.indicator {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.indicator .btn {
  display: inline-block;
  height: 15px;
  width: 15px;
  margin: 4px;
  border-radius: 15px;
  background: #000000;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.btn.active {
  width: 30px;
}

.slider {
  width: 100%;
  overflow: hidden;
}

@media (max-width: 850px) {
  main {
    width: 500px;
  }

  .slide-row {
    width: 2000px;
  }

  .slide-col {
    width: 500px;
    height: 250px;
  }

  .hero img {
    width: 200px;
  }

  .content {
    width: 320px;
    height: 200px;
    padding: 20px;
  }

  .content p {
    font-size: 0.9rem;
  }

  .content h2 {
    font-size: 1.2rem;
    margin-top: 20px;
  }
}

@media (max-width: 550px) {
  main {
    width: 300px;
  }

  .slide-row {
    width: 1200px;
  }

  .slide-col {
    width: 500px;
    height: 300px;
  }

  .hero {
    top: 60%;
    height: 100px;
    z-index: 5;
  }

  .hero img {
    width: 100px;
  }

  .content {
    width: 300px;
  }
}

</style>