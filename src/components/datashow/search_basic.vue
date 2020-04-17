<template>
    <div class="content">
        <div class="breadCrumb">
            <span class="crumb_head">当前层级：</span>
            <template v-for="(crumb, index) in crumbs">
                <a href="###" class="crumb_item" :key="'item_'+index">{{crumb}}</a>
                <span class="crumb_gap" :key="'gap_'+index" v-if="crumbs[index+1]">></span>
            </template>
        </div>
        <FilterForm :form='form' withExport></FilterForm>
        <div class="normal_result">
            <div class="result_title">
                <span>查询结果</span>
            </div>
            <table class="normal_table">
                <thead>
                    <tr>
                        <th v-for="item in table.thead" :key="item.id">{{item}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index3) in table.tbody" :key="index3">
                        <td>{{index3+1}}</td>
                        <template v-for="(object, index4) in item">
                            <td :key="index4" v-if="object !== item.operation">{{object}}</td>
                        </template>
                        <td>
                            <router-link class="info" v-if="item.operation.info" to='/cataglory/dataInfo' target="_blank">详情</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-pagination background layout="total, prev, pager, next" :total="1000" :pager-count="17"></el-pagination>
        </div>
    </div>
</template>

<script>
import FilterForm from '../common/searchFilter'

export default {
    props: {

    },
    data() {
        return {
            crumbs: ['数据展示','基本查询'],
            form: [
                {
                    line:[
                        {
                            name: '资源名称',
                            input: '请输入名称',
                            model: ''
                        },{
                            name: '数据类型',
                            select: ['字符串','1','2'],
                            model: ''
                        },{
                            name: '资源提供方',
                            datePicker: 'date',
                            model: ''
                        }
                    ]
                },{
                    line:[
                        {
                            name: '是否国家局指标',
                            radio: ['是','否'],
                        },{
                            name: '资源所属分类',
                            datePicker: 'daterange',
                            model: ''
                        },{
                            name: '资源采集应用',
                            select: ['名称登记','1','2'],
                            model: ''
                        }
                    ]
                },{
                    line:[
                        {
                            name: '是否涉密',
                            radio: ['是','否'],
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
            }
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

    },
    components: {
        FilterForm,
    },
};
</script>

<style scoped lang="css">
    .normal_table td{
        padding: 10px 0;
    }
</style>
