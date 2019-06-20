<template>
    <div id="transfer">

        <nav id="navs"></nav>
        <!-- <nav><a href="#choose" @click="$router.push({path:'/'})">asdas</a></nav> -->

        <div id="statistical">
            <p>今日成功转让  <span>6</span> 家 </p><p>累计已转让  <span>1325</span> 家</p><p>待转让资源  <span>1801</span> 家</p>
        </div>

        <div id="transferStatistical">
            <div class="transferStatistical_title">
                <h1>公司转让行业汇总</h1>
                <p>至今已成功转让公司累计3600多家，平台有海量待转让公司任你选！</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="transferStatistical_list">
                <section v-for="(item,index) in transferStatisticalList" :key="index">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </section>
            </div>
        </div>

        <div id="recommended">
            <div class="recommended_title">
                <h1>热门行业推荐</h1>
                <p>优质、稀缺类公司转让资源，铭磊财务独家拥有，先下手者先得</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="recommended_list">
                <section v-for="(item,index) in 3" :key="index">
                    <img src="../assets/images/transfer/1493710635.png" alt="">
                    <div class="recommended_list_cont">
                        <h5>2014年小规模电子公司转让</h5>
                        <h5>转让价格：<span>面议</span></h5>
                        <p>下城区 | 小规模纳税人| 2015年｜50万</p>
                    </div>
                    <a href="#choose" @click="$router.push({path:'/'})"><div class="consulting">立即咨询</div></a>
                </section>
            </div>
        </div>
        <div id="recommended">
            <div class="recommended_title">
                <h1>特惠公司推荐</h1>
                <p>优质、稀缺类公司转让资源，铭磊财务独家拥有，先下手者先得</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="recommended_list">
                <section v-for="(item,index) in 3" :key="index">
                    <img src="../assets/images/transfer/1493710635.png" alt="">
                    <div class="recommended_list_cont">
                        <h5>2014年小规模电子公司转让</h5>
                        <h5>转让价格：<span>面议</span></h5>
                        <p>下城区 | 小规模纳税人| 2015年｜50万</p>
                    </div>
                    <a href="#choose" @click="$router.push({path:'/'})"><div class="consulting">立即咨询</div></a>
                </section>
            </div>
        </div>


        <div id="transferProcess">
            <div class="transferProcess_title">
                <h1>公司转让流程</h1>
                <p>至今已成功转让公司累计3600多家，平台有海量待转让公司任你选！</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="transferProcess_list">
                <img src="../assets/images/transfer/lct.png" alt="" srcset="">
            </div>
        </div>


        <div id="SuccessfulCases">
            <div class="SuccessfulCases_title">
                <h1>成功案例</h1>
                <p>铭磊财务深耕十一年，至今已成功转让公司累计3600多家，真实案例展示</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="SuccessfulCases_list">
                <div v-for="(item,index) in 3" :key="index">
                    <h3>杭州***管理有限公司</h3>
                    <p>投资管理</p>
                    <p>成立年限:2年</p>
                    <p>注册资金:100万</p>
                    <h5>已成功转让</h5>
                </div>
            </div>
        </div>


        <div id="CommonProblems">
            <div class="CommonProblems_title">
                <h1>常见问题</h1>
                <p>公司转让最常见问题汇总解答，若以下没有你需要的问题，可以咨询客服。</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="biprbloms">
                <div class="blomsa">
                    <div class="blomsa_aas">
                    <img src="../assets/images/ourServices/tuoyuanimg.png" alt="" class="onimhdf">
                    <div class="blomsa_aab">怎么办理公司转让的线下手续呢？</div>
                    </div>
                    <div class="blomsa_aas">
                    <div class="blomsa_aabs">
                            铭磊财务建议：在正式前往政务服务中心签字确认公司
转让的工商手续之前，由卖家负责，因此前公司的基本
资料都在卖家这里；在签字手续完成之后，则由收购方
负责，因为这时的公司从各方面来看，已属于收购方。同
时为了保证买卖双方的权益，转无忧会把控公司转让中
间环节，督促买方正常处理账务，转让过户完成后，如收
购方需要，转无忧也会免费为收购方处理收购后首月账
务，保证税务正常。
                        </div>
                    <img src="../assets/images/ourServices/tuoyuanimg.png" alt="" class="omimhgdf">
                    </div>
                </div>
                <div class="blomsb">
                    <div class="blomsa_aas">
                    <img src="../assets/images/ourServices/tuoyuanimg.png" alt="" class="onimhdf">
                    <div class="blomsa_aab">怎么办理公司转让的线下手续呢？</div>
                    </div>
                    <div class="blomsa_aas">
                    <div
                        class="blomsa_aabs"
                    >
                            铭磊财务建议：在正式前往政务服务中心签字确认公司
