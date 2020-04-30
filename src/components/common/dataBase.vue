
<template>
    <ul class="dataBase_list">
        <template v-for="(dataBase, index2) in data">
            <li class="dataBase" :key="'icon_'+index2" :class="dataBase.type?'dType2':''">
                <div>
                    <span class="dataBase_name">
                        <span>{{dataBase.name}}</span>
                    </span>
                    <template v-if="dataBase.subtitle">
                        <br>
                        <span class="dataBase_subtitle">
                            <span>{{dataBase.subtitle}}</span>
                        </span>
                    </template>
                </div>
            </li>
            <li :class="['dataStream',dataBase.isTrace?'green':'pink']" :key="'stream_'+index2" v-if="dataBase.stream||(dataBase.isTrace!==undefined)">
                <span v-if="dataBase.isTrace===undefined">{{dataBase.stream}}</span>
                <span v-else><i :class="['iconfont', dataBase.isTrace?'icon-pass':'icon-reject']"></i></span>
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
