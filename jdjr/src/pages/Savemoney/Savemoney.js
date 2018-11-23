import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from "react-router-dom";

import './Savemoney.scss';
import { Carousel } from 'antd';

class Savemoney extends Component {
    constructor(props){
      super(props);
      this.state={
            isShowSmallCart:false,
            isShowMyLayer:false,
            showQuan:"",
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
            life:[{
                title:"机票",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/3256/1/8339/10638/5ba98da9E4331a644/bc82f7dbfe7778b6.png?width=120&amp;height=120",
                href:""
            },{
                title:"每日特惠",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/2912/35/8453/10948/5ba98db3E43593435/e8cd55fcebe851b2.png?width=120&amp;height=120",
                href:""
            },{
                title:"领钢镚",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/2919/38/8573/9112/5ba98db9E3096b801/0520550e7994d3a4.png?width=120&amp;height=120",
                href:""
            },{
                title:"信用卡还款",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/5639/36/8328/9956/5ba98dc0Eda29abc6/27669c89e743fbda.png?width=120&amp;height=120",
                href:""
            },{
                title:"火车票",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t24811/310/2150446270/4499/41ff95d9/5bc43903N17a87d6f.png?width=120&amp;height=120",
                href:""
            }],
            tabs:this.props.tabs,
            coupon:[{
                num:5,
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&height=480",
                href:""
            },{
                num:99,
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t16630/362/2707031119/15173/aa5acde3/5b03d5c7Nccffa23f.jpg?width=750&height=480",
                href:""
            }],
            getQuanNum:0
        }
    }


    showSmallCart(){
        this.setState({
            isShowSmallCart: !this.state.isShowSmallCart
        })
    }


    /*获取优惠券*/
    getQuan(item){
        this.setState({
            isShowMyLayer:true
        })
        this.setState({
            showQuan:item.src
        })
        
    }

    /*取消领取优惠券*/
    calcelQuan(){
        this.setState({
            isShowMyLayer:false
        })
    }
    
    
    /*真正获取优惠券*/
    realGetQuan(){
        this.setState({
            isShowMyLayer:false
        })
    }


