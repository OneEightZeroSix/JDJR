import React, { Component } from 'react'
// import Dtop from '../../components/Dtop/Dtop';
// import Dlist from '../../components/Dlist/Dlist';
// import Dbottom from '../../components/Dbottom/Dbottom';

import { Link } from "react-router-dom";
import $ from  'jquery';
import cookie from "../../libs/cookie.js";

import "../../assets/css/Dheader.css";

//这个会样式污染登入界面
import "../../assets/css/Dacountmin.css";


import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:"",
            password:""
        }
    }
    // 左上角返回
    mine(){
        this.props.history.push("mine");
    }
    // 更改密码
    newpass(){
        var yhm=cookie.getCookie("yonghuming")||[];
        if(yhm.length==0){
            alert("您还未登入");
            this.props.history.push("login");

        }else{
            this.props.history.push("newpass");
        }
    }
    //更改支付密码
    newpay(){
        var yhm=cookie.getCookie("yonghuming")||[];
        if(yhm.length==0){
            alert("您还未登入");
            this.props.history.push("login");

        }else{
            this.props.history.push("newpay");
        }
    }
    
    tuichu(){
        cookie.setCookie("yonghuming","");
        this.props.history.push("login");
    }
    render() {
        return (
            <div >
                <div id="m_common_header" style={{minHeight:"45px",display:"block"}}>
                    <header className="jd-header">
                        <div className="jd-header-new-bar">
                            <div onClick={this.mine.bind(this)}  id="m_common_header_goback"
                                className="jd-header-icon-back J_ping"><span></span></div>
                            <div className="jd-header-new-title">账号管理</div>
                            <div id="m_common_header_jdkey" className="jd-header-icon-new-shortcut J_ping"><span></span></div>
                        </div>
                    </header>
                </div>
                <div className="wx_wrap">
                    <div id="wrapper" style={{display:"block"}}>
                        <section className="account_section" id="accountDetail">
                            <h3 className="account_title">当前登录账号</h3>
                            <div className="account_card">
                                <div className="account_card_profile"> <img src="//storage.360buyimg.com/i.imageUpload/6a645f3738396365376234613633333931353432363331313436363531_mid.jpg" />
                                </div>
                                <div className="account_card_info">
                                    <p className="account_card_name"> <span className="account_card_name_text">jd_789ce7b4a6339</span></p>
                                    <p className="account_card_email" id="email" data-hasemail="0">邮箱：未设置</p>
                                </div>
                            </div>
                            <ul className="account_manage">
                                <li className="item" onClick={this.newpass.bind(this)} > <a className="J_ping"> 修改登录密码 </a> </li>
                                <li className="item"> <a className="J_ping"> 修改绑定手机号码 <span className="text">{this.state.min}</span> </a>
                                </li>
                                <li className="item"> <a  onClick={this.newpay.bind(this)} className="J_ping"> 修改支付密码 </a> </li>
                                <li className="item"> <a className="J_ping"> 收货地址管理 </a> </li>
                                {/* <li className="item"> <a id="changeSite"> 切换站点 </a> </li> */}
                                {/* <li className="item"> <a className="J_ping"> 实名认证 </a> </li> */}
                                <li className="item" style={{display:"none"}}> <a className="J_ping"> 我的银行卡 </a> </li>
                                <li onClick={this.tuichu.bind(this)} className="item"> <a id="bindAccount"> 退出登入 </a> </li>
                            </ul>
                        </section>
                    </div>
                    <div className="wrapper" id="transferDetail" data-tag="wrapper" style={{display:"none"}}></div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        var yhm=cookie.getCookie("yonghuming")||[];
        this.setState({
            min:yhm
        })
    }
}

export default Register
