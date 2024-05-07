<template>
  <div class="alpha">
    <div class="section-alpha-1">
      <p class="section-header-1">Choose a Loan Plan</p>
      <p class="section-header">Maximum loan terms vary depending on the investment plan for crypto investments.
        For personal use, loan terms are limited to 3% bi-weekly or 5% monthly.</p>
    </div>

    <div class="section-alpha">

      <div class="third-section top">
        <p class="text-1">Personal Loan</p>
        <p class="text-2">15<span class="text-2-inner">%</span></p>
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">4 Months</p>

        <div class="btn" @click="onPostClick" >
          <p>Apply Now</p>
        </div>

        <div class="separate">
          <p>$10,000 MINIMUM AMOUNT</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p style="font-family: 'BR-Firma-Bold', sans-serif;">REQUIREMENTS</p>
<!--          <i class='bx bxs-info-circle'></i>-->
        </div>

        <div class="separate">
          <p>Register on our website</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Valid ID</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Valid Phone Number</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>SSN</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p style="font-family: 'BR-Firma-Bold', sans-serif;" >Means Of Payment</p>
<!--          <i class='bx bxs-info-circle'></i>-->
        </div>

        <div class="separate">
          <p>BTC & USDT</p>
          <i class='bx bxs-info-circle'></i>
        </div>
      </div>

      <div class="third-section top">
        <p class="text-1">Business Loan</p>
        <p class="text-2">15<span class="text-2-inner">%</span></p>
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">8 Months</p>

        <div class="btn" @click="onPostClick" >
          <p>Apply Now</p>
        </div>

        <div class="separate">
          <p>$50,000 MINIMUM AMOUNT</p>
          <i class='bx bxs-info-circle'></i>
        </div>


        <div class="separate">
          <p style="font-family: 'BR-Firma-Bold', sans-serif;">REQUIREMENTS</p>
          <!--          <i class='bx bxs-info-circle'></i>-->
        </div>

        <div class="separate">
          <p>Register on our website</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Office Tel ☎</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>TIN</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Office address</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Office Utility bill</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Business Owner SSN</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Business Owner Phone number</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p style="font-family: 'BR-Firma-Bold', sans-serif;" >Means Of Payment</p>
          <!--          <i class='bx bxs-info-circle'></i>-->
        </div>

        <div class="separate">
          <p>BTC , USDT and BankWire</p>
          <i class='bx bxs-info-circle'></i>
        </div>
      </div>

      <div class="third-section top">
        <p class="text-1">Investment Loan</p>
        <p class="text-2">15<span class="text-2-inner">%</span></p>
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">12 Months</p>

        <div class="btn" @click="onPostClick" >
          <p>Apply Now</p>
        </div>

        <div class="separate">
          <p>$500,000 MINIMUM AMOUNT</p>
          <i class='bx bxs-info-circle'></i>
        </div>


        <div class="separate">
          <p style="font-family: 'BR-Firma-Bold', sans-serif;">REQUIREMENTS</p>
          <!--          <i class='bx bxs-info-circle'></i>-->
        </div>

        <div class="separate">
          <p>Register on our website</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Valid ID</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Valid Phone Number</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>SSN</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>Utility bill</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p style="font-family: 'BR-Firma-Bold', sans-serif;" >Means Of Payment</p>
          <!--          <i class='bx bxs-info-circle'></i>-->
        </div>

        <div class="separate">
          <p>BTC , USDT and BankWire</p>
          <i class='bx bxs-info-circle'></i>
        </div>


      </div>

    </div>

    <div class="section-1">

      <p class="header">General FAQs</p>

      <section>
        <details>
          <summary>
            How do Income And Assets Limited’s Instant Crypto Credit Lines work?
          </summary>
          <p>
            Unlike a traditional loan that takes your credit score into account, Income And Assets Limited offers
            crypto-backed credit lines where your digital assets act as collateral. Put simply, we give you fiat or
            stablecoins, and you provide crypto as security for repayment..
          </p>
        </details>
        <details>
          <summary>
            How quickly do I get my money?
          </summary>
          <p>
            The Income And Assets Limited crypto-backed credit lines are instant and guaranteed, you will receive
            your funds on the same or the next day.</p>

            <p>The processing time is as follows:</p>

          <p>* Local transfers: 1 business day</p>
          <p>* International transfer: 3 to 5 business days</p>
          <p>* USDT (Tether) and USDC (USD Coin): usually takes no longer than half an hour to you receive the funds.</p>
        </details>

        <details>
          <summary>
            What is the interest rate?
          </summary>
          <p>
            Your interest rate depends on your Loyalty Tier, which is determined by the ratio between the value of your
            Income And Assets Limited Assets against the rest of your portfolio:
          </p>
        </details>
        <details>
          <summary>
            What is loan-to-value (LTV)?
          </summary>
          <p>A credit line’s loan-to-value (LTV) ratio determines the amount of crypto collateral you need in order to take out a crypto credit.</p>

          <p>LTV is calculated as the ratio between the crypto credit amount in USD and the value of the collateral in USD, expressed as a percentage.</p>

          <p>Example:</p>

          <p>* Crypto credit amount: $5,000</p>
          <p>* Value of collateral: $10,000</p>
          <p>* LTV (%) = ($5,000/$10,000)*100% = 50.0%</p>
        </details>

        <details>
          <summary>
            How does Income And Assets Limited keep my collateral safe?
          </summary>
          <p>Income And Assets Limited is raising the bar for the entire blockchain space by utilizing the most
            rigorous KYC and AML policies, impeccable risk assessment, data protection, and enhanced cybersecurity.</p>

          <p>We keep your collateral safe through our multifaceted approach to security, including:</p>

          <p>* Military-grade 256-bit encryption for your Income And Assets Limited account.</p>
          <p>* Storage in Class III vaults through leading blockchain custodians, including Ledger Vault,
            Fireblocks, and others.</p>
          <p>* Insurance from our custodial partners via Lloyd’s of London and Marsh & Arch.</p>
          <p>* ISO/IEC 27001:2013 certificate guaranteeing Income And Assets Limited’s security infrastructure is of
            the highest standard.</p>
        </details>


      </section>

    </div>

    <br/>
    <br/>


  </div>
