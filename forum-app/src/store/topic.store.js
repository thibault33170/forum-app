import { defineStore } from "pinia";

import { Topic } from "@/common/api/forum.api";

export const useTopicStore = defineStore("topic", {
  state: () => ({
    loading: false,
    topic: {},
    list: [],
  }),

  getters: {},

  actions: {
    async getAll(filters = {}) {
      this.loading = true;

      try {
        const { data } = await Topic.getAll(filters);

        this.list = data;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },

    async getOne(id) {
      this.loading = true;

      try {
        const { data } = await Topic.getOne(id);

        this.topic = data;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
