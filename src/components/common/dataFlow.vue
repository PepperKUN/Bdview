<template>
    <div class="flow_wrap">
        <div class="flow">
            <ul class="stripe">
                <template v-for="(flow, index) in  flowData">
                    <li :key="'name_'+index" class="flow_name" :class="[flow.color, flow.isHead?head:'', flow.ico?'ico':'', flow.ico]" :style="{marginLeft:(flow.isHead?dataGap:0)+'px'}">{{flow.name}}</li>
                    <li :key="'add1_'+index" class="flow_gap" v-if="flow.add1">{{flow.add1}}</li>
                    <li :key="'value_'+index" class="flow_amount" v-if="flow.amount">{{flow.amount}}</li>
                    <li :key="'add2_'+index" class="flow_gap" v-if="flow.add2">{{flow.add2}}</li>
                    <li :key="'value2_'+index" class="flow_amount" v-if="flow.amount2">{{flow.amount2}}</li>
                    <li :key="'unit_'+index" class="flow_unit" v-if="flow.unit">{{flow.unit}}</li>
                    <li :key="'comma_'+index" :class="headDetect(flowData, index)?'flow_end':'flow_comma'" :style="{opacity:endShow(flowData, index)?'1':'0'}">{{headDetect(flowData, index)?'。':'，'}}</li>
                    <li :key="'gap_'+index" class="flow_gap" v-if="flow.gap">其中</li>
                    <li :key="'custom_'+index" class="flow_custom" v-if="flow.custom" v-html="flow.custom"></li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        flowData: Array,
        dataGap: Number,
    },
    data() {
        return {
            head: 'head',
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.rApolyfill();
        this.flow();
    },
    watch: {

    },
    methods: {
        headDetect(data, idx){
            let b ;
            b = (data[idx+1]!==undefined)?data[idx+1].isHead:true;
           return b;
        },
        endShow(data, idx){
            let e = data[idx+1]!==undefined&&data[idx].custom==undefined;
            return e;
        },
        flow(){
            const flow = this.$el.getElementsByClassName('flow')[0];
            const maskWidth = flow.offsetWidth;
            const stripe = flow.getElementsByClassName('stripe')[0];
            const stripeWidth = stripe.offsetWidth + this.dataGap - 11;
            const a = this.flowData.slice();
            const newData = a.concat(a).concat(a);
            let i = 0;
            let flowAn;
            
            function animate(){
                stripe.style.left = "calc(50% - "+ i + "px)";
                if(i>stripeWidth){
                    i=0;
                }else{
                    i++;
                }
                flowAn = requestAnimationFrame(animate);
            }
             if(stripeWidth>maskWidth){
                this.$emit("update-data", newData);
                animate();
                stripe.onmouseenter = function(){
                    cancelAnimationFrame(flowAn);
                }
                stripe.onmouseleave = function(){
                    animate();
                }
             }
        },
        rApolyfill(){
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                        || window[vendors[x]+'CancelRequestAnimationFrame'];
            }
        
            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                    timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
        
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
        }
    },
    components: {

    },
};
</script>

<style >

</style>
