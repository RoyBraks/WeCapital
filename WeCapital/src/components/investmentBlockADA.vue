<template>
  <button @click="adaBalance.addAmount(50)" class="Assets--Button">
    <div class="Assets--Button--Info">
        <div class="Assets--Button--Info--Logo">
            <img v-bind:src="adaLogo">
        </div>
        <div class="Assets--Button--Info--Name">
            <div class="Assets--Button--Info--Name--Text">
                {{ adaInfo.name }}
            </div>
                
            <div class="Assets--Button--Info--Name--Amount">
                {{ adaBalance.amount.toFixed(2) }} {{ adaInfo.symbol }} 
            </div>
        </div>
    </div>
    <div class="Assets--Button--Investment">
        <div class="Assets--Button--Investment--Value">
            ${{ (adaBalance.amount * adaPrice).toFixed(2) }}
        </div>
        <div class="Assets--Button--Investment--Change"
        :class="adaChange < 0 ? '--negative' : '--positive'"
        >
            <span :style="adaChange < 0 ? 'display: none' : 'display: block'">+</span>
            {{ adaChange }}%
            <svg style="width: auto; margin-left: 0.2rem;" :class="adaChange < 0 ? '--negative' : '--positive'" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 8">
                <path id="Polygon_1" data-name="Polygon 1" d="M4.152,1.357a1,1,0,0,1,1.7,0l3.2,5.113A1,1,0,0,1,8.2,8H1.8A1,1,0,0,1,.956,6.47Z"/>
            </svg>
        </div>
    </div>
</button>
</template>

<script>
  import { useADABalance } from '@/stores/adaBalance.js'

  import axios from 'axios';
  
  export default {
    setup(){
        const adaBalance = useADABalance();

        return { adaBalance }
    },
    data(){
        return{
            adaInfo: [],
            adaPrice: Number,
            adaLogo: String,
            adaChange: Number
        }
    },
    mounted() {
      axios.get('https://api.coingecko.com/api/v3/coins/cardano')
      .then(response => {
          this.adaInfo = response.data;

          this.adaLogo = this.adaInfo.image.small;

          this.adaChange = this.adaInfo.market_data.price_change_percentage_24h.toFixed(2);
          
          this.adaPrice = this.adaInfo.market_data.current_price.usd;

      })
      .catch(error => {
          console.log(error);
      });
    }
  }

</script>

<style lang="scss">

@import "@/assets/styles/_standard.scss";

    .Assets{

        margin-top: 1rem;
        
        &--Button{
            margin-top: 1rem;
            padding: 1rem;
            width: 100%;
            height: 5rem;
            border-radius: 1rem;
            border: none;
            background-color: $color-primary-black;
            box-shadow: black 0px 0px 3px;

            color: $color-white;

            display: flex;
            justify-content: space-between;
            align-items: center;

            &--Info{
                display: flex;
                align-items: center;
                gap: 1rem;

                &--Logo{
                    width: 28px;
                }

                &--Name{
                    line-height: 1.2rem;
                    text-align: left;

                    &--Amount{
                        color: $color-primary;
                        text-transform: uppercase;
                        font-size: x-small;
                    }
                }
            }
            &--Investment{
                display: flex;
                gap: 0.7rem;
                &--Value{
                    color: white;
                }
                &--Change{
                    display: flex;
                    font-size: xx-small;
                    
                    align-items: baseline;
                    &.--positive{
                        color: $color-up;
                        fill: $color-up;
                    }
                    &.--negative{
                        color: $color-down;
                        fill: $color-down;
                    }
                }
            }
        }
    }

    
</style>