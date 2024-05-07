<template>
  <div class="section-alpha">

<!--    <p class="section-header-1">Trade with confidence</p>-->
<!--    <p class="section-header">The numbers speak for themselves. Trade with the support of the world’s largest-->
<!--      retail broker.</p>-->

    <div class="section-2">
      <div class="section-2-alpha">

        <div class="section-2-content">
          <p class="text-1">Trusted by</p>
          <div class="seprate">
            <i class='bx bx-group'></i>
            <p class="text-2">7M+ people</p>
          </div>
        </div>

        <div class="vl"></div>

        <div class="section-2-content">
          <p class="text-1">Insurance on custodial assets by</p>
          <div class="seprate">
            <img src="https://nexo.com/media/pages/borrow/4720ba49e0-1703072582/logo-ledger.svg" alt="" class="section-img">
            <img src="https://nexo.com/media/pages/borrow/c1e5c0f697-1707406611/logo-fireblocks-dark.svg" alt="" class="section-img">
          </div>
        </div>

        <div class="vl"></div>

        <div class="section-2-content">
          <p class="text-1">Operating securely since</p>
          <div class="seprate">
            <i class='bx bxs-award'></i>
            <p class="text-2">2016</p>
          </div>
        </div>

        <div class="vl"></div>

        <div class="section-2-content">
          <p class="text-1">4.6</p>
          <p class="text-2">Trustpilot rating</p>
        </div>

      </div>
    </div>

    <p class="section-header-1">Why Use Income And Assets Limited's Credit Lines</p>
    <p class="section-header">Get as much or as little as you want, whenever you want with the most flexible crypto
      credit line out there.</p>
    <div class="section-content">

      <div class="section-content-1" >
        <div class="box">
<!--          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stable_spreads_832d4a7b36.svg" class="about-image" alt="assets-image"/>-->
          <i class='bx bx-timer'></i>
          <h3>Instant Approval</h3>
          <p>You are approved within seconds and you get the funds within 24 hours in most cases.</p>
        </div>
        <div class="box">
<!--          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_stop_out_protection_3058b9de65.svg" class="about-image" alt="assets-image"/>-->

          <div style="display: flex; justify-content: center;">
            <i class='bx bx-euro'></i>
            <i class='bx bx-pound' ></i>
            <i class='bx bx-yen' ></i>
          </div>
          <h3>Multiple Currencies</h3>
          <p>Select between EUR, USD, or GBP or borrow in stablecoins using USDT or USDC.</p>
        </div>
        <div class="box">
<!--          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_swap_free_5ad242f7c9.svg" class="about-image" alt="assets-image"/>-->
            <i class='bx bxs-coin-stack'></i>
          <h3>Backed by Multiple Assets</h3>
          <p>Borrow against not just one cryptocurrency, but your whole digital asset portfolio.</p>
        </div>
      </div>

      <div class="section-content-1" >
        <div class="box">
<!--          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_fast_execution_57c7f263d9.svg" class="about-image" alt="assets-image"/>-->
          <i class='bx bxs-calendar-x'></i>
          <h3>No Installments</h3>
          <p>Pay off your balance partially or fully when you want with no fixed payment schedule.</p>
        </div>
        <div class="box">
<!--          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_zero_stop_out_ca471edf6f.svg" class="about-image" alt="assets-image"/>-->
          <i class='bx bx-repost'></i>
          <h3>Easy Repayment</h3>
          <p>Choose between fiat, crypto, or a combination of both to repay your credit line.</p>
        </div>
        <div class="box">
<!--          <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_leverage_c228f82af1.svg" class="about-image" alt="assets-image"/>-->
          <i class='bx bxs-credit-card'></i>
          <h3>Linked to Your Bank Card</h3>
          <p>Spend your credit line at over 100 million merchants with your Card.</p>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "LoanSection1"
}
</script>

<style scoped>

.seprate{
  display: flex;
  justify-content: center;
  gap: 5px;
  align-content: center;
  align-items: center;
  padding-top: 5px;
}

.section-img{
  padding-right: 10px;
}

.bx{
  font-size: 25px;
}

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
  padding-bottom: 1%;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

.bxs-coin-stack{
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 60px;
  padding-top: 10px;
}

.bx-timer{
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 60px;
  padding-top: 10px;
}

.bxs-calendar-x{
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 65px;
  padding-top: 15px;
}

.bx-repost{
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 70px;
  padding-top: 15px;
}

.bxs-credit-card{
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 70px;
  padding-top: 25px;
}

.bx-euro ,.bx-pound , .bx-yen{
  font-size: 45px;
  padding-top: 25px;
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
  padding-top: 12px;
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
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


.section-2-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  /*margin-top: 3%;*/
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

  .section-2-alpha{
    display: block;
    margin-bottom: 6%;
    margin-left: 8%;
    margin-right: 8%;
  }

  .vl {
    display: none;
  }

  .section-2-content{
    padding-bottom: 5%;
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