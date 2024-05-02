<template>
  <div class="alpha">
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

  </div>
</template>

<script>
export default {
  name: "AboutSection1"
}
</script>

<style scoped>
.alpha{
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

.section-2-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-top: 3%;
  margin-bottom: 2%;
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



</style>