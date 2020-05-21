<template>
    <div class="content content_rise">
        <crumb :crumbs="crumbs"></crumb>
        <FilterForm :form='form'></FilterForm>
        <div class="search_result">
            <div class="result_title">
                <span>查询结果</span>
                <button class="btn_addLabel"><i class="iconfont icon-label"></i> 批量打标签</button>
                <button class="btn_removeLabel"><i class="iconfont icon-delete"></i>批量删除标签</button>
            </div>
            <table class="normal_table">
                <thead>
                    <tr>
                        <th><input type="checkbox" id="totalCheck" v-model="totalModel" @change="toggle"><label for="totalCheck"></label></th>
                        <th v-for="item in table.thead" :key="item.id">{{item}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index3) in table.tbody" :key="index3" >
                        <td><input type="checkbox" :id="'check_'+index3" v-model="item.checkModel" @change="classToggle"><label :for="'check_'+index3"></label></td>
                        <td>{{index3+1}}</td>
                        <template v-for="(object, index4) in item">
                            <td :key="index4" v-if="object !== item.operation&&object !== item.checkModel">{{object}}</td>
                        </template>
                        <td>
                            <router-link class="info" v-if="item.operation.info" to='/cataglory/dataInfo' target="_blank">查看</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-pagination background layout="prev, pager, next" :total="1000" :pager-count="17"></el-pagination>
        </div>
    </div>
</template>

<script>
import FilterForm from '../common/searchFilter'
import Crumb from '../common/crumb'
export default {
    name: 'cataTab_c3',
    props: {

    },
    data() {
        return {
            crumbs: ['数据治理','数据标签','手动打标签'],
            form: [
                {
                    line:[
                        {
                            name: '企业类型',
                            select: ['内资企业','1','2'],
                            model: ''
                        },{
                            name: '登记机关',
                            select: ['登记机关1','1','2'],
                            model: ''
                        },{
                            name: '企业名称',
                            input: '请输入企业名称',
                            model: ''
                        },{
                            name: '经验范围',
                            input: '请输入经验范围',
                            model: ''
                        }
                    ]
                },{
                    line:[
                        {
                            name: '行业门类',
                            select: ['金融业','1','2'],
                            model: ''
                        },{
                            name: '注册资金',
                            amount: '请输入注册资金',
                            model: ''
                        },{
                            name: '成立时间',
                            datePicker: 'date',
                            model: ''
                        },{
                            name: '企业状态',
                            select: ['存续','1','2'],
                            model: ''
                        }
                    ]
                }
            ],
            table:{
                thead: ['序号','资源名称','资源所属分类','是否国家局指标','数据类型','资源提供方','资源采集应用','操作'],
                tbody: [
                    {
                        name: '统一社会信用代码',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '企业名称',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '注册号',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '企业类型',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '注册资本',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '数字',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '行业们类',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '登记机关',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '变更时间',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '时间类型',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '变更前内容',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '变更后内容',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '变更后内容',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    },{
                        name: '变更后内容',
                        cataglory: '主体登记',
                        isLegal: '是',
                        type: '字符串',
                        source: '名称登记',
                        application: '内资登记',
                        operation: {
                            info: true,
                        }
                    }
                ]
            },
            totalModel: '',
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
        toggle(){
            const tr = this.$el.querySelectorAll(".normal_table tr");
            for(let i=0; i<this.table.tbody.length; i++){
                this.table.tbody[i].checkModel = this.totalModel;
                if(this.totalModel){
                    tr[i+1].classList.add("selected");
                }else{
                    tr[i+1].classList.remove("selected");
                }
            }
            
        },
        classToggle(e){
            console.log(e.path[0].checked);
            if(e.path[0].checked){
                e.path[2].classList.add("selected")
            }else{
                e.path[2].classList.remove("selected")
            }
        }
    },
    components: {
        Crumb,
        FilterForm
    },
};
</script>

<style lang="css" scoped>
    .normal_table td{
        padding: 10px;
    }
    .filter_form{
        margin: 14px 14px 0 14px;
    }
    .breadCrumb{
        margin-bottom: 6px;
    }
    .search_result{
        margin-right: 14px;
    }
</style>
