<template>
    <ul class="result_list">
        <li v-for="list in data" :key="list.id">
            <div class="label_name">
                <span>{{list.name}}</span><span :class="['label_type',list.labelColor]">{{list.type}}</span>
            </div>
            <div class="info">
                <span class="info_span" v-for="(info, index) in list.info" :key="info.id">
                    <span class="span_name">{{listName[index]}}</span>
                    <span>{{info}}</span>
                </span>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
  name: "ResultList",
  props:{
      data: Array,
      listName: Object
  },
  data () {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="css" >
</style>