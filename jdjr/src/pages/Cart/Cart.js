import React, { Component } from 'react'

import "../../assets/css/Dindexmin.css";
import { Link } from "react-router-dom";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            style:"none"
        }
    }
    show(){
        console.log(666);
        if(this.state.style=="none"){
            this.setState({
                style:"block"
            })
        }
        if(this.state.style=="block"){
            this.setState({
                style:"none"
            })
        }
    }
    //快捷目录
    // 分类列表
    fenlei(){
        this.setState({
            style:"none"
        })
        window.location.href="http://localhost:3000/#/classify"
    }
    // 购物车列表
    cart(){
        this.setState({
            style:"none"
        })
        window.location.href="http://localhost:3000/#/cart"
       
    }
    // 分类列表
    mine(){
        this.setState({
            style:"none"
        })
        window.location.href="http://localhost:3000/#/mine"
        
    }
    render() {
        return (
            <div >
                <div className="wx_wrap" id="wxWrapCont">
                    <div className="m_header_v2" id="m_header" style={{display:"block"}}>
                        <div className="m_header_bar">
                            <Link to={"/classify"}  className="m_header_bar_back"></Link>
                            <div className="m_header_bar_title">购物车</div>
                            <div onClick={this.show.bind(this)} className="m_header_bar_menu"></div>
                        </div>
                        {(()=>{
                            if(this.state.style=="block"){
                                return(
                                    <div className="m_header_nav">
                                        {/* <div className="m_header_nav_item type_index" idx="0">首页</div> */}
                                        <div onClick={this.fenlei.bind(this)} className="m_header_nav_item type_search" idx="1" >分类搜索</div>
                                        <div onClick={this.cart.bind(this)} className="m_header_nav_item type_shopcart cur" idx="2">购物车</div>
                                        <div onClick={this.mine.bind(this)} className="m_header_nav_item type_my" idx="3">我的京东</div>
                                        {/* <div className="m_header_nav_item type_recently" idx="4">浏览记录</div> */}
                                    </div>
                                )
                            }
                        })()}
                        
                    </div>
                    <div className="m_header_v2_mask" style={{display:"none"}}></div>

                    <div style={{display: "none"}} id="nopinLogin"></div>
                    <div className="new_guide_mask" style={{display: "none"}}></div>
                    <div id="c_jdshopcart_showList" className="c_showJs">
                        <div className="address_bar_wrap">
                            <div className="address_bar">
                                <a className="address" id="addrNameTxt" ptag="7014.1.1"><em>广州市天河区</em></a>
                                <span className="btn" id="editBtn" ptag="7014.1.41"><span>编辑商品</span></span>
                                <span className="btn" id="shareTop" style={{display:"none"}} ptag="7014.1.42"><span>分享</span></span>
                                <span className="btn" id="quickCleanEnter" style={{display:"none"}}><i className="quick_clean_icon"></i><span>快速清理</span></span>
                            </div>
                            <div className="newGuide quickClean" style={{display:"none"}}>编辑状态下可快速清理购物车</div>
                        </div>
                        <div id="listContent">
                            <div id="huangtiao" primary="2">
                                <div className="mod_blockTips bg_red " clicknum="0"><i className="close"></i>
                                    <p>购物车中有3件降价商品，点击查看商品</p>
                                </div>
                            </div>
                            <div id="cmdtylist" attr-tag="cmdtylist">
                                <div className="section" id="s_722025" shopid="722025">
                                    <div className="head_wrap">
                                        <div className="head shopheadJs"> <i className="icon_select" ></i>
                                            <i className="icon_shop"></i>
                                            <div className="title oneline" >A家家居旗舰店<i
                                                    className="icon_arrow_right"></i></div> <a className="btn quanJs" shopid="722025"
                                                style={{display:"none"}} ptag="7014.4.2">优惠券</a>
                                        </div>
                                    </div>
                                    <div className="item item_connect" id="p_14433745234" > 
                                        <a className="head  head_act">
                                            <span className="tag">满减</span>
                                            <p className="title">购满1件，总价可打7折</p>
                                            <span className="a_head_right_text"  searchtype="1" >去凑单</span>
                                        </a>
                                        <div className="goods goods_last " cid="9847_9849_9873"
                                            isfresh="" num="1" goodprice="1599.00"> <i className="icon_select" 
                                               icontip="18429701833" ptag="7014.2.1"></i> <img className="image" src="//img10.360buyimg.com/mobilecms/s100x100_jfs/t29557/341/267284588/172011/55e8ce16/5bee199bN0e33ac59.jpg!q70.dpg.webp" />
                                            <p className="image_tag"lowestbuy="0" style={{display: "none"}}></p>
                                            <div className="lower_price" style={{display:"none"}}></div>
                                            <div className="content" ptag="7014.2.4">
                                                <div className="name"> <span className="proNameJs">A家 电视柜 可伸缩电视柜组合 北欧茶几电视柜组合套餐现代简约
                                                        电视柜(黄色)</span> </div>
                                                <p className="sku" isdist="" >电视柜(黄色)</p>
                                                <div className="goods_line">
                                                    <p className="price    " ><span className="priceJs" goodprice="1599.00">¥
                                                            <em className="int">1599</em>.00</span> </p>
                                                    <div className="num_and_more">
                                                        <div className="num_wrap" skuid="18429701833"> <span className="minus disabled"></span>
                                                            <div className="input_wrap"><input className="num" type="tel" max="200" prevalue="1" lowestbuy="0" /></div><span className="plus "></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="goods_sub_line">
                                                    <div className="m_action" > <span className="m_action_item"
                                                            issuit="">移入关注</span> <span className="m_action_item"
                                                            issuit="">删除</span> </div>
                                                </div>
                                                <div className="goods_sub_line" style={{display:"none"}}>
                                                    <div className="m_action"><span className="m_action_item" ></span></div>
                                                </div>
                                            </div>
                                            <div className="shopcart_additional">
                                                <div className="shopcart_additional_inner">
                                                    <div className="shopcart_additional_kind"> <span className="shopcart_additional_kind_label">促销</span>
                                                        <ul className="shopcart_additional_kind_list">
                                                            <li className="shopcart_additional_kind_item type_select" 
                                                                skuid="18429701833" ptag="7014.2.6">
                                                                <div className="shopcart_additional_kind_item_block">
                                                                    <p className="shopcart_additional_kind_item_text">满1件总价7.0折</p>
                                                                    <span className="shopcart_additional_kind_item_action">2个可选</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="shopcart_additional_kind service_yb" giftser="0" typeid="7" 
                                                        skuid="18429701833" suitid="14433745234" selectnum="0">
                                                        <span className="shopcart_additional_kind_label">服务</span>
                                                        <ul className="shopcart_additional_kind_list">
                                                            <li className="shopcart_additional_kind_item type_lnk">
                                                                <div className="shopcart_additional_kind_item_block">
                                                                    <p className="shopcart_additional_kind_item_text type_oneline">选择增值服务</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shopcart_goods_back cjfBackJs" style={{display:"none"}}><i className="icon_warning"></i>该宝贝暂时没有返利</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="section" id="s_167499" shopid="167499">
                                    <div className="head_wrap">
                                        <div className="head shopheadJs"> <i className="icon_select" ></i>
                                            <i className="icon_shop"></i>
                                            <div className="title oneline"  mreport="MShopcart_ShopEntrance,167499,3">美域嘉国际专营店<i
                                                    className="icon_arrow_right"></i></div> <a className="btn quanJs" shopid="167499"
                                                style={{display:"none"}} ptag="7014.4.2">优惠券</a>
                                        </div>
                                    </div>
                                    <div className="item" id="p_1954173464"  />
                                    <div className="goods" cid="16750_16751_16756"
                                       isfresh="" num="1" goodprice="64.00"> <i className="icon_select" 
                                            icontip="1954173464" ptag="7014.2.1"></i> <img className="image" init_src="//img10.360buyimg.com/mobilecms/s100x100_jfs/t3025/311/519442556/169055/b4b7d56/57a457a5N0d6e7bef.jpg!q70.dpg.webp"
                                            mreport="MShopcart_Productid,1954173464,4" />
                                        <p className="image_tag"  lowestbuy="0" style={{display: "none"}}></p>
                                        <div className="lower_price" style={{display:"none"}}></div>
                                        <div className="content"  ptag="7014.2.4">
                                            <div className="name"> <i className="mod_tag "><img src="//img11.360buyimg.com/jdphoto/s88x28_jfs/t26887/23/1744445436/2452/b4547785/5bebd299N13bd2a1f.png" /></i>
                                                <span className="proNameJs">吕（Ryo） 爱茉莉（Amore） 吕洗发水洗发露 韩国进口 黑吕吕单瓶洗发水400ML</span>
                                            </div>
                                            <p className="sku" isdist="" >黑吕吕单瓶洗发水400ML</p>
                                            <div className="goods_line">
                                                <p className="price    " ><span className="priceJs" goodprice="64.00">¥
                                                        <em className="int">64</em>.00</span> </p>
                                                <div className="num_and_more">
                                                    <div className="num_wrap" skuid="1954173464"> <span className="minus disabled"></span>
                                                        <div className="input_wrap"><input className="num" type="tel"  max="200"
                                                                prevalue="1" lowestbuy="0" /></div> <span className="plus "></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="goods_sub_line">
                                                <div className="m_action" attr-tag="action"> <span className="m_action_item"
                                                        issuit="">移入关注</span> <span className="m_action_item" issuit="">删除</span>
                                                </div>
                                            </div>
                                            <div className="goods_sub_line" style={{display:"none"}}>
                                                <div className="m_action"><span className="m_action_item" ></span></div>
                                            </div>
                                        </div>
                                        <div className="shopcart_goods_back cjfBackJs" style={{display:"none"}}><i className="icon_warning"></i>该宝贝暂时没有返利</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section" id="s_48090" shopid="48090">
                                <div className="head_wrap">
                                    <div className="head shopheadJs"> <i className="icon_select" ></i>
                                        <i className="icon_shop"></i>
                                        <div className="title oneline"   mreport="MShopcart_ShopEntrance,48090,3">井江食品专营店<i
                                                className="icon_arrow_right"></i></div> <a className="btn quanJs" shopid="48090" 
                                            style={{display:"none"}} ptag="7014.4.2">优惠券</a>
                                    </div>
                                </div>
                                <div className="item" id="p_10100658578"  />
                                <div className="goods" attr-tag="checkItem" attr-sku="10100658578" cid="1320_1584_2676" attr-giftservice=""
                                    isfresh="" num="1" goodprice="79.90"> <i className="icon_select" attr-tag="iconChkEve" attr-chktye="3"
                                        icontip="10100658578" ptag="7014.2.1"></i> <img className="image" init_src="//img10.360buyimg.com/mobilecms/s100x100_jfs/t23458/140/1972390046/146747/5b046149/5b6e81f0Ne422cd23.jpg!q70.dpg.webp"
                                        mreport="MShopcart_Productid,10100658578,4" attr-autoload="1" />
                                    <p className="image_tag" attr-stock="stock_10100658578" lowestbuy="0" style={{display: "none"}}></p>
                                    <div className="lower_price" style={{display:"none"}}></div>
                                    <div className="content"  >
                                        <div className="name"> <span className="proNameJs">探花村 4L橄榄油调和油 橄榄调和油 食用油 植物油 物理压榨</span>
                                        </div>
                                        <div className="goods_line">
                                            <p className="price"><span className="priceJs">¥
                                                    <em className="int">79</em>.90</span> </p>
                                            <div className="num_and_more">
                                                <div className="num_wrap" >
                                                    <span className="minus disabled"></span>
                                                    <div className="input_wrap">
                                                        <input className="num" type="tel"  prevalue="1" lowestbuy="0" />
                                                    </div>
                                                     <span className="plus "></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="goods_sub_line">
                                            <div className="m_action" attr-tag="action"> <span className="m_action_item" attr-tag="favItemEve"
                                                    issuit="">移入关注</span> <span className="m_action_item" attr-tag="delItemEve" issuit="">删除</span>
                                            </div>
                                        </div>
                                        <div className="goods_sub_line" style={{display:"none"}}>
                                            <div className="m_action"><span className="m_action_item" attr-xiangou=""></span></div>
                                        </div>
                                    </div>
                                    <div className="shopcart_goods_back cjfBackJs" style={{display:"none"}}><i className="icon_warning"></i>该宝贝暂时没有返利</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixBar" name="checkgroup" id="fixBarBot">
                        <i className="icon_select" attr-chktye="1" attr-tag="iconChkEve" ptag="7014.3.1">全选</i>
                        <div className="total" id="totalConfirmDiv">
                            <p>总计：<strong id="totalPrice">¥0.00</strong><small><span id="totalBackMoney">总额¥0.00 立减¥0.00</span></small></p><a
                                className="buy buyJs disabled" attr-tag="confirmEve">去结算<em attr-tag="confirmEve" id="totalNum" totalnum="0">(0件)</em></a>
                        </div>
                        <div className="btns" style={{display:"none"}} id="operateDiv">
                                        <a className="btn_3" id="deleteBtn" ptag="7014.1.2" attr-tag="delBtnEve">删除</a>
                                        <a className="btn_2" id="addFavor" attr-tag="favBtnEve" ptag="7014.3.4">移至收藏</a>
                                    {/* </div>
                                </div> */}
                        </div>
                        <div className="shopcart_banner" id="emptyContent" style={{display: "none"}}></div>
                        <div className="shopcart_mod_title" id="cnxhTitle"><span className="shopcart_mod_title_text" style={{display:"none"}}>可能你还想要</span></div>
                        <div id="myrecommend" style={{paddingBottom:"70px"}}>
                            <div className="mod_recommend_v2">
                                <ul className="list" id="recommendList">
                                    <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8xODQyOTcwMTgzNi5odG1s&amp;log=hNAfVU1tvaPqaFeBLTIaT3TwgGDd0X95YI5xv6Nk07GbJJGWrlBhWk_ZkDLI9jV5nfN61sG411nxnfxcZ8L54kOl_NKIXHL7CBaDY4p_nRyrdKJZcvBK5kSqbTtJEGMvyxc6bFOdKvCJHjR0t8EK5QNuUgW3xIqzpbvaHSbCpN0KqsJSYAqPSqVcXHa9qmSAIauZp6pDJtGEePTPOPp_ZDKi_CJVbHt4rSikrcAaBMaiCYLueDP1Hx5wDtH1QRWSBjJ4Fu84vqyKv1dKyppcsh--MWfyuBQjDqB_s1ztcxer4Krk7gM4vloLYBxGKpSRbMIMJ1tzFs3YslFjzG4gP5TvGV5KZYljNKAiAEtDEXB6JwD1UnFHc45X9LgKW-FxBKHcOsVnE9u_UjiQdom1LArrJOIj_DaokjKUjuxqb1RdTACTiGUkfyuA88ENDxrAqwTLbo-HAhZmOsbXzVNbOKsjOWMD_oqy68T6IjmoZQXJJ3ehDQHyxha9O1nuXA3H&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d18429701836$adposid%3d1860$adsid%3dc5fc6417-61b3-4212-a1a6-c7a282f6387b"
                                        source="1" sku="18429701836">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t24880/98/797269394/124733/38e4ee5/5b7cd31aN85d740a1.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> A家 电视柜 可伸缩电视柜组合 北欧茶几电视柜组合套餐现代简约 电视柜+边柜+茶几(黄色) </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>4299</em></div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ad_li" attr-tag="cnxhlink" data- data-repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.205003$src=rec$action=1$reqsig=3b07dc5842c112d84784b68fc75dbead29453c03$enb=1$sku=0$skus=18429701833,7522368,1070843,2922989,1975749,206805,5309709,11078109,12175083,12096923,5143009,6410833,2894348,1834951,1029043,2004617,3288514,2686232,3910299,1260086,5838152,4524827,3947587,3147990,2650468,2231262,508548,3091048,3726830,4396484,1717092,2055619,4993737,3225830,25158818757,10277553119,10285311770,26852545855,29019755513,19023379617,12295998899,12204823767,13706512718,12085307401,17932600752,16463451903,12157718838,12003228889,10444923109,1012478834,12561068294,5842624,1588076625,1588078831,1592310390,10527085561,11641790902,11894060013,10107357124,14703053749,14275703202,1682232351,1954173464,10100658578$p=205003$pin=$uuid=1539996794863451414561$csku=4075207$index=0$st=0$adcli=$expid=115$mexpid=$im=$rid=7693145789146412701$ver=1$sig=900e6d93c0d16690c51ea67969b04e92167656e"
                                        source="0" sku="4075207">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t23632/343/2563648016/96692/b5888c9d/5b84a931N5f2a13ae.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" /></i>
                                                千禾 御藏180天特级生抽 零添加黄豆酿造酱油厨房调料调味品1L </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>12</em>.8</div>
                                                    <div className="mod_sign_tip bor "><span>秒杀</span></div> <span className="single">¥29.8</span>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8yNTU4MDExNTM1OS5odG1s&amp;log=hNAfVU1tvaPqaFeBLTIaT3TwgGDd0X95YI5xv6Nk07HWuCxyJFCs4kwuBd3CBzY2dXN9murV-xubnzFb95V68YuuURPI8MtAZlmyiZs95a10mxuI7Dq79iMfQnVaeMjdCLuQw2okrfnD7nl3u9eVdNmbXnrTM-Hyv3jT9g4AWHZuzr9MFEQxz26elMLAbQjFgo8lMQ0cBZG8jiRZD3IiiwAlIaasI9U5lhnieb5XUwux-W5_-52rjoqqwq8ZHbObIQMrwFHem3yw3iltDcYRM4S2Eq3F8c3BexlEzloqIdT6sy6xp-psG-V9uCLAqAPuNgxKBE6MVtjFlEKWoJ-cRZZTYXBfT8RhK0WmO3EzgjOwkc_EaoUaAmllrhsMf71ruUveJT_XmrBb2-uQ5h1JgWf7nwI3VapJlQ3luV-4fyv11eDGjJUgpsdc-0E2iQ_n&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d25580115359$adposid%3d1860$adsid%3dc5fc6417-61b3-4212-a1a6-c7a282f6387b"
                                        source="1" sku="25580115359">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t28714/129/328871442/85517/3db4765a/5befd471Nf60d380d.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> 阿迪达斯adidas 官方 UltraBOOST Uncaged 男 跑步鞋 DA9157 如图 42.5 </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>1499</em></div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ad_li" attr-tag="cnxhlink" data- data-repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.205003$src=rec$action=1$reqsig=3b07dc5842c112d84784b68fc75dbead29453c03$enb=1$sku=0$skus=18429701833,7522368,1070843,2922989,1975749,206805,5309709,11078109,12175083,12096923,5143009,6410833,2894348,1834951,1029043,2004617,3288514,2686232,3910299,1260086,5838152,4524827,3947587,3147990,2650468,2231262,508548,3091048,3726830,4396484,1717092,2055619,4993737,3225830,25158818757,10277553119,10285311770,26852545855,29019755513,19023379617,12295998899,12204823767,13706512718,12085307401,17932600752,16463451903,12157718838,12003228889,10444923109,1012478834,12561068294,5842624,1588076625,1588078831,1592310390,10527085561,11641790902,11894060013,10107357124,14703053749,14275703202,1682232351,1954173464,10100658578$p=205003$pin=$uuid=1539996794863451414561$csku=4938552$index=1$st=0$adcli=$expid=115$mexpid=$im=$rid=7693145789146412701$ver=1$sig=426e7bd370960da7ebf90d7c6a1b2e0fd5efde16"
                                        source="0" sku="4938552">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t1/1110/21/15188/190147/5bdd6c46E9d5261dd/6a2a1e52592a529f.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" /></i>
                                                光明 莫斯利安 常温酸牛奶（原味）200g*24家庭装中华老字号 </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>84</em>.9</div>
                                                    <div className="mod_sign_tip bor "><span>券</span></div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8xOTc0MDk1Lmh0bWw&amp;log=hNAfVU1tvaPqaFeBLTIaT3TwgGDd0X95YI5xv6Nk07HWuCxyJFCs4kwuBd3CBzY2imsOS5M1sHu2waCJgxM1KxfTERG6h2KVpVLRubA6HYTwvMXg2qKU6lULonaszESSiL-S3ybptA0-STR4qyPjmUHKnQNRZOmPvaPekNsmeO78yt6asdNNQN8ijyc1jzocTqb7vU7cvExBD6WT0LLojV6FjtYLPwE2q7p8jGI6nI8Nb3Wv0AgKeC08kvPSeLIJw8WXsa5z_D6bxPebEnjvStjnGzLJhZeuGbSB5k3pT7K0ooEE_I2LThw-2e7kE59dxJilvqHS2NQh3oi48YW_i25urK0MCXAS82uJk-1NqYXWKWfyedWI0CgZXBTE3fKaI8ckYiIIqPyyTkCyHFqOy4pTvYWZq3_ZkZVvM028Ys8vn1gSfsW2VE_55vE7gGxr&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d1974095$adposid%3d1860$adsid%3dc5fc6417-61b3-4212-a1a6-c7a282f6387b"
                                        source="1" sku="1974095">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t7648/310/2006471967/395329/88a8eac0/59a628d3Nc68d2b73.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" /></i>
                                                东方宝石水莲花香水润滋养霜300ml（水润保湿 温和润肤）（意大利原装进口） </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>75</em></div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ad_li" attr-tag="cnxhlink" data- data-repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.205003$src=rec$action=1$reqsig=3b07dc5842c112d84784b68fc75dbead29453c03$enb=1$sku=0$skus=18429701833,7522368,1070843,2922989,1975749,206805,5309709,11078109,12175083,12096923,5143009,6410833,2894348,1834951,1029043,2004617,3288514,2686232,3910299,1260086,5838152,4524827,3947587,3147990,2650468,2231262,508548,3091048,3726830,4396484,1717092,2055619,4993737,3225830,25158818757,10277553119,10285311770,26852545855,29019755513,19023379617,12295998899,12204823767,13706512718,12085307401,17932600752,16463451903,12157718838,12003228889,10444923109,1012478834,12561068294,5842624,1588076625,1588078831,1592310390,10527085561,11641790902,11894060013,10107357124,14703053749,14275703202,1682232351,1954173464,10100658578$p=205003$pin=$uuid=1539996794863451414561$csku=7463455$index=2$st=0$adcli=$expid=115$mexpid=$im=$rid=7693145789146412701$ver=1$sig=4c2704c09b4215cb0e0287c85e2a50d5272f676c"
                                        source="0" sku="7463455">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t1/5752/30/11796/188763/5bd13bebEe324dc34/f6dcc3d0f64a15d6.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" /></i>
                                                卡乐比Calbee 日本进口水果麦片零食 冲饮谷物 营养早餐燕麦片700g </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>69</em>.9</div>
                                                    <div className="mod_sign_tip bor "><span>满减</span></div>
                                                    <div className="price_plus">¥66.6<i className="mod_plus_price"></i></div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC82MDQyNDUzLmh0bWw&amp;log=hNAfVU1tvaPqaFeBLTIaT3TwgGDd0X95YI5xv6Nk07GCqlqET6iBLa7FEhF1wvb3rXojct2LtQoTblMb06QBV8z3KZHkns-XxYwKhf3s4_rR4inC_MQ-QGZduvNrZ9eEDWx4Mus7-6AvkcMPT2GODOJuGQp98Uh66XUPBcijaFZjZNOZLzTJZ9Q10KMTnCObs1ksz1clffmBGhkcAzUQEKo5UTAX4R6EvAU8n-PuN4XPE-5zxPuU07EQ7YOtPmyCSiv_ez5d9pRoLUCVhV7pcc8MvNabj91b136pDa-jH7YK3T-BICVq-lTT7FGPM8Da7dflEXtqOcCex2-ZSgvArPF6sRDTTxecybc2cdfqK1Sh2QYOCI1H6cXvPgIOIAdTdc0i_v01jNN1f5YZLsV-pJypu7vckR0bADYLvm-oYmXhQ0jPrXuvqVlZ7x3gnj35zO0oZICzQV6wiDv_jrQPZZA9LcfavQ5CJa5-dWINhSE&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d6042453$adposid%3d1860$adsid%3dc5fc6417-61b3-4212-a1a6-c7a282f6387b"
                                        source="1" sku="6042453">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t13972/120/2408467878/48262/45308367/5a3e11c2N0134932c.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png!q70.webp" /></i>
                                                振德 ZHENDE医用级治疗型静脉曲张袜二级中压长筒开口男女医疗弹力袜护小腿防血栓 褐色 M </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>228</em></div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ad_li" attr-tag="cnxhlink" data- data-repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.205003$src=rec$action=1$reqsig=3b07dc5842c112d84784b68fc75dbead29453c03$enb=1$sku=0$skus=18429701833,7522368,1070843,2922989,1975749,206805,5309709,11078109,12175083,12096923,5143009,6410833,2894348,1834951,1029043,2004617,3288514,2686232,3910299,1260086,5838152,4524827,3947587,3147990,2650468,2231262,508548,3091048,3726830,4396484,1717092,2055619,4993737,3225830,25158818757,10277553119,10285311770,26852545855,29019755513,19023379617,12295998899,12204823767,13706512718,12085307401,17932600752,16463451903,12157718838,12003228889,10444923109,1012478834,12561068294,5842624,1588076625,1588078831,1592310390,10527085561,11641790902,11894060013,10107357124,14703053749,14275703202,1682232351,1954173464,10100658578$p=205003$pin=$uuid=1539996794863451414561$csku=5354005$index=3$st=0$adcli=$expid=115$mexpid=$im=$rid=7693145789146412701$ver=1$sig=b3be032e33094a7afe19cc4602dcdfef4e59f334"
                                        source="0" sku="5354005">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t10978/8/1048112982/219858/7e876fc3/59db62edN0a6f276b.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" /></i>
                                                金沙河面粉雪花小麦粉 包子馒头中筋烘焙白面粉 饺子粉 通用面粉 家用面粉5000G </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>19</em>.9</div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC8xNjU1NTYzNTg2Mi5odG1s&amp;log=hNAfVU1tvaPqaFeBLTIaT3TwgGDd0X95YI5xv6Nk07Fivup_q_wnI6TWfic0nyM0awTltDR9V2clretms95EHcHXfC5unNiTE8vCtmJEGh4cyqcMFqnVHdAn8y5ZN0EDXVYgcymWljKfd_LAy9Bovqj1uBK5sxdaCMPCwy8HESFJVCxKX5rmponTkqea-UXJiWz6KlHEoLW0jWz-GFCKb_sRJuYeCcd6OVjpS9UuNhzRix5wwJTHLPxAoJEqrtnBWWA4NjzfqKIREnxB5PtosVWnik15xow1Eoxpam05qLP-R84hiN7JYmyCX4Kuf0J0s8_KFUpxEQu7zoKwS5lXU-AZ6LFU6TLzfeSBMzoplO_KX_aR-VjujuHQDn6K3IzNZaasiTVxaRhZu4INvuoH09y25_i1p6NgfkA_Dx-4Cwfsv2xaDBetgeBNq6fyZ02syR0UZBjjC5uEtTDgMwKmOqcB4BgdHM-JKq45hqBn7Uw&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d16555635862$adposid%3d1860$adsid%3dc5fc6417-61b3-4212-a1a6-c7a282f6387b"
                                        source="1" sku="16555635862">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t9643/40/1984365473/164128/49c4797e/59eb08eeNaf6e4662.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> 华纳斯（HUANASI） 华纳斯 电视柜 简约伸缩电视柜茶几组合. 彩色 茶几+电视柜+层架 </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>5201</em></div>
                                                    <div className="mod_sign_tip bor "><span>券</span></div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="" attr-tag="cnxhlink" data- data-repurl="http://ccc-x.jd.com/dsp/nc?ext=aHR0cDovL2l0ZW0ubS5qZC5jb20vcHJvZHVjdC81MDkwNTMzLmh0bWw&amp;log=hNAfVU1tvaPqaFeBLTIaT3TwgGDd0X95YI5xv6Nk07Emr7_gvHUEG0zQK_u42og6_H-pkg6h0C5ebR2X5FdfTo8CxX7c4N0HG6cvuQnBqlUL7TrJoAhckjSfoAZrPCvrVoadOAvJK32R55Y9dNmrS1ngccKKac9ANlboaibuw_yoCCTPrBzKMW1ApT7og09jzZXhOGht0508cv0D9VoE2nNYFEoeywJHpOs51JuYnbGUe9rjqWKVbBClo2HwmIDHnZhAEx6CzpaKCCqPAK4oifuHkyWsn3TIOs16ory2vqw0aeDBXauGhfHT_Yn7i6Yhya3qNUa1QS0wsGr-PpNcUxkaP7b7q4pS1XjeNl-Eae4fZAmCbfKS8Wt4XyMWOKaHztMun3bwhuGFSQrXINoOZRhoZCmmTgopiLqwmdGygN8uKyCy7R1pgl6xu_MwH1xe3rlrIgN9lCM8Q3rZp-YwFSGbtoEQpsvGr-AK6cQFRx4&amp;v=404&amp;ru=http%3a%2f%2fmercury.jd.local%2flog.gif%3ft%3drec.000000%26v%3dsrc%3dmix$action%3d8$sku%3d-1$csku%3d5090533$adposid%3d1860$adsid%3dc5fc6417-61b3-4212-a1a6-c7a282f6387b"
                                        source="1" sku="5090533">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t10261/286/1015440228/319487/4e159670/59db274bN80bd1f34.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" /></i>
                                                好人家 麻辣香肠调料220g </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>11</em>.9</div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ad_li" attr-tag="cnxhlink" data- data-repurl="//knicks.jd.com/log/server?t=rec_common_clk&amp;v=type=rec.205003$src=rec$action=1$reqsig=3b07dc5842c112d84784b68fc75dbead29453c03$enb=1$sku=0$skus=18429701833,7522368,1070843,2922989,1975749,206805,5309709,11078109,12175083,12096923,5143009,6410833,2894348,1834951,1029043,2004617,3288514,2686232,3910299,1260086,5838152,4524827,3947587,3147990,2650468,2231262,508548,3091048,3726830,4396484,1717092,2055619,4993737,3225830,25158818757,10277553119,10285311770,26852545855,29019755513,19023379617,12295998899,12204823767,13706512718,12085307401,17932600752,16463451903,12157718838,12003228889,10444923109,1012478834,12561068294,5842624,1588076625,1588078831,1592310390,10527085561,11641790902,11894060013,10107357124,14703053749,14275703202,1682232351,1954173464,10100658578$p=205003$pin=$uuid=1539996794863451414561$csku=920024$index=11$st=0$adcli=$expid=115$mexpid=$im=$rid=7693145789146412701$ver=1$sig=9a4f05b9f127821d56e51b295ff0a4a8333c2ddf"
                                        source="0" sku="920024">
                                        <div className="cover"> <img init_src="//img14.360buyimg.com/n7/jfs/t27550/344/881254104/156138/74c46c10/5bbc0f8aN3ab05bb4.jpg!q70.dpg"
                                                attr-autoload="1" /> </div>
                                        <div className="info">
                                            <div className="name"> <i className="mod_tag"><img src="//img12.360buyimg.com/jdphoto/s102x28_jfs/t14512/288/2659278877/2368/8468a10d/5aadf9daNd4909ddc.png!q70.webp" /></i>
                                                香满园 家用 中筋面粉 美味富强小麦粉5kg 包子饺子馒头饼手擀面（新老包装随机发货） </div>
                                            <div className="flex_wrap">
                                                <div className="price_info">
                                                    <div className="price">¥<em>19</em>.9</div>
                                                </div>
                                                <div className="buy rec_cart"></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="space" style={{paddingBottom:"40px",display:"none"}}></div>
                    </div>
                    <div id="c_jdshopcart_showyb" className="c_showJs"></div>
                    
                    <div id="c_jdgiftpool_show" className="c_showJs"></div>
                    <div className="mod_coupon_voucher3" id="c_jdshopcoupon_show">
                        <div className="main"></div>
                    </div>
                    <div id="optimalPromo" style={{display: "none"}}></div>
                    <div className="shopcart_btm_tips_v3" id="nonEmptyExcluCouponEnter" style={{display: "none"}}>
                        <div className="shopcart_btm_tips_v3_text">送您新人专属福利，<span className="coupon">免运费券</span>等你领！</div>
                        <div className="shopcart_btm_tips_v3_link">点击领取</div>
                    </div>
                    <div className="shop_gift" id="nonEmptyExcluCouponDetail"></div>
                </div>
                {/* <Dbottom/> */}
            </div>
            
        )
    }
}

export default Cart
