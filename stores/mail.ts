import { defineStore } from 'pinia';

export const useMailStore = defineStore('mailStore', {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    async open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
