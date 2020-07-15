<template>
    <div class="content content_rise">
        <crumb :crumbs="crumbs"></crumb>
        <div class="simple_search_wrap">
            <searchInput v-model="inputText" placeholder="请输入统一码或主体名称或设备编号或许可证编号查询"/>
        </div>
        <ul class="holder_list">
            <li v-for="list in holder_list" :key="list.id">
                <i class="iconfont" :class="list.icon"></i>
                <span class="list_name">{{list.name}}</span>
                <span class="list_des">{{list.des}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Crumb from '../common/crumb'
import searchInput from '../common/searchInput'
export default {
    props: {

    },
    data() {
        return {
            crumbs: ['数据展示','基本查询','企业全景查询'],
            inputText: '',
            holder_list: [
                {
                    name: '登记信息',
                    icon: 'icon-change',
                    des: '登记信息模块可查看企业的股东信息、分支机构信息、认缴实缴信息、主要成员信息以及变更信息等'
                },{
                    name: '资质信息',
                    icon: 'icon-bh',
                    des: '登记信息模块可查看企业的股东信息、分支机构信息、认缴实缴信息、主要成员信息以及变更信息等'
                },{
                    name: '信用状态',
                    icon: 'icon-xinyong',
                    des: '登记信息模块可查看企业的股东信息、分支机构信息、认缴实缴信息、主要成员信息以及变更信息等'
                },{
                    name: '相关信息',
                    icon: 'icon-xiaoxi',
                    des: '登记信息模块可查看企业的股东信息、分支机构信息、认缴实缴信息、主要成员信息以及变更信息等'
                },{
                    name: '自主公示信息',
                    icon: 'icon-gongshi',
                    des: '登记信息模块可查看企业的股东信息、分支机构信息、认缴实缴信息、主要成员信息以及变更信息等'
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

    },
    components: {
        Crumb,
        searchInput
    },
};
</script>

<style lang="css">

</style>
