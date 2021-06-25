import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Index = () => import("@/views/Index.vue");
// const 404 = () => import("@/views/404.vue");
const Login = () => import("@/views/login/LoginRegister.vue");
// import(/* webpackChunkName: "index" */ "@/views/login/loginRegister.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Iindex",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:catchAll(.*)",
    name: "/404",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
