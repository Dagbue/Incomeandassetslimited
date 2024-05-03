<template>
  <div class="alpha">



    <div class="section-alpha">

      <hr class="new1">

      <div class="section">

        <div class="section-inner">
          <img src="@/assets/people-group.svg" alt="" class="image" />
          <p class="text-1">700,000+ active traders</p>
        </div>

        <div class="section-inner">
          <img src="@/assets/license.svg" alt="" class="image" />
          <p class="text-1">Multiple regulatory licenses</p>
        </div>

        <div class="section-inner">
          <img src="@/assets/custom_support.svg" alt="" class="image" />
          <p class="text-1">24/7 customer support</p>
        </div>

        <div class="section-inner">
          <img src="@/assets/certificate.svg" alt="" class="image" />
          <p class="text-1">PCI DSS certified</p>
        </div>

      </div>


    </div>




    <p class="section-header-1">Our Features</p>
    <p class="section-header">Give your trading strategy the advantage with our better-than-market conditions.</p>


    <div class="card-alpha">
      <div class="cards">

        <div class="card card1">

          <div class="container">
            <img src="https://media.istockphoto.com/id/1169808873/photo/father-and-son-looking-at-laptop-display.jpg?s=612x612&w=0&k=20&c=7w9iIH_WvR3SzkwDlAL05r12d4ABhPIGVo8a98-llMo=" alt="" class="" />
          </div>

          <div class="details">
            <h3>Retirement & College Savings</h3>
            <p>Promoting financial security by advocating prudent spending today for a brighter tomorrow.</p>
          </div>

        </div>

        <div class="card card2">

          <div class="container">
            <img src="https://media.istockphoto.com/id/1470913692/photo/high-risk-of-business-decision-making-and-risk-analysis-measuring-level-bar-virtual-risky.jpg?s=612x612&w=0&k=20&c=X6zVe1wCYmFBXEgUDTw2LEBtfIwKtBW6w1hBSzBKdH0=" alt="" class="" />
          </div>

          <div class="details">
            <h3>Risk Management</h3>
            <p>We simplify global investment choices with risk evaluation and expert advice.</p>
          </div>

        </div>

        <div class="card card3">

          <div class="container">
            <img src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" class="" />
          </div>

          <div class="details">
            <h3>Financial Market</h3>
            <p>Parent company invests in cryptocurrency and forex, partnering in foreign projects spanning
              Oil & Gas, Construction, and Binary Trades.</p>
          </div>

        </div>

        <div class="card card4">

          <div class="container">
            <img src="https://media.istockphoto.com/id/1372521126/photo/increased-interest-rates-bond-coupons-yields-and-positiv-changes-in-basis-points.jpg?s=612x612&w=0&k=20&c=O8P9spxHMTnCBexnH8OigmomAyybMEom6MoAlOIW3Tw=" alt="" class="" />
          </div>

          <div class="details">
            <h3>Stocks, Bonds & Mutual Funds</h3>
            <p>Stocks pose higher risk with market volatility but offer potential for high returns; we
              provide portfolio management and financial advice.</p>
          </div>

        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "HomeSection3",
}
</script>


<style scoped>
/*.alpha{*/
/*  padding-bottom: 5%;*/
/*  padding-top: 5%;*/
/*}*/

.alpha{
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

.cards{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
  padding: 20px;
  grid-gap: 40px;
}

.card{
  background-color: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  border-radius: 8px;
}

.container{
  position: relative;
  clip-path: polygon(0 0,100% 0, 100% 85%, 0 100%);
}

img{
  width: 100%;
  display: block;
  border-radius: 20px 20px 0 0;
}

.card-alpha{
  display: grid;
  margin-left: 10%;
  margin-right: 10%;
  place-items: center center;
}

.container:after{
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px 20px 0 0;
  opacity: 0.9;
}

.details{
  padding: 20px 10px;
}

.details>h3{
  color: #0f171c;
  font-weight: 600;
  font-size: 18px;
  margin: 10px 0 15px 0;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.details>p{
  color: #697582;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
}

.section-alpha{
  margin-bottom: 1%;
}

hr.new1 {
  border-top: 1px solid #676767;
  /*margin-top: 3%;*/
  width: 85%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.section{
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  padding-bottom: 20px;
}
.section-inner{
  display: flex;
  align-items: center;
  align-content: center;
}
.text-1{
  padding-left: 10px;
}
.image{
  width: 25%;
}

@media (max-width: 700px) {
  .section-header{
    font-size: 16px;
    margin-left: 8%;
    margin-right: 8%;
  }
  .section-header-1{
    font-size: 28px;
  }
  .cards{
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    grid-gap: 30px;
  }

  .section{
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .section-inner{
    margin-left: 15%;
    margin-bottom: 3%;
  }

  .image{
    width: 10%;
  }
}


@media (max-width: 500px) {
  .image{
    width: 13%;
  }


}
</style>