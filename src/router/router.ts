import {createRouter, createWebHistory} from "vue-router";
import LayoutMain from "../layouts/main/LayoutMain.vue";
import ViewMain from "../views/main/ViewMain.vue";
import ViewIntro from "../views/intro/ViewIntro.vue";

const routes = [
        {
            path: '',
            name: 'LayoutMain',
            component: LayoutMain,
            children: [
                {
                    path: '',
                    name: 'ViewIntro',
                    component: ViewIntro,
                },
                {
                    path: '/main',
                    name: 'ViewMain',
                    component: ViewMain,
                },
            ]
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router
