<template>
  <div class="alpha">

    <div class="header">
      <p class="text-1">Borrow Against 75+ Assets.</p>
      <p class="text-2">A variety of digital assets can be used as collateral to secure your Instant
        Crypto Credit Line.</p>
    </div>
<!--    <div class="header-select">-->
<!--      <p @click="changeScreen" class="btn">Cryptos</p>-->
<!--      <p @click="changeScreen2" class="btn">Forex</p>-->
<!--      <p @click="changeScreen3" class="btn">Stocks</p>-->
<!--    </div>-->

    <crypto-table/>


  </div>
</template>

<script>
import CryptoTable from "@/components/BaseComponents/tables/CryptoTable.vue";

export default {
  name: "LoanSection3",
  components: {CryptoTable}
}
</script>

<style scoped>
/*.alpha{*/
/*  margin-top: 3%;*/
/*  margin-bottom: 5%;*/
/*}*/
.alpha{
  padding-top: 5%;
  padding-bottom: 5%;
  background: #f4f5f6;
}
.header-select{
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 1%;
}

.btn{
  background-color: #070e20;
  border: 1px solid #070e20;
  color: #ffffff;
  padding: 0.6em 30px 0.5em 30px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
}
/*.btn:hover{*/
/*  background-color: #ffcf01;*/
/*  border: 1px solid #ffcf01;*/
/*  color: #FFFFFF;*/
/*}*/

.text-1{
  font-size: 28px;
  text-align: center;
  color: #071333;
  padding-bottom: 15px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  font-size: 18px;
  text-align: center;
  color: #0f171c;
  margin-bottom: 3%;
}

.header{
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 990px) {

}

@media (max-width: 700px){

  .header{
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-1{
    font-size: 24px;
    padding-bottom: 20px;
  }

  .text-2{
    font-size: 16px;
  }

  .header-select{
    gap: 5px;
    margin-top: 3%;
    margin-bottom: 5%;
  }

}

@media (max-width: 500px){

}

</style>