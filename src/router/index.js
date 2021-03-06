import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//注册路由
import contentIndex from '../components/home/content-index.vue'
import contentCataglory from '../components/datadir/content-cataglory.vue'
import contentGather from '../components/datagather/content-gather.vue'
import contentCultivation from '../components/datacontrol/content-cultivation.vue'
import contentShowreel from '../components/datashow/content-showreel.vue'
import contentService from '../components/dataexchange/content-service.vue'
import perspectiveUser from '../components/dataexchange/perspective-user.vue'
import perspectivePort from '../components/dataexchange/perspective-port.vue'
import errorRouter from '../components/common/errorRouter.vue'
import dataInfo from '../components/datadir/cataInfo.vue'
import searchBasic from '../components/datashow/search_basic.vue'
import searchOverall from '../components/datashow/search_overall.vue'
import searchCombination from '../components/datashow/search_combination.vue'
import memorabilia from '../components/datashow/memorabilia.vue'
import exchangeList from '../components/dataexchange/exchangeList.vue'
import portInfo from '../components/dataexchange/port_info.vue'
import exchangeList_info from '../components/dataexchange/exchangeList_info.vue'
import exchangeTrace from '../components/dataexchange/exchangeTrace.vue'
import exchangeTrace_info from '../components/dataexchange/exchangeTrace_info.vue'
import exchangeStatics from '../components/dataexchange/exchangeStatics.vue'
import complexTable from '../components/datashow/complexTable.vue'
import addLabel from "../components/datacontrol/addLabel.vue";
import labelSearch from "../components/datacontrol/labelSearch.vue";
import simpleSearch from "../components/datashow/search_simple.vue";
import dataTransfer from "../components/datashow/dataTransfer.vue";
import dataTheme from "../components/datarpt/dataTheme.vue";

const router = new Router({
  mode: "history", //路由模式，无#
  routes: [
    {
      path: "",
      redirect: "/index",
    },
    {
      path: "/index",
      component: contentIndex,
    },
    {
      path: "/cataglory",
      component: contentCataglory,
    },
    {
      path: "/cataglory/dataInfo",
      component: dataInfo,
    },
    {
      path: "/gather",
      component: contentGather,
    },
    {
      path: "/cultivation",
      component: contentCultivation,
    },
    {
      path: "/cultivation/labelSearch",
      component: labelSearch,
    },
    {
      path: "/cultivation/addLabel",
      component: addLabel,
    },
    {
      path: "/service",
      component: contentService,
    },
    {
      path: "/service/perspetive_user",
      component: perspectiveUser,
    },
    {
      path: "/service/perspetive_port",
      component: perspectivePort,
    },
    {
      path: "/service/exchangeList",
      component: exchangeList,
    },
    {
      path: "/service/exchangeList/info",
      component: exchangeList_info,
    },
    {
      path: "/service/exchangeTrace",
      component: exchangeTrace,
    },
    {
      path: "/service/exchangeTrace/info",
      component: exchangeTrace_info,
    },
    {
      path: "/service/portInfo",
      component: portInfo,
    },
    {
      path: "/service/exchangeStatics",
      component: exchangeStatics,
    },
    {
      path: "/showreel",
      component: contentShowreel,
    },
    {
      path: "/showreel/searchBasic",
      component: searchBasic,
    },
    {
      path: "/showreel/searchOverall",
      component: searchOverall,
    },
    {
      path: "/showreel/searchCombination",
      component: searchCombination,
    },
    {
      path: "/showreel/complexTable",
      component: complexTable,
    },
    {
      path: "/showreel/memorabilia",
      component: memorabilia,
    },
    {
      path: "/showreel/simpleSearch",
      component: simpleSearch,
    },
    {
      path: "/showreel/dataTransfer",
      component: dataTransfer,
    },
    {
      path: "/dataTheme",
      component: dataTheme,
    },
    {
      path: "/errorRouter",
      name: "errorRouter",
      component: errorRouter,
    },
  ],
  // base: '/vue-demo'
});

export default router