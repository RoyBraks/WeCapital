<script>
    
</script>

<template>
    <div class="wrapper-login">
    <div class="container-login">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="374" height="78" viewBox="0 0 374 78">
        <text id="wecapital" transform="translate(187 62)" fill="#fff" font-size="78" font-family="AbeatbyKai, abeatbyKai"><tspan x="-186.81" y="0">we</tspan><tspan y="0" fill="#0090ff">capital</tspan></text>
        </svg>
        <form class="container-login--form">
            <input type="email" placeholder="name@example.com" class="container-login--form--email" required />
            <br />
            <input type="password" placeholder="password" class="container-login--form--password" required />
            </form>
        <button class="signup">
            <router-link to="/cryptowallet">SIGN UP</router-link>
        </button>
        <hr>
        <div class="socials">
            <svg xmlns="http://www.w3.org/2000/svg" width="42.191" height="43.008" viewBox="0 0 42.191 43.008">
            <path id="Icon_ionic-logo-google" data-name="Icon ionic-logo-google" d="M45.6,21.572l-.217-.92H25.372v8.469H37.326c-1.241,5.894-7,9-11.706,9A14,14,0,0,1,16.2,34.363a13.449,13.449,0,0,1-4.012-9.493,13.872,13.872,0,0,1,3.94-9.483,13.4,13.4,0,0,1,9.359-3.661,12.207,12.207,0,0,1,7.963,3.1l6.018-5.987a21.294,21.294,0,0,0-14.177-5.46h0A21.917,21.917,0,0,0,9.778,9.69,21.829,21.829,0,0,0,3.656,24.881,21.609,21.609,0,0,0,9.54,39.823,22.447,22.447,0,0,0,25.724,46.39a19.963,19.963,0,0,0,14.539-6.111,21.467,21.467,0,0,0,5.584-14.87A24.762,24.762,0,0,0,45.6,21.572Z" transform="translate(-3.656 -3.382)" fill="#0090ff"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="42.27" height="42.008" viewBox="0 0 43.27 43.008">
            <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M43.832,22.2A21.635,21.635,0,1,0,18.817,43.57V28.451h-5.5V22.2h5.5V17.431c0-5.422,3.228-8.417,8.171-8.417a33.3,33.3,0,0,1,4.843.422v5.321H29.1c-2.687,0-3.525,1.668-3.525,3.379V22.2h6l-.96,6.254H25.578V43.57A21.643,21.643,0,0,0,43.832,22.2Z" transform="translate(-0.563 -0.563)" fill="#0090ff"/>
            </svg>

        </div>

    </div>
    </div>
</template>

<style lang="scss">

    @import "@/assets/styles/_standard.scss";

    .wrapper-login{
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
    }
    .container-login{
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: 0;
        padding: 0;
        width: 80%;
        margin-top: 65%;

        align-items: center;

        &--form{
            width: 70%;
            &--email, &--password{
                background-color: transparent;
                border: solid;
                border-color: $color-primary;
                border-radius: 1rem;
                margin-bottom: 1rem;
                width: 100%;
                height: 3.5rem;
                color: $color-white;
                text-align: center;
                font-size: small;
            }
        }
    }

    .logo{
        width: 90%;
        margin-bottom: 28%;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .signup{
        border: none;
        outline: none;
        border: solid;
        border-radius: 1rem;
        font-size: small;
        width: 70%;
        height: 3.5rem;
    }

    .signup{
        margin-top: 1rem;
        color: $color-white;
        background-color: $color-primary;
        border-color: $color-primary;
    }

    hr{
        width: 70%;
        margin-top: 2rem;
        opacity: 25%;
    }

    .socials{
        display: flex;
        gap: 25%;
        margin-top: 1rem;
        justify-content: center;
    }
</style>