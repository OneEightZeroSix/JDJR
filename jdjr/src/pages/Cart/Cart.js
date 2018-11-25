import React, { Component } from 'react'
import $ from  'jquery';

import "../../assets/css/Dindexmin.css";
import { Link } from "react-router-dom";
import cookie from "../../libs/cookie.js";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            style:"none",
            car:[],
            zong:0,
            jianshu:0
        }
    }
    show(){
        console.log(666);
        if(this.state.style=="none"){
            this.setState({
                style:"block"
            })
        }
        if(this.state.style=="block"){
            this.setState({
                style:"none"
            })
        }
    }
    //快捷目录
    // 分类列表
    fenlei(){
        this.setState({
            style:"none"
        })
        window.location.href="http://localhost:3000/#/classify"
    }
    // 购物车列表
    cart(){
        this.setState({
            style:"none"
        })
        window.location.href="http://localhost:3000/#/cart"
       
    }
    // 我的首页
    mine(){
        this.setState({
            style:"none"
        })
        var yhm=cookie.getCookie("yonghuming")||[];
        if(yhm.length==0){
            alert("您还未登入");
            window.location.href="http://localhost:3000/#/login"
        }else{
            window.location.href="http://localhost:3000/#/mine"
        }
        
    }



    //获取该账号下的购物车内容
    huoqu(){
        var yonghuming=cookie.getCookie("yonghuming")||[];
        if(yonghuming.length==0){
            this.props.history.push("login");
            return false;
        }

        $.ajax({
            type:"post",
            data:{
                yhm:yonghuming
            },
            url:"http://localhost:3001/car/huoqu",
            async:true,
            success:(data)=>{
                console.log(data);
                var zong=0;
                data.forEach((item,idx)=>{
                    zong+=item.price*item.jian;
                });
                this.setState({
                    car:data,
                    zong:zong,
                    jianshu:data.length
                })
                
            }
        })

    }


    //增加商品件数
    plus(e){
        var yhm=cookie.getCookie("yonghuming");
        
        // if(lei.length==0){
        //     lei="shouji"
        // }
        var e=e.target.parentElement;
        // var lei=$(e).attr("lei");
        // console.log(lei);

        var put=e.children[1].children[0];
        put.value=Number(put.value)+1;
        //获取价格添加总价
        var jia=$(e).closest(".goods_line");
        jia=jia.find("em").text();
        this.setState({
            zong:this.state.zong+Number(jia)
        })
        //更改数据库的件数
        $.ajax({
            type:"post",
            data:{
                yhm,
                lei:$(e).attr("lei"),
                ID:$(e).attr("index"),
                jian:Number(put.value)
            },
            url:"http://localhost:3001/car/updata",
            async:true,
            success:(data)=>{
                console.log(data);
            }
        })
    }
    //减少商品件数
    jian(e){
        var yhm=cookie.getCookie("yonghuming");

        var e=e.target.parentElement;
        var put=e.children[1].children[0];
        if(put.value>1){
            put.value=Number(put.value)-1;
            //获取价格添加总价
            var jia=$(e).closest(".goods_line");
            jia=jia.find("em").text();
            this.setState({
                zong:this.state.zong-Number(jia)
            })
            //更改数据库的件数
            $.ajax({
                type:"post",
                data:{
                    yhm,
                    lei:$(e).attr("lei"),
                    ID:$(e).attr("index"),
                    jian:Number(put.value)
                },
                url:"http://localhost:3001/car/updata",
                async:true,
                success:(data)=>{
                    console.log(data);
                }
            })
        }
        
        
    }


    //删除商品
    del(e){
        this.setState({
            jianshu:this.state.jianshu-1
        })
        var yhm=cookie.getCookie("yonghuming");
        var e=$(e.target).closest(".section");
        // console.log($(e).closest(".section"));
        var int=$(e).find(".int").text();
        var num=$(e).find(".num").val();
        this.setState({
            zong:this.state.zong-Number(int*num)
        })
        $.ajax({
            type:"post",
            data:{
                yhm,
                lei:$(e).attr("lei"),
                ID:$(e).attr("index")
            },
            url:"http://localhost:3001/car/del",
            async:true,
            success:(data)=>{
                console.log(data);
            }
        })
        $(e).remove();
    }


    //去结算
    jiesuan(){
        if(this.state.zong==0){
            alert("购物车没有商品，前去选购");
            this.props.history.push("sort");
            return false;
        }
        this.props.history.push("order");
    }

    render() {
        return (
            <div >
                <div className="wx_wrap" id="wxWrapCont">
                    <div className="m_header_v2" id="m_header" style={{display:"block"}}>
                        <div className="m_header_bar" style={{position:"fixed",width:"100%",top:"0",left:"0"}}>
                            <Link to={"/classify"}  className="m_header_bar_back"></Link>
                            <div className="m_header_bar_title">购物车</div>
                            <div onClick={this.show.bind(this)} className="m_header_bar_menu"></div>
                        </div>
                        {(()=>{
                            if(this.state.style=="block"){
                                return(
                                    <div className="m_header_nav">
                                        {/* <div className="m_header_nav_item type_index" idx="0">首页</div> */}
                                        <div onClick={this.fenlei.bind(this)} className="m_header_nav_item type_search" idx="1" >分类搜索</div>
                                        <div onClick={this.cart.bind(this)} className="m_header_nav_item type_shopcart cur" idx="2">购物车</div>
                                        <div onClick={this.mine.bind(this)} className="m_header_nav_item type_my" idx="3">我的京东</div>
                                        {/* <div className="m_header_nav_item type_recently" idx="4">浏览记录</div> */}
                                    </div>
                                )
                            }
                        })()}
                        
                    </div>
                    <div className="m_header_v2_mask" style={{display:"none"}}></div>

                    <div style={{display: "none"}} id="nopinLogin"></div>
                    <div className="new_guide_mask" style={{display: "none"}}></div>
                    <div id="c_jdshopcart_showList" className="c_showJs">
                        
                        <div id="listContent">
                            <div id="huangtiao" primary="2" style={{position:"fixed",top:"44px",left:"0",width:"100%",zIndex:"20"}}>
                                <div className="mod_blockTips bg_red " clicknum="0">
                                    <p>购物车中有<span>{this.state.jianshu}</span>件商品</p>
                                </div>
                            </div>
                            <div id="cmdtylist" style={{padding:"80px 0 50px 0"}}>
                                {(()=>{
                                    return this.state.car.map((item,idx)=>{
                                        return(
                                            <div key={idx}  lei={item.lei} index={item.ID}  className="section" id="s_722025" shopid="722025">
                                                <div className="item item_connect" id="p_14433745234" > 
                                                    <div className="goods goods_last " cid="9847_9849_9873"
                                                        isfresh="" num="1"> <img className="image" src={item.imgurl} />
                                                        {/* <p className="image_tag"lowestbuy="0" style={{display: "none"}}></p> */}
                                                        {/* <div className="lower_price" style={{display:"none"}}></div> */}
                                                        <div className="content" ptag="7014.2.4">
                                                            <div className="name"> <span className="proNameJs">{item.name}</span> </div>
                                                            
                                                            <div className="goods_line">
                                                                <p className="price    " >
                                                                    <span className="priceJs">¥<em className="int">{item.price}</em>.00</span>
                                                                </p>
                                                                <div className="num_and_more">
                                                                    <div className="num_wrap" lei={item.lei} index={item.ID}  >
                                                                        <span onClick={this.jian.bind(this)} className="minus disabled"></span>
                                                                        <div className="input_wrap"><input className="num" type="text" defaultValue={item.jian}/></div>
                                                                        <span onClick={this.plus.bind(this)} className="plus "></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="goods_sub_line">
                                                                <div className="m_action" >  
                                                                    <span onClick={this.del.bind(this)} className="m_action_item" >删除</span> 
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                        
                                                        <div className="shopcart_goods_back cjfBackJs" style={{display:"none"}}><i className="icon_warning"></i>该宝贝暂时没有返利</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                })()}
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="fixBar" name="checkgroup" id="fixBarBot">
                        <i className="icon_select" attr-chktye="1" attr-tag="iconChkEve" ptag="7014.3.1">全选</i>
                        <div className="total" id="totalConfirmDiv">
                            <p>总计：<strong id="totalPrice">{this.state.zong}</strong><small><span id="totalBackMoney">总额¥{this.state.zong} 立减¥0.00</span></small></p><div
                                onClick={this.jiesuan.bind(this)} className="buy buyJs disabled" attr-tag="confirmEve">去结算({this.state.jianshu}件)</div>
                        </div>
                        
                        

                    </div>
                   
                </div>
            </div>
            
        )
    }
    componentDidMount() {
        this.huoqu();
    }
}

export default Cart
