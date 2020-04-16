<template>
    <div class="search_wrap">
        <div class="inputFrame">
            <span class="input_name" v-if="inputName">{{inputName}}</span>
            <input type="text" :placeholder="placeholder" v-model="valueText" :style="{width:input_width}">
        </div>
        <button @click="$emit('input', valueText)">查询</button>
    </div>
</template>

<script>
export default {
    name: 'search',
    model: {
        prop: 'valueText',
        event: 'input'
    },
    props: {
        valueText: String,
        inputName: String,
        placeholder: String
    },
    data() {
        return {
            input_width: '',
        };
    },
    computed: {
        
    },
    created() {

    },
    mounted() {
        this.inputWidth();
    },
    watch: {

    },
    methods: {
        inputWidth(){
            const name = document.getElementsByClassName('input_name')[0];
            if(name !== undefined){
                this.input_width = 'calc(100% - ' + name.offsetWidth + 'px)'; 
            }else{
                this.input_width = '100%';
            }
            
        }
    },
    components: {

    },
};
</script>

