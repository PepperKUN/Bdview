<template>
    <ul class="dataBase_list">
        <template v-for="(dataBase, index2) in data">
            <li class="dataBase" :key="'icon_'+index2" :class="dataBase.type?'dType2':''">
                <div>
                    <span class="dataBase_name">
                        <span>{{dataBase.name}}</span>
                    </span>
                    <template v-if="dataBase.time">
                        <br>
                        <span class="dataBase_time">
                            <span>{{dataBase.time}}</span>
                        </span>
                    </template>
                </div>
            </li>
            <li class="dataStream" :key="'stream_'+index2" v-if="dataBase.stream">
                <span>{{dataBase.stream}}</span>
            </li>
        </template>
    </ul>
</template>

<script>
export default {
    props: {
        data:Array
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
