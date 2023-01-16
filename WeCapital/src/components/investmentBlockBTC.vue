<template>
  <button @click="btcBalance.addAmount(0.1)" class="Assets--Button">
    <div class="Assets--Button--Info">
        <div class="Assets--Button--Info--Logo">
            <img v-bind:src="btcLogo">
        </div>
        <div class="Assets--Button--Info--Name">
            <div class="Assets--Button--Info--Name--Text">
                {{ btcInfo.name }}
            </div>
                
            <div class="Assets--Button--Info--Name--Amount">
                {{ btcBalance.amount.toFixed(2) }} {{ btcInfo.symbol }} 
            </div>
        </div>
    </div>
    <div class="Assets--Button--Investment">
        <div class="Assets--Button--Investment--Value">
            ${{ (btcBalance.amount * btcPrice).toFixed(2) }}
        </div>
        <div class="Assets--Button--Investment--Change"
        :class="btcChange < 0 ? '--negative' : '--positive'"
        >
            <span :style="btcChange < 0 ? 'display: none' : 'display: block'">+</span>
            {{ btcChange }}%
            <svg style="width: auto; margin-left: 0.2rem;" :class="btcChange < 0 ? '--negative' : '--positive'" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 8">
                <path id="Polygon_1" data-name="Polygon 1" d="M4.152,1.357a1,1,0,0,1,1.7,0l3.2,5.113A1,1,0,0,1,8.2,8H1.8A1,1,0,0,1,.956,6.47Z"/>
            </svg>
        </div>
    </div>
</button>
</template>

<script>
  import { useBTCBalance } from '@/stores/btcBalance.js'

  import axios from 'axios';
  
  export default {
    setup(){
        const btcBalance = useBTCBalance();

        return { btcBalance }
    },
    data(){
        return{
            btcInfo: [],
            btcPrice: Number,
            btcLogo: String,
            btcChange: Number
        }
    },
    mounted() {
      axios.get('https://api.coingecko.com/api/v3/coins/bitcoin')
      .then(response => {
          this.btcInfo = response.data;

          this.btcLogo = this.btcInfo.image.small;

          this.btcChange = this.btcInfo.market_data.price_change_percentage_24h.toFixed(2);
          
          this.btcPrice = this.btcInfo.market_data.current_price.usd;

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