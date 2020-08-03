<template>
    <div id="app">
        <h1>Calculadora</h1>
        <Calculator></Calculator>
    </div>
</template>

<script>
import Calculator from './main/Calculator'
export default {
    components:{Calculator}
}
</script>
 
<style>
    @font-face {
        font-family: 'Roboto Mono';
        src: url("./fonts/RobotoMono-Regular.ttf");
    }
    *{
        font-family:'Roboto Mono', monospace;
    }
    body{
        margin:0;
    }
    #app{
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;

        color:#ffffff;
        background: linear-gradient(to right, rgb(243, 144, 79), rgb(59, 67, 113));
    }
</style>