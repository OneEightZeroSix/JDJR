import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './Xheader.css';



import XshortCart from '../XshortCart/XshortCart.js';


class Xheader extends Component {
    constructor(props){
        super(props);
        this.state={
            cur:0,
            jdHeader:[{
              title:"首页"
            },{
              title:"赚钱"
            },{
              title:"借钱"
            },{
              title:"省钱"
            }]
        }
    }
    render() {
        return (
            <div>
              <div id="m_common_header2" className="m_common_header2">
                <header className="jd-header">
                    <div className="jd-header-new-bar">
                      <div report-eventid="MCommonHead_Back" report-eventparam="https://m.jr.jd.com/spe/qyy/main/index.html" id="m_common_header2_goback" className="jd-header-icon-back J_ping">
                        <span></span>
                      </div>
                      <div className="jd-header-new-title">{this.state.jdHeader[this.state.cur].title}</div>
                      <div onClick={this.props.toggleShortCart.bind(this)} report-eventid="MCommonHead_NavigateButton" report-eventparam="https://m.jr.jd.com/spe/qyy/main/index.html" id="m_common_header2_jdkey" className="jd-header-icon-new-shortcut J_ping">
                        <span></span>
                      </div>
                    </div>
                </header>
              </div>
              <XshortCart />
            </div>

        );
    }
}

export default connect((state)=>{
  return state;
},(dispatch)=>{
    return {
        toggleShortCart(){
            dispatch({
                type:"toggleShortCart",
                isShowShortCart:!this.props.isShowShortCart
            })
        }
    }
})(Xheader);
