<template>
    <div class="info_table">
        <table>
            <tr v-for="(line, index) in data" :key="'line_'+index">
                <template v-for="(colum, index) in line">
                    <th :key="'th_'+index">{{colum.th}}</th>
                    <td :key="'td_'+index" :colspan="colum.span"><span>{{colum.td.text?colum.td.text:colum.td}}</span><span class="stat" :class="{'checked':colum.td.check.stat}" v-if="colum.td.check">{{colum.td.check.name}}</span></td>
                </template>
            </tr>
        </table>
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

<style scoped lang="css">

</style>
