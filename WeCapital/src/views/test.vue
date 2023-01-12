<template>
  <div v-for="coin in cryptoTotal.coins">
    {{ coin.id }} - {{ coin.amount }}
    
  </div>

  <form @submit.prevent="buyForm">
    <input
    type="text"
    placeholder="Amount"
    v-model="addAmount"
    >
    <button>Buy</button>

  </form>

  <form @submit.prevent="sellForm">
    <input
    type="text"
    placeholder="Amount"
    v-model="removeAmount"
    >
    <button>Sell</button>
  </form>
</template>
  
<script>
import { useCryptoTotal } from "@/stores/CryptoStore.js";
import { ref } from "vue";
  export default {
    setup () {
      const cryptoTotal = useCryptoTotal()

      const addAmount = ref('')
      const removeAmount = ref('')

      const buyForm = () => {
        if (addAmount.value.length > 0) {
          cryptoTotal.addCoin({
            id: addAmount.value,
            amount: addAmount.value
          })
          addAmount.value = ''
        }
      }

      const sellForm = () => {
        if (removeAmount.value.length > 0) {
          cryptoTotal.addCoin({

            amount: removeAmount.value
          })
          removeAmount.value = ''
        }
      }

      return {
        buyForm, sellForm, addAmount, cryptoTotal, removeAmount
      }
    }
  }

    
</script>
  
<style lang="scss">
  @import "@/assets/styles/_standard.scss";

</style>