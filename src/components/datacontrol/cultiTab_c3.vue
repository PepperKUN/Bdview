<template>
    <div class="colum">
        <div class="row">
            <DataFrame :width='472' :height='868' frameTitle="标签展示" rightFunc>
                <div class="label_wrap">
                    <div class="sub_title">{{label_data.title}}</div>
                    <ul class="label_list">
                        <li v-for="label in label_data.labels" :key="label.id" :class="label.color" :dataspan="label.span">{{label.name}}</li>
                    </ul>
                </div>
                <div class="label_wrap">
                    <div class="sub_title">{{label_data2.title}}</div>
                    <ul class="label_list">
                        <li v-for="label in label_data2.labels" :key="label.id" :class="label.color" :dataspan="label.span">{{label.name}}</li>
                    </ul>
                </div>
            </DataFrame>
            <DataFrame :width='818' :height='868' frameTitle="信息查询" rightFunc>
                <SearchInput v-model="inputText" placeholder="输入查询项"></SearchInput>
                <el-scrollbar :native="false" style="height:calc(100% - 86px)">
                    <List :data="result_lists" :listName="infoName"></List>
                </el-scrollbar>
            </DataFrame>
            <DataFrame :width='572' :height='868' frameTitle="热门标签" rightFunc>
                <ul class="top3">
                    <li v-for="(rank, index) in rank_lists.slice(0, 3)" :key="index">
                        <div class="rank_title">
                            <span class="rank_order">{{index+1}}</span>
                            <span class="rank_name">{{rank.name}}</span>
                        </div>
                        <div class="rank_value">{{rank.value}}</div>
                    </li>
                </ul>
                <ul class="rank_list">
                    <template v-for="(rank, index) in rank_lists">
                        <li  :key="index" v-if="index>2">
                            <span class="rank_order">{{index+1}}</span>
                            <span class="rank_name">{{rank.name}}</span>
                            <span class="rank_value">{{rank.value}}</span>
                        </li>
                    </template>
                </ul>
            </DataFrame>
        </div>
    </div>
</template>

<script>
import SearchInput from '../common/searchInput'
import List from '../common/modernList'
export default {
    props: {

    },
    data() {
        return {
            contentTitle: '标签应用',
            inputText: '',
            label_data: {
                title: '基本信息标签',
                labels: [
                    {
                        name: '小微企业',
                        color: 'label_yellow'
                    },{
                        name: '个体',
                        color: 'label_blue'
                    },{
                        name: '食品生产',
                        color: 'label_cyan'
                    },{
                        name: '特种设备',
                        color: 'label_purple'
                    },{
                        name: '人员',
                        color: 'label_green'
                    },{
                        name: '行政处罚',
                        color: 'label_pink'
                    },{
                        name: '餐饮流通',
                        color: 'label_cyan'
                    },{
                        name: '检验检测机构资质认定',
                        span: 2,
                        color: 'label_blue'
                    },{
                        name: '小微企业',
                        color: 'label_pink'
                    }
                ]
            },
            label_data2: {
                title: '特征标签',
                labels: [
                    {
                        name: '信用风险企业',
                        color: 'label_pink'
                    },{
                        name: '无证无照经营',
                        color: 'label_blue'
                    },{
                        name: '热门行业',
                        color: 'label_yellow'
                    },{
                        name: '年报报送异常企业',
                        span: 2,
                        color: 'label_green'
                    },{
                        name: '安全风险企业',
                        color: 'label_cyan'
                    },{
                        name: '美容美发',
                        color: 'label_purple'
                    },{
                        name: '金融服务',
                        color: 'label_yellow'
                    },{
                        name: '房地产经纪',
                        color: 'label_blue'
                    },{
                        name: '旅游服务',
                        color: 'label_cyan'
                    },{
                        name: '网络经营主体',
                        color: 'label_blue'
                    },{
                        name: '健身服务',
                        color: 'label_purple'
                    },{
                        name: '经营异常企业',
                        color: 'label_pink'
                    },{
                        name: '严重违法企业',
                        color: 'label_green'
                    },{
                        name: '四级重点税源户',
                        color: 'label_cyan'
                    },{
                        name: '中小学食堂',
                        color: 'label_blue'
                    },{
                        name: '疫苗生产企业',
                        color: 'label_cyan'
                    },{
                        name: '多次涉诉重点关注企业',
                        span: 2,
                        color: 'label_blue'
                    },{
                        name: '超期许可证',
                        color: 'label_green'
                    },{
                        name: '12315举报',
                        color: 'label_pink'
                    },{
                        name: '投诉',
                        color: 'label_purple'
                    },{
                        name: '网络案件',
                        color: 'label_blue'
                    }
                ]
            },
            infoName: {
                code: '统一信用代码',
                date: '成立时间',
                department: '登记机关'
            },
            result_lists:[
                {
                    name: '昆明帝凡美容美发有限公司',
                    type: '有限责任公司(自然人投资或控股)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '云南省丽江市丽江宾馆美容美发部',
                    type: '有限责任公司(自然人独资)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '云南省一四三队天宇美容美发中心',
                    type: '有限责任公司(自然人独资)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '云南名之成美发有限公司',
                    type: '有限责任公司(自然人投资或控股)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '昭通市拓扑美发有限公司',
                    type: '有限责任公司(自然人独资)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '云南爱美发美发有限公司',
                    type: '有限责任公司(自然人投资或控股)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '昆明帝凡美容美发有限公司',
                    type: '有限责任公司(自然人投资或控股)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '云南名之成美发有限公司',
                    type: '有限责任公司(自然人投资或控股)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '昭通市拓扑美发有限公司',
                    type: '有限责任公司(自然人独资)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '云南爱美发美发有限公司',
                    type: '有限责任公司(自然人投资或控股)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                },{
                    name: '昆明帝凡美容美发有限公司',
                    type: '有限责任公司(自然人投资或控股)',
                    info: {
                        code: '915306306908883682',
                        date: '2013-12-20',
                        department: '盘龙区市场监督管理局'
                    }
                }
            ],
            rank_lists: [
                {
                    name: '信用分享企业',
                    value: 23417,
                },{
                    name: '无证无照经营',
                    value: 23368,
                },{
                    name: '热门行业',
                    value: 23206,
                },{
                    name: '四级重点税源户',
                    value: 22124,
                },{
                    name: '超期许可证',
                    value: 21820,
                },{
                    name: '小微企业',
                    value: 21513,
                },{
                    name: '经营异常企业',
                    value: 21202,
                },{
                    name: '严重违法企业',
                    value: 20891,
                },{
                    name: '网络经营主体',
                    value: 20489,
                },{
                    name: '12315举报',
                    value: 20137,
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
        SearchInput,
        List
    },
};
</script>
<style scoped>
    .data-block>>>.search_wrap{
        margin: 20px;
    }
</style>

