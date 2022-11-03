<template>
  <header class="headerWrap">
    <div class="header container">
      <h1><router-link to="/">LOGO</router-link></h1>
      <nav class="navbar">
        <ul>
          <li><router-link to="/apply">지원하기</router-link></li>
          <li><router-link to="/life">Life at Kia</router-link></li>          
          <li><router-link to="/story">Work Story</router-link></li>
          <li><router-link to="/job">채용프로세스</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
          <li><router-link to="/blog">채용블로그</router-link></li>
        </ul>
      </nav>
      
      <div class="toggle"></div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.headerWrap{
    position: fixed;
    width: 100%;
    padding: 10px 0;
}

@media (max-width:767px){
    .headerWrap{
         background: #fff;
         position: relative;
        }
    }
     


    .header{
        display: flex;
        h1 > a{color:white}
        
        .navbar{
            margin-left: auto;
            > ul{
                display: flex;
                height: 100%;
                > li{                    
                }
                a{
                    display: flex;
                    padding: 0 20px;
                    height: 100%;
                    color:white;
                    justify-content: center;align-items: center;
                    &.router-link-active{background: blue;}
                }
                }
            
                
            }
         
        .toggle{display: none;} 
         @media (max-width:767px){
                h1 > a{color:#333}
                .navbar{display: none;}
                .toggle{
                    display: block;margin-left: auto;
                    width: 50px;height: 50px; background: skyblue;  
                }
            }  
    }
</style>