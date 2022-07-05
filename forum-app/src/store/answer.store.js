import { defineStore } from "pinia";

import { Answer } from "@/common/api/forum.api";

export const useAnswerStore = defineStore("answer", {
  state: () => ({
    loading: false,
    list: [],
  }),

  getters: {},

  actions: {
    async getAll(filters = {}) {
      this.loading = true;

      try {
        const { data } = await Answer.getAll(filters);

        this.list = data;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
