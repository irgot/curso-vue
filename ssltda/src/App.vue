<template>
    <div class="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <Content></Content>
        <RightSidebar></RightSidebar>
        <Footer></Footer>
        
    </div>
</template>

<script>
const $ = require("jquery");
import jQuery from "jquery";
// We declare it globally
window.$ = $;
window.jQuery = jQuery;
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from './components/Content'
import RightSidebar from './components/RightSidebar'
import Footer from './components/Footer'
export default {
    name: "App",
    components: { Header, Sidebar,Content,RightSidebar,Footer }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
