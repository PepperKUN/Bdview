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
                        <input type="text" v-model="tableColum" class="complex_full" placeholder="选择结果列" @click="popShow">
                        <button @click="popShow">选择查询结果</button>
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
        <div class="search_submit">
            <button class="submit">查询</button>
            <button class="reset">保存查询模板</button>
            <button class="reset">导出</button>
        </div>
        <Pop v-model="show" :title="title" width="930px" height="650px">
            <div class="drag_wrap">
                <ul class="dragList">
                    <li class="title">待选择</li>
                    <el-scrollbar :native="false" style="height:calc(100% - 40px)">
                        <draggable :list="originArray" :group="{ name: 'people'}" class="drag_content">
                            <li v-for="element in originArray" :key="element.id">{{element.name}}</li>
                        </draggable>
                    </el-scrollbar>
                </ul>
                <div class="drag_des">左右列表可以拖拽<br>并且可以上下排序</div>
                <ul class="dragList">
                    <li class="title">已选择</li>
                    <el-scrollbar :native="false" style="height:calc(100% - 40px)">
                        <draggable :list="resultArray" group="people" class="drag_content">
                            <li v-for="(element, index3) in resultArray" :key="index3">
                                {{element.name}}
                                <i class="iconfont icon-close" @click="removeAt(index3)"></i>
                            </li>
                        </draggable>
                    </el-scrollbar>
                </ul>
            </div>
            <div class="search_submit">
                <button class="submit" @click="arraySubmit">确定</button>
            </div>
        </Pop>
    </div>
</template>

<script>
import Pop from '../common/pop'
import draggable from 'vuedraggable'

export default {
    props: {

    },
    data() {
        return {
            contentTitle: '组合查询',
            crumbs: ['数据展示','组合查询','企业信息查询'],
            formName: '企业信息查询',
            tableColum: [],
            show: true,
            title: '选择查询结果数据项',
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
            ],
            originArray: [
                {
                    "name": "企业状态",
                    "order": 1,
                    "fixed": false
                },
                {
                    "name": "统一社会信用代码",
                    "order": 2,
                    "fixed": false
                },
                {
                    "name": "注册号",
                    "order": 3,
                    "fixed": false
                },
                {
                    "name": "企业名称",
                    "order": 4,
                    "fixed": false
                },
                {
                    "name": "企业类别",
                    "order": 5,
                    "fixed": false
                },
                {
                    "name": "企业类型",
                    "order": 6,
                    "fixed": false
                },
                {
                    "name": "法定代表人或负责人",
                    "order": 7,
                    "fixed": false
                },
                {
                    "name": "核准日期",
                    "order": 8,
                    "fixed": false
                },
                {
                    "name": "成立日期",
                    "order": 4,
                    "fixed": false
                },
                {
                    "name": "城市",
                    "order": 5,
                    "fixed": false
                },
                {
                    "name": "区县",
                    "order": 6,
                    "fixed": false
                },
                {
                    "name": "住所",
                    "order": 7,
                    "fixed": false
                }
            ],
            resultArray: [],
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
        },
        popShow(){
            this.show = true;
        },
        removeAt(idx) {
            const result = this.resultArray.slice(idx, idx+1)[0];
            this.resultArray.splice(idx, 1);
            this.originArray.push(result);
        },
        arraySubmit(){
            this.tableColum = this.resultArray.map(n => n.name);
            this.show = false;
        }
    },
    components: {
        Pop,
        draggable,
    },
};
</script>

<style lang="css">
    div.content{
        overflow: initial;
    }
</style>
