<template>
    <div class="content">
      <div class="row">
        <DataFrame :width='518' :height='264' frameTitle="数据资源项统计（单位：个）" rightFunc>
          <v-chart :options="bar1" :autoresize='true'/>
        </DataFrame>
        <DataFrame :width='825' :height='264' frameTitle="总览" rightFunc>
          <DataBulbs :data='bulbs'></DataBulbs>
        </DataFrame>
        <DataFrame :width='518' :height='264' frameTitle="各类业务数据交换情况" :rightFunc='frameSet3'>
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
        </DataFrame>
      </div>
      <div class="row">
        <div class="colum">
          <DataFrame :width='518' :height='300' frameTitle="近期质量问题分类及质量工单完工率" :rightFunc='frameSet1'>
            <v-chart :options="bar2" :autoresize='true'/>
          </DataFrame><br>
          <DataFrame :width='518' :height='336' frameTitle="使用最多的数据标签" :rightFunc='frameSet2'>
            <div class="worldcloud"></div>
          </DataFrame>
        </div>
        <div class="colum">
          <DataFrame :width='825' :height='650' frameTitle="数据生命周期" :rightFunc='frameSet3'>
            <div class="row" style="height: 335px; text-align:center">
              <div class="data_block">
                <div class="block_name">{{data_block[0].name}}</div>
                <ul class="block_list">
                  <li :class="['list_name',{current: liveTitle===list.name}]" v-for="list in data_block[0].lists" :key="list.id" @click="changeChart(list.name)">{{list.name}}</li>
                </ul>
                <ul class="block_list">
                  <li class="list_data" v-for="list in data_block[0].lists" :key="list.id">{{list.value}}</li>
                </ul>
                <ul class="block_list">
                  <li class="list_unit" v-for="list in data_block[0].lists" :key="list.id">{{list.unit}}</li>
                </ul>
              </div>
              <div class="data_arrow"></div>
              <div class="data_block">
                <div class="block_name">{{data_block[1].name}}</div>
                <ul class="block_list">
                  <li class="list_name" v-for="list in data_block[1].lists" :key="list.id">{{list.name}}</li>
                </ul>
              </div>
              <div class="data_arrow" style="animation-delay: -1s;"></div>
              <div class="colum">
                <div class="data_block">
                  <div class="block_name">{{data_block[2].name}}</div>
                  <ul class="block_list">
                    <li class="list_name" v-for="list in data_block[2].lists" :key="list.id">{{list.name}}</li>
                  </ul>
                  <ul class="block_list">
                    <li class="list_data" v-for="list in data_block[2].lists" :key="list.id">{{list.value}}</li>
                  </ul>
                  <ul class="block_list">
                    <li class="list_unit" v-for="list in data_block[2].lists" :key="list.id">{{list.unit}}</li>
                  </ul>
                </div>
                <div class="data_block block_inline">
                  <div class="block_name">{{data_block[3].name}}</div>
                  <span class="block_data">{{data_block[3].value}}</span>
                  <span class="block_unit">{{data_block[3].unit}}</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="chart_option">
                <span class="chart_title">{{liveTitle}}</span>
                <span class="chart_line"></span>
                <select class="frame_option">
                  <option value="">近期</option>
                  <option value="">一个月内</option>
                  <option value="">一年内</option>
                </select>
              </div>
            </div>
            <div class="chart_wrap">
              <v-chart :options="line1" :autoresize='true'/>
            </div>
          </DataFrame>
        </div>
        <div class="colum">
          <DataFrame :width='518' :height='390' frameTitle="与各单位数据共享情况" :rightFunc='frameSet3'>
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
          </DataFrame><br>
          <DataFrame :width='518' :height='246' frameTitle="数据服务接口使用情况" :rightFunc='frameSet3'>
            <ul class="port_list">
              <li v-for="port in ports" :key="port.id">
                <span class="port_name">{{port.name}}</span>
                <span class="port_unit">{{port.unit}}</span>
                <span class="port_amount">{{port.amount}}</span>
              </li>
            </ul>
          </DataFrame>
        </div>
      </div>
    </div>
</template>

<script>
import dataBulbs from '../common/dataBulbs'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import "echarts-wordcloud";

