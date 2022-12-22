<template>
    <div class="balancetopcontainer">
        
        <div class="balancecontainer">   
            <div class="totalbalance">
                <h2>TOTAL BALANCE</h2>
                <svg class="notificationicon" style="width: auto;" xmlns="http://www.w3.org/2000/svg" width="18.8" height="21.218" viewBox="0 0 24.8 27.218">
            <g id="Icon_feather-bell" data-name="Icon feather-bell" transform="translate(-3 -1.5)">
    <path id="Path_9" data-name="Path 9" d="M22.667,10.267a7.267,7.267,0,0,0-14.533,0c0,8.478-3.633,10.9-3.633,10.9H26.3s-3.633-2.422-3.633-10.9" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="Path_10" data-name="Path 10" d="M19.6,31.5a2.422,2.422,0,0,1-4.19,0" transform="translate(-2.1 -5.489)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
                </svg>
            </div>
            <div class="balancechange">
                <h1>$14,234.92</h1>
                <div class="changecontainer">
                    <h4>+10.98%</h4>
                    <svg style="width: auto;" xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8">
                    <path id="Polygon_1" data-name="Polygon 1" d="M4.152,1.357a1,1,0,0,1,1.7,0l3.2,5.113A1,1,0,0,1,8.2,8H1.8A1,1,0,0,1,.956,6.47Z"/>
                    </svg>
                </div>           
            </div>
        </div>      
            
    </div>
</template>

<style lang="scss">

@import "@/assets/styles/_standard.scss";

h2{
    font-size: 1.9rem;
    color: $color-primary;
}
h1{
    font-size: 4rem;
}
h4{
    font-size: 1.2rem;
}

    .balancetopcontainer{
        background: linear-gradient(140deg, $color-primary-black 43%, rgba(0,144,255,0.3) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 13rem;
        border-radius: 0 0 4rem 4rem;
        padding: 0 8%;       

    }

    .balancecontainer{
        
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        position: relative;

        .notificationicon{
            position: absolute;
            top: -1.5rem;
            right: 0;
        }
    }

    .totalbalance, .balancechange{
        display: flex;
        justify-content: space-between;
    }

    .balancechange{
        align-items: baseline;
    }
    .changecontainer{
        display: flex;
        align-items: baseline;
        gap: 0.3rem;
        color: $color-up;
        fill: $color-up;
    }
</style>