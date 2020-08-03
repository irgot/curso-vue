<template>
    <div class="calculator">
        <Display :value="displayValue">  </Display>
        <Button @onClick="clearMemory" label="AC" triple></Button>
        <Button @onClick="setOperation" label="/" operation></Button>
        <Button @onClick="addDigit" label="7"></Button>
        <Button @onClick="addDigit" label="8"></Button>
        <Button @onClick="addDigit" label="9"></Button>
        <Button @onClick="setOperation" label="*" operation></Button>
        <Button @onClick="addDigit" label="4"></Button>
        <Button @onClick="addDigit" label="5"></Button>
        <Button @onClick="addDigit" label="6"></Button>
        <Button @onClick="setOperation" label="-" operation></Button>
        <Button @onClick="addDigit" label="1"></Button>
        <Button @onClick="addDigit" label="2"></Button>
        <Button @onClick="addDigit" label="3"></Button>
        <Button @onClick="setOperation" label="+" operation></Button>
        <Button @onClick="addDigit" label="0" double></Button>
        <Button @onClick="addDigit" label="."></Button>
        <Button @onClick="setOperation" label="=" operation></Button>
    </div>
  
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'
export default {
    components:{Button, Display},
    data:()=>{
        return{
            displayValue:"0",
            clearDisplay:false,
            operation:null,
            values:[0,0],
            current:0
        }
    },
    methods: {
        clearMemory(){
            Object.assign(this.$data,this.$options.data())
        },
        setOperation(operation){
            if(this.current===0){
                this.operation=operation
                this.current=1
                this.clearDisplay=true
            }else{
                const equals = operation==='='
                const currentOperation = this.operation
                try{
                    this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`)
                }catch (e){
                    this.$emit('onError',e)
                }
                this.values[1] = 0
                this.displayValue=this.values[0]
                this.operation = equals? null: operation
                this.current=equals?0:1
                this.clearDisplay=!equals
            }
        },
        addDigit(n){
            if(n==='.'&& this.displayValue.includes(".")){
                return
            }
            const clearDisplay = this.displayValue==='0' || this.clearDisplay
            const currentValue = clearDisplay?"":this.displayValue
            const displayValue = currentValue+n
            this.displayValue=displayValue
            this.clearDisplay=false
            this.values[this.current] = displayValue
            if(n!=="."){
                const i  = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }

            
        }

    },

}
</script>

<style>
.calculator{
    height: 320px;
    width:235px;
    border-radius: 5px;
    overflow: hidden;

    display:grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>