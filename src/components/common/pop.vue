<template>
    <div class="pop_wrap" v-show="show" >
        <div class="pop_mask"  @click="hidePop"></div>
        <div class="pop_standard" :style="{width:width, height:height}">
            <DataFrame :frameTitle="title" rightFunc>
                <template v-slot:title_corner>
                    <i class="iconfont icon-close pop_close" @click="hidePop"></i>
                </template>
                <el-scrollbar :native="false" style="height:100%">
                    <slot></slot>
                </el-scrollbar>
            </DataFrame>
        </div>
    </div>
</template>
<script>
export default {
  name: "pop",
  model:{
      prop: 'show',
      event: 'close'
  },
  props: {
      show:{
          type: Boolean,
          default: false,
      },
      title: String,
      width: String,
      height: String,
  },
  data () {
    return {
    };
  },
  mounted() {
  },
  methods: {
      hidePop(){
          this.$emit('close', false);
      }
  }
}
</script>
<style lang="css" >
    
</style>