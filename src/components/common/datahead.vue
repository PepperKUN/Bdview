<template>
    <div class="topHeader" @mouseleave="menuClose()">
        <div class="header" :class="menuShow?'':'hideMenu'">
            <div class="title">
                <div class="title_wing w_left"></div>
                <h1>{{ headText }}</h1>
                <div class="title_wing w_right"></div>
            </div>
            <ul class="menu">
                <li :class="{ current : menuIndex===index}" v-for="(menu, index) in menus" :key="menu.id" @mouseenter="menuDrop(index)" @click="menuSelect()" @mouseleave="clearTimer">
                    <router-link :to="menu.url">
                        <i :class="menu.icon"></i>
                        <span>{{menu.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="submenu_wrap">
            <ul class="submenu" v-for="(submenu,index) in menus" :key="submenu.id" v-show="hoverIndex==index">
                <li v-for="item in submenu.sheet"  :key="item.id" @click="menuSelect(index)">
                    <router-link :to="item.url">
                        <div class="submenu_title">
                            <span>{{item.title}}</span>
                        </div>
                    </router-link>
                    <ol class="childList">
                        <li v-for="child in item.childs" :key="child.id">
                            <router-link :to="child.url">
                                {{child.title}}
                            </router-link>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dataHead',
    data: function(){
        return{
            menuIndex: 0,
            hoverIndex: 0,
            timer: null,
            menus:[{
                    name: '首页',
                    icon: 'menuIcon_1',
                    url: '/index',
                },{
                    name: '资源目录',
                    icon: 'menuIcon_2',
                    url: '/cataglory',
                    sheet:[
                        { 
                            title: '版本管理',
                            url: '#',
                        
                        },{ 
                            title: '资源目录管理',
                            url: '#',
                        
                        }
                    ]
                },{
                    name: '数据汇聚',
                    icon: 'menuIcon_3',
                    url: '/gather',
                    sheet:[
                        { 
                            title: '数据共享情况',
                            url: '#',
                        },{ 
                            title: '接口服务',
                            url: '#',
                        },{ 
                            title: '使用者服务',
                            url: '#',
                        },{ 
                            title: '接口日志查询',
                            url: '#',
                        },
                    ]
                },{
                    name: '数据治理',
                    icon: 'menuIcon_4',
                    url: '/cultivation',
                    sheet:[
                        {
                            title: '生命周期管理',
                            url: '#',
                        },{
                            title: '过程质量管理',
                            url: '#',
                        },{
                            title: '数据标签',
                            url: '/cultivation/label',
                        },{
                            title: '新增工单',
                            url: '#',
                        },{
                            title: '处理工单',
                            url: '#',
                        },
                    ]
                },{
                    name: '数据服务',
                    icon: 'menuIcon_5',
                    url: '/service',
                    sheet:[
                        {
                            title: '数据汇聚情况',
                            url: '/service/perspetive_port',
                        },{
                            title: '数据共享情况',
                            url: '#',
                        },{
                            title: '数据使用情况',
                            url: '/service/perspetive_user',
                        },
                    ]
                },{
                    name: '数据展示',
                    icon: 'menuIcon_6',
                    url: '/showreel',
                    sheet:[
                            {
                                title: '数据报表管理',
                                url: '#',
                            },{
                                title: '查询导出日志',
                                url: '#',
                            },{ 
                                title: '基本查询',
                                url: '/showreel/searchBasic',
                                childs:[
                                    {
                                        title: '市场主体查询',
                                        url: '#',
                                    },{
                                        title: '行政许可查询',
                                        url: '#',
                                    },{
                                        title: '作业人员信息查询',
                                        url: '#',
                                    },{
                                        title: '监督检查查询',
                                        url: '#',
                                    },{
                                        title: '抽验检验查询',
                                        url: '#',
                                    },{
                                        title: 'OA收发文查询',
                                        url: '#',
                                    },{
                                        title: '公众诉求查询',
                                        url: '#',
                                    }
                                ]
                            },
                            { 
                                title: '组合查询',
                                url: '/showreel/searchCombination',
                                childs:[
                                    {
                                        title: '企业信息查询',
                                        url: '#',
                                    },{
                                        title: '名称业务查询',
                                        url: '#',
                                    },{
                                        title: '个体工商户查询',
                                        url: '#',
                                    },{
                                        title: '案件信息查询',
                                        url: '#',
                                    },{
                                        title: '抽查结果查询',
                                        url: '#',
                                    },{
                                        title: '已公示查询',
                                        url: '#',
                                    },{
                                        title: '已年报信息查询',
                                        url: '#',
                                    },{
                                        title: '异常经营名录查询',
                                        url: '#',
                                    },{
                                        title: '公众诉求查询',
                                        url: '#',
                                    },{
                                        title: '人员信息查询',
                                        url: '#',
                                    },{
                                        title: '设备信息查询',
                                        url: '#',
                                    },{
                                        title: 'OA收发文信息查询',
                                        url: '#',
                                    }
                                ]    
                            },
                            {
                                title: '一门式查询',
                                url: '/showreel/searchOverall',
                            },{
                                title: '企业大事记',
                                url: '/showreel/memorabilia',
                            },{
                                title: '数据报表展示',
                                url: '#',
                            },
                    ]
                }
            ]
        }
    },
    props: {
        headText: String,
        menuShow: Boolean,
    },
    mounted(){
        this.menuActiveDetect();
    },
    watch: {
        $route(){
            this.menuActiveDetect()
        }
    },
    methods: {
        slide(index){
            const css = document.getElementsByClassName("submenu_wrap")[0].style;
            if(index>0){
                css.maxHeight = 1000+'px';
            }else{
                 css.maxHeight = 0 +'px';
            }
        },
        menuDrop(index){
            this.hoverIndex=index;
            this.timer = setTimeout(() => {
                this.slide(index)
            }, 1000);
        },
        menuClose(){
             document.getElementsByClassName("submenu_wrap")[0].style.maxHeight = 0+'px';
             this.clearTimer;
        },
        clearTimer(){
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        menuSelect(){
            this.menuClose();
        },
        menuActiveDetect(){
            for(let i=0; i<this.menus.length; i++){
                if(this.getSlashString(this.$route.path)===this.menus[i].url){
                    this.menuIndex = i;
                }
            }
        },
        getSlashString(str){
            const result =str.split('/');
            return '/'+result[1];
            
        }
    }
}
</script>
<style>

</style>