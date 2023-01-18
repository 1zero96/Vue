import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Read from "../components/CrudRead.vue";
import Create from "../components/CrudCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Read",
    component: Read,
  },
  {
    path: "/read",
    name: "Read",
    component: Read,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/create/:contentId?",
    name: "create",
    component: () => import(/* webpackChunkName: "crud" */ "../components/CrudCreate.vue"),
  },
  {
    path: "/detail/:contentId",
    name: "detail",
    component: () => import(/* webpackChunkName: "crud" */ "../components/CrudDetail.vue"),
  },
  {
    path: "*", // <= 주소에 없는 나머지에 접속했을 때 (not) : 정규식 등 분류해서 사용 가능
    name: "error",
    component: () => import(/* webpackChunkName: "crud" */ "../components/CrudError.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
