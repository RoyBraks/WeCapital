<template>
    <totalBalance />

    <div class="containerAssetClass">
        <router-link to="/cryptowallet" class="assetClass">    
            <button class="assetClassButton" :class="{'assetClassButton--active' : pageName == '/cryptowallet'}">
                CRYPTO     
            </button>
        </router-link>

        <router-link to="/stockwallet" class="assetClass">    
            <button class="assetClassButton" :class="{'assetClassButton--active' : pageName == '/stockwallet'}">
                STOCKS     
            </button>
        </router-link>

        <router-link to="/nftwallet" class="assetClass">    
            <button class="assetClassButton" :class="{'assetClassButton--active' : pageName == '/nftwallet'}">
                NFT   
            </button>
        </router-link>
    </div>        
    
    <div class="investmentsTab">
        <div class="investmentsTab--Header">
            <div class="investmentsTab--Header--Text">
                <div class="investmentsTab--Header--Text--Header">
                    INVESTMENTS
                </div>
                <div class="investmentsTab--Header--Text--Total">
                    $4,939.83
                </div>
            </div>
            <div class="investmentsTab--Header--Buttons">
                <button class="investmentsTab--Header--Buttons--Invest">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.262" height="8.262" viewBox="0 0 10.262 10.262">
                    <path id="Icon_open-graph" data-name="Icon open-graph" d="M9.017,0,5.131,3.848,3.848,2.565,0,6.452,1.283,7.735l2.565-2.6L5.131,6.414l5.131-5.131ZM0,8.979v1.283H10.262V8.979Z" fill="#fff"/>
                    </svg>
                    INVEST
                </button>
                <button class="investmentsTab--Header--Buttons--DCA">
                    <svg style="width: 10px; height: 10px;" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="0" height="8" viewBox="0 0 24 24"><path d="M14 13h-4v-4h4v4zm6-4h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v13.386c0 2.391-6.648 9.614-9.811 9.614h-14.189v-23h24zm-2 6h-20v15h11.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-6.543z"/></svg>    
                    DCA
                </button>
            </div>
        </div>

        <div class="investmentsTab--Assets">
            <button class="investmentsTab--Assets--Button">
                <div class="investmentsTab--Assets--Button--Info">
                    <div class="investmentsTab--Assets--Button--Info--Logo">

                    </div>
                    <div class="investmentsTab--Assets--Button--Info--Name">
                        <div class="investmentsTab--Assets--Button--Info--Name--Text">
                            
                        </div>

                        <div class="investmentsTab--Assets--Button--Info--Name--Amount">

                        </div>
                    </div>
                </div>
            </button>
            <button class="investmentsTab--Assets--Button">
                
            </button>
            <button class="investmentsTab--Assets--Button">
               
            </button>
        </div>

        <p class="investmentsTab--ViewAll">View All</p>
        
    </div>



    <div class="trendingTab">
        <div class="trendingTab--title">
            TRENDING
        </div>
        <div class="trendingTab--catagory">
            <div class="trendingTab--catagory--bar" ></div>
            <div class="trendingTab--catagory--container">
                <tabs class="trendingTab--catagory--container--tabheader" :options="{ useUrlFragment: false }">
                    <div class="trendingTab--catagory--bar" style="width: 70vw; position: absolute; margin-top: -1.5rem;"></div>
                    <tab name="TOP GAINERS">
                        <div class="trendingTab--Assets">
                            <button class="trendingTab--Assets--Button">
                                <div class="trendingTab--Assets--Button--Info">
                                <div class="trendingTab--Assets--Button--Info--Logo">
                        </div>
                                <div class="trendingTab--Assets--Button--Info--Name">
                                <div class="trendingTab--Assets--Button--Info--Name--Text">
                            
                        </div>

                                <div class="trendingTab--Assets--Button--Info--Name--Amount">

                        </div>
                    </div>
                </div>
            </button>
            <button class="trendingTab--Assets--Button">
                
            </button>
            <button class="trendingTab--Assets--Button">
               
            </button>
        </div>
                    </tab>
                    <tab name="TOP LOSERS">
                        <p>This is tab 2 content</p>
                    </tab>
                    <tab name="VOLUME">
                        <p>This is tab 2 content</p>
                    </tab>
                    
                </tabs>
            </div>
        </div>
    </div>
    <navigation style="position: fixed;" />
