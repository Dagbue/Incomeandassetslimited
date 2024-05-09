<template>
  <div class="admin">

    <form v-show="this.tradeName === 'Forex'" class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">PLACE TRADE</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Select Trade</label>
        <select name="tradeType" id="tradeType" required v-model="tradeName">
          <option selected disabled value="">Select Trade</option>
          <option value="Forex">Forex</option>
          <option value="Crypto">Crypto</option>
          <option value="CFD">CFD</option>
          <option value="Stocks">Stocks</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="tradeAmount" required/>
      </div>

      <div class="form-group">
        <label class="label">Trading Pair</label>
        <select name="tradingPair" id="tradingPair" required v-model="tradePair" >
          <option selected disabled value="">Choose Trading Pair</option>
          <option value="USD/CAD">USD/CAD</option>
          <option value="USD/CHF">USD/CHF</option>
          <option value="USD/JPY">USD/JPY</option>
          <option value="EUR/USD">EUR/USD</option>
          <option value="GBP/USD">GBP/USD</option>
          <option value="NZD/USD">NZD/USD</option>
          <option value="AUD/CAD">AUD/CAD</option>
          <option value="AUD/USD">AUD/USD</option>
          <option value="EUR/GBP">EUR/GBP</option>
          <option value="GBP/AUD">GBP/AUD</option>
          <option value="EUR/AUD">EUR/AUD</option>
          <option value="AUD/CHF">AUD/CHF</option>
          <option value="GBP/CHF">GBP/CHF</option>
          <option value="GBP/JPY">GBP/JPY</option>
          <option value="AUD/JPY">AUD/JPY</option>
          <option value="EUR/JPY">EUR/JPY</option>
          <option value="AUD/NZD">AUD/NZD</option>
          <option value="EUR/CHF">EUR/CHF</option>
          <option value="NZD/JPY">NZD/JPY</option>
          <option value="CAD/CHF">CAD/CHF</option>
          <option value="GBP/NZD">GBP/NZD</option>
          <option value="CHF/JPY">CHF/JPY</option>
          <option value="NZD/CAD">NZD/CAD</option>
          <option value="NZD/CHF">NZD/CHF</option>
          <option value="USD/ZAR">USD/ZAR</option>
          <option value="EUR/ZAR">EUR/ZAR</option>
          <option value="GBP/ZAR">GBP/ZAR</option>
          <option value="AUD/ZAR">AUD/ZAR</option>
          <option value="CAD/ZAR">CAD/ZAR</option>
          <option value="NZD/ZAR">NZD/ZAR</option>
          <option value="CHF/ZAR">CHF/ZAR</option>
          <option value="JPY/ZAR">JPY/ZAR</option>
          <option value="USD/MXN">USD/MXN</option>
          <option value="EUR/MXN">EUR/MXN</option>
          <option value="GBP/MXN">GBP/MXN</option>
          <option value="AUD/MXN">AUD/MXN</option>
          <option value="CAD/MXN">CAD/MXN</option>
          <option value="NZD/MXN">NZD/MXN</option>
          <option value="CHF/MXN">CHF/MXN</option>
          <option value="JPY/MXN">JPY/MXN</option>
          <option value="USD/TRY">USD/TRY</option>
          <option value="EUR/TRY">EUR/TRY</option>
          <option value="GBP/TRY">GBP/TRY</option>
          <option value="AUD/TRY">AUD/TRY</option>
          <option value="CAD/TRY">CAD/TRY</option>
          <option value="NZD/TRY">NZD/TRY</option>
          <option value="CHF/TRY">CHF/TRY</option>
          <option value="JPY/TRY">JPY/TRY</option>
          <option value="USD/BRL">USD/BRL</option>
          <option value="EUR/BRL">EUR/BRL</option>
          <option value="GBP/BRL">GBP/BRL</option>
          <option value="AUD/BRL">AUD/BRL</option>
          <option value="CAD/BRL">CAD/BRL</option>
          <option value="NZD/BRL">NZD/BRL</option>
          <option value="CHF/BRL">CHF/BRL</option>
          <option value="JPY/BRL">JPY/BRL</option>
          <option value="USD/RUB">USD/RUB</option>
          <option value="EUR/RUB">EUR/RUB</option>
          <option value="GBP/RUB">GBP/RUB</option>
          <option value="AUD/RUB">AUD/RUB</option>
          <option value="CAD/RUB">CAD/RUB</option>
          <option value="NZD/RUB">NZD/RUB</option>
          <option value="CHF/RUB">CHF/RUB</option>
          <option value="JPY/RUB">JPY/RUB</option>
          <option value="USD/INR">USD/INR</option>
          <option value="EUR/INR">EUR/INR</option>
          <option value="GBP/INR">GBP/INR</option>
          <option value="AUD/INR">AUD/INR</option>
          <option value="CAD/INR">CAD/INR</option>
          <option value="NZD/INR">NZD/INR</option>
          <option value="CHF/INR">CHF/INR</option>
          <option value="JPY/INR">JPY/INR</option>
          <option value="USD/CNY">USD/CNY</option>
          <option value="EUR/CNY">EUR/CNY</option>
          <option value="GBP/CNY">GBP/CNY</option>
          <option value="AUD/CNY">AUD/CNY</option>
          <option value="CAD/CNY">CAD/CNY</option>
          <option value="NZD/CNY">NZD/CNY</option>
          <option value="CHF/CNY">CHF/CNY</option>
          <option value="JPY/CNY">JPY/CNY</option>
          <option value="USD/KRW">USD/KRW</option>
          <option value="EUR/KRW">EUR/KRW</option>
          <option value="GBP/KRW">GBP/KRW</option>
          <option value="AUD/KRW">AUD/KRW</option>
          <option value="CAD/KRW">CAD/KRW</option>
          <option value="NZD/KRW">NZD/KRW</option>
          <option value="CHF/KRW">CHF/KRW</option>
          <option value="JPY/KRW">JPY/KRW</option>
          <option value="USD/PHP">USD/PHP</option>
          <option value="EUR/PHP">EUR/PHP</option>
          <option value="GBP/PHP">GBP/PHP</option>
          <option value="AUD/PHP">AUD/PHP</option>
          <option value="CAD/PHP">CAD/PHP</option>
          <option value="NZD/PHP">NZD/PHP</option>
          <option value="CHF/PHP">CHF/PHP</option>
          <option value="JPY/PHP">JPY/PHP</option>
          <option value="USD/IDR">USD/IDR</option>
          <option value="EUR/IDR">EUR/IDR</option>
          <option value="GBP/IDR">GBP/IDR</option>
          <option value="AUD/IDR">AUD/IDR</option>
          <option value="CAD/IDR">CAD/IDR</option>
          <option value="NZD/IDR">NZD/IDR</option>
          <option value="CHF/IDR">CHF/IDR</option>
          <option value="JPY/IDR">JPY/IDR</option>
          <option value="USD/THB">USD/THB</option>
          <option value="EUR/THB">EUR/THB</option>
          <option value="GBP/THB">GBP/THB</option>
          <option value="AUD/THB">AUD/THB</option>
          <option value="CAD/THB">CAD/THB</option>
          <option value="NZD/THB">NZD/THB</option>
          <option value="CHF/THB">CHF/THB</option>
          <option value="JPY/THB">JPY/THB</option>
          <option value="USD/MYR">USD/MYR</option>
          <option value="EUR/MYR">EUR/MYR</option>
          <option value="GBP/MYR">GBP/MYR</option>
          <option value="AUD/MYR">AUD/MYR</option>
          <option value="CAD/MYR">CAD/MYR</option>
          <option value="NZD/MYR">NZD/MYR</option>
          <option value="CHF/MYR">CHF/MYR</option>
          <option value="JPY/MYR">JPY/MYR</option>
          <option value="USD/VND">USD/VND</option>
          <option value="EUR/VND">EUR/VND</option>
          <option value="GBP/VND">GBP/VND</option>
          <option value="AUD/VND">AUD/VND</option>
          <option value="CAD/VND">CAD/VND</option>
          <option value="NZD/VND">NZD/VND</option>
          <option value="CHF/VND">CHF/VND</option>
          <option value="JPY/VND">JPY/VND</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Interval (Time)</label>
        <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >
          <option selected disabled value="">Trade Interval (Time)</option>
          <option value="1 min">1 min</option>
          <option value="3 min">3 min</option>
          <option value="5 min">5 min</option>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
          <option value="1 day">1 day</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Type</label>
        <select name="tradeType" id="tradeType" required v-model="tradeType">
          <option selected disabled value="">Trade Type</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Leverage</label>
        <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >
          <option selected disabled value="">Trade Type</option>
          <option value="0.5X">0.5X</option>
          <option value="1.0X">1.0X</option>
          <option value="1.5X">1.5X</option>
          <option value="2.0X">2.0X</option>
          <option value="5X">5X</option>
          <option value="10X">10X</option>
        </select>
      </div>

      <base-button :loading="loading" style="background-color: #5d78ff;border: 1px solid #5d78ff;">Place Trade</base-button>
    </form>

    <form v-show="this.tradeName === 'Crypto'" class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">PLACE TRADE</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email
          {{tradePair}}</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Select Trade</label>
        <select name="tradeType" id="tradeType" required v-model="tradeName">
          <option selected disabled value="">Select Trade</option>
          <option value="Forex">Forex</option>
          <option value="Crypto">Crypto</option>
          <option value="CFD">CFD</option>
          <option value="Stocks">Stocks</option>
        </select>
      </div>


      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="tradeAmount" required/>
      </div>

      <div  class="form-group">
              <label class="label">Trading Pair</label>
              <select name="tradingPair" id="tradingPair" required v-model="tradePair" >
                <option selected disabled value="">Choose Trading Pair</option>
                <option value="BCH/BTC">BCH/BTC</option>
                <option value="BCH/EUR">BCH/EUR</option>
                <option value="BCH/GBP">BCH/GBP</option>
                <option value="BTC-EOS">BTC-EOS</option>
                <option value="BTC/EUR">BTC/EUR</option>
                <option value="BTC/GBP">BTC/GBP</option>
                <option value="BTC/USD">BTC/USD</option>
                <option value="BTC/USDC">BTC/USDC</option>
                <option value="EOS/BTC">EOS/BTC</option>
                <option value="EOS/EUR">EOS/EUR</option>
                <option value="EOS/USD">EOS/USD</option>
                <option value="ETC/BTC">ETC/BTC</option>
                <option value="ETC/EUR">ETC/EUR</option>
                <option value="ETC/GBP">ETC/GBP</option>
                <option value="ETC/USD">ETC/USD</option>
                <option value="ETH/BTC">ETH/BTC</option>
                <option value="ETH/EUR">ETH/EUR</option>
                <option value="ETH/GBP">ETH/GBP</option>
                <option value="ETH/USD">ETH/USD</option>
                <option value="LTC/BTC">LTC/BTC</option>
                <option value="LTC/EUR">LTC/EUR</option>
                <option value="LTC/GBP">LTC/GBP</option>
                <option value="LTC/USD">LTC/USD</option>
                <option value="MKR/BTC">MKR/BTC</option>
                <option value="PCP-BTC">PCP-BTC</option>
                <option value="REP/BTC">REP/BTC</option>
                <option value="REP/USD">REP/USD</option>
                <option value="TXR/GBP">TXR/GBP</option>
                <option value="XLM/BTC">XLM/BTC</option>
                <option value="XLM/EUR">XLM/EUR</option>
                <option value="XLM/USD">XLM/USD</option>
                <option value="XRP/BTC">XRP/BTC</option>
                <option value="XRP/EUR">XRP/EUR</option>
                <option value="XRP/USD">XRP/USD</option>
                <option value="ZEC/BTC">ZEC/BTC</option>
                <option value="ZRX/BTC">ZRX/BTC</option>
                <option value="ZRX/EUR">ZRX/EUR</option>
                <option value="ZRX/USD">ZRX/USD</option>
                <option value="ADA/BTC">ADA/BTC</option>
                <option value="ADA/EUR">ADA/EUR</option>
                <option value="ADA/GBP">ADA/GBP</option>
                <option value="ADA/USD">ADA/USD</option>
                <option value="ADA/ETH">ADA/ETH</option>
                <option value="BNB/BTC">BNB/BTC</option>
                <option value="BNB/EUR">BNB/EUR</option>
                <option value="BNB/GBP">BNB/GBP</option>
                <option value="BNB/USD">BNB/USD</option>
                <option value="BNB/ETH">BNB/ETH</option>
                <option value="DOGE/BTC">DOGE/BTC</option>
                <option value="DOGE/EUR">DOGE/EUR</option>
                <option value="DOGE/GBP">DOGE/GBP</option>
                <option value="DOGE/USD">DOGE/USD</option>
                <option value="DOGE/ETH">DOGE/ETH</option>
                <option value="DOT/BTC">DOT/BTC</option>
                <option value="DOT/EUR">DOT/EUR</option>
                <option value="DOT/GBP">DOT/GBP</option>
                <option value="DOT/USD">DOT/USD</option>
                <option value="DOT/ETH">DOT/ETH</option>
                <option value="LINK/BTC">LINK/BTC</option>
                <option value="LINK/EUR">LINK/EUR</option>
                <option value="LINK/GBP">LINK/GBP</option>
                <option value="LINK/USD">LINK/USD</option>
                <option value="LINK/ETH">LINK/ETH</option>
                <option value="NEO/BTC">NEO/BTC</option>
                <option value="NEO/EUR">NEO/EUR</option>
                <option value="NEO/GBP">NEO/GBP</option>
                <option value="NEO/USD">NEO/USD</option>
                <option value="NEO/ETH">NEO/ETH</option>
                <option value="TRX/BTC">TRX/BTC</option>
                <option value="TRX/EUR">TRX/EUR</option>
                <option value="TRX/GBP">TRX/GBP</option>
                <option value="TRX/USD">TRX/USD</option>
                <option value="TRX/ETH">TRX/ETH</option>
                <option value="VET/BTC">VET/BTC</option>
                <option value="VET/EUR">VET/EUR</option>
                <option value="VET/GBP">VET/GBP</option>
                <option value="VET/USD">VET/USD</option>
                <option value="VET/ETH">VET/ETH</option>
                <option value="SOL/BTC">SOL/BTC</option>
                <option value="SOL/EUR">SOL/EUR</option>
                <option value="SOL/GBP">SOL/GBP</option>
                <option value="SOL/USD">SOL/USD</option>
                <option value="SOL/ETH">SOL/ETH</option>
                <option value="ALGO/BTC">ALGO/BTC</option>
                <option value="ALGO/EUR">ALGO/EUR</option>
                <option value="ALGO/GBP">ALGO/GBP</option>
                <option value="ALGO/USD">ALGO/USD</option>
                <option value="ALGO/ETH">ALGO/ETH</option>
                <option value="FIL/BTC">FIL/BTC</option>
                <option value="FIL/EUR">FIL/EUR</option>
                <option value="FIL/GBP">FIL/GBP</option>
                <option value="FIL/USD">FIL/USD</option>
                <option value="FIL/ETH">FIL/ETH</option>
                <option value="UNI/BTC">UNI/BTC</option>
                <option value="UNI/EUR">UNI/EUR</option>
                <option value="UNI/GBP">UNI/GBP</option>
                <option value="UNI/USD">UNI/USD</option>
                <option value="UNI/ETH">UNI/ETH</option>
                <option value="AAVE/BTC">AAVE/BTC</option>
                <option value="AAVE/EUR">AAVE/EUR</option>
                <option value="AAVE/GBP">AAVE/GBP</option>
                <option value="AAVE/USD">AAVE/USD</option>
                <option value="AAVE/ETH">AAVE/ETH</option>
                <option value="XTZ/BTC">XTZ/BTC</option>
                <option value="XTZ/EUR">XTZ/EUR</option>
                <option value="XTZ/GBP">XTZ/GBP</option>
                <option value="XTZ/USD">XTZ/USD</option>
                <option value="XTZ/ETH">XTZ/ETH</option>
                <option value="SHIB/BTC">SHIB/BTC</option>
                <option value="SHIB/EUR">SHIB/EUR</option>
                <option value="SHIB/GBP">SHIB/GBP</option>
                <option value="SHIB/USD">SHIB/USD</option>
                <option value="SHIB/ETH">SHIB/ETH</option>
                <option value="AVAX/BTC">AVAX/BTC</option>
                <option value="AVAX/EUR">AVAX/EUR</option>
                <option value="AVAX/GBP">AVAX/GBP</option>
                <option value="AVAX/USD">AVAX/USD</option>
                <option value="AVAX/ETH">AVAX/ETH</option>
                <option value="COMP/BTC">COMP/BTC</option>
                <option value="COMP/EUR">COMP/EUR</option>
                <option value="COMP/GBP">COMP/GBP</option>
                <option value="COMP/USD">COMP/USD</option>
                <option value="COMP/ETH">COMP/ETH</option>
                <option value="MATIC/BTC">MATIC/BTC</option>
                <option value="MATIC/EUR">MATIC/EUR</option>
                <option value="MATIC/GBP">MATIC/GBP</option>
                <option value="MATIC/USD">MATIC/USD</option>
                <option value="MATIC/ETH">MATIC/ETH</option>
                <option value="KSM/BTC">KSM/BTC</option>
                <option value="KSM/EUR">KSM/EUR</option>
                <option value="KSM/GBP">KSM/GBP</option>
                <option value="KSM/USD">KSM/USD</option>
                <option value="KSM/ETH">KSM/ETH</option>
                <option value="ICP/BTC">ICP/BTC</option>
                <option value="ICP/EUR">ICP/EUR</option>
                <option value="ICP/GBP">ICP/GBP</option>
                <option value="ICP/USD">ICP/USD</option>
                <option value="ICP/ETH">ICP/ETH</option>
              </select>
            </div>

      <div class="form-group">
        <label class="label">Trade Interval (Time)</label>
        <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >
          <option selected disabled value="">Trade Interval (Time)</option>
          <option value="1 min">1 min</option>
          <option value="3 min">3 min</option>
          <option value="5 min">5 min</option>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
          <option value="1 day">1 day</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Type</label>
        <select name="tradeType" id="tradeType" required v-model="tradeType">
          <option selected disabled value="">Trade Type</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Leverage</label>
        <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >
          <option selected disabled value="">Trade Type</option>
          <option value="0.5X">0.5X</option>
          <option value="1.0X">1.0X</option>
          <option value="1.5X">1.5X</option>
          <option value="2.0X">2.0X</option>
          <option value="5X">5X</option>
          <option value="10X">10X</option>
        </select>
      </div>

      <base-button :loading="loading" style="background-color: #5d78ff;border: 1px solid #5d78ff;">Place Trade</base-button>
    </form>

    <form v-show="this.tradeName === 'CFD'" class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">PLACE TRADE</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email
          {{tradePair}}</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Select Trade</label>
        <select name="tradeType" id="tradeType" required v-model="tradeName">
          <option selected disabled value="">Select Trade</option>
          <option value="Forex">Forex</option>
          <option value="Crypto">Crypto</option>
          <option value="CFD">CFD</option>
          <option value="Stocks">Stocks</option>
        </select>
      </div>


      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="tradeAmount" required/>
      </div>
      <div  class="form-group">
                <label class="label">Trading Pair</label>
                <select name="tradingPair" id="tradingPair" required v-model="tradePair" >
                  <option selected disabled value="">Choose Trading Pair</option>
                  <option :value="null" disabled>Choose Trading Pair</option>
                  <option value="US 30">US 30</option>
                  <option value="UKX">UKX</option>
                  <option value="VIX Volatility Index">VIX Volatility Index</option>
                  <option value="Germany 30">Germany 30</option>
                  <option value="USA 500">USA 500</option>
                  <option value="US Tech 100">US Tech 100</option>
                  <option value="Japan 225">Japan 225</option>
                  <option value="Europe 50">Europe 50</option>
                  <option value="US Wall St 30">US Wall St 30</option>
                  <option value="AUXAUD">AUXAUD</option>
                  <option value="BCOUSD">BCOUSD</option>
                  <option value="WEST TEXAS OIL">WEST TEXAS OIL</option>
                  <option value="CAC40">CAC40</option>
                  <option value="DXY">DXY</option>
                  <option value="EU50">EU50</option>
                  <option value="FR40">FR40</option>
                  <option value="GRXEUR">GRXEUR</option>
                  <option value="HELCHF">HELCHF</option>
                  <option value="JPXJPY">JPXJPY</option>
                  <option value="KRUUSD">KRUUSD</option>
                  <option value="LTNEUR">LTNEUR</option>
                  <option value="RUA">RUA</option>
                  <option value="TR03">TR03</option>
                  <option value="USDBRO">USDBRO</option>
                  <option value="S&amp;P 100">S&amp;P 100</option>
                  <option value="SXE5">SXE5</option>
                  <option value="DOECHF">DOECHF</option>
                  <option value="FAANG">FAANG</option>
                  <option value="GRXEUR">GRXEUR</option>
                  <option value="VRLCHF">VRLCHF</option>
                  <option value="XPTUSD">XPTUSD</option>
                  <option value="ZA20">ZA20</option>
                  <option value="HK50">HK50</option>
                  <option value="ID05Y">ID05Y</option>
                  <option value="US Small 200">US Small 200</option>
                  <option value="NY Tech">NY Tech</option>
                  <option value="US MidCap 400">US MidCap 400</option>
                  <option value="China A50">China A50</option>
                  <option value="India 50">India 50</option>
                  <option value="Singapore 30">Singapore 30</option>
                  <option value="Taiwan Index">Taiwan Index</option>
                  <option value="Brazil 50">Brazil 50</option>
                  <option value="Mexico 35">Mexico 35</option>
                  <option value="Russia 50">Russia 50</option>
                  <option value="Turkey 20">Turkey 20</option>
                  <option value="South Africa 40">South Africa 40</option>
                  <option value="Egypt Index">Egypt Index</option>
                  <option value="Nigeria 30">Nigeria 30</option>
                  <option value="Vietnam 30">Vietnam 30</option>
                  <option value="Gulf 20">Gulf 20</option>
                  <option value="ASEAN 5">ASEAN 5</option>
                  <option value="MENA 50">MENA 50</option>
                  <option value="Nordic 30">Nordic 30</option>
                  <option value="Baltic 20">Baltic 20</option>
                  <option value="Poland 20">Poland 20</option>
                  <option value="Hungary 12">Hungary 12</option>
                  <option value="Czech 20">Czech 20</option>
                  <option value="Slovakia Index">Slovakia Index</option>
                  <option value="Romania 15">Romania 15</option>
                  <option value="Bulgaria 10">Bulgaria 10</option>
                  <option value="Malta Index">Malta Index</option>
                  <option value="Cyprus Index">Cyprus Index</option>
                  <option value="Adriatic 20">Adriatic 20</option>
                  <option value="Baltic 10">Baltic 10</option>
                  <option value="Canada 60">Canada 60</option>
                  <option value="Australia 200">Australia 200</option>
                  <option value="New Zealand 50">New Zealand 50</option>
                  <option value="Chile 40">Chile 40</option>
                  <option value="Argentina 30">Argentina 30</option>
                  <option value="Peru 25">Peru 25</option>
                  <option value="Colombia 20">Colombia 20</option>
                  <option value="Venezuela 20">Venezuela 20</option>
                  <option value="Panama 20">Panama 20</option>
                  <option value="Uruguay Index">Uruguay Index</option>
                  <option value="Paraguay Index">Paraguay Index</option>
                  <option value="Iran 30">Iran 30</option>
                  <option value="Pakistan 50">Pakistan 50</option>
                  <option value="Bangladesh 30">Bangladesh 30</option>
                  <option value="Malaysia 30">Malaysia 30</option>
                  <option value="Philippines 30">Philippines 30</option>
                  <option value="Thailand 50">Thailand 50</option>
                  <option value="Myanmar Index">Myanmar Index</option>
                  <option value="Cambodia Index">Cambodia Index</option>
                  <option value="Laos Index">Laos Index</option>
                  <option value="Mongolia Index">Mongolia Index</option>
                  <option value="UAE 40">UAE 40</option>
                  <option value="Saudi 30">Saudi 30</option>
                  <option value="Qatar 20">Qatar 20</option>
                  <option value="Bahrain 15">Bahrain 15</option>
                  <option value="Oman 20">Oman 20</option>
                  <option value="Kuwait 20">Kuwait 20</option>
                  <option value="Jordan 15">Jordan 15</option>
                  <option value="Lebanon Index">Lebanon Index</option>
                  <option value="Syria Index">Syria Index</option>
                  <option value="Georgia Index">Georgia Index</option>
                  <option value="Armenia Index">Armenia Index</option>
                  <option value="Azerbaijan 20">Azerbaijan 20</option>
                  <option value="Kazakhstan 30">Kazakhstan 30</option>
                  <option value="Uzbekistan 20">Uzbekistan 20</option>
                  <option value="Turkmenistan Index">Turkmenistan Index</option>
                  <option value="Kyrgyzstan Index">Kyrgyzstan Index</option>
                  <option value="Tajikistan Index">Tajikistan Index</option>
                  <option value="North Korea Index">North Korea Index</option>
                  <option value="South Korea 200">South Korea 200</option>
                  <option value="Japan 400">Japan 400</option>
                  <option value="Australian OZ">Australian OZ</option>
                  <option value="Swiss 20">Swiss 20</option>
                  <option value="German Tech 30">German Tech 30</option>
                  <option value="French 75">French 75</option>
                  <option value="Italian 40">Italian 40</option>
                  <option value="Spanish 35">Spanish 35</option>
                  <option value="Dutch 25">Dutch 25</option>
                  <option value="Belgium 20">Belgium 20</option>
                  <option value="Austrian 20">Austrian 20</option>
                  <option value="Greek 20">Greek 20</option>
                  <option value="Portuguese 20">Portuguese 20</option>
                  <option value="Norwegian 25">Norwegian 25</option>
                  <option value="Swedish 30">Swedish 30</option>
                  <option value="Finnish 25">Finnish 25</option>
                  <option value="Danish 20">Danish 20</option>
                  <option value="Icelandic Index">Icelandic Index</option>
                </select>
            </div>

      <div class="form-group">
        <label class="label">Trade Interval (Time)</label>
        <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >
          <option selected disabled value="">Trade Interval (Time)</option>
          <option value="1 min">1 min</option>
          <option value="3 min">3 min</option>
          <option value="5 min">5 min</option>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
          <option value="1 day">1 day</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Type</label>
        <select name="tradeType" id="tradeType" required v-model="tradeType">
          <option selected disabled value="">Trade Type</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Leverage</label>
        <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >
          <option selected disabled value="">Trade Type</option>
          <option value="0.5X">0.5X</option>
          <option value="1.0X">1.0X</option>
          <option value="1.5X">1.5X</option>
          <option value="2.0X">2.0X</option>
          <option value="5X">5X</option>
          <option value="10X">10X</option>
        </select>
      </div>

      <base-button :loading="loading" style="background-color: #5d78ff;border: 1px solid #5d78ff;">Place Trade</base-button>
    </form>

    <form v-show="this.tradeName === 'Stocks'" class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">PLACE TRADE</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email
          {{tradePair}}</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Select Trade</label>
        <select name="tradeType" id="tradeType" required v-model="tradeName">
          <option selected disabled value="">Select Trade</option>
          <option value="Forex">Forex</option>
          <option value="Crypto">Crypto</option>
          <option value="CFD">CFD</option>
          <option value="Stocks">Stocks</option>
        </select>
      </div>


      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="tradeAmount" required/>
      </div>

      <div  class="form-group">
              <label class="label">Trading Pair</label>
              <select name="tradingPair" id="tradingPair" required v-model="tradePair" >
                <option selected disabled value="">Choose Trading Pair</option>
                <option :value="null" disabled>Choose Trading Pair</option>
                <option value="AMAZON">AMAZON</option>
                <option value="APPLE">APPLE</option>
                <option value="COCA COLA">COCA COLA</option>
                <option value="DAX30">DAX30</option>
                <option value="AIRBNB INC">AIRBNB INC</option>
                <option value="BOEING CO">BOEING CO</option>
                <option value="GME STOCKS">GME STOCKS</option>
                <option value="AMC ENTERTAINMENT">AMC ENTERTAINMENT</option>
                <option value="BLACKBERRY">BLACKBERRY</option>
                <option value="CITIGROUP INC">CITIGROUP INC</option>
                <option value="CISCO SYSTEMS INC">CISCO SYSTEMS INC</option>
                <option value="FACEBOOK">FACEBOOK</option>
                <option value="TWITTER">TWITTER</option>
                <option value="TESLA INC">TESLA INC</option>
                <option value="SONY ENT">SONY ENT</option>
                <option value="NASDAQ">NASDAQ</option>
                <option value="ENTERPRISE GROUP INC">ENTERPRISE GROUP INC</option>
                <option value="FORD MOTOR">FORD MOTOR</option>
                <option value="GAZPROM">GAZPROM</option>
                <option value="GLOBE LIFE INC">GLOBE LIFE INC</option>
                <option value="HYDRO ONE LTD">HYDRO ONE LTD</option>
                <option value="LOTUS VENTURES INC">LOTUS VENTURES INC</option>
                <option value="KELLOGG COMPANY">KELLOGG COMPANY</option>
                <option value="WAYFAIR INC">WAYFAIR INC</option>
                <option value="WALMART INC">WALMART INC</option>
                <option value="WALT DISNEY CO">WALT DISNEY CO</option>
                <option value="MACY'S INC">MACY'S INC</option>
                <option value="MCDONALD'S CORPORATIONS">MCDONALD'S CORPORATIONS</option>
                <option value="VISA INC">VISA INC</option>
                <option value="VERIZON">VERIZON</option>
                <option value="TMX GROUP LTD">TMX GROUP LTD</option>
                <option value="ALPHABET INC">ALPHABET INC</option>
                <option value="ORGANIGRAM HOLDINGS">ORGANIGRAM HOLDINGS</option>
                <option value="PFIZER INC">PFIZER INC</option>
                <option value="ADOBE INC">ADOBE INC</option>
                <option value="ALLIANZ SE">ALLIANZ SE</option>
                <option value="AT&T INC">AT&T INC</option>
                <option value="BAYER AG">BAYER AG</option>
                <option value="BMW AG">BMW AG</option>
                <option value="BP PLC">BP PLC</option>
                <option value="BRIDGESTONE CORP">BRIDGESTONE CORP</option>
                <option value="CANON INC">CANON INC</option>
                <option value="CHEVRON CORP">CHEVRON CORP</option>
                <option value="CHINA MOBILE LTD">CHINA MOBILE LTD</option>
                <option value="CITRIX SYSTEMS INC">CITRIX SYSTEMS INC</option>
                <option value="COMCAST CORP">COMCAST CORP</option>
                <option value="CREDIT SUISSE GROUP AG">CREDIT SUISSE GROUP AG</option>
                <option value="DELL TECHNOLOGIES INC">DELL TECHNOLOGIES INC</option>
                <option value="DELTA AIR LINES INC">DELTA AIR LINES INC</option>
                <option value="DEUTSCHE BANK AG">DEUTSCHE BANK AG</option>
                <option value="DEUTSCHE TELEKOM AG">DEUTSCHE TELEKOM AG</option>
                <option value="DUKE ENERGY CORP">DUKE ENERGY CORP</option>
                <option value="EBAY INC">EBAY INC</option>
                <option value="EMIRATES NBD">EMIRATES NBD</option>
                <option value="EXXONMOBIL CORP">EXXONMOBIL CORP</option>
                <option value="FACEBOOK INC">FACEBOOK INC</option>
                <option value="FIAT CHRYSLER AUTOMOBILES">FIAT CHRYSLER AUTOMOBILES</option>
                <option value="GENERAL ELECTRIC CO">GENERAL ELECTRIC CO</option>
                <option value="GENERAL MOTORS CO">GENERAL MOTORS CO</option>
                <option value="GOLDMAN SACHS GROUP INC">GOLDMAN SACHS GROUP INC</option>
                <option value="GOOGLE LLC">GOOGLE LLC</option>
                <option value="HEWLETT PACKARD ENTERPRISE">HEWLETT PACKARD ENTERPRISE</option>
                <option value="HSBC HOLDINGS PLC">HSBC HOLDINGS PLC</option>
                <option value="IBM CORP">IBM CORP</option>
                <option value="INTEL CORP">INTEL CORP</option>
                <option value="INTUIT INC">INTUIT INC</option>
                <option value="J.P. MORGAN CHASE & CO">J.P. MORGAN CHASE & CO</option>
                <option value="JOHNSON & JOHNSON">JOHNSON & JOHNSON</option>
                <option value="JPMORGAN CHASE & CO">JPMORGAN CHASE & CO</option>
                <option value="KIA MOTORS CORP">KIA MOTORS CORP</option>
                <option value="KRAFT HEINZ CO">KRAFT HEINZ CO</option>
                <option value="LENOVO GROUP LTD">LENOVO GROUP LTD</option>
                <option value="LG ELECTRONICS INC">LG ELECTRONICS INC</option>
                <option value="LOCKHEED MARTIN CORP">LOCKHEED MARTIN CORP</option>
                <option value="LUFTHANSA AG">LUFTHANSA AG</option>
                <option value="LUXOTTICA GROUP SPA">LUXOTTICA GROUP SPA</option>
                <option value="LYFT INC">LYFT INC</option>
                <option value="MARATHON OIL CORP">MARATHON OIL CORP</option>
                <option value="MARVELL TECHNOLOGY GROUP">MARVELL TECHNOLOGY GROUP</option>
                <option value="MASTERCARD INC">MASTERCARD INC</option>
                <option value="MERRILL LYNCH & CO INC">MERRILL LYNCH & CO INC</option>
                <option value="METLIFE INC">METLIFE INC</option>
                <option value="MICRON TECHNOLOGY INC">MICRON TECHNOLOGY INC</option>
                <option value="MICROSOFT CORP">MICROSOFT CORP</option>
                <option value="MITSUBISHI CORP">MITSUBISHI CORP</option>
                <option value="MITSUI & CO LTD">MITSUI & CO LTD</option>
                <option value="MIZUHO FINANCIAL GROUP">MIZUHO FINANCIAL GROUP</option>
                <option value="MONSANTO CO">MONSANTO CO</option>
                <option value="MORGAN STANLEY">MORGAN STANLEY</option>
                <option value="NETFLIX INC">NETFLIX INC</option>
                <option value="NIKE INC">NIKE INC</option>
                <option value="NISSAN MOTOR CO LTD">NISSAN MOTOR CO LTD</option>
                <option value="NOKIA CORP">NOKIA CORP</option>
                <option value="NORFOLK SOUTHERN CORP">NORFOLK SOUTHERN CORP</option>
                <option value="NORTHROP GRUMMAN CORP">NORTHROP GRUMMAN CORP</option>
                <option value="NOVARTIS AG">NOVARTIS AG</option>
                <option value="ORACLE CORP">ORACLE CORP</option>
                <option value="PEPSICO INC">PEPSICO INC</option>
                <option value="PFIZER INC">PFIZER INC</option>
                <option value="PHILIPS NV">PHILIPS NV</option>
                <option value="PROCTER & GAMBLE CO">PROCTER & GAMBLE CO</option>
                <option value="QUALCOMM INC">QUALCOMM INC</option>
                <option value="RAYTHEON TECHNOLOGIES CORP">RAYTHEON TECHNOLOGIES CORP</option>
                <option value="RENAULT SA">RENAULT SA</option>
                <option value="ROYAL DUTCH SHELL PLC">ROYAL DUTCH SHELL PLC</option>
                <option value="SAAB AB">SAAB AB</option>
                <option value="SAMSUNG ELECTRONICS CO LTD">SAMSUNG ELECTRONICS CO LTD</option>
                <option value="SANDISK CORP">SANDISK CORP</option>
                <option value="SAP SE">SAP SE</option>
                <option value="SCHLUMBERGER LTD">SCHLUMBERGER LTD</option>
                <option value="SIEMENS AG">SIEMENS AG</option>
                <option value="SNAP INC">SNAP INC</option>
                <option value="SONY CORP">SONY CORP</option>
                <option value="STANDARD CHARTERED PLC">STANDARD CHARTERED PLC</option>
                <option value="STARBUCKS CORP">STARBUCKS CORP</option>
                <option value="STELLANTIS NV">STELLANTIS NV</option>
                <option value="SUMITOMO CORP">SUMITOMO CORP</option>
                <option value="T-MOBILE US INC">T-MOBILE US INC</option>
                <option value="TARGET CORP">TARGET CORP</option>
                <option value="TATA MOTORS LTD">TATA MOTORS LTD</option>
                <option value="TELEFONICA SA">TELEFONICA SA</option>
                <option value="TESLA MOTORS INC">TESLA MOTORS INC</option>
                <option value="TEXAS INSTRUMENTS INC">TEXAS INSTRUMENTS INC</option>
                <option value="THYSSENKRUPP AG">THYSSENKRUPP AG</option>
                <option value="TOYOTA MOTOR CORP">TOYOTA MOTOR CORP</option>
                <option value="UBER TECHNOLOGIES INC">UBER TECHNOLOGIES INC</option>
                <option value="UBS GROUP AG">UBS GROUP AG</option>
                <option value="UNILEVER PLC">UNILEVER PLC</option>
                <option value="UNITED AIRLINES HOLDINGS INC">UNITED AIRLINES HOLDINGS INC</option>
                <option value="UNITED TECHNOLOGIES CORP">UNITED TECHNOLOGIES CORP</option>
                <option value="VODAFONE GROUP PLC">VODAFONE GROUP PLC</option>
                <option value="VOLKSWAGEN AG">VOLKSWAGEN AG</option>
                <option value="WELLS FARGO & CO">WELLS FARGO & CO</option>
                <option value="XEROX CORP">XEROX CORP</option>
                <option value="YAHOO INC">YAHOO INC</option>
                <option value="ZOOM VIDEO COMMUNICATIONS">ZOOM VIDEO COMMUNICATIONS</option>
              </select>
            </div>

      <div class="form-group">
        <label class="label">Trade Interval (Time)</label>
        <select name="tradeInterval" id="tradeInterval" required v-model="tradeInterval" >
          <option selected disabled value="">Trade Interval (Time)</option>
          <option value="1 min">1 min</option>
          <option value="3 min">3 min</option>
          <option value="5 min">5 min</option>
          <option value="15 mins">15 mins</option>
          <option value="30 mins">30 mins</option>
          <option value="1 hr">1 hr</option>
          <option value="2 hr">2 hr</option>
          <option value="1 day">1 day</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Type</label>
        <select name="tradeType" id="tradeType" required v-model="tradeType">
          <option selected disabled value="">Trade Type</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Trade Leverage</label>
        <select name="tradeType" id="tradeType" required v-model="tradeLeverage" >
          <option selected disabled value="">Trade Type</option>
          <option value="0.5X">0.5X</option>
          <option value="1.0X">1.0X</option>
          <option value="1.5X">1.5X</option>
          <option value="2.0X">2.0X</option>
          <option value="5X">5X</option>
          <option value="10X">10X</option>
        </select>
      </div>

      <base-button :loading="loading" style="background-color: #5d78ff;border: 1px solid #5d78ff;">Place Trade</base-button>
    </form>

  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