export default {
  name: 'content-index',
  components: {
      'DataBulbs': dataBulbs,
  },
  data:function(){
    const bar1_X = [20939, 10273, 8483,5341, 4212, 3223,5632, 4523],
        bar1_Y = ['主体登记类','主体监管类','许可审批类','食品监管类','特种设备监管类','内部管理类','消费维权类','执法办案类'];
    return{
      frameSet_default: {
        btnTitle: '工单处理',
        url: 'https://www.guancha.cn/',
        date: '（11月28日更新）',
        drops: [{
            optionText: '累计',
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
      frameSet1: {
        drops: [{
            optionText: '一周内',
            optionVal: '1',
          },{
            optionText: '一月内',
            optionVal: '2',
          },{
            optionText: '一年内',
            optionVal: '3',
          }
        ]
      },
      frameSet2: {
        drops: [{
            optionText: '一周内',
            optionVal: '1',
          },{
            optionText: '一月内',
            optionVal: '2',
          },{
            optionText: '一年内',
            optionVal: '3',
          }
        ]
      },
      frameSet3: {
        drops: [{
            optionText: '24小时',
            optionVal: '1',
          },{
            optionText: '38小时',
            optionVal: '2',
          },{
            optionText: '72小时',
            optionVal: '3',
          }
        ]
      },
      bulbs: [
        {
          title: '资源目录',
          amount: '1864',
          unit: '个',
          color: 'yellow'
        },{
          title: '数据归集源',
          amount: '52',
          unit: '个',
          color: 'cyan'
        },{
          title: '汇聚数据',
          amount: '15112',
          unit: '万条',
          color: 'blue'
        },{
          title: '数据共享单位',
          amount: '48',
          unit: '家',
          color: 'purple'
        },{
          title: '数据服务接口',
          amount: '12',
          unit: '个',
          color: 'pink'
        },{
          title: '资源项',
          amount: '12.3561',
          unit: '万个',
          color: 'purple'
        },{
          title: '传输质量校核规则',
          amount: '2130',
          unit: '个',
          color: 'pink'
        },{
          title: '储存空间',
          amount: '21.2',
          unit: 'T',
          color: 'green'
        },{
          title: '与外部门共享资源项',
          amount: '524',
          unit: '个',
          color: 'cyan'
        },{
          title: '接入应用系统',
          amount: '8',
          unit: '个',
          color: 'yellow'
        }
      ],
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
        },{
          name: '多证合一',
          send: '2700',
          receive: '2',
          frequency: '2小时',
          time: '24:00',
        },{
          name: '联合惩戒',
          send: '1',
          receive: '4',
          frequency: '2小时',
          time: '24:00',
        },{
          name: '简易注销',
          send: '20',
          receive: '20',
          frequency: '2小时',
          time: '24:00',
        }
      ],
      data_block: [
        {
          name: '数据产生',
          lists: [
            {
              name: '登记数据',
              value: '2142',
              unit: '条'
            },{
              name: '许可数据',
              value: '301',
              unit: '条'
            },{
              name: '处罚数据',
              value: '112',
              unit: '条'
            },{
              name: '监管数据',
              value: '2034',
              unit: '条'
            },{
              name: '诉求数据',
              value: '1511',
              unit: '条'
            },{
              name: '其他',
              value: '229',
              unit: '条'
            }
          ]
        },{
          name: '数据存储',
          lists: [
            { name: '主体库', },{ name: '证照库', },{ name: '案件库', },{ name: '监管库', },{ name: '其他库', }
          ]
        },{
          name: '数据应用',
          lists: [
            {
              name: '查询应用',
              value: '1.123',
              unit: '万条'
            },{
              name: '接口服务',
              value: '1.021',
              unit: '万条'
            },{
              name: '数据上报',
              value: '3.125',
              unit: '万条'
            },{
              name: '数据共享',
              value: '1.192',
              unit: '万条'
            },{
              name: '数据落地',
              value: '1.396',
              unit: '万条'
            }
          ]
        },{
          name: '数据清理及归档',
          value: '8021',
          unit: '条'
        }
      ],
      liveTitle: '',
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
      ports: [
        {
          name: '企业查询接口',
          amount: '5.2747',
          unit: '万次数'
        },{
          name: '企业比对接口',
          amount: '4.7293',
          unit: '万次数'
        },{
          name: '企业信息验证接口',
          amount: '2.3641',
          unit: '万次数'
        },{
          name: '公示信息查询接口',
          amount: '2.1823',
          unit: '万次数'
        },{
          name: '黑名单查询接口',
          amount: '1.2573',
          unit: '万次数'
        }
      ],
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
            width: 'auto',
            height: '200',
        top:20,
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
                barWidth: 9,
                itemStyle:{
                    emphasis: {
                        barBorderRadius: 5
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
      bar2: {
        backgroundColor:'transparent',// 背景透明
        tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  textStyle:{
                  fontSize:12
              }
              }
          },
          legend: {
              data: ['数据采集问题（个）', '数据共享问题（个）', '完工率'],
          top:15,		
          textStyle: {
                      color: '#9efff8',
                      fontSize:12
                  }
          },
          grid: {
              x:10,
          width: '485',
              height: '180',
          containLabel: true
          },
          xAxis: 
              {
                  type: 'category',
                  data: ['11/28', '11/29', '11/30', '12/1', '12/2', '12/3', '12/4'],
                  axisPointer: {
                      type: 'shadow'
                  },
            axisLine:{
                    lineStyle:{
                      color:'rgba(158, 255, 248, 1)',
                      width:2
                    }
                  },
            axisTick:{
                  show:false // 坐标轴小标记
                  },
            axisLabel: {
                  textStyle: {
                      color: '#9efff8',
                      fontSize:12
                  }
              },
              },
          yAxis: [
              {
                  type: 'value',
                  min: 0,
                  max: 2.5,
                  interval: 0.5,			
            splitLine: {
                      show: true,				
                      lineStyle:{
                          color: ['#1d427c'],
                type:'dashed'
                      }
                  },
            axisLabel: {
                    textStyle: {
                      color: '#9efff8',
                      fontSize:12
                    }
              },
              axisLine:{
                    show:false // 是否显示分割线
                  },
            axisTick:{
                  show:false // 坐标轴小标记
              },
              },		
              {
                  type: 'value',
                  min: 0,
                  max: 100,
                  interval: 20,
            splitLine: {
                      show: true,
              color:'1d427c',
                      lineStyle:{
                          color: ['#1d427c'],
                type:'dashed'
                      }
                  },
            axisLabel: {
                    textStyle: {
                      color: '#9efff8',
                      fontSize:12				
                    },
              formatter: '{value} %'
                  },
            axisLine:{
                    show:false // 是否显示分割线
                  },
            axisTick:{
                  show:false // 坐标轴小标记
              },
              }
          ],
          series: [
              {
                  name: '数据采集问题（个）',
                  type: 'bar',
                  data: [0.1, 0.1, 0.2, 1, 0.1, 0.3, 0.2],
            barWidth: 11,
            itemStyle:{
              normal:{
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: '#fc3d82'
                              }, {
                                  offset: 1,
                                  color: '#7901ad'
                              }]), // 图表渐变色
                      },
              
                  },
              },
              {
                  name: '数据共享问题（个）',
                  type: 'bar',
                  data: [0.1, 0.1, 0.2, 2, 0.1, 0.6, 0.2],
            barWidth: 11,
            itemStyle:{
              normal:{
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: '#60bcff'
                              }, {
                                  offset: 1,
                                  color: '#7a3cfd'
                              }]), // 图表渐变色
                      },
              
                  },
              },
              {
                  name: '完工率',
                  type: 'line',
            showSymbol: false,
                  hoverAnimation: false,
                  yAxisIndex: 1,
                  data: [100, 100, 100, 60, 80, 100, 100],
            itemStyle:{
              normal:{
                          color: '#ffe66d'
                      },
              
                  },
              }
          ]
      },
      line1: {
        backgroundColor:'transparent',// 背景透明
        grid: {
              x:10,
          top:25,
          width: '780',
              height: '200',
          containLabel: true
          },
        xAxis: {
              type: 'category',
              data: ['2019/11/4', '2019/11/10', '2019/11/16', '2019/11/22', '2019/11/28', '2019/12/4', '2019/12/10', '2019/12/16', '2019/12/22'],
          axisPointer: {
                      type: 'shadow'
                  },
            axisLine:{
                    lineStyle:{
                      color:'rgba(158, 255, 248, 1)',
                      width:1
                    }
                  },
              axisTick:{
                  show:false // 坐标轴小标记
                  },
            axisLabel: {
                  textStyle: {
                      color: '#9efff8',
                      fontSize:12
                    }
                  },
          },
          yAxis: {
                  type: 'value',
                  min: 0,
                  max: 2500,
                  interval: 500,			
            splitLine: {
                      show: true,				
                      lineStyle:{
                          color: ['#1d427c'],
                type:'dashed'
                      }
                  },
            axisLabel: {
                    textStyle: {
                      color: '#9efff8',
                      fontSize:12
                    }
              },
              axisLine:{
                    show:false // 是否显示分割线
                  },
            axisTick:{
                  show:false // 坐标轴小标记
                  },
          },
          series: {
              name: '模拟数据',
              type: 'line',
              smooth: true,
              symbol: 'none',
              sampling: 'average',
              itemStyle: {
                      color: 'rgb(222, 187, 255)'
              },
              areaStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(200, 45, 255, .9)'
                      }, {
                          offset: 1,
                          color: 'rgba(3, 25, 80, .1)'
                      }])
              },
          data: [300, 1500, 200, 2000, 700, 1800, 300, 1700, 200],
          }
      },
    }
  },
  mounted(){
    this.liveTitle = this.data_block[0].lists[0].name;

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
            // right: null,
            // bottom: null,
            // width: 300,
            // height: 200,
            // top: 20,
            data: data.value
          }]
        })
      }
  },
  methods: {
    changeChart(name){
      this.liveTitle = name;
    }
  },
  
}
</script>

<style scoped>
  .bulb_list>>>li{
    width: calc((100% - 60px)/5);
  }

</style>