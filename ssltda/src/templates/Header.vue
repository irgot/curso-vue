<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">    
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"
                ><i class="fas fa-bars"></i
            ></a>
        </li>
        <router-link to="/"
        v-slot="{href}">
        <li class="nav-item d-none d-sm-inline-block">
            <a :href="href" class="nav-link" >Home</a>
        </li>
        </router-link>
    </ul>
    <ul class="nav-bar ml-auto">
        <li class="nav-item d-none d-sm-inline-block" style="min-width: 500px">
                <multiselect  v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opções selecionadas</span></template>
                </multiselect >
            </li>
    </ul>    
</nav>
</template>

<script>
import multiselect from 'vue-multiselect'
export default {
    components:{multiselect},
    data(){
        return{
            value:[],
            options:[
                {name:'Loja 01'},
                {name:'Loja 02'},
                {name:'Loja 03'},
                {name:'Loja 04'},
                {name:'Loja 05'},
                {name:'Loja 06'},
                {name:'Loja 07'},

            ]
        }
    }

}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

</style>