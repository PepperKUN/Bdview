<template>
    <div class="content">
        <button @click="show=true">弹窗</button>
        <Pop v-model="show" title="title" width="930px" height="540px">
            <ul class="dataTransfer_list">
                <li v-for="li in dataTransfer_list" :key="li.id">
                    <div class="transfer_type"><span>交换类型:</span><span>{{li.type}}</span></div>
                    <div class="db_unit dbFrom">
                        <span class="dbname">{{li.from.name}}</span>
                        <span class="db_subname">{{li.from.subname}}</span>
                        <span class="db_address">{{li.from.address}}</span>
                        <span class="db_time">{{li.from.time}}</span>
                    </div>
                    <div class="transfer_stats">
                        <span>{{li.stat}}</span>
                    </div>
                    <div class="db_unit dbTo">
                        <span class="dbname">{{li.to.name}}</span>
                        <span class="db_subname">{{li.to.subname}}</span>
                        <span class="db_address">{{li.to.address}}</span>
                        <span class="db_time">{{li.to.time}}</span>
                    </div>
                </li>
            </ul>
        </Pop>
    </div>
</template>

<script>
import Pop from '../common/pop'
export default {
    props: {

    },
    data() {
        return {
            show: true,
            dataTransfer_list:[
                {
                    type: '国家总局',
                    from: {
                        name: '市监局专网',
                        subname: '业务数据库',
                        address: '172.28.129.21',
                        time: '2020-07-14 15:00:00'
                    },
                    to: {
                        name: '市监局专网',
                        subname: '业务数据库',
                        address: '172.28.129.21',
                        time: '2020-07-14 15:00:00'
                    },
                    stat: '交换成功'
                },{
                    type: '国家总局',
                    from: {
                        name: '市监局专网',
                        subname: '业务数据库',
                        address: '172.28.129.21',
                        time: '2020-07-14 15:00:00'
                    },
                    to: {
                        name: '市监局专网',
                        subname: '业务数据库',
                        address: '172.28.129.21',
                        time: '2020-07-14 15:00:00'
                    },
                    stat: '交换成功'
                },{
                    type: '国家总局',
                    from: {
                        name: '市监局专网',
                        subname: '业务数据库',
                        address: '172.28.129.21',
                        time: '2020-07-14 15:00:00'
                    },
                    to: {
                        name: '市监局专网',
                        subname: '业务数据库',
                        address: '172.28.129.21',
                        time: '2020-07-14 15:00:00'
                    },
                    stat: '交换成功'
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
        Pop
    },
};
</script>

<style lang="css" scoped>
    button{
        font-size: 16px;
        color: #fbe26f;
        padding: 6px 0;
        text-align: center;
        min-width: 100px;
        border-radius: 100px;
        background: none;
        border: 1px solid #fbe26f;
        cursor: pointer;
        margin: 0 10px;
        outline: none;
    }
</style>
