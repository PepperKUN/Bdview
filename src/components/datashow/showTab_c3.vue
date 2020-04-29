<template>
	<div class="colum">
		<div class="row">
			<div class="colum">
				<DataFrame :width='800' :height='170' frameTitle="总览" rightFunc>
					<DataBulbs class="data_w_s" :data='bulbs'></DataBulbs>
				</DataFrame><br>
				<DataFrame :width='800' :height='382' frameTitle="各类许可证数量分析" rightFunc>
				</DataFrame>
			</div>
			<div class="colum">
				<DataFrame :width='1072' :height='276' frameTitle="许可证现状分析" rightFunc>
				</DataFrame><br>
				<DataFrame :width='1072' :height='276' frameTitle="近一年新办许可证的企业数量分析" rightFunc>
				</DataFrame>
			</div>
		</div>
		<div class="row">
			<DataFrame :width='1272' :height='284' frameTitle="各市州（区县）许可证数量分析" rightFunc>
			</DataFrame>
			<DataFrame :width='600' :height='284' frameTitle="各类许可证数量分析" rightFunc>
			</DataFrame>
		</div>
	</div>
    
</template>

<script>

import dataBulbs from '../common/dataBulbs'
export default {
    props: {

    },
   data() {
      
       return {
           bulbs: [
               {
                   title: '有效许可证总量',
                   amount: '15245245',
                   unit: '个',
                   color: 'yellow'
               },{
                   title: '今年新增',
                   amount: '152452',
                   unit: '个',
                   color: 'cyan'
               },{
                   title: '数量最多的市州',
                   amount: '昆明市',
                   unit: '',
                   color: 'green'
               },{
                   title: 'XXXX',
                   amount: '100',
                   unit: '个',
                   color: 'purple'
               }
           ]
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
		'DataBulbs': dataBulbs,
    },
};
</script>

<style scoped lang="css">
   
    .data_w_s>>>li{
        width: calc((100% - 40px)/4);
    }
    
</style>
