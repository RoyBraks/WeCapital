import { defineStore } from "pinia";

export const useBTCBalance = defineStore('BTCBalance', {
  state: () => ({
    amount: 0.1
  }),
  actions: {
    addAmount(val) {
      this.amount += val
    }
  }
})