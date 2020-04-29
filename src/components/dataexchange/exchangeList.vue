<template>
    <div class="content content_rise">
        <crumb :crumbs="crumbs"></crumb>
        <FilterForm :form='form' withExport></FilterForm>
    </div>
</template>

<script>
import FilterForm from '../common/searchFilter'
import Crumb from '../common/crumb'
export default {
    props: {

    },
    data() {
        return {
            crumbs: [{
                    name:'数据服务',
                    url: '/service'
                },{
                    name:'交换情况查询',
                }],
            form: [
                {
                    line:[
                        {
                            name: '交换方向',
                            select: [{
                                        key: 1,
                                        value:'字符串'
                                    },{
                                        key: 2,
                                        value:'1'
                                    },{
                                        key: 3,
                                        value: '2'
                                    }],
                            model: ''
                        },{
                            name: '交换工具',
                            select: [{
                                        key: 1,
                                        value:'字符串'
                                    },{
                                        key: 2,
                                        value:'1'
                                    },{
                                        key: 3,
                                        value: '2'
                                    }],
                            model: ''
                        },{
                            name: '交换名称',
                            select: [{
                                        key: 1,
                                        value:'字符串'
                                    },{
                                        key: 2,
                                        value:'1'
                                    },{
                                        key: 3,
                                        value: '2'
                                    }],
                            model: ''
                        }
                    ]
                },{
                    line:[
                        {
                            name: '交换状态',
                            select: [{
                                        key: 1,
                                        value:'名称登记'
                                    },{
                                        key: 2,
                                        value:'1'
                                    },{
                                        key: 3,
                                        value: '2'
                                    }],
                            model: ''
                        },
                        {
                            name: '交换数量',
                            radio: ['不为零','为零'],
                        },{
                            name: '交换时间',
                            datePicker: 'daterange',
                            model: ''
                        }
                    ]
                }
            ],
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
        FilterForm,
        Crumb
    },
};
</script>

<style scoped lang="css">

</style>
