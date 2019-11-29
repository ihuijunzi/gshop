

import Msite from '../pages/Msite/Msite'
import Search from "../pages/Search/Search"
import Order from "../pages/Order/Order"
import Profile from "../pages/Profile/Profile"
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

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
        children:[
            {
                path:'/shop/goods',
                component: ShopGoods
            },
            {
                path:'/shop/ratings',
                component: ShopRatings
            },
            {
                path:'/shop/info',
                component: ShopInfo
            },
            {
                path:"",
                redirect: "/shop/goods"
            }
        ]
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
