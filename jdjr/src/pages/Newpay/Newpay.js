import React, { Component } from 'react'
// import Dtop from '../../components/Dtop/Dtop';
// import Dlist from '../../components/Dlist/Dlist';
// import Dbottom from '../../components/Dbottom/Dbottom';
import cookie from "../../libs/cookie.js";

import { Link } from "react-router-dom";
import $ from  'jquery';

// import "../../assets/css/Dheader.css";

//这个会样式污染登入界面
// import "../../assets/css/Dacountmin.css";
// import "../../assets/css/Dapp.css";


import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pay:""
        }
    }
    mine(){
        this.props.history.push("mine");
    }
     // 输入密码同步state
    pass(e){
        var e=e.target;
        this.setState(
            {pay:e.value}
        )
    }

    //更改支付密码
    updata(){
        var yhm=cookie.getCookie("yonghuming")||[];
        if (!/^[\d]{6}$/.test(this.state.pay)) {
            alert("支付密码有误");
            return false;
        };
        $.ajax({
            type: "post",
            data: {
                username:yhm,
                pay: this.state.pay
            },
            url: "http://localhost:3001/login/pay",
            async: false,
            success: function(data) {
              alert(data);
              window.location.href="http://localhost:3000/#/mine"
            }
        });
    }

    render() {
        return (
            <div >
                <div id="m_common_header" style={{minHeight:"45px",display:"block"}}>
                    <header className="jd-header">
                        <div className="jd-header-new-bar">
                            <div onClick={this.mine.bind(this)}  id="m_common_header_goback"
                                className="jd-header-icon-back J_ping"><span></span></div>
                            <div className="jd-header-new-title">更改支付密码</div>
                            <div id="m_common_header_jdkey" className="jd-header-icon-new-shortcut J_ping"><span></span></div>
                        </div>
                    </header>
                </div>
                <div style={{width:"100%",padding:"10px 0"}}>
                    <div style={{height:"30px",lineHeight:"30px",marginLeft:"20px",fontSize:"12px"}}>设置新的支付密码</div>
                    <input onChange={this.pass.bind(this)} type="text" placeholder="6位数字/支付密码" style={{height:"40px",lineHeight:"40px",paddingLeft:"5%",background:"#fff",width:"90%",margin:"0 5%",fontSize:"12px",marginBottom:"20px"}}></input>
                    <div onClick={this.updata.bind(this)}  style={{borderRadius:"5px",height:"40px",lineHeight:"40px",background:"#f02b2b",width:"90%",margin:"0 5%",cloor:"#fff",fontSize:"20px",marginTop:"20px",textAlign:"center"}}>确认</div>
                </div>
            </div>
        )
    }
}

export default Login
