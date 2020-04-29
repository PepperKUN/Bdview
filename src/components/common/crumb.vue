<template>
    <div class="breadCrumb">
        <span class="crumb_head">当前层级：</span>
        <template v-for="(crumb, index) in crumbs">
            <router-link :to="urlCheck(crumb)?'':crumb.url" class="crumb_item" :key="'item_'+index">{{nameCheck(crumb)?crumb:crumb.name}}</router-link>
            <span class="crumb_gap" :key="'gap_'+index" v-if="crumbs[index+1]">></span>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        crumbs: Array
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
        urlCheck(item){
            return (item.url === undefined);
        },
        nameCheck(item){
            return (item.name === undefined);
        }
    },
    components: {

    },
};
</script>

<style lang="css">

</style>
