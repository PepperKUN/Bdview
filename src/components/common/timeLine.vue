<template>
    <div class="timeLine">
        <ul class="year_block" v-for="(year, index2) in data" :key="index2">
            <li class="eventList" v-for="(event, index3) in year.events" :key='index3'>
                <span class="date">{{event.date}}</span>
                <ul class="eventFlag" :class="event.labelColor">
                    <li class="ef_corner ef_ct"></li>
                    <li class="ef_border ef_bt"></li>
                    <li class="ef_border ef_wrap">
                        <div class="eventDes" v-html="event.des"></div>
                    </li>
                    <li class="ef_corner ef_cb"></li>
                    <li class="ef_border ef_bb"></li>
                </ul>
            </li>
            <li class="year_label">{{year.year}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        data: Array
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

<style lang="css">

</style>
