import { defineStore } from "pinia";

export const useCryptoTotal = defineStore('cryptoTotal', {
  state: () => ({
    coins: [
      {id: "bitcoin", amount: 1.5},
      {id: "ethereum", amount: 1.2},
      {id: "cardano", amount: 120}
    ]
  }),
  actions: {
    addCoin(coin) {
      this.coins.id("bitcoin").push(coin)
    }
  }
})