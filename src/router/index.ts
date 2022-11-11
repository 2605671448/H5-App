import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/result",
    name: "result",
    meta: {
      title: "结果",
      keepAlive: true
    },
    component: () => import("../views/result/index.vue"),
  },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
