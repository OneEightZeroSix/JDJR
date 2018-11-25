import React, { Component } from 'react'

import cookie from "../../libs/cookie.js";

import { connect} from 'react-redux';

import { Link } from "react-router-dom";
import $ from  'jquery';
// import "../../assets/css/Dindexmin.css";
import "./order.css";


import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
        //    yuan:[],
        //    zong:[],
        //    zon:[],
        //    ge:1,
           min:"address_defalut_wrap",
           dizhi:{},
           shangpin:[],
           length:1,
           zongjia:0,
           juanmin:10000,
           juan:[],
           juanlength:0,
           diyong:0
        //    cur:0,
        //    gongneng:["综合","价格","销量","筛选"],
        //    jia:true,
        //    zonglei:''
        }
    }
    
    // 获取数据
    huoqu(){
        var yhm=cookie.getCookie("yonghuming");
        $.ajax({
            type: "post",
            data: {
                yhm
            },
            url: "http://localhost:3001/car/huoqu",
            async: true,
            success: (data)=>{
                var jia=0
                data.forEach((item)=>{
                    jia+=Number(item.price)*Number(item.jian);
                })
                this.setState({
                    shangpin:data,
                    length:data.length-1,
                    zongjia:jia
                })       
            }
        });
        $.ajax({
            type: "post",
            data: {
                yhm
            },
            url: "http://localhost:3001/address/huoqumoren",
            async: true,
            success: (data)=>{
                if(data.length==0){
                    $("#ad3").css("display","block");
                }
                if(data.length>0){
                    $("#ad2").css("display","block");
                    this.setState({
                        dizhi:data[0]
                    })
                }                
                
            }
        });
        //获取卷
        $.ajax({
            type: "post",
            data: {
                yhm
            },
            url: "http://localhost:3001/coupon/huoqu",
            async: true,
            success: (data)=>{
                
                this.setState({
                    juan:data,
                    juanlength:data.length
                })       
            }
        });
    }
    // 吸顶效果
    xd=()=>{
            
                if (document.body.scrollTop>45){
                    this.setState({
                        min:"address_defalut_wrap xiding"
                    })
                }
                if (document.body.scrollTop<5){
                    this.setState({
                        min:"address_defalut_wrap"
                    })
                }
                
        
    }
    
    //更改地址
    genggai(){
        this.props.history.push("address");
    }


    //点击选择优惠卷显示隐藏
    coupon(){
        $(".m_header").css("display","none");
        $("#pagePay").css("display","none");
        $("#jdQuanPage").css("display","block");
    }


    shiyong(){
        $("#jdQuanPage").css("display","none");
        $(".m_header").css("display","block");
        $("#pagePay").css("display","block");
        
    }


    //选择用卷
    xuanze(idx,item){
        console.log(idx);
        this.setState({
            juanmin:idx,
            diyong:item.min
        })
    }


    render() {
        return (
            <div>
                <div className="wx_wrap" id="wrapBody">
                {/* ============================== */}
                    <div className="m_header" >
                        <div className="m_header_bar">
                            <Link to="cart" className="m_header_bar_back"></Link>
                            <div className="m_header_bar_title">确认订单</div>
                            <div className="m_header_bar_menu" style={{display:"none"}}></div>
                        </div>
                        <div className="m_header_nav" id="headnav" style={{display:"none"}}>
                            <div className="m_header_nav_item type_index">首页</div>
                            <div className="m_header_nav_item type_search">分类搜索</div>
                            <div className="m_header_nav_item type_shopcart">购物车</div>
                            <div className="m_header_nav_item type_my">我的京东</div>
                        </div>
                    </div>
                    {/* ================================ */}
                    <div id="pagePay" >
                        <div id="yellowBar">
                            <div className="order_deliver_tips" id="svcTip" style={{position:"static",display:"none"}}>由于地址变更，配送服务发生了变化，请核对~
                            </div>        
                        </div>

                        

                        

                        <div className={this.state.min} onClick={this.genggai.bind(this)} id="topFixedDiv" style={{height:"91px"}}>
                            <div id="addressDefault" className="address_defalut address_border" style={{display:"block"}}>
                                <ul>
                                    <li><strong>{this.state.dizhi.name} {this.state.dizhi.tel}</strong></li>
                                    <li id="ad2"  style={{display:"none"}}> <span className="tag tag_red"  >默认</span> {this.state.dizhi.address} </li>
                                    <li className="error" id="ad3" style={{display:"none"}} >请添加地址</li>
                                </ul>
                                {/* <p className="tips color_red" id="globalSalTip" style={{display:"none"}}>目的国/地区如产生关税费用，需客户自行承担，请知悉</p> */}
                            </div>
                        </div>

                        <div id="pingouInfoArea"></div>
                        <div id="venderOrderList">
                            <div id="venderList">
                                <div venderid="0" className="order_info">
                                    <div className="order_shopBar" venderid="0"> <i className="order_shopBar_jd"></i> <span>京东自营</span> </div>
                                    <ul>
                                        {(()=>{
                                                return this.state.shangpin.map((item,idx)=>{
                                                    return(
                                                        <li  key={idx} className="hproduct noclick">
                                                            <img className="photo" src={item.imgurl}/>
                                                            <div className="fn"> <strong>{item.name}</strong> </div>
                                                            <p className="sku_price">¥<span>{item.price}</span>.00 <span> x {item.jian}</span></p>
                                                            <ul className="order_info_tips">
                                                                <li><img className="icon_optional" src="//img11.360buyimg.com/jdphoto/s30x30_jfs/t24454/180/2585111474/1236/c5718bb0/5b863011Ncc8682f5.png"/>支持7天无理由退货</li>
                                                            </ul>
                                                            <div className="buy_additional" id="proArea" style={{display:"none"}}> </div>
                                                        </li>
                                                    )
                                                })
                                        })()}
                                        
                                    </ul>
                                    <ul className="order_info_list">
                                        <li className="shipping" shiptype="shipjzd" venderid="0"> <strong>配送服务</strong>
                                            <div className="shipping_content" ship_venderid="0">
                                                <p>京东快递</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="deliver_deadline" venderid="0" id="freshJzd" > 配送时效 <div
                                            className="deliver_deadline_text"> <i className="mod_tag "><img src="//img11.360buyimg.com/jdphoto/s92x30_jfs/t5560/306/470424583/670/c684bc0e/590065e4N52153346.png"/></i><span>请选择京准达配送时效</span>
                                        </div>
                                    </div>
                                    <div className="order_info_guarantee" type="refund" venderid="0" style={{display:"none"}}></div>
                                    
                                    
                                </div>
                            </div>

                            <div className="buy_checkout" id="buyDiscountArea">
                                <ul>
                                    <li id="tabPromotionList"> <a className="content"> <strong>促销优惠</strong> <em>
                                                查看更多优惠 </em> </a> </li>
                                    <li id="tabInvoices" >
                                        <a className="content">
                                            <strong>发票信息</strong>
                                            <span>电子发票&nbsp;个人&nbsp;商品明细</span><br/>
                                            <em id="taxidTip" style={{display:"none"}}>请填写纳税人识别号，以免影响发票报销</em>
                                        </a>
                                    </li>
                                    <li id="conponListTab" >
                                        <a onClick={this.coupon.bind(this)} id="jdQuanTab" className="content">
                                            <strong>京东券</strong>
                                            {(()=>{
                                                if(this.state.diyong==0){
                                                    return (<div>
                                                                <span style={{display:"inlineBlock",border:"1px solid #e93b3d",marginRight:"5px",color:"#e93b3d",fontSize:"10px",height:"12px",lineHeight:"12px"}}>有{this.state.juanlength}张可用</span>
                                                                <span className="disabled" style={{display:"inlineBlock",color:"#e93b3d"}} >去使用</span>
                                                            </div>
                                                    )
                                                }
                                                if(this.state.diyong>0){
                                                    return (
                                                                <span style={{display:"inlineBlock",marginRight:"5px",color:"#e93b3d",fontSize:"10px",height:"12px",lineHeight:"12px"}}>已使用1张 共抵扣¥{this.state.diyong}.00</span>
                                                    )
                                                }
                                            })()}
                                            
                                            
                                            {/* <em className="disabled">无可用</em> */}
                                        </a>
                                    </li>
                                    <li id="jdCartTab" ><a className="content"><strong>礼品卡</strong><em
                                                className="disabled">无可用</em></a></li>
                                    <li id="codeTab" style={{display:"none"}}></li>
                                    <li id="jdRedPacketTab" asset_tag="redPacket" style={{display: "none"}}></li>
                                    <li id="jdBeanTab" asset_tag="bean" className="disabled">
                                        <div className="content"> <strong>京豆</strong> 共187个，可用0个<br/> 未满1000个，暂不可使用 </div> <span className="tips_dou"></span>
                                    </li>
                                </ul>
                                <div className="mod_blockTips" id="douYellowBar" style={{display:"none"}}>使用京豆支付需完成实名认证，<em id="dShiming">点此认证</em></div>
                                <div id="payPass" style={{display: "none"}}>
                                    <div className="input_password" id="longPass" style={{display: "none"}}> <label className="input_password_label">支付密码</label>
                                        <input type="password" placeholder="请输入京东支付密码"/> </div>
                                    <div className="input_password_num" id="shortPass" style={{display: "none"}}> <label className="input_password_num_label">支付密码</label>
                                        <div className="input_password_num_input" id="copyInput"></div> <input type="tel" className="i-text" id="shortPassInput"/>
                                    </div>
                                    <p className="tips">1. 使用部分虚拟资产（包括京豆、京券、余额、礼品卡、领货码）或参加京豆优惠购时，为保障资产安全，请输入支付密码。<br/>2.
                                        参加京豆优惠购扣除的京豆，提交订单后，不支持退还。<br/>忘记密码？<a id="resetPassword">重置京东支付密码</a></p>
                                </div>
                            </div>

                            <div className="mod_blockPic" id="newUserTip" style={{marginTop:"-15px",display:"none"}}>
                                <img />
                            </div>
                        </div>
                        
                        <div className="buy_section" id="feeDetail">
                            <ul className="buy_chart">
                                <li className="buy_chart_item">
                                    <p className="buy_chart_item_text">商品金额</p>
                                    <p className="buy_chart_item_price">¥&nbsp;{this.state.zongjia}</p>
                                </li>
                                <li className="buy_chart_item">
                                    <p className="buy_chart_item_text">运费 <small className="buy_chart_item_tip"> （总重：0.440kg） </small> </p>
                                    <p className="buy_chart_item_price">&nbsp;¥0.00</p>
                                </li>
                                <li className="buy_chart_item">
                                    <p className="buy_chart_item_text">优惠卷</p>
                                    <p className="buy_chart_item_price">-¥&nbsp;{this.state.diyong}</p>
                                </li>
                            </ul>
                        </div>
                        <div id="payArea" className="pay_area">
                            <p className="price">总价：<strong id="pageTotalPrice" price="6999.00">¥{this.state.zongjia-this.state.diyong}.00</strong> </p> <a className="order_additional_tips type_lnk"
                                id="couBar" style={{display: "none"}}>
                                <p className="order_additional_tips_text"> <span id="freeShipFeeTip"> 购物满99元（10kg内）可免运费 </span> <span className="order_additional_tips_right"
                                        id="shipFeeChou" isdiamond="">去凑单</span> </p>
                            </a>
                            <div className="buy_qrcode" id="buy_qrcode" style={{display:"none"}}>
                                <h3>支付失败？试试微信扫码支付</h3>
                                <div className="img" id="buy_qrcode_img"></div>
                                <p>长按图片[识别二维码]付款</p>
                            </div>
                            <div id="payBtnList" >
                                <div className="mod_btns" id="btnQQPay" style={{display: "none"}}> <a className="mod_btn bg_qq">QQ钱包支付</a>
                                </div>
                                <p className="mod_btns_tips" id="qqPayPro" style={{display: "none"}}>使用QQ钱包支付，即可获得全场满59减6优惠券1张~<br/><a >查看活动规则</a></p>
                                <div className="mod_btns" id="btnWxPay" style={{display: "none"}}> <a className="mod_btn bg_wx">微信支付</a>
                                    <span id="wxpayTip" className="mod_btn bg_wx" style={{display: "none"}}></span> </div>
                                <div className="mod_btns" id="btnWxH5Pay" style={{display: "none"}}> <a className="mod_btn bg_wx">微信支付</a>
                                </div>
                                <div className="mod_btns" id="btnTenpay" style={{display: "none"}}> <a className="mod_btn bg_tenPay">财付通支付</a>
                                </div>
                                <div className="mod_btns" id="btnKuangPay" style={{display: "none"}}> <a className="mod_btn bg_jd">京东支付<small
                                            style={{display:"none"}}>(京东旗下支付平台)</small></a> </div>
                                <div className="mod_btns" id="btnCodPay" > <a className="mod_btn bg_pay">货到付款</a>
                                    <span className="mod_btn bg_pay" style={{display: "none"}}>促</span> </div>
                                <div className="mod_btns" id="btnCodPay3LAddr" style={{display: "none"}}> <a className="mod_btn bg_pay">货到付款</a>
                                    <span className="mod_btn bg_pay" style={{display: "none"}}>促</span> </div>
                                <div className="mod_btns" id="btnBaitiao" style={{display: "none"}}> <a className="mod_btn mod_btn bg_bt"><span>京东白条<small
                                                id="btnBaitiaoTitle">分期还款，超低利息</small></span></a> </div>
                                <div className="mod_btns mod_btns_wrap" id="btnDaiPay" style={{display: "none"}}> <a className
                                        className="mod_btn bg_help"><span>找人代付<small>指定一位好友帮您支付</small></span></a> <span id="daifuTip"
                                        className="mod_btn bg_help"></span> </div>
                                <div className="mod_btns mod_btns_wrap" id="btnZhongChou" style={{display: "none"}}> <a className
                                        className="mod_btn bg_chou"><span id="chouDesc">好友筹款<small>邀请多位好友帮您支付</small></span></a> <span id="zhongChouTip"
                                        className="mod_btn bg_chou"></span> </div>
                                <div className="mod_btns mod_btns_wrap" id="btnOffline" style={{display: "none"}}> <a className
                                        className="mod_btn bg_offline"><span>银行转账<small>通过银行汇款完成支付</small></span></a> <span id="offlineTip"
                                        className="mod_btn bg_offline"></span> </div>
                                <div className="mod_btns" id="btnConfirmOrder" style={{display: "none"}}> <a className="mod_btn bg_2">提交订单</a>
                                </div>
                                <div className="mod_btns" id="personalPay" style={{display: "none"}}> <a className="mod_btn bg_2">个人结算</a>
                                </div>
                                <div className="mod_btns" id="subApproval" style={{display: "none"}}> <a className="mod_btn bg_2">提交审批</a>
                                </div>
                                <div className="mod_btns" id="btnPayOnLine" > <a className="mod_btn bg_2">在线支付</a>
                                </div>
                                <p className="mod_btns_tips" id="zeroOrderTips" style={{display: "none"}}>支付金额为零，无需支付</p>
                                <div className="buy_notsupport" id="notSup" style={{display: "none"}}>
                                    <h3 className="buy_notsupport_title">此订单不支持以下支付方式</h3>
                                    <div className="buy_notsupport_list">
                                        <div id="noSupWx" style={{display: "none"}}> <i className="icon_wechat"></i>
                                            <h3>微信支付</h3>
                                            <p>到店服务商品和普通商品混合购买时，不支持使用微信支付。欲使用微信支付，请拆分两单购买。</p>
                                        </div>
                                        <div id="noSupQQPay" style={{display: "none"}}> <i className="icon"> <img src="//img11.360buyimg.com/jdphoto/s80x80_jfs/t5206/299/2576345449/6298/782e45a6/591bf008N0f5f3e19.png"/>
                                            </i>
                                            <h3>QQ钱包支付</h3>
                                            <p>到店服务商品和普通商品同时购买时，不支持使用QQ钱包支付</p>
                                        </div> <a  id="openBaitiao" style={{display: "none"}}> <i className="icon_baitiao"></i>
                                            <h3>京东白条</h3>
                                            <p>您尚未开通京东白条,立即激活</p>
                                        </a>
                                        <div id="noSupBaitiao" style={{display: "none"}}> <i className="icon_baitiao"></i>
                                            <h3>京东白条</h3>
                                            <p id="baitiaoTip">白条额度不够</p>
                                        </div> <a id="delForDiscod" style={{display: "none"}}> <i className="icon_delivery"></i>
                                            <h3>货到付款</h3>
                                            <p id="clickCodTip">部分商品不支持货到付款，立即查看</p>
                                        </a>
                                        <div id="noSupCodTip" style={{display: "none"}}> <i className="icon_delivery"></i>
                                            <h3>货到付款</h3>
                                            <p id="codNoSupTip">订单商品不支持以货到付款方式配送至您的地址</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="noAllSupCodTip" style={{display:"none"}}></div>
                            <p className="delivery_tips" style={{display: "none"}} id="WxpayNorightTip">此订单在本订阅号内无法使用微信支付，如需使用微信支付，请在“发现-购物-个人中心-待付款”订单内完成支付。
                            </p>
                        </div>
                        <div id="xzdSelDiv" style={{display:"none"}}></div>
                        <div className="buy_billbar" style={{display:"none",height:"0"}}>
                            <div className="buy_billbar_inner">
                                <div className="buy_billbar_content">
                                    <p className="buy_billbar_price">
                                        实付款：¥<em className="buy_billbar_price_int" id="appTotalprice"></em><span id="appPriceDigit"></span>
                                    </p>
                                </div>
                                <a className="buy_billbar_btn" id="appConfirm">提交订单</a>
                            </div>
                        </div>
                    </div>
                    <div id="addressList" style={{display: "none"}}></div>
                    <div id="pageAddAddress" className="address_new" style={{display: "none"}}></div>
                    <div id="pageEditAddress" className="address_new" style={{display: "none"}}></div>
                    <div className="invoice_list" id="invoices" style={{display: "none"}}></div>
                    <div className="promo_list" id="itemPromoPage" style={{display: "none"}}></div>
                    <div id="selectShip" style={{display: "none"}}></div>
                    <div id="pickList" style={{display: "none"}}></div>
                    <div id="shopList" style={{display: "none"}}></div>
                    {/* <div id="jdQuanPage"  className="promo_list"> */}
                    <div id="jdQuanPage"  className="promo_list" style={{borderBottom:"0",display:"none"}}>
                        <div className="order_tab fixed">
                            <ul className="order_tab_list" id="couponTab">
                                <li style={{background:"#fff",padding:"0",margin:"0"}} className="order_tab_item cur" id="couponLi">
                                    <span style={{borderBottom:"2px solid #e93b3d",paddingBottom:"10px",paddingLeft:"3px"}}>可用优惠券（{this.state.juanlength}）</span>
                                </li>
                                {/* <li className="order_tab_item" id="cannotcouponLi"><span className="order_tab_item_text">不可用优惠券（7）</span></li> */}
                            </ul>
                        </div>
                        <div className="order_coupons">
                            <div className="order_coupons_auto type_disabled" > <span className="order_coupons_auto_right color_red couponRule">使用规则</span>
                            </div>
                            <ul className="order_coupons_list type_radio" id="couponlistPage">
                                {(()=>{
                                    return this.state.juan.map((item,idx)=>{
                                            return(
                                                <li onClick={this.xuanze.bind(this,idx,item)} key={idx} style={{background:"#f7f7f7"}} className={this.state.juanmin==idx?"order_coupons_item selected":"order_coupons_item"} >
                                                    <div className="coupon_voucher2"> 
                                                        <a  className="coupon_voucher2_main">
                                                            <div className="coupon_voucher2_view">
                                                                <p className="coupon_voucher2_view_price"><i>¥</i><strong>{item.min}</strong></p>
                                                                <p className="coupon_voucher2_view_des"> 满{item.max}元可用 </p>
                                                            </div>
                                                            <div className="coupon_voucher2_info">
                                                                <p className="coupon_voucher2_info_text"><i className="coupon_voucher2_info_type">全品卷</i>
                                                                    可用于京东自营产品 </p>
                                                                <p className="coupon_voucher2_info_date"> 2018-11-19 - 2018-12-19 </p>
                                                            </div>
                                                        </a>
                                                        {/* <div className="coupon_voucher2_foot" style={{display:"none"}}>
                                                            <div className="coupon_voucher2_hr"></div> <a  className="coupon_voucher2_description">
                                                                <p className="coupon_voucher2_description_title"> 不可与已勾选券叠加使用 </p>
                                                            </a>
                                                        </div> */}
                                                    </div>
                                                </li>
                                            )
                                    })
                                })()}

                                
                                
                            </ul>
                            
                            <div className="order_coupons_fixbar">
                                <div className="order_coupons_fixbar_inner">
                                    <div className="order_coupons_fixbar_content">
                                        <p className="order_coupons_fixbar_content_text">已选<span id="selcouponNum">1</span>张，共抵扣<em id="couponDiscount">{this.state.diyong}.00</em>元</p>
                                    </div>
                                    <div onClick={this.shiyong.bind(this)} className="order_coupons_fixbar_btn bg_2" id="goBackBuyPage">确定</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <div id="jdCartPage" style={{display: "none"}} className="promo_list"></div>

                    <div className="mod_address_slide show" id="address_slide" style={{display:"none"}}></div>

                    <div className="promo_list" id="newPromoPage" style={{display: "none"}}></div>
                    <div id="bottomConfirmBar" className="mod_btns fixed" style={{display: "none"}}>
                        <a className="mod_btn bg_1" id="btnBottomConfirmBar">确认</a>
                    </div>

                    <div id="totalPromo3" className="mod_btns fixed" style={{display: "none"}}>
                        <a id="confirmPromot3" className="mod_btn bg_1">确认</a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.huoqu();
        window.addEventListener('scroll', this.xd,true);
    }
    //移除界面监听
    componentWillUnmount() {
        window.removeEventListener('scroll', this.xd,true);
    }
}

// export default Login
export default connect((state) => {
    return state 
}, (dispatch) => {
    return {
        // =====》这是要更改state仓库里的函数《======
        xiangqing(car){
            console.log("运行");
            dispatch({
                // type是更改的方法名字，下面是state中要更改的键和值
                type:"details",
                car:car
            })
        }
    }
})(Login);