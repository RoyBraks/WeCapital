<script setup>

</script>

<template>
  <router-view />
</template>

<style lang="scss">

@import "./assets/styles/_standard.scss";

html {
  font-size: 62.5%;
}
    

body{
    font-family: 'Bahnschrift', sans-serif;
    display: flex;
    height: 100vh;
    overflow: hidden;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
    color: $color-white;

}


#app{
    width: 37.5rem;
    position: relative;
    max-height: 81.2rem;
    height: calc(101vh - 10rem);
    overflow-y: scroll;
    background: linear-gradient(135deg, rgba(0,144,255,0.37) 0%, rgba(2,0,36,0) 40%);
    background-color: $color-primary-black;

    
    &::before{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        z-index: -2;
        position: absolute;
    }

    &::-webkit-scrollbar{
      width: 0;
    }
}
main{
    padding: 3rem;
    padding-bottom: 3.5rem;
    min-height: calc(100% - 7.8rem);
   
}
</style>