<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">Upgrade the way <br/> you trade</p>
        <p class="text-2">Trade with the world’s largest retail <br/> broker and benefit from better-than-market conditions.</p>
        <div class="btn-1">
          Get Started
          <img src="@/assets/arrow-right-line.svg" alt="" class="" />
        </div>
      </div>

      <div class="section-2">
        <img src="@/assets/iphonex.png" alt="" class="image" />
      </div>


    </div>

    <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/#%7B%22colorTheme%22%3A%22light%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 65px; width: 100%;"></iframe>

  </div>
</template>

<script>
export default {
  name: "HeroSection"
}
</script>

<style scoped>
.alpha{

}
.section-alpha{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}

.section-1{
  margin-top: 50px;
}

.section-2{
  margin-bottom: -10px;
}

.text-1{
  font-size: 56px;
  font-family: 'BR-Firma-Bold', sans-serif;
  line-height: 64px;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 8px;
}

.text-2{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #697582;
  margin-bottom: 24px;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 50px;
  padding: 8px 16px;
  border-radius: 12px;
  gap: 8px;
  background-color: #070e20;
  width: 175px;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.image{
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .text-1{
    font-size: 43px;
    line-height: 45px;
    margin-bottom: 8px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    display: block;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-1{
    height: 45px;
    padding: 8px 16px;
    gap: 6px;
    width: 170px;
    font-size: 14px;
  }

  .image{
    width: 100%;
  }
}

@media (max-width: 500px) {
  .text-1{
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 9px;
  }



  .text-2{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>