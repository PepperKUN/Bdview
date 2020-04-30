<template>
    <div class="content">
        <Crumb :crumbs="crumbs"></Crumb>
        <div class="colum">
            <DataFrame :width='1892' :height='610' frameTitle="上报总局-主体登记 <2019年-01月-16日>" rightFunc>
                <el-scrollbar :native="false" style="height: 100%">
                    <ul class="traceInfoList">
                        <li v-for="list in lists" :key="list.id">
                            <span class="time">{{list.time}}</span>
                            <span class="origin">{{list.origin}}</span>
                            <span class="tool">{{list.tool}}</span>
                            <span class="target">{{list.target}}</span>
                            <span class="log">{{list.log}}</span>
                        </li>
                    </ul>
                </el-scrollbar>
            </DataFrame>
            <DataFrame :width='1892' :height='230' rightFunc>
                <DataBase :data="dataBase" ></DataBase>
            </DataFrame>
        </div>
    </div>
</template>

<script>
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
                name:'数据交换追溯',
                url: '/service/exchangeTrace'
            },{
                name: '交换追溯详情'
            }],
            lists: [
                {
                    time: '21:33:14',
                    origin: '内网业务库',
                    tool: 'DM',
                    target: '落地库_生产同构表（HZK）',
                    log: '（增量ID抽取-主体登记）'
                },{
                    time: '21:34:23',
                    origin: '落地库_生产同构表（HZK）',
                    tool: 'DM',
                    target: '落地库_视图同构表（HZK）',
                    log: '（抽取增量数据-主体登记）'
                },{
                    time: '21:34:23',
                    origin: '落地库_视图同构表（HZK）',
                    tool: 'DM',
                    target: '国家局前置机（HZK）',
                    log: '（推送数据到前置机-主体登记）'
                },{
                    time: '21:34:23',
                    origin: '国家局前置机（HZK）',
                    tool: 'KITTLE',
                    target: '国家局汇总库（SJTBK）',
                    log: '（交换数据到汇总库-主体登记）'
                }
            ],
            dataBase: [
                {
                    name: '落地库_生产同构表',
                    stream: '2019-01-16 21:33:14',
                    subtitle: '192.29.4.14'
                },{
                    name: '落地库_视图同构表',
                    type: 'type2',
                    stream: '2019-01-16 21:33:14',
                    subtitle: '192.29.4.14'
                },{
                    name: '国家局前置机',
                    subtitle: '192.29.4.14',
                    stream: '2019-01-16 21:33:14',
                },{
                    name: '国家局前置机',
                    type: 'type2',
                    stream: '2019-01-16 21:33:14',
                    subtitle: '192.29.4.14'
                },{
                    name: '国家局前置机',
                    subtitle: '192.29.4.14',
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

    },
    components: {
        Crumb,
        DataBase
    },
};
</script>

<style lang="css" scoped>
    .breadCrumb{
        margin-bottom: 10px;
    }
    .content>>>.dataBase_list{
        margin-top: 40px;
    }
    .content>>>.dataBase_list>li.dataBase{
        margin: 0 34px;
    }
    .content>>>li.dataBase>div{
        bottom: -40px;
    }
    .content>>>.dataBase_name>span::before{
        content: '节点名称：';
    }
    .content>>>.dataBase_subtitle>span::before{
        content: '节点地址：';
    }
    .content>>>li.dataStream>span{
        background-color: initial;
        color: #fedc4b;
        line-height: 30px;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        left: 50%;
        top: 50%;
        white-space: pre;
    }
    .content>>>li.dataStream>span::before{
        content: '交换时间\A';
    }
</style>
