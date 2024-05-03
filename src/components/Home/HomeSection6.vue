<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-2">
        <img src="@/assets/padlocks.svg" alt="" class="image" />
      </div>

      <div class="section-1">
        <p class="text-1">Fortified Protection<br/>Around the Clock</p>
        <p class="text-2">
          Trust in continuous security with a dedicated team of 2,500 experts protecting your investments in crypto
          stocks and forex trading. Join Income And Assets Limited and take advantage of our robust security measures designed to
          shield you from potential fraud, ensuring your trading activities are safe and secure. Benefit from our
          vigilant protection and invest with confidence in the dynamic world of cryptocurrency and forex markets.</p>
        <div class="btn-1" @click="onPostClick">
          Get Started
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection6",
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
  background-image: url("@/assets/securitybgd.svg");
  background-color: #000;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}
.section-alpha{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}

.section-1{
  /*margin-bottom: 10px;*/
}

.section-2{
  /*margin-bottom: 80px;*/
}

.text-1{
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 20px;
  color: #FFFFFF;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 20px;
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  background-color: #ffffff;
  border: 1px solid #FFFFFF;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  color: #191C1F;
  margin-bottom: 86px;
}
.image{
  margin-top: 100px;
  margin-bottom: 43px;
}

@media (max-width: 990px) {
  .image{
    width: 100%;
  }
}

@media (max-width: 700px) {
  .text-1{
    font-size: 43px;
    line-height: 45px;
    margin-bottom: 9px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    font-size: 16px;
    line-height: 23px;
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

  .alpha{
    background-size: cover;
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