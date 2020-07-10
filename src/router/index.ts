import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/:status?', // All인 경우 status가 없으므로 status 값이 optional 하다는 의미로 ?를 붙여준다.
    name: 'ItemList', // 해당 route의 고유 id와 같은 존재
    component: () => import('@/views/ItemList.vue'), // lazy loading 적용
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
