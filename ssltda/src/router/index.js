import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/e404",
        name: "E404",
        component: () => import("../views/E404.vue"),
        meta: {
            title: "Error 404"
        }
    },
    {
        path: "*",
        redirect: "/e404",
        meta: {
            title: "Error 404"
        }
    },
    {
        path: "",
        name: "Home",
        component: Home,
        meta: {
            title: "Error 404"
        }
    },
    {
        path: "/indicators",
        name: "Indicators",
        component: () => import("../views/Indicators.vue"),
        meta: {
            title: "Error 404"
        }
    },
    {
        path: "/algorithms",
        name: "Algorithms",
        component: () => import("../views/Algorithms.vue")
    },
    {
        path: "/exposure-management",
        name: "ExposureManagement",
        component: () => import("../views/ExposureManagement.vue")
    },
    {
        path: "/logistics-management",
        name: "LogisticsManagement",
        component: () => import("../views/LogisticsManagement.vue")
    },
    {
        path: "/purchasing-management",
        name: "PurchasingManagement",
        component: () => import("../views/PurchasingManagement.vue")
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue")
    },
    {
        path: "/reports",
        name: "Reports",
        component: () => import("../views/Reports.vue")
    },
    {
        path: "/schedule",
        name: "Schedule",
        component: () => import("../views/Schedule.vue")
    },
    {
        path: "/system",
        name: "System",
        component: () => import("../views/System.vue")
    }
];

const router = new VueRouter({
    //   mode:
    base: process.env.BASE_URL,
    routes,
    mode:'hash',
    watch: {
        $route(to) {
            console.log('asdf')
            document.title = to.meta.title || "Your Website";

        }
    }
});

export default router;
