<template>
    <div class="content content_rise">
        <div class="content_title"><span>{{contentTitle}}</span></div>
        <div class="company_name">
            <span>{{companyName}}</span>
                <router-link to="/showreel/searchOverall">企业相关信息</router-link>
        </div>
        <div class="row">
            <div class="sort_wrap">
                <ul class="sort">
                    <li v-for="(sort, index) in sorts" :key="index" :class="{'current':index === sortIndex}" @click="sortTimeLine(index)">{{sort}}</li>
                </ul>
            </div>
            <div class="timeLine_wrap">
                <TimeLine :data="timeLine"></TimeLine>
            </div>
        </div>
    </div>
</template>

<script>
import TimeLine from '../common/timeLine.vue'
export default {
    props: {

    },
    data() {
        return {
            contentTitle: '企业大事记',
            companyName:'云南省万通实业有限公司',
            sorts: ['所有','企业名称变更','企业股东变更','企业著名商标认定','法定代表人变更','企业住所变更','注册资金变更','企业投诉举报'],
            sortIndex: 0,
            timeLine: [
                {
                    year: 2019,
                    events: [
                        {
                            date: '2019-11-13',
                            labelColor: 'yellow',
                            des: '注册资金：<span class="num">109944.9688</span> 万元人民币变更为 <span class="num">109979.906</span> 万元人民币'
                        },{
                            date: '2019-11-13',
                            labelColor: 'cyan',
                            des: '张清担任法定代表人变更为李红维',
                        }
                    ]
                },{
                    year: 2018,
                    events: [
                        {
                            date: '2018-11-08',
                            labelColor: 'yellow',
                            des: '注册资金：<span class="num">109944.9688</span> 万元人民币变更为 <span class="num">109979.906</span> 万元人民币'
                        },
                        {
                            date: '2018-11-08',
                            labelColor: 'blue',
                            des: '注册资金：<span class="num">109944.9688</span> 万元人民币变更为 <span class="num">109979.906</span> 万元人民币'
                        }
                    ]
                },{
                    year: 2017,
                    events: [
                        {
                            date: '2019-11-13',
                            labelColor: 'pink',
                            des: '云南省万通实业有限公司被投诉举报',
                        },{
                            date: '2019-11-13',
                            labelColor: 'purple',
                            des: '云南省万通实业有限公司著名商标认定',
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
        sortTimeLine(index){
            this.sortIndex = index;
        }
    },
    components: {
        TimeLine,
    },
};
</script>

<style scoped lang="css">
    .row::before{
        position: absolute;
        display: block;
        content: '';
        width: 209px;
        height: calc(100% - 80px);
        left: 14px;
        top: 40px;
        background: rgba(117, 119, 121, 0.15);
        background: linear-gradient(80deg, rgba(0,77,180,0) 0%, rgba(0,77,180,0.3) 100%);
        border-right: 1px solid #2d5b97;
    }
</style>
