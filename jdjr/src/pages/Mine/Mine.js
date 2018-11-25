import React, { Component } from 'react'

import Dbottom from '../../components/Dbottom/Dbottom';
import $ from  'jquery';

import cookie from "../../libs/cookie.js";

import "../../assets/css/Dmymin.css";
import "../../assets/css/Dcommonheader.css";
import "../../assets/css/Drecommend.css";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Mine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            min:"",
            edu:'0'
        }
    }
    register(){
        this.props.history.push("account");
    }
    
    render() {
        return (
           
            <div >
                {(()=>{
                    
                })()}
                <div className="wx_wrap">
                    <header>

                        <div id="m_common_header" style={{minHeight:"45px"}}>
                            <header className="jd-header">
                                <div className="jd-header-new-bar">
                                    {/* <div onClick={history.goBack} report-eventid="MCommonHead_Back" 
                                        id="m_common_header_goback" className="jd-header-icon-back J_ping"><span></span></div> */}
                                    <div className="jd-header-new-title">我的京东</div>
                                    {/* <div report-eventid="MCommonHead_NavigateButton" 
                                        id="m_common_header_jdkey" className="jd-header-icon-new-shortcut J_ping"><span></span></div> */}
                                </div>
                            </header>
                        </div>
                                            
                    </header>
                    <div id="wrapper" data-tag="wrapper">
                        <div style={{display:"none"}}>
                            curPin : jd_789ce7b4a6339
                            headImg :
                            http://storage.360buyimg.com/i.imageUpload/6a645f3738396365376234613633333931353239333039353035373238_mid.jpg
                            levelName : 银牌用户
                            isVerified : 1
                            nickname : ad6666666
                            isPlus : 1
                            jvalue : 3293
                            isKaiPu : 0
                            isShowHead : 1
                            isHideNavi : 0

                        </div>








                        <div className="my_header_v4_wrap">
                            <div className="my_header_v4">
                                <div className="my_header_v4_main" id="myHeader">
                                    <div className="my_header_v4_avatar">
                                        <div className="my_header_v4_avatar_img" data-url="//wqs.jd.com/my/accountv2.shtml?sceneval=2&amp;ptag=7155.3.1">
                                            <img id="headPic" src="http://storage.360buyimg.com/i.imageUpload/6a645f3738396365376234613633333931353432363331313436363531_mid.jpg"
                                                />
                                        </div>

                                    </div>
                                    <div className="my_header_v4_msg">
                                        <div className="my_header_v4_name">
                                            <span className="my_header_v4_name_text" data-tag="editNameSpan">{(()=>{
                                                return this.state.min
                                            })()}</span>
                                            <i className="my_header_v4_name_edit" data-tag="editNamei"></i>
                                            <a style={{left:"5px"}} className="my_header_v4_vip v3"></a>
                                        </div>
                                        <div className="my_header_v4_pin" id="userName" data-pin="jd_789ce7b4a6339">用户名：jd_789ce7b4a6339</div>

                                        <div className="my_header_v4_info">

                                            <a className="my_header_v4_link" data-url="//vip.m.jd.com/homepage.html?sceneval=2&amp;sid="
                                                data-addsite="" data-eventid="MMyJD_JingMember" data-eventparam="" data-eventlevel=""
                                                ptag="7155.3.3">京享值6593</a>
                                            <a className="my_header_v4_link" id="xiaobaiCredit" style={{display:"none"}} ptag="7155.3.36">小白信用</a>
                                            <a className="my_header_v4_plus" id="vipplusItem" data-on="plus" ptag="7155.3.2"
                                                data-addsite="" data-eventid="MMyJD_MemberPlus" data-eventparam="" data-eventlevel="">
                                                <div className="my_header_v4_plus_btn">尊享8大特权</div>
                                            </a>


                                        </div>

                                    </div>
                                    <a onClick={this.register.bind(this)} className="my_header_v4_settings" >账号管理</a>
                                </div>
                            </div>
                        </div>

                        <section className="my_section" id="myOrderList">
                            <div className="my_order">
                                <a className="my_order_entrances type_unpay" data-url="//home.m.jd.com/newAllOrders/newAllOrders.action?sceneval=2&amp;functionId=wait4Payment&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                    data-addsite="" data-eventid="MMyJD_Ordersnotpay" data-eventparam="" data-eventlevel="2" ptag="7155.3.5"
                                    id="payItem"><span>待付款</span></a>
                                <a className="my_order_entrances type_unrecieve" data-url="//home.m.jd.com/newAllOrders/newAllOrders.action?sceneval=2&amp;functionId=wait4Delivery&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                    ptag="7155.3.6" data-addsite="" data-eventid="MMyJD_Ordersnotreceiving" data-eventparam=""
                                    data-eventlevel="2" id="acceptItem"><span>待收货</span></a>
                                <a className="my_order_entrances type_consult" data-url="//tuihuan.jd.com/afs/orders?sceneval=2&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                    data-addsite="" data-eventid="MMyJD_RePairReplacement" data-eventparam="" data-eventlevel="" ptag="7155.3.7"><span
                                        id="backService">退换/售后 </span></a>
                                <a className="my_order_entrances type_orders" data-url="//home.m.jd.com/newAllOrders/newAllOrders.action?sceneval=2&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                    data-addsite="" data-eventid="MMyJD_AllOrders" data-eventparam="" data-eventlevel="2" ptag="7155.3.4"><span>全部订单</span></a>
                            </div>
                        </section>

                        <section className="my_section" id="myWallet">
                            <div className="my_assets">
                                <a className="my_assets_entrances" data-url="//wqs.jd.com/my/coupon/index.vue.shtml?sceneval=2&amp;ptag=7155.3.9"
                                    data-addsite="" data-eventid="MMyJD_Coupon" data-eventparam="" data-eventlevel="" id="couponItem"
                                    ptag="7155.3.9">
                                    <p className="my_assets_entrances_detail"><span className="my_assets_entrances_detail_num" id="couponNum">5</span>张</p>
                                    <p className="my_assets_entrances_title">京东券</p>
                                </a>
                                <a className="my_assets_entrances" data-url="//bt.jd.com/v3/mobile/rGuide_initGuideMobile?channelName=177&amp;source=JD_m&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                    ptag="7155.3.10" id="baitiaoItem" data-tag="baitiaoItem" data-name="白条额度" data-addsite=""
                                    data-eventid="MMyJD_BaiTiao" data-eventparam="" data-eventlevel=""><i id="openBaitiaoRed" style={{display:"none"}}>百元礼包</i><i
                                        className="dot" style={{display:"none"}} id="baitiaoDot"></i>
                                    <p className="my_assets_entrances_detail"><span className="my_assets_entrances_detail_num" id="baitiaoNum">{this.state.edu}</span><em
                                            id="baitiaoUnit"></em></p>
                                    <p className="my_assets_entrances_title" id="baitiaoDes">借款额度</p>
                                </a>
                                <a className="my_assets_entrances" id="beanItem" ptag="7155.3.11" data-url="//wqs.jd.com/my/jingdou/my.shtml?sceneval=2&amp;ptag=7155.3.11"
                                    data-addsite="" data-eventid="MMyJD_JingBean" data-eventparam="" data-eventlevel="">
                                    <p className="my_assets_entrances_detail"><span className="my_assets_entrances_detail_num" id="beanNum">7856</span>个</p>
                                    <p className="my_assets_entrances_title">京豆</p>
                                </a>
                                <a className="my_assets_entrances" ptag="7155.3.12" id="jdecardItem" data-url="//wqs.jd.com/my/ecard.html?sceneval=2&amp;ptag=7155.3.12"
                                    data-tag="jdecardItem" data-name="京东卡/E卡" data-addsite="" data-eventid="MMyJD_JingCard"
                                    data-eventparam="" data-eventlevel="">
                                    <p className="my_assets_entrances_detail"><span className="my_assets_entrances_detail_num" id="ecardNum">0</span>张</p>
                                    <p className="my_assets_entrances_title">礼品卡</p>
                                </a>
                                <a className="my_assets_entrances type_all" data-url="//wqs.jd.com/my/asset.html?sceneval=2&amp;ptag=7155.3.8"
                                    data-addsite="" data-eventid="MMyJD_MyPurse" data-eventparam="" data-eventlevel="2" id="wallet"
                                    data-tag="wallet" ptag="7155.3.8">
                                    <p className="my_assets_entrances_title">全部资产</p>
                                </a>
                            </div>
                        </section>

                        <section className="my_section">
                            <div className="my_lnks">
                                <a id="goodsFavItem" data-url="//home.m.jd.com/myJd/myFocus/newFocusWare.actionv2?sceneval=2&amp;ptag=7155.3.13"
                                    data-addsite="" data-eventid="MMyJD_FollowProduct" data-eventparam="" data-eventlevel="2" ptag="7155.3.13"
                                    className="my_lnks_item">
                                    <span id="goodsFav" className="my_lnks_num">18</span>关注的商品
                                </a>
                                <a data-url="//wqs.jd.com/my/fav/shop_fav.shtml?sceneval=2&amp;ptag=7155.3.14" data-addsite=""
                                    data-eventid="MMyJD_FollowShop" data-eventparam="" data-eventlevel="2" ptag="7155.3.14" id="shopFavItem"
                                    className="my_lnks_item">
                                    <i className="dot" id="favDot" style={{display:"none"}}></i><span className="my_lnks_num" id="shopFav">28</span>关注的店铺
                                </a>
                                <a data-url="//sp.m.jd.com/mmhistory/index.shtml?sceneval=2&amp;functionId=liulanjilu&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                    data-addsite="" data-eventid="MMyJD_BrowserHistory" data-eventparam="" data-eventlevel="2" id="recentPanel"
                                    ptag="7155.3.15" className="my_lnks_item">
                                    <span className="my_lnks_num" id="recent">10</span>我的足迹
                                </a>
                            </div>

                        </section>

                        <a id="my618" style={{display:"none"}}>
                            <section className="my_618_section">
                                <div className="my_618_content">
                                    <div className="my_618_title">
                                        我的618任务列表
                                    </div>
                                    <div className="my_618_text">
                                        做任务赢免单，大奖抽不停
                                    </div>
                                </div>
                                <div className="my_618_dot" style={{display:"none"}}></div>
                            </section>
                        </a>

                        <section className="my_section" id="myActivity">
                            <ul className="my_cate">
                                <li className="my_cate_item"> <a className="my_cate_item_url" data-condition="0" data-url="//wqs.jd.com/promote/201712/mwelfare/m.html?sceneval=2&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                        ptag="7155.3.17" data-name="用户福利" data-addsite="" data-eventid="MMyJD_NewOnes" data-eventparam="2"
                                        data-eventlevel="2"> <span className="my_cate_item_logo"> <img src="//img11.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png"/>
                                        </span>
                                        <p className="my_cate_item_name">用户福利</p>
                                    </a></li>
                                <li className="my_cate_item"> <a className="my_cate_item_url" data-condition="0" data-url="//train.m.jd.com?sid=1ebdcd2307630ec024c687a58c8f43fb"
                                        ptag="7155.3.18" data-name="京东火车票" data-addsite="" data-eventid="MMyJD_TrainTickets"
                                        data-eventparam="2" data-eventlevel="2"> <span className="my_cate_item_logo"> <img src="//img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png"/>
                                        </span>
                                        <p className="my_cate_item_name">京东火车票</p>
                                    </a></li>
                                <li className="my_cate_item"> <a className="my_cate_item_url" data-condition="0" data-url="//home.m.jd.com/user/preSells.action?functionId=wodeyuyue&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                        ptag="7155.3.19" data-name="我的预约" data-addsite="" data-eventid="MMyJD_MyAppointment"
                                        data-eventparam="2" data-eventlevel="2"> <span className="my_cate_item_logo"> <img src="//img13.360buyimg.com/jdphoto/jfs/t13864/56/1334572250/1269/e3b9acfa/5a1e9ef6Nb19cc444.png"/>
                                        </span>
                                        <p className="my_cate_item_name">我的预约</p>
                                    </a></li>
                                <li className="my_cate_item"> <a className="my_cate_item_url" data-condition="0" data-url="//h5.m.jd.com/dev/VtYBp9HJjvMCGTBCWdXceFZvUkj/index.html?sid=1ebdcd2307630ec024c687a58c8f43fb"
                                        ptag="7155.3.21" data-name="应用推荐" data-addsite="" data-eventid="MMyJD_ApplicationRecommend"
                                        data-eventparam="2" data-eventlevel="2"> <span className="my_cate_item_logo"> <img src="//img11.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png"/>
                                        </span>
                                        <p className="my_cate_item_name">应用推荐</p>
                                    </a></li>
                                <li className="my_cate_item"> <a className="my_cate_item_url" data-condition="0" data-url="//vm.m.jd.com?sid=1ebdcd2307630ec024c687a58c8f43fb"
                                        ptag="7155.3.22" data-name="京东通信营业厅" data-addsite="" data-eventid="MMyJD_CommunicationHall"
                                        data-eventparam="data-eventlevel=&quot;2&quot;"> <span className="my_cate_item_logo"> <img src="//img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png"/>
                                        </span>
                                        <p className="my_cate_item_name">京东通信营业厅</p>
                                    </a></li>
                                <li className="my_cate_item"> <a className="my_cate_item_url" data-condition="0" data-url="//airtickets.jd.com/?sid=1ebdcd2307630ec024c687a58c8f43fb"
                                        ptag="7155.3.30" data-name="京东机票" data-addsite="" data-eventid="" data-eventparam="data-eventlevel=&quot;2&quot;">
                                        <span className="my_cate_item_logo"> <img src="//img11.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png"/>
                                        </span>
                                        <p className="my_cate_item_name">京东机票</p>
                                    </a></li>
                                <li className="my_cate_item"> <a className="my_cate_item_url" data-condition="0" data-url="//hotel.m.jd.com/?sid=1ebdcd2307630ec024c687a58c8f43fb"
                                        ptag="7155.3.31" data-name="京东酒店" data-addsite="" data-eventid="" data-eventparam="data-eventlevel=&quot;2&quot;">
                                        <span className="my_cate_item_logo"> <img src="//img11.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png"/>
                                        </span>
                                        <p className="my_cate_item_name">京东酒店</p>
                                    </a></li>
                            </ul>
                        </section>

                        <section className="my_section">
                            <a id="helpLink" data-url="//ihelp.jd.com/mindex.html?sceneval=2&amp;sid=1ebdcd2307630ec024c687a58c8f43fb"
                                data-addsite="" data-eventid="MMyJD_ServiceManager" data-eventparam="" data-eventlevel="2" className="head head_help"
                                ptag="7155.3.26"><em id="help">客户服务</em></a>
                            <a id="feedback"  rel="nofollow" data-update className="head head_help feed_back" ptag=""><em>意见反馈</em></a>
                        </section>

                    <div id="interestPanel" style={{display:"none",marginBottom:"50px"}}>
                            <div className="mod_recommend" id="interestContent">
                                <h3 className="title">为您推荐</h3>
                                <ul className="list"> </ul>
                            </div>
                            <div className="wx_loading2" id="loading">
                                <i className="wx_loading_icon"></i>
                            </div>
                        </div>

                        <div id="favorPanel" style={{marginBottom:"50px"}}>
                            <div className="mod_recommend">
                                <h3 className="title">为您推荐</h3>
                                <ul className="list"> </ul>
                            </div>
                            <div id="firstPage">
                                <div className="mod_recommend_v2">
                                    <ul className="list" id="recommendList">
                                        <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8xODQyOTcwMTgzNi5odG1s&amp;log=5K39ZZyu4rLHW7Q0EGzMvRX38d8ItqZlHMxuEMfjOWWcLhKmtKpfrcTrTvN_p5LQlZ2kXgm0vwHKXSt4gL2p8IJGLCiqhNZq0LyV2kiK2QueL_EgcX-Q50angvb2qCsR-ruT7NpSmN3VYkfRanGKKjVcDOvN0RxBJEMMhU96VIHY4UgATMqqNLvQBizJ-5T6rXgpF_g9AllijsLZ0yIEh5e-ykwaBhqNdPkcOx_m0bqEg_uLAhm0d6oMc5qLK9CmaM5PtpoDdynrUvul-v6CUx5AJgvEOQDBb7wUmGKq7NsmUHWgaRLmQnYVzQ76sqDnaqpJ-4sKM5b5Jxv9LGcPqELrPrIoGG77jF-hi6eFIdgLN0n75gstn1BlCPyPCyZUN4bz_dwYCfHN8bq58tEb31X1JpHaifoT39w6HWeXXD9fSBevxW-XIbUpCx4wAGRyxGUKHP4xYaIlLkRrRvvwmBVhMHmiyZBzKVeqtoSbMPuHarx0nOOdNeMY6BtFVDFt&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d18429701836$adposid%3d1861$adsid%3dfb531255-9ec1-436b-9a0b-498fb93fdf46"
                                            source="1" sku="18429701836" data-breathreport="1">
                                            <div className="cover"> <img src="//img14.360buyimg.com/n7/jfs/t24880/98/797269394/124733/38e4ee5/5b7cd31aN85d740a1.jpg!q70.dpg"/>
                                            </div>
                                            <div className="info">
                                                <div className="name"> A家 电视柜 可伸缩电视柜组合 北欧茶几电视柜组合套餐现代简约 电视柜+边柜+茶几(黄色) </div>
                                                <div className="flex_wrap">
                                                    <div className="price_info">
                                                        <div className="price">¥<em>4299</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ad_li" attr-tag="cnxhlink" data- data-repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.320000$src=rec$action=1$reqsig=380ac0dd0d089895491de9fadff315c9c2510f1a$enb=1$sku=0$p=320000$pin=$uuid=1539996794863451414561$csku=29656933026$index=0$st=0$adcli=$expid=140$mexpid=$im=$rid=846736667449603283$ver=1$sig=4ae79b319a9ddcd425f57a162e863625dfe81cb6"
                                            source="0" sku="29656933026" data-breathreport="1">
                                            <div className="cover"> <img src="//img14.360buyimg.com/n7/jfs/t22117/183/2037840450/594154/f2eadf8e/5b43a4a1N255eeb23.png!q70.webp"/>
                                            </div>
                                            <div className="info">
                                                <div className="name"> 【送凉鞋架 成人20支】成人加粗衣架儿童衣架拼购家用成人晾衣架子挂钩防滑衣架大衣服架子衣撑子挂衣架子 成人38厘米-20支
                                                </div>
                                                <div className="flex_wrap">
                                                    <div className="price_info">
                                                        <div className="price">2人拼</div>
                                                        <div className="price">¥<em>9</em>.9</div>
                                                        <div className="single">单买价 ¥19.8</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8yNTU4MDExMjc2My5odG1s&amp;log=5K39ZZyu4rLHW7Q0EGzMvRX38d8ItqZlHMxuEMfjOWUJxb66e7vJEU-FZQqaxdoNp4th5JjaeO5nbX4N-wKTa4Pc-zTeTHCHtGemZ2P8ZeBdueUh4eWu-x8wPXyoO5KKZ-wqJcnX6wo8QbEs-88I578CHTlZCyFE5vcQi8HBXAkn8kP5m56fFe5KGKw9Wx4Y4TG13QO9xqrmZMDKHjhrinuqSbZPpQUeb8QQhRxFtorLRVKALBd1_LTVVthSq2029BgOb0oE4RJUwuypc14K5aa_kQMbcybsKn-OitcmSxohLdqxLkiWXaducfS4F-_cgBhLwLvPDOOjqpiXFEWLTlcwque1rha3q11LYxzXrA1tlFNlmzByO8yAiSyQdCSKrfVrPdl6OuJV-FgK8w1wgS8O22nJQcI_wy8SR7a1usC8uwVfob_gxEiQSqy00MYg&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d25580112763$adposid%3d1861$adsid%3dfb531255-9ec1-436b-9a0b-498fb93fdf46"
                                            source="1" sku="25580112763" data-breathreport="1">
                                            <div className="cover"> <img src="//img14.360buyimg.com/n7/jfs/t28714/129/328871442/85517/3db4765a/5befd471Nf60d380d.jpg!q70.dpg"/>
                                            </div>
                                            <div className="info">
                                                <div className="name"> 阿迪达斯adidas 官方 UltraBOOST Uncaged 男 跑步鞋 DA9157 如图 39.5 </div>
                                                <div className="flex_wrap">
                                                    <div className="price_info">
                                                        <div className="price">¥<em>1499</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ad_li" attr-tag="cnxhlink" data- data-repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.320000$src=rec$action=1$reqsig=380ac0dd0d089895491de9fadff315c9c2510f1a$enb=1$sku=0$p=320000$pin=$uuid=1539996794863451414561$csku=4955585$index=1$st=0$adcli=$expid=140$mexpid=$im=$rid=846736667449603283$ver=1$sig=eb0d19cd4b64c6205c2c112481381cd5d4488b78"
                                            source="0" sku="4955585" data-breathreport="1">
                                            <div className="cover"> <img src="//img14.360buyimg.com/n7/jfs/t1/1132/2/2198/160158/5b960db3Eedd960f7/b2fc5a0e39bfbb30.jpg!q70.dpg"/>
                                            </div>
                                            <div className="info">
                                                <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s100x28_jfs/t15376/77/2643750731/2688/443ac7d3/5aadf9daNc1b92ee6.png!q70.webp"/></i>
                                                    泰国进口 Beauty Buffet Q10牛奶洗面奶 100ml/支 女男士洁面乳深层洁净提亮保湿 </div>
                                                <div className="flex_wrap">
                                                    <div className="price_info">
                                                        <div className="price">¥<em>39</em></div>
                                                        <div className="mod_sign_tip bor "><span>满减</span></div>
                                                        <div className="price_plus">¥37<i className="mod_plus_price"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8xOTc0MDk1Lmh0bWw&amp;log=5K39ZZyu4rLHW7Q0EGzMvRX38d8ItqZlHMxuEMfjOWUJxb66e7vJEU-FZQqaxdoNXYaPQV31mkKPeYfh1104OSciBhumkKUjsP3Y40i1ZN5ql8jSc127eFLnecUiuziby63_y-UI7T7HHO21SMw6WZ9F7jintscnpzooS1YeEw_BllnI075zhrBg5IIz6s4g6OcTiy1hBdtIq36L3pLtHU5y0GH8UkI2ufuKzf7ufQwEMbCZnfcDbPbTTccFtld9hVuIQFb9qEj3n-ft7EUo3W3fJmkjxJNe0J10CkDUZOwRctnMt8bZ3s63Lz0Ra77UQG_xKmZTow7FLb72cGDpDmynQ-B7XDBVPXxa1ed0_GxZL0HU1UrVUvJ-6eUSyMPz_OtBJmOL0ISQ2_I1CJ35EjCBcARoLt2onKz9iO1_g66uC8EPcuJfyOJVLSG9j4tI&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d1974095$adposid%3d1861$adsid%3dfb531255-9ec1-436b-9a0b-498fb93fdf46"
                                            source="1" sku="1974095" data-breathreport="1">
                                            <div className="cover"> <img src="//img14.360buyimg.com/n7/jfs/t7648/310/2006471967/395329/88a8eac0/59a628d3Nc68d2b73.jpg!q70.dpg"/>
                                            </div>
                                            <div className="info">
                                                <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp"/></i>
                                                    东方宝石水莲花香水润滋养霜300ml（水润保湿 温和润肤）（意大利原装进口） </div>
                                                <div className="flex_wrap">
                                                    <div className="price_info">
                                                        <div className="price">¥<em>75</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div id="secondPage" style={{display:"none"}}>
                                <div className="mod_recommend_v2">
                                    <ul className="list" id="recommendList"> </ul>
                                </div>
                            </div>
                        </div>

                        <a className="WX_backtop" style={{bottom: "60px",display:"none"}} data-on="back2Top" id="back2Top">返回顶部</a>
                    </div>
                </div>
                <Dbottom/>
            </div>
            
        )
    }
    componentDidMount() {
        var yhm=cookie.getCookie("yonghuming")||[];
        this.setState({
            min:yhm
        })
        //如果登入了 获取借款额度
        if(yhm.length>0){
            $.ajax({
                type: "post",
                data: {
                    username: yhm
                },
                url: "http://localhost:3001/login/panduan",
                async: true,
                success: (data)=>{
                    var data=data;
                    this.setState({
                        edu:data[0].quota+"元"
                    })
                }
            });
        }
    }
}

export default Mine
