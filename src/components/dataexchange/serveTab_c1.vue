<template>
    <div class="row">
        <div class="colum">
            <DataFrame :width='518' :height='94' frameTitle="交换预警" rightFunc>
                <DataFlow :flowData="flow" @update-data='update' :dataGap='100'></DataFlow>
            </DataFrame><br>
            <DataFrame :width='518' :height='376' frameTitle="今日各类业务交换情况" :rightFunc="frameSet2">
                <div class="simple_wrap">
                    <table class="simple">
                        <thead>
                        <tr>
                            <th style="text-align:left;">交换名称</th>
                            <th style="text-align:right;">发送量 </th>
                            <th style="text-align:left;">/ 接收量</th>
                            <th>频率</th>
                            <th style="text-align:right">最近更新</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in table_simple" :key="item.id">
                            <td style="text-align:left; color:#fff">{{item.name}}</td>
                            <td style="text-align:right; font-weight:bold; color:#00fdeb">{{item.send}} </td>
                            <td style="text-align:left; color:#ff487f"><span style="color:#fff">/</span> {{item.receive}}</td>
                            <td>{{item.frequency}}</td>
                            <td style="text-align:right">{{item.time}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <el-pagination small background layout="prev, pager, next" :total="1000" :pager-count="13"></el-pagination>
            </DataFrame><br>
            <DataFrame :width='518' :height='370' frameTitle="今日与外部单位的数据交换总量" :rightFunc="frameSet3">
                <div class="process_wrap">
                    <span class="process_center">{{process_data.name}}</span>
                    <ul class="process_list">
                        <template v-for="(process, index) in process_data.outer" >
                            <li class="process_outer" :key="'name_'+index">{{process.name}}</li>
                            <li class="process_line" :key="'line_'+index">
                                <span class="in_data">{{process.in}}</span>
                                <span class="out_data">{{process.out}}</span>
                            </li>
                        </template>
                    </ul>
                </div>
            </DataFrame>
        </div>
        <div class="colum">
            <DataFrame :width='826' :height='868' rightFunc>
                <div class="topData_wrap">
                    <div class="topData">
                        <h2>今日交换量</h2>
                        <h4>{{todayAmount}}</h4>
                    </div>
                    <div class="health_rate">
                        <span>{{health}}</span>
                        <p>健康度</p>
                    </div>
                </div>
                <ul class="modules_name">
                    <li v-for="module in modules_name" :key="module.id">{{module}}</li>
                </ul>
                <ul class="govern_unit_name">
                    <li v-for="unit in units_name" :key="unit.id">{{unit}}</li>
                </ul>
                <lottie class="animationWrap" :options="defaultOptions" :width="818" :height="736" v-on:animCreated="handleAnimation"/>
            </DataFrame>
        </div>
        <div class="colum">
            <DataFrame :width='518' :height='312' frameTitle="今日上报总局、省政府数据分类统计" :rightFunc="frameSet4">
                <v-chart :options="pie" :autoresize='true'/>
            </DataFrame><br>
            <DataFrame :width='518' :height='286' frameTitle="今日与委办局交换数据统计" :rightFunc="frameSet">
                <span class="drop_name" slot="title_corner">下拉框:</span>
                <div class="simple_wrap">
                    <table class="simple">
                        <thead>
                        <tr>
                            <th style="text-align:left;">单位</th>
                            <th>双告知</th>
                            <th>多证合一</th>
                            <th>简易注销</th>
                            <th>一窗通</th>
                            <th>数据归集</th>
                            <th style="text-align:right">合计</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in table_simple2" :key="item.id">
                            <td style="text-align:left; color:#fff">{{item[0]}}</td>
                            <td>{{item[1]}} </td>
                            <td>{{item[2]}}</td>
                            <td>{{item[3]}}</td>
                            <td>{{item[4]}}</td>
                            <td>{{item[5]}}</td>
                            <td style="text-align:right">{{item[6]}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <el-pagination small background layout="prev, pager, next" :total="1000" :pager-count="13"></el-pagination>
            </DataFrame><br>
            <DataFrame :width='518' :height='242' frameTitle="昨日数据落地统计" rightFunc>
                <v-chart :options="bar" :autoresize='true' style="height:calc(100% - 35px)"/>
                <el-pagination small background layout="prev, pager, next" :total="1000" :pager-count="13"></el-pagination>
            </DataFrame>
        </div>
    </div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '../../assets/js/animation.json';
import DataFlow from '../common/dataFlow'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/title'

export default {
    props: {

    },
    data() {
        const pieData1 = [
            { value: 5206, name: '登记', },
            { value: 30210, name: '年报', },
            { value: 182, name: '案件', },
            { value: 29561, name: '其他', },
            { value: 477, name: '12315', }
        ]
        const pieData2 = [
            { value: 2259, name: '名称', },
            { value: 2074, name: '个体', },
            { value: 1351, name: '主体', }
        ]
        let total_datas1 = 0, 
        total_datas2 = 0;
        for (let i = 0; i < pieData1.length; i++) {
            total_datas1 += pieData1[i].value
        }
        for (let i = 0; i < pieData2.length; i++) {
            total_datas2 += pieData2[i].value
        }
        const barData = [
            ['name', 'value'],
            ['成都', 140],
            ['自贡', 32],
            ['攀枝花', 58],
            ['泸州', 64],
            ['德阳', 130],
            ['绵阳', 125],
            ['广元', 100],
            ['遂宁', 80],
            ['内江', 30],
            ['乐山', 10],
            ['南充', 70],
            ['眉山', 118],
        ]
        const rich = {
                bold: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    padding: [0, 4],
                    align: 'left',
                    lineHeight: 10,
                },
                normal: {
                    fontSize: 12,
                    align: 'left',
                    width: 50,
                    lineHeight: 10,
                },
            }
        return {
            health: 90,
            todayAmount: 386914,
            modules_name: ['名称数据交换','数据上报','省政务平台','一窗通','多证合一','联合惩戒','简易注销','双告知','数据归集','数据落地市州'],
            units_name: ['总局','市州局','委办局','银行','省政府'],
            frameSet: {
                drops: [
                    {
                        optionText: ' 月',
                        optionVal: '1',
                    },{
                        optionText: '年',
                        optionVal: '2',
                    },{
                        optionText: '日',
                        optionVal: '3',
                    }
                ]
            },
            frameSet2:{
                btnTitle: '查看更多',
                url: '/service/exchangeList',
                target: 'blank',
            },
            frameSet3:{
                btnTitle: '查看更多',
                url: '/service/exchangeTrace',
                target: 'blank',
            },
            frameSet4:{
                btnTitle: '查看更多',
                url: '/service/exchangeStatics',
                target: 'blank',
            },
            defaultOptions: {animationData: animationData.default},
            animationSpeed: 1,
            flow: [{
                isHead: true,
                custom: '<i class="iconfont icon-alarm"></i>2019-05-14 22:30:05目前为止，今日数据上报总局还未执行！'
            }],
            table_simple: [
                {
                    name: '名称数据交换',
                    send: '2000',
                    receive: '100',
                    frequency: '10分钟',
                    time: '24:00',
                },{
                    name: '数据上报',
                    send: '10.1万',
                    receive: '--',
                    frequency: '30分钟',
                    time: '24:00',
                },{
                    name: '省政务平台',
                    send: '1.2万',
                    receive: '--',
                    frequency: '4小时',
                    time: '24:00',
                },{
                    name: '一窗通',
                    send: '200',
                    receive: '90',
                    frequency: '5分钟',
                    time: '24:00',
                }
            ],
            process_data:{
                name: '数据中心',
                outer: [
                {
                    name: '总局',
                    in: 104236,
                    out: 0
                },{
                    name: '省政府',
                    in: 12287,
                    out: 0
                },{
                    name: '其他委办局',
                    in: 13376,
                    out: 0
                },{
                    name: '银行',
                    in: 0,
                    out: 0
                },{
                    name: '市州',
                    in: 521162,
                    out: 0
                },{
                    name: '法人库',
                    in: 3224,
                    out: 0
                }
                ]
            },
            pie:{
                title: [{
                    text: '上报总局总数：'+total_datas1+'条',
                    textStyle: {
                        fontSize: 16,
                        color: '#fff',
                        align: 'center',
                        width: '45%',
                    },
                    left: 20,
                    y: 10,
                },{
                    text: '上报省政府总数：'+total_datas2+'条',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        align: 'center',
                        width: '45%',
                    },
                    right: 20,
                    y: 10,
                }],
                legend: [{
                    orient: 'horizontal',
                    left: 20,
                    top: '76%',
                    width: '45%',
                    icon: 'rect',
                    itemWidth: 14,
                    itemHeight: 14,
                    itemGap: 4,
                    textStyle: {
                        color: '#a3fff7',
                        rich: rich,
                    },
                    data:['登记','年报','案件','其他','12315'],
                    formatter: function(params) {
                        let res = pieData1.filter(v => v.name === params);
                        res = res[0];
                        return '{bold|' + res.name + '}{normal|' + res.value + '条}'
                    },
                },{
                    orient: 'horizontal',
                    right: 20,
                    top: '76%',
                    width: '45%',
                    icon: 'rect',
                    itemWidth: 14,
                    itemHeight: 14,
                    textStyle: {
                        color: '#a3fff7',
                        rich: rich,
                    },
                    data:['名称','个体','主体'],
                    formatter: function(params) {
                        let res = pieData2.filter(v => v.name === params);
                        res = res[0];
                        return '{bold|' + res.name + '}{normal|' + res.value + '条}'
                    },
                }
                ],
                series: [
                    {
                        name: '各百分比1',
                        id: 1,
                        type: 'pie',
                        center: ['25%', '45%'],
                        radius: ['20%', '50%'],
                        roseType: 'radius',
                        startAngle: 90,
                        color: ['#f03877', '#5dc7bd', '#4180fa', '#fbe26f', '#8dce2e'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            },

                        },
                        data: pieData1,
                    },
                    {
                        name: '总数1',
                        type: 'pie',
                        center: ['25%', '45%'],
                        z: 4,
                        radius: ['19%', '25%'],
                        clockWise: true,
                        hoverAnimation: false,
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: '100',
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0.2)',
                            }
                        },
                    },
                    {
                        name: '各百分比2',
                        id: 2,
                        type: 'pie',
                        center: ['75%', '45%'],
                        radius: ['20%', '50%'],
                        roseType: 'radius',
                        startAngle: 90,
                        color: ['#f03877', '#fbe26f', '#5dc7bd'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            },

                        },
                        data: pieData2,
                    },
                    {
                        name: '总数2',
                        type: 'pie',
                        center: ['75%', '45%'],
                        z: 4,
                        radius: ['19%', '25%'],
                        clockWise: true,
                        hoverAnimation: false,
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: '1',
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0.2)',
                            }
                        },
                    }
                ]
            },
            table_simple2: [
                ['发改委','0','13','-','-','0','13'],
                ['公安','0','1360','-','52','0','1412'],
                ['住建','0','1360','-','-','0','1360'],
                ['税务','-','1360','0','52','0','1412'],
                ['统计','0','1360','-','-','-','1360'],
                ['其他','1445','0','-','-','0','1445'],
            ],
            bar: {
                dataset: {
                    source: barData
                },
                encode: {
                    x: 0,
                    y: 1
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: 40,
                    right: 20,
                    bottom: 30,
                    top: 40,
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#a3fff7'
                        }
                    },
                    axisLabel: {
                        color: '#a3fff7',
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '千件',
                    nameTextStyle: {
                        color: '#a3fff7'
                    },
                    splitNumber: 4,
                    axisLine: {
                        lineStyle: {
                            color: '#a3fff7'
                        }
                    },
                    axisLabel: {
                        color: '#a3fff7',
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(82, 157,255, 0.35)'
                        }
                    }
                },
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1,
                                    color: '#7a3afd' // 0% 处的颜色
                                }, {
                                    offset: 0,
                                    color: '#67b6fb' // 100% 处的颜色
                                }], false),
                            }
                        },
                        label: {
                            show: true,
                            color: '#a3fff7',
                            position: 'top'
                        }
                    }
                ]
            },
      }
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
        handleAnimation: function (anim) {
            this.anim = anim;
        },
        update(data){
            this.flow = data;
        }
    },
    components: {
        Lottie,
        DataFlow
    },
};
</script>

<style scoped lang="css">
    .health_rate{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        margin: 0;
    }
    .flow_wrap{
        margin: 10px;
        height: calc(100% - 20px);
        background-color: rgba(255, 0, 64, 0.281);
    }
    .flow_wrap>>>.flow_name{
        padding: 0;
    }
    .flow_wrap>>>.flow_custom{
        color: #ffc6d1;
    }
    .flow_wrap>>>.icon-alarm{
        color: #fc3358;
        margin-right: 20px;
    }
    .flow_wrap::before, .flow_wrap::after{
        background: linear-gradient(80deg, rgba(0,14,45,1) 0%, rgba(0,14,45,0) 100%);
        width: 100px;
        z-index: 2;
    }
    .simple_wrap{
        height: calc(100% - 45px);
    }
</style>
