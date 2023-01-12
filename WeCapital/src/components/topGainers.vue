<template>
    <div class="trendingTab--Assets">
        <button class="trendingTab--Assets--Button">
            <div class="trendingTab--Assets--Button--Info">
                <div v-for="crypto in sortedCryptos.slice(0,1)" class="trendingTab--Assets--Button--Info--Logo">
                    <img v-bind:src="crypto.image">
                </div>
                <div v-for="crypto in sortedCryptos.slice(0,1)" class="trendingTab--Assets--Button--Info--Name">
                    {{ crypto.name }}
                </div>
            </div>

            <div class="trendingTab--Assets--Button--Percentage">

                <div v-for="crypto in sortedCryptos.slice(0,1)" class="trendingTab--Assets--Button--Percentage--Amount" :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'">
                    <span :style="crypto.price_change_percentage_24h < 0 ? 'display: none' : 'display: block'">+</span>
                    {{ firstPriceGainer.toFixed(2)}}%
                </div>
                <div v-for="crypto in sortedCryptos.slice(0,1)" class="trendingTab--Assets--Button--Percentage--Bar" 
                    :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'"
                    >

                </div>
            </div>

            <div v-for="crypto in sortedCryptos.slice(0,1)" class="trendingTab--Assets--Button--Price">
                ${{ crypto.current_price }}
            </div>
        </button>
        <button class="trendingTab--Assets--Button">
            <div class="trendingTab--Assets--Button--Info">
                <div v-for="crypto in sortedCryptos.slice(1,2)" class="trendingTab--Assets--Button--Info--Logo">
                    <img v-bind:src="crypto.image">
                </div>
                <div v-for="crypto in sortedCryptos.slice(1,2)" class="trendingTab--Assets--Button--Info--Name">
                    {{ crypto.name }}
                </div>
            </div>

            <div class="trendingTab--Assets--Button--Percentage">

                <div v-for="crypto in sortedCryptos.slice(1,2)" class="trendingTab--Assets--Button--Percentage--Amount" :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'">
                    <span :style="crypto.price_change_percentage_24h < 0 ? 'display: none' : 'display: block'">+</span>
                    {{ secondPriceGainer.toFixed(2)}}%
                </div>
                <div v-for="crypto in sortedCryptos.slice(1,2)" class="trendingTab--Assets--Button--Percentage--Bar" 
                    :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'"
                    v-bind:style="barWidthGainerSecond"
                    >
                </div>
            </div>

            <div v-for="crypto in sortedCryptos.slice(1,2)" class="trendingTab--Assets--Button--Price">
                ${{ crypto.current_price }}
            </div>
                
        </button>
        <button class="trendingTab--Assets--Button">
            <div class="trendingTab--Assets--Button--Info">
                <div v-for="crypto in sortedCryptos.slice(2,3)" class="trendingTab--Assets--Button--Info--Logo">
                    <img v-bind:src="crypto.image">
                </div>
                <div v-for="crypto in sortedCryptos.slice(2,3)" class="trendingTab--Assets--Button--Info--Name">
                    {{ crypto.name }}
                </div>
            </div>

            <div class="trendingTab--Assets--Button--Percentage">

                <div v-for="crypto in sortedCryptos.slice(2,3)" class="trendingTab--Assets--Button--Percentage--Amount" :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'">
                    <span :style="crypto.price_change_percentage_24h < 0 ? 'display: none' : 'display: block'">+</span>
                    {{ thirdPriceGainer.toFixed(2) }}%
                </div>
                <div v-for="crypto in sortedCryptos.slice(2,3)" class="trendingTab--Assets--Button--Percentage--Bar" 
                    :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'"
                    v-bind:style="barWidthGainerThird"
                    >
                </div>
            </div>

            <div v-for="crypto in sortedCryptos.slice(2,3)" class="trendingTab--Assets--Button--Price">
                ${{ crypto.current_price }}
            </div>
                
        </button>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
      return {
        allCryptos: [],

      }
    },
    computed: {
      sortedCryptos() {
        return this.allCryptos.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
      },

      firstPriceGainer(){
        return this.sortedCryptos[0].price_change_percentage_24h;
      },

      secondPriceGainer(){
        return this.sortedCryptos[1].price_change_percentage_24h;
      },

      thirdPriceGainer(){
        return this.sortedCryptos[2].price_change_percentage_24h;
      },

      GainerBarLengthSecond(){
        return Math.abs(this.secondPriceGainer / this.firstPriceGainer) 
      },

      GainerBarLengthThird(){
        return Math.abs(this.thirdPriceGainer / this.firstPriceGainer) 
      },

      barWidthGainerSecond :  function(){
        return {
            width: this.GainerBarLengthSecond * 100 + '%'
            }
        },
        
      barWidthGainerThird :  function(){
        return {
            width: this.GainerBarLengthThird * 100 + '%'
            }
        },


    },
    mounted() {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(response => {
          this.allCryptos = response.data;
      })
      .catch(error => {
          console.log(error);
      });
    }
  }


</script>

<style lang="scss">

@import "@/assets/styles/_standard.scss";

.trendingTab{

    &--Assets{
        margin-top: 1rem;

        &--Button{
            display: flex;
            align-items: center;
            gap: 2rem;

            margin-top: 1rem;
            width: 30rem;
            height: 5rem;
            border-radius: 1rem;
            border: none;
            background: linear-gradient(90deg, $color-primary-black 20%, rgba(0, 145, 255, 0.241) 100%);
            box-shadow: black 0px 0px 3px;
            color: $color-white;
            padding: 0 2rem;

            font-size: 1rem;

            &--Info{
                display: flex; 
                align-items: center;
                gap: 1rem;

                line-height: 1rem;

                &--Logo{
                    width: 2.6rem;
                }

                &--Name{
                    width: 4rem;
                    text-align: left;
                }
            }

            &--Percentage{
                display: flex;
                flex-direction: column;
                justify-content: baseline;
                width: 11rem;
                &--Amount{
                    font-size: 0.9rem;
                    display: flex;
                    justify-content: center;
                    width: 10rem;

                    margin-bottom: -0.5rem;
                    &.--positive{
                        color: $color-up;
                    }

                    &.--negative{
                        color: $color-down;
                    }
                }

                &--Bar{
                    height: 0.8rem;
                    border-radius: 1rem;

                    margin-bottom: 1.7rem;

                    &.--positive{
                        background-color: $color-up;
                    }

                    &.--negative{
                        background-color: $color-down;
                    }
                    
                }
            }

            &--Price{
                width: 5rem;
                text-align: right;
            }
        }
    }
}

</style>