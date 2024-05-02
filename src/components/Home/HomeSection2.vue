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

  </div>
</template>

<script>
export default {
  name: "HomeSection2"
}
</script>

<style scoped>
.alpha{
  background-image: url("@/assets/background.png");
  /*background-color: #000;*/
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.section-alpha{
  margin-top: 4%;
}
hr.new1 {
  border-top: 1px solid #676767;
  margin-top: 3%;
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
</style>