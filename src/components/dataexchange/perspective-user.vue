<template>
    <div class="content content_rise">
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
                treeName: '一部手机办事通APP',
                des: '<i>13</i><span>个接口，调用</span><i>12542</i><span>次</span>',
                childTree: [
                    {
                        treeName: '许可类',
                        des: '<i>13</i><span>个接口，调用</span><i>12542</i><span>次</span>',
                        childTree: [
                            {
                                treeName: '名称信息查询接口',
                                callTimes: 1235
                            },{
                                treeName: '企业状态查询接口',
                                callTimes: 1235
                            },{
                                treeName: '企业基本信息查询接口',
                                callTimes: 1235
                            }
                        ]
                    },{
                        treeName: '政务类',
                        des: '<i>13</i><span>个接口，调用</span><i>12542</i><span>次</span>',
                        childTree: [
                            {
                                treeName: '发文查询接口',
                                callTimes: 1235
                            },{
                                treeName: '收文查询接口',
                                callTimes: 1235
                            },{
                                treeName: '发文详情查询接口',
                                callTimes: 1235
                            },{
                                treeName: '收文详情查询接口',
                                callTimes: 1235
                            }
                        ]
                    },{
                        treeName: '监管类',
                        des: '<i>13</i><span>个接口，调用</span><i>12542</i><span>次</span>',
                        childTree: [
                            {
                                treeName: '年报信息查询接口',
                                callTimes: 1235
                            },{
                                treeName: '年报详情查询接口',
                                callTimes: 1235
                            },{
                                treeName: '经营异常名录查询接口',
                                callTimes: 1235
                            },{
                                treeName: '小微企业查询接口',
                                callTimes: 1235
                            }
                        ]
                    },{
                        treeName: '案件类',
                        des: '<i>13</i><span>个接口，调用</span><i>12542</i><span>次</span>',
                        childTree: [
                            {
                                treeName: '案件查询接口',
                                callTimes: 1235
                            },{
                                treeName: '行政处罚决定书查询接口',
                                callTimes: 1235
                            }
                        ]
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
        this.pathWidth(100);
    },
    watch: {

    },
    methods: {
        pathWidth(gap){
            const a = document.querySelector(".tree_wrap").querySelectorAll(".tree_block");
            let totalWidth = 0;
            let offest_1 = a[0].offsetWidth/2;
            let offest_2 = a[a.length - 1].offsetWidth/2;
            a.forEach(el => {
                totalWidth = totalWidth + el.offsetWidth + 2*gap;
                el.style.marginLeft = gap +'px';
                el.style.marginRight = gap + 'px';
            })
            totalWidth = totalWidth - offest_1 - offest_2 - 2*gap;
            document.querySelector(".tree_path").style.width = totalWidth + 'px' 
            console.log(a);
            
        }
    },
    components: {

    },
};
</script>

<style scoped lang="css">
    div.content{
        overflow: initial;
    }
</style>
