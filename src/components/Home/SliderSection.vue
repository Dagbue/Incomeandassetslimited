<!--suppress ALL -->

<template>
  <div class="alpha">

    <div class="slider">

      <div class="list">
        <div class="item active">
          <img src="@/assets/background1.jpg" alt="" class="" />
          <div class="content">
            <p>Exclusive Opportunity for Income And Assets Limited Day Traders.</p>
            <h2 @click="onPostClick">Get Started</h2>
            <p>

              Opening a new IAL account gives a 0.25% discount on margin rates for the first $100,000.
              This offer applies to Individual and Joint Accounts.
            </p>
<!--            <div class="button-part">-->
<!--              <button class="btn1" @click="onPostClick">Open Live Account</button>-->
<!--              <button class="btn1" @click="onPostClick2">Login Account</button>-->
<!--            </div>-->
          </div>
        </div>
        <div class="item">
          <img src="@/assets/background2.jpg" alt="" class="" />
          <div class="content">
            <p>Choose from a diverse group of skilled traders.</p>
            <h2 @click="onPostClick" >Get Started</h2>
            <p>
              Experience the simplicity of setting up an account on our trading platform, where you can seamlessly
              adopt the strategies of experienced traders. No previous trading knowledge required.
            </p>
<!--            <div class="button-part">-->
<!--              <button class="btn1" @click="onPostClick">Open Live Account</button>-->
<!--              <button class="btn1" @click="onPostClick2">Login Account</button>-->
<!--            </div>-->
          </div>
        </div>
        <div class="item">
          <img src="@/assets/background3.jpg" alt="" class="" />
          <div class="content">
            <p>Invest confidently by tracking and applying the strategies of top financial experts.</p>
            <h2 @click="onPostClick">Invest Now</h2>
            <p>
              Join our social trading platform to connect with a global community of investors, where you can share
              and discover investment insights and strategies to improve your trading experience.
            </p>
<!--            <div class="button-part">-->
<!--              <button class="btn1" @click="onPostClick">Open Live Account</button>-->
<!--              <button class="btn1" @click="onPostClick2">Login Account</button>-->
<!--            </div>-->
          </div>
        </div>
      </div>

      <div class="arrows">
        <button id="prev"> - </button>
        <button id="next"> + </button>
      </div>

      <div class="thumbnail">
        <div class="item active" >
          <img src="@/assets/background1.jpg" alt="" class="">
          <div class="content mobilee" style="font-family: 'BR-Firma-Bold', sans-serif;" @click="onPostClick">
            Get Started
          </div>
        </div>
        <div class="item">
          <img src="@/assets/background2.jpg" alt="" class="" />
          <div class="content mobilee" style="font-family: 'BR-Firma-Bold', sans-serif;" @click="onPostClick">
            Get Started
          </div>
        </div>
        <div class="item">
          <img src="@/assets/background3.jpg" alt="" class="" />
          <div class="content mobilee" style="font-family: 'BR-Firma-Bold', sans-serif;" @click="onPostClick">
            Get Started
          </div>
        </div>
      </div>

    </div>

    <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/#%7B%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 65px; width: 100%;"></iframe>

<!--    <div class="bitcoin">-->
<!--      <div class="livecoinwatch-widget-5"-->
<!--           lcw-base="USD"-->
<!--           lcw-color-tx="#999999"-->
<!--           lcw-marquee-1="coins"-->
<!--           lcw-marquee-2="movers"-->
<!--           lcw-marquee-items="10" >-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "SliderSection",
  mounted() {
    this.$nextTick(() => {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    //config param
    let countItem = items.length;
    let itemActive = 0;

    //event next click
    next.onclick = function (){
      itemActive = itemActive + 1;
      if(itemActive >= countItem){
        itemActive = 0;
      }
      showSlider();
    }

    prev.onclick = function (){
      itemActive = itemActive -1;
      if(itemActive < 0){
        itemActive = countItem -1;
      }
      showSlider();
    }

    // auto run slider
    let refreshInterval = setInterval(() => {
      next.click()
    },8000)

    function showSlider(){
      // remove item active old
      let itemActiveOld = document.querySelector('.slider .list .item.active');
      let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
      itemActiveOld.classList.remove('active');
      thumbnailActiveOld.classList.remove('active');

      // active new item
      items[itemActive].classList.add('active');
      thumbnails[itemActive].classList.add('active');

      // clear auto time run slider
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click()
      },8000)
    }

    // click thumbnail
    thumbnails.forEach((thumbnails, index) => {
      thumbnails.addEventListener('click', () => {
        itemActive = index;
        showSlider();
      })
    })
    });
  },
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped>

