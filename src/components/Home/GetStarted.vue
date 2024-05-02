<template>

  <div class="alpha">
    <div class="timeline">
      <p class="section-header-1">Get started</p>
      <p class="section-header">Start trading with ease on our platform.</p>
      <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
        <div class="timeline__event__icon ">
          <i class="fas fa-tarp"></i>
          <div class="timeline__event__date">
            Step 1
          </div>
        </div>
        <div class="timeline__event__content ">
          <div class="timeline__event__title">
            Create Account
          </div>
          <div class="timeline__event__description">
            <p>Create an account and deposit funds to get started.</p>
          </div>
        </div>
      </div>
      <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
        <div class="timeline__event__icon">
          <i class="fas fa-project-diagram"></i>
          <div class="timeline__event__date">
            Step 2
          </div>
        </div>
        <div class="timeline__event__content">
          <div class="timeline__event__title">
            Choose Currency
          </div>
          <div class="timeline__event__description">
            <p>Choose the currency pairs you want to trade.</p>
          </div>
        </div>
      </div>
      <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
        <div class="timeline__event__icon">
          <i class="fas fa-project-diagram"></i>
          <div class="timeline__event__date">
            Step 3
          </div>
        </div>
        <div class="timeline__event__content">
          <div class="timeline__event__title">
            Analyze market
          </div>
          <div class="timeline__event__description">
            <p>Analyze market trends and make informed trading decisions.</p>
          </div>

        </div>
      </div>
      <div class="timeline__event animated fadeInUp timeline__event--type1">
        <div class="timeline__event__icon">
          <i class="fas fa-graduation-cap"></i>
          <div class="timeline__event__date">
            Step 4
          </div>
        </div>
        <div class="timeline__event__content">
          <div class="timeline__event__title">
            Execute trades
          </div>
          <div class="timeline__event__description">
            <p>Execute trades and monitor your portfolio performance.</p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "GetStarted"
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
  padding-bottom: 5%;
  padding-top: 5%;
}

.section-header{
  font-size: 17px;
  color: #0f171c;
  text-align: center;
  font-weight: 300;
  margin-left: 10%;
  margin-right: 10%;
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

.timeline {
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
}

.timeline__event {
  background: #fff;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}
.timeline__event__title {
  font-size: 1.2rem;
  line-height: 1.4;
  text-transform: uppercase;
  font-weight: 600;
  color: #9251ac;
  letter-spacing: 1.5px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.timeline__event__content {
  padding: 20px;
}
.timeline__event__date {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;
}
.timeline__event__icon {
  border-radius: 8px 0 0 8px;
  background: #9251ac;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 40%;
  font-size: 2rem;
  color: #9251ac;
  padding: 20px;
}
.timeline__event__icon i {
  position: absolute;
  top: 50%;
  left: -70px;
  font-size: 2rem;
  transform: translateY(-50%);
}
.timeline__event__description {
  flex-basis: 60%;
}
.timeline__event:after {
  content: "";
  width: 2px;
  height: 100%;
  background: #9251ac;
  position: absolute;
  top: 52%;
  left: -3.5rem;
  z-index: -1;
}
.timeline__event:before {
  content: "";
  width: 5rem;
  height: 5rem;
  position: absolute;
  background: #f6a4ec;
  border-radius: 100%;
  left: -6rem;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid #9251ac;
}
.timeline__event--type2:before {
  background: #87bbfe;
  border-color: #555ac0;
}
.timeline__event--type2:after {
  background: #555ac0;
}
.timeline__event--type2 .timeline__event__date {
  color: #ffffff;
}
.timeline__event--type2 .timeline__event__icon {
  background: #555ac0;
  color: #555ac0;
}
.timeline__event--type2 .timeline__event__title {
  color: #555ac0;
}
.timeline__event--type3:before {
  background: #aff1b6;
  border-color: #24b47e;
}
.timeline__event--type3:after {
  background: #24b47e;
}
.timeline__event--type3 .timeline__event__date {
  color: #ffffff;
}
.timeline__event--type3 .timeline__event__icon {
  background: #24b47e;
  color: #24b47e;
}
.timeline__event--type3 .timeline__event__title {
  color: #24b47e;
}
.timeline__event:last-child:after {
  content: none;
}

@media (max-width: 786px) {
  .timeline__event {
    flex-direction: column;
  }

  .timeline__event__icon {
    border-radius: 4px 4px 0 0;
  }
}
</style>