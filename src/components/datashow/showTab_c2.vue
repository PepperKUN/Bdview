<template>
    <div class="row">
        <DataFrame :width='1892' :height='165' frameTitle="市场主体概况" rightFunc>
          <DataBulbs :data='bulbs'></DataBulbs>
        </DataFrame>
        <Tab2 v-model="showTab2Index" :tabs="tabs"></Tab2>
        <div class="data_slec">
            <el-date-picker v-model="data_scal" type="daterange"></el-date-picker>
        </div>
        <div class="tab_content">
            <component :is="currentTabComponent"></component>
        </div>
    </div>
</template>

<script>
import DataBulbs from '../common/dataBulbs'
import Tab2 from '../common/tab-type2'
import secTab_1 from './secTab_1'
export default {
    props: {

    },
    data() {
        return {
            bulbs: [
                {
                    title: '市场主体总量',
                    amount: '780',
                    unit: '万户',
                    color: 'yellow'
                },{
                    title: '内资总量',
                    amount: '180',
                    unit: '万户',
                    color: 'cyan'
                },{
                    title: '外资总量',
                    amount: '2.3',
                    unit: '万户',
                    color: 'green'
                },{
                    title: '私营总量',
                    amount: '56.7',
                    unit: '万户',
                    color: 'purple'
                },{
                    title: '农专总量',
                    amount: '110.5',
                    unit: '万户',
                    color: 'pink'
                },{
                    title: '个体总量',
                    amount: '490',
                    unit: '万户',
                    color: 'blue'
                },{
                    title: '一窗通设立企业',
                    amount: '3347',
                    unit: '户',
                    color: 'yellow'
                },{
                    title: '一窗通注销企业',
                    amount: '110',
                    unit: '户',
                    color: 'cyan'
                },{
                    title: '千人企业数',
                    amount: '10',
                    unit: '户',
                    color: 'green'
                }
            ],
            showTab2Index: 0,
            tabs: ['新设企业数', '注销数', '吊销数', '存量企业数', '新设企业注册资本', '注销企业注册资本', '吊销企业注册资本'],
            formVal: [],
            data_scal: "",
        };
    },
    computed: {
        currentTabComponent: function(){
            return 'secTab_' + (this.showTab2Index + 1);
        }
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        
    },
    components: {
        DataBulbs,
        Tab2,
        secTab_1
    },
};
</script>

<style scoped lang="css">
    .bulb_list>>>li{
        width: calc((100% - 94px)/9);
    } 
    .normal_tab{
        margin: 14px;
        margin-bottom: 0;
    }
    .normal_tab>>>li{
        font-size: 16px;
    }
    .tab_content>>>.normal_table{
        margin: 0 20px;
        width: calc(100% - 40px);
        /* height: calc(100% - 52px); */
    }
    .tab_content>>>.normal_table td{
        padding: 10px 0;
    }
    .tab_content>>>.el-pagination{
        margin-top: 10px;
        margin-right: 10px;
        text-align: right;
    }

    /* 日期选择 */
    .data_slec{
        width: 264px;
        position: absolute;
        right: 14px;
        top: 188px;
    }
    .data_slec>>>.el-input__inner{
        height: 32px;
    }
    .data_slec>>>.el-date-editor .el-range__icon,.data_slec>>>.el-date-editor .el-range__close-icon{
        margin-top: -6px;
    }
    
</style>
