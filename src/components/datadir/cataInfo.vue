<template>
    <div class="content">
        <div class="breadCrumb">
            <span class="crumb_head">当前层级：</span>
            <template v-for="(crumb, index) in crumbs">
                <a href="###" class="crumb_item" :key="'item_'+index">{{crumb}}</a>
                <span class="crumb_gap" :key="'gap_'+index" v-if="crumbs[index+1]">></span>
            </template>
        </div>
        <div class="info_table">
            <table>
                <tr v-for="(line, index) in table" :key="'line_'+index">
                    <template v-for="(colum, index) in line">
                        <th :key="'th_'+index">{{colum.th}}</th>
                        <td :key="'td_'+index" :colspan="colum.span"><span>{{colum.td.text?colum.td.text:colum.td}}</span><span class="stat" :class="{'checked':colum.td.check.stat}" v-if="colum.td.check">{{colum.td.check.name}}</span></td>
                    </template>
                </tr>
            </table>
        </div>
        <div class="btn_wrap">
            <button class="close" @click="this.closeTab">关闭</button>
        </div>
    </div>
</template>
<script>

export default {
  name: "dataInfo",
  data () {
    return {
        crumbs: ['企业准入与退出','企业机构基本信息','主体身份代码'],
        window: '',
        table: [
                [
                    {
                        th: '资源项中文名称',
                        td: '主体身份代码'
                    },{
                        th: '资源项英文名称',
                        td: 'pri_pid'
                    },{
                        th: '国家局标准',
                        td: '《GS7-2006-市场准入与退出数据规范-市场主体分册》'
                    }
                ],[
                    {
                        th: '国家局数据元标识',
                        td: 'DA001'
                    },{
                        th: '数据类型',
                        td: {
                            text: '字符型',
                            check: {
                                name: '国家局指标',
                                stat: true,
                            }
                        },
                        span: 3,
                    }
                ],[
                    {
                        th: '字段长度',
                        td: '24'
                    },{
                        th: '字段名称',
                        td: 'pri_pid'
                    },{
                        th: '资源项所属目录',
                        td: '企业准入与退出——企业（机构）基本信息'
                    }
                ],[
                    {
                        th: '元数据标识符',
                        td: 'AC6000/00040'
                    },{
                        th: '元数据更新日期',
                        td: '2012-02-20'
                    },{
                        th: '资源提供方',
                        td: '登记注册处'
                    }
                ],[
                    {
                        th: '资源采集应用 ',
                        td: '内资登记'
                    },{
                        th: '资源项共享属性',
                        td: '依申请共享'
                    },{
                        th: '资源提供方',
                        td: '登记注册处'
                    }
                ],[
                    {
                        th: '资源项使用范围',
                        td: '法人库, 协同监管',
                        span: 5
                    }
                ],[
                    {
                        th: '是否涉密 ',
                        td: '是'
                    },{
                        th: '资源项摘要',
                        td: '主体身份代码'
                    },{
                        th: '版本号',
                        td: 'v1.0.1'
                    }
                ]
        ]
    };
  },
  mounted() {
  },
  methods: {
      closeTab(){
          window.close();
      }
  },
  components: {
  }
}
</script>
<style lang="css" >
</style>