<template>
  <div>
    <router-view></router-view>

    <CategoryForums v-bind="category" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/store/category.store.js";

import CategoryForums from "@/components/Category/CategoryForums.vue";

export default {
  components: { CategoryForums },

  setup() {
    const route = useRoute();
    const categoryStore = useCategoryStore();

    const categorySlug = computed(() => route.params.categorySlug);

    const category = computed(() =>
      categoryStore.list.find((category) => category.slug === categorySlug)
    );

    return { category };
  },
};
</script>

<style scoped></style>
