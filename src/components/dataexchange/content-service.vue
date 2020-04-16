<template>
  <div class="content">
      <div class="content_title"><span>{{contentTitle}}</span></div>
      <div class="row">
            <DataFrame :width='1892' :height='122' frameTitle="接口服务总览" rightFunc>
                <DataFlow :flowData="flow" @update-data='update' :dataGap='100'></DataFlow>
            </DataFrame>
      </div>
      <div class="row">
            <DataFrame :width='624' :height='370' frameTitle="接口服务被调用次数排名" :rightFunc="frameSet">
                <ul class="color_list">
                    <li v-for="(item, index) in list1" :key="index">
                        <i>{{index+1}}</i>
                        <span class="list_name">{{item.name}}</span>
                        <span class="list_unit">{{item.unit}}</span>
                        <span class="list_value">{{item.value}}</span>
                    </li>
                </ul>
            </DataFrame>
            <DataFrame :width='620' :height='370' frameTitle="接口服务被调用频次趋势分析" :rightFunc="frameSet2">
                <v-chart :options="line" :autoresize='true'/>
            </DataFrame>
            <DataFrame :width='620' :height='370' frameTitle="接口服务被调用成功率分析" :rightFunc="frameSet2">
                <v-chart :options="line" :autoresize='true'/>
            </DataFrame>
      </div>
      <div class="row">
            <DataFrame :width='624' :height='370' frameTitle="业务系统调用接口服务次数排名" :rightFunc="frameSet">
                <ul class="color_list">
                    <li v-for="(item, index) in list2" :key="index">
                        <i>{{index+1}}</i>
                        <span class="list_name">{{item.name}}</span>
                        <span class="list_unit">{{item.unit}}</span>
                        <span class="list_value">{{item.value}}</span>
                    </li>
                </ul>
            </DataFrame>
            <DataFrame :width='620' :height='370' frameTitle="业务系统调用接口频次趋势分析" :rightFunc="frameSet2">
                <v-chart :options="line" :autoresize='true'/>
            </DataFrame>
            <DataFrame :width='620' :height='370' frameTitle="业务系统调用接口成功率分析" :rightFunc="frameSet2">
                <v-chart :options="line" :autoresize='true'/>
            </DataFrame>
      </div>
  </div>
</template>
<script>
import dataFlow from '../common/dataFlow'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

export default {
  name: "",
  data () {
    return {
        contentTitle: '接口服务监控',
        frameSet: {
            drops: [{
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
        frameSet2: {
            drops: [{
                optionText: ' 近期',
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
        flow: [
            {
                name: '接口服务',
                ico: 'adjust',
                color: 'cyan',
                isHead: true,
                amount: '1864',
                unit: '个'
            },{
                name: '使用者',
                ico: 'user',
                color: 'yellow',
                add1: '内部',
                amount: '23',
                add2: '个,外部',
                amount2: '12',
                unit: '个'
            },{
                name: '今日接口调用次数',
                ico: 'chip',
                color: 'blue',
                amount: '82360',
                unit: '个'
            },{
                name: '今年接口调用总次数 ',
                ico: 'chip',
                color: 'pink',
                amount: '31201',
                unit: '个'
            }
        ],
        list1: [
            {
                name: '企业查询接口',
                value: '5.2747',
                unit: '万次数'
            },{
                name: '企业比对接口',
                value: '4.7293',
                unit: '万次数'
            },{
                name: '企业信息验证接口',
                value: '2.3641',
                unit: '万次数'
            },{
                name: '公示信息查询接口',
                value: '2.1823',
                unit: '万次数'
            },{
                name: '黑名单查询接口',
                value: '1.2573',
                unit: '万次数'
            }
        ],
        list2: [
            {
                name: '审批系统使用接口',
                value: '3.9611',
                unit: '万次数'
            },{
                name: '登记系统使用接口',
                value: '3.2144',
                unit: '万次数'
            },{
                name: '一部手机办事通使用接口',
                value: '3.1501',
                unit: '万次数'
            },{
                name: '12315系统使用接口',
                value: '3.0123',
                unit: '万次数'
            },{
                name: '案件系统使用接口',
                value: '2.9299',
                unit: '万次数'
            },{
                name: '省政务平台使用接口',
                value: '2.0513',
                unit: '万次数'
            }
        ],
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
                data: ['企业查询接口', '企业对比接口', '企业信息验证接口', '公示信息查询接口', '黑名单查询接口'],
                top: '4%',
                center: 'center',
                itemWidth: 10,
                itemHeight: 6, // 设置高度
                itemGap: 20,
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
                    formatter: '{value}',
                    interval: 0,

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
                data: ['2019/11/30', '2019/12/1', '2019/12/3', '2019/12/4', '2019/12/5', '2019/12/6', '2019/12/7'],

            }],
            yAxis: [{
                type: "value",
                name: "",
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
                name: '企业查询接口',
                type: 'line',
                symbol: 'circle',
                symbolSize: 0,
                showSymbol: true,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 5
                    }
                },

                itemStyle: {
                    normal: {
                        color: '#3389ff',

                    },
                    emphasis: {

                    },
                },
                data: [10, 15, 13, 18, 10, 21, 20]
            }, {
                name: '企业对比接口',
                type: 'line',
                symbol: 'circle',
                symbolSize: 0,
                showSymbol: true,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 5
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ffe66d',
                    },
                    emphasis: {

                    }
                },
                data: [30, 35, 33, 38, 30, 58, 40]
            }, {
                name: '企业信息验证接口',
                type: 'line',
                symbol: 'circle',
                symbolSize: 0,
                showSymbol: true,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 5
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4ecdc4',

                    },
                    emphasis: {

                    }
                },
                data: [50, 55, 53, 88, 50, 78, 24]
            }, {
                name: '公示信息查询接口',
                type: 'line',
                symbol: 'circle',
                symbolSize: 0,
                showSymbol: true,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 5
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ac52ff',

                    },
                    emphasis: {

                    }
                },
                data: [25, 41, 17, 28, 27, 58, 67]
            }, {
                name: '黑名单查询接口',
                type: 'line',
                symbol: 'circle',
                symbolSize: 0,
                showSymbol: true,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 5
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fd3e81',

                    },
                    emphasis: {

                    }
                },
                data: [48, 75, 52, 40, 70, 51, 35]
            }]
        }
    };
  },
  mounted() {
  },
  methods: {
        update(data){
            this.flow = data;
        }
  },
  components: {
      'DataFlow': dataFlow,
  }
}
</script>
<style lang="css" scoped>
    .flow_wrap{
        margin: 10px;
        height: calc(100% - 20px);
    }
    .flow_wrap>>>.flow_name{
        margin-left: 200px;
    }

</style>