<template>
  <header-view></header-view>
  <div class="subVisual">
    <h3>지원하기</h3>
  </div>
  <div class="container">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae praesentium culpa, voluptates veniam ipsum at quas! Enim, rem quae? Hic, officiis error veritatis tempore dolore at rerum blanditiis molestias laboriosam.
  </div>
  <footer-view></footer-view>
</template>

<script>
import HeaderView from '@/components/page/HeaderView.vue'
import FooterView from "@/components/page/FooterView.vue"
export default {
    components:{
        HeaderView,
        FooterView         
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