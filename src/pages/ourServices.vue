<template>
    <div id="ourServices">

        <nav id="navs">
            <!-- 免费查询名称 -->
            <div class="nameQuery">
                <h1>公司名称快速查询</h1>
                <div class="query">
                    <div class="queryInput">
                        <div>
                            <input type="text" v-model="name" placeholder="请输入你需要查询的公司名称">
                            <img class="link" src="../assets/images/home/icon_serch.png" alt="" srcset="">
                        </div>
                        <div>
                            <input type="text" v-model="phone" placeholder="输入电话号码">
                            <img class="link" src="../assets/images/home/icon_phone.png" alt="" srcset="">
                        </div>
                        <div class="select" @click="queryName">立即查询能否注册</div>
                    </div>
                    <div class="result">
                        <div>
                            <p>目前已有51817次查询 最新查询结果如下：</p>
                            <ul>
                                <li>杭州***科技有限公司 手机号：180****0769 可以注册</li>
                                <li>杭州***科技有限公司 手机号：180****0769 可以注册</li>
                                <li>杭州***科技有限公司 手机号：180****0769 可以注册</li>
                                <li>杭州***科技有限公司 手机号：180****0769 可以注册</li>
                            </ul>
                        </div>
                        <div class="tool">
                            <p>常用的工具有：</p>
                            <div>
                                <section v-for="(item,index) in toolList" :key="index">
                                    <img class="link" :src="item.img" alt="" srcset="">
                                    <p>{{item.title}}</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <section id="sections">
            <div class="tconarind">
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

                <!--铭磊财务-->
                <div class="mlcwliat">
                <p class="toptitles">铭磊财务</p>
                <p class="top_text">用我们引以为傲的专业与服务，为客户创造无与伦比的价值</p>
                <div class="imgdsd">
                    <img
                    src="../assets/images/ourServices/line.png"
                    alt=""
                    >
                </div>

                <div class="contniaer">
                    <div class="con_navds">
                    <div class="conr_img">
                        <img
                        src="../assets/images/ourServices/iconads.png"
                        alt=""
                        >
                        <div class="navs_asd">
                        <div>铭磊财务</div>
                        <div>传统代理所</div>
                        </div>
                        <div
                        class="omdiv_lsit"
                        v-for="(item,index) in delist"
                        :key="index"
                        >
                        <div>{{item.text}}</div>
                        <div>{{item.title}}</div>
                        </div>
                    </div>
                    </div>

                    <div class="nac_btn">
                    <div class="btn_s">
                        <img
                        src="../assets/images/ourServices/icon_icom.png"
                        alt=""
                        >
                    </div>
                    <div class="castext"><span>通过整合线下资源及搭建网上系统，铭 磊财务降低了工商 注册的成本。与传统 代办相比，</span>
                        <span style="color:#FF3333">至少节省400～1000元！</span>
                    </div>
                    <div class="nbt_ttext">郑重承诺：如因我司原因造成没有成功办理好注册公司，现我司全额退款。</div>
                    </div>
                    
                </div>
                </div>

                <!--公司成立之后还需要做什么？-->
                <div id="btn_contern">
                <p class="toptitlee">公司成立之后还需要做什么？</p>
                <p class="top_text">全程网上办理，铭磊财务选择经验丰富工商代理人，快速为您注册内资公司</p>
                <div class="imgdsd">
                    <img
                    src="../assets/images/ourServices/line.png"
                    alt=""
                    >
                </div>
                <div class="list_titles">
                    <div
                    class="navTabList"
                    :class="{navTabList_actives: index == tab_Index}"
                    v-for="(item,index) in tabListed"
                    :key="index"
                    @click="changeTabsd(index)"
                    >{{item.title}}</div>
                </div>
                <div class="conliat_post">
                    <div>
                    <img
                        src="../assets/images/ourServices/pic232x.png"
                        alt=""
                    >
                    <p>记帐凭证样板</p>
                    </div>
                    <div>
                    <p class="ontitlesw">找一名会计办理税务报到，记账报税</p>
                    <div class="ontuose">
                        <img
                        src="../assets/images/ourServices/tuoyuanimg.png"
                        alt=""
                        >
                        <span>公司注册完成后，需要立即进行税务报到</span>
                    </div>
                    <div class="onter"> 1.营业执照正副本 2.法人身份证 3.公章、财务章、私章
                        4.租赁合同（若没有，我公司可想办法处理）
                    </div>
                    <div class="ontuose">
                        <img
                        src="../assets/images/ourServices/tuoyuanimg.png"
                        alt=""
                        >
                        <span>公司注册完成后，需要立即进行税务报到</span>
                    </div>
                    <div class="onter"> 1.营业执照正副本 2.法人身份证 3.公章、财务章、私章
                        4.租赁合同（若没有，我公司可想办法处理）
                    </div>
                    </div>
                </div>
                <div class="tit_tet">铭磊财务记账报税：资深会计，为您做账报税，高效无忧</div>
                <div class="tit_tets">
                    <a href="#choose">
                        <input
                        type="button"
                        value="了解更多"
                        @click="$router.push({path:'/'})"
                        >
                    </a>
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
        </section>



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



        <el-dialog
            title="温馨提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>我们即将会有专员与您联系，告知您查询结果</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
