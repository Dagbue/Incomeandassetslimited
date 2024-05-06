<template>
  <div>
    <loan-hero-section/>
    <loan-section1/>
    <loan-section2/>
    <loan-section3/>
    <loan-section4/>
    <loan-section5/>
    <footer-home/>
  </div>
</template>

<script>
import LoanHeroSection from "@/components/Loan/LoanHeroSection.vue";
import LoanSection1 from "@/components/Loan/LoanSection1.vue";
import LoanSection2 from "@/components/Loan/LoanSection2.vue";
import LoanSection3 from "@/components/Loan/LoanSection3.vue";
import LoanSection4 from "@/components/Loan/LoanSection4.vue";
import LoanSection5 from "@/components/Loan/LoanSection5.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "LoanView",
  components: {FooterHome, LoanSection5, LoanSection4, LoanSection3, LoanSection2, LoanSection1, LoanHeroSection}
}
</script>

<style scoped>

</style>