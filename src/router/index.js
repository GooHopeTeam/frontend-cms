import {createWebHistory, createRouter} from "vue-router"
import MainPage from "@/components/pages/MainPage";
import Login from "@/components/pages/Login";
import SignUp from "@/components/pages/SignUp";

const routes = [
    {
        path: "/",
        name: MainPage.name,
        component: MainPage,
    },
    {
        path: "/sign_in",
        name: Login.name,
        component: Login
    },
    {
        path: "/sign_up",
        name: SignUp.name,
        component: SignUp
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const non_footer_pages = [Login.name, SignUp.name];
    if (non_footer_pages.includes(to.name)) {
        document.querySelector('.footer').style.display = 'none';
    } else {
        document.querySelector('.footer').style.display = 'flex';
    }

    next();
})


export default router