import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



import './Home.scss';




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
        }
    }

    init(){
        let self=this;
        window.onscroll = function(){
            if(window.scrollY >300){
                self.setState({
                    showGoTop:true
                })
            }else if(window.scrollY <=300){
                self.setState({
                    showGoTop:false
                })
            }
        }

    }

    goTop(){
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
    }

    showSmallCart(){
        this.setState({
            isShowSmallCart: this.state.isShowSmallCart
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
                                    <div className="swiper-container swiper-container-focus " id="swiper-container-focus-0">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide" >
                                                <div className="img-wrap bg-none min-height-0">
                                                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t29311/7/144758099/82184/778eeafd/5be94f53N6885ac13.jpg?width=750&amp;height=320" className="test-lazyload" alt=""/>
                                                </div>
                                                <p className="title" style={{color:""}}></p>
                                                <p className="desc" style={{color:""}}></p>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination swiper-pagination-0">
                                        </div>
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

                            <div className="section section-102 hasPadding  hasFloorBottom" style={{background:'#FFFFFF'}}>
                                <div className="row row-title">
                                    <div className="com-title center" style={{color:""}} >- 赏金任务 -</div>
                                    <div  className="com-desc " style={{color:""}} >查看更多任务
                                    </div>
                                </div>
                                <div className="row block-slider ImgProduct hasPadding">
                                    <div className="swiper-container swiper-container-ImgProduct swiper-container-horizontal swiper-container-free-mode" data-swiper="[object Object]">                           
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
                                                <Link to={`/${item.href}/`} onClick={this.props.skipTo.bind(this,item,index)} key={index} className="item" >
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
                            <div  id="m_common_header2_goback" className="jd-header-icon-back J_ping"><span></span></div>
                            <div className="jd-header-new-title">京东金融</div>
                            <div  id="m_common_header2_jdkey" className="jd-header-icon-new-shortcut J_ping">
                                <span onClick={this.showSmallCart.bind(this)}></span>
                            </div>
                        </div>
                    </header>
                </div>

                 <div id="header-shortcut-ul">
                    <ul id="m_common_header_shortcut" className="jd-header-vertical-shortcut" style={{display:"block"}}>
                        <li id="m_common_header_shortcut_m_index"><a className="J_ping" report-eventid="MCommonHead_home" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://m.jd.com"><span className="shortcut-index" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAAG2bMCoAAAAAXNSR0IArs4c6QAAA2hJREFUWAnNmD1IVmEUx30tizAUDKPACBIcbWqwtsB2Q9obmgJdCxsDA1sFQWiMpqZaQ1tToiV0iQbBFoWgoC+q3/96z+O53x+vL3Xg9JyP//9/nue993ov9fUV2R/MeoRzFuevQmND+qdjECUWh5Xa25AooDAcr1l0QJqWrVEjkQSoCwCs4fsqZcAUxjPFJPlG6BNsuV4iTPQCw420mq3+F1o0qU6ncx+A5W/In1svrACSv17ouMDGsO7ja651EFKcM5A1yYd9rT9OtthH2K/ApJ9VUx8bN4F6K4xmvyOE6K7SLBvh43BdrWirwBb3G7NqjU4K6ybAKwJzUH9VorxKRGOnNDplU2XEzBYhnzIBiNP6zb2pZn1hC8Vp7sbAzUJQqgF+M+bshhaFD/i3UGgZSENaLek1aKhHVgOagKR5mYvi0YB3YsIiq1y24zGF8QH28JYWMF1L53kYv8MnHiCy8jwzYYeJuHnYTA3SLfyr1kyzSQEB3U7emt8SsMecwqw2QD7ramO1NgVhJSb9Yj3mScpx1WUrvpeJAejulj3LNF1B/QiV90TR8A/3hOMVhnAmYkEt0xGQYCMuHj7IhRLZBlz747FhN+h8Fla/guC8NlSf8c+Qbbfpef757PogpWJMXddkZ+tlE8NLXQS9WDxYNfJVfA8/g9/Jw6Rr0S0COGGxWKilczV8rfSYQaVmcKRix/1Qv2Vf93EZxosNQHqAn/TkVPwolX8nf5iqtUvZpb6xnmq3Oab6UDvlliwG6vtzAf+Je1slOY9r9SbcAn6k1zuxfcRn8D3c22uSCwlgnKiOq+9N/Jk8fOMaQpP4e69O/BG/2kQM/LWYxxJMupNNdPQQj+IvgsRB8IXldiOhArB0cOl507zRXAqNAXwJ/42bKX6Mn8gldVmUbqyfnql96EmP/txtk3h7SXK2y9mN6JqHa663bV3GQfwSfrqRYo/A2ke8n8EejeiRLLu+iN/V2qMRCdmyeYn3u1iAw1dY5j2ekD2apGyefxc2noawDncdv4z7p/oH+Tv8FQcMhyXvznQSszIlMMuGq1iXK3QCPY1rfVmlaGJ5l7+qb9wyXO9exja9i/W/3lzeA/GJw57TgfnJl1j0Zd6VoXOvQEBf/GaaW24IjeD2X0aE1ZanWM1KIDRvJK3zF+VnwY9g2V+mAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>首页</strong></a></li>
                        <li id="m_common_header_shortcut_category_search"><a className="J_ping" report-eventid="MCommonHead_CategorySearch" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://so.m.jd.com/category/all.html"><span className="shortcut-search" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAFp3oPPAAAAAXNSR0IArs4c6QAAAzJJREFUWAnVljtrVFEQx3dN8IVY+UphUmgjVkq00VLER2LrB/CDCEISQcTCTrBTCYpgtLC3UAv1A5hYWEaEKFlNNmZdf//rmbOzd+9rV1l0YPbM4z//M3vPnXtvreak3W5vOrdWI9BWQOsWl/kSbFs7qQTJz6wME6XrhiF4HHvN/Lh6xCTR6HcQIoyeDPy4U/AbxFSu3DF0RXaXEOxiSXx+ZmRIDI15BP2BvrNY4Qqwt2tVkHiDvojVOCazAeC3jbYv6FSHKAwv/bEovDNWFBna2/LRlhFkxiVfE3uluMVyVzBX0d25AEsAqtf5KaOcs4LCFZ4VkWVIIxaSjOfrgMkfxdc5S5I7JxYFg7juJMnR7PPtADVAI3UkTWK+WLCb6YOzvK0nZYDN6+hEAE52DYHYgyT3lbER02BkSecaGXiQNTC/VW3uf69KLDKwvY+XqgQ9OAizjj90XXmJc9GzQToA5U30K/oZrXYnGwkFl9A8OZfgyDZTiKYjmAi5RYvZSvx9yI3r3lkPji3rDqhYy/z0Sm4T/ZmOd/liQKa6gs4hNy2AC/WaAiDbezO/I+R2CFA2U0KfySOxXOHdq10Athjw0Swi0rpe9bJOJgCNAM46nSVyqj+k08k9YgDKX0Dz5KwwhUecAMIPLNdRPUqX0WuoZN5j+rYheJDQcDiFF7aMWSRgPpXhCvNwXA5EhbjSJCS5N2NpsQfoLaip3eqDfdobulmKB6ic8U/rOzvwj8bR52gVeQJI0/B3BdLz6IbrQM+qeyG+h3UU3Ydqgu6jypuobjp2hLNqmZJ1NRYFA/yCq1nC3p/GZPng9qL2pBbFsyxc5RgEc2IJMtBYU/vICFj7e6n5TinWW9FkzOeq2hQfMALW5bJHbhGvf5YXv8/yWfz+ld5EeVR3XeK2s/sxbznwHWf3b3Jp/Sgv6rJXYREO/YCaPK5SV4qBTR9HfrRb+PPoFDqGbkM12vqyeIimR/ti3ITkwKMdSTDgmUCfolXlO8BxzzF0mwZOpbo9PfQm/IY0cxD95pq64vNDt2lEH5YfXUM3/JwPtSG+OddQvSztVXB4qA38V5vpy0pv413/QNeNXxjWvZIdtAPeAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>分类搜索</strong></a></li>
                        <li id="m_common_header_shortcut_p_cart"><a className="J_ping" report-eventid="MCommonHead_Cart" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://p.m.jd.com/cart/cart.action"><span className="shortcut-cart" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAF9MBMNAAAAAXNSR0IArs4c6QAAAvNJREFUWAnNWDtOHEEQ3TWWFwksITniADiFBB/AOaEtgSUOQYhDG0JSDoGELYGPQL6k+AAOWGmDxRKgxetXreqe6u6q+e14cUtDd1W9eq96aqYZ6M1ms+NeMvpkIzBL/LnzJSO2LPSEqSYqnxNiRC7m1cE9zUrqY7zwCDL8OsxIy3YWgnKh1s4AigUZ+H7KxGT9NrFLTKLFeCyBFCFCFpa+8jW6+oA/oiRlDF06Aps6j2txvBGAjzQw/NPIT3KRgw3v9w+Lc3unltDOlzJGNoz0lmy1k1GySAkjPBtYHztP/R9fIlrkfaXcyFnTYM39DM6BRttGzinlZWTkYMIbNWg4OedUDSPomqQGFSfw+0SohAoX4o8EajCqjw2QjZlwu5AqVlbcv6YFct4VlB64EpqqSy8R7BMZ4q88Rj1XfbDuDNLWD3OmAbJNXFHLYcpbQOGycR+agO1dkwLQjd4KUdUgkAnnB7+GwIDuYdUA/ofPCTPvIZwqIVCx4LzbCAbnDQUiZw2DyQ4jKJyNO4qcVSZbTcmyjkYAxQDRZyJTQuFYqt1R8Iw8mdZNEgkdVRVj5xuYl7GLLVJpMd5bZE1/ydT73FDVmjqxzW3e6ljLrYpHOQBPmExteVU8JXvHZFZlapwOR/qajZ/egpq+hV7jRb8vXM+8QsHnvFOaPj1XOdZLdSYKavKCibT5l/nfDeDE3Rpg+o1rCdcfXCtpa4EpexyQMve4Mxkg/g2XHwtpLcTcocui+iccVQzArq8M83dzFx0GoOMOcdbdMKkBWMY1ZeAT2Sa4gwD43Tcq611UUgK4sNZCa8iF0aT/opEVA7QnEv5Za6kYoTOUNZhrJCyktdC5FMXlf2lZFSJJtnbPwrX1g39DFDaSPNYhLDHyQP4oAx2tDwTPiVj31ENYArArekvpwI3+iyAxHa2fwLOGw94+fDsS6oSm8s6lKriT6/DtsP8CO/2VYsrsefNNbhBf4UrHlZmQBJDYKL/OC5FILM78r9v6Fx346V9Ef2tUAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>购物车</strong></a></li>
                        <li id="m_common_header_shortcut_h_home"><a className="J_ping" report-eventid="MCommonHead_MYJD" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://home.m.jd.com"><span className="shortcut-home" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAjCAYAAAFgNSO1AAAAAXNSR0IArs4c6QAAA8VJREFUWAm9mF9ojlEcx/duM2PZFnZjqV0oRSLZFe3CBVfcTdxQUtxYcYXQ8ifKJZKiGCEXXGBlKDUpiuRKLS2WEuVPW2hmr8/v2Tnv+zvPc877Ps/el199d35/vr/vOc/7vOect9XUGMvn89esH40k1jgJHVCcLMQET22An68BgzaRGCmOJJKSiFptxQlM9aAqtlnfGX1decugWFyzTcpIIfGkCSVDbJRCzE5asZwh/cnlcnU2qUcaFxOv1DmZXlR/gW1OgaDeJigex29FWcgzQB4/mtFyolEKOkH4WMe1Okjlo3ACnBUyYzS1t5Hid+BYgijVRHJKuZgPkWyjrad5mNW2yTui1CdqAWvxNpH0ziwi1NrlxfiM2jcoD0KiTh5ijxF08jqgvq8cR/OjPUbDIyepAhHDgnVFLbo03Ija/H9ai8wSHr27Vf8WH5V6HRg0vOBubjeEAZ9IKEdPrekbL3BILDLJjkIyo0N/tC2iNoJjQPZyRYbGWFkBSJvAMBgHt8Ccsk1xAk0zQcj64/ySsVKZrYnke03tss4HfciXTEPyDKSL2hWpBwV0wQgN6VzcN5zN8bz3IIB0P070xO49ACEktt7THE+9iCcSMY9gz7rKPzNRN5+JDKG32ZdYRSiBiO9ytXM8DPUl8nTst10lxp/UmhPNOgFBto3YK9Cga9Ynv0EIxo7avDPaKmOHUwgE8O6ZnnMOhaS9Yb2rccgqoC/aDYzLojROFxBL/PRRfUGXvh/SbMUm8SeC7DIFeltEDOuy36nuMj0ly1Na+eEczigXcfZDT8mj0UO4XKXSuzRvBe9BOfsMQS780BmQftJSTJkA3AXaPhAcACtAM2gCS8AeMAS0PSNoLDXHtGqIyk1rN5xM6N9MHnW4O6VBWelffR6NYApR+cn7VYl3BsmBAr0LwYTRkHFegJotjdB2IyrD9WzdRTa9p5TO4WIl7KX5oqa7f8Nz2Iq+r6qjydPKdTOmnrrS1yqH4AK74opHxJaC32qBlWyItRUvKC7AwupBv1qguFmOkufwm+K6VYkRngv2gjcgq72j4RCo6uvsRPCtZyVfyMn1vAOsAm2gAcinKw8hh7LcIhfARxA3ya2b1qdGY29MbZRYDlO94zJr098NPgFt5wnKnxqQNgLZTdYGcJxfmJlX5GlAUz7hq3YSM+7yUKdSEG4q8gj+/CC5SgXmmAVeq3mf4Ltvh8QdRbhYpblTyzD3ETX/y0Ijyej/E6Z4u1D4zw7zn1ELPB1NT8Ke/nIhp/s3xT9YOHPXATkFrNX+BSB8ooU9mPUcAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>我的京东</strong></a></li>
                        <li id="m_common_header_shortcut_h_footprint"><a className="J_ping" report-eventid="MCommonHead_FootPrint" report-eventparam="https://active.jd.com/forever/saveMoney/1.0.0/#/indexPage" href="https://home.m.jd.com/myJd/history/wareHistory.action?functionId=liulanjilu"><span className="shortcut-footprint" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAEDGXMMAAAAAXNSR0IArs4c6QAABMZJREFUWAmlmF+oFVUUxu+RMMoe0ohSQS4ZmBAU9P9BTAkFq5eghKDo3XpM0CL6A2VZcoUEIYgIIgp6sfIhIuuhMiJ7KpMsiEhvD964GZWWnn7fPnvtWXvPPnPn3hZ8Z6/9fd9aM3NmZs+cMzERYzgcnrB8kRKInQy/xHyoUeSdISk/EEJVyTdzv4HAQihuAc82tphJsd0YbRrBtrAj2XGdkFUhshyT0UQMK400s83DWCNrnJnTvnSZpL2nD2JgleuYHNCEcRdYHAT/ARkimpTLGI44+SDOSYmmd0mPgNBNPDETzCTa5HmrJN8N0rdrppyAxfOpFSUT5MUZOTI+nHGYPgZZR6bTmUmTiikU2RmvFWyFXFcT1OwwOJt1ZaLD93HOqh0ZbgLm+qJDmCeNsAeiloYkFgmGxUBnbJckxikwA6qnewtCV8xaf2eaMi6MUUiHlolxgmd59H1f07Wbg2i4p2pwJL7roneVo5sUcWU0aPgWjO6BxpKy6DuYiHEJxkXR/HjNE7Xsyqv5dKiro3ltzRC1z2taxmHcFs3ZqYVbE/nOk1I2W0bRr7HQhjcyk5/g0EWpCy3dE+TZxef9rRxzWEYYLUIjJmoawopszhiuauPDbexEpWPvJ+cLnq4mYZlMBpfQxFZEHaqge2tKe/IYsAjfPBNdM0+DQ+A78A7Y4PqpTg1CeD7ksD9FbdzwkIyIustDhEL7gAmLEuMrxtkINwnOAMVu47MR4ZEgD4dbMqGY4LGz1l5CEf9Qk6KmOpWPeLslQs5KaQkVQj5FS4K7PyjD4astsSDw6Yy1m8gHf1xijPuK2jRFf0meRJQJ2q0yxPi61DVHu1d6Tcs4PFrtqkZoWzYvUlH7NDWtTjdpK1semXCFdzW5uVXaELcrHQwGZxuqkulQiOpSOJKaQ+3aE7WeLPvT4Hjk1pdaa475YNyi7qe3wFdxrmF/q2AcgflJV6j0NLim6kfYCc6DMrR06m05C7j0FuEKsiUTXouWLWK6aZVnT5CsqSYYWm8gcGVkqyairQjely29fTzlzuhE31iSlXnpmcTzPDgZoXwS+HjdT2Je4xobR6CXvPJJ5o9YWnpENpULz+i3128g5s1rmTYI7Pms06DcHq+XkL8Iyoc91Nj4DeU5cGW523Dp+eWqZ8a+cakBxm0ML5fNmH8DPgQ/gz/BX+BysBrcAMrTCjWxj5Uk/A6gry7kF8CDEgidvu0hKz8wLwXTwEIPmNtK31xzataCH6wJo+7YO+aqy3QKvnQNXsvEBUzotdn1U3p3rzYYlxSF1/cqnMNEz0ddX92F/YKiT1zhR+Sd11afrvS4ANirkdpv7lOnC1dvdEdU4eJH8geA1qYFBbV+gd07ryYUXwreBLX4DLL+Q2nMVvDbDwv1OzrG1o+mwSZwWJ1cbOpXHZaKja7u7751nT4avu+aPtNpdiI1N7k6pcuc3PlO5X1l7h8Px0qxY77GabMsgqP/XRw5r5Sj2eqO7nfyXhc0Pv14P+pq98xrwzUzzZ5wDT+oeUoO/1XglKv7ovQsaE7Dq11TpXoFvKJsBqdHyg6gb8/HU6X3f83pvAIc81uYI/8HfTvoXDw7xT57zAYuxHcXuBZcBv4F0yA82blIz5D3iv8AygYvrfqZyYcAAAAASUVORK5CYII=) no-repeat center center",backgroundSize:" 15px"}}></span><strong>浏览记录</strong></a></li>
                    </ul>
                </div>
                        
            </div>
        );
    }
    componentDidMount (){
        this.init()
    }
}

export default connect((state)=>{
    return state;
},(dispatch)=>{
    return {
        skipTo(item,index){
            dispatch({
                type:"skipTo",
                tab:index
            })

        }
    }
})(Home);