<template>
    <div class="row">
        <div class="colum">
            <DataFrame :width='462' :height='432' frameTitle="按资源项类型统计（单位：个）" rightFunc>
                <v-chart :options="pie1" :autoresize='true'/>
            </DataFrame><br>
            <DataFrame :width='462' :height='434' frameTitle="按资源采集应用统计" rightFunc>
                <v-chart class="withPage" :options="bar1" :autoresize='true'/>
                <el-pagination small background layout="prev, pager, next" :total="1000" :pager-count="11"></el-pagination>
            </DataFrame>
        </div>
        <div class="colum">
            <DataFrame :width='936' :height='166' frameTitle="资源目录总览" rightFunc>
                <DataFlow :flowData="flow" @update-data='update' :dataGap='100'></DataFlow>
            </DataFrame><br>
            <DataFrame :width='936' :height='700' frameTitle="按单位需求量统计" rightFunc>
                <v-chart :options="graph1" :autoresize='true'/>
            </DataFrame>
        </div>
        <div class="colum">
            <DataFrame :width='462' :height='498' frameTitle="资源目录历史情况" rightFunc>
                <ul class="history_list">
                    <li v-for="item in history" :key="item.id">
                        <span class="history_date">{{item.date}}</span>
                        <span class="history_info">{{item.info}}</span>
                    </li>
                </ul>
                <el-pagination small background layout="prev, pager, next" :total="1000" :pager-count="11"></el-pagination> 
            </DataFrame><br>
            <DataFrame :width='462' :height='368' frameTitle="按共享需求量统计" rightFunc>
                <div class="worldcloud"></div>
            </DataFrame>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/graph'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import "echarts-wordcloud"
import dataFlow from '../common/dataFlow'

