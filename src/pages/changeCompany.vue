<template>
    <div id="changeCompany">

        <nav id="navs"><img src="../assets/images/changeCompany/banner.png" alt="" srcset=""></nav>

        <div id="tconarind">
                <p class="toptitle">杭州公司注册详细介绍</p>
                <p class="top_text">全程网上办理，铭磊财务选择经验丰富工商代理人，快速为您注册内资公司</p>
                <div class="imgdsd">
                    <img
                    src="../assets/images/ourServices/line.png"
                    alt=""
                    >
                </div>

                <div class="list_title">
                    <div
                    class="navTabLists"
                    :class="{navTabList_active: index == tabIndex}"
                    v-for="(item,index) in tabList"
                    :key="index"
                    @click="changeTabs(index)"
                    >{{item.title}}</div>
                </div>

                <div class="teberlist">
                    <div class="list_post">
                    <div>
                        <img
                        src="../assets/images/ourServices/list_a.png"
                        alt=""
                        >
                    </div>
                    <p>核准新公司名称</p>
                    </div>

                    <img
                    src="../assets/images/ourServices/biaogeneipaixujiantou.png"
                    alt=""
                    class="onlimgs"
                    >
                    <div class="list_post">
                    <div>
                        <img
                        src="../assets/images/ourServices/list_a.png"
                        alt=""
                        >
                    </div>
                    <p>递交变更资料</p>
                    </div>

                    <img
                    src="../assets/images/ourServices/biaogeneipaixujiantou.png"
                    alt=""
                    class="onlimgs"
                    >

                    <div class="list_post">
                    <div>
                        <img
                        src="../assets/images/ourServices/list_a.png"
                        alt=""
                        >
                    </div>
                    <p>领取新营业执照</p>
                    </div>

                    <img
                    src="../assets/images/ourServices/biaogeneipaixujiantou.png"
                    alt=""
                    class="onlimgs"
                    >
                    <div class="list_post">
                    <div>
                        <img
                        src="../assets/images/ourServices/list_a.png"
                        alt=""
                        >
                    </div>
                    <p>刻制新印章</p>
                    </div>

                </div>
                <div class="buttom_text">轻松四步快速变更，无需法人股东到现场，即可一站式全程代办变更事项</div>
                </div>

        <div id="change">
            <div class="change_title">
                <h1>工商变更服务内容</h1>
                <p>用我们引以为傲的专业与服务，为客户创造无与伦比的价值</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="change_list">
                <section v-for="(item,index) in changeList" :key="index">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </section>
            </div>
        </div>

        <div class="casconter">
                <p class="toptitle">常见问题</p>
                <p class="top_text">全程网上办理，铭磊财务选择经验丰富工商代理人，快速为您注册内资公司</p>
                <div class="imgdsd">
                    <img
                    src="../assets/images/ourServices/line.png"
                    alt=""
                    >
                </div>
                <div class="biprbloms">
                    <div class="blomsa">
                    <div class="blomsa_aas">
                        <img
                        src="../assets/images/ourServices/tuoyuanimg.png"
                        alt=""
                        class="onimhdf"
                        >
                        <div class="blomsa_aab">变更法人要多久？</div>
                    </div>
                    <div class="blomsa_aas">
                        <div class="blomsa_aabs">7个工作日左右全部办理完成</div>
                        <img
                        src="../assets/images/ourServices/tuoyuanimg.png"
                        alt=""
                        class="omimhgdf"
                        >
                    </div>
                    </div>
                    <div class="blomsb">
                    <div class="blomsa_aas">
                        <img
                        src="../assets/images/ourServices/tuoyuanimg.png"
                        alt=""
                        class="onimhdf"
                        >
                        <div class="blomsa_aab">变更资本注册事项</div>
                    </div>
                    <div class="blomsa_aas">
                        <div class="blomsa_aabs">1：认缴变更（费用流程时间都是按照正常办的） 2：实缴变更（流程多了一个垫资流程及时间）费用也有所不同，按照需要实缴的金额多少来收取费用
                        </div>
                        <img
                        src="../assets/images/ourServices/tuoyuanimg.png"
                        alt=""
                        class="omimhgdf"
                        >
                    </div>
                    </div>
                </div>
                </div>

                <!--铭磊财务服务保障-->
                <div class="butoncontre">
                <p class="toptitle">铭磊财务服务保障</p>
                <p class="top_text">用我们引以为傲的专业与服务，为客户创造无与伦比的价值</p>
                <div class="imgdsd">
                    <img
                    src="../assets/images/ourServices/line.png"
                    alt=""
                    >
                </div>
                <div class="nameSolid">
                    <div
                    class="omlist_list"
                    v-for="(item,index) in postlist_ls"
                    :key="index"
                    >
                    <div class="img_li">
                        <img
                        :src="item.pic"
                        alt=""
                        >
                    </div>
                    <div class="listtest">{{item.title}}</div>
                    <div class="onlisttext">{{item.text}}
                    </div>
                    </div>
                </div>
                </div>



        <div id="CustomerVoice">
            <div class="CustomerVoice_title">
                <h1>客户心声</h1>
                <p>全程网上办理，铭磊财务选择经验丰富工商代理人，快速为您注册内资公司</p>
                <div class="nameQuerySolid"></div>
            </div>
            <el-carousel class="CustomerVoice_swiper" :autoplay="false" height="3rem" indicator-position="none" arrow="never" ref="carousels" @change="changes">
                <el-carousel-item class="CustomerVoice_swiper_list" v-for="(item,index) in 4" :key="index">
                    <div class="CustomerVoice_item">
                        <section>
                            <div class="pic">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2139664590,2753771944&fm=26&gp=0.jpg" alt="" srcset="">
                                <div><h5>杭州西湖区-陈先生</h5></div>
                            </div>
                        </section>
                        <div class="CustomerVoice_content">
                            <p>“接完铭磊财务客服的电话，深深感受到她的专业。不仅帮我全面的解答我疑惑的问题，还给了一些合理的建义，从我的根本利益出发，全面细心，专业”</p>
                        </div>
                    </div>
                    <div class="CustomerVoice_item">
                        <section>
                            <div class="pic">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2139664590,2753771944&fm=26&gp=0.jpg" alt="" srcset="">
                                <div><h5>杭州西湖区-陈先生</h5></div>
                            </div>
                        </section>
                        <div class="CustomerVoice_content">
                            <p>“接完铭磊财务客服的电话，深深感受到她的专业。不仅帮我全面的解答我疑惑的问题，还给了一些合理的建义，从我的根本利益出发，全面细心，专业”</p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="indicators"><section v-for="(item,index) in 4" :key="index" :class="{indicator_active: index == indicatorIndexs}" @mouseenter="enters(index)"></section></div>
            <img class="swiper_lefts" @click="prevs" src="../assets/images/home/youfanyeLeft.png" alt="" srcset="">
            <img class="swiper_rights" @click="nexts" src="../assets/images/home/youfanyeRight.png" alt="" srcset="">
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            tabIndex: 0,
            tab_Index: 0,
            tabList: [
                { title: "流 程" },
                { title: "所需资料" },
                { title: "办理时间" }
            ],
            changeList:[
                {title: '变更法人', img:require('../assets/images/changeCompany/faren.png')},
                {title: '变更地址', img:require('../assets/images/changeCompany/dizhi.png')},
                {title: '变更股东', img:require('../assets/images/changeCompany/gudong.png')},
                {title: '变更名称', img:require('../assets/images/changeCompany/mingcheng.png')},
                {title: '变更注册资本', img:require('../assets/images/changeCompany/zibeng.png')},
                {title: '变更经营范围', img:require('../assets/images/changeCompany/fanwei.png')},
            ],
            postlist_ls: [
                {
                pic: require("../assets/images/ourServices/icon1xs.png"),
                title: "品牌企业",
                text:
                    "1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。"
                },
                {
                pic: require("../assets/images/ourServices/iconimg.png"),
                title: "信息保密",
                text:
                    "1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。"
                },
                {
                pic: require("../assets/images/ourServices/ioconima.png"),
                title: "专人一对一服务",
                text:
                    "1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。"
                },
                {
                pic: require("../assets/images/ourServices/icon4xsda.png"),
                title: "信誉保障",
                text:
                    "1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。"
                },
                {
                pic: require("../assets/images/ourServices/icsm.png"),
                title: "一体化服务平台",
                text:
                    "1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。"
                },
                {
                pic: require("../assets/images/ourServices/adminimg.png"),
                title: "全程代办",
                text:
                    "1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。"
                }
            ],

            indicatorIndexs:0,
        }
    },
    methods:{
        changeTabs(index) {
            this.tabIndex = index;
        },
        enters(index){
            this.indicatorIndexs = index
            this.$refs.carousels.setActiveItem(index)
        },
        prevs(){
            this.$refs.carousels.prev()
        },
        nexts(){
            this.$refs.carousels.next()
        },
        changes(e){
            // console.log(e)
            this.indicatorIndexs = e
        }
    }
}
</script>
<style lang="less" scoped>
#changeCompany{
    width: 100%;
}


