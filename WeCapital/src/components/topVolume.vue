<template>
    <div class="trendingTab--Assets">
        <button class="trendingTab--Assets--Button">
            <div class="trendingTab--Assets--Button--Info">
                <div v-for="crypto in topThreeCryptosVolume.slice(0,1)" class="trendingTab--Assets--Button--Info--Logo">
                    <img v-bind:src="crypto.image">
                </div>
                <div v-for="crypto in topThreeCryptosVolume.slice(0,1)" class="trendingTab--Assets--Button--Info--Name">
                    {{ crypto.name }}
                </div>
            </div>

            <div class="trendingTab--Assets--Button--Percentage">

                <div v-for="crypto in topThreeCryptosVolume.slice(0,1)" class="trendingTab--Assets--Button--Percentage--Amount" :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'">
                    <span :style="crypto.price_change_percentage_24h < 0 ? 'display: none' : 'display: block'">+</span>
                    {{ firstPriceChange.toFixed(2) }}%
                </div>
                <div v-for="crypto in topThreeCryptosVolume.slice(0,1)" class="trendingTab--Assets--Button--Percentage--Bar" 
                    :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'"
                    >

                </div>
            </div>

            <div v-for="crypto in topThreeCryptosVolume.slice(0,1)" class="trendingTab--Assets--Button--Price">
                ${{ crypto.current_price }}
            </div>
        </button>
        <button class="trendingTab--Assets--Button">
            <div class="trendingTab--Assets--Button--Info">
                <div v-for="crypto in topThreeCryptosVolume.slice(1,2)" class="trendingTab--Assets--Button--Info--Logo">
                    <img v-bind:src="crypto.image">
                </div>
                <div v-for="crypto in topThreeCryptosVolume.slice(1,2)" class="trendingTab--Assets--Button--Info--Name">
                    {{ crypto.name }}
                </div>
            </div>

            <div class="trendingTab--Assets--Button--Percentage">

                <div v-for="crypto in topThreeCryptosVolume.slice(1,2)" class="trendingTab--Assets--Button--Percentage--Amount" :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'">
                    <span :style="crypto.price_change_percentage_24h < 0 ? 'display: none' : 'display: block'">+</span>
                    {{ secondPriceChange.toFixed(2) }}%
                </div>
                <div v-for="crypto in topThreeCryptosVolume.slice(1,2)" class="trendingTab--Assets--Button--Percentage--Bar" 
                    :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'"
                    v-bind:style="barWidthRelativeSecond"
                    >
                </div>
            </div>

            <div v-for="crypto in topThreeCryptosVolume.slice(1,2)" class="trendingTab--Assets--Button--Price">
                ${{ crypto.current_price }}
            </div>
                
        </button>
        <button class="trendingTab--Assets--Button">
            <div class="trendingTab--Assets--Button--Info">
                <div v-for="crypto in topThreeCryptosVolume.slice(2,3)" class="trendingTab--Assets--Button--Info--Logo">
                    <img v-bind:src="crypto.image">
                </div>
                <div v-for="crypto in topThreeCryptosVolume.slice(2,3)" class="trendingTab--Assets--Button--Info--Name">
                    {{ crypto.name }}
                </div>
            </div>

            <div class="trendingTab--Assets--Button--Percentage">

                <div v-for="crypto in topThreeCryptosVolume.slice(2,3)" class="trendingTab--Assets--Button--Percentage--Amount" :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'">
                    <span :style="crypto.price_change_percentage_24h < 0 ? 'display: none' : 'display: block'">+</span>
                    {{ thirdPriceChange.toFixed(2) }}%
                </div>
                <div v-for="crypto in topThreeCryptosVolume.slice(2,3)" class="trendingTab--Assets--Button--Percentage--Bar" 
                    :class="crypto.price_change_percentage_24h < 0 ? '--negative' : '--positive'"
                    v-bind:style="barWidthRelativeThird"
                    >
                </div>
            </div>

            <div v-for="crypto in topThreeCryptosVolume.slice(2,3)" class="trendingTab--Assets--Button--Price">
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
                topThreeCryptosVolume: [],
                firstPriceChange: Number,
                secondPriceChange: Number,
                thirdPriceChange: Number,
                positiveBarLengthSecond: Number,
                positiveBarLengthThird: Number,

            }
        },
        mounted() {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1')
            .then(response => {
                this.topThreeCryptosVolume = response.data;
                this.firstPriceChange = this.topThreeCryptosVolume[0].price_change_percentage_24h;
                this.secondPriceChange = this.topThreeCryptosVolume[1].price_change_percentage_24h;
                this.thirdPriceChange = this.topThreeCryptosVolume[2].price_change_percentage_24h;

                this.positiveBarLengthSecond = Math.abs(this.secondPriceChange / this.firstPriceChange);
                this.positiveBarLengthThird = Math.abs(this.thirdPriceChange / this.secondPriceChange);
            }).catch(error => {
                console.log(error);
            });
        },
        computed: {
            barWidthRelativeSecond :  function(){
                    return {
                        width: this.positiveBarLengthSecond * 100 + '%'
                    }
            },
            barWidthRelativeThird :  function(){
                    return {
                        width: this.positiveBarLengthThird * 100 + '%'
                    }
            }
        }
    }


</script>

<style lang="scss">

@import "@/assets/styles/_standard.scss";

.trendingTab{
    margin-top: 2rem;
    text-align: center;

    &--title{
        font-size: 2rem;
    }

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

                    max-width: 11rem;

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