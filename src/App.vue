<template>
  <div id="app">
    <el-scrollbar :native="false" style="height:100%">
      <DataHeader headText="云南省市场监督管理局数据中心" menuShow/>
      <router-view ></router-view>
    </el-scrollbar>
  </div>
</template>
<script>
import dataHead from './components/common/datahead.vue'


export default {
  name: 'App',
  components: {
    'DataHeader': dataHead,
  },
  data:function(){
    return{
      
    }
  }
}
</script>

<style>
</style>