.font{
    font-family:SourceHanSansCN-Bold; font-weight:bold;
}

#navs{
    width: 100%; height: 4.7rem;
    img{width: 100%; height: 100%;}
}


#change{
    width: 11.75rem; height: 9rem; margin: 0 auto; margin-top: 1.2rem;
    .change_title{
        width: 100%; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.35rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.02rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .change_list{
        width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap; margin-top: 0.6rem;
        section{
            width: 3.2rem; height: 3.08rem; text-align: center; margin-bottom: 0.3rem; padding-top: 0.35rem;
            box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem; font-size: 0.24rem; .font;
            img{width: 0.78rem; height: 1.06rem; margin-bottom: 0.15rem;}
        }
        section:nth-child(2),section:nth-child(3){ img{width: 0.95rem;} }
        section:nth-child(4){ img{width: 1.03rem; height: 1.12rem;} }
        section:nth-child(5){ img{width: 1.06rem; height: 1.04rem;} }
        section:nth-child(6){ img{width: 1.06rem; height: 1.06rem;} }
    }
}




//杭州公司注册详细介绍

#tconarind {
  width: 100%;
  margin-top: 0.49rem;
}

.toptitle {
  width: 100%;
  font-size: 0.36rem;
  text-align: center;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
  letter-spacing: 0.01rem;
}

