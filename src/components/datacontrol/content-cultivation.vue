<template>
    <div class="content">
        <Tab v-model="cultiTabIndex" :tabs="tabs"></Tab>
        <component :is="currentTabComponent"></component>
    </div>
</template>

<script>
import Tab from '../common/tab-type1'
import cultiTab_c1 from './cultiTab_c1'
import cultiTab_c2 from './cultiTab_c2'
import cultiTab_c3 from './cultiTab_c3'

export default {
    props: {

    },
    data() {
        return {
            cultiTabIndex: 0,
            tabs: ['数据治理', '工单处理', '数据标签']
        };
    },
    computed: {
        currentTabComponent: function(){
            return 'cultiTab_c' + (this.cultiTabIndex + 1);
        }
    },
    created() {

    },
    mounted() {
    },
    watch: {

    },
    methods: {

    },
    components: {
        Tab,
        cultiTab_c1,
        cultiTab_c2,
        cultiTab_c3,
    },
};
</script>

<style scoped lang="css">
    .part1{
        width: 836px; 
    }
    .part2{
        width: 685px;
    }
    .part3{
        width: 330px;
    }
    .part1>>>.bulb_narrow{
        width: calc(100% - 130px);
    }
    .part1>.bulb_list>>>li{
        width: calc((100% - 40px)/4);
    }
    .part2>.bulb_list>>>li{
        width: calc((100% - 60px)/4);
    }
    .part3>.bulb_list>>>li{
        width: calc((100% - 30px)/2);
    }
</style>
