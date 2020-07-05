<template>
  <div class="date_search_wrap">
      <ul class="date_list">
          <li v-for="(radio, index) in radioList" :key="index">
              <input type="radio" :name="groupName" :id="groupName+index" :value="radio" v-model="radioModel" @change="$emit('timeSelect', radioModel)">
              <label :for="groupName+index">{{radio}}</label>
          </li>
      </ul>
      <el-date-picker class="inline_dateRange" v-model="dateRange" type="daterange" placeholder="选择日期"  start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      <button class="dateSearch" @click="$emit('timeSelect', dateRange)">查询</button>
  </div>
</template>
<script>
export default {
  name: "dateSearch",
  props: {
      groupName: String,
      radioList: Array,
  },
  data () {
    return {
        radioModel: '今日',
        dateRange: ''
    };
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="css" scoped>
</style>