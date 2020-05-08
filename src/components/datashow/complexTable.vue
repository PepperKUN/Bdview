<template>
    <div class="content content_rise">
        <crumb :crumbs="crumbs"></crumb>
        <el-table :data="tableData" class="complexTable">
            <el-table-column prop="date" label="日期" width="150"></el-table-column>
            <el-table-column label="配送信息">
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column label="地址">
                <el-table-column prop="province" label="省份" width="120"></el-table-column>
                <el-table-column prop="city" label="市区" width="120"></el-table-column>
                <el-table-column prop="address" label="地址" width="300"></el-table-column>
                <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
            </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import Crumb from '../common/crumb'
export default {
    name: "",
    data () {
        return {
            crumbs: [{
                    name:'数据展示',
                    url: '/showreel'
                },{
                    name:'数据报表展示',
                }],
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
        };
    },
    mounted() {

    },
    methods: {
    },
    components: {
        Crumb
    }
}
</script>
<style lang="css">
</style>