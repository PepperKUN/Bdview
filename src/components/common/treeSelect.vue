<template>
    <div class="treeSelect" ref="drop">
        <input type="text" readonly :value="inputVal" class="treeInput" @click="dropShow = true" placeholder="请选择">
        <i class="iconfont icon-reject" @click="cancelSelected" ref="clear"></i>
        <div class="drop_wrap"  v-show="dropShow">
            <el-scrollbar :native="false" :wrap-style="{maxHeight: dropHeight + 'px'}">
                <tree ref="ztree" :nodes="Tnodes" :setting="setting"/>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import tree from "vue-giant-tree";
// import $ from 'jquery';
export default {
    props: {
        dropHeight: {
            type: Number,
            default: 160,
        },
        Tnodes: Array,
    },
    data() {
        return {
            inputVal: [],
            dropShow: false,
            setting: {
                check: {
                    enable: true
                },
                data: {
                    simpleData: {
                        enable: true,
                        pIdKey: "pid",
                    },
                },
                view: {
                    showIcon: false,
                },
                callback: {
                    onCheck: this.zTreeOnCheck
                }
            },
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        document.addEventListener("click", this.handleOtherClick)
    },
    destroyed() {
        document.removeEventListener("click", this.handleOtherClick)
    },
    watch: {

    },
    methods: {
        zTreeOnCheck(){
            this.inputVal = [];
            const nodes = this.$refs.ztree.ztreeObj.getCheckedNodes(true);
            nodes.forEach(element => {
                if(element.children === undefined){
                    this.inputVal.push(element.name);
                }
            });
            console.log(nodes);
        },
        cancelSelected(){
            this.inputVal = [];
            this.$refs.ztree.ztreeObj.checkAllNodes(false);
        },
        handleOtherClick(e){
            const tree = this.$refs.drop;
            const i_d = this.$refs.clear;
            if(tree.contains(e.target)&&i_d!==e.target){
                this.dropShow = true;
            }else{
                this.dropShow = false;
            }
        }
    },
    components: {
        tree,
    },
};
</script>

<style lang="css">

</style>
