<template>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>
*{margin: 0;padding: 0; box-sizing: border-box;}
ul,li{list-style: none;}
a:link,a:visited{text-decoration: none; color:#333}
.container{width: 1200px; margin: 0 auto;}

@media (max-width:767px){
  .container{width: 100%; padding: 0 16px;}
}

</style>