<template>
  <div>
    <router-link :to="{ name: 'category', params: { categorySlug: slug } }">{{
      name
    }}</router-link>
    <ul>
      <li v-for="(forum, i) in forums" :key="i">
        <router-link
          :to="{
            name: 'forum',
            params: { categorySlug: slug, forumSlug: forum.slug },
          }"
          >{{ forum.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useForumStore } from "@/store/forum.store.js";

export default {
  props: {
    name: {
      type: String,
    },

    id: {
      type: String,
    },

    slug: {
      type: String,
    },
  },

  setup(props) {
    const forumStore = useForumStore();
    const forums = computed(() =>
      forumStore.list.filter((forum) => forum.categoryId === props.id)
    );

    return { forums: forums };
  },
};
</script>

<style scoped></style>
