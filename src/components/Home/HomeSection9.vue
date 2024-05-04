<template>
  <div class="alpha">

    <div class="section-1">
      <h2 class="text-1" style="text-align: center;">A Unified Platform.</h2>
      <p class="text-2">All-Inclusive suite for investing, brokerage, custody and post-trade processing.</p>

      <div class="section-1-inner">


        <div class="section-1-inner-content">
          <img src="https://alpaca.markets/img/homepage/unified/trade.svg" alt="" class="image"/>
          <br/>
          <p>Trading</p>
        </div>

        <div class="section-1-inner-content">
          <img src="https://alpaca.markets/img/homepage/unified/integrations.svg" alt="" class="image"/>
          <p>Integrations</p>
        </div>

        <div class="section-1-inner-content">
          <img src="https://alpaca.markets/img/homepage/unified/broker.svg" alt="" class="image"/>
          <br/>
          <p>Brokerage Infrastructure</p>
        </div>

        <div class="section-1-inner-content">
          <img src="https://alpaca.markets/img/homepage/unified/community.svg" alt="" class="image"/>
          <br/>
          <p>Community</p>
        </div>


      </div>

      <p class="text-2" style="text-align: center;font-family: 'BR-Firma-Bold', sans-serif;">Get Started</p>

      <div class="btn-part">
        <div class="btn-1" @click="onPostClick">Create Account</div>
        <p class="btn-2" @click="onPostClick2">Log In</p>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "HomeSection9",
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
.alpha{
  padding-top: 5%;
  padding-bottom: 5%;
  background: #f4f5f6;
}
.section-1-inner{
  display: flex;
  justify-content: center;
  gap: 30px;
}
.section-1-inner-content{
  text-align: center;
}
.section-1-inner-content p{
  font-size: 17px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  width: 200px;
}

.text-1{
  font-size: 25px;
  padding-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.text-2{
  font-size: 18px;
  text-align: center;
  padding-bottom: 1%;
}
.bx{
  font-size: 30px;
  margin-top: 10px;
}

.image-part{
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 20px;
}

.btn-part{
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 48px;
  padding: 8px 16px;
  border-radius: 14px;
  gap: 8px;
  background-color: transparent;
  border: 1px solid #d0d0d0;
  color: #191C1F;
  width: 180px;
}

.btn-2{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 48px;
  padding: 8px 16px;
  border-radius: 14px;
  gap: 8px;
  background-color: #070e20;
  border: 1px solid #070e20;
  width: 180px;
  color: #ffffff;
}


@media (max-width: 990px){

  .image{
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3%;
  }


  .alpha{
    padding-top: 10%;
    padding-bottom: 10%;
  }

}

@media (max-width: 500px){

  .section-1-inner{
    display: block;
  }

  .image{
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    width: 180px;
  }

  .btn-part{
    margin-top: 5%;
  }

  .text-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>