<template>
  <div class="content content_rise">
      <div class="row">
          <DataFrame :width='1892' :height='165' frameTitle="数据汇聚总览" rightFunc>
              <ul class="rect_list">
                  <li v-for="rect in rect_list" :key="rect.id">
                      <span class="name">{{rect.name}}</span>
                      <div class="rect_data">
                        <span class="number">{{rect.number}}</span>
                        <span class="unit">条</span>
                      </div>
                  </li>
              </ul>
          </DataFrame>
      </div>
      <div class="row">
          <div class="colum">
              <DataFrame :width='1892' :height='750' frameTitle="数据汇聚总览" rightFunc>
                  <div class="gather_process_wrap">
                      <div class="data_source process_block_bg">
                          <h4>{{source_data.name}}</h4>
                          <ul class="source_block" v-for="(source, index) in source_data.children" :key="index" :class="[source.icon?'vert':'', 'source_data_'+(index+1)]">
                              <div class="block_title" v-if="source.icon">
                                  <i class="iconfont" :class="source.icon"></i>
                                  <span class="name">{{source.title}}</span>
                              </div>
                              <li v-for="list in source.list" :key="list.id">
                                  <span>{{list}}</span>
                              </li>
                          </ul>
                      </div>
                    <ul class="source_stream_list">
                        <li v-for="stream in source_stream" :key="stream.id">
                            <span class="time">{{stream.time}}</span>
                            <div class="stream_group">
                                <span class="cycle">{{stream.cycle}}</span>
                                <span class="number">{{stream.number}}</span>
                                <span class="unit">条</span>
                            </div>
                        </li>
                    </ul>
                    <div class="data_filter process_block_bg">
                        <h4>{{filter_data.name}}</h4>
                        <ul class="gear_list">
                            <li v-for="gear in filter_data.gears" :key="gear.id">
                                <span class="text">{{gear}}</span>
                                <div class="filter_wave"></div>
                                <div class="filter_gear"></div>
                            </li>
                        </ul>
                        <div class="filter_block">
                            <h6>{{filter_data.block.name}}</h6>
                            <span class="number">{{filter_data.block.number}}</span>
                            <span class="unit">条</span>
                        </div>
                    </div>
                    <div class="filter_stream">
                        <span class="number">{{filter_stream}}</span>
                        <span class="unit">条</span>
                    </div>
                    <div class="data_central process_block_bg">
                        <h4>{{central_data.name}}</h4>
                        <ul class="main_list">
                            <li v-for="list in central_data.list1" :key="list.id">
                                <span class="name">{{list.name}}</span>
                                <div class="main_list_data">
                                    <span class="number">{{list.number}}</span>
                                    <span class="unit">条</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="sub_list">
                            <h6>{{central_data.list2.name}}</h6>
                            <li v-for="list in central_data.list2.list" :key="list.id">
                                <span class="name">{{list.name}}</span>
                                <div class="sub_list_data">
                                    <span class="number">{{list.number}}</span>
                                    <span class="unit">条</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                  </div>
              </DataFrame>
          </div>
      </div>
  </div>
</template>
<script>

import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

export default {
  name: "content-gather",
  data () {
    return {
        rect_list: [
            {
                name: '市场准入',
                number: '2,122,234'
            },{
                name: '市场监管',
                number: '3,562,908'
            },{
                name: '行政执法',
                number: '121,452'
            },{
                name: '政务服务',
                number: '91,098'
            },{
                name: '质量基础设施',
                number: '852,547'
            },{
                name: '综合管理',
                number: '561,213'
            },{
                name: '其他',
                number: '712,959'
            }
        ],
        source_data: {
            name: '数据源',
            children:[
                {
                    list: ['主体登记','公示监管','行政执法','小微企业']
                },{
                    
                    list: ['食品审批','药品审批','特种设备监管','标准化管理','计量监管']
                },{
                    list: ['行政审批平台(除食品, 药品)']
                },{
                    icon: 'icon-zongju',
                    title: '总局',
                    list: ['老赖黑名单','一人有限公司','禁用字号']
                },{
                    icon: 'icon-farenku',
                    title: '法人库',
                    list: ['法人基本信息','监管、处罚信息']
                },{
                    icon: 'icon-platform',
                    title: '协同监管平台',
                    list: ['归集许可数据','归集处罚数据']
                }
            ]
        },
        source_stream: [
            {
                cycle: '实时',
                number: '635',
                time: '12:45:03'
            },{
                cycle: '2小时',
                number: '635',
                time: '12:45:03'
            },{
                cycle: '2小时',
                number: '635',
                time: '12:45:03'
            },{
                cycle: '一天',
                number: '635',
                time: '12:45:03'
            },{
                cycle: '2小时',
                number: '635',
                time: '12:45:03'
            },{
                cycle: '2小时',
                number: '635',
                time: '12:45:03'
            }
        ],
        filter_data:{
            name: '数据清洗',
            gears: ['数据完整性\n检查','数据合规性\n检查','数据关联性\n检查'],
            block: {
                name: '数据质量异常',
                number: '13,123',
            }
        },
        filter_stream: '121,376',
        central_data: {
            name: '数据中心',
            list1: [
                {
                    name: '市场准入',
                    number: '42,349'
                },{
                    name: '市场监管',
                    number: '42,349'
                },{
                    name: '行政执法',
                    number: '42,349'
                },{
                    name: '政务服务',
                    number: '42,349'
                },{
                    name: '综合管理',
                    number: '42,349'
                },{
                    name: '质量基础设施',
                    number: '42,349'
                }
            ],
            list2: {
                name: '异常数据',
                list: [
                    {
                        name: '特种设备系统',
                        number: '42,349'
                    },{
                        name: '计量系统',
                        number: '42,349'
                    },{
                        name: '质监行政审批',
                        number: '42,349'
                    },{
                        name: '药品行政审批监管',
                        number: '42,349'
                    }
                ]
            }
        }
    };
  },
  mounted() {
  },
  methods: {

  },
  components: {
  }
}
</script>
<style lang="css" >
    
</style>