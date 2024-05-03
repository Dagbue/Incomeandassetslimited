<template>
  <div class="alpha">
<!--    <hero-section/>-->
    <slider-section/>
<!--    <home-section2/>-->
    <home-section3/>
    <home-section4/>
    <home-section5/>
    <home-section6/>
    <features-part/>
    <get-started/>
    <home-section7/>
    <home-section8/>
<!--    <faq-section1/>-->
    <home-section9/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>


// import HeroSection from "@/components/Home/HeroSection.vue";
// import HomeSection2 from "@/components/Home/HomeSection2.vue";
import HomeSection3 from "@/components/Home/HomeSection3.vue";
import HomeSection4 from "@/components/Home/HomeSection4.vue";
import HomeSection5 from "@/components/Home/HomeSection5.vue";
import HomeSection6 from "@/components/Home/HomeSection6.vue";
import HomeSection7 from "@/components/Home/HomeSection7.vue";
import HomeSection8 from "@/components/Home/HomeSection8.vue";
// import FaqSection1 from "@/components/Home/FaqSection1.vue";
import HomeSection9 from "@/components/Home/HomeSection9.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import GetStarted from "@/components/Home/GetStarted.vue";
import SliderSection from "@/components/Home/SliderSection.vue";
import FeaturesPart from "@/components/Home/FeaturesPart.vue";

export default {
  name: 'HomeView',
  components: {
    FeaturesPart,
    SliderSection,
    GetStarted,
    FooterHome,
    ReadyToWork,
    HomeSection9,
    // FaqSection1,
    HomeSection8,
    HomeSection7,
    HomeSection6,
    HomeSection5,
    HomeSection4,
    HomeSection3,
    // HomeSection2,
    // HeroSection
  },
}
</script>
