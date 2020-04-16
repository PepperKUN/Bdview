<template>
  <div class="content">
      <div class="row">
          <DataFrame :width='1892' :height='165' frameTitle="数据汇聚总览" rightFunc>
              <DataBulbs :data='bulbs'></DataBulbs>
          </DataFrame>
      </div>
      <div class="row">
          <div class="colum">
              <DataFrame :width='442' :height='398' frameTitle="实时汇聚信息展示" :rightFunc="frameSet">
                    <table class="normal_table">
                        <thead>
                            <tr>
                                <th v-for="item in table.thead" :key="item.id">{{item}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index3) in table.tbody" :key="index3">
                                <td v-for="(object, index4) in item.td" :key="index4">{{object}}</td>
                            </tr>
                        </tbody>
                    </table>
              </DataFrame><br>
              <DataFrame :width='442' :height='338' frameTitle="预警信息" :rightFunc="frameSet">
                    <ul class="alarm_list">
                        <li v-for="item in alarm" :key="item.id">
                            <span class="alarm_date">
                                <p>{{item.date}}</p>
                                <p>{{item.time}}</p>
                            </span>
                            <span class="alarm_info">{{item.info}}</span>
                        </li>
                    </ul>
              </DataFrame>
          </div>
          <div class="colum">
              <DataFrame :width='980' :height='750' >
                    <div class="data_block type1">
                        <div class="block_name">{{data_block[0].name}}</div>
                        <ul class="block_list" :class="{direction:data_block[0].direct}">
                            <li class="list_name" v-for="list in data_block[0].lists" :key="list.id">{{list.name}}</li>
                        </ul>
                    </div>
                    <div class="data_block type1">
                        <div class="block_name">{{data_block[1].name}}</div>
                        <ul class="block_list" :class="{direction2:data_block[1].direct}">
                            <li class="list_name" v-for="list in data_block[1].lists" :key="list.id">
                                <span>{{list.name}}</span>
                                <div class="arrow_info">
                                    <span class="amount">今日{{list.amount}}条</span>
                                    <span class="time">数量最后到达时间<br>{{list.time}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="data_block type2">
                        <div class="block_name">{{data_block[2].name}}</div>
                        <ul class="spec_list">
                            <li v-for="hex in data_block[2].spec" :key="hex.id">{{hex}}</li>
                        </ul>
                        <div class="box green">{{data_block[2].greenCase}}</div>
                        <div class="down_arrow"></div>
                        <div class="box blue">{{data_block[2].blueCase}}</div>
                    </div>
                    <div class="block_arrow">
                        <span>30分钟</span>
                    </div>
                    <div class="data_block type3">
                        <div class="block_name">{{data_block[2].name}}</div>
                        <template v-for="(grid, index) in data_block[3].grid">
                            <ul class="grid" :key="'grid_'+index" :class="grid.class">
                                <li class="grid_name">{{grid.name}}</li>
                                <li v-for="list in grid.list" :key="list.id">
                                    <p>{{list.name}}</p>
                                    <span class="num" v-if="list.value">{{list.value}}</span>
                                    <p v-if="list.value">条</p>
                                </li>
                            </ul>
                            <div class="down_arrow_mini" v-if="data_block[3].grid[index+1]" :key="'arrow_'+index">
                                <span>30分钟</span>
                            </div>
                        </template>
                    </div>
              </DataFrame>
          </div>
          <div class="colum">
              <DataFrame :width='442' :height='398' frameTitle="汇聚数据分析" :rightFunc="frameSet1">
                  <v-chart :options="pie" :autoresize='true'/>
              </DataFrame><br>
              <DataFrame :width='442' :height='338' frameTitle="数据汇聚趋势" rightFunc>
                  <v-chart :options="line" :autoresize='true'/>
              </DataFrame>
          </div>
      </div>
  </div>
</template>
<script>
import dataBulbs from '../common/dataBulbs'

import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

export default {
  name: "content-gather",
  data () {
    return {
        frameSet: {
            btnTitle: '查看更多',
            url: 'https://www.guancha.cn/',
        },
        frameSet1: {
            drops: [
                {
                    optionText: '原工商业务系统',
                    optionVal: '1',
                },{
                    optionText: '新增',
                    optionVal: '2',
                },{
                    optionText: '变化',
                    optionVal: '3',
                }
            ]
        },
        bulbs: [
            {
            title: '市监局综合业务系统',
            amount: '152,452,45',
            unit: '条',
            color: 'yellow'
            },{
            title: '特种设备系统',
            amount: '122,452',
            unit: '条',
            color: 'cyan'
            },{
            title: '食品审批平台',
            amount: '463,745',
            unit: '条',
            color: 'green'
            },{
            title: '计量系统',
            amount: '65,785',
            unit: '条',
            color: 'purple'
            },{
            title: '委办局',
            amount: '41,452',
            unit: '条',
            color: 'pink'
            },{
            title: '国家总局',
            amount: '56,452,124',
            unit: '条',
            color: 'yellow'
            },{
            title: '其他数据源',
            amount: '23,859',
            unit: '条',
            color: 'cyan'
            }
        ],
        data_block: [
            {
                name: '数据产生',
                direct: true,
                lists: [
                    { name: '市监综合业务系统'},
                    { name: '特种设备系统'},
                    { name: '食品审批平台'},
                    { name: '计量系统'},
                    { name: '委办局'},
                    { name: '国家总局'},
                    { name: '其他数据源(法人库, 协同监管平台)'}
                ]
            },{
                name: '近源层',
                direct: true,
                lists: [
                    { name: '市监综合业务系统', amount: '12653', time: '12:14'},
                    { name: '特种设备系统', amount: '3652', time: '12:14'},
                    { name: '食品审批平台', amount: '4523', time: '12:14'},
                    { name: '计量系统', amount: '356', time: '12:14'},
                    { name: '委办局', amount: '635', time: '12:14'},
                    { name: '国家总局', amount: '4125', time: '12:14'},
                    { name: '其他数据源(法人库, 协同监管平台)', amount: '364', time: '12:14'}
                ]
            },{
                name: '清洗入库',
                spec: ['数据 准确性','数据 完整性','数据 冗余性'],
                greenCase: '数据清洗',
                blueCase: '数据转换',

            },{
                name: '清洗入库',
                grid: [
                    {
                        name: '数据转换',
                        class: 'large_height',
                        list: [
                            {
                                name: '政务服务数据库',
                                value: 324,
                            },{
                                name: '市场准入数据库',
                                value: 324,
                            },{
                                name: '市场监管数据库',
                                value: 324,
                            },{
                                name: '行政执法数据库',
                                value: 324,
                            },{
                                name: '质量基础设施数据库',
                                value: 324,
                            },{
                                name: '综合管理数据库',
                                value: 324,
                            }
                        ]
                    },{
                        name: '主题层',
                        class: 'normal_height',
                        list: [
                            { name: '族谱关联' },
                            { name: '时间轴' },
                            { name: '投资关系' },
                            { name: '监管信息' },
                            { name: '许可证照信息' },
                            { name: '其他数据' }
                        ]
                    },{
                        name: '应用层',
                        class: 'col_two',
                        list: [
                            { name: '数据分析结果' },
                            { name: '统计报表结果' },
                            { name: '数据分析结果' },
                            { name: '统计报表结果' }
                        ]
                    }
                ]
            }
        ],
        table:{
            thead: ['数据源','问题类型','数据条数','汇入时间'],
            tbody: [
                {
                    td: ['特种设备系统', '内部采集', '253', '03-04 11:12:45',]
                },{
                    td: ['食品审批平台', '内部采集', '635', '03-04 11:12:45',]
                },{
                    td: ['登记系统', '内部采集', '4526', '03-04 11:12:45',]
                },{
                    td: ['国家总局', '上级下发', '452698', '03-04 11:12:45',]
                },{
                    td: ['公示监管', '内部采集', '5634', '03-04 11:12:45',]
                }
            ]
        },
        alarm: [
            {
                date: '03-04',
                time: '16:44:12',
                info: '国家局数据汇聚条数超过1，000，000条'
            },{
                date: '03-04',
                time: '16:44:12',
                info: '特种设备系统数据汇聚失败'
            },{
                date: '03-04',
                time: '16:44:12',
                info: '计量系统数据准确性预警'
            },{
                date: '03-04',
                time: '16:44:12',
                info: '计量系统数据完整性预警'
            },{
                date: '03-04',
                time: '16:44:12',
                info: '计量系统数据冗余性预警'
            }
        ],
        pie: {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },

            legend: {
                show: true,
                icon: 'circle',
                selectedMode: true,
                top: 20,
                itemWidth: 12,
                itemHeight: 12, // 设置高度
                itemGap: 30,
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                    fontFamily: 'Microsoft YaHei'
                },
                data: ['行政许可', '市场监管', '案件管理', '消费维权'],


            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '55%'],
                avoidLabelOverlap: false,
                color: ['#589eff', '#4ecdc4', '#ffe66d', '#fd3e81'],
                label: {
                    show: false,
                    position: 'center',
                    normal: {
                        textStyle: {
                            fontSize: 14
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '24',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {},
                data: [{
                    value: 335,
                    name: '行政许可'
                }, {
                    value: 310,
                    name: '市场监管'
                }, {
                    value: 234,
                    name: '案件管理'
                }, {
                    value: 135,
                    name: '消费维权'
                }],
                itemStyle: {
                    normal: {
                        labelLine: {
                            show: true,
                            lineStyle: {
                                color: '#fff',
                            }
                        },
                        borderColor: '#0a1833',
                        borderWidth: 1,
                    },
                    emphasis: {

                    }
                },
            }]
        },
        line: {
            title: {
                text: "原工商综合业务系统",
                left: "center",
                show: true,
                y: "10",
                textStyle: {
                    color: "#fff"
                }
            },
            tooltip: {
                trigger: 'item', //axis , item       
                backgroundColor: 'rgba(4,22,62,0.7)',
                borderColor: '#59dcff',
                borderWidth: 1,
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: '#3fa0ef',
                        width: 1,
                        type: 'solid'
                    }
                },

                //实例
                zlevel: 18
            },
            toolbox: {
                show: false,
                iconStyle: {
                    normal: {
                        borderColor: '#fff'
                    },
                    emphasis: {
                        borderColor: '#b1e4ff'
                    }
                },
                feature: {
                    brush: {
                        type: ['rect', 'polygon', 'clear']
                    },
                    saveAsImage: {
                        show: true
                    }
                },
                top: '2%',
                right: 20,
            },
            color: "#384757",
            legend: {
                show: false
            },
            xAxis: [{
                type: "category",
                data: ['2-22', '2-23', '2-24', '2-25', '2-26', '2-27', '2-28'],
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
                }
            }],
            yAxis: [{
                type: "value",
                name: "",
                nameTextStyle: {
                    color: "#cbf6ff",
                    fontSize: 14,
                    fontFamily: 'Microsoft YaHei'
                },
                min: 0,
                max: 1500,
                interval: 300,
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
            grid: {
                top: "18%",
                left: "center",
                containLabel: true,
                width: "94%",
                height: "75%"
            },
            series: [

                {
                    name: "",
                    type: "line",
                    data: [800, 920, 900, 940, 1300, 1320, 1300],
                    symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
                    symbolSize: 3,

                    itemStyle: {
                        normal: {
                            color: "#ffe66d", // 会设置点和线的颜色，所以需要下面定制 line
                            borderColor: "#ffe66d" // 点边线的颜色
                        }
                    },
                    lineStyle: {
                        normal: {
                            type: "solid",
                            width: 3, //折线宽度
                            color: "#ffe66d"
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(249,227,173,0.6)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(249,227,173,0)'
                                }]
                            },
                            // shadowBlur: 15,
                            shadowColor: 'rgba(0,0,0,.2)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 5,
                            opacity: .8
                        }
                    }
                }
            ]
        }
    };
  },
  mounted() {

  },
  methods: {
  },
  components: {
      'DataBulbs': dataBulbs,
  }
}
</script>
<style lang="css" scoped>
    .bulb_list>>>li{
        width: calc((100% - 80px)/7);
    }
    .colum>>>.frame_option{
        width: 140px;
    }
    .data_block{
        margin-right: 0;
    }
    
    .block_list>li.list_name{
        cursor: default;
    }

</style>