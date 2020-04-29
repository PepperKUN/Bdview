<template>
    <div class="content content_rise">
        <crumb :crumbs="crumbs"></crumb>
        <TableInfo :data="table"></TableInfo>
        <div class="row">
          <DataFrame :width='1892' :height='730' frameTitle="批次节点详情" rightFunc>
              <template v-slot:title_corner>
                    <div class="checkGroup">
                        <input type="checkbox" id="showIcon" value="showIcon" v-model="checks">
                        <label for="showIcon">图标</label>
                        <input type="checkbox" id="showList" value="showList" v-model="checks">
                        <label for="showList">列表</label>
                    </div>
                </template>
                <DataBase :data="dataBase" v-show="checkDetect(checks, 'showIcon')"></DataBase>
                <el-scrollbar :native="false" style="height:calc(100% - 140px)">
                    <ul class="result_list">
                        <li v-for="list in result_lists" :key="list.id">
                            <div class="corp_name">
                                <span>{{list.name}}</span><span class="corp_type">{{list.type}}</span>
                            </div>
                            <div class="info">
                                <span class="code">{{list.info.code}}</span>
                                <span class="date">{{list.info.date}}</span>
                                <span class="department">{{list.info.department}}</span>
                            </div>
                        </li>
                    </ul>
                </el-scrollbar>
          </DataFrame>
      </div>
    </div>
</template>

<script>
import Crumb from '../common/crumb'
import TableInfo from '../common/table_info'
import DataBase from '../common/dataBase'
export default {
    name: 'ExchangeList_info',
    props: {

    },
    data() {
        return {
            crumbs: [{
                    name:'数据服务',
                    url: '/service'
                },{
                    name:'交换情况查询',
                    url: '/service/exchangeList'
                },{
                    name:'批次信息详情',
                }],
            table: [
                [
                    {
                        th: '交换名称',
                        td: '多证合一 - 主体登记'
                    },{
                        th: '交换库',
                        td: '内网业务库（192.29.4.12）'
                    },{
                        th: '批次交换数量',
                        td: '1122'
                    },{
                        th: '交换方式',
                        td: 'DM'
                    }
                ],[
                    {
                        th: '业务分类',
                        td: '多证合一'
                    },{
                        th: '目标库',
                        td: '政务网前置机（192.29.7.30）'
                    },{
                        th: '交换结束时间',
                        td: '2019-01-17 13:32:30'
                    },{
                        th: '交换状态',
                        td: '交换结束'
                    }
                ]
            ],
            checks: ['showIcon','showList'],
            dataBase: [
                {
                    name: '内网业务库',
                    stream: 1122,
                    time: '2019-01-17 13:25'
                },{
                    name: '政务网前置机',
                    type: 'type2',
                    stream: 34211,
                    time: '2019-01-17 13:25'
                },{
                    name: '内网业务库',
                    time: '2019-01-17 13:25'
                }
            ],
            result_lists:[
                {
                    name: '节点：增量ID抽取',
                    type: '交换无异常',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                }
            ],
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
        checkDetect(array, value){
            return array.includes(value);
        }
    },
    components: {
        Crumb,
        TableInfo,
        DataBase
    },
};
</script>

<style lang="css" scoped>
    .dataBase_list>li.dataBase{
        margin-right: 160px;
    }
    .dataBase_list>>>span.dataBase_name>span::before{
        content: '节点名称：';
    }
    .dataBase_list>>>span.dataBase_time>span::before{
        content: '交换时间：';
    }
    .el-pagination{
        text-align: right;
        margin-right: 10px;
    }
    .el-scrollbar{
        margin-top: 34px;
    }
</style>
