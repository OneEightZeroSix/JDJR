import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from "react-router-dom";

import './Savemoney.scss';


class Savemoney extends Component {
    constructor(props){
      super(props);
      console.log(this);
      console.log(this.props);
      this.state={
            qiandao:[{
                title:"任务",
                num:0,
                href:""
            },{
                title:"账单",
                num:0,
                href:""
            },{
                title:"卡券",
                num:0,
                href:""
            }],
            tabs:this.props.tabs
        }
    }

    render() {
        return (
            <div className="savemoney">
                <div id="m_common_header">
                    <header className="jd-header">
                        <div className="jd-header-new-bar">
                            <div report-eventid="MCommonHead_Back" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" id="m_common_header_goback" className="jd-header-icon-back J_ping"><span></span></div>
                            <div className="jd-header-new-title">省钱</div>
                            <div report-eventid="MCommonHead_NavigateButton" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" id="m_common_header_jdkey" className="jd-header-icon-new-shortcut J_ping"><span></span></div>
                        </div>
                    </header>
                </div>

                {/*<div id="app">
                    <div className="main-container">

                        <div className="page-header-area clearfix">
                            <div className="login-head-box">
                                <div className="head-pic-box"><a href="//vip.jr.jd.com/newMemberCenter/index.html" clstag="pageclick|keycount|shengqian|1"><div className="head-pic"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t16843/196/1984070825/24277/685f1ecf/5adda63bN1324e2e9.png?width=210&amp;height=210" alt="" /></div> <div className="member-class yellow-gold-member">金融会员</div></a></div>
                                <div className="account-infor-box">
                                    <ul className="clearfix">
                                        <li className="account-infor-list"><a href="//m.jr.jd.com/vip/missionCenter/html/index.html" clstag="pageclick|keycount|shengqian|2"><h3>任务</h3> <p>0</p></a></li>
                                        <li className="account-infor-list"><a href="//bill.jd.com/bill/mList.html?source=27&amp;entrance=5" clstag="pageclick|keycount|shengqian|3"><h3>账单</h3> <p>0</p></a></li>
                                        <li clstag="pageclick|keycount|shengqian|4" className="account-infor-list"><a href="//m.jr.jd.com/mjractivity/rn/coupon-rn/index.html?RN=coupon-rn"><h3>卡券</h3> <p>0</p></a></li>
                                    </ul>
                                </div>
                                <div className="sign-in-box">
                                    <div clstag="pageclick|keycount|shengqian|5" className="sign-state no-sign"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div data-v-6901d0fa="" className="banner-area">
                            <div data-v-6901d0fa="" className="swiper-container swiper-container-horizontal swiper-container-ios">
                                <div className="swiper-wrapper" style={{transform:"translate3d(-960px, 0px, 0px)",transitionDuration:"0ms"}}>
                                    <div data-v-6901d0fa="" className="swiper-slide" style={{width:"320px"}}>
                                        <div data-v-6901d0fa="" className="banner-item-box"><a data-v-6901d0fa="" href="https://m.jr.jd.com/integrate/cpsN/html/transfer.html?channel=1aaf2cde1550a90ce276bcaad11dfd89" clstag="pageclick|keycount|shengqian|6-1"><img data-v-6901d0fa="" src="https://img12.360buyimg.com/jrpmobile/jfs/t29008/343/425757049/35626/a9ba5994/5bf29eafN452f1253.jpg?width=750&amp;height=360" alt="" /></a></div>
                                    </div>
                                    <div data-v-6901d0fa="" className="swiper-slide" style={{width:"320px"}}>
                                        <div data-v-6901d0fa="" className="banner-item-box"><a data-v-6901d0fa="" href="https://pro.m.jd.com/mall/active/3wxtLLHd9CGPegmTdtCvAfNFzusq/index.html" clstag="pageclick|keycount|shengqian|6-2"><img data-v-6901d0fa="" src="https://img12.360buyimg.com/jrpmobile/jfs/t28666/203/145502384/40855/61d3becc/5be94757N4c545177.jpg?width=750&amp;height=360" alt="" /></a></div>
                                    </div>
                                    <div data-v-6901d0fa="" className="swiper-slide swiper-slide-prev" style={{width:"320px"}}>
                                        <div data-v-6901d0fa="" className="banner-item-box"><a data-v-6901d0fa="" href="https://pro.m.jd.com/mall/active/3QxKCdzZHfNh3pDb8RZ8QfNoQ5i9/index.html" clstag="pageclick|keycount|shengqian|6-3"><img data-v-6901d0fa="" src="https://img12.360buyimg.com/jrpmobile/jfs/t28246/126/274676870/61389/7e5b1386/5bee28e5Naee426f8.jpg?width=750&amp;height=360" alt="" /></a></div>
                                    </div>
                                    <div data-v-6901d0fa="" className="swiper-slide swiper-slide-active" style={{width:"320px"}}>
                                        <div data-v-6901d0fa="" className="banner-item-box"><a data-v-6901d0fa="" href="https://pro.m.jd.com/mall/active/xV5jxHwHVvEBQYSS3pbys3Eqmbk/index.html?showhead=no" clstag="pageclick|keycount|shengqian|6-4"><img data-v-6901d0fa="" src="https://img12.360buyimg.com/jrpmobile/jfs/t26818/198/1892341704/59035/8028e8/5bf28ae8N1ab3c493.jpg?width=750&amp;height=360" alt="" /></a></div>
                                    </div>
                                </div>
                                <div data-v-6901d0fa="" className="swiper-pagination swiper-pagination-fraction">
                                    <span className="swiper-pagination-current">4</span> / <span className="swiper-pagination-total">4</span>
                                </div> 
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                        </div>

                        <div className="user-gifts-area">
                            <div className="user-gifts-box">
                                <div className="gifts-box"><a href="https://pb.jd.com/activity/2018/kaitonglingquan50/html/index.html?p_id=jdsqbn&amp;xd=jrxd" clstag="pageclick|keycount|shengqian|10"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t22399/143/1923825163/7813/3c6b8701/5b3b1363N136fafe7.png?width=252&amp;height=150" alt="" /></a>
                                </div>
                                <div className="gifts-box"><a href="https://pb.jd.com/activity/2018/quickpay100/html/index.html" clstag="pageclick|keycount|shengqian|11"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t22978/340/2572734271/2852/610ca30b/5b8604a0Nd10340af.png?width=252&amp;height=150" alt="" /></a>
                                </div>
                                <div className="gifts-box"><a href="https://home.jdpay.com/my/couponmall/shop/index?from=jdappsq" clstag="pageclick|keycount|shengqian|12"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t26266/237/1046676771/2700/89ceaf0d/5bc06b95Nbbd8fdaa.png?width=252&amp;height=150" alt="" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="coupon-area">
                            <ul>
                                <li className="coupon-list">
                                    <a href="https://m.jr.jd.com/mjractivity/rn/couponCenter/index.html" clstag="pageclick|keycount|shengqian|8">
                                        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&amp;height=480" alt="" />
                                    </a>
                                </li>
                                <li className="coupon-list">
                                    <a href="https://m.jr.jd.com/mjractivity/rn/couponCenter/index.html?RN=couponCenter&amp;from=xsq" clstag="pageclick|keycount|shengqian|9">
                                        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t16630/362/2707031119/15173/aa5acde3/5b03d5c7Nccffa23f.jpg?width=750&amp;height=480" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>*/}

                <input data-qyy-usertype="1209" id="qyy-usertype" type="hidden"/>
                <input type="hidden" id="refreshed" value="yes" />

                <div className="qyy-body qyy">
                    <input type="hidden" id="qyy-data-input" data-10="0" data-197="0" data-7="0" data-38="0" />
                    <div className="wrap-container">
                        <div className="wrap">

                            <div className="section section-10   hasFloorBottom" style={{background:"#FFFFFF"}}>
                                <div className="row row-title">
                                    <div className="com-title maxWidth100" style={{color:" "}}>支付优惠</div><div data-qyy-click="" jrmsc=" on" clstag="pageclick|keycount|Qing_1209_4859|0_0|null" data-qyy-ejumptype="0" data-qyy-jumpt="" className="com-desc bg-none" style={{color:" "}}>
                                    </div>
                                </div>
                                <div className=" row whole-banner ">
                                    <div className=" img-wrap bg-none min-height-0">
                                        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&amp;height=442" className="test-lazyload" alt="" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4859|7768_33930|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://home.jdpay.com/my/woolParty?from=sqbanner&amp;sid=" />
                                    </div>
                                </div>
                                <div className="row row-197 threeImg ">
                                    <div className="item-wrap">
                                        <div className="item" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4859|7837_34097|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://home.jdpay.com/my/couponmall/shop/index?from=sqbanner" style={{background:""}}><img className="item-img" src="https://img12.360buyimg.com/jrpmobile/jfs/t28342/281/144513453/24267/4b82f4f3/5be91415Nbbb51d03.png?width=335&amp;height=420" alt="" /></div>
                                    </div>
                                    <div className="item-wrap">
                                        <div className="item" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4859|7837_34098|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://m.jr.jd.com/zc/drawSystem/hb/index.html?contentParam=100001079&amp;act=1&amp;actCode=03D00D911E&amp;actType=1" style={{background:""}}><img className="item-img" src="https://img12.360buyimg.com/jrpmobile/jfs/t27631/208/1513930801/9151/55693fb9/5be4fb0bN15c07ec1.png?width=335&amp;height=210" alt="" /></div>
                                    </div>
                                    <div className="item-wrap">
                                        <div className="item" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4859|7837_34099|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://pro.m.jd.com/mall/active/98iv4M2xGRbaXGXp1zHg9u74yRm/index.html" style={{background:""}}><img className="item-img" src="https://img12.360buyimg.com/jrpmobile/jfs/t24757/94/2422816066/11630/c31c4bfb/5be4f719N75983e83.png?width=335&amp;height=210" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="section section-7 hasPadding  hasFloorBottom" style={{background:"#FFFFFF"}}>
                                <div className="row row-title">
                                    <div className="com-title maxWidth100" style={{color:" "}}>便利生活</div><div data-qyy-click="" jrmsc=" on" clstag="pageclick|keycount|Qing_1209_4862|0_0|null" data-qyy-ejumptype="0" data-qyy-jumpt="" className="com-desc bg-none" style={{color:" "}}></div></div>
                                <div className=" row menu "><div className=" item" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4862|7769_33939|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://airtickets.jd.com/?fromtype=savemoney" style={{width:"0.21%"}}>
                                    <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/3256/1/8339/10638/5ba98da9E4331a644/bc82f7dbfe7778b6.png?width=120&amp;height=120" className="icon test-lazyload" alt="" /></div><span className="title" style={{color:" "}}>机票</span><span className="desc" style={{color:" "}}></span></div>
                                    <div className="item" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4862|7769_33940|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://m.jr.jd.com/spe/qyy/main/index.html?userType=1126" style={{width:"0.21%"}}>
                                    <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/2912/35/8453/10948/5ba98db3E43593435/e8cd55fcebe851b2.png?width=120&amp;height=120" className="icon test-lazyload" alt="" /></div><span className="title" style={{color:" "}}>每日特惠</span><span className="desc" style={{color:" "}}></span></div>
                                    <div className="item" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4862|7769_33941|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://m.jr.jd.com/spe/qyy/hzq/index.html?usertype=1176&amp;sid=" style={{width:"0.21%"}}>
                                    <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/2919/38/8573/9112/5ba98db9E3096b801/0520550e7994d3a4.png?width=120&amp;height=120" className="icon test-lazyload" alt="" /></div><span className="title" style={{color:" "}}>领钢镚</span><span className="desc" style={{color:" "}}></span></div>
                                    <div className="item" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4862|7769_33942|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://jr-ccr.jdpay.com/" style={{width:"0.21%"}}>
                                    <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/5639/36/8328/9956/5ba98dc0Eda29abc6/27669c89e743fbda.png?width=120&amp;height=120" className="icon test-lazyload" alt="" /></div><span className="title" style={{color:" "}}>信用卡还款</span><span className="desc" style={{color:" "}}></span></div>
                                    <div className="item" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4862|7769_33943|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://train.m.jd.com?showhead=no" style={{width:"0.21%"}}>
                                    <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t24811/310/2150446270/4499/41ff95d9/5bc43903N17a87d6f.png?width=120&amp;height=120" className="icon test-lazyload" alt="" /></div><span className="title" style={{color:" "}}>火车票</span><span className="desc" style={{color:" "}}></span></div>
                                 </div>
                            </div>

                            <div className="section section-10 hasPadding hasTopPadding hasFloorBottom" style={{background:"#FFFFFF"}}>
                                <div className="row whole-banner ">
                                    <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t24091/103/334342904/113413/13be9e7e/5b2c6e44N6ec010f7.jpg?width=1500&amp;height=956" className="test-lazyload" alt="" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4917|7854_34158|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://know.m.jd.com/page/entry?sid=" /></div>
                                </div>
                            </div>

                            <div className="section section-38  hasTopPadding noFloorBottom" style={{background:"#f3f5f7"}}>
                                <div className="add-bottom" id="qyy-add-bottom">
                                    
                                    {(()=>{
                                        return this.state.tabs.map((item,index)=>{
                                            return (
                                                <Link to={`/${item.href}/`} onClick={this.props.skipTo.bind(this,item,index)}  key={index} className="item" data-qyy-eredid="0" data-qyy-eid="34262" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4945|7910_34262|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://m.jr.jd.com/spe/qyy/main/index.html?userType=67&amp;sid="><img src={item.src} className="user-img" alt="" />
                                                    <p className="blue" style={this.props.tab===index?{color:"#4668FF"}:{color:"#B1B4BB"}}>{item.title}</p>
                                                </Link>
                                            )
                                        })
                                    })()}
                                    
    

                                    {/*<div className="item" data-qyy-eredid="0" data-qyy-eid="34263" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4945|7910_34263|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://m.jr.jd.com/spe/qyy/hzq/index.html?usertype=1176&amp;sid="><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/588/4/14260/1269/5bda5aa8Ef5dd59e7/0c858b7b025667f5.png?width=60&amp;height=60" className="user-img" alt="" />
                                        <p className="blue" style={{color:"#B1B4BB"}}>赚钱</p>
                                    </div>
                                    <div className="item" data-qyy-eredid="0" data-qyy-eid="34264" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4945|7910_34264|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://m.jr.jd.com/vip/borrowMoney/html/index.html?sid="><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/8865/35/4351/594/5bda5ab6E745eaea1/c1f9d5cdc1df7053.png?width=60&amp;height=60" className="user-img" alt="" />
                                        <p className="blue" style={{color:"#B1B4BB"}}>借钱</p>
                                    </div>
                                    <div className="item" data-qyy-eredid="0" data-qyy-eid="34265" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4945|7910_34265|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/3832/28/14067/2174/5bda5ae4E623fa89e/fa47608de6864e2a.png?width=60&amp;height=60" className="user-img" alt="" />
                                        <p className="blue" style={{color:"#4668FF"}}>省钱</p>
                                    </div>
                                    <div className="item" data-qyy-eredid="0" data-qyy-eid="34266" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_1209_4945|7910_34266|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://m.jr.jd.com/spe/qyy/main/index.html?userType=95&amp;sid="><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/5022/20/14255/926/5bda5ad6E189567bb/90b4015b0c44b80f.png?width=60&amp;height=60" className="user-img" alt="" />
                                        <p className="blue" style={{color:"#B1B4BB"}}>金融会员</p>
                                    </div>*/}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <div id="header-shortcut-ul">
                    <ul id="m_common_header_shortcut" className="jd-header-vertical-shortcut" style={{display:"block"}}>
                        <li id="m_common_header_shortcut_m_index"><a className="J_ping" report-eventid="MCommonHead_home" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://m.jd.com"><span className="shortcut-index" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAAG2bMCoAAAAAXNSR0IArs4c6QAAA2hJREFUWAnNmD1IVmEUx30tizAUDKPACBIcbWqwtsB2Q9obmgJdCxsDA1sFQWiMpqZaQ1tToiV0iQbBFoWgoC+q3/96z+O53x+vL3Xg9JyP//9/nue993ov9fUV2R/MeoRzFuevQmND+qdjECUWh5Xa25AooDAcr1l0QJqWrVEjkQSoCwCs4fsqZcAUxjPFJPlG6BNsuV4iTPQCw420mq3+F1o0qU6ncx+A5W/In1svrACSv17ouMDGsO7ja651EFKcM5A1yYd9rT9OtthH2K/ApJ9VUx8bN4F6K4xmvyOE6K7SLBvh43BdrWirwBb3G7NqjU4K6ybAKwJzUH9VorxKRGOnNDplU2XEzBYhnzIBiNP6zb2pZn1hC8Vp7sbAzUJQqgF+M+bshhaFD/i3UGgZSENaLek1aKhHVgOagKR5mYvi0YB3YsIiq1y24zGF8QH28JYWMF1L53kYv8MnHiCy8jwzYYeJuHnYTA3SLfyr1kyzSQEB3U7emt8SsMecwqw2QD7ramO1NgVhJSb9Yj3mScpx1WUrvpeJAejulj3LNF1B/QiV90TR8A/3hOMVhnAmYkEt0xGQYCMuHj7IhRLZBlz747FhN+h8Fla/guC8NlSf8c+Qbbfpef757PogpWJMXddkZ+tlE8NLXQS9WDxYNfJVfA8/g9/Jw6Rr0S0COGGxWKilczV8rfSYQaVmcKRix/1Qv2Vf93EZxosNQHqAn/TkVPwolX8nf5iqtUvZpb6xnmq3Oab6UDvlliwG6vtzAf+Je1slOY9r9SbcAn6k1zuxfcRn8D3c22uSCwlgnKiOq+9N/Jk8fOMaQpP4e69O/BG/2kQM/LWYxxJMupNNdPQQj+IvgsRB8IXldiOhArB0cOl507zRXAqNAXwJ/42bKX6Mn8gldVmUbqyfnql96EmP/txtk3h7SXK2y9mN6JqHa663bV3GQfwSfrqRYo/A2ke8n8EejeiRLLu+iN/V2qMRCdmyeYn3u1iAw1dY5j2ekD2apGyefxc2noawDncdv4z7p/oH+Tv8FQcMhyXvznQSszIlMMuGq1iXK3QCPY1rfVmlaGJ5l7+qb9wyXO9exja9i/W/3lzeA/GJw57TgfnJl1j0Zd6VoXOvQEBf/GaaW24IjeD2X0aE1ZanWM1KIDRvJK3zF+VnwY9g2V+mAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>首页</strong></a></li>
                        <li id="m_common_header_shortcut_category_search"><a className="J_ping" report-eventid="MCommonHead_CategorySearch" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://so.m.jd.com/category/all.html"><span className="shortcut-search" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAFp3oPPAAAAAXNSR0IArs4c6QAAAzJJREFUWAnVljtrVFEQx3dN8IVY+UphUmgjVkq00VLER2LrB/CDCEISQcTCTrBTCYpgtLC3UAv1A5hYWEaEKFlNNmZdf//rmbOzd+9rV1l0YPbM4z//M3vPnXtvreak3W5vOrdWI9BWQOsWl/kSbFs7qQTJz6wME6XrhiF4HHvN/Lh6xCTR6HcQIoyeDPy4U/AbxFSu3DF0RXaXEOxiSXx+ZmRIDI15BP2BvrNY4Qqwt2tVkHiDvojVOCazAeC3jbYv6FSHKAwv/bEovDNWFBna2/LRlhFkxiVfE3uluMVyVzBX0d25AEsAqtf5KaOcs4LCFZ4VkWVIIxaSjOfrgMkfxdc5S5I7JxYFg7juJMnR7PPtADVAI3UkTWK+WLCb6YOzvK0nZYDN6+hEAE52DYHYgyT3lbER02BkSecaGXiQNTC/VW3uf69KLDKwvY+XqgQ9OAizjj90XXmJc9GzQToA5U30K/oZrXYnGwkFl9A8OZfgyDZTiKYjmAi5RYvZSvx9yI3r3lkPji3rDqhYy/z0Sm4T/ZmOd/liQKa6gs4hNy2AC/WaAiDbezO/I+R2CFA2U0KfySOxXOHdq10Athjw0Swi0rpe9bJOJgCNAM46nSVyqj+k08k9YgDKX0Dz5KwwhUecAMIPLNdRPUqX0WuoZN5j+rYheJDQcDiFF7aMWSRgPpXhCvNwXA5EhbjSJCS5N2NpsQfoLaip3eqDfdobulmKB6ic8U/rOzvwj8bR52gVeQJI0/B3BdLz6IbrQM+qeyG+h3UU3Ydqgu6jypuobjp2hLNqmZJ1NRYFA/yCq1nC3p/GZPng9qL2pBbFsyxc5RgEc2IJMtBYU/vICFj7e6n5TinWW9FkzOeq2hQfMALW5bJHbhGvf5YXv8/yWfz+ld5EeVR3XeK2s/sxbznwHWf3b3Jp/Sgv6rJXYREO/YCaPK5SV4qBTR9HfrRb+PPoFDqGbkM12vqyeIimR/ti3ITkwKMdSTDgmUCfolXlO8BxzzF0mwZOpbo9PfQm/IY0cxD95pq64vNDt2lEH5YfXUM3/JwPtSG+OddQvSztVXB4qA38V5vpy0pv413/QNeNXxjWvZIdtAPeAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>分类搜索</strong></a></li>
                        <li id="m_common_header_shortcut_p_cart"><a className="J_ping" report-eventid="MCommonHead_Cart" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://p.m.jd.com/cart/cart.action"><span className="shortcut-cart" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAF9MBMNAAAAAXNSR0IArs4c6QAAAvNJREFUWAnNWDtOHEEQ3TWWFwksITniADiFBB/AOaEtgSUOQYhDG0JSDoGELYGPQL6k+AAOWGmDxRKgxetXreqe6u6q+e14cUtDd1W9eq96aqYZ6M1ms+NeMvpkIzBL/LnzJSO2LPSEqSYqnxNiRC7m1cE9zUrqY7zwCDL8OsxIy3YWgnKh1s4AigUZ+H7KxGT9NrFLTKLFeCyBFCFCFpa+8jW6+oA/oiRlDF06Aps6j2txvBGAjzQw/NPIT3KRgw3v9w+Lc3unltDOlzJGNoz0lmy1k1GySAkjPBtYHztP/R9fIlrkfaXcyFnTYM39DM6BRttGzinlZWTkYMIbNWg4OedUDSPomqQGFSfw+0SohAoX4o8EajCqjw2QjZlwu5AqVlbcv6YFct4VlB64EpqqSy8R7BMZ4q88Rj1XfbDuDNLWD3OmAbJNXFHLYcpbQOGycR+agO1dkwLQjd4KUdUgkAnnB7+GwIDuYdUA/ofPCTPvIZwqIVCx4LzbCAbnDQUiZw2DyQ4jKJyNO4qcVSZbTcmyjkYAxQDRZyJTQuFYqt1R8Iw8mdZNEgkdVRVj5xuYl7GLLVJpMd5bZE1/ydT73FDVmjqxzW3e6ljLrYpHOQBPmExteVU8JXvHZFZlapwOR/qajZ/egpq+hV7jRb8vXM+8QsHnvFOaPj1XOdZLdSYKavKCibT5l/nfDeDE3Rpg+o1rCdcfXCtpa4EpexyQMve4Mxkg/g2XHwtpLcTcocui+iccVQzArq8M83dzFx0GoOMOcdbdMKkBWMY1ZeAT2Sa4gwD43Tcq611UUgK4sNZCa8iF0aT/opEVA7QnEv5Za6kYoTOUNZhrJCyktdC5FMXlf2lZFSJJtnbPwrX1g39DFDaSPNYhLDHyQP4oAx2tDwTPiVj31ENYArArekvpwI3+iyAxHa2fwLOGw94+fDsS6oSm8s6lKriT6/DtsP8CO/2VYsrsefNNbhBf4UrHlZmQBJDYKL/OC5FILM78r9v6Fx346V9Ef2tUAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>购物车</strong></a></li>
                        <li id="m_common_header_shortcut_h_home"><a className="J_ping" report-eventid="MCommonHead_MYJD" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://home.m.jd.com"><span className="shortcut-home" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAjCAYAAAFgNSO1AAAAAXNSR0IArs4c6QAAA8VJREFUWAm9mF9ojlEcx/duM2PZFnZjqV0oRSLZFe3CBVfcTdxQUtxYcYXQ8ifKJZKiGCEXXGBlKDUpiuRKLS2WEuVPW2hmr8/v2Tnv+zvPc877Ps/el199d35/vr/vOc/7vOect9XUGMvn89esH40k1jgJHVCcLMQET22An68BgzaRGCmOJJKSiFptxQlM9aAqtlnfGX1decugWFyzTcpIIfGkCSVDbJRCzE5asZwh/cnlcnU2qUcaFxOv1DmZXlR/gW1OgaDeJigex29FWcgzQB4/mtFyolEKOkH4WMe1Okjlo3ACnBUyYzS1t5Hid+BYgijVRHJKuZgPkWyjrad5mNW2yTui1CdqAWvxNpH0ziwi1NrlxfiM2jcoD0KiTh5ijxF08jqgvq8cR/OjPUbDIyepAhHDgnVFLbo03Ija/H9ai8wSHr27Vf8WH5V6HRg0vOBubjeEAZ9IKEdPrekbL3BILDLJjkIyo0N/tC2iNoJjQPZyRYbGWFkBSJvAMBgHt8Ccsk1xAk0zQcj64/ySsVKZrYnke03tss4HfciXTEPyDKSL2hWpBwV0wQgN6VzcN5zN8bz3IIB0P070xO49ACEktt7THE+9iCcSMY9gz7rKPzNRN5+JDKG32ZdYRSiBiO9ytXM8DPUl8nTst10lxp/UmhPNOgFBto3YK9Cga9Ynv0EIxo7avDPaKmOHUwgE8O6ZnnMOhaS9Yb2rccgqoC/aDYzLojROFxBL/PRRfUGXvh/SbMUm8SeC7DIFeltEDOuy36nuMj0ly1Na+eEczigXcfZDT8mj0UO4XKXSuzRvBe9BOfsMQS780BmQftJSTJkA3AXaPhAcACtAM2gCS8AeMAS0PSNoLDXHtGqIyk1rN5xM6N9MHnW4O6VBWelffR6NYApR+cn7VYl3BsmBAr0LwYTRkHFegJotjdB2IyrD9WzdRTa9p5TO4WIl7KX5oqa7f8Nz2Iq+r6qjydPKdTOmnrrS1yqH4AK74opHxJaC32qBlWyItRUvKC7AwupBv1qguFmOkufwm+K6VYkRngv2gjcgq72j4RCo6uvsRPCtZyVfyMn1vAOsAm2gAcinKw8hh7LcIhfARxA3ya2b1qdGY29MbZRYDlO94zJr098NPgFt5wnKnxqQNgLZTdYGcJxfmJlX5GlAUz7hq3YSM+7yUKdSEG4q8gj+/CC5SgXmmAVeq3mf4Ltvh8QdRbhYpblTyzD3ETX/y0Ijyej/E6Z4u1D4zw7zn1ELPB1NT8Ke/nIhp/s3xT9YOHPXATkFrNX+BSB8ooU9mPUcAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>我的京东</strong></a></li>
                        <li id="m_common_header_shortcut_h_footprint"><a className="J_ping" report-eventid="MCommonHead_FootPrint" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://home.m.jd.com/myJd/history/wareHistory.action?functionId=liulanjilu"><span className="shortcut-footprint" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAEDGXMMAAAAAXNSR0IArs4c6QAABMZJREFUWAmlmF+oFVUUxu+RMMoe0ohSQS4ZmBAU9P9BTAkFq5eghKDo3XpM0CL6A2VZcoUEIYgIIgp6sfIhIuuhMiJ7KpMsiEhvD964GZWWnn7fPnvtWXvPPnPn3hZ8Z6/9fd9aM3NmZs+cMzERYzgcnrB8kRKInQy/xHyoUeSdISk/EEJVyTdzv4HAQihuAc82tphJsd0YbRrBtrAj2XGdkFUhshyT0UQMK400s83DWCNrnJnTvnSZpL2nD2JgleuYHNCEcRdYHAT/ARkimpTLGI44+SDOSYmmd0mPgNBNPDETzCTa5HmrJN8N0rdrppyAxfOpFSUT5MUZOTI+nHGYPgZZR6bTmUmTiikU2RmvFWyFXFcT1OwwOJt1ZaLD93HOqh0ZbgLm+qJDmCeNsAeiloYkFgmGxUBnbJckxikwA6qnewtCV8xaf2eaMi6MUUiHlolxgmd59H1f07Wbg2i4p2pwJL7roneVo5sUcWU0aPgWjO6BxpKy6DuYiHEJxkXR/HjNE7Xsyqv5dKiro3ltzRC1z2taxmHcFs3ZqYVbE/nOk1I2W0bRr7HQhjcyk5/g0EWpCy3dE+TZxef9rRxzWEYYLUIjJmoawopszhiuauPDbexEpWPvJ+cLnq4mYZlMBpfQxFZEHaqge2tKe/IYsAjfPBNdM0+DQ+A78A7Y4PqpTg1CeD7ksD9FbdzwkIyIustDhEL7gAmLEuMrxtkINwnOAMVu47MR4ZEgD4dbMqGY4LGz1l5CEf9Qk6KmOpWPeLslQs5KaQkVQj5FS4K7PyjD4astsSDw6Yy1m8gHf1xijPuK2jRFf0meRJQJ2q0yxPi61DVHu1d6Tcs4PFrtqkZoWzYvUlH7NDWtTjdpK1semXCFdzW5uVXaELcrHQwGZxuqkulQiOpSOJKaQ+3aE7WeLPvT4Hjk1pdaa475YNyi7qe3wFdxrmF/q2AcgflJV6j0NLim6kfYCc6DMrR06m05C7j0FuEKsiUTXouWLWK6aZVnT5CsqSYYWm8gcGVkqyairQjely29fTzlzuhE31iSlXnpmcTzPDgZoXwS+HjdT2Je4xobR6CXvPJJ5o9YWnpENpULz+i3128g5s1rmTYI7Pms06DcHq+XkL8Iyoc91Nj4DeU5cGW523Dp+eWqZ8a+cakBxm0ML5fNmH8DPgQ/gz/BX+BysBrcAMrTCjWxj5Uk/A6gry7kF8CDEgidvu0hKz8wLwXTwEIPmNtK31xzataCH6wJo+7YO+aqy3QKvnQNXsvEBUzotdn1U3p3rzYYlxSF1/cqnMNEz0ddX92F/YKiT1zhR+Sd11afrvS4ANirkdpv7lOnC1dvdEdU4eJH8geA1qYFBbV+gd07ryYUXwreBLX4DLL+Q2nMVvDbDwv1OzrG1o+mwSZwWJ1cbOpXHZaKja7u7751nT4avu+aPtNpdiI1N7k6pcuc3PlO5X1l7h8Px0qxY77GabMsgqP/XRw5r5Sj2eqO7nfyXhc0Pv14P+pq98xrwzUzzZ5wDT+oeUoO/1XglKv7ovQsaE7Dq11TpXoFvKJsBqdHyg6gb8/HU6X3f83pvAIc81uYI/8HfTvoXDw7xT57zAYuxHcXuBZcBv4F0yA82blIz5D3iv8AygYvrfqZyYcAAAAASUVORK5CYII=) no-repeat center center",backgroundSize:" 15px"}}></span><strong>浏览记录</strong></a></li>
                    </ul>
                </div>

                <div id="header-mask" style={{display:"none"}}></div>
                <div className="add-bottom-seize"></div>
                <div className="black-cover" id="qyy-black-cover" style={{display:"none"}}></div>

            </div>
        );
    }
}

export default connect((state)=>{
    return state;
},(dispatch)=>{
    return {
        skipTo(item,index){
            dispatch({
                type:"skipTo",
                tab:index
            })

        }
    }
})(Savemoney);
