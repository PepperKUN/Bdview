<template>
  <div class="data-block" :style="{width: width+'px', height: height+'px'}">
      <div class="frame_head" v-if="frameTitle!=null">
        <h4 class="frame_title">{{frameTitle}}</h4>
        <a class="frame_more" v-if="linkDetect()===2" :href="rightFunc.url" target="_blank">
            <span>{{rightFunc.btnTitle}}</span>
            <i class="arrow_right"></i>
        </a>
        <router-link class="frame_more" v-if="linkDetect()===1" :to="rightFunc.url">
            <span>{{rightFunc.btnTitle}}</span>
            <i class="arrow_right"></i>
        </router-link>
        <span class="dateDes" v-if="rightFunc.date!=null">{{rightFunc.date}}</span>
        <select class="frame_option" v-if="rightFunc.drops!=null" v-model="dropvalue" @change="dropSelect(dropvalue)">
            <option v-for="drop in rightFunc.drops" :key="drop.id" :value="drop.optionVal">{{drop.optionText}}</option>
        </select>
        <slot name='title_corner'></slot>
      </div>
      <div class="frame_body" :class="{'fullHeight':frameTitle==null}">
          <slot></slot>
      </div>
      <ul class="frame_bg">
          <li class="corner c_leftTop"></li>
          <li class="corner c_rightTop"></li>
          <li class="corner c_leftBtm"></li>
          <li class="corner c_rightBtm"></li>
          <li class="border-horz b_top"></li>
          <li class="border-vert b_right"></li>
          <li class="border-horz b_btm"></li>
          <li class="border-vert b_left"></li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'dataFrame',
    model: {
        prop: 'val',
        event: 'change'
    },
    data: function(){
        return{
            dropvalue: '1',
        }
    },
    props: {
        width: Number,
        height: Number,
        frameTitle: String,
        val: String,
        rightFunc:{
            btnTitle: String,
            url: String,
            date: String,
            drops: Array,
        }
    },
    methods: {
        dropSelect(dropVal){
            this.$emit('change', dropVal);
        },
        linkDetect(){
            if(this.rightFunc.btnTitle===undefined){
                return false;
            }else if(this.rightFunc.url.startsWith("/")&&(this.rightFunc.target!=='blank')){
                return 1;
            }else{
                return 2;
            }
        }
    }   
}
</script>

<style>

</style>