//router文件夹 -> index.js
//并在main.js 全局引入与use

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "cardTurnOver",
            component: () => import("@/views/CardTurnOver.vue"),
        },
        // {
        //   path: "/home",
        //   name: "home",
        //   component: () => import("@/views/HomeView.vue"),
        // },
    ],
});

export default router
