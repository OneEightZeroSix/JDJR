import React, { Component } from 'react'
//样式污染是register界面的css




import { Link } from "react-router-dom";

import "../../assets/css/Dmlogin.css";

import $ from  'jquery';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            password:'',
            pass:''
        }
    }
    //判断是否注册
    panduan(e){
        var e=e.target;
        console.log(e);
        $.ajax({
            type: "post",
            data: {
                username: this.state.username
            },
            url: "http://localhost:3001/login/panduan",
            async: true,
            success: (data)=>{
              console.log(data);
              if(data.length>0){
                  this.setState({
                    password:data[0].password
                  })
              }
              
              if(data.length==0){
                e.value="";
              }
            }
        });
    }
     // 输入账号同步state
    user(e){
        var e=e.target;
        this.setState(
            {username:e.value}
        )
    }
    // 输入账号同步state
    pass(e){
        var e=e.target;
        this.setState(
            {pass:e.value}
        )
    }
    //登入
    login(){
        if(this.state.password==this.state.pass){
            document.cookie='yonghuming='+this.state.username+'; path=/';
            alert("登入成功");
            this.props.history.push("classify");
            // this.props.history.go(-1);
        }
        if(this.state.password!=this.state.pass){
            alert("密码不正确");
            this.setState({
                
            })
        }
    }
    render() {
        return (
            <div >
               <header id="header" style={{display:"block"}}>
                    <Link to={"/classify"} className="icon icon-goback"></Link>
                    <span className="txt-header">京东登录</span>
                </header>
                <section className="page">
                    <div className="logo">
                        <img className="logo-img" src="data:image/png;base64,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" />
                    </div>
                    <div className="wrap loginPage">
                        <div id="username_login" className="login-wrap login-wrap-active">
                            <div className="input-container">
                                <input onChange={this.user.bind(this)}  onBlur={this.panduan.bind(this)} id="username" className="acc-input username txt-input J_ping" type="text" placeholder="用户名/邮箱/已验证手机" />
                                <i className="icon icon-clear"></i>
                            </div>
                            <div className="input-container">
                                <input onChange={this.pass.bind(this)} id="password" type="password" className="acc-input password txt-input J_ping" placeholder="请输入密码" />
                                <i className="icon icon-clear"></i>
                                {/* <label className="label-checkbox J_ping" report-eventid="MLoginRegister_Plaintext">
                                    <input id="onOff_pwd" type="checkbox" />
                                    <div className="checkbtn">
                                    </div>
                                </label> */}
                                {/* <button className="J_ping findpwd" report-eventid="MLoginRegister_FindPassword">忘记密码</button> */}
                            </div>
                        </div>
                        <div id="sms_login" className="login-wrap">
                            <div className="sms-input-box">
                                <div className="input-container">
                                    <label className="area-box J_ping" report-eventid="MLoginRegister_AreaCode">
                                        <span className="area_code" code="86">+86</span>
                                        <i className="area_icon"></i>
                                    </label>
                                    <input type="tel" id="telphone" className="acc-input telphone sms-txt-input J_ping" placeholder="请输入手机号" />
                                    <i className="icon icon-clear"></i>
                                </div>
                                <button data-mescode="true" className="mesg-code mesg-disable J_ping" report-eventid="MLoginRegister_GetVerification"
                                    data-eventid="MLoginRegister_SMSReceiveCode">获取验证码</button>
                            </div>
                            <div className="input-container">
                                <input id="telCode" className="acc-input telCode sms-txt-input J_ping" type="tel" placeholder="请输入收到的验证码" />
                                <i className="icon icon-clear"></i>
                            </div>
                        </div>
                        <div className="notice">&nbsp;</div>
                        <a onClick={this.login.bind(this)}  id="loginBtn" className="btn J_ping" report-eventid="MLoginRegister_Login">登 录</a>
                        {/* <a id="loginOneStep" className="btn btn-onestep J_ping" report-eventid="MLoginRegister_MLogin" data-src="" */}
                            {/* style={{display:"block"}}>一键登录</a> */}
                        <input type="hidden" id="oneStep_switch" value="block" />
                        <div className="quick-nav clearfix">
                            {/* <a content-id="sms_login" className="J_ping planBLogin" report-eventid="MLoginRegister_SMSVerification"
                                style={{display:"block"}}>
                                <span className="txt-planBLogin">短信验证码登录</span>
                            </a> */}
                            <Link to={"/Register"} className="J_ping quickReg" report-eventid="MLoginRegister_PhoneRegister"><span className="txt-quickReg">手机快速注册</span></Link>
                        </div>
                        <div className="login-type">
                            <div className="quick-login">
                                <h4 className="txt-otherLogin">其他登录方式</h4>
                                <a className="J_ping quick-qq" >
                                    <i className="icon icon-mlogin icon-qq"></i><br/>
                                    <span  className="txt-qq">QQ</span>
                                </a>
                                <a className="J_ping quick-wx" >
                                    <i className="icon icon-mlogin icon-wx"></i><br/>
                                    <span className="txt-wechat">微信</span>
                                </a>
                            </div>
                            <div className="agreement-tips">
                                <p>登录即代表您已同意<a>京东隐私政策</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="toast-ui"><span className="toast"></span></div>
            </div>
        )
    }
}

export default Login
