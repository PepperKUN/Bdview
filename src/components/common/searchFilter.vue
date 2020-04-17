<template>
    <div class="filter_form">
        <div class="search_filter">
            <table>
                <tr v-for="(line, index1) in form" :key="index1">
                    <template v-for="(item, index2) in line.line">
                        <th :key="'th_'+index2">{{item.name}}：</th>
                        <td :key="'td_'+index2">
                            <input type="text" v-if="item.input" :placeholder="item.input" v-model="item.model">
                            <select v-if="item.select" v-model="item.model">
                                <option value="">请选择{{item.name}}</option>
                                <option v-for="opt in item.select" :key="opt.id" :value="opt">{{opt}}</option>
                            </select>
                            <template v-if="item.radio">
                                <input type="radio" :value="item.radio[0]" :id="'rd1_'+index1+'_'+index2" :name="index1+'_'+index2" v-model="item.model">
                                <label :for="'rd1_'+index1+'_'+index2">{{item.radio[0]}}</label>
                                <input type="radio" :value="item.radio[1]" :id="'rd2_'+index1+'_'+index2" :name="index1+'_'+index2" v-model="item.model">
                                <label :for="'rd2_'+index1+'_'+index2">{{item.radio[1]}}</label>
                            </template>
                        </td>
                    </template>
                </tr>
            </table>
        </div>
        <div class="search_submit">
            <button class="submit" @click="getFormValue">查询</button>
            <button class="reset" v-if="withReset">重置</button>
            <button class="reset" v-if="withExport">导出</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterForm',
    props: {
        form: Array,
        withReset: Boolean,
        withExport: Boolean,
    },
    data() {
        return {
            formVal: []
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        
        
    },
    watch: {

    },
    methods: {
        getFormValue(){
            this.formVal=[];
            for(let i=0; i<this.form.length; i++){
                for(let j=0; j<this.form[i].line.length; j++){
                    let item = this.form[i].line[j].model;
                    this.formVal.push(item);
                }
            }
            console.log(this.formVal);
        }
    },
    components: {

    },
};
</script>

<style scoped lang="css">

</style>
