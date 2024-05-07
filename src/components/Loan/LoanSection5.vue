<template>
  <div class="alpha-2">
    <div class="section-1">
      <p class="last-text">Borrow Against Your Crypto from 0% Interest</p>
<!--      <div class="seperate mobile">-->
<!--        <p class="download-sub">support@incomeandassetslimited.com</p>-->
<!--      </div>-->
      <div class="seperate mobile">
        <p class="download-sub">Open your Income And Assets Limited account right now and monetize your digital assets within minutes.</p>
      </div>

      <div class="button-seprate" @click="onPostClick">
        <button class="button">
          Apply Now
          <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />
        </button>

        <!--        <button class="button">-->
        <!--          Contact Us-->
        <!--          <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />-->
        <!--        </button>-->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "LoanSection5",
  methods: {
    onPostClick() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.alpha-2{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 270px;
  background-color: #f4f4f5;
  border-radius: 16px;
  margin-top: 4%;
  margin-bottom: 5%;
}

.section-1{
  text-align: center;
}

.last-text{
  color: #101828;
  font-size: 30px;
  line-height: 44px;
  padding-top: 7%;
  padding-bottom: 0.5%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.button {
  background: #070e20;
  border: solid 1px #070e20;
  color: white;
  cursor: pointer;
  padding: 12px 40px;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
  font-size: 15px;
}

button{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

.button:hover {
  background: #070e20;
  border: solid 1px #070e20;
}

.btn-image{
  width: 15%;
}


.seperate{
  display: flex;
  align-content: center;
  align-items: center;
}

i{
  padding-top: 1.5%;
  font-size: 25px;
  color: #000000;
}

.download-sub{
  color: #000000;
  font-size:18px;
  line-height: 28px;
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 10px;
}
/*.button-seprate{*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  gap: 15px;*/
/*  margin-top: 10px;*/
/*}*/

@media (max-width: 700px){
  .alpha-2{
    width: 410px;
    margin-top: 5%;
    height: 285px;
    padding: 0 15px;
  }

  .last-text {
    font-size: 28px;
    line-height: 35px;
    padding-top: 10.5%;
  }
  button{
    margin-top: unset;
  }
}

@media (max-width: 500px){

  .download-sub{
    font-size: 16px;
    width: 100%;
  }

  .last-text{
    font-size: 27px;
  }

}
</style>