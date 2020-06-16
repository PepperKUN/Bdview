<template>
    <div class="filter_form">
        <div class="search_filter">
            <table>
                <tr v-for="(line, index1) in form" :key="index1">
                    <template v-for="(item, index2) in line.line">
                        <th :key="'th_'+index2">{{item.name}}：</th>
                        <td :key="'td_'+index2">
                            <input type="text" v-if="item.input" :placeholder="item.input" v-model="item.model">
                            <el-select v-if="item.select" v-model="item.model" :placeholder="'请选择'+item.name">
                                <el-option v-for="opt in item.select" :key="opt.id" :label="opt.value" :value="opt.key">
                                </el-option>
                            </el-select>
                            <template v-if="item.radio">
                                <template v-if="typeof(item.model)==='object'">
                                    <input type="radio" :value="item.radio[0]" :id="'rd1_'+index1+'_'+index2" :name="index1+'_'+index2" v-model="item.model[0]" @change="radioChange">
                                    <label :for="'rd1_'+index1+'_'+index2">{{item.radio[0]}}</label>
                                    <input type="radio" :value="item.radio[1]" :id="'rd2_'+index1+'_'+index2" :name="index1+'_'+index2" v-model="item.model[0]" @change="radioChange">
                                    <label :for="'rd2_'+index1+'_'+index2">{{item.radio[1]}}</label>
                                    <slot name="radio_content"></slot>
                                </template>
                                <template v-else>
                                    <input type="radio" :value="item.radio[0]" :id="'rd1_'+index1+'_'+index2" :name="index1+'_'+index2" v-model="item.model">
                                    <label :for="'rd1_'+index1+'_'+index2">{{item.radio[0]}}</label>
                                    <input type="radio" :value="item.radio[1]" :id="'rd2_'+index1+'_'+index2" :name="index1+'_'+index2" v-model="item.model">
                                    <label :for="'rd2_'+index1+'_'+index2">{{item.radio[1]}}</label>
                                </template>
                            </template>
                            <el-date-picker v-if="item.datePicker" v-model="item.model" :type="item.datePicker" placeholder="选择日期"  start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                            <template v-if="item.amount">
                                <input type="number">
                                <span class="number_gap">到</span>
                                <input type="number">
                            </template>
                        </td>
                    </template>
                </tr>
            </table>
        </div>
        <div class="search_submit">
            <button class="reset" v-if="withAdd" @click="addBtn">新增</button>
            <button class="submit" @click="getFormValue" v-loading.fullscreen.lock="fullscreenLoading">查询</button>
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
        withAdd: Boolean,
        withExport: Boolean,
        addFunc: {
            type: Function,
            default: null
        }
    },
    data() {
        return {
            formVal: [],
            fullscreenLoading: false,
            radioStats: false,
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
            this.openFullScreen();
        },
        addBtn(){
            this.addFunc();
        },
        openFullScreen() {
            const loading = this.$loading({
            lock: true,
            text: '正在加载，请稍等...',
            background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                loading.close();
            }, 2000);
        },
        radioChange(){
            this.radioStats = !this.radioStats;
            this.$emit("showDate", this.radioStats)
        }
    },
    components: {

    },
};
</script>

<style scoped lang="css">

</style>
