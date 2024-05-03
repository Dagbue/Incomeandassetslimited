<template>
  <div class="section-alpha">

    <p class="section-header-1">Trade with confidence</p>
    <p class="section-header">The numbers speak for themselves. Trade with the support of the world’s largest
      retail broker.</p>

    <div class="section-2">
      <div class="section-2-alpha">

        <div class="section-2-content">
          <p class="text-1">$4+ Million</p>
          <p class="text-2">monthly trading volume</p>
        </div>

        <div class="vl"></div>

        <div class="section-2-content">
          <p class="text-1">1.9 Million</p>
          <p class="text-2">trades executed in 2023</p>
        </div>

        <div class="vl"></div>

        <div class="section-2-content">
          <p class="text-1">4,000+</p>
          <p class="text-2">registered partners</p>
        </div>

        <div class="vl"></div>

        <div class="section-2-content">
          <p class="text-1">4.6</p>
          <p class="text-2">Trustpilot rating</p>
        </div>

      </div>
    </div>

    <p class="section-header-1">Take your trading to the next level</p>
    <p class="section-header">Our leading market conditions, trading features and proprietary protections give
      your strategy the advantage it deserves.</p>
    <div class="section-content">

      <div class="section-content-1" >
        <div class="box">
          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stable_spreads_832d4a7b36.svg" class="about-image" alt="assets-image"/>
          <h3>Low and stable spreads</h3>
          <p>Trade with tight, predictable spreads on all instruments, even in times of volatility.</p>
        </div>
        <div class="box">
          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stop_out_protection_3058b9de65.svg" class="about-image" alt="assets-image"/>
          <h3>Stop Out Protection</h3>
          <p>Experience 30% fewer stop outs with a unique protection feature designed to
            delay or completely avoid stop outs.</p>
        </div>
        <div class="box">
          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_swap_free_5ad242f7c9.svg" class="about-image" alt="assets-image"/>
          <h3>No overnight fees</h3>
          <p>Hold overnight positions for free on all FX majors, most FX minors, gold and crypto,
            stocks and indices.</p>
        </div>
      </div>

      <div class="section-content-1" >
        <div class="box">
          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_fast_execution_57c7f263d9.svg" class="about-image" alt="assets-image"/>
          <h3>Ultra-fast execution</h3>
          <p>Execute trades in milliseconds on both MetaTrader platforms and proprietary Exness Terminals.</p>
        </div>
        <div class="box">
          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_zero_stop_out_ca471edf6f.svg" class="about-image" alt="assets-image"/>
          <h3>0% stop out level</h3>
          <p>Stay in the markets for longer with a 0% margin level stop out on all accounts.</p>
        </div>
        <div class="box">
          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_leverage_c228f82af1.svg" class="about-image" alt="assets-image"/>
          <h3>Customizable leverage</h3>
          <p>Modify your leverage to suit your risk management strategy with flexible leverage up to 1:unlimited.</p>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection2"
}
</script>

<style scoped>

.section-alpha{
  background-image: url("@/assets/background.png");
  /*background-color: #000;*/
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
  padding-top: 5%;
}

.section-header{
  font-size: 17px;
  color: #0f171c;
  text-align: center;
  font-weight: 300;
  margin-left: 23%;
  margin-right: 23%;
  padding-bottom: 1%;
}
.section-header-1{
  font-size: 30px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box{
  background-color: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 330px;
  height: 250px;
}



.section-content-1{
  display: flex;
  justify-content: space-evenly;
}

.about-image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  width: 60px;
  object-fit: cover;
  margin-top: 7%;
}
.about-image-1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.about-image-2{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 37%;
}
.about-image-3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 29%;
}

.box h3{
  padding-top: 22px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box p{
  color: #222222;
  text-align: center;
  font-size: 15px;
  line-height: 1.5;
}


.section-2-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-top: 3%;
  margin-bottom: 6%;
  margin-left: 8%;
  margin-right: 8%;
}

.section-2-content{
  /*margin-right: 40px;*/
  text-align: center;
}

.text-1{
  font-family: 'BR-Firma-Bold', sans-serif;
  font-size: 20px;
  padding-bottom: 3px;
}

.text-2 {
  color: #818a91;
  font-size: 17px;
}

.vl {
  border-left: 1.5px solid rgba(0, 0, 0, 0.12);
  height: 100px;
}

@media (max-width: 700px) {
  .section-header{
    font-size: 15px;
    margin-left: 10%;
    margin-right: 10%;
  }
  .section-content-1{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }

  .section-header-1{
    font-size: 26px;
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .box{
    /*margin-left: 10%;*/
    /*margin-right: 10%;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}



@media (max-width: 500px) {
  .section-2-alpha{
    margin-top: 7%;
    margin-bottom: 8%;
    margin-left: 2%;
    margin-right: 2%;
  }

  .section-header{
    margin-left: 4%;
    margin-right: 4%;
  }
}
</style>