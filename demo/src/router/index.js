import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import news from '@/views/news/news.vue'
// import newsList from '@/views/news/newsList.vue'
// import newsDetail from '@/views/news/newsDetail.vue '
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        'path': '/news',
        name: 'news',
        component: news
    }]
})
