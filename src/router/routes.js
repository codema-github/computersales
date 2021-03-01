const routes = [
    {
        path: '/',
        redirect: 'Login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')

    },
    {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
        redirect: 'Welcome',
        children: [
            {
                path: '/welcome',
                name: 'Welcome',
                component: () => import(/* webpackChunkName: "welcome" */ '../views/management/welcome/Welcome.vue')

            },
            {
                path: '/finance',
                name: 'Finance',
                component: () => import(/* webpackChunkName: "finance" */ '../views/management/finance/Finance.vue')
            },
            {
                path: '/achievement',
                name: 'Achievement',
                component: () => import(/* webpackChunkName: "achievement" */ '../views/management/sales/achievement/Achievement.vue')
            },
            {
                path: '/staff',
                name: 'Staff',
                component: () => import(/* webpackChunkName: "staff" */ '../views/management/staff/Staff.vue')
            },
            {
                path: '/addStaff',
                name: 'AddStaff',
                component: () => import(/* webpackChunkName: "addStaff" */ '../views/management/staff/children/AddStaff.vue')
            },
            {
                path: '/checkStaff',
                name: 'CheckStaff',
                component: () => import(/* webpackChunkName: "checkStaff" */ '../views/management/staff/children/CheckStaff.vue')
            },
            {
                path: '/order',
                name: 'Order',
                component: () => import(/* webpackChunkName: "order" */ '../views/management/sales/order/Order.vue')
            },
            {
                path: '/stock',
                name: 'Stock',
                component: () => import(/* webpackChunkName: "stock" */ '../views/management/stock/Stock.vue')
            }
        ]
    }
]
export default routes
