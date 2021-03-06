import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import FaqPage from '@/pages/Faq'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
import ProfilePage from '@/pages/Profile'
import ExchangeCreatePage from '@/pages/ExchangeCreate'

import firebase from 'firebase/app'
import 'firebase/auth'



Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        },
        {
            path: '/faq',
            name: 'FaqPage',
            component: FaqPage
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage,
            meta: { onlyGuestUser: true }
        },
        {
            path: '/register',
            name: 'RegisterPage',
            component: RegisterPage,
            meta: { onlyGuestUser: true }
        },
        {
            path: '/user/me',
            name: 'ProfilePage',
            component: ProfilePage,
            meta: { onlyAuthUser: true }
        },
        {
            path: '/exchanges/new',
            name: 'ExchangeCreatePage',
            component: ExchangeCreatePage,
            meta: { onlyAuthUser: true }
        }
    ],
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    const autheniatedUser = firebase.auth().currentUser
    if (to.meta.onlyAuthUser) {
        if (autheniatedUser) {
            next()
        } else {
            // TODO: Navigate to page fot non authenticated user
            next({name: 'LoginPage'})
        }
    } else if (to.meta.onlyGuestUser) {
        if (autheniatedUser) {
            next({name: 'HomePage'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router