</template>

<script>
    import navigation from '@/components/navigation.vue';
    import totalBalance from '@/components/totalBalance.vue';

    export default {
        computed: {
            pageName () {
                return this.$router.currentRoute.value.path
            }
        },
        components: {
            navigation,
            totalBalance
        }
    }  
</script>

<style lang="scss">

@import "@/assets/styles/_standard.scss";

.containerAssetClass{
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    gap: 5%;
}
.assetClassButton{
    border-radius: 1rem;
    font-size: small;
    width: 9rem;
    height: 3.3rem;
    background-color: $color-primary-black;
    color: $color-gray;
    border: none;
    margin-bottom: 2rem;
    box-shadow: black 0px 0px 6px;

    &--active{
        color: $color-white;
        background-color: $color-primary;
    }
}


.investmentsTab{
    width: 85%;
    background: linear-gradient(140deg, $color-primary-black 23%, rgba(0,144,255,0.3) 100%);
    margin: auto;
    padding: 3rem;
    border-radius: 3rem;

    &--Header{
        justify-content: space-between;
        display: flex;
        align-items: flex-end;
        align-content: space-between;

        &--Text{

            &--Header{
                color: $color-primary;
                font-size: 1.7rem;
                margin-bottom: 0.8rem;
            }

            &--Total{
                font-size: 2.6rem;
            }
        }

        &--Buttons{
            display: flex;
            gap: 10%;
            
            &--Invest, &--DCA{
                box-shadow: black 0px 0px 6px;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                gap: 10%;
                width: 5.9rem;
                border: none;
                border-radius: 0.8rem;
                height: 3rem;
                font-size: 0.8rem;
                color: $color-white;
                line-height: 0;
                background: linear-gradient($color-primary-black 2%, rgba(0,144,255,0.1) 100%);;
            }
        }
    }

    &--Assets{

        margin-top: 1rem;
        
        &--Button{
            margin-top: 1rem;
            width: 100%;
            height: 5rem;
            border-radius: 1rem;
            border: none;
            background-color: $color-primary-black;
            box-shadow: black 0px 0px 3px;
        }
    }

    &--ViewAll{
        text-align: center;
        font-size: small;
        color: $color-primary;
    }
}

.trendingTab{
    margin-top: 2rem;
    text-align: center;

    &--title{
        font-size: 2rem;
    }

    &--Assets{
        margin-top: 1rem;

        &--Button{
            margin-top: 1rem;
            width: 100%;
            height: 5rem;
            border-radius: 1rem;
            border: none;
            background: linear-gradient(90deg, $color-primary-black 2%, rgba(0, 145, 255, 0.241) 100%);
            box-shadow: black 0px 0px 3px;
        }
    }

    &--catagory{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;

        &--bar{
            width: 85%;
            height: 1px;
            margin: 0.5rem 0;
            background: radial-gradient(circle, $color-primary 0, $color-primary-black 100%);
        }

        &--container{

            &--tabheader{
                text-decoration: none;
            }

            &--gain, &--lose, &--volume{
                width: 10rem;
                font-size: x-small;
                color: $color-white;
                background-color: transparent;
            }
        }
    }
}

.tabs-component{
    display: block;
    width: 80%;
}
.tabs-component-tabs{
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 0.5rem;
    padding: 0;
    width: 70vw;
    font-size: 1.2rem;
}

.tabs-component-tab{
    width: 33%;
    color: $color-gray;
}

.is-active{
    color: $color-white;
}

.tabs-component-panels{
    width: 70vw;
    margin-top: 10%;
}

</style>