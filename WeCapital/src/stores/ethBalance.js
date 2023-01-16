import { defineStore } from "pinia";

export const useETHBalance = defineStore('ETHBalance', {
  state: () => ({
    amount: 1.3
  }),
  actions: {
    addAmount(val) {
      this.amount += val
    }
  }
})