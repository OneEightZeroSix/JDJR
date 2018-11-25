import React, { Component } from 'react';

import './Paycenter.scss';


import Cookie from '../../libs/cookie.js';
import {connect} from 'react-redux';
import $ from 'jquery';

class Paycenter extends Component {
    constructor(props){
        super(props);
        console.log(this);
        this.state={
            nameClass:false,
            genderClass:false,
            clearClass:false,
            payClass:false,
            numInputValue:"",
        }
    }
    
   /*获得焦点，改变高亮*/
    changeNameColor(){
        this.setState({
            nameClass:true
        })
    }

    changeGenderColor(){
        this.setState({
            genderClass:true
        })
    }

    changePayColor(){
        this.setState({
            payClass:true
        })
    }
    /*失去焦点，改变高亮*/
    recurNameColor(){
        this.setState({
            nameClass:false
        })
    }
    
    recurGenderColor(){
        this.setState({
            genderClass:false
        })
    }

    recurPayColor(){
        this.setState({
            payClass:false
        })
    }

   /* 显示删除图标*/
    displayDelIcon(){
        this.setState({
            clearClass:true
        })
    }

    /*清除用户名的值*/
    clearValue(){
        this.setState({
            clearClass:false
        })
        this.refs.nameInput.value="";
    }

    /*获取三个值进行提交,
    方式一：（把这个贷款金额放入redux,以便lendmoney页面调用，进行减法，得到用户还能贷款多少钱）
    方式二：（将贷款金额存入数据库，等lendmoney页面请求数据库，得到用户贷款金额，进行相减得到用户还能贷款多少钱）*/

    commit(){
        let uname=this.refs.nameInput.value;
        let num=this.refs.numInput.value;
        let pwd=this.refs.pwdInput.value;
        

        //如果选择方式一,dispatch写好的方法：
            this.setState({
                    pwdInputValue:num
            })
            this.props.setLendNum(num);
        
       

        /*这需要放在三者值不为空的情况下   正则暂时不考虑 */
        /*if(uname!== ""  && num !== "" && pwd!== "" ){
    
            //设置redux用于组件通信,设置贷款金额存到仓库用于lendmoney页面使用
            this.setState({
                pwdInputVaule:num
            })

            $.ajax({
                type:"POST",
                url:"",
                data:{
                    yonghuming:"",
                    num:"",
                    pwd:""
                },
                beforeSend:function(){
                    // 发送之前的动画
                },
                complete:function(){
                    // 得到反馈前清除动画
                },
                success:function(response){
                    // 得到返回的数据结果
                    //alert("借钱成功");

                    //跳到借钱页面
                    // this.props.history.push('/lendmoney/');
                }
            })
        }*/
    }


    render() { 
        return (
              <div className="paycenter">
                <div className="header cl pos-re upheader">
                    <p id="realname-tip" className="basicAttention ft-24px col-999999">
                    请设置借款金额和支付密码
                    </p>
                </div>

                <div className="nameAndId col-bgw ">
                    <div className="ui-form-item pos-re ui-textfield clearfix" id="cot-username">
                        <span className={this.state.nameClass? 'anim-label anim-label-moved':'anim-label'} >真实姓名</span>
                        
                        <input className=" debit anim-input upinput" type="text" id="username" autoComplete="on"  onFocus={this.changeNameColor.bind(this)}  onBlur={this.recurNameColor.bind(this)} onInput={this.displayDelIcon.bind(this)} ref="nameInput"/>
                        <div id="userNameCan" onClick={this.clearValue.bind(this)} className={this.state.clearClass? 'rightCancel pos-ab ':'rightCancel pos-ab dn'}><img className="pos-ab" src="https://mjr.jd.com/spe/smrz/img/clear.png" /></div> 
                    </div>
                    <br />
                    <div className="border-1px border-top  ui-form-item   pos-re ui-textfield clearfix" id="cot-usercardid">
                        <span className={this.state.genderClass? 'anim-label anim-label-moved':'anim-label'} >借款金额</span>
                        <br/>
                        <input className=" debit anim-input upinput" id="userid" autoComplete="on" maxLength="18" onFocus={this.changeGenderColor.bind(this)}   onBlur={this.recurGenderColor.bind(this)}  ref="numInput"/>
                    </div>
                    <div className="border-1px border-top  ui-form-item   pos-re ui-textfield clearfix" >
                        <span className={this.state.payClass? 'anim-label anim-label-moved':'anim-label'} >支付密码</span>
                        <br/>
                        <input className=" debit anim-input upinput" type="password" autoComplete="on" maxLength="18" onFocus={this.changePayColor.bind(this)}   onBlur={this.recurPayColor.bind(this)}  ref="pwdInput"/>

                    </div>

                </div>



                <div id="confirmBtn" onClick={this.commit.bind(this)}className="makeSurebtn col-btn1Gray btn-can-press">
                提交
                </div>


              </div>  
        );
    }
    
}

export default connect((state)=>{
    return state;
},(dispatch)=>{
    return {
        setLendNum(num){
            dispatch({
                type:"setLendNum",
                lendNum:num
            })
            
        }
    }
})(Paycenter);