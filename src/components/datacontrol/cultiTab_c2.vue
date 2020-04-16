<template>
    <div class="colum">
        <div class="row">
            <DataFrame :width='1304' :height='410' frameTitle="工单概况" rightFunc>
                
            </DataFrame>
            <DataFrame :width='570' :height='410' frameTitle="工单处理状态" rightFunc>
                
            </DataFrame>
        </div>
        <div class="row">
            <DataFrame :width='1889' :height='442' frameTitle="工单详细数据" :rightFunc='frameSet1'>
                
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
