<template>
    <div class="row">
        <div class="colum">
            <DataFrame :width='518' :height='94' frameTitle="交换预警" rightFunc>
                <DataFlow :flowData="flow" @update-data='update' :dataGap='100'></DataFlow>
            </DataFrame><br>
            <DataFrame :width='518' :height='376' frameTitle="今日各类业务交换情况" rightFunc>
                <table class="simple">
                    <thead>
                    <tr>
                        <th style="text-align:left;">交换名称</th>
                        <th style="text-align:right;">发送量 </th>
                        <th style="text-align:left;">/ 接收量</th>
                        <th>频率</th>
                        <th style="text-align:right">最近更新</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in table_simple" :key="item.id">
                        <td style="text-align:left; color:#fff">{{item.name}}</td>
                        <td style="text-align:right; font-weight:bold; color:#00fdeb">{{item.send}} </td>
                        <td style="text-align:left; color:#ff487f"><span style="color:#fff">/</span> {{item.receive}}</td>
                        <td>{{item.frequency}}</td>
                        <td style="text-align:right">{{item.time}}</td>
                    </tr>
                    </tbody>
                </table>
                <el-pagination small background layout="prev, pager, next" :total="1000" :pager-count="13"></el-pagination>
            </DataFrame><br>
            <DataFrame :width='518' :height='370' frameTitle="今日与外部单位的数据交换总量" rightFunc>
                <div class="process_wrap">
                    <span class="process_center">{{process_data.name}}</span>
                    <ul class="process_list">
                        <template v-for="(process, index) in process_data.outer" >
                        <li class="process_outer" :key="'name_'+index">{{process.name}}</li>
                        <li class="process_line" :key="'line_'+index">
                            <span class="in_data">{{process.in}}</span>
                            <span class="out_data">{{process.out}}</span>
                        </li>
                        </template>
                    </ul>
                </div>
            </DataFrame>
        </div>
        <div class="colum">
            <DataFrame :width='826' :height='868' rightFunc>
                <lottie :options="defaultOptions" :width="818" :height="736" v-on:animCreated="handleAnimation"/>
            </DataFrame>
        </div>
        <div class="colum">
            <DataFrame :width='518' :height='312' frameTitle="今日上报总局、省政府数据分类统计" rightFunc>

            </DataFrame><br>
            <DataFrame :width='518' :height='286' frameTitle="今日与委办局交换数据统计" :rightFunc="frameSet">

            </DataFrame><br>
            <DataFrame :width='518' :height='242' frameTitle="昨日数据落地统计" rightFunc>
                
            </DataFrame>
        </div>
    </div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '../../assets/js/test.json';
import DataFlow from '../common/dataFlow'

export default {
    props: {

    },
    data() {
        return {
            frameSet: {
                drops: [
                    {
                        optionText: ' 月',
                        optionVal: '1',
                    },{
                        optionText: '年',
                        optionVal: '2',
                    },{
                        optionText: '日',
                        optionVal: '3',
                    }
                ]
            },
            defaultOptions: {animationData: animationData.default},
            animationSpeed: 1,
            flow: [{
                isHead: true,
                custom: '<i class="iconfont icon-alarm"></i>2019-05-14 22:30:05目前为止，今日数据上报总局还未执行！'
            }],
            table_simple: [
                {
                    name: '名称数据交换',
                    send: '2000',
                    receive: '100',
                    frequency: '10分钟',
                    time: '24:00',
                },{
                    name: '数据上报',
                    send: '10.1万',
                    receive: '--',
                    frequency: '30分钟',
                    time: '24:00',
                },{
                    name: '省政务平台',
                    send: '1.2万',
                    receive: '--',
                    frequency: '4小时',
                    time: '24:00',
                },{
                    name: '一窗通',
                    send: '200',
                    receive: '90',
                    frequency: '5分钟',
                    time: '24:00',
                },{
                    name: '多证合一',
                    send: '2700',
                    receive: '2',
                    frequency: '2小时',
                    time: '24:00',
                },{
                    name: '联合惩戒',
                    send: '1',
                    receive: '4',
                    frequency: '2小时',
                    time: '24:00',
                },{
                    name: '简易注销',
                    send: '20',
                    receive: '20',
                    frequency: '2小时',
                    time: '24:00',
                }
            ],
            process_data:{
                name: '数据中心',
                outer: [
                {
                    name: '总局',
                    in: 104236,
                    out: 0
                },{
                    name: '省政府',
                    in: 12287,
                    out: 0
                },{
                    name: '其他委办局',
                    in: 13376,
                    out: 0
                },{
                    name: '银行',
                    in: 0,
                    out: 0
                },{
                    name: '市州',
                    in: 521162,
                    out: 0
                },{
                    name: '法人库',
                    in: 3224,
                    out: 0
                }
                ]
            },
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
        handleAnimation: function (anim) {
            this.anim = anim;
        },
        update(data){
            this.flow = data;
        }
    },
    components: {
        Lottie,
        DataFlow
    },
};
</script>

<style scoped lang="css">
    .flow_wrap{
        margin: 10px;
        height: calc(100% - 20px);
        background-color: rgba(255, 0, 64, 0.281);
    }
    .flow_wrap>>>.flow_name{
        padding: 0;
    }
    .flow_wrap>>>.flow_custom{
        color: #ffc6d1;
    }
    .flow_wrap>>>.icon-alarm{
        color: #fc3358;
        margin-right: 20px;
    }
    .flow_wrap::before, .flow_wrap::after{
        background: linear-gradient(80deg, rgba(0,14,45,1) 0%, rgba(0,14,45,0) 100%);
        width: 100px;
        z-index: 2;
    }
    table.simple{
        height: calc(100% - 50px);
    }
</style>
