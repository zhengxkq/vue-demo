<template>
    <div class="news-wrapper">
        <div class="news-title">{{title}}</div>
        <router-view keep-alive transition="flip" transition-mode="out-in">

        </router-view>
    </div>
</template>

<script>
    import newsList from './newsList.vue'
    import newsDetail from './newsDetail.vue'

    export default {
        name: 'news',
        data() {
            return {
                title: '这是新闻标题模块'
            }
        },
        components: {
            newsList,
            newsDetail
        }

    }

</script>

<style>
    .news-title {
        padding: 0 0 5px;
        font-size: 16px;
        color: #ccc;
    }

</style>
