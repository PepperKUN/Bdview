<template>
    <div class="flag" :style="{width:width}">
        <div class="flag_title">
            <i class="flag_icon" v-show="icon"></i>
            <span class="flag_name">{{flag}}</span>
        </div>
        <div class="flag_content">
            <div class="flag_body">
                <slot></slot>
            </div>
            <ul class="flag_bg">
                <li class="flag_border b_top"></li>
                <li class="flag_corner c_left"></li>
                <li class="flag_corner c_right"></li>
                <li class="flag_border b_left"></li>
                <li class="flag_border b_right"></li>
                <li class="flag_border b_bg"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dataFlag',
    props: {
        flag: String,
        icon: String,
        width: String,
    },
    data() {
        return {

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

<style>

</style>