export default {
    data(){
        return{
            toolList:[
                {title: '经营范围表', img:require('../assets/images/home/icon_fanwei.png')},
                {title: '行业分类表', img:require('../assets/images/home/icon_fl.png')},
                {title: '商标查询', img:require('../assets/images/home/icon_sb.png')},
                {title: '立即免费咨询', img:require('../assets/images/home/icon_xx.png')},
            ],
            tabIndex: 0,
            tab_Index: 0,
            tabList: [
                { title: "流 程" },
                { title: "所需资料" },
                { title: "办理时间" }
            ],
            tabListed: [
                { title: "记账报税" },
                { title: "银行开户" },
                { title: "申请一般纳税人" },
                { title: "商标注册" },
                { title: "社保开户" },
                { title: "网站建设" }
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
            delist: [
                {
                text: "服务费：0元起",
                title: "服务费：2000元起"
                },
                {
                text: "服务费：0元起",
                title: "服务费：2000元起"
                },
                {
                text: "服务费：0元起",
                title: "服务费：2000元起"
                },
                {
                text: "服务费：0元起",
                title: "服务费：2000元起"
                },
                {
                text: "服务费：0元起",
                title: "服务费：2000元起"
                },
                {
                text: "服务费：0元起",
                title: "服务费：2000元起"
                }
            ],

            indicatorIndexs:0,
            name:'', phone:'',centerDialogVisible: false,
        }
    },
    methods:{
        changeTabs(index) {
            this.tabIndex = index;
        },
        changeTabsd(index) {
            this.tab_Index = index;
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
        },
        queryName(){
            if(this.name !='' && this.phone != ''){
                let data ={
                    user_name: this.name, phone_number: this.phone
                }
                this.isQuery = false
                this.query(data)
            }else{
                this.$message({
                    message: '输入框不能为空！',
                    type: 'warning'
                });
            }
        },
        query(data){
            this.$axios.post('/api/qfyx/public/contact', data)
            .then(res=>{
                if(res.data.status == 'success'){
                    this.centerDialogVisible = true
                    this.name = '' 
                    this.phone = ''
                }else{
                    this.$message.error('服务器！');
                }
            })
            .catch(err=>{
                this.$message.error('服务器！');
            })
        },
    }
}
</script>
<style lang="less" scoped>
#ourServices{
    width: 100%;
}

.font{
    font-family:SourceHanSansCN-Bold; font-weight:bold;
}

#navs{
    width: 100%; height: 5.7rem; padding-top: 0.7rem;
    background: url(../assets/images/ourServices/bg_1.png) no-repeat; background-size: 100% 100%;
}


