<template>
    <div class="content content_rise">
      <div class="row">
        <div class="colum" style="width:1074px">
          <div class="case_title">
            <h4>{{caseTitle}}</h4>
          </div>
          <ul class="source_list">
            <li v-for="source in  source_list" :key="source.id">
              <i class="iconfont" :class="source.icon"></i>
              <span class="name">{{source.name}}</span>
              <div class="souce_data">
                <span class="number">{{source.number}}</span>
                <span class="unit">{{source.unit}}</span>
              </div>
            </li>
          </ul>
          <ul class="arrow_list">
            <li class="a_yellow"></li>
            <li class="a_yellow"></li>
            <li class="a_yellow"></li>
            <li class="a_blue"></li>
            <li class="a_blue"></li>
            <li class="a_blue"></li>
          </ul>
          <ul class="database_list">
            <li v-for="database in database_list" :key="database.id">
              <span class="name">{{database.name}}</span>
              <div class="database_data">
                <span class="number">{{database.number}}</span>
                <span class="unit">{{database.unit}}</span>
              </div>
            </li>
          </ul>
          <ul class="department_list">
            <li v-for="department in department_list" :key="department.id">
              <span class="name">{{department.name}}</span>
              <div class="department_data">
                <span class="number">{{department.number}}</span>
                <span class="unit">{{department.unit}}</span>
              </div>
            </li>
          </ul>
          <div class="case_wrap"></div>
          <lottie class="line-anime" :options="defaultOptions" :width="690" :height="324" v-on:animCreated="handleAnimation"/>
        </div>
        <div class="colum">
          <DataFrame :width='797' :height='321' frameTitle="数据资源项统计（单位：个）" rightFunc>
            
          </DataFrame><br>
          <DataFrame :width='797' :height='581' frameTitle="总览" rightFunc>
            
          </DataFrame>
        </div>
      </div>
    </div>
</template>

<script>
// import echarts from 'echarts/lib/echarts'
import Lottie from 'vue-lottie';
import * as lineData from '../../assets/js/line.json';
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import "echarts-wordcloud";

export default {
  name: 'content-index',
  components: {
    Lottie,
  },
  data:function(){
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
      caseTitle: '2020年7月1日 数据汇聚、服务',
      source_list: [
        {
          name: '市场监管业务平台',
          icon: 'icon-shiju',
          number: '12,314',
          unit: '条'
        },{
          name: '国家市场监管总局',
          icon: 'icon-zongju',
          number: '41,856',
          unit: '条'
        },{
          name: '省法人库',
          icon: 'icon-farenku',
          number: '41,856',
          unit: '条'
        },{
          name: '协同监管平台',
          icon: 'icon-platform',
          number: '41,856',
          unit: '条'
        }
      ],
      database_list: [
        {
          name: '当日净化数据量',
          number: '12,314',
          unit: '条'
        },{
          name: '数据总量',
          number: '41,856',
          unit: '条'
        }
      ],
      department_list: [
        {
          name: '总局',
          number: '12,314',
          unit: '条'
        },{
          name: '一步手机办事通',
          number: '41,856',
          unit: '条'
        },{
          name: '互联网+监管',
          number: '41,856',
          unit: '条'
        },{
          name: '委办局',
          number: '41,856',
          unit: '条'
        },{
          name: '政银合作',
          number: '41,856',
          unit: '条'
        },{
          name: '市州',
          number: '41,856',
          unit: '条'
        },{
          name: '法人库',
          number: '41,856',
          unit: '条'
        },{
          name: '协同监管平台',
          number: '41,856',
          unit: '条'
        }
      ],
      defaultOptions: {animationData: lineData.default},
    }
  },
  mounted(){

  },
  methods: {
    handleAnimation: function (anim) {
        this.anim = anim;
    },
  },
  
}
</script>

<style scoped>
  .colum{
    position: relative;
  }
</style>