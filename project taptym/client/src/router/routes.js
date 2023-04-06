const login = () => import('@/pages/auth/login.vue')
const otp = () => import('@/pages/auth/otp.vue')
const registration = () => import('@/pages/auth/registration.vue')
const main = () => import('@/pages/main.vue')
const sale = () => import('@/pages/common/tradeType.vue')
const chat = () => import('@/pages/chat/chat.vue')
const profile = () => import('@/pages/profile/profile.vue')
const product = () => import('@/pages/common/product.vue')
const chatDetail = () => import('@/pages/chat/chatDetail.vue')
const account = () => import('@/pages/profile/account.vue')
const privacyPolicy = () => import('@/pages/profile/privacyPolicy.vue')
const conditionOfUse = () => import('@/pages/profile/conditionOfUse.vue')
const myPoints = () => import('@/pages/profile/myPoints.vue')
const hashtags = () => import('@/pages/profile/hashtags.vue')
const productList = () => import('@/pages/common/productList.vue')
const favorites = () => import('@/pages/profile/favorites.vue')
export const routes = [
    {
        path: '/',
        redirect: '/auth/login',
    },
    {
        path: '/auth',
        redirect: '/auth/login',
    },
    {
        path: '/auth/login',
        name: 'login',
        component: login,
    },
    {
        path: '/auth/otp',
        name: 'otp',
        component: otp,
    },
    {
        path: '/auth/registration',
        name: 'registration',
        component: registration,
    },
    {
        path: '/dashboard',
        name: 'main',
        redirect: {name: 'tradeType', params: {tradeType: 'sell'}},
        component: main,
        children: [
            {
                path: ':tradeType',
                name: 'tradeType',
                component: sale,
                redirect: {name: 'more'},
                children: [
                    {
                        path: 'more',
                        name: 'more',
                        component: productList,
                    },
                    {
                        path: 'auto',
                        name: 'auto',
                        component: productList,
                    },
                    {
                        path: 'quarter',
                        name: 'quarter',
                        component: productList,
                    },
                    {
                        path: 'services',
                        name: 'services',
                        component: productList,
                    },
                ]
            },
        ]
    },
    {
        path: '/dashboard/:tradeType/:category/:id',
        name: 'product',
        component: product,
    },
    {
        path: '/chat/:chatId',
        name: 'chatDetail',
        component: chatDetail,
    },
    {
        path: '/account',
        name: 'account',
        component: account
    },
    {
        path: '/privacy-policy',
        name: 'privacyPolicy',
        component: privacyPolicy
    },
    {
        path: '/condition-of-use',
        name: 'conditionOfUse',
        component: conditionOfUse
    },
    {
        path: '/my-points',
        name: 'myPoints',
        component: myPoints,
    },
    {
        path: '/hashtags',
        name: 'hashtags',
        component: hashtags,
    },
    {
        path: '/chat',
        name: 'chat',
        component: chat,
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile,
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: favorites,
        redirect: '/favorites/more',
        children: [
            {
                path: ':category',
                name: 'favoriteCategory',
                component: productList,
            },
        ]
    },
].map(route => {
    if (!['registration', 'login'].includes(route.name)) {
        if ('children' in route) {
            route.children.map(childRoute => {
                if (!('meta' in childRoute)) {
                    childRoute.meta = {};
                }
                childRoute.meta.requiresAuth = true;
                return childRoute;
            });
        }
        if (!('meta' in route)) {
            route.meta = {};
        }
        route.meta.requiresAuth = true;
    }
    return route;
});

