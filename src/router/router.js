import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const city = r => require.ensure([],() => r(require('../page/city/city')),'city')
// const city = r => require.ensure([],() => r(require('../page/city/city')), 'city')

export default [{
    path:'/',
    component:App,
    children:[
        //地址为空时跳转home页面
        {
            path:'',
            redirect:'/home'
        },
        //首页城市列表
        {
            path:'/home',
            component:home
        },
        //当前选择城市页
        {
            path: '/city?cityid',
            component: city
        },
        //登陆页
        {
            path:'/login',
            component:login
        }
    ]
}]
