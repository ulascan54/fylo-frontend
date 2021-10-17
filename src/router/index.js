import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import BlogPosts from "../view/BlogPosts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
    {
    path: "/blog-post",
    name: "BlogPosts",
    component: BlogPosts,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
