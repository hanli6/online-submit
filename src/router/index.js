import Vue  from "vue";
import Router from "vue-router";
import main from "@/views/main.vue";
import VueRouter from "vue-router";
import login from "@/views/Login.vue";
import register from "@/views/Register.vue";

Vue.use(Router);

//配置路由
const routes = [
    {
        "path": "/",
        name: "Main",
        component: main,
        redirect:'/home',
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    }
]

//注册路由
const router = new VueRouter(
    {
        routes
    }
);

//导出路由
export default router;