<template>
    <div class="row flag_wrap">
        <DataFlag flag='按基础目录分类查看' :width="flagWidth">
            <tree class="flag_tree" :nodes="nodes" :setting="setting"/>
        </DataFlag>
        <DataFlag flag='按基础目录分类查看' :width="flagWidth">
            <tree class="flag_tree" :nodes="nodes" :setting="setting"/>
        </DataFlag>
        <DataFlag flag='按基础目录分类查看' :width="flagWidth">
            <tree class="flag_tree" :nodes="nodes" :setting="setting"/>
        </DataFlag>
        <DataFlag flag='按基础目录分类查看' :width="flagWidth">
            <tree class="flag_tree" :nodes="nodes" :setting="setting"/>
        </DataFlag>
    </div>
</template>

<script>
import dataFlag from '../common/dataFlag'
import tree from "vue-giant-tree";


export default {
    name: 'cataTab_c2',
    props: {

    },
    data() {
               
        return {
            flagWidth: 'calc((100% - 160px)/4)',
            setting: {
                check: {
                    enable: false
                },
                data: {
                    simpleData: {
                        enable: true,
                        pIdKey: "pid",
                    },
                },
                view: {
                    showIcon: true,
                    addHoverDom: this.addHoverDom,
                    removeHoverDom: this.removeHoverDom,
                }
            },
            nodes: [
                    { id:1, pid:0, name:"目录", open:true},
                    { id:11, pid:1, name:"随意勾选 1-1", open:false},
                    { id:111, pid:11, name:"随意勾选 1-1-1"},
                    { id:112, pid:11, name:"随意勾选 1-1-2"},
                    { id:12, pid:1, name:"随意勾选 1-2", open:true},
                    { id:121, pid:12, name:"随意勾选 1-2-1"},
                    { id:122, pid:12, name:"随意勾选 1-2-2"},
            ]
        }
    },
    computed: {

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
        'DataFlag': dataFlag,
        tree,
    },
};
</script>

<style>
</style>
