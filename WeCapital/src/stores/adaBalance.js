import { defineStore } from "pinia";

export const useADABalance = defineStore('ADABalance', {
  state: () => ({
    amount: 130
  }),
  actions: {
    addAmount(val) {
      this.amount += val
    }
  }
})