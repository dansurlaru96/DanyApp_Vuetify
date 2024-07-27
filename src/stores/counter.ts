import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    productClicks: 0,
    productViews: 0,
    productPurchases: 0,
  }),

  getters: {
    totalClicks: (state) => {
      state.productClicks + state.productViews + state.productPurchases;
    },
  },
  actions: {
    incrementClicks() {
      this.productClicks++;
    },
    incrementViews() {
      this.productViews++;
    },
    incrementPurchases() {
      this.productPurchases++;
    },
  },
});
