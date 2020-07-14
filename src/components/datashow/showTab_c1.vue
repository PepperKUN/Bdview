<template>
    <div class="row">
        <div class="colum">
            <DataFrame :width='452' :height='276' frameTitle="各类主体年报率" rightFunc>
                <v-chart :options="bar1" :autoresize='true'/>
            </DataFrame><br>

            <DataFrame :width='452' :height='276' frameTitle="2019年案件办理情况分析（单位：件）" rightFunc>
                <v-chart :options="bar2_2" :autoresize='true'/>
            </DataFrame><br>

            <DataFrame :width='452' :height='284' frameTitle="近5年投诉举报量趋势分析" rightFunc>
                <v-chart :options="line1" :autoresize='true'/>
            </DataFrame>
        </div>
        <div class="colum">
            <SearchInput v-model="inputText" inputName="一门式查询" placeholder="请输入统一码或主体名称或设备编号或许可证编号查询"></SearchInput>
            <DataFrame :width='956' :height='804' rightFunc>
                <v-chart class="chart_hl_top" :options="temp" ref="dataMap" :autoresize='true' @click="areaInfo"/>
                <div class="chart_hl_btm">
                    <div class="chart_hl_btm_lf">
                        <div class="chart_option">
                            <span class="chart_title">近5年新设企业国民经济行业分布（前10）</span>
                            <span class="chart_line" style="width:100%"></span>
                        </div>
                        <v-chart :options="bar6" :autoresize='true'/>
                    </div>
                    <div class="chart_hl_btm_rt">
                        <div class="chart_option">
                            <span class="chart_title">资金规模分析</span>
                            <span class="chart_line" style="width:100%"></span>
                        </div>
                        <v-chart :options="pie3" :autoresize='true'/>
                    </div>
                </div>
            </DataFrame>
        </div>
        <div class="colum">
            <DataFrame :width='452' :height='276' frameTitle="各类许可证数量" rightFunc>
                <ul class="certify_list">
                    <li v-for="cert in certify_list" :key="cert.id">
                        <i class="iconfont" :class="cert.icon"></i>
                        <div class="cert_text">
                            <h6>{{cert.name}}</h6>
                            <p><span class="number">{{cert.number}}</span><span class="unit">{{cert.unit}}</span></p>
                        </div>
                    </li>
                </ul>
            </DataFrame><br>
            <DataFrame :width='452' :height='276' frameTitle="监督检查" rightFunc>
                <table class="simple">
                    <thead>
                    <tr>
                        <th style="text-align: left;padding-left: 10px">检查分类</th>
                        <th>检查次数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in table_simple2" :key="item.id">
                        <td style="color:#fff;text-align: left; padding-left: 10px">{{item[0]}}</td>
                        <td>{{item[1]}}</td>
                    </tr>
                    </tbody>
                </table>
            </DataFrame><br>
            <DataFrame :width='452' :height='284' frameTitle="抽检情况" rightFunc>
                <ul class="sample_list">
                    <li v-for="sample in sample_list" :key="sample.id">
                        <span class="name">{{sample.name}}</span>
                        <span class="number">{{sample.number}}</span>
                        <span class="percent">{{sample.percent}}</span>
                    </li>
                </ul>  
            </DataFrame>
        </div>
    </div>
</template>

