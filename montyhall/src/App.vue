<template>
    <div id="app">
        <h1>Problema de MontyHall</h1>
        <div class="form">
            <div v-if="!started">
                <label for="doorsAmount">Quantas portas?</label>
                <input type="text" name="doorsAmount" id="doorsAmount" size="3"
                    v-model.number="doorsAmount"
                >
            </div>
            <div v-if="!started">
                <label for="selectedDoor">Qual a porta é premiada?</label>
                <input type="text" name="selectedDoor" id="selectedDoor"
                    v-model.number="selectedDoor" size="3">
            </div>
            <button v-if="!started" @click="started=true">Iniciar</button>
            <button v-if="started" @click="started=false">Reiniciar</button>  
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in doorsAmount" :key="i">
                <Door :hasGift="i===selectedDoor" :number="i"/>
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door'
export default {
    name: 'App',
    components:{Door},
    data:()=>{
        return{
            started:false,
            doorsAmount:3,
            selectedDoor:null
        }
    }
}
</script>

<style>
*{
    box-sizing: border-box;
    font-family: 'Monserrat',sans-serif;
}
body{
    color:#ffffff;
    background: linear-gradient(to right, rgb(167, 112, 239), rgb(207, 139, 243), rgb(253, 185, 155));
}
#app{
    display:flex;
    flex-direction: column;
    align-items: center;

}
#app h1{
    border:1px solid #000000;
    background-color:#00000044;
    padding: 20px;
    margin-bottom: 60px;
}
.form{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}
.form, .form input, .form button{
    margin-bottom: 10px;
    font-size:2rem;
}
.doors{
    display:flex;
    align-self: stretch;
    justify-content: space-around;

    flex-wrap: wrap;
}
</style>