export default {
    name: 'cataTab_c1',
    props: {                                                                            

    },
    data() {
        const color = ['#ffe66d', '#4ecdc4', '#ac52ff', '#ffe66d', '#8fd400', '#3389ff', '#fd3e81', '#4ecdc4', '#ac52ff', '#4ecdc4', '#3389ff'],// 数据图表颜色数组
            scale = 1,
            echartData = [
                {
                    name: '主体登记类',
                    value: 1486,
                }, {
                    name: '公示监管类',
                    value: 549,
                }, {
                    name: '执法办案类',
                    value: 640,
                }, {
                    name: '设备人员类',
                    value: 4,
                }, {
                    name: '内部管理类',
                    value: 135,
                }, {
                    name: '统计报表类',
                    value: 170,
                }, {
                    name: '消费维权类',
                    value: 479,
                }, {
                    name: '特种设备监管类',
                    value: 50,
                }, {
                    name: '主体监管类',
                    value: 1289,
                }, {
                    name: '食品监管类',
                    value: 89,
                }, {
                    name: '许可审批类',
                    value: 204,
                }
            ];
        // let total = echartData.reduce((a, b) => {
        //     return a + b.value * 1
        // }, 0)
        const bar1_X = [20939, 10273, 8483,5341, 4212, 3223,5632, 4523],
            bar1_Y = ['个体登记','内资登记','外资登记','案件管理','公示系统','消费维权','食品审批','特种设备'];
        
        const fillSvg = 'path://M111.549,111.577 L47.365,128.775 L0.380,81.789 L17.578,17.605 L81.762,0.407 L128.748,47.393 L111.549,111.577 Z';

        return {
            pie1: {
                color: color,
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)",

                },
                legend: {
                    icon: 'circle',
                    itemWidth: 14 * scale,
                    itemHeight: 14 * scale,
                    orient: 'vertical',
                    top: 'center',
                    right: 30,
                    formatter: function(name) {
                        let res = echartData.filter(v => v.name === name);
                        res = res[0];
                        // let percent = (res.value * 100 / total).toFixed(2);
                        return res.name + '{value|' + res.value + '}'
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                        align: 'right',
                        rich: {
                            percent: {
                                fontSize: 14,
                                align: 'left'
                            },
                            value: {
                                fontSize: 14,
                                align: 'left',
                                fontWeight: 600,
                                padding: 4,
                            }
                        }
                    }
                },
                series: [{
                    name: '饼图内容区',
                    type: 'pie',
                    minAngle: 5,
                    radius: ['36%', '56%'],
                    center: ['30%', '50%'],
                    hoverAnimation: false,
                    data: echartData,
                    itemStyle: {
                        normal: {
                            shadowBlur: 20,
                            shadowColor: '#00204',
                            labelLine: {
                                show: true,
                                lineStyle: {
                                    color: '#fff',
                                }
                            },
                            borderColor: '#0a1833',
                            borderWidth: 1,
                        }
                    },
                    label: {
                        show: false
                    }
                }]
            },
            bar1: {
                backgroundColor:'transparent',// 背景透明
                tooltip: {
                    trigger: 'axis',
                    textStyle:{
                        fontSize:12
                    }
                },
                grid: {
                    x: 8,
                    y: 0,
                    top: 10,
                    bottom: 0,
                    left: 14,
                    right: 40,
                    containLabel: true
                },
                xAxis: [{
                    type: 'value',
                    position: 'bottom',
                    boundaryGap: true,// 边界间隙
                show:false,
                    min: 0,
                    max: 22000,
                    axisLine:{
                        show: false
                    },
                    axisTick:{
                        show:false // 坐标轴小标记
                    },
                    splitLine: {
                        show: false, // 是否显示分割线
                    }
                }],
                yAxis: {
                    type: 'category',
                    position: 'left',
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize:12
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'rgba(158, 255, 248, 1)',
                            width:2
                        }
                    },
                    axisTick:{
                        show:false, // 坐标轴小标记
                    },
                    splitLine: {
                        show: false
                    },
                    data: bar1_Y // 载入y轴数据
                },
                series: [
                    {
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'right', // top,inside,insideTop,...
                                textStyle: {
                                    color: '#00feec'
                                }
                            }
                        },
                        barWidth: 20,
                        itemStyle:{
                            emphasis: {
                                barBorderRadius: 4
                            },
                            normal:{
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                        offset: 0,
                                        color: '#003f56'
                                    }, {
                                        offset: 1,
                                        color: '#00fdec'
                                    }]), // 图表渐变色
                                barBorderRadius:  [0,5,5,0]
                            },
                    
                        },
                        data: bar1_X, // 载入x轴数据
                    }
                ]
            },
            graph1: {
                title: {
                    show:false
                },
                tooltip: {
                    show:true,
                    trigger: 'item',  //axis , item       
                    backgroundColor:'rgba(0,24,77,0.8)',
                    label: {
                        show: true
                    },
                    borderColor:'#59dcff',
                    borderWidth:1,
                    axisPointer:{
                        type: 'line'
                    },
                    position: function (point, params, dom, rect, size) {
                    // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
                    // 提示框位置
                    var x = 0; // x坐标位置
                    var y = 0; // y坐标位置
                    
                    // 当前鼠标位置
                    var pointX = point[0];
                    var pointY = point[1];
                    
                    // 外层div大小
                    // var viewWidth = size.viewSize[0];
                    // var viewHeight = size.viewSize[1];
                    
                    // 提示框大小
                    var boxWidth = size.contentSize[0];
                    var boxHeight = size.contentSize[1];
                    
                    // boxWidth > pointX 说明鼠标左边放不下提示框
                    if (boxWidth > pointX) {
                        x = 'center';
                    } else { // 左边放的下
                        x = pointX - boxWidth;
                    }
                    
                    // boxHeight > pointY 说明鼠标上边放不下提示框
                    if (boxHeight > pointY) {
                        y = 5;
                    } else { // 上边放得下
                        y = pointY - boxHeight;
                    }
                    
                    return [x, y];
                    }
                
                
                },
                animationDurationUpdate: function(idx) {
                    // 越往后的数据延迟越大
                    return idx * 20;
                },
                animationEasingUpdate: 'bounceIn',
                series: [{
                    type: 'graph',
                    layout: 'force',
                    force: {
                        repulsion: 200,
                        edgeLength: 10
                    },
                    roam: false,
                    symbol: fillSvg,
                    symbolSize:function(val){
                        return Math.sqrt(val)*3
                    },
                    symbolRotate:function(val){
                        console.log(val);
                        return Math.sqrt(val)/10 
                    },
                    left: 10,
                    top: 10,
                    right: 10,
                    bottom: 10,
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}',
                            color: '#fff',
                            textStyle: {
                                fontSize: '15'
                            }
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#4a95fc'
                                }, {
                                    offset: 1,
                                    color: '#032f76'
                                }]
                            }
                        }
                    },
                    data: [
                        {
                            id: 1,
                            name: '公安',
                            value: 260
                        }, {
                            id: 2,
                            name: "大理市",
                            value: 380
                        }, {
                            id: 3,
                            name: "邵通市",
                            value: 500 
                        }, {
                            id: 4,
                            name: "法人库",
                            value: 1000 
                        }, {
                            id: 5,
                            name: "楚雄市",
                            value: 420 
                        }, {
                            id: 6,
                            name: "普洱市",
                            value: 740
                        }, {
                            id: 7,
                            name: "中信银行",
                            value: 270  
                        }, {
                            id: 8,
                            name: "交通银行",
                            value: 270
                        }, {
                            id: 9,
                            name: "曲靖市",
                            value: 560 
                        }, {
                            id: 10,
                            name: "总局",
                            value: 1280
                        }, {
                            id: 11,
                            name: "临沧市",
                            value: 600
                        }, {
                            id: 12,
                            name: "景洪市",
                            value: 420
                        } , {
                            id: 13,
                            name: "协同监管单位",
                            value: 980 
                        }, {
                            id: 14,
                            name: "保山市",
                            value: 410
                        }, {
                            id: 15,
                            name: "丽江市",
                            value: 500
                        }, {
                            id: 16,
                            name: "昆明市",
                            value: 780  
                        }, {
                            id: 17,
                            name: "玉溪市",
                            value: 370
                        }, {
                            id: 18,
                            name: "税务局",
                            value: 300
                        }, {
                            id: 19,
                            name: "委办局",
                            value: 300 
                        }, {
                            id: 20,
                            name: "蒙自市",
                            value: 370 
                        }
                        , {
                           id: 21,
                           name: "普洱市",
                            value: 330 
                        }, {
                            id: 22,
                            name: "泸水市",
                            value: 250 
                        }, {
                            id: 23,
                            name: "省政务",
                            value: 230 
                        }, {
                            id: 24,
                            name: "工商银行",
                            value: 240 
                        }
                    ]
                }]
            },
            history: [
                {
                    date: '2020.03.15',
                    info: '新增资源目录XX个，新增资源项XX个，其中国别XX个，省表XX个'
                },{
                    date: '2020.03.15',
                    info: '新增资源目录XX个，新增资源项XX个，其中国别XX个，省表XX个'
                },{
                    date: '2020.03.15',
                    info: '新增资源目录XX个，新增资源项XX个，其中国别XX个，省表XX个'
                },{
                    date: '2020.03.15',
                    info: '新增资源目录XX个，新增资源项XX个，其中国别XX个，省表XX个'
                },{
                    date: '2020.03.15',
                    info: '新增资源目录XX个，新增资源项XX个，其中国别XX个，省表XX个'
                },{
                    date: '2020.03.15',
                    info: '新增资源目录XX个，新增资源项XX个，其中国别XX个，省表XX个'
                },{
                    date: '2020.03.15',
                    info: '新增资源目录XX个，新增资源项XX个，其中国别XX个，省表XX个'
                },{
                    date: '2020.03.15',
                    info: '新增资源目录XX个，新增资源项XX个，其中国别XX个，省表XX个'
                }
            ],
            flow: [
                {
                    name: '资源目录',
                    color: 'cyan',
                    isHead: true,
                    amount: '1864',
                    unit: '个'
                },{
                    name: '资源项总数',
                    gap: '1',
                    color: 'yellow',
                    amount: '123561',
                    unit: '个'
                },{
                    name: '国标',
                    color: 'blue',
                    amount: '82360',
                    unit: '个'
                },{
                    name: '省标 ',
                    color: 'pink',
                    amount: '31201',
                    unit: '个'
                },{
                    name: '外单位提供资源项',
                    color: 'green',
                    amount: '524',
                    unit: '个'
                }
            ]
        };
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
        update(data){
            this.flow = data;
        }
    },
    components: {
        'DataFlow': dataFlow,
    },
};
</script>

<style scoped>
    .row>.colum>div:first-child{
        margin-top: 4px;
    }
    .colum>>>.stripe>li.flow_name{
        margin-left: 0px;
    }
</style>
