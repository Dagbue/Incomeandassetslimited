<template>
  <div class="alpha">
    <p class="section-header-1">Stay ahead of the markets</p>
    <p class="section-header">Get the latest market news, trading analysis, and feature updates.</p>

    <div class="tradingview-widget-container__widget">

    </div>

  </div>
</template>

<script>


export default {
  name: "BlogSection",
  mounted() {
    this.loadTradingViewScript();
  },
  methods: {
    loadTradingViewScript() {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "regular",
        width: "100%",
        height: "600",
        colorTheme: "light",
        locale: "en"
      });
      document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
    }
  }
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
</style>