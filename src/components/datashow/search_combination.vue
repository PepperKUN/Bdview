<template>
    <div class="content content_rise">
        <div class="content_title"><span>{{contentTitle}}</span></div>
        <div class="breadCrumb">
            <span class="crumb_head">当前层级：</span>
            <template v-for="(crumb, index) in crumbs">
                <a href="###" class="crumb_item" :key="'item_'+index">{{crumb}}</a>
                <span class="crumb_gap" :key="'gap_'+index" v-if="crumbs[index+1]">></span>
            </template>
        </div>
        <div class="form_complex_wrap">
            <table class="form_complex">
                <colgroup>
                    <col width="170px">
                    <col>
                </colgroup>
                <tr>
                    <th>查询名称：</th>
                    <td>{{formName}}</td>
                </tr>
                <tr>
                    <th>查询结果列：</th>
                    <td>
                        <input type="text" v-model="tableColum" class="complex_full" placeholder="选择结果列">
                        <button>选择查询结果</button>
                    </td>
                </tr>
                <tr>
                    <th>组合查询条件：</th>
                    <td>
                        <ul class="condition_list">
                            <li class="condition_add">
                                <button @click="listAdd"><i class="iconfont icon-add"></i>增加新条件</button>
                            </li>
                            <li v-for="(list, index) in conditions" :key="index">
                                <template v-for="(item, index2) in list">
                                    <select :key="'sel_'+index+'_'+index2" v-if="item.opt" v-model="item.model">
                                        <option value="">请选择</option>
                                        <option v-for="option in item.opt" :key="option.id" :value="option">{{option}}</option>
                                    </select>
                                    <input :key="'input_'+index2" type="text" v-if="item.text!==undefined" v-model="item.model" placeholder="请输入">
                                </template>
                                <button v-if="index>0" class="list_delete" @click="listDelete(index)"><i class="iconfont icon-close"></i></button>
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            contentTitle: '组合查询',
            crumbs: ['数据展示','组合查询','企业信息查询'],
            formName: '企业信息查询',
            tableColum: [],
            refresh: false,
            condition: [

            ],
            conditions: [
                [
                    {
                        opt: ['(','((','(((','(((('],
                        model: ''
                    },{
                        opt: ['统一社休信用代码'],
                        model: ''
                    },{
                        opt: ['等于'],
                        model: ''
                    },{
                        text: '',
                        model: ''
                    },{
                        opt: [')','))',')))','))))'],
                        model: ''
                    },{
                        opt: ['并且（and）'],
                        model: ''
                    }
                ]
            ]
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
        listAdd(){
            let data = this.conditions;
            const L = data.length;
            const list = JSON.parse(JSON.stringify(data[L-1]));
            data.push(list);
            this.conditions = data;
        },
        listDelete(index){
            this.conditions.splice(index,1);
        }
    },
    components: {

    },
};
</script>

<style lang="css">

</style>
