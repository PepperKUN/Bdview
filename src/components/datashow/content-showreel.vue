<template>
    <div class="content">
        <Tab v-model="showTabIndex" :tabs="tabs"></Tab>
        <component :is="currentTabComponent" :class="[showTabIndex.diff?'tab_right':'tab_left']"></component>
    </div>
</template>

<script>
import Tab from '../common/tab-type1'
import showTab_c1 from './showTab_c1'
import showTab_c2 from './showTab_c2'
import showTab_c3 from './showTab_c3'
import showTab_c4 from './showTab_c4'

export default {
    props: {

    },
    data() {
        return {
            showTabIndex: {
                index: 0,
                diff: true
            },
            tabs: ['总体情况', '登记类主题', '统一审批类主题', '特种设备类主题']
        };
    },
    computed: {
        currentTabComponent: function(){
            return 'showTab_c' + (this.showTabIndex.index + 1);
        }
    },
    methods: {
    },
    components: {
        Tab,
        showTab_c1,
        showTab_c2,
        showTab_c3,
        showTab_c4,
    },
};
</script>

<style lang="css">

</style>
