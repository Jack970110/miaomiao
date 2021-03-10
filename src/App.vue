<template> 
  <div id="main">
     <Header title="喵喵电影"></Header>
     <!-- <div id="wrapp"> -->
         <keep-alive>
      <router-view/>
  </keep-alive>
     <!-- </div> -->
    
 <Footer></Footer>
  </div>
 
    
</template>


<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    components : {
        Footer,
        Header
    }
}
</script>
<style>
/*   #wrapp {
   
        overflow: auto;
         flex:1;
    } */
  html, body {
    height: 100%;
    overflow: hidden;
  }
</style>