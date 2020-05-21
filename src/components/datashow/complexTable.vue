<template>
    <div class="content content_rise">
        <crumb :crumbs="crumbs"></crumb>
        <el-table :data="tableData" class="complexTable" v-scrollbar:el-table>
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
import PerfectScrollbar from "perfect-scrollbar";


const elScrollBar = (el) => {
  //在元素上加点私货，名字随便取，确保不会和已有属性重复即可，我取名叫做dmePs
  if (el._hol_ instanceof PerfectScrollbar) {
    el._hol_.update();
  } else {
    //el上挂一份属性
    el._hol_ = new PerfectScrollbar(el, { 
        // suppressScrollX: true,
        // suppressScrollY: true,
    });
  }
};


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
    },
    directives: {
        scrollbar: {
            inserted(el, binding, vnode) {
            const { arg } = binding;
            if (arg === "el-table") {
                el = el.querySelector(".el-table__body-wrapper");
                !el && console.warn("未发现className为el-table__body-wrapper的dom");

                // 启用x轴后不让原生滚动条出来作乱
                vnode.context.$nextTick(() => {
                    el.classList.add("ps");
                    el.addEventListener("ps-scroll-y", () =>
                        el.classList.add("ps")
                    );
                    el.addEventListener("ps-scroll-x", () =>
                        el.classList.add("ps")
                    );
                });
            }
            const rules = ["fixed", "absolute", "relative"];
            if (!rules.includes(window.getComputedStyle(el, null).position)) {
                console.error(
                    `perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join(
                        "、"
                    )}`
                );
            }
            //el上挂一份属性
            elScrollBar(el);
        },
        componentUpdated(el, binding, vnode) {
            const { arg } = binding;
            if (arg === "el-table") {
                el = el.querySelector(".el-table__body-wrapper");
                !el && console.warn("未发现className为el-table__body-wrapper的dom");
            }
            try {
                vnode.context.$nextTick(() => {
                    elScrollBar(el);
                });
            } catch (error) {
                console.error(error);
                elScrollBar(el);
            }
        },
        }
    }
}
</script>
<style lang="css">
    
</style>