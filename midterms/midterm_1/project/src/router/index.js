import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active__route",
    routes,
});
router.afterEach((to, from) => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
router.beforeEach((to, from, next) => {
    if (to.meta['requiresAuth'] && (!localStorage.getItem('accessToken'))) {
        next({
            name: 'login',
        });
    } else {
        next();
    }
});

export default router;
