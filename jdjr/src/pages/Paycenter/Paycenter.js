import React, { Component } from 'react';

import './Paycenter.scss';

import { Link } from "react-router-dom";

import cookie from '../../libs/cookie.js';
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
            edu:0,
            mima:8
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

    /*获取三个值进行提交,并把这个值放入redux进行减法*/
    commit(){
        var yhm=cookie.getCookie("yonghuming") ||[];

        $.ajax({
            type: "post",
            data: {
                username: yhm
            },
            url: "http://localhost:3001/login/panduan",
            async: true,
            success: (data)=>{
                this.setState({
                    edu:Number(data[0].quota)-Number(data[0].jie),
                    mima:data[0].pay
                })
                
            }
        });


        let uname=this.refs.nameInput.value;
        let num=this.refs.numInput.value;
        let pwd=this.refs.pwdInput.value;
        //验证名字正则
        if (!/^[\u2E80-\u9FFF]+$/.test(uname)) {
            alert("请输入正确的名字");
            return false;
        };
        //验证借款金额正则
        if (!/^[\d]{3,}$/.test(num)) {
            alert("借款金额请输入大于100的数字");
            return false;
        };
        

        //因为数据更新缓慢，所以用延时器
        setTimeout(()=>{
            
            //验证支付密码
            console.log(pwd,this.state.mima);
            if (pwd!=this.state.mima) {
                alert("支付密码不正确");
                return false;
            };
            //验证额度
            if (Number(num)>this.state.edu) {
                alert("可借额度不足");
                return false;
            };


            $.ajax({
                type: "post",
                data: {
                    username: yhm,
                    jie:num
                },
                url: "http://localhost:3001/login/jiekuan",
                async: true,
                success: (data)=>{
                    // console.log(data);
                    
                }
            });


            $("#ad2").css("display","none");
            $("#ad1").css("display","block");
        },1400)
        

        // this.setState({
        //         pwdInputValue:num
        // })
        
        // this.props.setLendNum(num);
        /*if(uname!== ""  && num !== "" && pwd!== "" ){
    
            //设置redux用于组件通信
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

                    // 跳到其他页面
                }
            })
        }*/
    }


    // 进入界面判断是否登入
    panduan(){
        var yhm=cookie.getCookie("yonghuming")||[];
        if(yhm.length==0){
            this.props.history.push("login");
        }
    }



    //借款申请
    jie(){

    }

    render() { 
        return (
            <div>
                <Link to="lendmoney" id="ad1" style={{display:"none",textAlign:"center",lineHeight:"50px",color:"#fff",position:"fixed",top:"50%",left:"50%",margin:"-25px 0 0 -100px",height:"50px",width:"200px",background:"#359df5",zIndex:"100"}}>
                借款成功
                </Link>
            
              <div className="paycenter" id="ad2">
                
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
            </div>
        );
    }
    componentDidMount (){
        this.panduan();
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