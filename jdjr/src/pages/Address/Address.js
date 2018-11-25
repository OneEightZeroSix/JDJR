import React, { Component } from 'react'


import { connect} from 'react-redux';
import cookie from "../../libs/cookie.js";

import { Link } from "react-router-dom";
import $ from  'jquery';
// import "../../assets/css/Dindexmin.css";
import "./Address.css";


import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
           yuan:[],
           zong:[],
           zon:[],
           ge:1,
           min:"address_defalut_wrap",
           cur:0,
           gongneng:["综合","价格","销量","筛选"],
           jia:true,
           zonglei:'',
        //    =====
           dizhi:[],
           moren:0,
           ID:0
        }
    }
    
    // 获取数据
    huoqu(){
        var yhm=cookie.getCookie("yonghuming");
        $.ajax({
            type: "post",
            data: {
                yhm
            },
            url: "http://localhost:3001/address/huoqu",
            async: true,
            success: (data)=>{
                console.log(data);
                this.setState({
                    dizhi:data
                })
                data.forEach((item,idx)=>{
                    if(item.moren=="true"){
                        this.setState({
                            moren:idx,
                        })
                    }
                })

            }
        });
    }
    //点击勾选
    gouxuan(idx,item,e){
        var yhm=cookie.getCookie("yonghuming");
        this.setState({
            moren:idx
        })
        var e=$(e.target).closest("#addressList");
        console.log(e);
        e[0].style.display="none";
        
        $("#pageEditAddress").css("display","block")
        $("#ad1").css("display","block");
        $("#name").val(item.name);
        $("#mobile").val(item.tel);
        $("#adinfo").val(item.address);
        $.ajax({
            type: "post",
            data: {
                yhm,
                ID:item.ID
            },
            url: "http://localhost:3001/address/updata",
            async: true,
            success: (data)=>{
                this.setState({
                    moren:idx,
                    ID:item.ID
                })
            }
        });
    }
    //返回地址选项
    fanhui(){
        if( $("#pageEditAddress").css("display")=="block"){
            $("#pageEditAddress").css("display","none");
            $("#addressList").css("display","block")
        }else{
            this.props.history.push("order");
        }
    }
    //修改地址确认更改
    queren(){
        var yhm=cookie.getCookie("yonghuming");
        
        // $("#mobile").val(item.tel);
        // $("#adinfo").val(item.address);
        $.ajax({
            type: "post",
            data: {
                yhm,
                name:$("#name").val(),
                tel:$("#mobile").val(),
                address:$("#adinfo").val(),
                ID:this.state.ID
            },
            url: "http://localhost:3001/address/xiugai",
            async: true,
            success: (data)=>{
                this.huoqu()
                setTimeout(function(){
                    $("#pageEditAddress").css("display","none");
                    $("#addressList").css("display","block")
                },1000)
                
            }
        });
    }

    //删除地址
    del(e){
        var yhm=cookie.getCookie("yonghuming");
        setTimeout(()=>{
            $.ajax({
                type: "post",
                data: {
                    yhm,
                    ID:this.state.ID
                },
                url: "http://localhost:3001/address/del",
                async: true,
                success: (data)=>{
                    this.huoqu();
                    this.setState({
                        moren:0
                    })
                    setTimeout(()=>{
                        // this.huoqu()
                        $("#pageEditAddress").css("display","none");
                        $("#addressList").css("display","block")
                    },1000)
                }
            });
        },500)
        
        
    }

    //新增地址
    //点击勾选
    xinzeng(){
        this.setState({
            ID:"zeng"
        })
        
        
        
        $("#addressList").css("display","none");
        $("#ad1").css("display","none");
        $("#pageEditAddress").css("display","block");
        
    
    }


    render() {
        return (
            <div>
                <div className="wx_wrap" id="wrapBody">
                    <div className="m_header" >
                        <div className="m_header_bar">
                            <div onClick={this.fanhui.bind(this)} className="m_header_bar_back"></div>
                            <div className="m_header_bar_title">收获地址</div>
                            <div className="m_header_bar_menu" style={{display:"none"}}></div>
                        </div>
                        <div className="m_header_nav" id="headnav" style={{display:"none"}}>
                            <div className="m_header_nav_item type_index">首页</div>
                            <div className="m_header_nav_item type_search">分类搜索</div>
                            <div className="m_header_nav_item type_shopcart">购物车</div>
                            <div className="m_header_nav_item type_my">我的京东</div>
                        </div>
                    </div>
                    <div id="addressList" >
                        <div className="address_list">
                            {(()=>{
                                return this.state.dizhi.map((item,idx)=>{
                                    
                                    
                                    return(
                                        <div key={idx} className="address">
                                            <ul  onClick={this.gouxuan.bind(this,idx,item)} type="1" className={this.state.moren==idx?"selected":""}>
                                                <li><strong>{item.name}</strong>&nbsp;<strong>{item.tel.slice(0,3)}****{item.tel.slice(7)}</strong></li>
                                                <li> 
                                                    {/* <span className="tag tag_red" style={{color:"e4393c"}}>默认</span> */}
                                                {item.address}</li>
                                                <li className="edit" type="1">编辑</li>
                                            </ul>
                                            <p className="act"  type="1"><span className="del">删除</span></p>
                                        </div>
                                    )
                                })
                            })()}
                            
                        </div>
                    
                        <div className="mod_btns fixed" tag="jd" 
                           
                        > <a onClick={this.xinzeng.bind(this)}
                            style={{
                                display:"block",
                                background:"#e4393c",
                                color:"#fff",
                                flex:"1",
                                width:"100%",
                                height:"46px",
                                lineHeight:"46px",
                                textAlign:"center",
                                fontSize:"16px"
                            }}
                        >新增收货地址</a> </div>
                    </div>
                    <div id="pageEditAddress"  className="address_new" style={{display:"none",transform:"translate(0px, 0px)",paddingBottom:"10px"}}>
                        <p><label ><span className="tit">收货人</span><input id="name" type="text"  placeholder="姓名"/>
                        </label></p>
                        <p className="label_flex"> <label><span className="tit">联系方式</span> <span className="foreign_prefix" id="areaCode" style={{display:"none"}}></span>
                                <input id="mobile"  type="tel" placeholder="手机号码"/></label> </p>
                        
                        <p className="street_detail" id="adinfoP"> <label ><span className="tit">详细地址</span> <textarea placeholder="详细地址需填写楼栋楼层或房间号信息"
                                    id="adinfo"  rows="2"></textarea> <i
                                    className="close" id="info_clear"></i> </label></p>
                        
                        <p className="address_tags" id="adlabelP" > <span className="tit">地址标签</span> <span className="address_tags_tag" value="公司">公司</span>
                            <span className="address_tags_tag" value="家">家</span> <span className="address_tags_tag" value="学校">学校</span> 
                        </p>
                        <div className="fuzzy_search" id="fuzzySearch">
                            <ul className="result_list" id="tenSuggest"></ul>
                        </div>
                        <div className="mod_btns" onClick={this.queren.bind(this)}> <a 
                            style={{
                                display:"block",
                                background:"#e4393c",
                                color:"#fff",
                                flex:"1",
                                width:"100%",
                                height:"46px",
                                lineHeight:"46px",
                                textAlign:"center",
                                fontSize:"16px"
                            }}
                        >确认</a> </div>
                        <div className="mod_btns"  >
                            <a id="ad1" onClick={this.del.bind(this)}
                                style={{
                                    // display:"block",
                                    background:"#e4393c",
                                    color:"#fff",
                                    flex:"1",
                                    width:"100%",
                                    height:"46px",
                                    lineHeight:"46px",
                                    textAlign:"center",
                                    fontSize:"16px"
                                }}
                            >删除收货地址</a>
                        </div>
                    </div>



                    {/* <div id="addressList" style={{display: "none"}}></div>
                    <div id="pageAddAddress" className="address_new" style={{display: "none"}}></div>
                    <div id="pageEditAddress" className="address_new" style={{display: "none"}}></div>
                    <div className="invoice_list" id="invoices" style={{display: "none"}}></div>
                    <div className="promo_list" id="itemPromoPage" style={{display: "none"}}></div>
                    <div id="selectShip" style={{display: "none"}}></div>
                    <div id="pickList" style={{display: "none"}}></div>
                    <div id="shopList" style={{display: "none"}}></div>
                    <div id="jdQuanPage" style={{display: "none"}} className="promo_list"></div>
                    <div id="jdCartPage" style={{display: "none"}} className="promo_list"></div>

                    <div className="mod_address_slide show" id="address_slide" style={{display:"none"}}></div>

                    <div className="promo_list" id="newPromoPage" style={{display: "none"}}></div>
                    <div id="bottomConfirmBar" className="mod_btns fixed" style={{display: "none"}}>
                        <a className="mod_btn bg_1" id="btnBottomConfirmBar">确认</a>
                    </div>

                    <div id="totalPromo3" className="mod_btns fixed" style={{display: "none"}}>
                        <a id="confirmPromot3" className="mod_btn bg_1">确认</a>
                    </div> */}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.huoqu();
        window.addEventListener('scroll', this.xd,true);
    }
    //移除界面监听
    componentWillUnmount() {
        window.removeEventListener('scroll', this.xd,true);
    }
}

// export default Login
export default connect((state) => {
    return state 
}, (dispatch) => {
    return {
        // =====》这是要更改state仓库里的函数《======
        xiangqing(car){
            console.log("运行");
            dispatch({
                // type是更改的方法名字，下面是state中要更改的键和值
                type:"details",
                car:car
            })
        }
    }
})(Login);