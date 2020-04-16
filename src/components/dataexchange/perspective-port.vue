<template>
    <div class="content">
        <div class="content_title"><span>{{contentTitle}}</span></div>
        <div class="dataTree">
            <div class="tree_block blue">
                <div class="tree_name">{{dataTree.treeName}}</div>
                <div class="tree_info" v-html="dataTree.des"></div>
            </div>
            <div class="tree_path"></div>
            <ul class="tree_wrap">
                <li class="tree_block cyan" v-for="block in dataTree.childTree" :key="block.id">
                    <div class="tree_name">{{block.treeName}}</div>
                    <div class="tree_info" v-html="block.des"></div>
                    <ol class="tree_wrap" v-if="block.childTree">
                        <li class="tree_bar" v-for="bar in block.childTree" :key="bar.id">
                            <div class="tree_name">{{bar.treeName}}</div>
                            <span class="call_times">{{bar.callTimes}}</span>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            contentTitle: '接口服务监控',
            dataTree: {
                treeName: '企业查询接口',
                des: '<i>4</i><span>个使用者（</span><i>4</i><span>个内部）\n调用</span><i>12542</i><span>次</span>',
                childTree: [
                    {
                        treeName: '一部手机办事通（内部）',
                        des: '<span>调用</span><i>5621</i><span>次</span>'
                    },{
                        treeName: '审批系统（内部）',
                        des: '<span>调用</span><i>1235</i><span>次</span>'
                    },{
                        treeName: '12315系统（内部）',
                        des: '<span>调用</span><i>1235</i><span>次</span>'
                    },{
                        treeName: '案件系统（内部）',
                        des: '<span>调用</span><i>1235</i><span>次</span>'
                    }
                ]
            }
        };
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

    },
};
</script>

<style scoped lang="css">
    .tree_block{
        margin-left: 50px;
        margin-right: 50px;
    }
    .tree_path{
        width: 876px;
    }
    .tree_wrap>.cyan{
        right: 12px;
    }
</style>
