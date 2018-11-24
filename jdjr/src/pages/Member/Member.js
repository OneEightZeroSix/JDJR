import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from "react-router-dom";



 import './Member.scss';


class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSmallCart:false,
            memberList: [{
                title: "我的资产",
                subTitle: "查看全部资产",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的优惠券",
                subTitle: "查看全部",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的金币",
                subTitle: "赚金币兑好物",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&amp;height=90",
                href: ""
            }, {
                title: "我的金条",
                subTitle: "查看额度",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&amp;height=90",
                href: ""
            }, {
                title: "我的借钱",
                subTitle: "查看全部产品",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的白条",
                subTitle: "去提额",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的众筹",
                subTitle: "查订单/物流",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的保障",
                subTitle: "全方位保障",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的爱车",
                subTitle: "绑车享专属福利",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&amp;height=54",
                href: ""
            }],
            tabs:this.props.tabs
        }
    }

    showSmallCart(){
        this.setState({
            isShowSmallCart: !this.state.isShowSmallCart
        })
    }

    goBack(){
       this.props.history.goBack();
    }

    render() {
        return (
            <div className="jMember">
                <div className="qyy-body qyy" style={{marginTop:"45px"}}>
                    <input id="qyy-usertype" type="hidden" />
                    <div id="qyy-page-loading" className="page-loading hide">
                        <div className="page-loading-bg"></div>
                    </div>
                   
                    <div className="wrap-container">
                        <div className="wrap">
                            <div className="section section-42  hasTopPadding hasFloorBottom" style={{background:"#ffffff"}}>
                                <div className="row personal-assets ">
                                    <section className="personal-assets-user" ><img className="header" id="qyy-personal-assets-user-img" src="http://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png?width=100&amp;height=100" alt="" />
                                        <div className="info">
                                            <div className="name" id="qyy-personal-assets-user-name">jd_157707ujs</div><span className="user-pin" id="qyy-personal-assets-user-pin">jd_6cafe92b6922e</span>
                                        </div>
                                        <div className="right"><span style={{color:""}}>会员福利</span><img className="arrow" src="//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt=""/></div>
                                    </section>
                                </div>
                            </div>
                            <div className="section section-4  hasTopPadding hasFloorBottom" style={{background:""}}>
                                {(()=>{
                                    return this.state.memberList.map((item,index)=>{
                                        return (
                                            <div key={index} className="row classify singleTitle" >
                                                <div className="icon">
                                                    <div className="img-wrap bg-none min-height-0">
                                                        <img src={item.src} className="test-lazyload" alt="" /></div>
                                                </div>
                                                <div className="info"><span className="name" style={{color:"",lineHeight:"auto"}}>{item.title}</span></div>
                                                <div className="benifit" id="qyy-benifit" style={{color: index>7? "":"#999999"}}>{item.subTitle}</div>
                                            </div>
                                        )
                                    })
                                })()}
                            </div>
                            <div className="section section-4  hasTopPadding hasFloorBottom" style={{background:""}}>
                                <div className="row classify singleTitle">
                                    <div className="icon">
                                        <div className="img-wrap bg-none min-height-0">
                                        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&amp;height=70" className="test-lazyload" alt="" /></div>
                                    </div>
                                    <div className="info"><span className="name" style={{color:"",lineHeight:"auto"}}>实名认证</span></div>
                                    <div className="benifit" id="qyy-classNameify-user-check" style={{color:"#999999"}}>去认证</div>
                                </div>
                            </div>
                            <div className="section section-4  hasTopPadding hasFloorBottom" style={{background:"#FFFFFF"}}>
                                <div className="row classify singleTitle" >
                                    <div className="icon">
                                        <div className="img-wrap bg-none min-height-0">
                                            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&amp;height=70" className="test-lazyload" alt=""/>
                                        </div>
                                    </div>
                                    <div className="info"><span className="name" style={{color:"",lineHeight:"auto"}}>帮助中心</span>
                                    </div>
                                    <div className="benifit" id="qyy-benifit" style={{color:""}}></div>
                                </div>
                            </div>

                            <div className="section section-4  hasTopPadding hasFloorBottom" style={{background:"#FFFFFF"}}>
                                <div className="row classify singleTitle" >
                                    <div className="icon">
                                        <div className="img-wrap bg-none min-height-0">
                                            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&amp;height=70" className="test-lazyload" alt=""/>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div style={{marginTop:"8px"}}>
                                            <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=dUdMTUFBQkZNQk01BARbFhoY" style={{textDecoration:"none"}}><img src="http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_02.png" style={{verticalAlign:"milddle"}}/></a>
                                        </div>
                                    </div>
                                    <div className="benifit" id="qyy-benifit" style={{color:""}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="error-wrap hide" id="system-error-wrap">
                        <img src="//m.jr.jd.com/spe/qyy/main/images/web_error.png" alt="" />
                        <p className="desc">功能故障，正在抢修…</p>
                        <button className="reload-btn" id="system-error-reload">刷新试试看</button>
                    </div>

                    <input  id="qyy-usertype" type="hidden" />

                    <div className="add-bottom-seize"></div>

                    <div className="black-cover" id="qyy-black-cover" style={{display:"none"}}></div>

                    <div id="m_common_header2" className="m_common_header2">
                        <header className="jd-header">
                            <div className="jd-header-new-bar">
                                <div  onClick={this.goBack.bind(this)} id="m_common_header2_goback" className="jd-header-icon-back J_ping"><span></span></div>
                                <div className="jd-header-new-title">金融会员</div>
                                <div  id="m_common_header2_jdkey" className="jd-header-icon-new-shortcut J_ping">
                                    <span  onClick={this.showSmallCart.bind(this)}></span>
                                </div>
                            </div>
                        </header>
                    </div>
                    
                    <div className="section section-38  hasTopPadding hasFloorBottom" style={{background:"#FFFFFF"}}>
                        <div className="add-bottom" id="qyy-add-bottom">

                            {(()=>{
                                return this.state.tabs.map((item,index)=>{
                                    return (
                                        <Link to={`/${item.href}/`} onClick={this.props.skipTo.bind(this,item,index)}  key={index} className="item" ><img src={item.src} className="user-img" alt="" />
                                            <p className="blue" style={this.props.tab===index?{color:"#4668FF"}:{color:"#B1B4BB"}}>{item.title}</p>
                                        </Link>
                                    )
                                })
                            })()}
                            
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

                    <div id="header-mask" style={{display:"none"}}></div>
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
})(Member);