<template>
    <div class="content">
        <Tab v-model="cataTabIndex" :tabs="tabs"></Tab>
        <component :is="currentTabComponent"></component>
    </div>
</template>

<script>

import Tab from '../common/tab-type1'
import cataTab_c1 from './cataTab_c1'
import cataTab_c2 from './cataTab_c2'
import cataTab_c3 from './cataTab_c3'

export default {
    name: 'content-index',
    components: {
        Tab,
        cataTab_c1,
        cataTab_c2,
        cataTab_c3,
    },
    data:function(){
        return{
            cataTabIndex: 0,
            tabs: ['资源目录概况', '资源目录展示', '资源目录查询']
        }
    },
    computed: {
        currentTabComponent: function(){
            return 'cataTab_c' + (this.cataTabIndex + 1);
        }
    },
    methods: {
    }
}
</script>

<style>

</style>