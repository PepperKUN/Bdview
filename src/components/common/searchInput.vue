<template>
    <div class="search_wrap">
        <div class="inputFrame">
            <span class="input_name" v-if="inputName">{{inputName}}</span>
            <input type="text" :placeholder="placeholder" v-model="valueText" :style="{width:input_width}" @input="$emit('input', valueText)" @focus="resultBlur_show=true" @blur="resultBlur_show=false">
            <el-scrollbar :native="false" :noresize='false' tag='ul' wrapClass="result_suggest" v-show="resultBlur_show" :style="{width:input_width}">
                <li v-show="suggestList==undefined||valueText==''"><span>没有结果...</span></li>
                <li v-for="(li, index) in suggestList" :key="index" v-show="valueText!==''">
                    <span class="tagClass">资源项</span>
                    <span class="name">{{li.dataName}}</span>
                    <span class="tagClass tagIndex">目录</span>
                    <span class="index">{{li.dir}}</span>
                </li>
            </el-scrollbar>
        </div>
        <button @click="$emit('input', valueText)">查询</button>
    </div>
</template>

<script>
export default {
    name: 'search',
    model: {
        data: 'valueText',
        event: 'input'
    },
    props: {
        inputName: String,
        placeholder: String,
        suggestList: Array,
    },
    data() {
        return {
            input_width: '',
            valueText: '',
            resultBlur_show: false,
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

