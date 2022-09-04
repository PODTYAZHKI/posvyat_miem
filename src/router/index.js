import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    // scrollBehavior: () => ({ left: 0, top: 0 }),

    scrollBehavior(to, from, savedPosition) {
      if (to.fullPath === "/registration") {
        return { left: 0, top: 0 };
      } else if (to.hash) {
        return {
          // x, y are replaced with left/top to define position, but when used with an element selector (el) will be used as offset
          el: to.hash,
          // offset has to be set as left and top at the top level
          left: 0,
          top: 64,
          behavior: 'smooth',
        }
      }
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});
