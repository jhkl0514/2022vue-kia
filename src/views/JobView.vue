<template>
  <header-view></header-view>
  <div class="subVisual">
    잡
  </div>

  <div class="container content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae itaque delectus officiis eius, cumque nulla reiciendis odio a quos hic perspiciatis, veniam assumenda. Incidunt quae dolores sit harum quaerat!
  </div>

  <footer-view></footer-view>
</template>

<script>
import HeaderView from "@/components/page/HeaderView.vue"
import FooterView from "@/components/page/FooterView.vue"

export default {
  components:{
    HeaderView,
    FooterView,
  }
}

</script>

<style lang="scss">
    .subVisual{      
        background: pink;
        height: 200px;
       
        h3{
            color: white;
            font-style: 2em;
            text-shadow: 0 0 10px rgba(0 0 0);
        }
    }
    .aboutCon{
        padding: 30px;
    }
</style>