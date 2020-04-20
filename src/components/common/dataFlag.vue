<template>
    <div class="flag" :style="{width:width}" :class="color">
        <div class="flag_title">
            <i class="flag_icon iconfont" v-if="icon" :class="icon"></i>
            <span class="flag_name">{{flag}}</span>
        </div>
        <div class="flag_content">
            <ul class="flag_body">
                <li class="flag_corner c_left"></li>
                <li class="flag_border b_top"></li>
                <li class="flag_corner c_right"></li>
                <li class="flag_border b_left"></li>
                <li class="flag_border b_wrap">
                    <slot></slot>
                </li>
                <li class="flag_border b_right"></li>
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
        color: String
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
