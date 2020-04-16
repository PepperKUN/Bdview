<template>
    <div class="colum">
        <div class="row">
            <DataFrame :width='1892' :height='165' frameTitle="总体概况" rightFunc>
                <div class="bulbs_wrap part1">
                    <div class="health_rate">
                        <span>{{health}}</span>
                        <p>健康度</p>
                    </div>
                    <DataBulbs class="bulb_narrow" :data='bulbs1'></DataBulbs>
                </div>
                <div class="bulbs_wrap part2">
                    <DataBulbs :data='bulbs1'></DataBulbs>
                </div>
                <div class="bulbs_wrap part3">
                    <DataBulbs :data='bulbs3'></DataBulbs>
                </div>
            </DataFrame>
        </div>
        <div class="row">
            <DataFrame :width='658' :height='330' frameTitle="数据生命周期管理" rightFunc>
                
                <table class="normal_table lifeCycle">
                    <thead>
                        <tr>
                            <th v-for="item in table1.thead" :key="item.id">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index3) in table1.tbody" :key="index3" :class="item.color">
                            <td v-for="(object, index4) in item.td" :key="index4">{{object}}</td>
                        </tr>
                    </tbody>
                </table>
            </DataFrame>
            <DataFrame :width='686' :height='330' frameTitle="数据字量检查" rightFunc>
                <table class="normal_table amountCheck">
                    <thead>
                        <tr>
                            <th v-for="item in table2.thead" :key="item.id">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index3) in table2.tbody" :key="index3" :class="item.color">
                            <td v-for="(object, index4) in item.td" :key="index4">{{object}}</td>
                        </tr>
                    </tbody>
                </table>
            </DataFrame>
            <DataFrame :width='520' :height='330' frameTitle="数据标签" :rightFunc="frameSet1">
                <div class="worldcloud"></div>
            </DataFrame>
        </div>
        <div class="row">
            <DataFrame :width='658' :height='346' frameTitle="质量问题分类" :rightFunc="frameSet2">
                <v-chart :options="pie" :autoresize='true'/>
            </DataFrame>
            <DataFrame :width='586' :height='346' frameTitle="问题数据趋势" rightFunc>
                <v-chart :options="line" :autoresize='true'/>
            </DataFrame>
            <DataFrame :width='620' :height='346' frameTitle="数据资源存储质量情况 " :rightFunc="frameSet1">
                <div class="storage_wrap">
                    <div class="total">
                        <span class="storage_name">合计</span>
                        <span class="storage_space">{{storage.total}}</span>
                        <span class="storage_percent">{{storage.percent}}</span>
                        <div class="percent_wrap">
                            <i class="percent_bar" :style="{width: storage.percent}"></i>
                        </div>
                    </div>
                    <ul class="storage_children">
                        <li v-for="item in storage.children" :key="item.id">
                            <span class="storage_name">{{item.name}}</span>
                            <span class="storage_space">{{item.space}}</span>
                            <span class="storage_percent">{{item.percent}}</span>
                            <div class="percent_wrap">
                                <i class="percent_bar" :style="{width: item.percent}"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </DataFrame>
        </div>
    </div>
</template>

<script>
import dataBulbs from '../common/dataBulbs'
import echarts from 'echarts/lib/echarts'
import "echarts-wordcloud"
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

