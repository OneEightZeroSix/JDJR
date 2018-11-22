import React, { Component } from 'react';

import './ConfrimId.scss';

class ConfrimId extends Component {
    constructor(props){
      super(props);
      console.log(this);
      this.state={
            nameClass:false,
            genderClass:false,
            btnClass:false,
            switchClass:false,
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
            uname:this.refs.nameInput.value,
            id:this.refs.idInput.value
            
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
    
    /*输入姓名的时候*/
    changeSomething(){
        this.setState({
            btnClass:true
        })
        let a= this.refs.nameInput.value;
        console.log(a);
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
                        <br/>
                        <input className=" debit anim-input upinput" type="text" id="username" autoComplete="on"  onFocus={this.changeNameColor.bind(this)}  onBlur={this.recurNameColor.bind(this)} onInput={this.changeSomething.bind(this)} ref="nameInput"/>
                        <div id="userNameCan" className="rightCancel pos-ab dn"><img className="pos-ab" src="https://mjr.jd.com/spe/smrz/img/clear.png" /></div> 
                    </div>
                    <div className="border-1px border-top  ui-form-item   pos-re ui-textfield clearfix" id="cot-usercardid">
                        <span className={this.state.genderClass? 'anim-label anim-label-moved':'anim-label'} >{this.state.confrimType[this.state.cur].title}</span>
                        <br/>
                        <input className=" debit anim-input upinput" id="userid" autoComplete="on" maxLength="18" onFocus={this.changeGenderColor.bind(this)}   onBlur={this.recurGenderColor.bind(this)}/>
                       
                        <div className="pr pct30 h100p fr" onClick={this.displayChooseType.bind(this)}>
                            <span className="switch-type">切换类型</span>
                        </div>
                        <input type="hidden" id="hid_idType" value="1" />
                    </div>
                </div>

                <div id="confirmBtn"  className={this.state.btnClass? 'makeSurebtn col-btn1Gray btn-can-press':'makeSurebtn col-btn1Gray'}>
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
