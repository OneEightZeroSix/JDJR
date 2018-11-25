import React, {Component} from 'react';

import cookie from "../../libs/cookie.js";
import { Link } from "react-router-dom";

import '../../assets/css/search.css';
import ad1 from '../../assets/images/ad1.png';
import ad2 from '../../assets/images/ad2.png';
import ad3 from '../../assets/images/ad3.png';
import ad4 from '../../assets/images/ad4.png';
import ad5 from '../../assets/images/ad5.png';

export class Dtop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            style:"none"
        }
    }
    show(){
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
        // this.props.history.push("classify");
        this.setState({
            style:"none"
        })
    }
    // 购物车列表
    cart(){
        this.setState({
            style:"none"
        })
        window.location.href="http://localhost:3000/#/cart"
       
    }
    // 我的主页
    mine(){
        this.setState({
            style:"none"
        })
        var yhm=cookie.getCookie("yonghuming")||[];
        if(yhm.length==0){
            alert("您还未登入");
            window.location.href="http://localhost:3000/#/login"
        }else{
            window.location.href="http://localhost:3000/#/mine"
        }
        
    }
    render() {
        return ( 
            <div search_land_searchtransformation_show="true" id="containerTop" className="search-land" style={{display:"block"}}>
                <div className="mjd-header" style={{position:"fixed",top:"0",left:"0"}}>
                    <div className="m_common_container">
                        <div className="m_cc_header_inner">
                            <header className="jd-header">
                                <div className="jd-header-new-bar">
                                    <Link to="home" id="msCancelBtn" className="jd-header-icon-back J_ping" style={{display: "block"}}><span></span></Link>
                                    <div className="jd-header-new-title"></div>
                                    <div id="msShortcutLogin" className="jd-header-icon-new-shortcut-text J_ping" style={{display:"none"}}><span>登录</span></div>
                                    <div onClick={this.show.bind(this)} id="msShortcutMenu" report-eventid="MCommonHead_NavigateButton" report-eventparam="https://so.m.jd.com/webportal/channel/m_category"
                                        className="jd-header-icon-new-shortcut J_ping" style={{display: "block"}}><span ></span></div>
                                </div>
                            </header>
                        </div>
                        <div className="m-common-header-search">
                            <form  className="jd-header-search-form">
                                <div className="jd-header-search-box" id="msSearchBox" style={{marginRight: "32px"}}><i id="search-input-left-jd"
                                        className="jd-header-icon-jd"></i><i id="search-input-left-icon" className="jd-header-icon-fdj"></i>
                                    <div className="jd-header-search-input"><input  name="keyword" id="msKeyWord" type="text"
                                             placeholder="护肤品套装" className="hilight2" style={{outline: "none"}}/>
                                            <input type="text"  style={{display:"none"}} />
                                            <span id="ad1"></span>
                                            <div className="head-input-icon J_ping" id="msSearchTab"  style={{display:"none"}}></div>
                                    </div>
                                    <a  className="jd-header-icon-close" id="msSearchClearBtn" style={{display:"none"}}></a>
                                </div>
                                <a style={{display:"none"}} id="msSearchBtn" className="jd-header-icon-search1">
                                    <span>搜索</span>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                <ul  id="msShortcut" className="jd-header-vertical-shortcut-v2" style={{position:"absolute",top:"53px",right:"10px",display:`${this.state.style}`}}>
                    {/* <li><a className="J_ping" report-eventid="MCommonHead_home"
                            ><span className="shortcut-index" style={{background:`url(${ad1}) no-repeat center center`,backgroundSize:"15px"}}></span><strong>首页</strong></a></li> */}
                    <li onClick={this.fenlei.bind(this)} className="current"><a className="J_ping" report-eventid="MCommonHead_CategorySearch" 
                            ><span className="shortcut-search" style={{background:`url(${ad2}) no-repeat center center`,backgroundSize:"15px"}}></span><strong>分类搜索</strong></a></li>
                    <li onClick={this.cart.bind(this)} ><a className="J_ping" report-eventid="MCommonHead_Cart" 
                            ><span className="shortcut-cart" style={{background:`url(${ad3}) no-repeat center center`,backgroundSize: "15px"}}></span><strong>购物车</strong></a></li>
                    <li onClick={this.mine.bind(this)} ><a className="J_ping" report-eventid="MCommonHead_MYJD" 
                            ><span className="shortcut-home" style={{background:`url(${ad4}) no-repeat center center`,backgroundSize: "15px"}}></span><strong>我的京东</strong></a></li>
                    {/* <li><a className="J_ping" report-eventid="MCommonHead_FootPrint"
                            ><span className="shortcut-footprint"
                                style={{background:`url(${ad5}) no-repeat center center`,backgroundSize: "15px"}}></span><strong>浏览记录</strong></a></li> */}
                </ul>
            </div>
        )
    }
}

export default Dtop