export default {
    props: {

    },
    data() {
        const color_percent0 = '#4cc9c1';
        const color_percent100 = '#082241';
        ////////下面的_1是总数 _1_s是解决数   _2 _3同理
        //1是数据传输质量问题
        const storagePercent_1 = 15;
        const storagePercent_1_s = 12;
        //2是数据共享应用质量问题
        const storagePercent_2 = 2;
        const storagePercent_2_s = 2;
        //3是数据储存质量问题
        const storagePercent_3 = 19;
        const storagePercent_3_s = 11;
        return {
            health: 90,
            frameSet1: {
                date: '（11月28日更新）',
            },
            frameSet2: {
                btnTitle: '工单处理',
                url: '/cultivation/label',
            },
            bulbs1: [
                {
                    title: '累计处理数据',
                    amount: '13.2',
                    unit: '亿条',
                    color: 'yellow'
                },{
                    title: '发现数据处理\n质量问题',
                    amount: '1321',
                    unit: '件',
                    color: 'cyan'
                },{
                    title: '今日数据处理\n质量问题',
                    amount: '14',
                    unit: '个',
                    color: 'green'
                },{
                    title: '今日数据处理\n质量工单处理率',
                    amount: '100',
                    unit: '%',
                    color: 'purple'
                }
            ],
            bulbs3: [
                {
                    title: '标签总计',
                    amount: '28',
                    unit: '个',
                    color: 'pink'
                },{
                    title: '本月新增标签',
                    amount: '1',
                    unit: '个',
                    color: 'pink'
                }
            ],
            table1:{
                thead: ['业务类型','源头','目的','数据条数','时间'],
                tbody: [
                    {
                        color: 'tr_red',
                        td: ['数据汇聚','特种设备库','数据中心近源层','123','02-14 14:12:45']
                    },{
                        td: ['数据共享', '数据中心库', '省政务一体化', '4512', '02-14 14:12:45']
                    },{
                        td: ['数据共享', '数据中心库', '法人库', '2324', '02-14 14:12:45']
                    },{
                        td: ['数据共享', '数据中心库', '国家总局', '12321', '02-14 14:12:45']
                    },{
                        color: 'tr_red',
                        td: ['数据共享', '数据中心库', '市州', '5642', '02-14 14:12:45']
                    },{
                        td: ['数据共享', '数据中心库', '税务局', '231', '02-14 14:12:45']
                    },{
                        td: ['数据共享', '数据中心库', '中国银行', '321', '02-14 14:12:45']
                    },{
                        td: ['数据汇聚', '市监登记系统', '数据中心近源层', '54125', '02-14 14:12:45']
                    }
                ]
            },
            table2:{
                thead: ['业务类型','源头','目的','数据条数','时间'],
                tbody: [
                    {
                        color: 'tr_cyan',
                        td: ['数据汇聚','特种设备库','数据中心近源层','123','02-14 14:12:45']
                    },{
                        td: ['数据共享', '数据中心库', '省政务一体化', '4512', '02-14 14:12:45']
                    },{
                        td: ['数据共享', '数据中心库', '法人库', '2324', '02-14 14:12:45']
                    },{
                        color: 'tr_cyan',
                        td: ['数据共享', '数据中心库', '国家总局', '12321', '02-14 14:12:45']
                    },{
                        color: 'tr_cyan',
                        td: ['数据共享', '数据中心库', '市州', '5642', '02-14 14:12:45']
                    },{
                        color: 'tr_cyan',
                        td: ['数据共享', '数据中心库', '税务局', '231', '02-14 14:12:45']
                    },{
                        td: ['数据共享', '数据中心库', '中国银行', '321', '02-14 14:12:45']
                    },{
                        td: ['数据汇聚', '市监登记系统', '数据中心近源层', '54125', '02-14 14:12:45']
                    }
                ]
            },
            pie: {
                legend: {
                    show: false,
                },
                grid: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                },

                tooltip: {
                    show: false,
                },
                series: [
                    //////////////1.数据传输质量问题
                    { //比例
                        type: 'pie',
                        radius: ['42%', '55%'],
                        center: ['18%', '65%'],
                        startAngle: 225,
                        hoverAnimation: false,
                        avoidLabelOverlap: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        color: [{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0.6,
                                    color: color_percent0,
                                }, {
                                    offset: 1,
                                    color: color_percent100,
                                }, ],
                            },
                            'none',
                        ],
                        data: [{
                            value: 75,
                            name: '',
                        }, {
                            value: 25,
                            name: '',
                        }, ],


                    }, { //中间线
                        name: '',
                        type: 'pie',
                        radius: ['40%', '41%'],
                        center: ['18%', '65%'],
                        startAngle: 225,
                        hoverAnimation: false,
                        legendHoverLink: false,
                        color: [{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: color_percent0,
                                }, {
                                    offset: 1,
                                    color: color_percent100,
                                }, ],
                            },
                            'none',
                        ],
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [{
                            value: 75,
                            name: '',
                        }, {
                            value: 25,
                            name: '',
                        }, ],

                    }, { //顶部数值
                        name: '',
                        type: 'pie',
                        radius: ['0', '0'],
                        center: ['18%', '22%'],
                        hoverAnimation: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [{
                            value: 75,
                            name: '',
                            label: {
                                formatter: '{a|数据传输质量问题}\n' + (storagePercent_1_s).toFixed(0) + '{a| 个}',
                                position: 'center',
                                show: true,
                                color: '#fff',
                                fontSize: 26,
                                fontWeight: 600,
                                rich: {
                                    a: {
                                        color: '#96c5ff',
                                        fontSize: 18,
                                        lineHeight: 32
                                    },
                                },
                            },
                        }],

                    }, { //指针
                        name: '',
                        type: 'pie',
                        radius: ['42%', '55%'],
                        center: ['18%', '65%'],
                        startAngle: 315,
                        hoverAnimation: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        clockwise: false,
                        z: 2,
                        data: [{
                            name: '',
                            value: ((100 - ([storagePercent_1_s] / [storagePercent_1]) * 100) * 270) / 360,
                            label: {
                                formatter: '{a|解决率}\n' + ([storagePercent_1_s * 100] / [storagePercent_1]).toFixed(0) + '%',
                                position: 'center',
                                show: true,
                                color: '#fff',
                                fontSize: 30,
                                fontWeight: 600,
                                rich: {
                                    a: {
                                        color: '#4dcbc3',
                                        fontSize: 16,
                                        lineHeight: 32
                                    },
                                },
                            },
                            itemStyle: {
                                color: 'rgba(34, 34, 34, .9)',
                            },

                        }, {
                            value: 1,
                            name: '',
                            itemStyle: {
                                color: '#00feee',
                                borderColor: '#00feee',
                                borderWidth: 1,
                            },
                        }, {
                            name: '',
                            value: 100 - ((100 - ([storagePercent_1_s] / [storagePercent_1]) * 100) * 270) / 360,
                            itemStyle: {
                                color: 'transparent',
                            },
                        }, ],
                    },




                    //////////////2.数据共享应用质量问题
                    { //比例
                        type: 'pie',
                        radius: ['42%', '55%'],
                        center: ['50%', '65%'],
                        startAngle: 225,
                        hoverAnimation: false,
                        avoidLabelOverlap: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        color: [{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0.6,
                                    color: color_percent0,
                                }, {
                                    offset: 1,
                                    color: color_percent100,
                                }, ],
                            },
                            'none',
                        ],
                        data: [{
                            value: 75,
                            name: '',
                        }, {
                            value: 25,
                            name: '',
                        }, ],


                    }, { //中间线
                        name: '',
                        type: 'pie',
                        radius: ['40%', '41%'],
                        center: ['50%', '65%'],
                        startAngle: 225,
                        hoverAnimation: false,
                        legendHoverLink: false,
                        color: [{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: color_percent0,
                                }, {
                                    offset: 1,
                                    color: color_percent100,
                                }, ],
                            },
                            'none',
                        ],
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [{
                            value: 75,
                            name: '',
                        }, {
                            value: 25,
                            name: '',
                        }, ],

                    }, { //顶部数值
                        name: '',
                        type: 'pie',
                        radius: ['0', '0'],
                        center: ['50%', '22%'],
                        hoverAnimation: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [{
                            value: 75,
                            name: '',
                            label: {
                                formatter: '{a|数据共享应用质量问题}\n' + (storagePercent_2_s).toFixed(0) + '{a| 个}',
                                position: 'center',
                                show: true,
                                color: '#fff',
                                fontSize: 26,
                                fontWeight: 600,
                                rich: {
                                    a: {
                                        color: '#96c5ff',
                                        fontSize: 18,
                                        lineHeight: 32
                                    },
                                },
                            },
                        }],

                    }, { //指针
                        name: '',
                        type: 'pie',
                        radius: ['42%', '55%'],
                        center: ['50%', '65%'],
                        startAngle: 315,
                        hoverAnimation: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        clockwise: false,
                        z: 2,
                        data: [{
                            name: '',
                            value: ((100 - ([storagePercent_2_s] / [storagePercent_2]) * 100) * 270) / 360,
                            label: {
                                formatter: '{a|解决率}\n' + ([storagePercent_2_s * 100] / [storagePercent_2]).toFixed(0) + '%',
                                position: 'center',
                                show: true,
                                color: '#fff',
                                fontSize: 30,
                                fontWeight: 600,
                                rich: {
                                    a: {
                                        color: '#4dcbc3',
                                        fontSize: 16,
                                        lineHeight: 32
                                    },
                                },
                            },
                            itemStyle: {
                                color: 'rgba(34, 34, 34, .9)',
                            },

                        }, {
                            value: 1,
                            name: '',
                            itemStyle: {
                                color: '#00feee',
                                borderColor: '#00feee',
                                borderWidth: 1,
                            },
                        }, {
                            name: '',
                            value: 100 - ((100 - ([storagePercent_2_s] / [storagePercent_2]) * 100) * 270) / 360,
                            itemStyle: {
                                color: 'transparent',
                            },
                        }, ],
                    },




                    //////////////3.数据储存质量问题
                    { //比例
                        type: 'pie',
                        radius: ['42%', '55%'],
                        center: ['82%', '65%'],
                        startAngle: 225,
                        hoverAnimation: false,
                        avoidLabelOverlap: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        color: [{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0.6,
                                    color: color_percent0,
                                }, {
                                    offset: 1,
                                    color: color_percent100,
                                }, ],
                            },
                            'none',
                        ],
                        data: [{
                            value: 75,
                            name: '',
                        }, {
                            value: 25,
                            name: '',
                        }, ],


                    }, { //中间线
                        name: '',
                        type: 'pie',
                        radius: ['40%', '41%'],
                        center: ['82%', '65%'],
                        startAngle: 225,
                        hoverAnimation: false,
                        legendHoverLink: false,
                        color: [{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: color_percent0,
                                }, {
                                    offset: 1,
                                    color: color_percent100,
                                }, ],
                            },
                            'none',
                        ],
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [{
                            value: 75,
                            name: '',
                        }, {
                            value: 25,
                            name: '',
                        }, ],

                    }, { //顶部数值
                        name: '',
                        type: 'pie',
                        radius: ['0', '0'],
                        center: ['82%', '22%'],
                        hoverAnimation: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [{
                            value: 75,
                            name: '',
                            label: {
                                formatter: '{a|数据储存质量问题}\n' + (storagePercent_3_s).toFixed(0) + '{a| 个}',
                                position: 'center',
                                show: true,
                                color: '#fff',
                                fontSize: 26,
                                fontWeight: 600,
                                rich: {
                                    a: {
                                        color: '#96c5ff',
                                        fontSize: 18,
                                        lineHeight: 32
                                    },
                                },
                            },
                        }],

                    }, { //指针
                        name: '',
                        type: 'pie',
                        radius: ['42%', '55%'],
                        center: ['82%', '65%'],
                        startAngle: 315,
                        hoverAnimation: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        clockwise: false,
                        z: 2,
                        data: [{
                            name: '',
                            value: ((100 - ([storagePercent_3_s] / [storagePercent_3]) * 100) * 270) / 360,
                            label: {
                                formatter: '{a|解决率}\n' + ([storagePercent_3_s * 100] / [storagePercent_3]).toFixed(0) + '%',
                                position: 'center',
                                show: true,
                                color: '#fff',
                                fontSize: 30,
                                fontWeight: 600,
                                rich: {
                                    a: {
                                        color: '#4dcbc3',
                                        fontSize: 16,
                                        lineHeight: 32
                                    },
                                },
                            },
                            itemStyle: {
                                color: 'rgba(34, 34, 34, .9)',
                            },

                        }, {
                            value: 1,
                            name: '',
                            itemStyle: {
                                color: '#00feee',
                                borderColor: '#00feee',
                                borderWidth: 1,
                            },
                        }, {
                            name: '',
                            value: 100 - ((100 - ([storagePercent_3_s] / [storagePercent_3]) * 100) * 270) / 360,
                            itemStyle: {
                                color: 'transparent',
                            },
                        }, ],
                    },

                ],
            },
            line: {
                tooltip: {
                    trigger: "axis",
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    },
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: 'rgba(255,255,255,0.5)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                },
                legend: {
                    icon: "rect", //  字段控制形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                    data: ['时效性', '准确性', '数据正确性'],
                    top: '2%',
                    center: 'center',
                    itemWidth: 35,
                    itemHeight: 4, // 设置高度
                    itemGap: 40,
                    textStyle: {
                        color: "#fff",
                        fontSize: 12,
                        fontFamily: 'Microsoft YaHei'
                    }

                },
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '6%',
                    top: "20%",
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: true,
                    zlevel: 20,
                    axisPointer: {
                        type: "shadow"
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                            fontFamily: 'Microsoft YaHei'
                        },
                        formatter: '{value}'
                    },
                    axisTick: {
                        show: false //坐标轴小标记
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#9efff8',
                            width: 2
                        }
                    },
                    data: ['2-22', '2-23', '2-24', '2-25', '2-26', '2-27', '2-28']
                }],
                yAxis: [{
                    type: "value",
                    name: "条\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
                    nameTextStyle: {
                        color: "#fff ",
                        fontSize: 12,
                        fontFamily: 'Microsoft YaHei'
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#9efff8",
                            fontSize: 12,
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        lineStyle: {
                            width: 0
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#1d4178',
                            type: 'dashed'
                        }
                    }
                }],
                series: [{
                    name: '时效性',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 0,
                    showSymbol: true,
                    lineStyle: {
                        normal: {
                            width: 3
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255,140,180, 0.8)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(255,140,180, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ff8cb4',
                        },
                        emphasis: {

                        },
                    },
                    data: [10, 15, 13, 18, 10, 21, 20]
                }, {
                    name: '准确性',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 0,
                    showSymbol: true,
                    lineStyle: {
                        normal: {
                            width: 3
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(104,168,255,0.8)'
                            }, {
                                offset: 1,
                                color: 'rgba(104,168,255,0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#68a8ff',
                        },
                        emphasis: {

                        }
                    },
                    data: [30, 35, 33, 38, 30, 58, 40]
                }, {
                    name: '数据正确性',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 0,
                    showSymbol: true,
                    lineStyle: {
                        normal: {
                            width: 3
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,255,234,0.8)'
                            }, {
                                offset: 1,
                                color: 'rgba(0,255,234,0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#00ffea',

                        },
                        emphasis: {

                        }
                    },
                    data: [50, 55, 53, 88, 50, 78, 24]
                }]
            },
            storage: {
                total: 36.5,
                percent: '20%',
                children: [
                    {
                        name: '企业登记信息',
                        space: 10,
                        percent: '20%'
                    },{
                        name: '异常经营信息',
                        space: 2,
                        percent: '20%'
                    },{
                        name: '年报信息',
                        space: 8,
                        percent: '3%'
                    },{
                        name: '抽查检查信息',
                        space: 1.5,
                        percent: '20%'
                    },{
                        name: '其他信息',
                        space: 5,
                        percent: '30%'
                    },{
                        name: '商标信息',
                        space: 1,
                        percent: '10%'
                    },{
                        name: '公文信息',
                        space: 5,
                        percent: '44%'
                    },{
                        name: '许可证信息',
                        space: 5,
                        percent: '20%'
                    },{
                        name: '案件信息',
                        space: 3,
                        percent: '30%'
                    }
                ]
            }
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        const myChart = echarts.init(document.getElementsByClassName('worldcloud')[0]);//图表id
        const data = {
        value: [{
            "name": "法定代表人",
            "value": 430
            },
            {
            "name": "企业类型",
            "value": 360
            },
            {
            "name": "企业名称",
            "value": 434
            },
            {
            "name": "注册资本",
            "value": 360
            },
            {
            "name": "所属街道",
            "value": 230
            },
            {
            "name": "所属行政区",
            "value": 184
            },
            {
            "name": "设立时间",
            "value": 146
            },
            {
            "name": "企业状态",
            "value": 160
            },
            {
            "name": "经营范围",
            "value": 160
            },
            {
            "name": "处罚结果",
            "value": 160
            },
            {
            "name": "注册地址",
            "value": 184
            },
            {
            "name": "联系电话",
            "value": 120
            },
            {
            "name": "许可证类型",
            "value": 160
            },
            {
            "name": "案件当事人",
            "value": 160
            },
            {
            "name": "行业类别",
            "value": 160
            },
            {
            "name": "股东",
            "value": 360
            },
            {
            "name": "案件类型",
            "value": 160
            },
            {
            "name": "统一社会信用代码",
            "value": 160
            },
            {
            "name": "发证机关",
            "value": 120
            }
        ],
        image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NjcxMDg4MjI5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5Njc3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwNi4xMjMgMTUzLjU3OWg2NS41MzZ2NzE4LjkxMkg2ODQuMjY3VjU1Mi45Nkw1MzEuNjcgNzEyLjcyNWgtMjAuNDU5TDM1OS42NTkgNTUyLjk2djMxOS41MzFIMTcyLjI0NlYxNTMuNTc5aDY3LjU4NGwyODAuNTk3IDMxMS4zMTcgMjg1LjY5Ni0zMTEuMzE3eiIgcC1pZD0iMTk2NzgiPjwvcGF0aD48L3N2Zz4="
        }
        //温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以
        let maskImage = new Image();
        let colorIndex=0;
        const colorList=['#c17eff', '#4ecdc4', '#fd3e81', '#ffe66d','#3389ff','#8fd400'];
        maskImage.src = data.image;
        maskImage.onload = function(){
            myChart.setOption( {
                tooltip: {
                    show: false
                },
                series: [{
                    type: 'wordCloud',
                    gridSize: 1,
                    
                    sizeRange: [12, 44],
                    rotationRange: [0, 0],
                    // maskImage: maskImage,
                    textStyle: {
                    normal: {
                        color:function(){
                        colorIndex++;
                        if(colorIndex==4){
                            colorIndex=0;
                        }
                        return colorList[colorIndex];
                        }
                    },
                    },
                    left: 'center',
                    top: 'center',
                    width: '96%',
                    height: '80%',
                    data: data.value
                }]
            })
        }
    },
    watch: {

    },
    methods: {

    },
    components: {
        'DataBulbs': dataBulbs,
    },
};
</script>

<style scoped lang="css">
    .part1{
        width: 836px; 
    }
    .part2{
        width: 685px;
    }
    .part3{
        width: 330px;
    }
    .part1>>>.bulb_narrow{
        width: calc(100% - 130px);
    }
    .part1>.bulb_list>>>li{
        width: calc((100% - 40px)/4);
    }
    .part2>.bulb_list>>>li{
        width: calc((100% - 60px)/4);
    }
    .part3>.bulb_list>>>li{
        width: calc((100% - 30px)/2);
    }
</style>
