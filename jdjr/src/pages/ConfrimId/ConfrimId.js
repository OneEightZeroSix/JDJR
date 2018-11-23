import React, { Component } from 'react';

import './ConfrimId.scss';

class ConfrimId extends Component {
    constructor(props){
      super(props);
      console.log(this);
      this.state={
            nameClass:false,
            genderClass:false,
            btnClass:true,
            switchClass:false,
            clearClass:false,
            cur:1,
            confrimType:[{
                title:"外籍护照"
            },{
                title:"身份证"
            },{
                title:"台胞证"
            },{
                title:"回乡证"
            }],
            uname:"",
            idNum:""
            
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
    
    /* 显示删除图标*/
    displayDelIcon(){
        this.setState({
            clearClass:true
        })
    }
   
    /*显示选择类型*/
    displayChooseType(){
        this.setState({
            switchClass:true
        })
        
    }

    /*选择类型，并消失*/
    chooseType(index){
        this.setState({
            cur:index
        })
        this.cancelChooseType();

    }

    /*取消选择类型*/
    cancelChooseType(){
        this.setState({
            switchClass:false
        })
    }
    

    /*清除用户名的值*/
    clearValue(){
        this.setState({
            clearClass:false
        })
        console.log(this);
        this.refs.nameInput.value="";
    }


    /*下一步*/
    next(){
        this.setState({
            uname:this.refs.nameInput.value,
            idNum:this.refs.idNumInput.value
       })
        console.log("得到用户名,密码,跳转到上传的路由");
        this.props.history.push('/uploadpic/');
    }

    render() {
        return (
            <div className="confrimid">

                <div className="header cl pos-re upheader">
                    <p id="realname-tip" className="basicAttention ft-24px col-999999">
                    请填写您的真实信息,通过后将不能修改
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
                        <span className={this.state.genderClass? 'anim-label anim-label-moved':'anim-label'} >{this.state.confrimType[this.state.cur].title}</span>
                        <br/>
                        <input className=" debit anim-input upinput" id="userid" autoComplete="on" maxLength="18" onFocus={this.changeGenderColor.bind(this)}   onBlur={this.recurGenderColor.bind(this)}  ref="idNumInput"/>
                       
                        <div className="pr pct30 h100p fr" onClick={this.displayChooseType.bind(this)}>
                            <span className="switch-type">切换类型</span>
                        </div>
                        <input type="hidden" id="hid_idType" value="1" />
                    </div>
                </div>

                <div id="confirmBtn"  className={this.state.btnClass? 'makeSurebtn col-btn1Gray btn-can-press':'makeSurebtn col-btn1Gray'} onClick={this.next.bind(this)}>
                    下一步
                </div>

                <div className="layer" style={{transformOrigin:"0px 0px 0px",opacity:"1", transform:"scale(1, 1)", display:this.state.switchClass?'block':'none'}}>
                    <div className={this.state.switchClass?'select-box size18 select-anim':'select-box size18'}>
                        <div className="select-list">
                            
                            {(()=>{
                                return this.state.confrimType.map((item,index)=>{
                                    return <div key={index} className="select-card-type" onClick={this. chooseType.bind(this,index)}>{item.title}</div>
                                })
                            })()}
                            
                        </div>
                        <div className="select-cancel" onClick={this.cancelChooseType.bind(this)}>
                            取消
                        </div>
                    </div>
                </div>

                <div className="textcont top col-999999 marginauto">以上信息用于身份验证</div>
                <img src="https://static.360buyimg.com/finance/mobile/serviceCenter/certification/2.0.1//img/footer.png" className="confirm-footer-mt" alt="" />
                <div style={{paddingTop:"30px"}}></div>
            </div>
        );
    }
}

export default ConfrimId;
