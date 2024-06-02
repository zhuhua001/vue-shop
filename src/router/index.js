//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from "@/pages/Home/ShopHome";
import Search from "@/pages/Search/ShopSearch";
import Register from "@/pages/Register/ShopRegister";
import Login from "@/pages/Login/ShopLogin";

//创建并暴露一个路由器
export default new VueRouter({
    //配置路由
    routes:[
        {
            path: '/home',
            component: Home,
            meta:{
                show: true
            }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            meta:{
                show: true
            }
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        //项目启动，路由重定向
        {
            path: '/',
            redirect: '/home'
        },
    ]
});