.nameQuery{
    width: 100%; text-align: center;
    h1{font-size: 0.36rem; .font; color: #FFFFFF;}
    .query{
        width: 11.71rem; height: 3.7rem; margin: 0 auto; margin-top: 0.53rem; padding: 0.5rem 0.85rem;
        box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem; background-color: white;
    }
    .queryInput{
        width: 100%; display: flex; text-align: left;
        div{
            width: 3.73rem; height: 0.5rem; background-color: #F3F3F3; border-radius: 0.25rem;
            margin-right: 0.3rem; position: relative;
            input{
                width: 100%; height: 100%; border: 0; background: none; outline: none;
                padding-left: 0.45rem;
            }
            img{
                width: 0.2rem; height: 0.3rem; position: absolute; top: 0.1rem; left: 0.18rem;
            }
        }
        .select{
            width: 1.78rem; height: 0.48rem; background-color: #FF3333; color: white; line-height: 0.48rem;
            box-shadow:0px 0.03rem 0.1rem 0px rgba(255, 51, 51, 0.35); border-radius:0.24rem; text-align: center;
            font-size: 0.16rem;
        }
        .select:hover{cursor: pointer;}
    }
    .result{
        width: 100%; text-align: left; margin-top: 0.59rem; 
        display: flex; justify-content: space-between;
        p{color: #666666; font-size: 0.2rem;}
        ul{
            margin-left: 0.22rem; margin-top: 0.1rem;
            li{font-size: 0.16rem; color: #999999; line-height: 0.3rem;}
        }
        .tool{
            width: 50%;
            div{ display: flex; justify-content: space-between; align-items: flex-end;} 
            section{
                text-align: center; 
                p{font-size: 0.16rem; color: #666666;}
            }
            section>img{width: 0.44rem; height: 0.5rem; margin-bottom: 0.1rem;}
            section:nth-child(2)>img{width: 0.41rem; height: 0.5rem;}
            section:nth-child(3)>img{width: 0.48rem; height: 0.48rem;}
            section:nth-child(4)>img{width: 0.91rem; height: 0.91rem;}
        }
    }
}





#sections{
    width: 100%;
}



//杭州公司注册详细介绍

.tconarind {
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
  width: 0.24rem;
  height: 0.02rem;
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

//mlcwliat

.mlcwliat {
  width: 100%;
  margin-top: 1.7rem;
}

.toptitles {
  width: 100%;
  font-size: 0.36rem;
  text-align: center;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
  letter-spacing: 0.01rem;
}

.contniaer {
  width: 11.71rem;
  height: 6.35rem;
  margin: 1.2rem auto;
  display: flex;
}

.con_navds {
  width: 7.1rem;
  height: 6.35rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35);
  border-radius: 0.06rem;
}

.conr_img {
  width: 100%;
  height: 1rem;
  text-align: center;
}

.conr_img img {
  width: 1.6rem;
  height: 1.6rem;
  margin-top: -0.63rem;
}

.navs_asd {
  width: 6.5rem;
  height: 0.38rem;
  margin: auto;
  display: flex;
}

.navs_asd div:nth-child(1) {
  width: 3.25rem;
  height: 0.38rem;
  text-align: center;
  line-height: 0.38rem;
  font-size: 0.4rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(255, 51, 51, 1);
  text-shadow: 0px 0px 0.1rem rgba(255, 51, 51, 0.19);
}

.navs_asd div:nth-child(2) {
  width: 3.25rem;
  height: 0.38rem;
  text-align: center;
  line-height: 0.38rem;
  font-size: 0.4rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(153, 153, 153, 1);
}

.omdiv_lsit {
  width: 6.5rem;
  height: 0.48rem;
  margin: 0.2rem auto;
  display: flex;
  position: relative;
  top: 0.6rem;
}

.omdiv_lsit div:nth-child(1) {
  width: 3rem;
  height: 0.48rem;
  text-align: center;
  background: rgba(255, 175, 36, 1);
  border-radius: 0.24rem;
  font-size: 0.2rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 0.48rem;
}

.omdiv_lsit div:nth-child(2) {
  width: 3rem;
  height: 0.48rem;
  margin-left: 0.5rem;
  text-align: center;
  background: rgba(204, 204, 204, 1);
  border-radius: 0.24rem;
  font-size: 0.2rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 0.48rem;
}

.nac_btn {
  width: 4.61rem;
  height: 6.35rem;
}

.btn_s {
  width: 100%;
  height: 2.45rem;
  text-align: center;
}

.btn_s img {
  width: 2.11rem;
  height: 2.45rem;
}

.castext {
  width: 4.1rem;
  margin: 0.49rem 0.51rem auto;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
  padding: 0.01rem;
}

.nbt_ttext {
  width: 4.1rem;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(255, 51, 51, 1);
  margin: 1.05rem 0.51rem auto;
}

//btn_contern

#btn_contern {
  width: 100%;
  margin-top: 1.3rem;
}

.list_titles {
  width: 11.71rem;
  height: auto;
  display: flex;
  margin: 0.43rem auto;
}

.navTabList {
  width: 1.85rem;
  height: 0.5rem;
  font-size: 0.24rem;
  text-align: center;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.5rem;
  cursor: pointer;
  margin-left: 0.06rem;
}

.navTabList_actives {
  background: rgba(255, 175, 36, 1);
  border-radius: 0.25rem;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.conliat_post {
  width: 11.71rem;
  height: 4.38rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35);
  border-radius: 0.02rem;
  margin: auto;
  display: flex;
}

.conliat_post div:nth-child(1) {
  width: 3.6rem;
  height: 4.38rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.5rem auto;
}

.conliat_post div:nth-child(1) img {
  width: 3.6rem;
  height: 2.6rem;
}

.conliat_post div:nth-child(1) p {
  width: 3.6rem;
  height: 2.6rem;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin-top: 0.5rem;
  letter-spacing: 0.01rem;
}

.ontitlesw {
  font-size: 0.32rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin-top: 0.4rem;
}

.ontuose {
  display: flex;
  margin-top: 0.52rem;
}

.ontuose img {
  width: 0.12rem;
  height: 0.12rem;
}

.ontuose span {
  margin: -0.09rem 0.07rem;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
}

.onter {
  width: 5.88rem;
  margin: -0.09rem 0.07rem;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
  font-weight: 400;
  margin: 0.2rem 0.2rem;
}

.blomsb {
  width: 4.9rem;
  height: 3.8rem;
  margin-left: 0.95rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35);
  border-radius: 0.06rem;
}

.tit_tet {
  width: 11.71rem;
  height: 0.24rem;
  text-align: center;
  margin: 0.5rem auto;
  font-size: 0.24rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}

.tit_tets {
  width: 11.71rem;
  height: 0.48rem;
  text-align: center;
  margin: -0.1rem auto;
}

.tit_tets input {
  width: 1.26rem;
  height: 0.48rem;
  text-align: center;
  border: none;
  line-height: 0.48rem;
  font-size: 0.2rem;
  font-family: SourceHanSansSC-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  background: rgba(255, 175, 36, 1);
  box-shadow: 0px 0.03rem 0.1rem 0px rgba(255, 51, 51, 0.35);
  border-radius: 0.24rem;
  outline: none !important;
  cursor: pointer;
}
.toptitlee {
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
  width: 100%;
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
