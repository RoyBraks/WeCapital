<template>
    <div class="navbar">
        <div class="wrapper-nav">
            <div class="bar"></div>
            <div class="container-nav">
                <router-link to="/account" class="navbar_icon" :class="{'navbar_icon--active' : pageName == '/account'}">              
                <svg xmlns="http://www.w3.org/2000/svg" width="39.155" height="39.155" viewBox="0 0 39.155 39.155">
                <path id="Icon_material-account-circle" data-name="Icon material-account-circle" d="M22.577,3A19.577,19.577,0,1,0,42.155,22.577,19.584,19.584,0,0,0,22.577,3Zm0,5.873A5.873,5.873,0,1,1,16.7,14.746,5.865,5.865,0,0,1,22.577,8.873Zm0,27.8a14.1,14.1,0,0,1-11.746-6.3c.059-3.9,7.831-6.03,11.746-6.03,3.9,0,11.688,2.134,11.746,6.03A14.1,14.1,0,0,1,22.577,36.673Z" transform="translate(-3 -3)" fill="#0090ff"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="46.312" height="8" viewBox="0 0 46.312 4">
                <g id="Group_11" data-name="Group 11" transform="translate(-313.739 -1075.453)">
                <path id="Path_3" data-name="Path 3" d="M0,0H42.312" transform="translate(315.739 1077.453)" fill="rgba(0,0,0,0)" stroke="#0090ff" stroke-linecap="round" stroke-width="4"/>
                </g>
                </svg>
                </router-link>

                <router-link to="/advancedcharts" class="navbar_icon" :class="{'navbar_icon--active' : pageName == '/advancedcharts'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.155" height="39.155" viewBox="0 0 36 27">
                <path id="Icon_awesome-chart-line" data-name="Icon awesome-chart-line" d="M34.875,27H4.5V5.625A1.125,1.125,0,0,0,3.375,4.5H1.125A1.125,1.125,0,0,0,0,5.625V29.25A2.25,2.25,0,0,0,2.25,31.5H34.875A1.125,1.125,0,0,0,36,30.375v-2.25A1.125,1.125,0,0,0,34.875,27ZM32.625,6.75h-8.3a1.687,1.687,0,0,0-1.193,2.881l2.278,2.278-5.159,5.16L15.091,11.91a2.249,2.249,0,0,0-3.182,0l-4.83,4.83a1.125,1.125,0,0,0,0,1.591l1.59,1.59a1.125,1.125,0,0,0,1.591,0L13.5,16.682l5.159,5.159a2.249,2.249,0,0,0,3.182,0l6.75-6.75,2.278,2.278a1.687,1.687,0,0,0,2.881-1.193v-8.3A1.124,1.124,0,0,0,32.625,6.75Z" transform="translate(0 -4.5)" fill="#0090ff"/>
                </svg>
   
                <svg xmlns="http://www.w3.org/2000/svg" width="46.312" height="8" viewBox="0 0 46.312 4">
                <g id="Group_11" data-name="Group 11" transform="translate(-313.739 -1075.453)">
                <path id="Path_3" data-name="Path 3" d="M0,0H42.312" transform="translate(315.739 1077.453)" fill="rgba(0,0,0,0)" stroke="#0090ff" stroke-linecap="round" stroke-width="4"/>
                </g>
                </svg>
                </router-link>

                <router-link to="/wallet" class="navbar_icon" :class="{'navbar_icon--active': pageName == '/wallet'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.155" height="39.155" viewBox="0 0 38.187 35.25">
  <g id="Icon_ionic-ios-wallet" data-name="Icon ionic-ios-wallet" transform="translate(-3.375 -1.499)">
    <g id="Path_11" data-name="Path 11" transform="translate(0 -0.937)" fill="none" stroke-linecap="round">
      <path d="M36.054,11.25H8.883a5.512,5.512,0,0,0-5.508,5.508V32.179a5.512,5.512,0,0,0,5.508,5.508H36.054a5.512,5.512,0,0,0,5.508-5.508V16.758A5.512,5.512,0,0,0,36.054,11.25Z" stroke="none"/>
      <path d="M 8.882747650146484 14.25 C 7.499965667724609 14.25 6.374996185302734 15.37496948242188 6.374996185302734 16.75774002075195 L 6.374996185302734 32.17942047119141 C 6.374996185302734 33.56219100952148 7.499965667724609 34.68716049194336 8.882747650146484 34.68716049194336 L 36.05427551269531 34.68716049194336 C 37.43704605102539 34.68716049194336 38.56201553344727 33.56219100952148 38.56201553344727 32.17942047119141 L 38.56201553344727 16.75774002075195 C 38.56201553344727 15.37496948242188 37.43704605102539 14.25 36.05427551269531 14.25 L 8.882747650146484 14.25 M 8.882747650146484 11.25 L 36.05427551269531 11.25 C 39.09270477294922 11.25 41.56201553344727 13.71929931640625 41.56201553344727 16.75774002075195 L 41.56201553344727 32.17942047119141 C 41.56201553344727 35.21786117553711 39.09270477294922 37.68716049194336 36.05427551269531 37.68716049194336 L 8.882747650146484 37.68716049194336 C 5.844306945800781 37.68716049194336 3.374996185302734 35.21786117553711 3.374996185302734 32.17942047119141 L 3.374996185302734 16.75774002075195 C 3.374996185302734 13.71929931640625 5.844306945800781 11.25 8.882747650146484 11.25 Z" stroke="none" fill="#0090ff"/>
    </g>
    <g id="Path_12" data-name="Path 12" transform="translate(0.344 -3)" fill="none" stroke-linecap="round">
      <path d="M30.1,4.592,8.539,8.805C6.887,9.173,4.5,10.834,4.5,12.854A5.784,5.784,0,0,1,9,11.11H35.343V9.228a5.271,5.271,0,0,0-1.276-3.452h0A4.341,4.341,0,0,0,30.1,4.592Z" stroke="none"/>
      <path d="M 30.99325942993164 7.499210357666016 L 30.9932746887207 7.499210357666016 C 30.90174865722656 7.499212265014648 30.80943298339844 7.508861541748047 30.71887969970703 7.527890205383301 L 30.67714881896973 7.536360740661621 L 27.74386596679688 8.109530448913574 L 32.07445526123047 8.109530448913574 C 32.02897262573242 8.01429271697998 31.98357963562012 7.939460754394531 31.94360542297363 7.895053863525391 C 31.68708038330078 7.639799118041992 31.34970092773438 7.49923038482666 30.99325942993164 7.499210357666016 M 30.99343681335449 4.499214172363281 C 32.13616180419922 4.499281883239746 33.24372100830078 4.952522277832031 34.06739807128906 5.776200294494629 C 34.88437652587891 6.593180656433105 35.34335708618164 8.071090698242188 35.34335708618164 9.227720260620117 L 35.34335708618164 11.10953044891357 L 8.997987747192383 11.10953044891357 C 5.876930236816406 11.10953044891357 4.5 12.85365104675293 4.5 12.85365104675293 C 4.5 10.83414077758789 6.886688232421875 9.172640800476074 8.539009094238281 8.805460929870605 L 30.1018180847168 4.592041015625 C 30.39860534667969 4.529657363891602 30.69708442687988 4.49919605255127 30.99343681335449 4.499214172363281 Z" stroke="none" fill="#0090ff"/>
    </g>
  </g>
                </svg>
    
                <svg xmlns="http://www.w3.org/2000/svg" width="46.312" height="8" viewBox="0 0 46.312 4">
                <g id="Group_11" data-name="Group 11" transform="translate(-313.739 -1075.453)">
                <path id="Path_3" data-name="Path 3" d="M0,0H42.312" transform="translate(315.739 1077.453)" fill="rgba(0,0,0,0)" stroke="#0090ff" stroke-linecap="round" stroke-width="4"/>
                </g>
                </svg>
                </router-link>
                
                <router-link to="/settings" class="navbar_icon" :class="{'navbar_icon--active': pageName == '/settings'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.155" height="39.155" viewBox="0 0 39.556 39.399">
  <path id="Icon_ionic-md-settings" data-name="Icon ionic-md-settings" d="M34.517,22.845a11.068,11.068,0,0,0,.09-1.77c0-.62-.09-1.15-.09-1.77l3.8-2.92a.813.813,0,0,0,.181-1.15L34.878,9.127a.881.881,0,0,0-1.086-.354l-4.526,1.77a13.174,13.174,0,0,0-3.077-1.77l-.634-4.69a.97.97,0,0,0-.905-.708H17.409a.97.97,0,0,0-.905.708l-.724,4.69a15.328,15.328,0,0,0-3.078,1.77L8.176,8.773a.848.848,0,0,0-1.086.354L3.469,15.234a1.069,1.069,0,0,0,.181,1.15L7.542,19.3c0,.62-.09,1.15-.09,1.77s.09,1.15.09,1.77l-3.8,2.92a.813.813,0,0,0-.181,1.15l3.621,6.107a.882.882,0,0,0,1.086.354l4.526-1.77a13.173,13.173,0,0,0,3.077,1.77l.724,4.69a.877.877,0,0,0,.905.708H24.74a.97.97,0,0,0,.905-.708l.725-4.69a15.319,15.319,0,0,0,3.077-1.77l4.526,1.77a.848.848,0,0,0,1.086-.354l3.621-6.107a1.067,1.067,0,0,0-.181-1.15ZM21.029,27.27a6.2,6.2,0,1,1,0-12.39,6.2,6.2,0,1,1,0,12.39Z" transform="translate(-1.297 -1.375)" fill="none" stroke="#0090ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                </svg>
              
                <svg xmlns="http://www.w3.org/2000/svg" width="46.312" height="8" viewBox="0 0 46.312 4">
                <g id="Group_11" data-name="Group 11" transform="translate(-313.739 -1075.453)">
                <path id="Path_3" data-name="Path 3" d="M0,0H42.312" transform="translate(315.739 1077.453)" fill="rgba(0,0,0,0)" stroke="#0090ff" stroke-linecap="round" stroke-width="4"/>
                </g>
                </svg>
                </router-link>

                <router-link to="/more" class="navbar_icon" :class="{'navbar_icon--active': pageName == '/more'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.155" height="39.155" viewBox="0 0 36 36">
  <g id="Group_166" data-name="Group 166" transform="translate(-463 -1004)">
    <rect id="Rectangle_5" data-name="Rectangle 5" width="15" height="15" rx="5" transform="translate(463 1004)" fill="#0090ff"/>
    <rect id="Rectangle_6" data-name="Rectangle 6" width="15" height="15" rx="5" transform="translate(484 1004)" fill="#0090ff"/>
    <rect id="Rectangle_7" data-name="Rectangle 7" width="15" height="15" rx="5" transform="translate(484 1025)" fill="#0090ff"/>
    <rect id="Rectangle_8" data-name="Rectangle 8" width="15" height="15" rx="5" transform="translate(463 1025)" fill="#0090ff"/>
  </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="46.312" height="8" viewBox="0 0 46.312 4">
                <g id="Group_11" data-name="Group 11" transform="translate(-313.739 -1075.453)">
                <path id="Path_3" data-name="Path 3" d="M0,0H42.312" transform="translate(315.739 1077.453)" fill="rgba(0,0,0,0)" stroke="#0090ff" stroke-linecap="round" stroke-width="4"/>
                </g>
                </svg>
                </router-link>
            </div>
        </div>
    </div>
   
    
</template>

<script>
    export default {
        computed: {
            pageName () {
                return this.$router.currentRoute.value.path
            }
        }
    }
</script>

<style lang="scss">

@import "@/assets/styles/_standard.scss";

.navbar{
    width: 37.5rem;
    background-color: $color-primary-black;
    height: 10%;
    position: absolute;
    bottom: 0;
}

.wrapper-nav{
    position: relative;
    display: flex;
    justify-content: center;
}

.container-nav{
    display: flex;
    margin-top: 4%;
    align-items: center;
    width: 95%;
}
.bar{
    height: 1px;
    width: 100%;
    background: radial-gradient(circle, $color-primary 0, $color-primary-black 100%);
    position: absolute;
}
.navbar_icon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
    opacity: 40%;
    transition: 0.2s;

    &--active{
        transition: 0.2s;
        opacity: 1;
    }
}

svg{
    width: 40%;
    padding: 0;

    &:last-child{
    width: 50%;
    }   
}
</style>