.imgdsd img {
  width: 0.47rem; height: 0.03rem;
}

.list_title {
  width: 5.2rem;
  height: auto;
  display: flex;
  margin: 0.5rem auto;
}

.list_post {
  height: 1.45rem;
  margin: 0.5rem 0.4rem;
  text-align: center;
}

.list_post div {
  width: 1.7rem;
  height: 0.95rem;
  text-align: center;
}

.list_post div img {
  width: 1.2rem;
  height: 100%;
}

.onlimgs {
  width: 0.14rem;
  height: 0.1rem;
  margin-top: 0.88rem;
  margin-right: 0.3rem;
}

.list_post p {
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
  margin-top: 0.4rem;
  margin-left: 0.015rem;
  letter-spacing: 0.01rem;
}

.navTabLists {
  width: 1.2rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: auto;
  letter-spacing: 0.01rem;
  cursor: pointer;
}

.navTabList_active {
  background: rgba(255, 175, 36, 1);
  border-radius: 0.25rem;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.teberlist {
  width: 11.51rem;
  height: 3.5rem;
  margin: -0.25rem auto;
  display: flex;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0.09rem 0.3rem 0rem rgba(204, 204, 204, 0.35);
  border-radius: 0.06rem;
}

.buttom_text {
  width: 100%;
  height: 0.2rem;
  font-size: 0.2rem;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 51, 51, 1);
  text-align: center;
  margin-top: -0.7rem;
}



//页面公用
.top_text {
  font-size: 0.16rem;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 0.24rem;
  text-align: center;
  margin-top: 0.13rem;
  letter-spacing: 0.01rem;
}

.imgdsd {
  width: 100%;
  text-align: center;
}
.toptitle {
  width: 100%;
  font-size: 0.36rem;
  text-align: center;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
  letter-spacing: 0.01rem;
}



