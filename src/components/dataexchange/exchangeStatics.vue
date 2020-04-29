<template>
    <div class="content content_rise">
		<crumb :crumbs="crumbs"></crumb>
		<FilterForm :form='form' withExport></FilterForm>
		<div class="colum">
			<div class="row">
				<DataFrame :width='1130' :height='348'>
					
				</DataFrame>
				<DataFrame :width='748' :height='348'>
					
				</DataFrame>
			</div>
			<div class="row">
				<DataFrame :width='1892' :height='406'>
					
				</DataFrame>
			</div>
		</div>
		
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
                    name:'数据交换统计',
                }],
            form: [
                {
                    line:[
                        {
                            name: '日期',
                            radio: ['今日','往日'],
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