.slider{
  height: 100vh;
  /*margin-top: -50px;*/
  position: relative;
}
.slider .list .item {
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: 0;
  transition: .5s;
}
.slider .list .item img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.slider .list .item::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(
      to top, #000 0.1%, transparent
  );
}

.slider .list .item .content{
  color: #ffffff;
  position: absolute;
  left: 10%;
  top: 20%;
  width: 650px;
  max-width: 80%;
  z-index: 1;
}

.slider .list .item .content p:nth-child(1){
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 2px;
}

.slider .list .item .content p{
  font-size: 16px;
  letter-spacing: 1.3px;
  line-height: 1.2;
  width: 85%;
}

.slider .list .item .content h2{
  font-size: 55px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
}

.slider .list .item.active {
  opacity: 1;
  z-index: 10;
}

@keyframes showContent {
  to{
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}

.slider .list .item.active p:nth-child(1),
.slider .list .item.active h2,
.slider .list .item.active button,
.slider .list .item.active p:nth-child(3){
  transform: translateY(30px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent .5s .7s ease-in-out 1 forwards;
}

.slider .list .item.active h2{
  animation-delay: 1s;
}

.slider .list .item.active p:nth-child(3){
  animation-duration: 1.3s;
}

.slider .list .item.active button:nth-child(1){
  animation-delay: 1.6s;
}
.slider .list .item.active button:nth-child(2){
  animation-delay: 1.8s;
}

.arrows{
  position: absolute;
  top: 30%;
  right: 50px;
  z-index: 100;
}

.arrows button{
  background-color: #eee5;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: x-large;
  color: #eee;
  transition: .5s;
  margin-right: 2.5px;
  margin-left: 2.5px;
}

.arrows button:hover{
  background-color: #eee;
  color: black;
}

.thumbnail{
  position: absolute;
  bottom: 50px;
  z-index: 11;
  display: flex;
  gap: 10px;
  width: 100%;
  height: 250px;
  padding: 0 50px;
  box-sizing: border-box;
  overflow: auto;
  justify-content: center;
}

.thumbnail::-webkit-scrollbar{
  width: 0;
}

.thumbnail .item{
  width: 150px;
  height: 220px;
  filter: brightness(.5);
  transition: .5s;
  flex-shrink: 0;
}

.thumbnail .item img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.thumbnail .item.active{
  filter: brightness(0.8);
}

.thumbnail .item .content{
  position: absolute;
  inset: auto 10px 10px 10px;
  color: #ffffff;
}

.bitcoin{
  margin-left: 5%;
  margin-right: 5%;
}
.button-part{
  display: flex;
  gap: 20px;
  margin-top: 5%;
}
.btn1{
  background-color: #070e20;
  border: 1px solid #070e20;
  color: #ffffff;
  padding: 1em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  font-size: 14px;
  width: 220px;
}

@media screen and (max-width: 750px){
  .thumbnail{
    justify-content: start;
  }
  .slider .list .item .content h2{
    font-size: 60px;
  }
  .arrows{
    top: 10%;
  }
  .slider .list .item .content h2{
    font-size: 45px;
  }

  .btn1{
    padding: 1.4em 25px;
    font-size: 12px;
    width: 200px;
  }
  .button-part{
    gap: 5px;
    margin-top: 4%;
  }
  .mobilee{
    opacity: 0;
  }
}

</style>