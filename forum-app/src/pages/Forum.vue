<template>
  <div>
    <router-view></router-view>

    <h1>Forum {{ forum.name }}</h1>
    <p>id : {{ forum.id }}</p>
    <p>slug : {{ forum.slug }}</p>

    <hr />

    <h2>Topics de {{ forum.name }}:</h2>

    <div v-for="(topic, i) in topics" :key="i">
      <h4>
        <router-link
          :to="{
            name: 'topic',
            params: {
              topicId: topic.id,
            },
          }"
          >{{ topic.title }}</router-link
        >
      </h4>
      <p>{{ topic.content }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

import { useRoute } from "vue-router";
import { useForumStore } from "@/store/forum.store.js";
import { useTopicStore } from "@/store/topic.store.js";

export default {
  setup() {
    const route = useRoute();
    const forumStore = useForumStore();
    const topicStore = useTopicStore();

    const forum = computed(() => forumStore.getBySlug(route.params.forumSlug));

    const filters = {
      forumId: forum.id,
    };

    topicStore.getAll(filters);

    return { forum, topics: topicStore.list };
  },
};
</script>

<style scoped></style>
