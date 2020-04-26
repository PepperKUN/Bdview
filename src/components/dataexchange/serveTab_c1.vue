<template>
    <div class="row">
        <div class="colum">
            <DataFrame :width='518' :height='94' frameTitle="交换预警" rightFunc>
            </DataFrame><br>
            <DataFrame :width='518' :height='376' frameTitle="今日各类业务交换情况" rightFunc>
            </DataFrame><br>
            <DataFrame :width='518' :height='370' frameTitle="今日与外部单位的数据交换总量" rightFunc>
            </DataFrame>
        </div>
        <div class="colum">
            <DataFrame :width='826' :height='868' rightFunc>
                
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

</style>
