<template>
    <div id="home">

        <!-- banner -->
        <div class="banner">
            <div class="bannerTab">
                <div v-for="(item,index) in bannerTabList" :key="index">
                    <div v-if="index < 2" @click="LinkTo(index)">
                        <div class="bannerTabLists">
                            <div><img :src="item.img" alt="" srcset="">{{item.title}}</div>
                            <img class="link" src="../assets/images/home/qianjin.png" alt="" srcset="">
                        </div>
                    </div>
                    <a v-if="index == 2" href="#btn_contern" @click="$router.push({path:item.url})">
                        <div class="bannerTabLists">
                            <div><img :src="item.img" alt="" srcset="">{{item.title}}</div>
                            <img class="link" src="../assets/images/home/qianjin.png" alt="" srcset="">
                        </div>
                    </a>
                    <a v-if="index > 2 && index < 6" :href="item.url">
                        <div class="bannerTabLists">
                            <div><img :src="item.img" alt="" srcset="">{{item.title}}</div>
                            <img class="link" src="../assets/images/home/qianjin.png" alt="" srcset="">
                        </div>
                    </a>
                    <a v-if="index == 6" href="#tconarind" @click="$router.push({path:item.url})">
                        <div class="bannerTabLists">
                            <div><img :src="item.img" alt="" srcset="">{{item.title}}</div>
                            <img class="link" src="../assets/images/home/qianjin.png" alt="" srcset="">
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- 免费查询名称 -->
        <div class="nameQuery">
            <h1>免费查询名称</h1>
            <p>今天已有<span>391</span>名创业者免费获取查询公司名称</p>
            <div class="nameQuerySolid"></div>
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


        <!-- 热门服务 -->
        <div id="popularServices">
            <h1>热门服务</h1>
            <p>用我们引以为傲的专业与服务，为客户创造无与伦比的价值</p>
            <div class="nameQuerySolid"></div>
            <div class="popularServicesList">
                <div v-for="(item,index) in popularServicesList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <h5>{{item.title}}</h5>
                    <p>{{item.cont}}</p>
                    <a href="#choose">了解更多</a>
                </div>
            </div>
            <h1 class="Particularly">特别推荐</h1>
            <div class="ParticularlyList">
                <section>
                    <img class="back_title" src="../assets/images/home/back_title.png" alt="" srcset="">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2139664590,2753771944&fm=26&gp=0.jpg" alt="" srcset="">
                    <div>
                        <h5>杭州公司</h5>
                        <p>铭磊财务<span>0元</span>为您代办高新区公司注册，零投资， 无需场地、最快<span>3天</span>办妥，0风险、全国各地均可 办理</p>
                        <a href="#choose">了解更多</a>
                    </div>
                </section>
                <section>
                    <img class="back_title" src="../assets/images/home/back_title.png" alt="" srcset="">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2139664590,2753771944&fm=26&gp=0.jpg" alt="" srcset="">
                    <div>
                        <h5>杭州公司</h5>
                        <p>铭磊财务0元为您代办高新区公司注册，零投资， 无需场地、最快3天办妥，0风险、全国各地均可 办理</p>
                        <a href="#choose">了解更多</a>
                    </div>
                </section>
            </div>
        </div>


        <div id="advantage">
            <div class="advantage_title">
                <h1>我们的优势</h1>
                <p>全程网上办理，铭磊财务选择经验丰富工商代理人，快速为您注册内资公司、杭州注册公司、杭州代办公司、杭州代账公司、杭州工商注册、杭州代理记账、杭州公司代办、杭州营业执照代办、杭州税务咨询及处理</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="advantage_list">
                <section v-for="(item,index) in advantageList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <h5>{{item.title}}</h5>
                    <p>{{item.cont}}</p>
                </section>
            </div>
        </div>


        <div id="strengthShows">
            <div class="strength_shows">
                <section v-for="(item,index) in strengthShowsList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <p>{{item.title}}</p>
                </section>
                <div class="strength_shows_cont">
                    <div>350</div>
                    <p>公司精英<span>350</span>余人</p>
                </div>
                <div class="strength_shows_cont strength2">
                    <div>83</div>
                    <p>资深公司注册专家精英<span>83</span>人</p>
                </div>
                <div class="strength_shows_cont strength3">
                    <div>60</div>
                    <p>资深会计专家精英<span>60</span>人</p>
                </div>
                <div class="strength_shows_cont strength4">
                    <div>71</div>
                    <p>资深税务专家精英<span>71</span>人</p>
                </div>
                <div class="strength_shows_cont strength5">
                    <div>56</div>
                    <p>资深商标注册专家精英<span>56</span>人</p>
                </div>
            </div>
            <div class="strength_shows_title">
                <h1>实力展示</h1>
                <p>用我们引以为傲的专业与服务，为客户创造无与伦比的价值</p>
                <div class="nameQuerySolid"></div>
            </div>
        </div>


        <div id="guarantee">
            <div class="guarantee_title">
                <h1>服务保障</h1>
                <p>用我们引以为傲的专业与服务，为客户创造无与伦比的价值</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="guarantee_list">
                <section v-for="(item,index) in guaranteeList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <h5>{{item.title}}</h5>
                    <p>{{item.cont}}</p>
                </section>
            </div>
        </div>


        <div id="professionalAdvisers">
            <div class="professionalAdvisers_title">
                <h1>专业顾问</h1>
                <p>用我们引以为傲的专业与服务，为客户创造无与伦比的价值</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="indicator"><section v-for="(item,index) in 4" :key="index" :class="{indicator_active: index == indicatorIndex}" @mouseenter="enter(index)"></section></div>
            <el-carousel class="professionalAdvisers_swiper" :autoplay="false" height="6.6rem" type="card" indicator-position="none" arrow="never" ref="carousel" @change="change">
                <el-carousel-item class="professionalAdvisers_swiper_list" v-for="(item,index) in 4" :key="item">
                    <div class="professionalAdvisers_item" :class="{professionalAdvisers_active: index == 1}">
                        <section>
                            <div class="pic">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2139664590,2753771944&fm=26&gp=0.jpg" alt="" srcset="">
                                <div><h5>杜磊</h5><p>税务筹划师</p></div>
                            </div>
                            <div class="click"><a href="#choose">点击咨询</a></div>
                        </section>
                        <div class="professionalAdvisers_content">
                            <p>用更多时间，让客户满意，铭磊财务携程伴你走！ 服务项目：公司注册、变更、转让、注销、会计代理、许可证申办、体系认证、内资公司注册、中外合资..</p>
                            <p>咨询电话：<span>400-157-5575</span></p>
                        </div>
                    </div>
                    <div class="professionalAdvisers_item" :class="{professionalAdvisers_active: index == 1}">
                        <section>
                            <div class="pic">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2139664590,2753771944&fm=26&gp=0.jpg" alt="" srcset="">
                                <div><h5>杜磊</h5><p>税务筹划师</p></div>
                            </div>
                            <div class="click"><a href="#choose">点击咨询</a></div>
                        </section>
                        <div class="professionalAdvisers_content">
                            <p>用更多时间，让客户满意，铭磊财务携程伴你走！ 服务项目：公司注册、变更、转让、注销、会计代理、许可证申办、体系认证、内资公司注册、中外合资..</p>
                            <p>咨询电话：<span>400-157-5575</span></p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="swiper_left_back"><section></section></div>
            <img class="swiper_left" @click="prev" src="../assets/images/home/youfanyeLeft.png" alt="" srcset="">
            <img class="swiper_right" @click="next" src="../assets/images/home/youfanyeRight.png" alt="" srcset="">
        </div>

        
        <div id="CustomerVoice">
            <div class="CustomerVoice_title">
                <h1>客户心声</h1>
                <p>全程网上办理，铭磊财务选择经验丰富工商代理人，快速为您注册内资公司</p>
                <div class="nameQuerySolid"></div>
            </div>
            <el-carousel class="CustomerVoice_swiper" :autoplay="false" height="6.2rem" indicator-position="none" arrow="never" ref="carousels" @change="changes">
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


        <div id="branches">
            <h1>服务网点遍布高新区各个区域</h1>
            <p>场地固定，服务专业，为您省时省心！</p>
            <div class="nameQuerySolid"></div>
            <div class="branchesList">
                <section v-for="(item,index) in branchesList" :key="index" >
                    <img :src="item.img" alt="" srcset="">
                    <div><a href="#choose">预约咨询</a></div>
                </section>
            </div>
        </div>


        <div id="choose">
            <div class="choose_title">
                <h1>他们选择了<span>铭磊财务</span></h1>
                <p>客户的认可以及肯定，就是给予铭磊财务最大色鼓励</p>
                <div class="nameQuerySolid"></div>
            </div>
            <div class="chooseContent">
                <div class="chooseContent_">
                    <div class="chooseContent_left">
                        <h2>最新成交的客户</h2>
                        <div class="chooseContent_left_">
                            <div v-for="(item,index) in branchesList" :key="index">
                                <p>杭州王先生签订公司注册</p>
                                <p>137****5576</p>
                                <p>03/07</p>
                            </div>
                        </div>
                    </div>
                    <div class="chooseContent_right">
                        <h2>欢迎联系铭磊财务，我们期待与您合作！</h2>
                        <div><input type="text" v-model="names" placeholder="您的称呼(name)"></div>
                        <div><input type="text" v-model="phones" placeholder="您的电话号码(Tel)"></div>
                        <section @click="queryNames">提交</section>
                    </div>
                </div>
            </div>
            <div class="contactUs">
                <div class="contactUs_title">联系我们</div>
                <div class="contactUs_right">
                    <h2>只需要一个电话  告别琐碎的一切  轻轻松松当老板</h2>
                    <div>
                        <img src="../assets/images/home/icon_phones.png" alt="" srcset="">
                        <p>400-157-5775</p>
                    </div>
                    <span>专业客服高响应机制随时为您服务</span>
                </div>
            </div>
            <img class="footer1" src="../assets/images/home/footer1.png" alt="" srcset="">
        </div>


        
        <el-dialog
            title="温馨提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>{{isQuery ? '我们即将会有专员与您联系，告知您查询结果' : '提交成功，将会有专员跟您联系，请稍后'}}</span>
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
            tabList:[
                {title:'网站首页'},
                {title:'我们的服务'},
                {title:'公司注册'},
                {title:'变更公司'},
                {title:'公司转让'},
                {title:'联系我们'},
            ],
            tabIndex: 0,
            bannerTabList:[
                {title: '公司注册', img:require('../assets/images/home/logo_zc.png'), url:'/ourServices'},
                {title: '变更公司', img:require('../assets/images/home/logo_zc.png'), url:'/changeCompany'},
                {title: '注册商标', img:require('../assets/images/home/logo_zc.png'), url:'/ourServices'},
                {title: '申请一般纳税人', img:require('../assets/images/home/logo_sq.png'), url:'#choose'},
                {title: '申请进出口权', img:require('../assets/images/home/logo_zc.png'), url:'#choose'},
                {title: '注销公司', img:require('../assets/images/home/logo_zx.png'), url:'#choose'},
                {title: '开公司账户', img:require('../assets/images/home/logo_zc.png'), url:'/changeCompany'},
            ],
            toolList:[
                {title: '经营范围表', img:require('../assets/images/home/icon_fanwei.png')},
                {title: '行业分类表', img:require('../assets/images/home/icon_fl.png')},
                {title: '商标查询', img:require('../assets/images/home/icon_sb.png')},
                {title: '立即免费咨询', img:require('../assets/images/home/icon_xx.png')},
            ],
            popularServicesList:[
                {title: '记账报税', img:require('../assets/images/home/icon_baoshui.png'), cont:'疑难杂症处理、专业资深会计为您提供建议、指导合理避税'},
                {title: '商标注册', img:require('../assets/images/home/icon_zhuce.png'), cont:'疑难杂症处理、专业资深会计为您提供建议、指导合理避税'},
                {title: '公司转让', img:require('../assets/images/home/icon_zhuanrang.png'), cont:'疑难杂症处理、专业资深会计为您提供建议、指导合理避税'},
                {title: '网站建设', img:require('../assets/images/home/icon_jianshe.png'), cont:'疑难杂症处理、专业资深会计为您提供建议、指导合理避税'},
            ],
            advantageList:[
                {title: '1元注册', img:require('../assets/images/home/icon_yyzhuce.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '更专业', img:require('../assets/images/home/icon_gengzy.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '更正规', img:require('../assets/images/home/icon_gengzg.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '更优惠', img:require('../assets/images/home/icon_gengyh.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '更快捷', img:require('../assets/images/home/icon_gengkj.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
            ],
            strengthShowsList:[
                {title: '十年老品牌，值得信赖', img:require('../assets/images/home/icon1.png')},
                {title: '0元免费代办杭州公司注册', img:require('../assets/images/home/icon2.png')},
                {title: '杭州高新区公司注册', img:require('../assets/images/home/icon3.png')},
                {title: '杭州外资公司注册', img:require('../assets/images/home/icon4.png')},
                {title: '香港公司注册', img:require('../assets/images/home/icon5.png')},
            ],
            guaranteeList:[
                {title: '品牌企业', img:require('../assets/images/home/icon_yyzhuce.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '信息保密', img:require('../assets/images/home/icon_gengzy.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '专人一对一服务', img:require('../assets/images/home/icon_gengzg.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '信誉保障', img:require('../assets/images/home/icon_gengyh.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '一体化服务平台', img:require('../assets/images/home/icon_gengkj.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
                {title: '全程代办', img:require('../assets/images/home/icon_gengkj.png'), cont:'1元代办杭州公司注册，还有精美大礼赠送。免费代理注册费，仅收工本费（政府收取），名额有限。'},
            ],
            branchesList:[
                {img:require('../assets/images/home/branches_shan.png')},
                {img:require('../assets/images/home/branches_bing.png')},
                {img:require('../assets/images/home/branches_xia.png')},
                {img:require('../assets/images/home/branches_xi.png')},
                {img:require('../assets/images/home/branches_gao.png')},
                {img:require('../assets/images/home/branches_bie.png')},
            ],
            indicatorIndex:0,
            indicatorIndexs:0,

            name:'', phone:'', names:'', phones:'',centerDialogVisible: false, isQuery: true
        }
    },
    methods:{
        enter(index){
            this.indicatorIndex = index
            this.$refs.carousel.setActiveItem(index)
        },
        prev(){
            this.$refs.carousel.prev()
        },
        next(){
            this.$refs.carousel.next()
        },
        change(e){
            // console.log(e)
            this.indicatorIndex = e
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
        queryNames(){
            if(this.names !='' && this.phones != ''){
                let data ={
                    user_name: this.names, phone_number: this.phones
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
                    this.names = '' 
                    this.phones = ''
                }else{
                    this.$message.error('服务器！');
                }
            })
            .catch(err=>{
                this.$message.error('服务器！');
            })
        },
        LinkTo(index){
            if(index < 2){
                this.$router.push({path: this.bannerTabList[index].url})
            }
        }
    }
}
</script>
<style lang="less" scoped>
#home{
    width: 100%;
}

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
        }
        .navTabList_active{
            a{color: #000000; .font;}
            .solid{background-color: #FF3333;}
        }
    }
}

.banner{
    width: 100%; height: 5rem; position: relative;
    background: url(../assets/images/home/banner.png) no-repeat; background-size: 100% 100%;
    .bannerTab{
        width: 2.5rem; height: 4.7rem; background-color: white; position: absolute; top: 0; left: 3.6rem; padding: 0 0.27rem;
        color: #666666;
        a{color: #666666; text-decoration: none;}
        .bannerTabLists{
            width: 100%; height: 0.63rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.18rem;
            div{
                display: flex; align-items: center;
                img{width: 0.31rem; height: 0.31rem; margin-right: 0.16rem;}
            }
            .link{width: 0.1rem; height: 0.16rem;}
        }
    }
    .bannerTab:hover{cursor: pointer;}
}



.nameQuery{
    width: 100%; text-align: center; margin-top: 0.5rem;
    h1{font-size: 0.36rem; .font; color: #666666;} 
    p{font-size: 0.16rem; color: #999999; line-height: 0.35rem;}
    .nameQuerySolid{
        width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
    }
    span{color: #FF3333;}
    .query{
        width: 11.71rem; height: 3.7rem; margin: 0 auto; margin-top: 0.53rem; padding: 0.5rem 0.85rem;
        box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem;
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



#popularServices{
    width: 11.75rem; height: 10.22rem; margin: 0 auto; text-align: center; margin-top: 1.99rem;
    h1{font-size: 0.36rem; .font; color: #666666;} 
    p{font-size: 0.16rem; color: #999999; line-height: 0.35rem;}
    .nameQuerySolid{
        width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
    }
    .popularServicesList{
        width: 100%; display: flex; justify-content: space-between; margin-top: 0.64rem;
        div{
            width: 2.7rem; height: 3.08rem; padding: 0.24rem 0.43rem; position: relative;
            background: url(../assets/images/home/back.png) no-repeat; background-size: 100% 100%;
            box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem;
            img{width: 0.7rem; height: 0.8rem; margin-bottom: 0.15rem;}
            h5{color: #333333; font-size: 0.24rem;font-family:SourceHanSansCN-Regular;font-weight:400;}
            p{font-size: 0.16rem; text-align: left; line-height: 0.25rem; margin-top: 0.1rem;}
            a{color: #FF3333; font-size: 0.16rem; position: absolute; bottom: 0.3rem; left: 1.03rem;}
        }
    }
    .Particularly{ text-align: left; margin-left: 0.2rem; margin-top: 0.69rem;}
    .ParticularlyList{
        width: 100%; display: flex; justify-content: space-between; margin-top: 0.41rem;
        section{
           width: 5.7rem; height: 2.14rem; display: flex; align-items: center; text-align: left; position: relative;
           box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem;
           .back_title{
               width: 1rem; height: 1rem; position: absolute; left: 0; top: 0; margin: 0;
           }
           img{width: 1.68rem; height: 1.5rem; margin-left: 0.32rem;}
           div{
               width: 3.2rem; margin-left: 0.25rem;
               h5{color: #333333; font-size: 0.24rem;font-family:SourceHanSansCN-Regular;font-weight:400;}
               p{font-size: 0.16rem; text-align: left; line-height: 0.25rem; margin-top: 0.1rem;}
               a{color: #FF3333; font-size: 0.16rem;}
               span{color: #FF3333;}
           }
        }
    }
}



#advantage{
    width: 11.75rem; height: 8.8rem; margin: 0 auto; display: flex; justify-content: space-between;
    .advantage_title{
        width: 3.8rem; text-align: center; margin-top: 1.8rem;
        h1{font-size: 0.36rem; .font; color: #666666; line-height: 0.6rem;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.25rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .advantage_list{
        width: 7.2rem; height: 6.2rem; display: flex; justify-content: center; flex-wrap: wrap; margin-top: 0.5rem;
        section{
            width: 2.3rem; height: 3rem; margin-right: 0.1rem; margin-bottom: 0.1rem; text-align: center; overflow: hidden;
            box-shadow:0px 0.63rem 0.98rem 0px rgba(102,102,102,0.18); border-radius:0.06rem; padding: 0.1rem 0.25rem;
            img{width: 1.33rem; height: 1.33rem; border-radius: 50%;}
            h5{font-size: 0.24rem; color: #333333;.font; margin: 0.1rem 0;}
            p{font-size: 0.14rem; color: #999999; text-align: left; }
        }
    }
}



#strengthShows{
    width: 11.75rem; height: 7rem; margin: 0 auto; display: flex; justify-content: space-between;
    .strength_shows{
        width: 5.96rem; height: 4rem; background-color: #FFAF24; position: relative;
        box-shadow:0px 0.63rem 0.98rem 0px rgba(102,102,102,0.17); border-radius:0.06rem;
        display: flex; flex-wrap: wrap; padding-top: 0.4rem;
        section{
            width: 1.85rem; height: 1.5rem; margin-right: 0.2rem; text-align: center;
            font-size: 0.18rem; color: #FFFFFF; margin-top: 0;
            img{width: 0.6rem; height: 0.6rem; margin-bottom: 0.1rem;}
        }
        section:nth-child(2){
            img{width: 0.47rem; height: 0.53rem;}
        }
        section:nth-child(3){
            margin-right: 0;
            img{width: 0.59rem; height: 0.59rem;}
        }
        section:nth-child(4){
            margin-top: -0.6rem;
            img{width: 0.58rem; height: 0.58rem;}
        }
        section:nth-child(5){
            margin-top: -0.6rem;
            img{width: 0.49rem; height: 0.6rem;}
        }
        .strength_shows_cont{
            min-width: 2rem; text-align: center; position: absolute; bottom: -0.6rem; left: 0.3rem;
            div{
                width: 0.72rem; height: 0.72rem; border-radius: 50%; background-color: #FF9933;
                font-size: 0.32rem; line-height: 0.72rem; color: #ffffff;
                font-family:Arial-BoldMT; font-weight:bold; margin: 0 auto;
            }
            p{
                font-size: 0.16rem; color: #333333; margin-top: 0.2rem;
                span{color: #FF3333;}
            }
        }
        .strength2{position: absolute; left: 1.6rem; bottom: -1rem;}
        .strength3{position: absolute; left: 3rem; bottom: -0.6rem;}
        .strength4{position: absolute; left: 4.4rem; bottom: -1rem;}
        .strength5{position: absolute; left: 5.8rem; bottom: -0.65rem;}
    }
    .strength_shows_title{
        text-align: center; margin-top: 1.2rem;
        h1{font-size: 0.36rem; .font; color: #666666; line-height: 0.6rem;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.25rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.02rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
}



#guarantee{
    width: 11.75rem; height: 8rem; margin: 0 auto; display: flex; justify-content: space-between;
    .guarantee_title{
        width: 4.2rem; text-align: center; margin-top: 1.8rem;
        h1{font-size: 0.36rem; .font; color: #666666; line-height: 0.6rem;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.25rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .guarantee_list{
        width: 7.2rem; height: 6.2rem; display: flex; justify-content: center; flex-wrap: wrap; margin-top: 0.5rem;
        section{
            width: 2.3rem; height: 2.5rem; margin-right: 0.1rem; margin-bottom: 0.1rem; text-align: center; overflow: hidden;
            box-shadow:0px 0.63rem 0.98rem 0px rgba(102,102,102,0.18); border-radius:0.06rem; padding: 0.1rem 0.13rem;
            img{width: 0.9rem; height: 0.9rem; border-radius: 50%;}
            h5{font-size: 0.24rem; color: #333333;.font; margin: 0.05rem 0;}
            p{font-size: 0.14rem; color: #999999; text-align: left; }
        }
    }
}


#professionalAdvisers{
    width: 100%; height: 9rem; margin: 0 auto; position: relative;
    .professionalAdvisers_title{
        width: 4.2rem; position: absolute; right: 3.5rem; top: 1.6rem; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666; line-height: 0.6rem;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.25rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .professionalAdvisers_swiper{
        width: 9.5rem; margin-left: 1rem;
        // box-shadow:0px 0.63rem 0.98rem 0px rgba(102,102,102,0.18); border-radius:0.06rem;
        .professionalAdvisers_swiper_list{
            width: 5rem;
            // padding: 0 1rem;
            .professionalAdvisers_item{
                width: 4.5rem; height: 2.97rem; background: white;
                padding: 0.3rem; margin-bottom: 0.29rem;
                box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.06rem;
                section{
                    width: 100%;display: flex; justify-content: space-between; align-items: center;
                    .pic{
                        display: flex; align-items: center; font-size: 0.14rem;
                        h5{font-size: 0.28rem; margin-bottom: 0.1rem;}
                        img{width: 1rem; height: 1rem; border-radius: 50%; margin-right: 0.2rem;}
                    }
                    .click{
                        width: 1rem; height: 0.34rem; background-color: #FF3333; border-radius: 0.17rem;
                        text-align: center; color: white; font-size: 0.18rem; line-height: 0.34rem;
                        a{color: white; text-decoration: none;}
                    }
                }
                .professionalAdvisers_content{
                    width: 100%; font-size: 0.18rem; margin-top: 0.15rem;
                    span{color: #FF3333; font-size: 0.24rem;font-family:Arial-BoldMT;font-weight:bold;}
                    p:nth-child(2){margin-top: 0.1rem;}
                }
            }
            .professionalAdvisers_active{
                // margin-left: 0.9rem;
            }
        }
    }
}


.indicator{
    width: 3rem; display: flex; justify-content: space-around; position: absolute; bottom: 1.5rem; left: 8.3rem; z-index: 10;
    section{width: 0.32rem; height: 0.32rem; border-radius: 50%; background-color: #CCCCCC;}
    .indicator_active{background-color: #FF3333;}
}
.swiper_left,.swiper_right{
    width: 0.8rem; height: 0.8rem; z-index: 10;
}
.swiper_left_back{
    width: 3.38rem; height: 6.5rem; background-color: white; position: absolute; left: 0; top: 0rem; z-index: 9;
    section{width: 0.05rem; height: calc(100% - 0.2rem);box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); float: right; background-color: rgba(224, 224, 224, 0.15);}
}
.swiper_left{ position: absolute; left: 2.3rem; top: 2.7rem;}
.swiper_right{ position: absolute; right: 7.7rem; top: 2.7rem;}
.indicators{
    width: 3rem; display: flex; justify-content: space-around; position: absolute; bottom: 1.5rem; left: 5rem; z-index: 10;
    section{width: 0.32rem; height: 0.32rem; border-radius: 50%; background-color: #CCCCCC;}
    .indicator_active{background-color: #FF3333;}
}
.swiper_lefts,.swiper_rights{
    width: 0.8rem; height: 0.8rem; z-index: 10;
}
.swiper_lefts{ position: absolute; right: 5.7rem; top: 2.7rem;}
.swiper_rights{ position: absolute; right: -1rem; top: 2.7rem;}



#CustomerVoice{
    width: 11.75rem; height: 9rem; margin: 0 auto; position: relative;
    .CustomerVoice_title{
        width: 4.2rem; position: absolute; left: 0.5rem; top: 1.6rem; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666; line-height: 0.6rem;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.25rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.03rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
    }
    .CustomerVoice_swiper{
        width: 5.5rem; float: right;box-shadow:0px 0.63rem 0.98rem 0px rgba(102,102,102,0.18); border-radius:0.06rem; margin-left: 1rem;
        .CustomerVoice_swiper_list{
            // width: 4.5rem;
            // padding: 0 1rem;
            .CustomerVoice_item{
                width: 5.5rem; height: 2.96rem; background: white;
                padding: 0.3rem; margin-bottom: 0.29rem;
                box-shadow:0px 0.63rem 0.98rem 0px rgba(102,102,102,0.18); border-radius:0.06rem;
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
        }
    }
}


// .el-carousel__item h3 {
//     color: #475669;
//     font-size: 14px;
//     // opacity: 0.75;
//     line-height: 200px;
//     margin: 0;
//   }
  
//   .el-carousel__item:nth-child(2n) {
//     background-color: #99a9bf;
//   }
  
//   .el-carousel__item:nth-child(2n+1) {
//     background-color: #d3dce6;
//   }




#branches{
    width: 11.75rem; height: 9.75rem; margin: 0 auto; text-align: center;
    h1{font-size: 0.36rem; .font; color: #666666; line-height: 0.6rem;} 
    p{font-size: 0.16rem; color: #999999; line-height: 0.25rem;}
    .nameQuerySolid{
        width: 0.47rem; height: 0.02rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
    }
    .branchesList{
        width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap; margin-top: 0.59rem;
        section{
            width: 1.94rem; margin-left: 2.57rem; margin-bottom: 0.76rem;
            img{width: 100%; height: 1.94rem;}
            div{
                width: 1.4rem; height: 0.48rem; background-color: #FF3333; line-height: 0.48rem; margin: 0 auto;
                box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.23rem; margin-top: 0.27rem;
                a{ color: white; font-size: 0.18rem; text-decoration: none;}
            }
        }
        section:nth-child(1),section:nth-child(4){
            margin-left: 0;
        }
    }
}



#choose{
    width: 100%; height: 13.25rem; position: relative; margin-bottom: 2.5rem;
    .choose_title{
        width: 100%; height: 1.18rem; background-color: white; text-align: center;
        h1{font-size: 0.36rem; .font; color: #666666; line-height: 0.6rem;} 
        p{font-size: 0.16rem; color: #999999; line-height: 0.25rem;}
        .nameQuerySolid{
            width: 0.47rem; height: 0.02rem; background-color: #FF3333; margin: 0 auto; margin-top: 0.1rem;
        }
        span{color: #FF3333;}
    }
    .chooseContent{
        width: 100%; height: 8rem; background-color: #EEEEEE;
        .chooseContent_{
            width: 11.75rem; margin: 0 auto; padding-top: 0.86rem; display: flex;
            .chooseContent_left{
                width: 5.6rem; height: 4.48rem; background-color: white; border-radius: 0.06rem;
                padding: 0.2rem 0 0 0.32rem;
                h2{color: #333333; font-size: 0.28rem; line-height: 0.5rem;}
                .chooseContent_left_{
                    width: 100%; border-top: 1px solid #E5E5E5; padding-top: 0.15rem;
                    padding-right: 0.2rem; line-height: 0.5rem; font-size: 0.18rem;
                    div{
                        display: flex; justify-content: space-between; color: #999999;
                    }
                }
            }
            .chooseContent_right{
                width: 5.6rem; padding-top: 0.3rem; margin-left: 0.5rem;
                div{
                    width: 100%; height: 0.7rem; border-radius: 0.35rem; background-color: white;
                    margin-top: 0.5rem;
                    input{
                        width: 100%; height: 0.7rem; background: none; border: 0; outline: none; 
                        padding-left: 0.32rem;
                    }
                }
                section{
                    width: 2rem; height: 0.6rem; background-color: #FF3333; text-align: center; line-height: 0.6rem; margin-top: 0.5rem;
                    box-shadow:0px 0.09rem 0.3rem 0px rgba(204, 204, 204, 0.35); border-radius:0.35rem; font-size: 0.3rem; color: white;
                }
                section:hover{cursor: pointer;}
            }
        }
    }
    .contactUs{
        width: 10.76rem; height: 2.04rem; position: absolute; bottom: 3.7rem; left: 4.75rem;
        display: flex; text-align: center;
        .contactUs_title{
            width: 2.76rem; height: 100%; background-color: #FF9933; color: white; font-size: 0.36rem;
            .font; line-height: 2.04rem;
        }
        .contactUs_right{
            width: 8rem; height: 100%; background-color: white;
            h2{color: #666666; font-size: 0.28rem; line-height: 0.9rem;}
            div{
                width: 4.2rem; height: 0.6rem; background-color: #FF3333; border-radius: 0.35rem;
                display: flex; justify-content: center; color: white; font-size: 0.36rem; .font;
                margin: 0 auto; align-items: center; margin-bottom: 0.15rem;
                img{width: 0.42rem; height: 0.32rem; margin-right: 0.1rem;}
            }
            span{font-size: 0.18rem; color: #999999;font-family:SourceHanSansCN-Medium; font-weight:500;}
        }
    }
    .footer1{
        width: 100%; height: 4.65rem;
    }
}








</style>


