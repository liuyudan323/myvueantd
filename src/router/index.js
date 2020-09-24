import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../components/main/main'
Vue.use(VueRouter);

const routes = [
  {
  	path: "/login",
    name: "login",
    component: () =>
      import("../views/login/login.vue")
  },
  {
    path: "/",
    name: "_Home",
    redirect: '/Home',
    component: Main,
    children: [{
			path: '/Home',
			name: 'Home',
			component: () =>
				import('../views/Home.vue')
		  },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
