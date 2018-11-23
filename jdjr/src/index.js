import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

//路由
import { HashRouter  as Router, Route, Redirect } from "react-router-dom";

// 状态管理
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from './App';

// 页面组件 容器组件
// 东
import Classify from './pages/Classify/Classify.js';
import Mine from './pages/Mine/Mine.js';
import Cart from './pages/Cart/Cart.js';
import Login from './pages/Login/Login.js';
import Account from './pages/Account/Account.js';
import Register from './pages/Register/Register.js';
import Newpass from './pages/Newpass/Newpass.js';
import Newpay from './pages/Newpay/Newpay.js';
import Sort from './pages/Sort/Sort.js';
import Details from './pages/Details/Details.js';
// 芸
//页面组件 
import Home from './pages/Home/Home.js';
import Makemoney from './pages/Makemoney/Makemoney.js';
import Lendmoney from './pages/Lendmoney/Lendmoney.js';
import Savemoney from './pages/Savemoney/Savemoney.js';
import Member from './pages/Member/Member.js';
import ConfrimId from './pages/ConfrimId/ConfrimId.js';
import UploadPic from './pages/UploadPic/UploadPic.js';

// import Detail from './pages/Detail/Detail.jsx';


import * as serviceWorker from './serviceWorker';
React.axios = axios;



//创建仓库
const store = createStore(function(state={
    lei:"",
    tab:0,
    tabs:[{
        title:"首页",
        src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90',
        href:"home",
        dot:false
    },{
        title:"赚钱",
        src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60',
        href:"makemoney",
        dot:false
    },{
        title:"借钱",
        src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60',
        href:"lendmoney",
        dot:true
    },{
        title:"省钱",
        src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/3832/28/14067/2174/5bda5ae4E623fa89e/fa47608de6864e2a.png?width=60&height=60",
        href:"savemoney",
        dot:false
    },{
        title:"金融会员",
        src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60',
        href:"member",
        dot:false
    }],
    car:"",
    isShowShortCart:false
},action){
   
    switch(action.type){
        case 'toggleShortCart':
            return {
                ...state,
                isShowShortCart:action.isShowShortCart
            }
        case 'skipTo':
            return {
                ...state,
                tab:action.tab
            }
        case 'leilist':
            return {
                ...state,
                lei:action.lei
            }
        case 'details':
            return {
                ...state,
                car:action.car
            }
        default:
            return state
    }
})


ReactDOM.render(
    <Provider store={store}>
        <Router>
                <div>
                    {/* <div> */}
                        <Route path="/" exact render={()=><Redirect to="/home/"/>}/>
                        <Route path="/home/" component={Home} />
                        <Route path="/makemoney/" component={Makemoney} />
                        <Route path="/lendmoney/" component={Lendmoney} />
                        <Route path="/savemoney/" component={Savemoney} />
                        <Route path="/member/" component={Member} />
                        <Route path="/confrimid/" component={ConfrimId} />
                        <Route path="/uploadpic/" component={UploadPic} />

                    {/* </div> */}
                    {/* <div> */}
                        {/* 分类界面 */}
                        <Route path="/classify/" component={Classify} />
                        {/* 我的界面 */}
                        <Route path="/mine/" component={Mine} />
                        {/* 购物车界面 */}
                        <Route path="/cart/" component={Cart} />
                        {/* 登入界面 */}
                        <Route path="/login/" component={Login} />
                        {/* 个人管理界面 */}
                        <Route path="/account/" component={Account} />
                        {/* 注册界面 */}
                        <Route path="/register/" component={Register} />
                        {/* 更改密码界面 */}
                        <Route path="/newpass/" component={Newpass} />
                        {/* 更改支付密码界面 */}
                        <Route path="/newpay/" component={Newpay} />
                        {/* 种类界面 */}
                        <Route path="/sort/" component={Sort} /> 
                        {/*商品详情界面 */}
                        <Route path="/details/" component={Details} /> 
                        {/* <Route path="/detail/:id/:song_id" component={Detail} /> */}
                    {/* </div> */}
                </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
