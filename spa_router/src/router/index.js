import Vue from "vue";
import VueRouter from "vue-router";

// MainPage와 SubPage 컴포넌트 모듈 가져오기
import MainPageView from "@/views/MainPageView.vue";
import SubPageView from "@/views/SubPageView.vue";

Vue.use(VueRouter);

const routes = [
  {
    // 첫 루트 페이지는 MainPage로 설정
    path: "/",
    name: "home",
    component: MainPageView,
  },
  {
    path: "/main",
    name: "MainPageView",
    component: MainPageView,
  },
  {
    path: "/sub",
    name: "SubPageView",
    component: SubPageView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
