import React, { Component } from 'react'
// import Dtop from '../../components/Dtop/Dtop';
// import Dlist from '../../components/Dlist/Dlist';
// import Dbottom from '../../components/Dbottom/Dbottom';

import { Link } from "react-router-dom";
import $ from  'jquery';

// import "../../assets/css/Dheader.css";

//这个会样式污染登入界面
// import "../../assets/css/Dacountmin.css";
import "../../assets/css/Dapp.css";


import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:"",
            password:""
        }
    }
    mine(){
        this.props.history.push("mine");
    }
    render() {
        return (
            <div >
                <div id="m_common_header" style={{minHeight:"45px",display:"block"}}>
                    <header className="jd-header">
                        <div className="jd-header-new-bar">
                            <div onClick={this.mine.bind(this)}  id="m_common_header_goback"
                                className="jd-header-icon-back J_ping"><span></span></div>
                            <div className="jd-header-new-title">更改密码</div>
                            <div id="m_common_header_jdkey" className="jd-header-icon-new-shortcut J_ping"><span></span></div>
                        </div>
                    </header>
                </div>
                <section id="app" className="container">
                    <div data-reactroot="" className="modify-box">
                        <div>
                            <div className="modify-item"><span className="label">设置新的登录密码</span>
                                <div className="item-rcol">
                                    <div className="rcol-cont"><input type="password"  className="itxt" placeholder="6-20位数字／字母／字符组合"
                                            maxlength="20"/><span className="del-ico" role="button" tabindex="0"></span><span className="eye-ico J_ping"></span></div>
                                    <div className="input-error hide"></div>
                                </div>
                            </div>
                            <div className="input-error hide"></div>
                            <div className="modify-opbtns J_ping" ><button type="button" className="btn-primary btn-lg btn-disabled">确认</button></div>
                        </div>
                        <div className="modify-box">
                            <div className="pos-bottom"><span className="alink" >遇到问题？</span></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login
