<template>
  <div>
    <router-view></router-view>

    <h1>{{ topic.title }}</h1>

    <p>{{ topic.content }}</p>

    <h1>answers :</h1>

    <div v-for="(answer, i) in answers" :key="i">
      <p>Réponse de {{ answer.author }} :</p>

      <p>{{ answer.content }}</p>
    </div>
  </div>
</template>

<script>
import { computed, watch } from "vue";

import { useRoute } from "vue-router";

import { useTopicStore } from "@/store/topic.store.js";
import { useAnswerStore } from "@/store/answer.store.js";

export default {
  setup() {
    const route = useRoute();

    const topicStore = useTopicStore();
    const answerStore = useAnswerStore();

    const topicId = computed(() => route.params.topicId);
    const topic = computed(() => topicStore.topic);

    watch(topicId, () => {
      topicStore.getOne(topicId.value);

      const filters = {
        topicId: topicId.value,
      };

      answerStore.getAll(filters);
    });

    return { topic, answers: answerStore.list };
  },
};
</script>

<style scoped></style>
