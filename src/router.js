/**
 * Create by chaos
 * 路由规则
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import Hello from './components/Hello'
import Hello0 from './components/Hello0'
import Front from './components/Front'
import End from './components/End'
const routes = [
  { path: '/Hello', component: Hello },
  { path: '/Hello0', component: Hello0 },
  { path: '/Front', component: Front },
  { path: '/End', component: End }
]
const router = new VueRouter({
  routes
})
export default router;
