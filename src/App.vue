<template> 
  <div id="main">
      <Header title="喵喵电影"></Header>
        <keep-alive>
          <router-view/>
        </keep-alive> 
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
  html, body {
    height: 100%;
    overflow: hidden;
  }
</style>