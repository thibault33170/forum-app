<template>
  <div>
    <CategoryForums v-for="(category, i) in list" :key="i" v-bind="category" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useCategoryStore } from "@/store/category.store.js";
import CategoryForums from "@/components/Category/CategoryForums.vue";

export default {
  components: { CategoryForums },

  setup() {
    const categoryStore = useCategoryStore();
    categoryStore.getAll();

    const list = computed(() => categoryStore.list);

    return { list };
  },
};
</script>

<style scoped></style>
