import React, { Component } from 'react'


import { connect} from 'react-redux';
import cookie from "../../libs/cookie.js";

import { Link } from "react-router-dom";
import $ from  'jquery';
// import "../../assets/css/Dmserchmin.css";
import "../../assets/css/Dmdetails.css";


import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
        }
    }
    
    // 获取数据
    huoqu(){
        $.ajax({
            type: "post",
            data: {
                lei:this.props.lei
            },
            url: "http://localhost:3001/list/huoqu",
            async: true,
            success: (data)=>{
              this.setState({
                  zong:data,
                  zon:data.slice(0,this.state.ge*10)
              })
            }
        });
    }
    // 吸顶效果
    xd=()=>{
            
                if (document.body.scrollTop>45){
                    this.setState({
                        min:"search_head xiding"
                    })
                }
                if (document.body.scrollTop<=10){
                    this.setState({
                        min:"search_head"
                    })
                }
                // console.log(document.body.scrollTop,document.body.scrollHeight,window.outerHeight,window,document.body.height,window.innerheight,document.body.outheight)
                if (document.body.scrollTop>=document.body.scrollHeight-window.outerHeight) {
                    console.log("底部");
                    this.setState({
                        ge:this.state.ge+1
                    })
                    this.setState({
                        zon:this.state.zong.slice(0,this.state.ge*10)
                    })

                }
        
    }
    //加入购物车
    jiaru(e) {
        // 1、判断是否登入，获取cookie
        var yonghuming = cookie.getCookie("yonghuming") || [];
        if (yonghuming.length == 0) {
          this.props.history.push("login");
          return false;
        }
        var lei=this.props.lei;
        if(lei.length==0){
            lei="shouji"
        }
  
        //如果已经登入，则添加购物车
        if (yonghuming.length > 0) {
        
          $.ajax({
            type: "post",
            data: {
              yhm: yonghuming,
              lei,
              ID: this.props.car.ID,
              price:this.props.car.price,
              name:this.props.car.name,
              imgurl:this.props.car.imgurl
            },
            url: "http://localhost:3001/car/car",
            async: false,
            success: data => {
                console.log(data);
            }
          });
          
        }
        // console.log(e.target.className);
        if(e.target.className == "txt goumai" ||e.target.className == "btn btn_buy goumai"){
            this.props.history.push("cart");
            document.body.scrollTop=0;
        }
        
      }
      //跳转购物车
      cartz(){
          this.props.history.push("cart");
      }
                            
                            



    render() {
        return (
            <div>
                <a  href="javascript:history.go(-1)"
                    style={{background:"#ccc",
                            position:"fixed",
                            top:"0",
                            left:"0",
                            zIndex:"100",
                            borderRadius:"3px",
                            opacity:"0.7"}}>
                    <div style={{margin:"10px 10px",
                            width:"20px",
                            height:"20px",
                            display:"block",
                            background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTF1famFhal1fal1fal5ga2FhcF1falIa7fwAAAAHdFJOUwDxN1zamie3ypN1AAAAP0lEQVQoz2NgGAjA5GiAKahYLoCpUByLoGJ5uQEWhcXDRiGDOxaFDOXlAQzEqcRqJlbbh4VSAeLSEvZURyUAAGHYICnlu7kGAAAAAElFTkSuQmCC) no-repeat",
                            backgroundSize:"100% 100%",
                            }}>
                    </div>
                </a>
                <div id="part_main">

                    <div className="wx_bar wx_bar_in" style={{display:"none"}} id="topBack">
                        <div className="wx_bar_back"><a id="backUrl">京东购物</a></div>
                        <div className="wx_bar_tit"></div>
                    </div>
                    <div className="mod_slider mod_slider_s1 " id="loopImgDiv" style={{height:"320px",width:"320px"}}>
                        <div className="inner">
                            <ul className="pic_list" data-slide-ul="firstUl" id="loopImgUl" style={{left:"0px",width:"1600px",height:"320px"}}>
                                <li id="firstImgLi" data-ul-child="child" style={{height:"320px",width:"320px",transition:"all 300ms ease 0s",transform:"translate3d(-320px, 0px, 0px)",zIndex:"10"}}><img
                                        id="firstImg" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg!q80.dpg.webp" /></li>
                                <li data-ul-child="child" style={{width:"320px",height:"320px",transition:"all 300ms ease 0s",transform:"translate3d(-320px, 0px, 0px)",zIndex:"10"}}>
                                    <img  src={this.props.car.imgurl}/>
                                </li>
                                {/* <li data-ul-child="child" style={{width:"320px",height:"320px",transition:"all 300ms ease 0s",transform:"translate3d(-320px, 0px, 0px)",zIndex:"10"}}><img
                                        src="//m.360buyimg.com/mobilecms/s720x720_jfs/t10639/290/1648891820/31320/2f39ac90/59e42830Ndf5e6577.jpg!q70.dpg.webp" /></li>
                                <li data-ul-child="child" style={{width:"320px",height:"320px",transition:"all 300ms ease 0s",transform:"translate3d(-320px, 0px, 0px)",zIndex:"10"}}><img
                                        src="//img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg"
                                        back_src="//m.360buyimg.com/mobilecms/s720x720_jfs/t9958/8/1638437389/20043/372722d2/59e42830N1afe7736.jpg!q70.dpg.webp" /></li>
                                <li data-ul-child="child" style={{width:"320px",height:"320px",transition:"all 300ms ease 0s",transform:"translate3d(-320px, 0px, 0px)",zIndex:"10"}}><img
                                        src="//img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg!q70.dpg"
                                        back_src="//m.360buyimg.com/mobilecms/s720x720_jfs/t9787/309/1633930906/65379/8fb80cc0/59e42831N83d658b3.jpg!q70.dpg.webp" /></li> */}
                            </ul>
                            <div className="tittup" id="tittup"><span className="inner"><em className="arrow"></em><span className="txt">滑动查看详情</span></span></div>
                            <a id="videoUrl" followfirstimg="1" className="lnk_video" style={{display: "none"}}>视频</a><img className="service_tag"
                                id="imgLeftDown" followfirstimg="1" src="//img13.360buyimg.com/jdphoto/s200x200_jfs/t26002/353/273141236/18396/81c499fe/5b6a8629N4648cf36.png!q70.webp"
                                style={{display: "none"}} />
                        </div>
                        <div className="bar_wrap">
                            <ul className="bar" id="loopImgBar">
                                <li no="1" className=""></li>
                                <li no="2" className="cur"></li>
                                <li no="3" className=""></li>
                                <li no="4" className=""></li>
                                <li no="5" className=""></li>
                            </ul>
                        </div>

                    </div>

                    <div className="color_switch_area " id="colorSwitch">
                        <ul id="colorList">

                        </ul>
                        <div className="expand_area">
                            <div className="button">
                                <span className="border left"></span>
                                <span id="colorSwitchCount"></span>色可选<i></i>
                                <span className="border right"></span>
                            </div>
                        </div>
                    </div>

                    <div className="buy_area" id="buyArea">
                        <div className="fn_wrap">
                            <h1 className="fn fn_goods_name" id="favWrap">
                                <div className="fn_text_wrap" id="itemName"><i className="mod_tag mod_tag_big"><img src="//img14.360buyimg.com/jdphoto/jfs/t16837/175/2336746342/1085/d4b6cf2c/5af16f73N5f0ce6d0.png" /></i>{this.props.car.name}</div>
                                <a className="J_ping favour heart"  id="fav" report-eventid="MProductdetail_AddtoFollowed"
                                    report-eventparam="5089235" report-pageparam="5089235">关注</a>
                            </h1>



                            <div className="J_ping desc right_shorter" id="itemDesc">【Apple产品11月狂欢！】5.8英寸超视网膜显示屏，面容ID，无线充电，后置1200万像素双摄像头<a
                                    target="_self">iPhone XR XS系列新品限时12期免息</a></div>

                        </div>
                        <div id="priceWrap">
                            <div className="price_wrap" id="priceBlock">
                                <span className="hide" id="priceTitle"></span>
                                <span className="price large_size" id="priceSale">¥<em>{this.props.car.price}</em>.00</span>
                                <span className="old_price" id="priceLineThrough" style={{display:"none"}}></span>

                                <div className="mod_sign_tip bor" id="priceDis" style={{display:"none"}}></div>
                                <span className="group" id="priceGroupStyle" style={{display:"none"}}></span>
                                <span className="J_ping col_right" id="cheaperNotice" report-pageparam="5089235" report-eventid="MProductdetail_PriceNotice"
                                    report-eventlevel="5">
                                    <span className="cheaper_info">降价提醒</span>
                                </span>
                                <span className="col_right hide" id="headEval">
                                    <span className="sale_num">评价：<b id="evalNo1">107万+</b>条</span>
                                </span>
                            </div>

                        </div>
                        <div id="favShopGuideContainer">
                            <div className="fav_shop_bar" id="favShopGuide" style={{display:"none"}}><i></i>关注<em id="shopName">京东Apple产品专营店</em>，立享粉丝价，<span
                                    id="shopFav1">立即关注</span></div>
                        </div>


                    </div>

                    <div className="detail_gap"></div>

                    

                    <div className="detail_extra">
                        <div className="detail_row detail_row_cmt" id="summaryEnter" empty="">
                            <h3 className="tit" id="summaryTitle">评价</h3>
                            <i className="icon_promote" id="summaryEnterIco"></i>
                            <p className="good" id="evalRateP">好评 <strong id="evalRate">99%</strong></p>
                            <p className="count">共 <span className="num" id="evalNo2">107万+</span> 条</p>
                        </div>
                        <div className="detail_row detail_cmt" id="mainCmt">

                            <div className="cmt_list_wrap">
                                <ul className="cmt_list" id="evalDet_main">
                                    <li>
                                        <div className="cmt_user">
                                            <span className="user">Ang小哥</span>
                                            <span className="tip">(PLUS会员)</span>
                                            <span className="credit"><span style={{width:"100%"}}></span></span>
                                            <span className="date">2017-12-14</span>
                                        </div>
                                        <div className="cmt_att"><span className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t15634/178/471330362/380021/93e54fff/5a321ee2Neec7271d.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t15634/178/471330362/380021/93e54fff/5a321ee2Neec7271d.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t16549/52/400690306/291231/62838916/5a321ec3Nafa4255a.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t16549/52/400690306/291231/62838916/5a321ec3Nafa4255a.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t14074/134/2117947950/258457/acfb1d57/5a321ee3Ne6ffb71e.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t14074/134/2117947950/258457/acfb1d57/5a321ee3Ne6ffb71e.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t12859/215/2092556272/217225/5275eb48/5a321ee3N9f917b3e.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t12859/215/2092556272/217225/5275eb48/5a321ee3N9f917b3e.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t13810/104/2084002690/549251/6b3f6fd4/5a321ee4Nc5d739cb.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t13810/104/2084002690/549251/6b3f6fd4/5a321ee4Nc5d739cb.jpg!q70.dpg" /></span></div>
                                        <div className="cmt_sku">
                                            <span>颜色：银色</span> <span>型号：公开版</span>
                                            <div className="cmt_sku_tool">
                                                <div className="favor">
                                                    <i className="heart"></i>
                                                    <span>494</span>
                                                    <i className="like">+1</i>
                                                </div>
                                                <a productid="5089235" className="reply reply_btn"><span className="num">216</span></a>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="cmt_user">
                                            <span className="user">d***4</span>
                                            <span className="tip"></span>
                                            <span className="credit"><span style={{width:"100%"}}></span></span>
                                            <span className="date">2017-12-27</span>
                                        </div>
                                        <div className="cmt_cnt">第一台水果手机，老婆用着不错，我的下一台手机，也许会用水果手机了，但无双卡有点不方便!</div>
                                        <div className="cmt_att"><span className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t16348/114/864916290/93295/8aec9845/5a435dbdNf27ec4ab.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t16348/114/864916290/93295/8aec9845/5a435dbdNf27ec4ab.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t16456/150/909260363/52133/4069b419/5a435dbeNd3a21e28.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t16456/150/909260363/52133/4069b419/5a435dbeNd3a21e28.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t14503/344/1059042957/105612/6d4a1362/5a435db1N94323e1f.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t14503/344/1059042957/105612/6d4a1362/5a435db1N94323e1f.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t16267/275/914794581/98980/21d3e286/5a435dbaN80c8b846.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t16267/275/914794581/98980/21d3e286/5a435dbaN80c8b846.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t15463/345/1055465488/75404/d07f8e87/5a435dc2N89dd8f04.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t15463/345/1055465488/75404/d07f8e87/5a435dc2N89dd8f04.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t16351/302/883963747/50280/7ef88cd6/5a435dc2N777d0ead.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t16351/302/883963747/50280/7ef88cd6/5a435dc2N777d0ead.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t13483/140/2548234778/54784/886ccf9b/5a435dc3N826b1afe.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t13483/140/2548234778/54784/886ccf9b/5a435dc3N826b1afe.jpg!q70.dpg" /></span><span
                                                className="img"><img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t16558/327/846140647/97620/956548c7/5a435dc5N26ecc5e4.jpg!cc_100x100!q70.dpg"
                                                    prview="//img30.360buyimg.com/shaidan/jfs/t16558/327/846140647/97620/956548c7/5a435dc5N26ecc5e4.jpg!q70.dpg" /></span></div>
                                        <div className="cmt_sku">
                                            <span>颜色：银色</span> <span>型号：公开版</span>
                                            <div className="cmt_sku_tool">
                                                <div className="favor">
                                                    <i className="heart"></i>
                                                    <span>127</span>
                                                    <i className="like">+1</i>
                                                </div>
                                                <a productid="5089235" className="reply reply_btn"><span className="num">76</span></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div id="summaryEnter3" className="cmt_more"><a className="cmt_more_lnk">查看全部评价<i className="icon_arrow"></i></a></div>
                            </div>
                        </div>
                        <div className="detail_faqbox" id="answerArea">
                            <div className="detail_faqbox_head">
                                <div className="detail_faqbox_head_tit">问答专区</div>
                                <div className="detail_faqbox_head_num">查看全部问答</div>
                                <div className="detail_faqbox_head_empty" style={{display: "none"}}>暂无提问信息，<span>去提问</span></div>
                            </div>
                            <ul className="detail_faqbox_list">
                                <li>
                                    <p className="detail_faqbox_list_desc">22点这波加码抢购的终于抢到了，怎么订单详情又显示缺货需要采购了？耍猴呢？</p><span className="detail_faqbox_list_num">共13个回答</span>
                                </li>
                                <li>
                                    <p className="detail_faqbox_list_desc">这个支持分期吗，可以的话有没有利息呢！</p><span className="detail_faqbox_list_num">共7个回答</span>
                                </li>
                            </ul>
                        </div>
                        <div className="detail_gap"></div>
                        <div className="J_ping wiki" id="wiki" style={{display: "none"}}>
                            <a className="wiki_content">
                                <p></p><span></span>
                            </a>
                            <div className="detail_gap"></div>
                        </div>
                        <div className="detail_cmd" id="guessArea">
                            <div className="detail_cmd_tab" id="guessRecommend">
                                <a className="tab_item" tag="accessory" id="accessoryTab">配件推荐</a>
                                <a className="tab_item cur" tag="guess" id="guessTab">猜你喜欢</a>
                            </div>
                            
                            <div className="bd" id="accessoryWrap">
                                <div className="inner" id="accessoryItem" style={{transform:"translateX(0%)",transition:"all 0ms ease 0s"}}>
                                    <div className="slider_page cols_3">
                                        <ul className="grid">
                                            <li className="grid_item"><a >
                                                    <div className="img_wrap"><img src="//img13.360buyimg.com/n6/jfs/t27214/279/2015683982/565240/1e9084d8/5bf43216N832836ad.jpg!q70.dpg" /></div>
                                                </a>
                                                <h1 className="name">图拉斯 苹果X/XS/XR钢化膜iPhone XS Max全屏全覆盖6D抗蓝光玻璃手机贴膜前后背膜
                                                    5.8英寸【X/XS通用】高清款★真6D全屏隐形膜</h1>
                                                <div className="buy_wrap"><span className="price" id="price_16463451903">¥<span
                                                            className="int">38</span>.00</span><span className="buy" sku="16463451903"
                                                        id="accessoryCart_00"></span></div>
                                            </li>
                                            <li className="grid_item"><a >
                                                    <div className="img_wrap"><img src="//img13.360buyimg.com/n6/jfs/t30361/103/523695630/362397/f49e6bbe/5bf604b2Ne4b9017f.jpg!q70.dpg" /></div>
                                                </a>
                                                <h1 className="name">亿色(ESR)苹果X/XS钢化膜 iphoneXS钢化膜【真6D全玻璃】高清防爆非全覆盖前膜-5.8英寸XS/X通用【送神器】</h1>
                                                <div className="buy_wrap"><span className="price" id="price_5416604">¥<span className="int">25</span>.90</span><span
                                                        className="buy" sku="5416604" id="accessoryCart_01"></span></div>
                                            </li>
                                            <li className="grid_item"><a>
                                                    <div className="img_wrap"><img src="//img13.360buyimg.com/n6/jfs/t25003/135/2340089359/353499/e539129e/5be3d8ccN68e1e875.jpg!q70.dpg" /></div>
                                                </a>
                                                <h1 className="name">亿色（ESR） 苹果x/xs手机壳iphonex/xs保护套 防摔全包透明玻璃镜面潮牌 抖音同款男女款 琉璃-剔透白</h1>
                                                <div className="buy_wrap"><span className="price" id="price_6683369">¥<span className="int">49</span>.90</span><span
                                                        className="buy" sku="6683369" id="accessoryCart_10"></span></div>
                                            </li>
                                            

                                        </ul>
                                    </div>
                                    <div className="slider_page cols_3">
                                        <ul className="grid">
                                            <li className="grid_item"><a >
                                                    <div className="img_wrap"><img back_src="//img13.360buyimg.com/n6/jfs/t1/1989/18/5471/137899/5b9fcaf0E4ceecff3/43cdf70620f4e6e4.jpg!q70.dpg" /></div>
                                                </a>
                                                <h1 className="name">kpay 苹果数据线弯头iphoneX/8/7plus充电线快充数据线游戏专用手游数据线 中国红 1.2m</h1>
                                                <div className="buy_wrap"><span className="price" id="price_33183063203">¥<span
                                                            className="int">32</span>.90</span><span className="buy" sku="33183063203"
                                                        id="accessoryCart_30"></span></div>
                                            </li>
                                            <li className="grid_item"><a >
                                                    <div className="img_wrap"><img back_src="//img13.360buyimg.com/n6/jfs/t17638/331/2169534786/274953/bf0b3697/5aea9fdeN7518e264.jpg!q70.dpg" /></div>
                                                </a>
                                                <h1 className="name">倍思 苹果/Type-c/安卓数据线三合一快充手机充电器线 iPhoneX/XS Max/XR/8plus 小米华为p20电源线
                                                    1.2米 红</h1>
                                                <div className="buy_wrap"><span className="price" id="price_4539922">¥<span className="int">22</span>.90</span><span
                                                        className="buy" sku="4539922" id="accessoryCart_31"></span></div>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="slider_page cols_3">
                                        <ul className="grid">
                                            <li className="grid_item"><a>
                                                    <div className="img_wrap"><img back_src="//img13.360buyimg.com/n6/jfs/t19207/322/2681484784/481663/b4186806/5b03d6f6N259f4663.jpg!q70.dpg" /></div>
                                                </a>
                                                <h1 className="name">绿联 苹果无线充电器套装iphoneX/R/XsMax手机7.5W快充小米10W双模式送QC充电头
                                                    【苹果专用☆双模快充☆送充电头】7.5w快充</h1>
                                                <div className="buy_wrap"><span className="price" id="price_25539002541">¥<span
                                                            className="int">128</span>.00</span><span className="buy" sku="25539002541"
                                                     id="accessoryCart_60"></span></div>
                                            </li>
                                            <li className="grid_item"><a>
                                                    <div className="img_wrap"><img back_src="//img13.360buyimg.com/n6/jfs/t27517/365/346783323/44383/aa5759e8/5b8f84cbNdec5d0e2.jpg!q70.dpg" /></div>
                                                </a>
                                                <h1 className="name">【京东自营】Mophie 无线充电器10W快充版 适用于iPhone X/XS/XS Max/XR iPhone 8/8plus</h1>
                                                <div className="buy_wrap"><span className="price" id="price_100000164292">¥<span
                                                            className="int">458</span>.00</span><span className="buy" 
                                                     id="accessoryCart_61"></span></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bar_wrap">
                                    <ul className="bar" id="accessoryItemTab">
                                        <li no="1" className="cur"></li>
                                        <li no="2" className=""></li>
                                        <li no="3" className=""></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hot_more"><a className="hot_more_lnk">查看更多配件<i className="icon_arrow"></i></a></div>
                            <div className="detail_gap"></div>
                        </div>
                        {/* <div id="guessBd" hasdata="1">

                            <div className="bd" id="guessWrap">
                                <div className="inner" id="guessItem" style={{transform:"translateX(0%)",transition:"all 0ms ease 0s"}}>
                                    <div className="slider_page">
                                        <ul className="row">
                                            <li>
                                                <div jumpurl="//item.m.jd.com/product/8758856.html?ptag=37287.1.1&amp;exp=90200700014090201&amp;rec=rec_common_exp&amp;flow=20&amp;sid=89deaf0a-c130-46a8-9c4a-1af03d08b457&amp;source=1&amp;pps=reclike.FO4O605%3AFOFO4O85A6483O13O6%3ACOF0416O843O1FO8O7FFF502180FFOFO0065167B4B8B18418F"
                                                    repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC84NzU4ODU2Lmh0bWw&amp;log=mxTCXn7ADe4xQ4Q-zvDsbHyjoD9qvwyRa-mEKXGqoIRZQT_JF8bfwHijvA3nsJCdu3enbfTfZbfiUsQAtIfwM09ieLoX4S5O2UXCTURcfSkhKPhomdAoNqIfquDHrvz_xCOwMy94pl4P7jJ5WEL4P4wozvW_G6QibRqG5rS0q920nU-nUauk4TmYrjLW4RhJqNcqlvmtmAjV5lmMRxjJQKTWxUaSDH-cgd4V8LKo1wyLO8A1k8KHwyjAWI8h8i3GDHuVojvHyp-CwydM01U2k2bVmdWX-ONPIDT0zUJTAeR4934F_gHku02BX76sqiLrYcIj3KW6nR9FD_KX9wTL1n0P_YGtjMl9DtmoUt7sWMOh5hTsiVmymjoWhb8XKwSKyDb-nSOF1HntFZk5Lgizf0pNYZaHjU3Nb5nxReCMM55gioL7Lpb2XejAwRyu3a3gvi_jg8T6AKcRc13xni76h-2Tv1fFgpU4mUIrvY5zQbs&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d5089235$csku%3d8758856$adposid%3d1859$adsid%3d89deaf0a-c130-46a8-9c4a-1af03d08b457"
                                                    source="1" id="tjwguess_0" className="row_item guess_click ad_item" onclick="return !window.holdAction;"
                                                    eventparam="1_0_8758856_90200700014090201_20_31884c8da44165fd507bab547e2b52ef_1_-100_7a838e740c503b41962be672ae67876c960093c0_-100">
                                                    <div className="img_wrap"><img src="//img14.360buyimg.com/mobilecms/s270x270_jfs/t7567/282/3463144991/282911/8bd82492/5b7bbdebN99d2db34.jpg!q70.dpg" /></div>
                                                    <div className="name">华为 HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 珠光贝母色 全网通移动联通电信4G手机
                                                        双卡双待</div>
                                                    <div className="buy_wrap"><span className="price" id="guessPrice_8758856">¥<span
                                                                className="int">4988</span>.00</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div jumpurl="//item.m.jd.com/product/100000287133.html?ptag=37287.1.1&amp;exp=90200700014090201&amp;rec=rec_common_exp&amp;flow=20&amp;sid=89deaf0a-c130-46a8-9c4a-1af03d08b457&amp;source=0&amp;pps=reclike.FO4O605%3AFOFO00487B499D3O13O6%3ACOF0416O443O2FO8O7FFF502180FFOFO0065167B4B8B18418F"
                                                    repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902007$src=rec$action=1$reqsig=7a838e740c503b41962be672ae67876c960093c0$enb=1$sku=5089235$p=902007$pin=$uuid=15426940148211105294$csku=100000287133$index=0$st=0$adcli=$expid=90200700014090201$mexpid=$im=$rid=2570632400262194336$ver=1$sig=b9304185fffda6cfece5e4e01e82ee6451ebefd3"
                                                    source="0" id="tjwguess_1" className="row_item guess_click " onclick="return !window.holdAction;"
                                                    eventparam="1_1_100000287133_90200700014090201_20_31884c8da44165fd507bab547e2b52ef_0_-100_7a838e740c503b41962be672ae67876c960093c0_-100">
                                                    <div className="img_wrap"><img src="//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/1468/11/3377/138213/5b997bf3Eda5b24a4/0ace3ed19582dbe6.jpg!q70.dpg" /></div>
                                                    <div className="name">Apple iPhone XS (A2100) 64GB 金色 移动联通电信4G手机</div>
                                                    <div className="buy_wrap"><span className="price" id="guessPrice_100000287133">¥<span
                                                                className="int">8699</span>.00</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div jumpurl="//item.m.jd.com/product/10485140959.html?ptag=37287.1.1&amp;exp=90200700014090201&amp;rec=rec_common_exp&amp;flow=20&amp;sid=89deaf0a-c130-46a8-9c4a-1af03d08b457&amp;source=1&amp;pps=reclike.FO4O605%3AFOFO0070F68DDF3O13O6%3ACOF0416O84O3FO8O7FFF502180FFOFO0065167B4B8B18418F"
                                                    repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8xMDQ4NTE0MDk1OS5odG1s&amp;log=mxTCXn7ADe4xQ4Q-zvDsbHyjoD9qvwyRa-mEKXGqoIRsLMkKJJRW5WXG0fdA7MUvxAnT4nAzqGlmGo0XuY0KxC2r9aJX4GjWtg0KnRRZ8bW9qOdkf-DBLI11JTtpsxFtHxlKOl_iEjdkCN0wWYm0ZeozVZi2D3RKOnFImVK-zos8lNIoxkVrO7dn73VcxHSiZDhTuFCfAR5SSZx59u48prCjSFEBk8E4TovOnqX8M9nXxy5d-GWt9SgnPKEiRqXHrjkwlVPir5MKXksk6qlDaJIuEKsQKyc-19VkTnT4yqP0QPmqVrnuQP0pgN0noDnREXls_B6qarWw02qz3JesIoF-G37WUXD_oVkbKE2AuvxZBXGkApXZji9ckcLAcXLbM88phHylE3g6lElxAUS0mbz2Rm4XJzkzTc5-32MF0elh5-FPlggmbK8byt3NZkqEaEib85nFSqqmD_3hYg5mNK8DrBDDjoCUTBiBcUWeTho&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d5089235$csku%3d10485140959$adposid%3d1859$adsid%3d89deaf0a-c130-46a8-9c4a-1af03d08b457"
                                                    source="1" id="tjwguess_2" className="row_item guess_click ad_item" onclick="return !window.holdAction;"
                                                    eventparam="1_2_10485140959_90200700014090201_20_31884c8da44165fd507bab547e2b52ef_1_-100_7a838e740c503b41962be672ae67876c960093c0_-100">
                                                    <div className="img_wrap"><img src="//img14.360buyimg.com/mobilecms/s270x270_jfs/t30835/151/456364422/250788/bd63a3d0/5bf4e9eeN339f99a4.jpg!q70.dpg" /></div>
                                                    <div className="name">8848 钛金手机 M3尊享版【秒杀直降5000元 限量抢】 智能商务手机 全网通4G 双卡双待</div>
                                                    <div className="buy_wrap"><span className="price" id="guessPrice_10485140959">¥<span
                                                                className="int">9999</span>.00</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div jumpurl="//item.m.jd.com/product/100000287145.html?ptag=37287.1.1&amp;exp=90200700014090201&amp;rec=rec_common_exp&amp;flow=20&amp;sid=89deaf0a-c130-46a8-9c4a-1af03d08b457&amp;source=0&amp;pps=reclike.FO4O605%3AFOFO00487B49A93O13O6%3ACOF0416O443O4FO8O7FFF502180FFOFO0065167B4B8B18418F"
                                                    repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902007$src=rec$action=1$reqsig=7a838e740c503b41962be672ae67876c960093c0$enb=1$sku=5089235$p=902007$pin=$uuid=15426940148211105294$csku=100000287145$index=1$st=0$adcli=$expid=90200700014090201$mexpid=$im=$rid=2570632400262194336$ver=1$sig=e001a1331a43ff959b7453a5d5af7bfd950cd900"
                                                    source="0" id="tjwguess_3" className="row_item guess_click " onclick="return !window.holdAction;"
                                                    eventparam="1_3_100000287145_90200700014090201_20_31884c8da44165fd507bab547e2b52ef_0_-100_7a838e740c503b41962be672ae67876c960093c0_-100">
                                                    <div className="img_wrap"><img src="//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/4460/2/3458/153299/5b997bf0Ed101778b/2361563781a99acb.jpg!q70.dpg" /></div>
                                                    <div className="name">Apple iPhone XS Max (A2104) 64GB 金色 移动联通电信4G手机 双卡双待</div>
                                                    <div className="buy_wrap"><span className="price" id="guessPrice_100000287145">¥<span
                                                                className="int">9599</span>.00</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div jumpurl="//item.m.jd.com/product/100000822981.html?ptag=37287.1.1&amp;exp=90200700014090201&amp;rec=rec_common_exp&amp;flow=20&amp;sid=89deaf0a-c130-46a8-9c4a-1af03d08b457&amp;source=1&amp;pps=reclike.FO4O605%3AFOFO00488376C53O13O6%3ACOF0416O843O5FO8O7FFF502180FFOFO0065167B4B8B18418F"
                                                    repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8xMDAwMDA4MjI5ODEuaHRtbA&amp;log=mxTCXn7ADe4xQ4Q-zvDsbHyjoD9qvwyRa-mEKXGqoIT5jsYF5weZyCO062YZ0u4iU-7CtfV4vADIMXKeoQa8A0IeUWd2Cn2EMCtojjmU9Oud5xDgPG9wPSEY6UzB76k_t6M-4cBtyfX8A4tZxJS1jqPHnqtkwZnS8d0EO-KhJa0OC6_VLBaEQlbhEWFTqJaaIAFRE28TXTTI-Js6Wuq4YSc6s4Yr5oG1cOrWrPgY0OLin3jYSv8SmEQDRBHDTA4lJ1RZ_ZMk8IU9EXguYGH44zflZ7z1bDa6-_otMnGmWR_qQp1yhrSvyWtoW6DBafA7N2Dvh9nL8fT7GyE8yjIG0gBOntl0vlthWlFsnzAbhG9X0JVfbrvEwlHsRALv3jvvHX_1cKX4vcaPQ4zP99HfvVD6pLwexWcVgDwIlVHIkusUzE5wAUrexzMz8azQiL5idLZKTAdP_Lq8F7-X29ZUP46vFueCl8ZkeeUgl28BfzVzLR47QaOiALGsxQUQmTMC&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d5089235$csku%3d100000822981$adposid%3d1859$adsid%3d89deaf0a-c130-46a8-9c4a-1af03d08b457"
                                                    source="1" id="tjwguess_4" className="row_item guess_click ad_item" onclick="return !window.holdAction;"
                                                    eventparam="1_4_100000822981_90200700014090201_20_31884c8da44165fd507bab547e2b52ef_1_-100_7a838e740c503b41962be672ae67876c960093c0_-100">
                                                    <div className="img_wrap"><img src="//img14.360buyimg.com/mobilecms/s270x270_jfs/t25954/134/1930444050/488286/31587d0d/5bbf1fc9N3ced3749.jpg!q70.dpg" /></div>
                                                    <div className="name">华为 HUAWEI Mate 20
                                                        麒麟980AI智能芯片全面屏超微距影像超大广角徕卡三摄6GB+128GB亮黑色全网通版双4G手机</div>
                                                    <div className="buy_wrap"><span className="price" id="guessPrice_100000822981">¥<span
                                                                className="int">4499</span>.00</span></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div jumpurl="//item.m.jd.com/product/100000177756.html?ptag=37287.1.1&amp;exp=90200700014090201&amp;rec=rec_common_exp&amp;flow=20&amp;sid=89deaf0a-c130-46a8-9c4a-1af03d08b457&amp;source=0&amp;pps=reclike.FO4O605%3AFOFO0048799E5C3O13O6%3ACOF0416O443O6FO8O7FFF502180FFOFO0065167B4B8B18418F"
                                                    repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.902007$src=rec$action=1$reqsig=7a838e740c503b41962be672ae67876c960093c0$enb=1$sku=5089235$p=902007$pin=$uuid=15426940148211105294$csku=100000177756$index=2$st=0$adcli=$expid=90200700014090201$mexpid=$im=$rid=2570632400262194336$ver=1$sig=df12e193a1e7d206ff5fa856ab408fb84865d112"
                                                    source="0" id="tjwguess_5" className="row_item guess_click " onclick="return !window.holdAction;"
                                                    eventparam="1_5_100000177756_90200700014090201_20_31884c8da44165fd507bab547e2b52ef_0_-100_7a838e740c503b41962be672ae67876c960093c0_-100">
                                                    <div className="img_wrap"><img src="//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/5479/8/3546/70556/5b997c0cE40f64978/6540f1c2a6090257.jpg!q70.dpg" /></div>
                                                    <div className="name">Apple iPhone XR (A2108) 64GB 白色 移动联通电信4G手机 双卡双待</div>
                                                    <div className="buy_wrap"><span className="price" id="guessPrice_100000177756">¥<span
                                                                className="int">6499</span>.00</span></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>




                                </div>
                                <div className="bar_wrap">
                                    <ul className="bar" id="guessItemTab">
                                        <li no="1" className="cur"></li>
                                        <li no="2" className=""></li>
                                        <li no="3" className=""></li>
                                        <li no="4" className=""></li>
                                        <li no="5" className=""></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                        <div className="detail_gap"></div>
                    </div>
                    <div id="appdlCon"></div>
                    </div>

                    <div id="detailBaseLine"></div>
                    <div className="mod_fix_wrap">
                    <div className="mod_fix" id="detailTab">
                        <div className="mod_tab">
                            <div className="J_ping item cur" no="1" report-eventid="MProductdetail_DetailProductIntroduction"
                                report-pageparam="5089235">商品介绍</div>
                            <div className="J_ping item" no="2" report-eventid="MProductdetail_DetailParameter" report-pageparam="5089235">规格参数</div>
                            <div className="J_ping item" no="3" report-eventid="MProductdetail_DetailCustomerService" report-pageparam="5089235">售后保障</div>
                        </div>
                    </div>
                    </div>

                    <div className="detail_list" id="detailCont" style={{transform:"translate3d(0px, 0px, 0px)",transition:"all 0.3s ease 0s"}}>

                        <div className="detail_item p_desc" id="detail1" style={{position:"relative",padding:"0px"}}>
                             
                            {/* <div className="jdvideo_div" id="videoMain" src="https://jdvodoss.jcloudcache.com/vodtransgzp1251412368/7447398156670659815/v.f20.mp4?dockingId=bbf23bd4-3bed-4cd0-a0b7-b4683bcf3c6c&amp;storageSource=3"
                                style={{marginBottom:"10px",position:"relative !important"}}><img className="poster" src="http://jdvodimg.jcloudcache.com/vodtransgzp1251412368/7447398156670659815/1529230142_1353668871.100_0.jpg"/><video
                                    controls="controls" style={{display: "none"}} preload="none" webkit-playsinline="true" playsinline="">暂时不支持播放该视频</video>
                                <div className="video_loading" style={{display:"none"}}><i></i></div>
                                <div className="play_btn" ></div>
                                <div className="loading_info" style={{display: "none"}}><img src="//img12.360buyimg.com/jdphoto/s300x225_jfs/t7750/306/693226527/33971/c53483cc/5996497fNe2c48721.png!q70.webp"/></div><img
                                    src="//img12.360buyimg.com/jdphoto/s28x20_jfs/t9289/125/380510113/18261/1f420488/59a6af86Ne5ef1841.png!q70.webp"
                                    className="video_logo" />
                            </div> */}
                            
                            <div className="world_title" id="globalComm" style={{display:"none"}}>
                                <span className="text">商品详情</span>
                            </div>
                            <div className="refer_area" style={{display:"none"}} id="sizeArea"></div>
                            <div style={{width:"320px",height:"11139px"}}>
                                <div id="commDesc" className="detail_pc" hasdata="1" style={{transformOrigin:"0px 0px 0px",transform:"scale(0.426667)",fontSize:"33px",lineHeight:"2"}}>
                                    <img
                                        src="//img12.360buyimg.com/imgzone/jfs/t21748/356/1446859035/83675/f406f637/5b29ccf6N9870ba8f.jpg!q70.dpg"
                                        alt="" width="640" height="161" style={{display:"block",margin:"0 auto"}}
                                        border="0" loaded="6" /> 
                                    <table id="__01" width="750" height="1272" border="0" align="center" >
                                        <tbody>
                                            <tr>
                                                <td> <img src="//img12.360buyimg.com/imgzone/jfs/t14764/218/2456158726/53591/401a19b1/5a9cfa70N47f9499b.jpg!q70.dpg"
                                                        alt="" width="750" height="249" /></td>
                                            </tr>
                                            <tr>
                                                <td> <img src="//img14.360buyimg.com/imgzone/jfs/t18493/37/635247604/42841/b751e11f/5a9cfa70Nd0637367.jpg!q70.dpg"
                                                        width="750" height="341" /></td>
                                            </tr>
                                            <tr>
                                                <td> <img src="//img10.360buyimg.com/imgzone/jfs/t19468/112/760191283/86319/a5a4e631/5aa36123N750f56a3.jpg!q70.dpg"
                                                        alt="" width="750" height="405" /></td>
                                            </tr>
                                            <tr>
                                                <td> <img src="//img12.360buyimg.com/imgzone/jfs/t15079/323/2344529912/61849/ce9798d9/5a9cfa70N43f7357c.jpg!q70.dpg"
                                                        alt="" width="750" height="277" /></td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                    
                                    <div style={{textAlign:"center"}}> <img src="//img30.360buyimg.com/jgsq-productsoa/jfs/t9724/59/1430591780/2138721/c72f6394/59e0726aN1edf23c4.jpg!q70.dpg"
                                            alt="" loaded="1" /> </div>
                                </div>
                            </div>
                            <div>
                                <div style={{display:"none"}} className="detail_pc" id="detailAdvertise1"></div>
                            </div>
                            <div id="brandAct"></div>
                            <div id="pcItemLink">
                                <a className="btn btn_full">查看电脑版商品详情</a>
                                <div className="detail_full_tip">（ 查看电脑版商品详情，可能会消耗较多流量 ）</div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="de_btn_wrap fixed" id="btnTools">
                        <div className="de_row de_btn_bar">
                            <div className="icon_btn icon_dong" id="shopIM">
                                <i className="icon"></i>
                                <span className="txt">联系客服</span>
                            </div>
                            <div className="icon_btn icon_shop" id="gotoShop">
                                <i className="icon"></i>
                                <span className="txt">进店</span>
                            </div>
                            <div className="icon_btn icon_print" id="printBag" style={{display:"none"}}>
                                <i className="icon"></i>
                                <span className="txt">冲印袋</span>
                            </div>
                            <div onClick={this.cartz.bind(this)} className="icon_btn icon_cart" id="gotoCart">
                                <span className="add_num" id="popone">+1</span>
                                <i className="icon"><span className="num" id="cartNum" style={{display:"none"}}></span></i>
                                <span className="txt">购物车</span>
                            </div>
                            <div className="de_span btn_group">
                                <div className="de_row">
                                    <div className="btn btn_share_orange" id="shareBtn2" style={{display:"none"}}><span className="txt">邀请好友</span></div>
                                    <div onClick={this.jiaru.bind(this)} className="btn btn_orange" id="addCart2" >
                                        <span className="txt">加入购物车</span>
                                    </div>
                                    <div  onClick={this.jiaru.bind(this)} className="btn btn_buy goumai" id="buyBtn2"  ><span className="txt goumai">立即购买</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

                    // </div>
            // </div>
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
})(Login);