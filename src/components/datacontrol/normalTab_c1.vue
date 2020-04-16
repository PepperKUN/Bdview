<template>
  <div class="table_wrap">
        <table class="normal_table">
            <thead>
                <tr>
                    <th v-for="item in table.thead" :key="item.id">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in table.tbody" :key="index">
                    <td>
                        <a href="###">{{item.code}}</a>
                    </td>
                    <template v-for="(object, index2) in item">
                        <td :key="index2" v-if="index2!=='code'">{{object}}</td>
                    </template>
                </tr>
            </tbody>
        </table>
        <el-pagination background layout="prev, pager, next" :total="1000" :pager-count="17"></el-pagination>
  </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {
        table:{
            thead: ['工单编号','处理状态','处理人员','业务类型','优先级','处理期限','是否关注','创建人', '创建时间'],
            tbody: [
                {
                    code: '2019138291',
                    stat: '待办理',
                    staff: '张三',
                    type: '登记',
                    priority: '高',
                    deadline: '2019-12-25',
                    isFocus: '是',
                    founder: '李思',
                    foundTime: '2019-12-20'
                },{
                    code: '2019382892',
                    stat: '待办理',
                    staff: '张三',
                    type: '监管',
                    priority: '中',
                    deadline: '2019-12-27',
                    isFocus: '否',
                    founder: '李思',
                    foundTime: '2019-12-20'
                },{
                    code: '201929283',
                    stat: '待办理',
                    staff: '张三',
                    type: '许可',
                    priority: '低',
                    deadline: '2019-12-27',
                    isFocus: '否',
                    founder: '李思',
                    foundTime: '2019-12-20'
                },{
                    code: '201929210',
                    stat: '待办理',
                    staff: '张三',
                    type: '登记',
                    priority: '高',
                    deadline: '2019-12-27',
                    isFocus: '是',
                    founder: '李思',
                    foundTime: '2019-12-20'
                },{
                    code: '201929183',
                    stat: '待办理',
                    staff: '张三',
                    type: '监管',
                    priority: '中',
                    deadline: '2019-12-27',
                    isFocus: '否',
                    founder: '李思',
                    foundTime: '2019-12-20'
                },{
                    code: '201929170',
                    stat: '待办理',
                    staff: '张三',
                    type: '登记',
                    priority: '低',
                    deadline: '2019-12-27',
                    isFocus: '否',
                    founder: '李思',
                    foundTime: '2019-12-20'
                },
            ]
        },
    };
  },
  mounted() {
  },
  methods: {
  }
}
</script>