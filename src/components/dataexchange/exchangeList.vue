<template>
    <div class="content content_rise">
        <crumb :crumbs="crumbs"></crumb>
        <FilterForm :form='form' withExport></FilterForm>
        <ul class="exchangeList_type1">
            <li v-for="(list, index) in lists" :key="index">
                <div class="listHead">
                    <h4>{{list.name}}</h4>
                    <DataBase :data="list.dataBase"></DataBase>
                </div>
                <ul class="exchangeInfo_list" v-for="infoList in list.info" :key="infoList.id">
                    <li v-for="(info, index3) in infoList" :key="index3">
                        <span class="property">{{propertyName(index3)}}</span>
                        <span  v-if="index3!=='operation'">{{info}}</span>
                        <router-link v-else :to="info.url">{{info.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <el-pagination background layout="prev, pager, next" :total="1000" :pager-count="17"></el-pagination>
    </div>
</template>

<script>
import FilterForm from '../common/searchFilter'
import Crumb from '../common/crumb'
import DataBase from '../common/dataBase'
export default {
    props: {

    },
    data() {
        return {
            crumbs: [{
                    name:'数据服务',
                    url: '/service'
                },{
                    name:'交换情况查询',
                }],
            form: [
                {
                    line:[
                        {
                            name: '交换方向',
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
                            name: '交换工具',
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
                            name: '交换名称',
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
                },{
                    line:[
                        {
                            name: '交换状态',
                            select: [{
                                        key: 1,
                                        value:'名称登记'
                                    },{
                                        key: 2,
                                        value:'1'
                                    },{
                                        key: 3,
                                        value: '2'
                                    }],
                            model: ''
                        },
                        {
                            name: '交换数量',
                            radio: ['不为零','为零'],
                        },{
                            name: '交换时间',
                            datePicker: 'daterange',
                            model: ''
                        }
                    ]
                }
            ],
            infoLabel: {
                name: '名称',
                direct: '方向',
                tools: '工具',
                freq: '频度',
                stats: '交换状态',
                beginTime: '开始时间',
                endTime: '结束时间',
                originDB: '起始数据库',
                targetDB: '目标数据库',
                operation: '操作',
            },
            lists: [
                {
                    name: '多证合一 - 主体登记',
                    dataBase: [
                        {
                            name: '内网业务库',
                            stream: 1122,
                        },{
                            name: '政务网前置机',
                            type: 'type2'
                        }
                    ],
                    info: [
                        {
                            name: '多证合一-主体登记',
                            direct: '对外流出',
                            tools: 'DM',
                            freq: '2小时交换一次',
                            stats: '交换借宿',
                        },{
                            beginTime: '2019-1-17 13:25:38',
                            endTime: '2020-1-17 13:25:38',
                            originDB: '内网业务库',
                            targetDB: '政务网前置机',
                            operation: {
                                name: '查看详情',
                                url: '/service/exchangeList/info',
                            },
                        }
                    ]
                },{
                    name: '多证合一 - 年报信息',
                    dataBase: [
                        {
                            name: '内网业务库',
                            stream: 1122,
                        },{
                            name: '政务网前置机',
                            type: 'type2'
                        }
                    ],
                    info: [
                        {
                            name: '多证合一-年报信息',
                            direct: '对外流出',
                            tools: 'DM',
                            freq: '2小时交换一次',
                            stats: '交换借宿',
                        },{
                            beginTime: '2019-1-17 13:25:38',
                            endTime: '2020-1-17 13:25:38',
                            originDB: '内网业务库',
                            targetDB: '政务网前置机',
                            operation: {
                                name: '查看详情',
                                url: '/service/exchangeList/info',
                            },
                        }
                    ]
                },{
                    name: '多证合一 - 简易注销',
                    dataBase: [
                        {
                            name: '内网业务库',
                            stream: 1122,
                        },{
                            name: '政务网前置机',
                            type: 'type2'
                        }
                    ],
                    info: [
                        {
                            name: '多证合一-简易注销',
                            direct: '对外流出',
                            tools: 'DM',
                            freq: '2小时交换一次',
                            stats: '交换借宿',
                        },{
                            beginTime: '2019-1-17 13:25:38',
                            endTime: '2020-1-17 13:25:38',
                            originDB: '内网业务库',
                            targetDB: '政务网前置机',
                            operation: {
                                name: '查看详情',
                                url: '/service/exchangeList/info',
                            },
                        }
                    ]
                },{
                    name: '多证合一 - 经营异常',
                    dataBase: [
                        {
                            name: '内网业务库',
                            stream: 1122,
                        },{
                            name: '政务网前置机',
                            type: 'type2'
                        }
                    ],
                    info: [
                        {
                            name: '多证合一-经营异常',
                            direct: '对外流出',
                            tools: 'DM',
                            freq: '2小时交换一次',
                            stats: '交换借宿',
                        },{
                            beginTime: '2019-1-17 13:25:38',
                            endTime: '2020-1-17 13:25:38',
                            originDB: '内网业务库',
                            targetDB: '政务网前置机',
                            operation: {
                                name: '查看详情',
                                url: '/service/exchangeList/info',
                            },
                        }
                    ]
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
        propertyName(key){
            return this.infoLabel[key];
        }
    },
    components: {
        FilterForm,
        Crumb,
        DataBase
    },
};
</script>

<style lang="css" scoped>
    .dataBase_list{
        text-align: left;
    }
    .dataBase_list>>>li.dataBase{
        margin-right: 160px;
    }
    .dataBase_list>>>li.dataBase>div{
        transform: translateX(0) translateY(-50%);
        left: 100%;
        bottom: initial;
        top: 50%;
    }
    .el-pagination{
        text-align: right;
        margin-right: 10px;
    }
</style>