转让的工商手续之前，由卖家负责，因此前公司的基本
资料都在卖家这里；在签字手续完成之后，则由收购方
负责，因为这时的公司从各方面来看，已属于收购方。同
时为了保证买卖双方的权益，转无忧会把控公司转让中
间环节，督促买方正常处理账务，转让过户完成后，如收
购方需要，转无忧也会免费为收购方处理收购后首月账
务，保证税务正常。
                        </div>
                    <img src="../assets/images/ourServices/tuoyuanimg.png" alt="" class="omimhgdf">
                    </div>
                </div>
            </div>
        </div>


        <div id="transferStatistical" class="Needservice">
            <div class="transferStatistical_title">
                <h1>公司转让之后，您可能需要以下服务</h1>
                <p>至今已成功转让公司累计3600多家，平台有海量待转让公司任你选！</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="transferStatistical_list">
                <section v-for="(item,index) in NeedserviceList" :key="index">
                    <img class="NeedserviceList" :src="item.img" alt="">
                    <p class="NeedserviceList_title">{{item.title}}</p>
                </section>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            transferStatisticalList:[
                {title: '电子商务', img:require('../assets/images/transfer/dianzisw.png')},
                {title: '游戏', img:require('../assets/images/transfer/youxi.png')},
                {title: '医疗健康', img:require('../assets/images/transfer/yiliao.png')},
                {title: '旅游', img:require('../assets/images/transfer/lvyou.png')},
                {title: '音乐/视频/阅读', img:require('../assets/images/transfer/yingyue.png')},
                {title: '企业服务', img:require('../assets/images/transfer/fuwu.png')},
                {title: '移动互联网', img:require('../assets/images/transfer/hulianwang.png')},
                {title: '物流/仓储', img:require('../assets/images/transfer/wuliu.png')},
                {title: '汽车生产', img:require('../assets/images/transfer/qiche.png')},
                {title: '其他行业', img:require('../assets/images/transfer/qita.png')},
            ],
            NeedserviceList:[
                {title: '代理记账报税', img:require('../assets/images/transfer/baoshui.png')},
                {title: '代理注册商标', img:require('../assets/images/transfer/shangbiao.png')},
                {title: '代理网站建设', img:require('../assets/images/transfer/wangzhan.png')},
                {title: '代理财务顾问', img:require('../assets/images/transfer/caiwu.png')},
            ],
        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
#transfer{
    width: 100%;
}

.font{
    font-family:SourceHanSansCN-Bold; font-weight:bold;
}


#navs{
    width: 100%; height: 4.5rem;
    background: url(../assets/images/transfer/1489982842.png) no-repeat; background-size: 100% 100%;
}

#statistical{
    width: 11.75rem; margin: 0 auto; display: flex; justify-content: space-between; margin-top: 0.2rem;
    font-size: 0.32rem; .font; color: #666666;
    span{font-size: 0.48rem; color: #FF3333;}
}


#transferStatistical{
    width: 11.75rem; height: 8rem; margin: 0 auto; margin-top: 1.2rem;
    .transferStatistical_title{
        width: 100%; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.35rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .transferStatistical_list{
        width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap; margin-top: 0.6rem;
        section{
            width: 2.1rem; height: 2.1rem; text-align: center; margin-bottom: 0.3rem; padding-top: 0.35rem;
            box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem; font-size: 0.24rem; .font;
            img{width: 0.9rem; height: 0.9rem; margin-bottom: 0.15rem;}
            .NeedserviceList{width: 0.59rem; height: 0.59rem; margin-top: 0.15rem;}
            .NeedserviceList_title{color:#666666;}
        }
    }
}
.Needservice{height: 6rem!important; margin-top: 0!important;}



#recommended{
    width: 11.75rem; height: 8rem; margin: 0 auto;
    .recommended_title{
        width: 100%; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.35rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .recommended_list{
        width: 100%; display: flex; justify-content: space-between; margin-top: 0.6rem;
        section{
            width: 2.88rem; height: 4.1rem; color: #666666; position: relative;
            box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem;
            img{width: 100%; height: 1.87rem;}
            .recommended_list_cont{
                width: 100%; padding: 0 0.1rem;
                h5{font-size: 0.2rem; line-height: 0.35rem; .font; span{color: #FF3333;}}
                p{font-size: 0.16rem; margin-top: 0.3rem;}
            }
            .consulting{
                width: 1.6rem; height: 0.48rem; background-color:white; color: #FFAF24; font-size: 0.2rem;
                text-align: center; line-height: 0.48rem; .font; border-radius: 0.24rem; border: 1px solid #FFAF24;
                position: absolute; bottom: 0.24rem; left: 0.64rem;
            }
            .consulting:hover{
                background-color: #FFAF24; color: white;
            }
        }
    }
}


#transferProcess{
    width: 11.75rem; height: 8rem; margin: 0 auto;
    .transferProcess_title{
        width: 100%; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.35rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .transferProcess_list{
        width: 10.7rem; height: 4.15rem; margin: 0 auto; margin-top: 0.7rem;
        img{width: 100%; height: 100%;}
    }
}



#SuccessfulCases{
    width: 11.75rem; height: 8rem; margin: 0 auto;
    .SuccessfulCases_title{
        width: 100%; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.35rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .SuccessfulCases_list{
        width: 100%; margin: 0 auto; margin-top: 0.7rem; display: flex; justify-content: space-between;
        div{
            width: 2.8rem; height: 3.18rem; text-align: center; padding: 0.4rem 0.27rem;
            box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem;
            p{
                display: inline-block; padding: 0.08rem 0.16rem; background-color: #FFAF24; border-radius: 0.16rem; color: white;
                font-size: 0.16rem; margin-top: 0.2rem;
            }
            h5{color: #666666; font-size: 0.2rem;font-family:SourceHanSansCN-Regular;font-weight:400; margin-top: 0.3rem;}
        }
    }
}



#CommonProblems{
    width: 11.75rem; height: 8rem; margin: 0 auto;
    .CommonProblems_title{
        width: 100%; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.35rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
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
}




</style>


