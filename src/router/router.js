
import App from '../App'

const home=()=>import(/* webpackChunkName: "home" */ '../page/home/home')
const food=()=>import(/* webpackChunkName: "food" */ '../page/food/food')

export default [{
    path:'/',
    component:App,
    children:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            component:home
        },
        {
            path:'/food',
            component:food
        }
    ]
}]