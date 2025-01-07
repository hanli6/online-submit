import Vue  from "vue";
import Router from "vue-router";
import home from "@/views/Home.vue";
import user from "@/views/user.vue";
import main from "@/views/main.vue";
import VueRouter from "vue-router";
import mall from "@/views/Mall.vue";
import pageOne from "@/views/PageOne.vue";
import pageTwo from "@/views/PageTwo.vue";
import login from "@/views/Login.vue";
import register from "@/views/Register.vue";

Vue.use(Router);

//配置路由
const routes = [
    {
        "path": "/",
        component: main,
        redirect:'/home',
        children:[
            {
                "path": "/home",
                component:home
            },
            {
                "path": "/mall",
                component:mall
            },
            {
                "path": "/user",
                component:user
            },
            {
                "path": "/pageOne",
                component:pageOne
            },
            {
                "path": "/pageTwo",
                component:pageTwo
            }
        ]
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