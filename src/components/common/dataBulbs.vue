<template>
    <ul class="bulb_list">
        <li v-for="bulb in data" :key="bulb.id" :class="bulb.color">
            <div class="bulb_data">
            <span class="num">{{bulb.amount}}</span>
            <span class="unit">{{bulb.unit}}</span>
            </div>
            <div class="bulb_name"><span>{{bulb.title}}</span></div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'dataBulbs',
    props: {
        data:Array,
    },
    mounted() {
        const total = document.getElementsByClassName('bulb_list').length;
        for(let i=0; i<total; i++){
            this.staggerDelay(i);
        }
    },
    methods: {
        staggerDelay(num){
            const li = document.getElementsByClassName('bulb_list')[num].getElementsByTagName('li');
            for(let i=0; i<li.length; i++){
                li[i].style.animationDelay = -i*1800 + 'ms';
                li[i].style.animationName = 'breath';
            }
        },
    },
};
</script>
<style>
</style>