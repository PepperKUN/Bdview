<template>
    <div class="content content_rise">
        <crumb :crumbs="crumbs"></crumb>
        <FilterForm :form='form' withAdd :addFunc="portAdd"></FilterForm>
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
                        <td style="width:240px">
                            <a class="table_operation" href="#" @click="modifyShow=true"><i class="iconfont icon-modify"></i><span>修改</span></a>
                            <a class="table_operation delete" href="#"><i class="iconfont icon-delete"></i><span>删除</span></a>
                            <a class="table_operation portInfo" href="#" @click="infoShow=true"><i class="iconfont icon-info"></i><span>详情</span></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-pagination background layout="total, prev, pager, next" :total="1000" :pager-count="17"></el-pagination>
        </div>
        <Pop v-model="addShow" title="接口新增" width="600px" height="600px">
            <el-scrollbar :native="false" style="height:100%">
                <table class="singleColumForm">
                    <colgroup>
                        <col width="100">
                        <col>
                    </colgroup>
                    <tr v-for="line in addForm" :key="line.id">
                        <th>{{line.name}}</th>
                        <td>
                            <select v-if="line.select">
                                <option value="">请选择{{line.name}}</option>
                                <option v-for="option in line.select" :key="option.id" value="option.value">{{option.text}}</option>
                            </select>
                            <input type="text" :placeholder="'请输入'+line.name" v-if="line.input!==undefined" :value="line.input">
                            <textarea rows="5" :placeholder="'请输入'+line.name" v-if="line.textarea!==undefined" :value="line.textarea"></textarea>
                            <el-date-picker v-if="line.datePicker" v-model="line.model" :type="line.datePicker" placeholder="选择日期"></el-date-picker>
                        </td>
                    </tr>
                </table>
                <div class="search_submit">
                    <button class="submit">保存</button>
                    <button class="reset">取消</button>
                </div>
            </el-scrollbar>
        </Pop>
        <Pop v-model="modifyShow" title="接口修改" width="600px" height="600px">
            <el-scrollbar :native="false" style="height:100%">
                <table class="singleColumForm">
                    <colgroup>
                        <col width="100">
                        <col>
                    </colgroup>
                    <tr v-for="line in addForm" :key="line.id">
                        <th>{{line.name}}</th>
                        <td>
                            <select v-if="line.select">
                                <option value="">请选择{{line.name}}</option>
                                <option v-for="option in line.select" :key="option.id" value="option.value">{{option.text}}</option>
                            </select>
                            <input type="text" :placeholder="'请输入'+line.name" v-if="line.input!==undefined" :value="line.input">
                            <textarea rows="5" :placeholder="'请输入'+line.name" v-if="line.textarea!==undefined" :value="line.textarea"></textarea>
                            <el-date-picker v-if="line.datePicker" v-model="line.model" :type="line.datePicker" placeholder="选择日期"></el-date-picker>
                        </td>
                    </tr>
                </table>
                <div class="search_submit">
                    <button class="submit">保存</button>
                    <button class="reset">取消</button>
                </div>
            </el-scrollbar>
        </Pop>
        <Pop v-model="infoShow" title="接口详情" width="600px" height="600px">
            <el-scrollbar :native="false" style="height:100%">
                <table class="singleColumForm">
                    <colgroup>
                        <col width="100">
                        <col>
                    </colgroup>
                    <tr v-for="line in infoForm" :key="line.id">
                        <th>{{line.name}}</th>
                        <td>{{line.value}}</td>
                    </tr>
                </table>
                <div class="search_submit">
                    <button class="submit">保存</button>
                    <button class="reset">取消</button>
                </div>
            </el-scrollbar>
        </Pop>
    </div>
</template>

<script>
import FilterForm from '../common/searchFilter'
import Pop from '../common/pop'
import Crumb from '../common/crumb'
export default {
    props: {

    },
    data() {
        return {
            crumbs: ['数据服务','接口服务监控','接口查询'],
            form: [
                {
                    line:[
                        {
                            name: '资源名称',
                            input: '请输入名称',
                            model: ''
                        },{
                            name: '数据类型',
                            select: [{
                                        key: 1,
                                        value:'字符串'
                                    },{
                                        key: 2,
                                        value:'1'
                                    },{
                                        key: 3,
                                        value: '2'
                                    }],
                            model: ''
                        },{
                            name: '资源提供方',
                            datePicker: 'date',
                            model: ''
                        },{
                            name: '数据类型',
                            select: [{
                                        key: 1,
                                        value:'字符串'
                                    },{
                                        key: 2,
                                        value:'1'
                                    },{
                                        key: 3,
                                        value: '2'
                                    }],
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
            addShow: false,
            modifyShow: false,
            infoShow: false,
            addForm: [
                {
                    name: '业务类型',
                    select: [
                        {
                            text: '登记',
                            value: 1,
                        },{
                            text: '许可',
                            value: 2,
                        },{
                            text: '政务',
                            value: 3,
                        }
                    ]
                },{
                    name: '业务系统',
                    select: [
                        {
                            text: '名称登记',
                            value: 1,
                        },{
                            text: '企业登记',
                            value: 2,
                        }
                    ]
                },{
                    name: '接口编号',
                    input: ''
                },{
                    name: '接口编号',
                    input: ''
                },{
                    name: '接口编号',
                    datePicker: 'date'
                },{
                    name: '接口编号',
                    textarea: ''
                }
            ],
            infoForm: [
                {
                    name: '业务类型',
                    value: '登记'
                },{
                    name: '业务类型',
                    value: '登记'
                },{
                    name: '业务类型',
                    value: '登记'
                },{
                    name: '业务类型',
                    value: '登记'
                },{
                    name: '业务类型',
                    value: '登记'
                }
            ]
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
        portAdd(){
            this.addShow=true;
        }
    },
    components: {
        FilterForm,
        Crumb,
        Pop
    },
};
</script>

<style scoped lang="css">
    .normal_table td{
        padding: 10px 0;
    }
</style>
