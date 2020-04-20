<template>
    <div class="content">
        <Tab v-model="serveTabIndex" :tabs="tabs"></Tab>
        <component :is="currentTabComponent" :class="[serveTabIndex.diff?'tab_right':'tab_left']"></component>
    </div>
</template>
<script>
import Tab from '../common/tab-type1'
import serveTab_c1 from './serveTab_c1'
import serveTab_c2 from './serveTab_c2'

export default {
    data () {
        return {
            name: 'content-service',
            serveTabIndex: {
                    index: 0,
                    diff: true
            },
            tabs: ['数据共享监控', '接口服务监控']
        };
    },
    computed: {
        currentTabComponent: function(){
            return 'serveTab_c' + (this.serveTabIndex.index + 1);
        }
    },
    methods: {
        update(data){
            this.flow = data;
        }
    },
    components: {
        Tab,
        serveTab_c1,
        serveTab_c2,
    }
}
</script>
<style lang="css">
</style>