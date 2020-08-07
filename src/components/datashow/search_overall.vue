<template>
    <div class="content content_rise">
        <div class="content_title"><span>{{contentTitle}}</span></div>
        <div class="colum">
            <div class="company_name">
                <span>{{companyName}}</span>
                 <router-link to="/showreel/memorabilia">企业大事记</router-link>
            </div>
            <div class="company_info_table">
                <div class="table_wrap">
                    <table class="open_table">
                        <tbody>
                            <template v-for="(line, index) in table">
                                <tr :key="'title_'+index">
                                    <th v-for="(item, index2) in line" :key="'th_'+index2" :colspan="item.colspan">{{item.th}}</th>
                                </tr>
                                <tr :key="'info_'+index">
                                    <td v-for="(item, index2) in line" :key="'td_'+index2" :colspan="item.colspan">{{item.td}}</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="drawer">
                    <span @click="tableToggle">
                        <i class="iconfont" :class="[infoToggle?'icon-up':'icon-down']"></i>
                         {{infoToggle?'收起':'展开'}}企业相关信息
                    </span>
                </div>
            </div>
            <div class="row flag_wrap">
                <DataFlag flag='历次变更' :width="flagWidth" color='yellow2' icon="icon-change">
                    <ul class="info_list">
                        <li v-for="list in lists1" :key="list.id">
                            <router-link :to="list.url?list.url:'###'" :class="list.url?'':'disabled'">
                                <span class="name">{{list.name?list.name:list}}</span>
                                <span class="num" v-if="list.amount">{{list.amount}}条</span>
                            </router-link>
                        </li>
                    </ul>
                </DataFlag>
                <DataFlag flag='资质信息' :width="flagWidth" color='cyan2' icon="icon-bh">
                    <ul class="info_list">
                        <li v-for="list in lists2" :key="list.id">
                            <router-link :to="list.url?list.url:'###'" :class="list.url?'':'disabled'">
                                <span class="name">{{list.name?list.name:list}}</span>
                                <span class="num" v-if="list.amount">{{list.amount}}条</span>
                            </router-link>
                        </li>
                    </ul>
                </DataFlag>
                <DataFlag flag='信用状态' :width="flagWidth" color='orange' icon="icon-xinyong">
                    <ul class="info_list">
                        <li v-for="list in lists3" :key="list.id">
                            <router-link :to="list.url?list.url:'###'" :class="list.url?'':'disabled'">
                                <span class="name">{{list.name?list.name:list}}</span>
                                <span class="num" v-if="list.amount">{{list.amount}}条</span>
                            </router-link>
                        </li>
                    </ul>
                </DataFlag>
                <DataFlag flag='相关信息' :width="flagWidth" color='blue2' icon="icon-xiaoxi">
                    <ul class="info_list">
                        <li v-for="list in lists4" :key="list.id">
                            <router-link :to="list.url?list.url:'###'" :class="list.url?'':'disabled'">
                                <span class="name">{{list.name?list.name:list}}</span>
                                <span class="num" v-if="list.amount">{{list.amount}}条</span>
                            </router-link>
                        </li>
                    </ul>
                </DataFlag>
                <DataFlag flag='自主公示信息' :width="flagWidth" color='purple2' icon="icon-gongshi">
                    <ul class="info_list">
                        <li v-for="list in lists5" :key="list.id">
                            <router-link :to="list.url?list.url:'###'" :class="list.url?'':'disabled'">
                                <span class="name">{{list.name?list.name:list}}</span>
                                <span class="num" v-if="list.amount">{{list.amount}}条</span>
                            </router-link>
                        </li>
                    </ul>
                </DataFlag>
            </div>
        </div>
    </div>
</template>

<script>
import DataFlag from '../common/dataFlag'
export default {
    props: {

    },
    data() {
        return {
            contentTitle: '一门式查询结果',
            companyName: '云南省万通实业有限公司',
            infoToggle: true,
            table: [
                [
                    {
                        th: '统一社会信用代码',
                        td: '91310000132653687M'
                    },{
                        th: '企业类型（国家局）',
                        td: '其他股份有限公司'
                    },{
                        th: '行业类别',
                        td: '软件开发（6150）'
                    },{
                        th: '经营期限',
                        td: '1995-11-09 ~ 不约定期限'
                    },{
                        th: '企业状态',
                        td: '存在状态--有效（确立）'
                    },{
                        th: '企业状态（国家局）',
                        td: '在营（开业）企业'
                    },{
                        th: '成立日期',
                        td: '1995-11-09'
                    }
                ],[
                    {
                        th: '联系电话',
                        td: '64950118-1112'
                    },{
                        th: '受理机关',
                        td: '云南省市场监督管理局'
                    },{
                        th: '注册资本',
                        td: '109979.906000万元'
                    },{
                        th: '法定代表人姓名',
                        td: '胡宏伟'
                    },{
                        th: '实收资本',
                        td: '24000.00000万元'
                    },{
                        th: '住所/地址',
                        td: '昆明市富民县永定镇文化路17号',
                        colspan: 2
                    }
                ],[
                    {
                        th: '经营范围',
                        td: '房地产开发经营、房屋建筑工程施工(按资质证核定的范围和时限开展经营活动);百货、建筑材料购销(依法须经批准的项目,经相关部门批准后方可开展经营活动)',
                        colspan: 7
                    }
                ]
            ],
            flagWidth: 'calc((100% - 28px - 240px)/5)',
            uniformUrl: '###',
            lists1: [
                {name:'变更股东',amount:12,url:'/cataglory/dataInfo'},
                '变更法人',
                {name:'变更名称',amount:20, url:'/cataglory/dataInfo'},
                '变更备案信息'
            ],
            lists2: [
                {name:'食品许可',amount:12, url:'/cataglory/dataInfo'},
                '特种设备许可'
            ],
            lists3: [
                {name:'行政处罚',amount:1, url:'/cataglory/dataInfo'},
                '其他部门处罚',
                {name:'股权冻结',amount:4, url:'/cataglory/dataInfo'},
                {name:'老赖名单',amount:3, url:'/cataglory/dataInfo'},
                {name:'抽查情况',amount:1, url:'/cataglory/dataInfo'},
                '投诉举报信息',
                '守重信息',
                {name:'经营异常信息',amount:1, url:'/cataglory/dataInfo'},
                '严重违法信息'
            ],
            lists4: [
                '商标信息',
                '网点信息',
                '合同备案信息',
                '抽检商品信息'
            ],
            lists5: [
                {name:'年报信息',amount:1, url:'/cataglory/dataInfo'},
                '处罚信息'
            ]
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.tableToggle();
    },
    watch: {

    },
    methods: {
        tableToggle(){
            const wrap = document.getElementsByClassName('company_info_table')[0];
            const h = wrap.getElementsByTagName('table')[0].offsetHeight;
            if(this.infoToggle){
                wrap.style.height = 20 + 'px';
            }else{
                wrap.style.height = 40 + h +'px';
            }
            this.infoToggle = !this.infoToggle;
        }
    },
    components: {
        DataFlag
    },
};
</script>

<style scoped lang="css">
    .colum .flag_wrap{
        margin-top: 60px;
        overflow: hidden;
    }
    .flag_wrap>.flag{
        margin: 0 30px;
    }
    .flag_wrap>.flag:first-child{
        margin-left: 14px;
    }
    .flag_wrap>.flag:last-child{
        margin-right: 14px;
    }
</style>
