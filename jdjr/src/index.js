import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//路由
import { HashRouter  as Router, Route, Link } from "react-router-dom";

// 状态管理
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from './App';

// 页面组件 容器组件
import Classify from './pages/Classify/Classify.js';
import Mine from './pages/Mine/Mine.js';
import Cart from './pages/Cart/Cart.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Newpass from './pages/Newpass/Newpass.js';

// import Detail from './pages/Detail/Detail.jsx';


import * as serviceWorker from './serviceWorker';
React.axios = axios;
ReactDOM.render(
    <Router>
            <div>
                    <Route path="/classify/" component={Classify} />
                    <Route path="/mine/" component={Mine} />
                    <Route path="/cart/" component={Cart} />
                    <Route path="/login/" component={Login} />
                    <Route path="/register/" component={Register} />
                    <Route path="/newpass/" component={Newpass} />
                    {/* <Route path="/detail/:id/:song_id" component={Detail} /> */}
            </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
