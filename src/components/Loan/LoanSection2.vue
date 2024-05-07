<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">Borrow at Just 0% Interest</p>
        <p class="text-2">Join our Loyalty Program and get funds at no cost! Just enable our Low-Interest Borrowing
          feature to automatically keep your LTV ratio below 20% and enjoy our best rates.</p>
        <div class="btn-1">
          Get Started
          <img src="@/assets/arrow-right-line.svg" alt="" class="" />
        </div>
      </div>

      <div class="section-2">
        <img src="https://nexo.com/media/pages/borrow/e1da3d75ff-1692001860/0-apr-mockup.png" alt="" class="image" />
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "LoanSection2"
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
}

.text-1{
  font-size: 50px;
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
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: block;
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
  margin-bottom: 20px;
}

.image{
  width: 75%;
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


  .btn-1{
    height: 40px;
  }

  .text-2{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>