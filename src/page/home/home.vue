<template>
  <div>
      <head-top signin-up="home">
          <span slot="logo" class="head_logo" @click="reload">ele.me</span>
      </head-top>
  </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
    
    components:{
        headTop
    }
}
</script>

