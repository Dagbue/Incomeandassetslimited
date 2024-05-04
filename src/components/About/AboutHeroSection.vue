<template>
  <div>

    <div v-show="!mobile" class="alpha">

      <p class="mobile-header">Trade without Tradeoffs</p>

      <div class="section-alpha">

        <div class="section-1">

          <div class="content-1 right">
            <p class="text-1">Withdrawals</p>
            <p class="text-2">Instant withdrawals</p>
            <p class="text-3">Get your deposits and withdrawals approved the moment you click the button.</p>
          </div>

          <div class="content-1 right">
            <p class="text-1">Spreads</p>
            <p class="text-2">Tight & stable spreads</p>
            <p class="text-3">Trade confidently in times of volatility with low and reliable spreads.</p>
          </div>

        </div>

        <div class="section-1">

          <div class="content-1 left">
            <p class="text-1">Execution speed</p>
            <p class="text-2">Ultra-fast execution</p>
            <p class="text-3">Execute your orders in milliseconds, no matter how big they are.</p>
          </div>

          <div class="content-1 left">
            <p class="text-1">Swaps</p>
            <p class="text-2">No overnight fees</p>
            <p class="text-3">Hold your leveraged positions for as long as you like, swap-free. T&C apply.</p>
          </div>

        </div>

      </div>


    </div>

    <div v-show="mobile" class="alpha-mobile" >

      <p class="mobile-header">Trade without tradeoffs</p>

      <div class="section-1-mobile">

        <div class="content-1-mobile">
          <p class="text-1-mobile">Withdrawals</p>
          <p class="text-2-mobile">Instant withdrawals</p>
          <p class="text-3-mobile">Get your deposits and withdrawals approved the moment you click the button.</p>
        </div>

        <div class="content-1-mobile">
          <p class="text-1-mobile">Spreads</p>
          <p class="text-2-mobile">Tight & stable spreads</p>
          <p class="text-3-mobile">Trade confidently in times of volatility with low and reliable spreads.</p>
        </div>

      </div>

      <img src="@/assets/abouthero.jpeg" alt="image" class="mobile-image">

      <div class="section-1-mobile">

        <div class="content-1-mobile">
          <p class="text-1-mobile">Execution speed</p>
          <p class="text-2-mobile">Ultra-fast execution</p>
          <p class="text-3-mobile">Execute your orders in milliseconds, no matter how big they are.</p>
        </div>

        <div class="content-1-mobile">
          <p class="text-1-mobile">Swaps</p>
          <p class="text-2-mobile">No overnight fees</p>
          <p class="text-3-mobile">Hold your leveraged positions for as long as you like, swap-free. T&C apply.</p>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutHeroSection",
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 700){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  }
}
</script>

<style scoped>
.alpha{
  width: 100%;
  height: 100vh;
  background-color: #070e20;
  background-image: url("@/assets/abouthero.jpeg");
  background-size: 50vh, cover;
  background-repeat: no-repeat;
  background-position: bottom, center;
  z-index: 100;
  color: #FFFFFF;
}
.alpha-mobile{
  width: 100%;
  height: 100%;
  background-color: #070e20;
  padding-bottom: 5%;
}
.mobile-header{
  text-align: center;
  color: #FFFFFF;
  padding-top: 5%;
  font-size: 25px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.section-alpha{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.section-1{
  margin-top: 15%;
}


.content-1{
  margin-bottom: 15%;
  width: 70%;
  text-align: center;
}

.content-1-mobile{
  margin-bottom: 5%;
  width: 70%;
  text-align: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 6%;
  color: #FFFFFF;
}

.left{
  position: relative;
  left: 25vh;
}

.right{
  position: relative;
  right: 4vh;
}

.text-1{
  margin-bottom: 10px;
  padding: 7px 15px;
  border-radius: 20px;
  background-color: #6c8595;
  display: inline-block;
}

.text-2{
  margin-bottom: 5px;
  font-size: 18px;
}

.text-1-mobile{
  margin-bottom: 10px;
  padding: 7px 15px;
  border-radius: 20px;
  background-color: #6c8595;
  display: inline-block;
  font-size: 16px;
}

.text-2-mobile{
  margin-bottom: 5px;
  font-size: 16px;
}

.mobile-image{
  width: 50%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}



main{
  width: 100%;
  height: 90vh;
  background-color: #070e20;
  background-image: url("@/assets/abouthero.jpeg");
  background-size: 50vh, cover;
  background-repeat: no-repeat;
  background-position: bottom, center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  /*column-gap: 20px;*/
  z-index: 100;
}

main .main-intro h1 {
  font-size: 53px;
  line-height: 55px;
  letter-spacing: 1.8px;
  padding-bottom: 5px;
}

main  p {
  font-size: 18px;
  line-height: 30px;
}



main .main-quotes p {
  /*border-left: 4px solid #ffcf01;*/
  margin: 40px;
}

main .main-quotes p:nth-child(2){
  /*margin-left: 120px;*/
}

main .main-intro  {
  position: relative;
  right: 4vh;
  padding-bottom: 8vh;
}

main .main-quotes  {
  position: relative;
  /*left: 18vh;*/
}


@keyframes showContent {
  to{
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}

main .main-intro h1,
main p{
  transform: translateY(30px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent .4s .6s ease-in-out 1 forwards;
}

main .main-intro h1{
  animation-delay: 0.8s;
}

main p{
  animation-duration: 1.2s;
}

@media screen and (max-width: 980px) {

}

@media screen and (max-width: 760px) {
  main .main-intro h1 {
    font-size: 35px;
    line-height: 35px;
    letter-spacing: 1.5px;
  }

  main{
    background-size: 45vh, cover;
  }



  main .main-quotes p:nth-child(2){
    margin-left: unset;
  }

  main .main-intro  {
    position: relative;
    right: unset;
    padding-bottom: unset;
    left: 4vh;
  }

  main .main-quotes  {
    position: relative;
    left: unset;
  }

  main  p {
    font-size: 17px;
    line-height: 25px;
  }


}

@media screen and (max-width: 500px) {



}
</style>