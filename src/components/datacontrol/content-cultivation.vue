<template>
  <div class="content content_rise">
      <dateFilter groupName="dateRadio" :radioList="['今日','近周','近月','累计']" @timeSelect="passModel"/>
      <div class="serve_center_wrap">
          <div class="serve_center">
              <div class="center_line-wrap">
                <div class="center_line"></div>
              </div>
          </div>
          <div class="serve_department" v-for="(serve, index) in serve_department_list" :key="index" :class="'departmentBlock_'+(index+1)">
            <h4>
                <span class="name">{{serve.name}}</span>
                <span class="unit">共</span>
                <span class="number">{{serve.number}}</span>
                <span class="unit">条</span>
                <a :href="serve.showMore" v-if="serve.showMore" class="listMore">更多<i class="iconfont icon-more"></i></a>
            </h4>
            <ul class="serve_child_list">
                <li v-for=" child in serve.children" :key="child.id">
                    <span class="name">{{child.name}}</span>
                    <span class="number">{{child.number}}</span>
                    <span class="unit">条</span>
                </li>
            </ul>
          </div>
          <ul class="stream_line_list">
              <li v-for=" (stream, index) in stream_line" :key="index" :class="'stream_line_'+(index+1)">
                  <span class="cycle">{{stream.cycle}}</span>
                  <span class="type">{{stream.type}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import dateFilter from '../common/dateSearch'
export default {
  name: "",
  data () {
    return {
        dateModel:'',
        serve_department_list:[
            {
                name: '国家总局',
                number: '328,635',
                children: [
                    {
                        name: '市场准入',
                        number: '126,295',
                    },{
                        name: '市场监管',
                        number: '126,295',
                    },{
                        name: '行政执法',
                        number: '126,295',
                    },{
                        name: '基础质量设施',
                        number: '126,295',
                    }
                ]
            },{
                name: '省级部门共享',
                number: '344,460',
                showMore: '###',
                children: [
                    {
                        name: '省税务局',
                        number: '126,295',
                    },{
                        name: '省发改委',
                        number: '126,295',
                    },{
                        name: '省环境厅',
                        number: '126,295',
                    },{
                        name: '省烟草局',
                        number: '126,295',
                    },{
                        name: '省人社局',
                        number: '126,295',
                    },{
                        name: '省科技厅',
                        number: '126,295',
                    },{
                        name: '省司法局',
                        number: '126,295',
                    },{
                        name: '省教育厅',
                        number: '126,295',
                    },{
                        name: '省财政厅',
                        number: '126,295',
                    },{
                        name: '省工信委',
                        number: '126,295',
                    },{
                        name: '省国土局',
                        number: '126,295',
                    },{
                        name: '省纪委',
                        number: '126,295',
                    },{
                        name: '省公安厅',
                        number: '126,295',
                    },{
                        name: '省住建局',
                        number: '126,295',
                    },{
                        name: '省测绘局',
                        number: '126,295',
                    }
                ]
            },{
                name: '政银合作',
                number: '328,635',
                showMore: '###',
                children: [
                    {
                        name: '工商银行',
                        number: '126,295',
                    },{
                        name: '中国银行',
                        number: '126,295',
                    },{
                        name: '广发银行',
                        number: '126,295',
                    },{
                        name: '建设银行',
                        number: '126,295',
                    }
                ]
            },{
                name: '省政务服务平台',
                number: '328,635',
                children: [
                    {
                        name: '市场准入',
                        number: '126,295',
                    },{
                        name: '市场监管',
                        number: '126,295',
                    },{
                        name: '行政执法',
                        number: '126,295',
                    }
                ]
            },{
                name: '一部手机办事通',
                number: '328,635',
                children: [
                    {
                        name: '市场准入',
                        number: '126,295',
                    },{
                        name: '市场监管',
                        number: '126,295',
                    }
                ]
            },{
                name: '互联网+监管',
                number: '328,635',
                children: [
                    {
                        name: '市场准入',
                        number: '126,295',
                    },{
                        name: '市场监管',
                        number: '126,295',
                    }
                ]
            },{
                name: '法人库',
                number: '328,635',
                children: [
                    {
                        name: '市场准入',
                        number: '126,295',
                    },{
                        name: '市场监管',
                        number: '126,295',
                    },{
                        name: '行政执法',
                        number: '126,295',
                    }
                ]
            },{
                name: '数据落地',
                number: '344,460',
                children: [
                    {
                        name: '昆明',
                        number: '0',
                    },{
                        name: '曲靖市',
                        number: '126,295',
                    },{
                        name: '玉溪市',
                        number: '126,295',
                    },{
                        name: '邵通市',
                        number: '126,295',
                    },{
                        name: '保山市',
                        number: '126,295',
                    },{
                        name: '丽江市',
                        number: '126,295',
                    },{
                        name: '普洱市',
                        number: '126,295',
                    },{
                        name: '临沧市 ',
                        number: '126,295',
                    },{
                        name: '德宏州',
                        number: '126,295', 
                    },{
                        name: '怒江州',
                        number: '126,295',
                    },{
                        name: '迪庆州',
                        number: '126,295',
                    },{
                        name: '大理州',
                        number: '126,295',
                    },{
                        name: '楚雄州',
                        number: '126,295',
                    },{
                        name: '红河州',
                        number: '126,295',
                    },{
                        name: '文山州',
                        number: '126,295',
                    },{
                        name: '西双版纳州',
                        number: '126,295',
                    }
                ]
            }
        ],
        stream_line:[
            {
                cycle: '2小时',
                type: '数据库'
            },{
                cycle: '2小时',
                type: '数据库/文件'
            },{
                cycle: '2小时',
                type: '文件'
            },{
                cycle: '2小时',
                type: '接口'
            },{
                cycle: '2小时',
                type: '接口'
            },{
                cycle: '2小时',
                type: '接口'
            },{
                cycle: '2小时',
                type: '数据库'
            },{
                cycle: '一天',
                type: '数据库'
            }
        ]
    };
  },
  mounted() {
  },
  methods: {
      passModel(data){
          this.dateModel = data;
      }
  },
  components:{
      dateFilter
  }
}
</script>
<style lang="css" >
</style>