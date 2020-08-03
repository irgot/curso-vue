<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <div id="app">  
        <Header></Header>  
        <RightSidebar></RightSidebar>
        <Sidebar></Sidebar>        
        <router-view></router-view>        
        <Footer></Footer>
  </div>
</template>

<style>

</style>
<script>

import jQuery from 'jquery'
window.jQuery=jQuery



import Footer from './templates/Footer'
import Header from './templates/Header'
import RightSidebar from './templates/RightSidebar'
import Sidebar from './templates/Sidebar'

export default {
    components:{Footer,Header,RightSidebar,Sidebar}
}
</script>