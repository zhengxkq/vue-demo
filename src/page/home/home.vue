<template>
  <div>
      <head-top signin-up="home">
          <span slot="logo" class="head_logo" @click="reload">ele.me</span>
      </head-top>
      <nav class="city_nav">
          <div class="city_tip">
              <span>当前定位城市：</span>
              <span>定位不准时，请在城市列表中选择</span>
          </div>
          <router-link :to="'/city/' + guessCityid" class="guess_city">
             <span>{{guessCity}}</span>
             <svg class="arrow_right">
                 <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
             </svg>
          </router-link>
      </nav>
      <seciton id="hot_city_container">
          <h4 class="city_title">热门城市</h4>
          <ul class="citylisstul clear">
              <router-link tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
                {{item.name}}
              </router-link>
          </ul>
      </seciton>
  </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
    
    components:{
        headTop
    },
    methods:{
        reload(){
            window.location.reload()
        }
    }
}
</script>

