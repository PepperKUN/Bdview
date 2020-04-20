<template>
    <div class="colum">
        <div class="row">
            <DataFrame :width='1304' :height='410' frameTitle="工单概况" rightFunc>
                <ul class="fall_wrap">
                    <li class="fall_box" v-for="box in boxes" :key="box.id" :class="box.color" :style="{width:box_width}">
                        <div class="box_name">{{box.name}}</div>
                        <div class="box_info">
                            <div class="box_value">
                                <span>{{box.value}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </DataFrame>
            <DataFrame :width='570' :height='410' frameTitle="工单处理状态" rightFunc>
                <v-chart :options="pie3" :autoresize='true'/>
            </DataFrame>
        </div>
        <div class="row">
            <DataFrame :width='1889' :height='442' frameTitle="工单详细数据" :rightFunc='frameSet1' v-model="dropValue">
                <Tab2 v-model="showTab2Index" :tabs="tabs"></Tab2>
                <div class="tab_content">
                    <component :is="currentTabComponent"></component>
                </div>
            </DataFrame>
        </div>
    </div>
</template>

<script>
import Tab2 from '../common/tab-type2'
import normalTab_c1 from './normalTab_c1'

export default {
    props: {

    },
    data() {
        const pie3_data = [
            ['name', 'value'],
            ['已办理', 4],
            ['待办理', 4],
            ['处理中', 4],
        ]
        return {
            showTab2Index: 0,
            dropValue: '',
            tabs: ['数据采集质量问题', '数据传输质量问题', '数据共享质量问题'],
            frameSet1: {
                drops: [{
                    optionText: '代办理',
                    optionVal: '1',
                    },{
                    optionText: '办理失败',
                    optionVal: '2',
                    },{
                    optionText: '已办理',
                    optionVal: '3',
                    }
                ]
            },
            box_width:'',
            boxes: [
                {
                    name: '待办工单',
                    color: 'purple',
                    value: 15,
                },{
                    name: '待办工单',
                    color: 'blue',
                    value: 23,
                },{
                    name: '关注工单',
                    color: 'pink',
                    value: 3,
                },{
                    name: '本周已完成工单',
                    color: 'green',
                    value: 105,
                }
            ],
            pie3: {
                color: ['#fbe26f', '#9f4cf9', '#4180fa', '#f03877', '#5dc7bd', {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#3393ff' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#004fbb' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }, ],
                dataset: {
                    source: pie3_data
                },
                grid: {
                    left: 20,
                    right: 20,
                    bottom: 20,
                    top: 20,
                },
                encode: {
                    name: 'name',
                    value: 'value'
                },
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} :{d}%'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        startAngle: -180,  
                        radius: ['40%', '52%'],
                        center: ['50%', '50%'],
                        label: {
                            align: 'center',
                            color: '#fff',
                            fontSize: 14,
                            lineHeight: 16,
                            formatter: function(params){
                                return '{a|'+params.name+'}\n{b|'+params.value[1]+'}'
                            },
                            rich: {
                                a: {
                                    color: '#50f7e6',
                                    fontSize: 16,
                                    lineHeight: 30,
                                },
                                b: {
                                    color: '#fbe26f',
                                    fontSize: 18,
                                    fonWeight: 'bold',
                                }
                            }
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)',
                            },
                            length: 40,
                            length2: 60
                        }
                    }
                ]
            },
        };
    },
    computed: {
        currentTabComponent: function(){
            return 'normalTab_c' + (this.showTab2Index + 1);
        }
    },
    created() {

    },
    mounted() {
        this.boxWidth();
    },
    watch: {
        dropValue(value){
            console.log(value);
        }
    },
    methods: {
        boxWidth(){
            const n = this.boxes.length;
            this.box_width = 'calc('+100/n+'% - '+(n-1)*40/n+'px)';
        },
    },
    components: {
        Tab2,
        normalTab_c1
    },
};
</script>

<style scoped lang="css">
    .fall_wrap{
        margin: 50px;
        height: calc(100% - 100px);
    }
    .normal_tab{
        margin: 10px;
    }
    .tab_content>>>.normal_table{
        margin: 0 20px;
        width: calc(100% - 40px);
        height: calc(100% - 52px);
    }
    .tab_content>>>.el-pagination{
        margin-top: 10px;
        margin-right: 10px;
        text-align: right;
    }
</style>
