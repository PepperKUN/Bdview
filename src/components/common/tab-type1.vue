<template>
    <ul class="cata-tab">
        <li class="tab_gap" :style="{width: gapWidth}"></li>
        <template v-for="(tab, index) in tabs" >
            <li :class="['tab_btn',{current: tabIndex===index}]" :key="index" @click="indexChange(index)">
                <span class="tab_text">{{tab}}</span>
            </li>
            <li class="tab_gap" :key="index +'s'" :style="{width: gapWidth}"></li>
        </template>
    </ul>
</template>

<script>

export default {
    name: 'TabType1',
    model: {
        prop: 'index',
        event: 'change'
    },
    props: {
        tabs: Array,
        index: Object
    },
    
    data: function(){
        return{
            tabIndex: 0,
            lastIndex: 0,
            gapWidth: '',
        }
    },
    mounted() {
        this.calcGapWidth();
    },
    methods: {
        indexChange(index){
            this.tabIndex = index;
            this.$emit('change', {
                index: this.tabIndex,
                diff: (this.tabIndex - this.lastIndex)>0,
            });
            this.lastIndex = index;
        },
        calcGapWidth(){
            const n = this.tabs.length;
            const w = n*185/(n+1);
            const p = 100/(n+1);
            this.gapWidth = 'calc('+ p + '%' + ' - ' + w + 'px)';
            // console.log(this.gapWidth);
            
        }
    }

}
</script>

<style>

</style>