<template>
  <div class="container" v-if="forums.length && categories.length">
    <router-view></router-view>
  </div>

  <div v-else>loading ...</div>
</template>

<script>
import { computed } from "vue";
import { useCategoryStore } from "@/store/category.store.js";
import { useForumStore } from "@/store/forum.store.js";

export default {
  setup() {
    const categoryStore = useCategoryStore();
    categoryStore.getAll();

    const forumStore = useForumStore();
    forumStore.getAll();

    const forums = computed(() => forumStore.list);
    const categories = computed(() => categoryStore.list);

    return { forums, categories };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