import router from "@/router";


export default {
  name: "DashBoardAddTrade",
  components: {BaseButton},
  data()  {
    return {
      contacts: [],
      SelectEmail: "",
      tradeName: "Forex",
      tradeAmount: "",
      tradePair: "",
      tradeInterval: "",
      tradeType: "",
      tradeLeverage: "",
      currentDate: "",
      currentDate2: "",
      randomString: "",
      randomString2: "",
    }
  },
  computed:{
    allUsers() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
    },
    ...mapState({
      loading: state => state.trade.loading,
      auth: state => state.auth,
    }),
  },
  methods: {

    async placeTrade() {
      await StoreUtils.dispatch(StoreUtils.actions.trade.tradeCreate, {
        userId: this.SelectEmail.userId,
        tradeTime: this.currentDate,
        symbolTraded: this.tradePair,
        amountTrade: this.tradeAmount,
        expectedPayout: 0,
        leverage: this.tradeLeverage,
        endPrice: this.randomString2,
        marketType: this.tradeName,
        endTime: this.currentDate2,
        tradeStatus: "pending",
        tradeReference : this.randomString,
        tradeType : this.tradeType
      });
      await StoreUtils.dispatch(StoreUtils.actions.trade.readAllTrade);
      this.SelectEmail = "";
      this.tradeName = "";
      this.tradeAmount = "";
      this.tradePair = "";
      this.tradeInterval = "";
      this.tradeType = "";
      this.tradeLeverage = "";
      this.getCurrentDate();
      this.getCurrentDateTime();
      this.generateRandomString();
      this.generateRandomString2();
      await router.push("/trade-request-admin")
    },

    getCurrentDate() {
      const today = new Date();

      // Format the date as needed, for example: YYYY-MM-DD
      const formattedDate = today.toISOString().split('T')[0];

      // Save the formatted date to the data property
      this.currentDate2 = formattedDate;
    },


    getCurrentDateTime() {
      const today = new Date();

      // Format the date as YYYY-MM-DD HH:mm:ss
      const formattedDateTime = today.toISOString().slice(0, 19).replace("T", " ");

      // Save the formatted date and time to the data property
      this.currentDate = formattedDateTime;
    },

    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    generateRandomString2() {
      const characters = '0123456789';
      let result = '';
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString2 = result;
    }
  },
  created() {
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
  },
  mounted() {
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.auth.allUsers)
  }
}
</script>

<style scoped>

.form-header{
  padding-top: 5px;
  padding-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 45px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 430px;
  background: #ffffff;
  margin-top: 1.5%;
  color: #071333;
  border-radius: 8px;
}

.form-group input:focus {
  outline: none;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 45px;
  border-radius: 8px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 430px;
  background: #ffffff;
  margin-top: 1.5%;
  color: #071333;
}

option{
  color: #071333;
}

.form-group select:focus {
  outline: none;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-part{
  max-width: 550px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border: 0.5px solid #3C4A57FF;
  padding: 22px 25px;
  border-radius: 5px;
  background: #3C4A57FF;
  margin-top: 2%;
  margin-bottom: 2%;
}

.label{
  margin-left: 3%;
  font-size: 14px;
  color: #FFFFFF;
}



@media (max-width: 700px) {
  .form-part{
    max-width: unset;
    width: 95%;
    margin-top: 5%;
  }

  .form-group input {
    width: 100%;
  }

  .form-group select {
    width: 100%;
  }



}

</style>