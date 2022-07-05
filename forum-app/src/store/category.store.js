import { defineStore } from "pinia";

import { Category } from "@/common/api/forum.api";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    loading: false,
    list: [],
  }),

  getters: {},

  actions: {
    async getAll() {
      this.loading = true;

      try {
        const { data } = await Category.getAll();

        this.list = data;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
