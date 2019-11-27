

import Msite from '../pages/Msite/Msite'
import Search from "../pages/Search/Search"
import Order from "../pages/Order/Order"
import Profile from "../pages/Profile/Profile"
import Shop from '../pages/Shop/Shop'
import Login from '../pages/Login/Login'

export default [
    {
        path:'/',
        redirect:'/msite'
    },
    {
        path:'/msite',
        component:Msite,
        meta: {
            showFootGuide: true
        }
    },
    {
        path:'/search',
        component:Search,
        meta: {
            showFootGuide: true
        }
    },
    {
        path:'/order',
        component:Order,
        meta: {
            showFootGuide: true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta: {
            showFootGuide: true
        }
    },
    {
        path:'/shop',
        component:Shop,
        // meta: {
        //     showFootGuide: false
        // }
    },
    {
        path:'/login',
        component:Login,
        // meta: {
        //     showFootGuide: false
        // }
    }
]
