import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },

  {
    path: "/:categorySlug",
    name: "category",
    component: () => import("@/pages/Category.vue"),
    children: [
      {
        path: ":forumSlug",
        name: "forum",
        component: () => import("@/pages/Forum.vue"),
        children: [
          {
            path: ":topicId",
            name: "topic",
            component: () => import("@/pages/Topic.vue"),
          },
        ],
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
