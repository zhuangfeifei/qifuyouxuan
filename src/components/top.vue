<template>
    <nav>
        <div class="navTitle">
            <span>欢迎光临杭州铭磊财务有限公司官方网站！</span>
            <div>
                <img src="../assets/images/home/icon.png" alt="" srcset="">
                <span>1 (234) 567-8901</span>
            </div>
        </div>
        <div class="navTab">
            <img src="../assets/images/home/logo.png" alt="" srcset="">
            <div class="navTabList" :class="{navTabList_active: index == indexUrlActive}" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)">
                <a v-if="index == 1 || index == 5" :href="index == 1 ? '#popularServices' : index == 5 ? '#choose' : '#'">{{item.title}}</a>
                <div v-else>{{item.title}}</div>
                <div class="solid"></div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return{
            tabList:[
                {title:'网站首页'},
                {title:'我们的服务'},
                {title:'公司注册'},
                {title:'变更公司'},
                {title:'公司转让'},
                {title:'联系我们'},
            ],
            tabIndex: 0,
        }
    },
    computed:{
        ...mapState({
            indexUrlActive: state => state.indexUrlActive,
        })
    },
    created(){
        
    },
    methods:{
        changeTab(index){
            this.tabIndex = index
            if(index == 0 || index == 1 || index == 5) this.$router.push({path:'/'})
            if(index == 2) this.$router.push({path:'/ourServices'})
            if(index == 3) this.$router.push({path:'/changeCompany'})
            if(index == 4) this.$router.push({path:'/transfer'})
        },
    }
}
</script>
<style lang="less" scoped>
.font{
    font-family:SourceHanSansCN-Bold; font-weight:bold;
}


nav{
    width: 100%; height: 1.3rem;
    .navTitle{
        width: 100%; height: 0.43rem; border-bottom: 1px solid #999999; padding: 0 3.6rem; 
        display: flex; justify-content: space-between; align-items: center; font-size: 0.14rem; color: #333333;
        div{
            width: 1.87rem; height: 100%; background-color: #999999; color: white; text-align: center; line-height: 0.43rem;
            img{width: 0.13rrem; height: 0.13rem; margin-right: 0.05rem; position: relative; top: 0.02rem;}
        }
    }
    .navTab{
        width: 100%; height: 0.86rem; display: flex; justify-content: space-between; align-items: center; padding: 0 3.6rem; 
        font-size: 0.18rem; 
        img{width: 1.97rem; height: 100%;;}
        .navTabList{
            .solid{width: 0.3rem; height: 0.04rem; background-color: white; margin: 0 auto; position: relative; top: 0.08rem;}
            a{color: #999999; text-decoration: none;}
            div{color: #999999;}
        }
        .navTabList_active{
            a{color: #000000; .font;}
            div{color: #000000; .font;}
            .solid{background-color: #FF3333!important;}
        }
    }
}
</style>