    render() {
        return (
            <div className="savemoney">
                <div id="m_common_header">
                    <header className="jd-header">
                        <div className="jd-header-new-bar">
                            <div report-eventid="MCommonHead_Back" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" id="m_common_header_goback" className="jd-header-icon-back J_ping"><span></span></div>
                            <div className="jd-header-new-title">省钱</div>
                            <div report-eventid="MCommonHead_NavigateButton" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" id="m_common_header_jdkey" className="jd-header-icon-new-shortcut J_ping"><span onClick={this.showSmallCart.bind(this)}></span></div>
                        </div>
                    </header>
                </div>

                {/*自己写*/}
                <div className="l_header">
                    <div className="header_left clearfix">
                        <a href="#">
                            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t16843/196/1984070825/24277/685f1ecf/5adda63bN1324e2e9.png?width=210&height=210" width="43px" height="43px" />
                        </a>
                    </div>
                    <div className="header_middle">
                        <ul className="clearfix">
                            <li><a href="#"><h3>任务</h3><p className="middleNum">37</p></a></li>
                            <li><a href="#"><h3>账单</h3><p className="middleNum">0</p></a></li>
                            <li><a href="#"><h3>卡券</h3><p className="middleNum">{this.state.getQuanNum}</p></a></li>

                        </ul>
                    </div>
                    <div className="header_right">
                        <a href="#"><img src="./images/01.png" width="60px" height="55px"/></a>
                    </div>
                </div>

                <div className="swiper-container lunbotu clearfix">
                    <Carousel autoplay>
                        <div className="swiperItem">
                            <a href="#"><img src=" https://img12.360buyimg.com/jrpmobile/jfs/t26494/44/1976501052/44585/ad311eee/5bf3d23fNd7210734.jpg?width=750&height=360" height="150px" width="320px"/></a>
                        </div>
                        <div className="swiperItem">
                            <a href="#"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t28246/126/274676870/61389/7e5b1386/5bee28e5Naee426f8.jpg?width=750&height=360" height="150px"   width="320px"/></a>
                        </div>

                        <div className="swiperItem">
                            <a href="#"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t28666/203/145502384/40855/61d3becc/5be94757N4c545177.jpg?width=750&height=360" height="150px"   width="320px"/></a>
                        </div>
                    </Carousel>
                </div>

                <div className="pay clearfix">
                    <div className="payItem">
                        <a><img src="https://img12.360buyimg.com/jrpmobile/jfs/t22399/143/1923825163/7813/3c6b8701/5b3b1363N136fafe7.png?width=252&height=150" width="106px" height="64px"/></a>
                    </div>
                    <div className="payItem">
                        <a><img src="https://img12.360buyimg.com/jrpmobile/jfs/t22978/340/2572734271/2852/610ca30b/5b8604a0Nd10340af.png?width=252&height=150" width="106px" height="64px" /></a>
                    </div>
                    <div className="payItem">
                        <a><img src="https://img12.360buyimg.com/jrpmobile/jfs/t26266/237/1046676771/2700/89ceaf0d/5bc06b95Nbbd8fdaa.png?width=252&height=150" width="106px" height="64px"/></a>
                    </div>
                </div>

                
                <div className="youhui">
                    <ul className="clearfix">

                        {(()=>{
                            return this.state.coupon.map((item,index)=>{
                                return (
                                    <li key={index}  onClick={this.getQuan.bind(this,item)}>
                                        <a href="javascript:;"><img src={item.src} width="160px" height="102px"/></a>
                                    </li>
                                )
                            })
                        })()}
                    </ul>
                </div>
                {/*====================================================================================*/}
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
                                    <div className="com-title maxWidth100" style={{color:" "}}>便利生活</div><div className="com-desc bg-none" style={{color:" "}}></div></div>
                                <div className=" row menu ">

                                    {(()=>{
                                        return this.state.life.map((item,index)=>{
                                            return (
                                                <div key={index} className=" item"  style={{width:"0.21%"}}>
                                                    <div className="img-wrap bg-none min-height-0"><img src={item.src} className="icon test-lazyload" alt="" />
                                                    </div>
                                                    <span className="title" style={{color:" "}}>{item.title}</span>
                                                    <span className="desc" style={{color:" "}}></span>
                                                </div>
                                            )
                                        })
                                    })()}
                                   
                                    
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
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="header-shortcut-ul">
                    <ul id="m_common_header_shortcut" className="jd-header-vertical-shortcut" style={{display:this.state.isShowSmallCart? 'block':'none'}}>
                        <li id="m_common_header_shortcut_m_index">
                            <Link to={`/home/`} className="J_ping" ><span className="shortcut-index" style={{background:"url(images/yy1.png) no-repeat center center",backgroundSize:"15px"}}></span><strong>首页</strong>
                            </Link>
                        </li>
                        <li id="m_common_header_shortcut_category_search">
                            <Link to={`/classify/`} className="J_ping" ><span className="shortcut-search" style={{background:"url(images/yy2.png) no-repeat center center",backgroundSize:"15px"}}></span><strong>分类搜索</strong>
                            </Link>
                        </li>
                        <li id="m_common_header_shortcut_p_cart">
                            <Link to={`/cart/`} className="J_ping" ><span className="shortcut-cart" style={{background:"url(images/yy3.png) no-repeat center center",backgroundSize:"15px"}}></span><strong>购物车</strong>
                            </Link>
                        </li>
                        <li id="m_common_header_shortcut_h_home">
                            <Link to={`/mine/`} className="J_ping"  ><span className="shortcut-home" style={{background:"url(images/yy4.png) no-repeat center center",backgroundSize:"15px"}}></span><strong>我的京东</strong>
                            </Link>
                        </li>
                        <li id="m_common_header_shortcut_h_footprint">
                            <Link to={`/home/`} className="J_ping" ><span className="shortcut-footprint" style={{background:"url(images/yy5.png) no-repeat center center",backgroundSize:" 15px"}}></span><strong>浏览记录</strong>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mylayer"  style={{transformOrigin:"0px 0px 0px", opacity:"1", transform:"scale(1, 1)", display:this.state.isShowMyLayer? 'block':'none'}}>
                    <div className="mylayerBox1" onClick={this.realGetQuan.bind(this)}>
                        <img src={this.state.showQuan} />
                    </div>
                    <div className="mylayerBox2">
                        <img src="https://mjr.jd.com/spe/smrz/img/clear.png"  onClick={this.calcelQuan.bind(this)}/>
                    </div>
                </div>

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