//casconter
.casconter {
    width: 100%;
    margin-top: 1.3rem;
    }

    .biprbloms {
    width: 10.75rem;
    height: 3.8rem;
    display: flex;
    margin: 0.64rem auto;
    }

    .blomsa,.blomsb{
    width: 4.9rem;
    height: 3.8rem; text-align: left;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35);
    border-radius: 0.06rem;
    }
    .blomsb{margin-left: 0.95rem;}

    .blomsa_aas {
    width: 100%;
    height: 0.6rem;
    background-color: #ffffff;
    box-shadow: none;
    display: flex;
    }

    .onimhdf {
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.5rem 0.15rem;
    }

    .omimhgdf {
    width: 0.2rem;
    height: 0.2rem;
    margin-top: 0.9rem;
    margin-left: 0.15rem;
    }

    .blomsa_aab {
    min-width: 3.6rem; padding-left: 0.2rem;
    height: 0.6rem;
    background: rgba(255, 175, 36, 1);
    border-radius: 0.06rem;
    margin: 0.3rem 0.01rem;
    font-size: 0.24rem;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 0.01rem;
    line-height: 0.6rem;
    letter-spacing: 0.01rem;
    }

    .blomsa_aabs {
    letter-spacing: 0.01rem; overflow: hidden;
    width: 3.6rem;
    height: 2.1rem;
    background: rgba(238, 238, 238, 1);
    border-radius: 0.06rem;
    font-size: 0.14rem;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-left: 0.8rem;
    margin-top: 0.7rem;
    padding: 0.1rem 0.2rem;
    }

// butoncontre

.butoncontre {
  width: 100%; text-align: center;
  margin-top: 1rem;
}

.nameSolid {
  width: 10.5rem;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0.1rem auto;
}

.omlist_list {
  width: 2.04rem;
  height: 1.91rem;
  margin: 0.7rem 0.6rem;
  display: flex;
  flex-direction: column;
}

.img_li {
  width: 100%;
  height: 0.9rem;
  text-align: center;
}
.img_li img {
  width: 0.9rem;
  height: 0.9rem;
}
.listtest {
  width: 100%;
  height: 0.9rem;
  margin-top: 0.1rem;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: center;
  color: rgba(51, 51, 51, 1);
}
.onlisttext {
  width: 2.04rem;
  height: 0.48rem;
  font-size: 0.12rem;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}














.indicators{
    width: 3rem; display: flex; justify-content: space-around; position: absolute; bottom: 0.5rem; left: 4.5rem; z-index: 10;
    section{width: 0.32rem; height: 0.32rem; border-radius: 50%; background-color: #CCCCCC;}
    .indicator_active{background-color: #FF3333;}
}
.swiper_lefts,.swiper_rights{
    width: 0.8rem; height: 0.8rem; z-index: 10;
}
.swiper_lefts{ position: absolute; left: -1rem; top: 2.7rem;}
.swiper_rights{ position: absolute; right: -1rem; top: 2.7rem;}



#CustomerVoice{
    width: 12rem; height: 6rem; margin: 0 auto; position: relative; margin-top: 1rem; margin-bottom: 0.5rem;
    .CustomerVoice_title{
        width: 100%; text-align: center; margin-bottom: 0.5rem;
        h1{font-size: 0.36rem; .font; color: #666666; line-height: 0.6rem;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.25rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .CustomerVoice_swiper{
        width: 11.5rem;box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem;
        margin: 0 auto;
        .CustomerVoice_swiper_list{
            
            // width: 4.5rem;
            // padding: 0 1rem;
            .CustomerVoice_item{
                width: 5.5rem; height: 2.96rem; background: white;
                padding: 0.3rem; float: left; margin-right: 0.48rem;
                box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem;
                section{
                    width: 100%;display: flex; align-items: center;
                    .pic{
                        display: flex; align-items: center; font-size: 0.14rem;
                        h5{font-size: 0.28rem; margin-bottom: 0.1rem;}
                        img{width: 1rem; height: 1rem; border-radius: 50%; margin-right: 0.2rem;}
                    }
                    .click{
                        width: 1rem; height: 0.34rem; background-color: #FF3333; border-radius: 0.17rem;
                        text-align: center; color: white; font-size: 0.18rem; line-height: 0.34rem;
                    }
                }
                .CustomerVoice_content{
                    width: 3.5rem; font-size: 0.18rem; margin-top: 0.15rem; margin-left: 1.2rem;
                    span{color: #FF3333; font-size: 0.24rem;font-family:Arial-BoldMT;font-weight:bold;}
                }
            }
            .CustomerVoice_item:last-child{margin-right: 0;}
        }
    }
}



</style>