<script>
import SearchInput from '../common/searchInput'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/pictorialBar'
export default {
    props: {

    },
    data() {
        const bar1_data = [
            ['name', 'total', 'current', 'fullLength', 'percent',],
            ['2018年度   企业', 58.32, 53.84, 100],
            ['2018年度   农专', 5.52, 5.42, 100],
            ['2018年度   个体', 203.19, 177.5, 100]
        ]
        for(let i=1; i<bar1_data.length; i++){
            bar1_data[i].push(Math.floor(bar1_data[i][2]/bar1_data[i][1]*10000)/100);
        }
        const bar2_data = [
            ['name', 'value'],
            ['线索', 61],
            ['立案', 16226],
            ['结案', 18272],
        ]
        const line1_data = [
            ['name', '2015', '2016', '2017', '2018', '2019'],
            ['投诉量', 3004, 4559, 6287, 6833, 13551],
            ['举报量', 25747, 32899, 38802, 43204, 54310],
        ]
        const mapData = [
            {name: '普洱', value: 199},
            {name: '红河', value: 39},
            {name: '文山', value: 152},
            {name: '曲靖', value: 299},
            {name: '楚雄', value: 89},
            {name: '大理', value: 52},
            {name: '临沧', value: 9},
            {name: '迪庆', value: 352},
            {name: '昭通', value: 99},
            {name: '昆明', value: 39},
            {name: '丽江', value: 480},
            {name: '西双版纳', value: 9},
            {name: '保山', value: 352},
            {name: '玉溪', value: 99},
            {name: '怒江', value: 39},
            {name: '德宏', value: 480},
        ];
        const bar5_data = [
            ['name', 'value'],
            ['全省市场主体共计', 323.66],
            ['内资企业', 68.75],
            ['外资企业', 0.58],
            ['农民专业合作社', 6.22],
            ['个体工商户', 248.11],
        ]
        const pie2_data = bar5_data.concat();
        pie2_data.splice(1,1);
        // console.log(bar5_data, pie2_data);
        const bar6_data = [
            ['name', 'value'],
            ['租赁和商务服务业', 277000],
            ['批发和零售业', 270346],
            ['科学研究和技术服务业', 270000],
            ['建筑业', 250000],
            ['信息传输，软件和信息技术服务业', 200000],
            ['文化，体育和娱乐业', 150000],
            ['交通运输，仓储和邮政业', 100000],
            ['房地产业', 70000],
            ['住宿和饮食', 30000],
            ['制造业', 7000],
        ]
        const pie3_data = [
            ['name', 'value'],
            ['100万以下', 4],
            ['100-500万', 4],
            ['500-1000万', 4],
            ['5000万以上', 4],
            ['1000-2000万', 4],
            ['2000-5000万', 4],
        ]
        return {
            inputText: '',
            area: ['迪庆','怒江','丽江', '大理','保山','德宏','临沧','楚雄','昆明','昭通','曲靖','玉溪','普洱','西双版纳','红河','文山'],
            bar1: {
                dataset: {
                    source: bar1_data,
                },
                grid: {
                    left: 20,
                    top: 30,
                    bottom: 10,
                    right: 20,

                },
                xAxis: [{
                        show: false,
                    },
                    {
                        show: false,
                    }
                ],
                yAxis: {
                    type: 'category',
                    inverse: true,
                    show: false
                },
                series: [
                    {
                        show: true,
                        type: 'bar',
                        barGap: '-100%',
                        barWidth: 10,
                        z: 2,
                        color: '#103674',
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#fee56f',
                                    fontSize: 14,
                                    fontWeight: 'bold'
                                },
                                align: 'right',
                                position: ['100%', '-20'],
                                formatter: function(params){
                                    return '{yellow|'+params.data[2]+'万/'+params.data[1]+'万}' + '  {blue|'+ params.data[4] +'%}'
                                },
                                rich: {
                                    yellow: {
                                        fontWeight: 'bold',
                                        color: '#fee56f',
                                        fontSize: 14,
                                    },
                                    blue: {
                                        color: '#3689fd',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                    }
                                }
                            }
                        },
                        encode: {
                            x: 'fullLength'
                        }
                    },
                    {
                        show: true,
                        type: 'bar',
                        xAxisIndex: 1, //代表使用第二个X轴刻度
                        barGap: '-100%',
                        barWidth: 10,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 0,
                                color: '#4dccc3'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: [0, '-20'],
                                formatter: '{b}',
                                textStyle: {
                                    fontSize: 14,
                                    color: '#fff',
                                }
                            }
                        },
                        encode: {
                            y: 'name',
                            x: 'percent'
                        }
                    }
                ]
            },
            bar2: {
                dataset: {
                    source: bar2_data
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
                    left: 60,
                    right: 20,
                    bottom: 30,
                    top: 20,
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
                    }
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 4,
                    axisLine: {
                        show: false
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
                        barWidth: 30,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#6bc9ff' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#0053c4' // 100% 处的颜色
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
            bar2_2: {
                dataset: {
                    source: bar2_data
                },
                encode: {
                    x: 0,
                    y: 1
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function(params){
                        return params[1].seriesName+'<br/>'+params[1].value[0]+':'+params[1].value[1]
                    },
                    textStyle: {
                        fontWeight: 'bold',
                        fontSize: 12
                    }
                },
                grid: {
                    left: 60,
                    right: 20,
                    bottom: 60,
                    top: 20,
                },
                xAxis: {
                    type: 'category',
                    offset: 20,
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
                    }
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 4,
                    axisLine: {
                        show: false
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
                series: [{
                    name: '案件办理情况分析2',
                    type: 'pictorialBar',
                    symbolSize: [40, 20],
                    symbolOffset: [0, -10],
                    symbolPosition: 'end',
                    z: 12,
                    itemStyle: {
                        normal: {
                            color: '#14b1eb'
                        }
                    },
                }, {
                    name: '案件办理情况分析',
                    type: 'pictorialBar',
                    symbolSize: [40, 20],
                    symbolOffset: [0, 10],
                    z: 12,
                    itemStyle: {
                        normal: {
                            color: '#14b1eb'
                        }
                    },
                }, {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#14b1eb',
                            opacity: .7
                        }
                    },
                    silent: true,
                    barWidth: 40,
                    barGap: '-100%', // Make series be overlap
                }]
            },
            line1: {
                color: ['#68a8ff', '#f582ab'],
                dataset: {
                    source: line1_data
                },
                legend: {
                    top: 10,
                    itemHeight: 4,
                    textStyle: {
                        color: "#ffffff"
                    },
                    icon: 'rect',
                },
                tooltip: {
                    trigger: 'axis',
                },
                grid: {
                    top: 40,
                    left: 60,
                    right: 20,
                    bottom: 30
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
                    }
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 4,
                    axisLine: {
                        show: false
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
                series: [{
                    type: 'line',
                    lineStyle: {
                        width: 3,
                    },
                    itemStyle: {
                        borderWidth: 2,
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(51, 137, 255, 0.7)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(51, 137, 255, 0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    smooth: true, 
                    seriesLayoutBy: 'row'
                },{
                    type: 'line',
                    lineStyle: {
                        width: 3,
                    },
                    itemStyle: {
                        borderWidth: 2,
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(252, 62, 128, 0.7)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(252, 62, 128, 0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    smooth: true, 
                    seriesLayoutBy: 'row'
                }]
            },
            temp: {},
            map: {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x: 'right',
                    data: ['apply_data'],
                    textStyle: {
                        color: '#fff',
                    }
                },
                visualMap: {
                    show: true,
                    min: 0,
                    max: 500,
                    top: 'middle',
                    itemWidth: 16,
                    itemHeight: 400,
                    text: ['高', '低'], // 文本，默认为数值文本
                    align: 'left',
                    calculable: true,
                    padding: 10,
                    backgroundColor: 'transparent',
                    seriesIndex: [0],
                    inRange: {
                        color: ['#10195e', '#0071ff', '#4fe0ff']
                    },
                    outOfRange: {
                        color: ['#2f3d62', '#2f3d62']
                    },
                    left: 20, 
                    textStyle: {
                        color: '#fff',
                    }
                },
                geo: {
                    show: true,
                    map: 'yunnan',
                    zoom: 1.2,
                    layoutCenter: ['36%', '50%'],
                    layoutSize: '78%',
                    aspectScale: 0.98,
                    roam: false,
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#000',
                        shadowColor: 'rgba(0, 0, 0, 0.7)',
                        shadowBlur: 24,
                    }
                },
                grid: [
                    {
                        // 仅仅控制条形图的位置
                        show: true,
                        containLabel: true,
                        right: 100,
                        top: 50,
                        bottom: 30,
                        width: '20%',
                        height: '40%',
                        borderColor: 'transparent',
                    }
                ],
                dataset:[
                    {
                        source: bar5_data
                    },{
                        source: pie2_data
                    }
                ],
                xAxis: {
                    show: false,
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    show: true,
                    axisLabel: {
                        color: '#6bc1ff',
                        fontSize: 16,
                    },
                    axisLine: {
                        show: false,
                    }
                },
                series : [
                    {
                        name: '云南省',
                        type: 'map',
                        map: 'yunnan',
                        geoIndex: 1,
                        showLegendSymbol: false, // 存在legend时显示
                        zoom: 1.2,
                        layoutCenter: ['36%', '50%'],
                        layoutSize: '78%',
                        aspectScale: 0.98,
                        label: {
                            normal: {
                                show: true,
                                textBorderColor: '#000',
                                textBorderWidth: 3,
                                formatter:function(params){
                                    return '{a|'+params.name+'}\n{b|'+params.value+'万}';
                                },
                                rich: {
                                    a:{
                                        color: '#fff',
                                        fontSize: 14,
                                    },
                                    b:{
                                        padding: 4,
                                        color: '#ffe76d',
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                    }
                                }
                            },
                            emphasis: {
                                color: '#fff',
                                show: true,
                            }
                        },
                        roam: false,
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                areaColor: '#031525',
                                borderColor: '#00e9c7',
                                shadowColor: 'rgba(0, 246, 255, 0.1)',
                                shadowBlur: 10,
                            },
                            emphasis: {
                                areaColor: '#00e9c7',
                                opacity: 1.0,
                            }
                        },
                        animation: true,
                        data: mapData,
                    },{
                        datasetIndex: 0,
                        type: 'bar',
                        color: 'transparent',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideLeft',
                                formatter: function(params){
                                    return '{a|'+params.data[1]+'}'+'  {b| 万户}'
                                },
                                rich: {
                                    a:{
                                        color: '#fff',
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    },
                                    b:{
                                        color: '#6bc1ff',
                                        fontSize: 16,
                                    }
                                },
                                textStyle: {
                                    fontSize: 14,
                                    color: '#fff',
                                }
                            }
                        },
                        encode:{
                            x: 'value',
                            y: 'name'
                        }
                    },{
                        color: [
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 1, color: '#fda375' // 0% 处的颜色
                                }, {
                                    offset: 0, color: '#fc4f7e' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }, '#fbe26f','#00ecc9', 
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#3393ff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#004fbb' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        ],
                        datasetIndex: 1,
                        name: '全省主体分部',
                        type: 'pie',
                        // roseType: 'radius',
                        startAngle: 90,
                        avoidLabelOverlap: true,
                        minAngle: 30,
                        radius: ['28%', '34%'],
                        center: ['76%', '80%'],
                        label: {
                            align: 'center',
                            formatter: function(params){
                                return '{b|'+params.data[0]+'}\n{white|'+params.percent+'%}'
                            },
                            rich:{
                                b:{
                                    fontSize: 14,
                                    color: '#6ebff9',
                                    lineHeight: 16,
                                },
                                white: {
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                }
                            }
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)',
                            },
                            length: 20,
                            length2: 20
                        }
                    }
                ]
            },
            areaBar: {
                title: {
                    text: '< 返回全省地图',
                    top: '10',
                    left: '10',
                    textStyle: {
                        fontSize: '14',
                        width: '100',
                        fontWeight: 'normal',
                        color: '#a3fff7',
                    },
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    triggerEvent: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '20',
                    right: '20',
                    bottom: '40',
                    top: '60',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['area1', 'area2', 'area3', 'area4', 'area5', 'area6', 'area7', 'area8', 'area9', 'area10'],
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
                            fontSize: 12
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: 'rgba(82, 157,255, 0.35)'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#a3fff7'
                            }
                        },
                        axisLabel: {
                            color: '#a3fff7',
                            fontSize: 12
                        }
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '30%',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#fd3e81' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#ffe66d' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                        data: [10, 52, 200, 334, 390, 330, 220, 200, 334, 390],
                        
                    }
                ]
            },
            bar6: {
                dataset:{
                    source: bar6_data
                },
                encode: {
                    x: 'value',
                    y: 'name'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: 200,
                    right: 50,
                    bottom: 40,
                    top: 20,
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#a3fff7'
                        }
                    },
                    axisLabel: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                xAxis: {
                    type: 'value',
                    splitNumber: 3,
                    axisLine: {
                        show: false
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
                        type: 'bar',
                        barWidth: 8,
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: '#00ac8a' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#8fd400' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                        label: {
                            show: false,
                            color: '#fff',
                            position: 'right'
                        }
                    }
                ]
            },
            pie3: {
                color: ['#fbe26f', '#9f4cf9', '#4180fa', '#f03877', '#5dc7bd', {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#3393ff' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#004fbb' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }, ],
                dataset: {
                    source: pie3_data
                },
                grid: {
                    left: 20,
                    right: 20,
                    bottom: 20,
                    top: 20,
                },
                encode: {
                    name: 'name',
                    value: 'value'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} :{d}%'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        startAngle: -180,  
                        radius: ['40%', '52%'],
                        center: ['50%', '50%'],
                        label: {
                            align: 'center',
                            color: '#fff',
                            fontSize: 14,
                            lineHeight: 16,
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)',
                            },
                            length: 20,
                            length2: 20
                        }
                    }
                ]
            },
            certify_list: [
                {
                    icon: 'icon-icon1',
                    name: '食品生产单位',
                    number: '1,519',
                    unit: '户'
                },
                {
                    icon: 'icon-icon2',
                    name: '食品经营单位',
                    number: '289,442',
                    unit: '户'
                },
                {
                    icon: 'icon-icon3',
                    name: '重要工业品生产单位',
                    number: '3,598',
                    unit: '户'
                },
                {
                    icon: 'icon-icon4',
                    name: '特种设备',
                    number: '967,134',
                    unit: '户'
                },
                {
                    icon: 'icon-icon5',
                    name: '特种设备许可单位',
                    number: '14,359',
                    unit: '户'
                },
                {
                    icon: 'icon-icon6',
                    name: '执业注册经纪人',
                    number: '38,052',
                    unit: '户'
                },
                {
                    icon: 'icon-icon7',
                    name: '广告发布登记单位',
                    number: '204',
                    unit: '户'
                },
                {
                    icon: 'icon-icon8',
                    name: '检验检测机构',
                    number: '1083',
                    unit: '户'
                },
            ],
            table_simple2: [
                ['食品生成', 485],
                ['食品经营', 1245],
                ['餐饮', 2451],
                ['特种设备', 357],
                ['计量', 245],
                ['重要工业产品', 152],
            ],
            sample_list:[
                {
                    name: '食品抽检',
                    number: 415,
                    percent: 87.15,
                },
                {
                    name: '特种设备检验',
                    number: 7828,
                    percent: 98.36,
                },
                {
                    name: '计量产品冲渐渐',
                    number: 1521,
                    percent: 86.39,
                },
                {
                    name: '工业产品抽检',
                    number: 985,
                    percent: 97.15,
                },
                {
                    name: '流通领域商品抽检',
                    number: 415,
                    percent: 86.38,
                },
            ]
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.temp = this.map;
    },
    watch: {
        
    },
    methods: {
        areaInfo(params){ 
            if(this.area.includes(params.name)){
                this.temp = this.areaBar;
                this.$refs.dataMap.$el.classList.add("removeBg")
            }else if(params.componentType==='title'){
                 this.temp = this.map;
                 this.$refs.dataMap.$el.classList.remove("removeBg")
            }
            
        }
    },
    components: {
        SearchInput,
    },
};
</script>

<style scoped lang="css">
    .chart_hl_top{
        background-image: url(../../assets/images/map_glow.png);
        background-position: 0 38%;
    }
    .removeBg{
        background: none;
    }
    table.simple{
        height: calc(100% - 20px);
    }
    table.simple th{
        font-size: 14px;
        background-color: rgba(0, 253, 235, 0.2);
    }
    table.simple th:last-child{
        border-left: 1px solid #0a55c4;
    }
    table.simple td{
        font-size: 14px;
        font-weight: bold;
        border-bottom: 1px solid #003788;
    }
    table.simple td:last-child{
        border-left: 1px solid #0a55c4;
    }
    table.simple tr:nth-child(2n)>td{
        background-color: rgba(0, 99, 253, 0.2);
    }
    table.simple tr:last-child>td{
        border-bottom: none;
    }
</style>
