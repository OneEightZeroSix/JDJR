import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



import './Home.scss';

import { Carousel } from 'antd';
import '../../assets/antd.css';
import '../../assets/swiper.min.css';
import $ from 'jquery';
import Swiper from 'swiper';
import LocateRoute from '../../libs/locateRoute.js';


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogin:true,
            showGoTop:false,
            isShowSmallCart:false,
            radioButtons1:[{
                title:'优惠券',
                desc:'100-99券',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&amp;height=132',
                href:''
            },{
                title:'领福利',
                desc:'',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&amp;height=132',
                href:''
            },{
                title:'抢钢镚',
                desc:'',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&amp;height=132',
                href: ''
            },{
                title:'白条提额',
                desc:'',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&amp;height=135',
                href:''
            }],
            radioButtons2:[{
                title:'工资理财',
                desc:'',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&amp;height=90',
                href:''
            },{
                title:'众筹',
                desc:'',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
                href:''
            },{
                title:'租房',
                desc:'',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90',
                href:''
            },{
                title:'电影票',
                desc:'',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/479/25/929/9198/5b9243aaE826fc97b/37ef0a7cdfd24238.png?width=120&height=120',
                href:''
            }],
            jingxuan:[{
                title:'长乐盈',
                desc:'180天可质押',
                percent:'5.80%',
                profit:'近1年历史年化投资回报率',
                href:''
            },{
                title:'京智0号',
                desc:'大数据赋能',
                percent:'6.00%',
                profit:'近1月历史年化投资回报率',
                href:''
            },{
                title:'建信养老飞益鑫',
                desc:'1000起投',
                percent:'4.57%',
                profit:'近7日年化收益',
                href:''
            },{
                title:'小白基金',
                desc:'超短期',
                percent:'4.50%',
                profit:'7日年化收益率',
                href:''
            }],
            task:[{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&amp;height=260',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&amp;height=260',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&amp;height=260',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&amp;height=260',
                href:''
            }],
            insurance:[{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&amp;height=260',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&amp;height=260',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&amp;height=260',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&amp;height=260',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&amp;height=260',
                href:''
            }],
            newProduct:[{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t25891/268/2097181035/42657/b8584396/5bc43fd0Nac95eb04.jpg?width=335&amp;height=421',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t26968/61/1274056827/41076/5bdf947c/5bc43fdeN03255b3a.jpg?width=335&amp;height=421',
                href:''
            },{
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t24958/177/2070925579/46278/53db97cc/5bc43fedNc8cfd19d.jpg?width=335&amp;height=421',
                href:''
            }],
            tabs:this.props.tabs,
            homeData:{}
        }
    }

    init(){
        /*数据需要解决*/
        $.ajax({
            url:"/json/Home.json",
            type:"get",
            success:(data)=>{
                this.setState({
                    homeData:data
                })
            }
        })
        /*滚动条*/
        window.onscroll =()=>{
            if(window.scrollY >300){
                this.setState({
                    showGoTop:true
                })
            }else if(window.scrollY <=300){
                this.setState({
                    showGoTop:false
                })
            }
            this.setState({
                isShowSmallCart: false
            })
        }
        
        var mySwiper = new Swiper('.swiper-container',{
            slidesPerView : 2.3,
            freeMode:true,
            spaceBetween : '5%'
        })
    }

    goBack(){
       this.props.history.goBack();
    }
   /* goTop(){
        var scrollToptimer  = setInterval(function () {
            console.log("定时循环回到顶部")
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            var speed = top / 4;
            if (document.body.scrollTop!=0) {
                document.body.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
            if (top == 0) {
                clearInterval(scrollToptimer);
            }
        }, 30);
    }*/
    
    showSmallCart(){
        this.setState({
            isShowSmallCart: !this.state.isShowSmallCart
        })
    }
    
    render() {
        let unlogin=(()=>{
            if(this.state.isLogin){
                return (
                    <div>
                        <img className="icon" src="//m.jr.jd.com/spe/qyy/main/images/zuoce.png" alt="" />
                        <img className="user-img" src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png?width=100&amp;height=100" id="qyy-jr-header-user" alt="" />
                    </div>
                )
            }else{
                return (
                    <span className="jr-header-user-login" id="qyy-jr-header-user-login">注册 | 登录
                        <span></span>
                    </span>
                )
            }
        })
        return (
            <div className="jHome">
                <div className="download-app-seize" style={{marginTop: '45px'}}></div>
                <div className="qyy-body qyy">
                    <input type="hidden" id="qyy-data-input"  />
                    <div id="qyy-page-loading" className="page-loading hide">
                        <div className="page-loading-bg"></div>
                    </div>
                    <div className="wrap-container">
                        <div className="wrap">

                            <div className="section section-36  hasTopPadding hasFloorBottom" style={{background:'#FFFFFF'}}>
                                <div className="row jr-header " style={{marginTop: '45px'}}>
                                    <div className="header" >
                                        {
                                            unlogin()
                                        }
                                    </div>
                                    <img className="jr-logo" src="//m.jr.jd.com/spe/qyy/main/images/jr-logo.png" alt="" />
                                    <div className="download" style={{color:"",background:""}} >APP下载
                                    </div>
                                </div>
                            </div>

                            <div className="section section-0  hasTopPadding noFloorBottom" style={{background:'#131a2d'}}>
                                <div className="row focus">
                                    <div className="swiper-container-focus  swiper-container-horizontal" id="swiper-container-focus-0" data-swiper="[object Object]">
                                        <Carousel autoplay>
                                            <div className="" style={{width:"320px"}}>
                                                <div className="img-wrap bg-none min-height-0">
                                                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t29704/335/448521723/77186/a95d610a/5bf3c35fNfd760375.jpg?width=750&amp;height=320" className="test-lazyload" alt=""  height="150px"/>
                                                </div>
                                                <p className="title" style={{color:""}}></p>
                                                <p className="desc" style={{color:""}}></p>
                                            </div>
                                            <div className=" " style={{width:"320px"}}>
                                                <div className="img-wrap bg-none min-height-0">
                                                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t30379/17/440952842/50755/61e66e7a/5bf3c303Nc1132a28.jpg?width=750&amp;height=320" className="test-lazyload" alt=""  height="150px"/>
                                                </div>
                                                <p className="title" style={{color:""}}></p>
                                                <p className="desc" style={{color:""}}></p>
                                            </div>
                                            <div className=" " style={{width:"320px"}}>
                                                <div className="img-wrap bg-none min-height-0">
                                                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t29704/335/448521723/77186/a95d610a/5bf3c35fNfd760375.jpg?width=750&amp;height=320" className="test-lazyload" alt=""  height="150px"/>
                                                </div>
                                                <p className="title" style={{color:""}}></p>
                                                <p className="desc" style={{color:""}}></p>
                                            </div>
                                            <div className="" style={{width:"320px"}}>
                                                <div className="img-wrap bg-none min-height-0">
                                                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t30379/17/440952842/50755/61e66e7a/5bf3c303Nc1132a28.jpg?width=750&amp;height=320" className="test-lazyload" alt=""  height="150px"/>
                                                </div>
                                                <p className="title" style={{color:""}}></p>
                                                <p className="desc" style={{color:""}}></p>
                                            </div>
                                            <div className="" style={{width:"320px"}}>
                                                <div className="img-wrap bg-none min-height-0">
                                                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t29704/335/448521723/77186/a95d610a/5bf3c35fNfd760375.jpg?width=750&amp;height=320" className="test-lazyload" alt=""  height="150px"/>
                                                </div>
                                                <p className="title" style={{color:""}}></p>
                                                <p className="desc" style={{color:""}}></p>
                                            </div>
                                            <div className="" style={{width:"320px"}}>
                                                <div className="img-wrap bg-none min-height-0">
                                                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t30379/17/440952842/50755/61e66e7a/5bf3c303Nc1132a28.jpg?width=750&amp;height=320" className="test-lazyload" alt=""  height="150px"/>
                                                </div>
                                                <p className="title" style={{color:""}}></p>
                                                <p className="desc" style={{color:""}}></p>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>

                            <div className="section section-7  hasTopPadding noFloorBottom" style={{background:'#FFFFFF'}}>
                                <div className="row menu ">
                                    {(()=>{
                                       /*let arr = {...this.state.home_data}
                                        console.log(arr)
                                        if(this.state.home_data==undefined){
                                            return
                                        }*/
                                        return this.state.radioButtons1.map((item,index)=>{
                                            return (
                                                <div key={index} className="item"  style={{width:'0.251%'}}>
                                                    <div className="img-wrap bg-none min-height-0">
                                                        <img src={item.src} className="icon test-lazyload" alt="" />
                                                    </div>
                                                    <span className="title" style={{color:''}}>{item.title}</span>
                                                    <span className="desc" style={{color:'#ff0000'}}>{item.desc}</span>
                                                </div>
                                            )
                                        })
                                    })()}   
                                    
                                </div>
                            </div>

                            <div className="section section-7 hasPadding hasTopPadding noFloorBottom" style={{background:'#FFFFFF'}}>
                              <div className="row menu ">
                                {(()=>{
                                    return this.state.radioButtons2.map((item,index)=>{
                                        return(
                                            <div key={index} className="item"  style={{width: '0.251%'}}>
                                                <div className="img-wrap bg-none min-height-0">
                                                    <img src={item.src} alt="" /></div>
                                                <span className="title" style={{color:''}}>{item.title}</span>
                                                <span className="desc" style={{color:''}}>{item.desc}</span>
                                            </div>
                                        )
                                    })
                                })()}
                              </div>
                            </div>

                            <div className="section section-126   hasFloorBottom" style={{background:'#FFFFFF'}}>
                                <div className="row row-title">
                                    <div className="com-title center" style={{color:''}} >- 理财精选 -</div>
                                    <div className="com-desc bg-none " style={{color:''}} ></div>
                                </div>
                                <div className="row row-126 licai-sku ">
                                    {(()=>{
                                        return this.state.jingxuan.map((item,index)=>{
                                            return(
                                                <div key={index} className="item"  style={{background:''}}>
                                                    <p className="title">
                                                        <span style={{color:''}}>{item.title}</span>
                                                        <label style={{color:''}}>{item.desc}</label>
                                                    </p>
                                                    <p className="value" style={{color:''}}>{item.percent}</p>
                                                    <p className="desc" style={{color:''}}>{item.profit}</p>
                                                </div>
                                            )
                                        })
                                    })()}
                                </div>
                            </div>

                            <div className="section-102 hasPadding  hasFloorBottom" style={{background:'#FFFFFF'}}>
                                <div className="row row-title">
                                    <div className="com-title center" style={{color:""}} >- 赏金任务 -</div>
                                    <div  className="com-desc " style={{color:""}} >查看更多任务
                                    </div>
                                </div>
                                <div className="row block-slider ImgProduct hasPadding">
                                    <div className="swiper-container " data-swiper="[object Object]">                           
                                        <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                            {(()=>{
                                                return this.state.task.map((item,index)=>{
                                                    return (
                                                        <div key={index} className="swiper-slide " style={{marginRight: "12px"}}>
                                                            <div className="img-wrap bg-none min-height-0">
                                                                <img src={item.src} className="test-lazyload" alt=""  />
                                                            </div>
                                                            <p className="title" style={{color:""}}></p>
                                                            <p className="desc" style={{color:""}}></p>
                                                        </div>
                                                    )
                                                })
                                            })()}   
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section section-102 hasPadding  hasFloorBottom" style={{background:"#FFFFFF"}}>
                                <div className="row row-title">
                                    <div className="com-title center" style={{color:""}}>- 保险保障 -</div>
                                    <div  style={{color: ""}} >
                                    </div>
                                </div>
                                <div className="row block-slider ImgProduct hasPadding">
                                    <div className="swiper-container swiper-container-ImgProduct swiper-container-horizontal swiper-container-free-mode" data-swiper="[object Object]">
                                        <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                            {(()=>{
                                                return this.state.insurance.map((item,index)=>{
                                                    return(
                                                        <div key={index} className="swiper-slide swiper-slide-active" style={{marginRight:"12px"}}>
                                                            <div className="img-wrap bg-none min-height-0">
                                                                <img src={item.src} className="test-lazyload" alt="" ejumpurl="https://sale.jd.com/m/act/ZG3lS5haxmOwd.html?sid=" />
                                                            </div>
                                                            <p className="title" style={{color:""}}></p>
                                                            <p className="desc" style={{color:""}}></p>
                                                        </div>
                                                    )
                                                })
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section section-102 hasPadding  hasFloorBottom" style={{background:"#FFFFFF"}}>
                                <div className="row row-title">
                                    <div className="com-title center" style={{color:""}} >-众筹新品-</div>
                                    <div  className=" com-desc " style={{color:""}} >更多尖货</div>
                                </div>
                                <div className="row block-slider ImgProduct ">
                                    <div className="swiper-container swiper-container-ImgProduct swiper-container-horizontal swiper-container-free-mode" data-swiper="[object Object]">
                                        <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                            {(()=>{
                                                return this.state.newProduct.map((item,index)=>{
                                                    return (
                                                        <div key={index} className="swiper-slide swiper-slide-active"  style={{marginRight:"12px"}}>
                                                            <div className="img-wrap bg-none min-height-0">
                                                                <img src={item.src} className="test-lazyload" alt="" ejumpurl="https://z.m.jd.com/project/details/105162.html?sid="/>
                                                            </div>
                                                            <p className="title" style={{color:""}}></p>
                                                            <p className="desc" style={{color:""}}></p>
                                                        </div> 
                                                    )
                                                })
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section section-43 hasTopPadding hasFloorBottom" style={{background:"#F5F5F5"}}>
                                <div className="row copyright ">
                                    <p style={{color:"",background:"#F5F5F5",textAlign:"center"}} >Copyright © 2004-2018 京东JD.com 版权所有</p>
                                </div>
                                <div className="row copyright ">
                                    <p style={{color:"",background:"#F5F5F5",textAlign:"center"}} >投资有风险，购买需谨慎</p>
                                    <p style={{color:"",background:"#F5F5F5",textAlign:"center"}} >京东金融平台服务协议</p>
                                    <p style={{color:"",background:"#F5F5F5",textAlign:"center"}} >京东金融隐私政策</p>
                                </div>
                            </div>
                            
                            <div className="section section-38  hasTopPadding noFloorBottom" style={{background:'#f3f5f7'}}>
                                <div className="add-bottom" id="qyy-add-bottom">
                                    {(()=>{
                                        return this.state.tabs.map((item,index)=>{
                                            let showDot=(()=>{
                                                if(item.dot){
                                                    return(
                                                       <span className="red-point"></span>
                                                    )    
                                                }else{
                                                    return;
                                                }
                                            })

                                            return (
                                                <Link to={`/${item.href}/`} onClick={this.props.skipTo.bind(this,index)} key={index} className="item" >
                                                    <img src={item.src} alt=""/>
                                                    <p className="blue" style={this.props.tab===index ? {color:'#4668FF'}:{color:'#B1B4BB'}}>{item.title}</p>
                                                    {
                                                        showDot()
                                                    }
                                                </Link>
                                            )
                                        })
                                    })()}
                                </div>
                            </div>
                            <div style={{marginBottom:"50px"}}></div>

                        </div>
                    </div>
                </div>
                <span onClick={this.goTop} className="go-top" id="qyy-go-top"  style={{display:this.state.showGoTop?'block':'none'}}>
                    <img src="//m.jr.jd.com/spe/qyy/main/images/go_top.png" alt=""/>
                </span>
                <div id="m_common_header2" className="m_common_header2">
                    <header className="jd-header">
                        <div className="jd-header-new-bar">
                            <div  onClick={this.goBack.bind(this)} id="m_common_header2_goback" className="jd-header-icon-back J_ping"><span></span></div>
                            <div className="jd-header-new-title">京东金融</div>
                            <div  id="m_common_header2_jdkey" className="jd-header-icon-new-shortcut J_ping">
                                <span onClick={this.showSmallCart.bind(this)}></span>
                            </div>
                        </div>
                    </header>
                </div>

                <div id="header-shortcut-ul">
                    <ul id="m_common_header_shortcut" className="jd-header-vertical-shortcut" style={{display:this.state.isShowSmallCart? 'block':'none'}}>
                        <li id="m_common_header_shortcut_m_index">
                            <Link to={`/home/`} className="J_ping" ><span className="shortcut-index" style={{background:"url(images/yy1.png) no-repeat center center",backgroundSize:"15px"}}></span><strong>首页</strong>
                            </Link>
                        </li>
                        <li id="m_common_header_shortcut_category_search">
                            <Link to={`/classify/`} className="J_ping" ><span className="shortcut-search" style={{background:"url(images/yy2.png) no-repeat center center",backgroundSize:"15px"}}></span><strong>分类搜索</strong>
                            </Link>
                        </li>
                        <li id="m_common_header_shortcut_p_cart">
                            <Link to={`/cart/`} className="J_ping" ><span className="shortcut-cart" style={{background:"url(images/yy3.png) no-repeat center center",backgroundSize:"15px"}}></span><strong>购物车</strong>
                            </Link>
                        </li>
                        <li id="m_common_header_shortcut_h_home">
                            <Link to={`/mine/`} className="J_ping"  ><span className="shortcut-home" style={{background:"url(images/yy4.png) no-repeat center center",backgroundSize:"15px"}}></span><strong>我的京东</strong>
                            </Link>
                        </li>
                        <li id="m_common_header_shortcut_h_footprint">
                            <Link to={`/home/`} className="J_ping" ><span className="shortcut-footprint" style={{background:"url(images/yy5.png) no-repeat center center",backgroundSize:" 15px"}}></span><strong>浏览记录</strong>
                            </Link>
                        </li>
                    </ul>
                </div>
                        
            </div>
        );
    }
    componentDidMount (){
        this.init();
        LocateRoute.locateRoute(this);
    }
}

export default connect((state)=>{
    return state;
},(dispatch)=>{
    return {
        skipTo(index){
            dispatch({
                type:"skipTo",
                tab:index
            })

        }
    }
})(Home);