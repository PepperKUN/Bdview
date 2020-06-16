<template>
    <div class="content content_rise">
		<crumb :crumbs="crumbs"></crumb>
		<FilterForm :form='form' withExport @showDate="dateHide">
            <template v-slot:radio_content >
                <div class="inline_picker" v-show="dateShow">
                    <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right" @change="pushModel">
                    </el-date-picker>
                </div>
            </template>
        </FilterForm>
		<div class="colum">
			<div class="row">
				<!-- <DataFrame :width='1130' :height='348'>
				</DataFrame>
				<DataFrame :width='748' :height='348'>
				</DataFrame> -->
                <DataFrame :width='1892' :height='348'>
					<v-chart :options="line1" :autoresize='true'/>
				</DataFrame>
			</div>
			<div class="row">
				<DataFrame :width='1892' :height='406'>
					<v-chart :options="bar" :autoresize='true'/>
				</DataFrame>
			</div>
		</div>
		
    </div>
</template>

<script>
import FilterForm from '../common/searchFilter'
import Crumb from '../common/crumb'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/axisPointer'
import 'echarts/lib/component/tooltip'
export default {
    props: {

    },
    data() {
        const lineData = Array.from({length: 24}, () => Math.floor(Math.random() * 100))
        const barData = [
            ['name', 'value'],
            ['上报总局', 140],
            ['双告知', 32],
            ['归集联合惩戒', 58],
            ['归集许可处罚', 64],
            ['归集抽查检查', 130],
            ['市州上报', 125],
            ['总局下载', 100],
            ['内网到外网', 80],
            ['外网到内网', 30],
            ['一体化数据', 10],
            ['多证合一', 70],
            ['数据落地', 118],
        ]
        return {
            crumbs: [{
                    name:'数据服务',
                    url: '/service'
                },{
                    name:'数据交换统计',
                }],
            date: '',
            dateShow: false,
            form: [
                {
                    line:[
                        {
                            name: '日期',
                            radio: ['今日','往日'],
                            model: ['今日']
                        },{
                            name: '交换方向',
                            select: [{
                                        key: 1,
                                        value:'1'
                                    },{
                                        key: 2,
                                        value:'2'
                                    },{
                                        key: 3,
                                        value: '3'
                                    }],
                            model: ''
                        }
                    ]
                }
            ],
            line1: {
                backgroundColor:'transparent',// 背景透明
                legend: {
                    type: 'plain',
                    top: 10,
                    textStyle: {
                        color: '#9efff8'
                    }
                },
                grid: {
                    left:10,
                    top:40,
                    right: 20,
                    bottom: 10,
                    containLabel: true
                },
                tooltip: {
                    show: true,
                    trigger: 'axis' ,
                    axisPointer: {
                        show: true,
                        type: 'line',
                        triggerTooltip: true,
                        label: {
                            show: true,
                        }
                    },     
                },
                xAxis: {
                    type: 'category',
                    data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                    axisLine:{
                        lineStyle:{
                        color:'rgba(158, 255, 248, 1)',
                        width:1
                        }
                    },
                    axisTick:{
                        show:true // 坐标轴小标记
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#9efff8',
                            fontSize:12
                            }
                    },
                },
                yAxis: {
                        type: 'value',
                        min: 0,
                        // max: 2500,
                        name: '记录数(条)',
                        nameTextStyle: {
                            color: '#9efff8'
                        },
                        interval: 10,		
                    splitLine: {
                            show: true,				
                            lineStyle:{
                                color: ['#1d427c'],
                        type:'dashed'
                            }
                        },
                    axisLabel: {
                            textStyle: {
                                color: '#9efff8',
                                fontSize:12
                            }
                    },
                    axisLine:{
                            show:false // 是否显示分割线
                        },
                    axisTick:{
                        show:false // 坐标轴小标记
                        },
                },
                series: {
                    name: '专网<-->互联网',
                    type: 'line',
                    smooth: true,
                    symbol: 'emptyCircle',
                    sampling: 'average',
                    itemStyle: {
                        color: 'rgb(222, 187, 255)',
                        borderWidth: 2,
                    },
                    areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(200, 45, 255, .9)'
                            }, {
                                offset: 1,
                                color: 'rgba(3, 25, 80, .1)'
                            }])
                    },
                data: lineData,
                }
            },
            bar: {
                dataset: {
                    source: barData
                },
                encode: {
                    x: 0,
                    y: 1
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: 40,
                    right: 20,
                    bottom: 30,
                    top: 40,
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#a3fff7'
                        }
                    },
                    axisLabel: {
                        color: '#a3fff7',
                        interval: 0,
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '千件',
                    nameTextStyle: {
                        color: '#a3fff7'
                    },
                    splitNumber: 4,
                    axisLine: {
                        lineStyle: {
                            color: '#a3fff7'
                        }
                    },
                    axisLabel: {
                        color: '#a3fff7',
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(82, 157,255, 0.35)'
                        }
                    }
                },
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: 28,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1,
                                    color: '#7a3afd' // 0% 处的颜色
                                }, {
                                    offset: 0,
                                    color: '#67b6fb' // 100% 处的颜色
                                }], false),
                            }
                        },
                        label: {
                            show: true,
                            color: '#a3fff7',
                            position: 'top'
                        }
                    }
                ]
            },
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
        pushModel(){
            this.form[0].line[0].model.push(this.date);
        },
        dateHide(bool){
            this.dateShow = bool; 
        }
    },
    components: {
		FilterForm,
        Crumb
    },
};
</script>

<style scoped lang="css">
	.content>>>.search_filter>table {
		width: 60%;
    }
    .content>>>.search_submit{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        margin: 0;
    }
</style>
