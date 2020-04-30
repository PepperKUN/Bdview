<template>
    <div class="content content_rise">
        <Crumb :crumbs="crumbs"></Crumb>
        <FilterForm :form='form' withExport></FilterForm>
        <ul class="traceList">
            <li v-for="list in lists" :key="list.id">
                <router-link :to="list.url">
                    <div class="title">
                        <span>{{list.title}}</span>
                    </div>
                    <DataBase :data="list.dataBase"></DataBase>
                </router-link>
            </li>
        </ul>
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
                    name:'数据交换追溯',
                }],
            form: [
                {
                    line:[
                        {
                            name: '主体名称',
                            input: '请输入名称',
                        },{
                            name: '业务类型',
                            select: [{
                                        key: 1,
                                        value:'上报总局-主体登记'
                                    },{
                                        key: 2,
                                        value:'2'
                                    },{
                                        key: 3,
                                        value: '3'
                                    }],
                            model: ''
                        },{
                            name: '交换时间',
                            datePicker: 'daterange',
                            model: ''
                        }
                    ]
                }
            ],
            lists: [
                {
                    title: '2019年01月16日上报总局-主体登记',
                    url: '/service/exchangeTrace/info',
                    dataBase: [
                        {
                            name: '内网业务库',
                            isTrace: true,
                            subtitle: '2019-01-17 13:25'
                        },{
                            name: '政务网前置机',
                            type: 'type2',
                            subtitle: '2019-01-17 13:25'
                        }
                    ]
                },{
                    title: '2019年01月16日上报总局-主体登记',
                    url: '/service/exchangeTrace/info',
                    dataBase: [
                        {
                            name: '内网业务库',
                            isTrace: false,
                            subtitle: '2019-01-17 13:25'
                        },{
                            name: '政务网前置机',
                            type: 'type2',
                            subtitle: '2019-01-17 13:25'
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

    },
    components: {
        FilterForm,
        Crumb,
        DataBase
    },
};
</script>

<style scoped lang="css">
    .content{
        overflow: initial;
    }
    
</style>
