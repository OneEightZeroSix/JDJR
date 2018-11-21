import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route , Redirect} from "react-router-dom";
//状态管理
import {Provider} from 'react-redux';
import {createStore} from 'redux';



import * as serviceWorker from './serviceWorker';

//页面组件 
import Home from './pages/Home/Home.js';
import Makemoney from './pages/Makemoney/Makemoney.js';
import Lendmoney from './pages/Lendmoney/Lendmoney.js';
import Savemoney from './pages/Savemoney/Savemoney.js';
import Member from './pages/Member/Member.js';



import $ from 'jquery';
//创建仓库
const store = createStore(function(state={
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
        default:
            return state
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                
                <Route path="/" exact render={()=><Redirect to="/home/"/>}/>
                <Route path="/home/" component={Home} />
                <Route path="/makemoney/" component={Makemoney} />
                <Route path="/lendmoney/" component={Lendmoney} />
                <Route path="/savemoney/" component={Savemoney} />
                <Route path="/member/" component={Member} />

            </div>
        </Router>
    </Provider>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
