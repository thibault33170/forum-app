import { defineStore } from "pinia";

import { Forum } from "@/common/api/forum.api";

export const useForumStore = defineStore("forum", {
  state: () => ({
    loading: false,
    list: [],
  }),

  getters: {
    getBySlug: (state) => (slug) => {
      return state.list.find((forum) => (forum.slug = slug));
    },
  },

  actions: {
    async getAll() {
      this.loading = true;

      try {
        const { data } = await Forum.getAll();

        this.list = data;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