</template>

<script>
export default {
  name: "LoanSection4",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.alpha{
  padding-top: 5%;
  /*padding-bottom: 3%;*/
  background-image: url("@/assets/background.png");
  /*background-color: #000;*/
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
}
.section-header{
  font-size: 17px;
  color: #0f171c;
  text-align: center;
  font-weight: 300;
  width: 55%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.section-header-1{
  font-size: 33px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1%;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.section-alpha{
  display: flex;
  justify-content: space-evenly;
  margin-right: 3%;
  margin-left: 3%;
}

.section-alpha-2{
  display: flex;
  justify-content: space-evenly;
}

.section-alpha-1{
  display: block;
  text-align: center;
  margin-bottom: 2%;
}

.third-section{
  width: 350px;
  height: 750px;
  background-color: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  border-radius: 12px;
  margin-bottom: 5%;
}

.separate{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 1%;
}

.separate i{
  padding-top: 15px;
  padding-right: 5px;
}

.separate p{
  width: 240px;
  padding-top: 15px;
  font-size: 14px;
  line-height: 24px;
  color: #667085;
  padding-left: 5px;
}

.btn{
  margin-top: 5%;
  margin-bottom: 1%;
}

.btn p{
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 180px;
  height: 44px;
  background: #070e20;
  border: 1px solid #070e20;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  text-align: center;
}



.top{
  margin-top: 1%;
}

.text-1{
  text-align: center;
  padding-top: 9%;
  padding-bottom: 3%;
  font-size: 19px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  text-align: center;
  padding-bottom: 4%;
  font-size: 27px;
  font-weight: bold;
}

.text-2-inner{
  font-size: 14px;
  font-weight: normal;
}

.text-3{
  text-align: center;
  font-size: 16px;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}


.bx{
  color: #070e20;
}

.section-1{
  padding-top: 4%;
  display: flex;
  justify-content: space-evenly;
  /*align-content: center;*/
  /*align-items: center;*/
}
.header{
  font-stretch: normal;
  font-style: normal;
  font-weight: 900;
  letter-spacing: normal;
  font-size: 23px;
  line-height: 1.26;
  margin: 0;
  color: #0f171c;
  width: 25%;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.lawrence{
  padding-left: 5%;
}
.lawrence li{
  padding-bottom: 2px;
}
section {
  width: 42%;
  /*margin: auto;*/
}

details[open] summary ~ * {
  animation: open 0.4s ease-in;
}

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 900;
  list-style: none;
  /*padding-top: 18px;*/
  /*padding-bottom: 10px;*/
  text-transform: uppercase;
  color: #222222;
}

details summary:after {
  content: "+";
  color: #0f171c;
  position: absolute;
  font-size: 1.7rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: bold;
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 2rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 16px;
  margin: 0 0 1rem;
  padding-top: 1rem;
}
details {
  /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);*/
  position: relative;
  padding: 15px;
  margin-bottom: 2%;
  /*border-radius: 5px;*/
  border-bottom: solid 0.125rem #e7eaf0;
}
@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .section-1{
    display: block;
    width: 100%;
  }
  .header{
    width: 100%;
    text-align: center;
  }
  .details summary {
    font-size: 20px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 20px;
  }
  section {
    width: 82%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .section-alpha{
    display: block;
    /*margin-left: 21%;*/
    margin-top: 3.5%;
  }
  .section-alpha-2{
    display: block;
    /*margin-left: 21%;*/
    margin-top: 3.5%;
  }
  .third-section{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .section-header-1{
    font-size: 27px;
  }


  .section-header{
    width: 85%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
}

@media (max-width: 500px) {

}

</style>