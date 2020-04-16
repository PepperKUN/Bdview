<template>
  <ul class="normal_tab">
      <li v-for="(tab, index) in tabs" :key="index" @click="indexChange(index)" :class="{current: tabIndex===index}">{{tab}}</li>
  </ul>
</template>
<script>
export default {
    name: "",
    model: {
        prop: 'index',
        event: 'change'
    },
    props: {
        tabs: Array,
        index: Number
    },
    data () {
        return {
            tabIndex: 0,
        };
    },
    mounted() {
    },
    methods: {
        indexChange(index){
            this.tabIndex = index;
            this.$emit('change', this.tabIndex);
        },
    }
}
</script>
<style lang="css" scoped>
</style>