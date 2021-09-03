import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/components/Main';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Main',
    
  }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
