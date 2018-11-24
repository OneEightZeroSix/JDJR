import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";


import './Makemoney.scss';


class Makemoney extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            isShowSmallCart:false,
            rowMenu:[{
                title:"领红包",
                desc:"",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t28189/232/289098066/5076/dfe2d74f/5bee6bb4N4ec4cede.png?width=90&amp;height=90",
                href:""
            },{
                title:"领福利",
                desc:"",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t27334/12/1829630702/5159/f8133cd6/5bee6bbdN8606cfbb.png?width=90&amp;height=90",
                href:"",
            },{
                title:"领券",
                desc:"",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t27796/46/1836066448/4169/de69ccb0/5bee6bc3N92ca0e60.png?width=90&amp;height=90",
                href:""
            },{
                title:"支付抽奖",
                desc:"100-99",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t27850/30/1789047580/4856/13f8bcb9/5bee6bcbN996fb433.png?width=90&amp;height=90",
                href:"",
            },{
                title:"全部",
                desc:"",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&amp;height=90",
                href:""
            }],
            sliderList:[{
                title:"签到送京豆",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t25207/99/1104294713/6571/69cf0ca4/5b8905b4Nfba31901.jpg?width=160&amp;height=160",
                href:""
            },{
                title:"杜比5.1专业电竞无线耳机",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/395/30/9751/14692/5bacab7dEf4796ea6/3e8649e7b8398c25.jpg?width=250&amp;height=250",
                href:""
            },{
                title:"咕咚智能跑鞋42k",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/2446/15/9502/16963/5bacab92Eeb234107/73ca127159fa9921.jpg?width=250&amp;height=250",
                href:""
            },{
                title:"智能多功能拓展坞",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/395/30/9751/14692/5bacab7dEf4796ea6/3e8649e7b8398c25.jpg?width=250&amp;height=250",
                href:""
            },{
                title:"大象Watch 5智能手表",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/1797/20/11779/18475/5bd12908E697213ba/8bf97905df11ddc1.jpg?width=250&amp;height=250",
                href:""
            }],
            smallGoldStore:[{
                title:"月月盈",
                label:"金融专享",
                subtitle:"4.30",
                desc:"近七日年化收益率",
                href:""
            },{
                title:"周期盈",
                label:"金融专享",
                subtitle:"3.87",
                desc:"近七日年化收益率",
                href:""
            },{
                title:"五年盈",
                label:"金融专享",
                subtitle:"6.00",
                desc:"历史年化投资回报率",
                href:""
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
            whiteBar:[{
                title:"白条",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&amp;height=56",
                href:""
            },{
                 title:"还款",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&amp;height=56",
                href:""
            },{
                title:"1元抢券",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&amp;height=56",
                href:""
            },{
                title:"小白卡",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&amp;height=56",
                href:""
            },{
                title:"金条",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&amp;height=56",
                href:""
            },{
                title:"校园",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&amp;height=56",
                href:""
            }],
            recommand:[{
                title:"车险",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&amp;height=56",
                href:""
            },{
                title:"人寿",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&amp;height=56",
                href:""
            },{
                title:"意外",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&amp;height=56",
                href:""
            },{
                title:"财产",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&amp;height=56",
                href:""
            },{
                title:"健康",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&amp;height=56",
                href:""
            },{
                title:"旅行",
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&amp;height=56",
                href:""
            }],
            insurance:[{
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/4348/19/6052/23261/5ba1b654E348ecfa8/6db1f6144439c704.jpg?width=210&amp;height=260",
                href:""
            },{
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/9564/10/6914/11310/5be294d8Eb5605c48/ed7b018719b1b4bb.jpg?width=210&amp;height=260",
                href:""
            },{
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/1788/16/6042/22234/5ba1b66bE0048bd22/0ed4acf833baf2bf.jpg?width=210&amp;height=260",
                href:""
            },{
                 src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/2161/9/6167/26342/5ba1b68cE96d330a6/0925fa33c082ba75.jpg?width=210&amp;height=260",
                href:""
            }],
            special:[{
                title:"黑头祛无踪 微晶美肤仪",
                price:"139.00",
                percent:"0%",
                src:"https://img30.360buyimg.com/cf/jfs/t28471/170/13503196/29082/4354edd2/5be5465cN116b3e4d.jpg!q70.dpg",
                href:"",
                id:""
            },{
                title:"迪洛可智能门锁二代",
                price:"49.00",
                percent:"0%",
                src:"https://img30.360buyimg.com/cf/jfs/t26188/160/1504155331/39261/5ca41d1f/5be4d7beN48ced950.jpg!q70.dpg",
                href:"",
                id:""
            },{
                title:"琴料手串，可以盘玩的琴瑟之韵",
                price:"68.00",
                percent:"0%",
                src:"https://img30.360buyimg.com/cf/jfs/t27961/344/15603947/31556/9a09331e/5be55814N45265d27.jpg!q70.dpg",
                href:"",
                id:""
            },{
                title:"火灵龙智慧护眼光学灯",
                price:"499.00",
                percent:"0%",
                src:"https://img30.360buyimg.com/cf/jfs/t30853/253/67379984/13546/fc2c3d56/5be6a205Nc8d979a2.jpg!q70.dpg",
                href:"",
                id:""
            },{
                title:"手势控制升降 智能办公书桌",
                price:"699.00",
                percent:"0%",
                src:"https://img30.360buyimg.com/cf/jfs/t1/9985/2/6187/57705/5be00f20E3982ef76/59b921be6a2771a0.jpg!q70.dpg",
                href:"",
                id:""
            },{
                title:"激光投影挂钟 极简百搭设计",
                price:"179.00",
                percent:"0%",
                src:"https://img30.360buyimg.com/cf/jfs/t28282/212/169931242/55986/5e62fcc8/5bea3eedN64fd3853.jpg!q70.dpg",
                href:"",
                id:""
            },{
                title:"智能睡眠监测毯",
                price:"699.00",
                percent:"0%",
                src:"https://img30.360buyimg.com/cf/jfs/t27685/355/1810953405/43382/62cf6438/5bee26beNc2dc5f87.jpg!q70.dpg",
                href:"",
                id:""
            },{
                title:"户外防身 超亮狼牙棒手电筒",
                price:"499.00",
                percent:"0%",
                src:"https://img30.360buyimg.com/cf/jfs/t1/9635/38/4040/56328/5bd92066E05eaba75/6aa12866cbb39667.jpg!q70.dpg",
                href:"",
                id:""
            }],
            tabs:this.props.tabs
        }
    }
    
    init(){
        console.log("555");
    }
    showSmallCart(){
        this.setState({
            isShowSmallCart: !this.state.isShowSmallCart
        })
    }

    goBack(){
       this.props.history.goBack();
    }

    render() {
        return (
            <div className="jMakemoney">
                <div id="m_common_header" style={{width:"100%",minHeight:"45px",position:"fixed",top:"0",left:"0",zIndex:"100000000"}}>
                    <header className="jd-header">
                        <div className="jd-header-new-bar">
                            <div  onClick={this.goBack.bind(this)}  id="m_common_header_goback" className="jd-header-icon-back J_ping"><span></span></div>
                            <div className="jd-header-new-title" >赚钱</div>
                            <div id="m_common_header_jdkey" className="jd-header-icon-new-shortcut J_ping">
                                <span onClick={this.showSmallCart.bind(this)}></span>
                            </div>
                        </div>
                    </header>
                </div>
                <aside id="page-loading" className="page-loading hide">
                  <img src="https://m.jr.jd.com/statics/pageLoading/loading.svg" />
                </aside>
                <div id="main">
                    <div  className="hzq-wrap" id="hzq-wrap">
                        <div className="go-top" id="qyy-go-top" style={{display: "block"}}>
                            <img src="//m.jr.jd.com/spe/qyy/main/images/go_top.png" alt="" />
                        </div>
                        <div className="hzq" style={{marginTop: "45px"}}>
                            <div className="floor mb0" style={{background: "rgb(255, 255, 255)", marginBottom:"0px"}}>
                                <div></div>
                            </div>
                            <div className="floor" style={{background:" rgb(255, 255, 255)", marginBottom:"0px"}}></div>
                            
                            <div className="floor" style={{background:"rgb(255, 255, 255)", marginBottom: "0px"}}>
                                <div className="row focus ">
                                    <div className="slider my-carousel am-carousel" style={{position:"relative",display:"block", width:"100%", height:"auto", boxSizing:"border-box",visibility: "visible"}}>
                                        <div className="slider-frame" style={{position: "relative", display: "block", overflow: "hidden", height:"auto", margin:"0px", padding:"0px", transform:"translate3d(0px, 0px, 0px)", boxSizing:"border-box"}}>

                                            <ul className=" slider-list" style={{transform:"translate3d(0px, 0px, 0px)", position:"relative", display:"block", margin:"0px", padding:"0px", height:" 171px", width:"1280px", cursor:"inherit",boxSizing:"border-box"}}>

                                                 <li><img src="https://img12.360buyimg.com/jrpmobile/jfs/t26851/75/1958198114/52368/e8950ec4/5bf2a29fN2ac94c09.jpg?width=750&height=400" width="25%" /></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="row assets ">
                                    <div className="assets-wrap">
                                        <div className="member">
                                            <div className="card fresher" clstag="pageclick|keycount|hzq2017|huiyuan">新手</div>
                                        </div>
                                        <div className="gangbeng" clstag="pageclick|keycount|Qing_1176_4006|6019_28140|null">
                                            <div className="btn">签到</div>
                                            <img className="hide" src="https://img12.360buyimg.com/jrpmobile/jfs/t1/3664/15/13737/29879/5bd95502E4e1b2e37/1f7b99652c0e30eb.jpg?width=750&amp;height=160" alt="" />
                                        </div>
                                        <div className="main">
                                            <ul className="list">
                                                <li className="item" clstag="pageclick|keycount|Qing_1176_4006|6019_28139|null">
                                                    <p className="num">0</p>
                                                    <p className="title">钢镚</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="floor" style={{background:"rgb(255, 255, 255)",marginBottom:"0px"}}>
                                <div className="row menu ">

                                    {(()=>{
                                        return this.state.rowMenu.map((item,index)=>{
                                            let dot =(()=>{
                                                if(item.desc.length!==0){
                                                    return (
                                                        <span className="label">{item.desc}</span>
                                                    )
                                                }
                                                
                                            })
                                            return (
                                                <div key={index} className="item" clstag="pageclick|keycount|Qing_1176_4007|6028_28158|null">
                                                    <div className="img-wrap"><img className="icon imgLazyLoad"  src={item.src}/>
                                                        {
                                                            dot()
                                                        }
                                                    </div>
                                                    <p className="title">{item.title}</p>
                                                </div> 
                                            )
                                        })
                                    })()}
                                    
                                    
                                </div>
                                <div className="row lctj bottomMargin">
                                    <div className="wrap">
                                        <p className="title">6.00
                                            <span className="per">%</span></p>
                                        <p className="desc">历史年化收益率</p>
                                        <p className="btn" clstag="pageclick|keycount|Qing_1176_4007|6030_28162|null">立即购买</p>
                                    </div>
                                </div>
                                <div className="row zctj bottomMargin">
                                    <div className="wrap" style={{position:"relative", display:"block", width:"100%", height:"auto",boxSizing:"border-box",visibility:"visible"}}>
                                        <div className="" style={{position:"relative",display:"block", overflow: "hidden", height:"100px", margin:"0px", padding:"0px", transform:"translate3d(0px, 0px, 0px)", boxSizing:"border-box"}}>
                                            <ul className="" style={{transform:"translate3d(0px, 0px, 0px)", position:"relative", display:"block", margin:"0px", padding:"0px", height: "500px", width:"auto", cursor:"inherit", boxSizing:"border-box"}}>
                                               
                                                {(()=>{
                                                    return this.state.sliderList.map((item,index)=>{
                                                        return(
                                                            <div key={index}>
                                                            <li  className="" style={{position:"absolute", left:"0px", top:"0px",display:"block", listStyleType:"none", verticalAlign:"top", width:"100%", height:"auto", boxSizing:"border-box", margin:"0px auto"}}>
                                                                <div className="v-item item" clstag="pageclick|keycount|Qing_1176_4007|6031_28163|null"><img className="img" src={item.src} />
                                                                    <p className="title">{item.title}</p>
                                                                </div>
                                                            </li>
                                                            </div>
                                                        )
                                                    })
                                                })()}
                                               
                                            </ul>
                                        </div>
                                    </div>}
                                    <div className="fixed">
                                        <span className="desc">为您推荐</span>
                                        <img className="btn imgLazyLoad"  alt="" src="src/static/images/weinituijianxiayibu.png" />
                                    </div>
                                </div>
                            </div>

                            <div className="floor" style={{background:"rgb(255, 255, 255)",marginBottom:"10px"}}></div>
                            
                            <div className="floor" style={{background:"rgb(255, 255, 255)", marginBottom:"10px"}}>
                                <div className="row floor-title">
                                    <div className="title">小金库</div>
                                    <div className="subtitle">前往APP查看更多理财</div>
                                </div>
                                <div className="row xjk ">
                                    <div className="no-account" data-clstag="pageclick|keycount|hzq2017|xiaojinku">
                                        <p className="benifit">
                                            3.2630
                                            <span className="per">%</span></p>
                                        <p className="title">七日年化收益</p>
                                        <p className="desc">支付/缴费/优质理财/大额理财</p>
                                        <div className="btn">开启送礼包</div>
                                    </div>
                                </div>
                                <div className="row product ">
                                    <div className="group-title">
                                        <div className="title">稳健灵活 小白精选</div>
                                    </div>
                                    <div className="swiper-container swiper-container-horizontal swiper-container-free-mode" data-swiper="[object Object]">
                                        <div className="swiper-wrapper" style={{transform:"translate3d(0px, 0px, 0px)"}}>
                                            
                                            
                                            {(()=>{
                                                return this.state.smallGoldStore.map((item,index)=>{
                                                    return (
                                                        <div key={index} className="swiper-slide " style={{marginRight:"8px"}}>
                                                            <p className="title">{item.title}</p>
                                                            <p className="label">{item.label}</p>
                                                            <p className="subtitle">{item.subtitle}
                                                                <span className="per">%</span></p>
                                                            <p className="desc">{item.desc}</p>
                                                        </div>
                                                    )
                                                })
                                            })()}
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="floor" style={{background:"rgb(255, 255, 255)",marginBottom:"10px"}}>
                                <div className="row floor-title">
                                    <div className="title">赏金任务</div>
                                    <div className="subtitle">查看更多任务</div>
                                </div>
                                <div className="row banner bottomMargin">
                                    <div className="swiper-container swiper-container-horizontal swiper-container-free-mode" data-swiper="[object Object]">
                                        <div className="swiper-wrapper" style={{transform:"translate3d(0px, 0px, 0px)", transitionDuration:"0ms"}}>
                                            {(()=>{
                                                return this.state.task.map((item,index)=>{
                                                    return (
                                                        <div key={index} className="swiper-slide swiper-slide-active" style={{marginRight:"8px"}}><img className="imgLazyLoad"  src={item.src}/>
                                                        </div>
                                                    )
                                                })
                                            })()}
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="row wholebanner ">
                                    <div className="wrap">
                                        <div className="item" ><img className="icon imgLazyLoad"  src="https://img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&amp;height=200"/></div>
                                    </div>
                                </div>
                            </div>

                            <div className="floor" style={{marginBottom:"10px"}}></div>

                            <div className="floor" style={{background:"rgb(255, 255, 255)", marginBottom:"10px"}}>
                                <div className="row floor-title">
                                    <div className="title">白条</div>
                                    <div className="subtitle">年轻不留白</div>
                                </div>
                                <div className="row xiaobai bottomMargin">
                                    <div className="wrap">
                                        <div className="circle"><canvas width="92" height="92"></canvas><strong className="credit">60.3</strong>
                                            <div className="title">小白信用</div>
                                        </div>
                                        <div className="btn">预估分数</div>
                                    </div>
                                </div>
                                <div className="row iconsix bottomMargin">
                                    <div className="wrap">
                                        {(()=>{
                                            return this.state.whiteBar.map((item,index)=>{
                                                return (
                                                    <div key={index} className="item" ><img className="icon imgLazyLoad"  src={item.src} />
                                                        <p className="title">{item.title}</p>
                                                    </div>
                                                )
                                            })
                                        })()}
                                        
                                    </div>
                                </div>
                            </div>                           

                            <div className="floor" style={{background:"rgb(255, 255, 255)",marginBottom:"0px"}}>
                                <div className="row wholebanner ">
                                    <div className="wrap">
                                        <div className="item"><img className="icon imgLazyLoad"  src="https://img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&amp;height=200" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="floor" style={{background:"rgb(255, 255, 255)", marginBottom:"10px"}}>
                                <div className="row floor-title">
                                    <div className="title">保险保障</div>
                                </div>
                                <div className="row baoxian bottomMargin">
                                    <div className="wrap">
                                        <p className="title">200万</p>
                                        <p className="subtitle">个人账户安全险</p>
                                        <div className="btn" >立即查看</div><span className="label">今日推荐</span>
                                    </div>
                                </div>
                                <div className="row iconsix ">
                                    <div className="wrap">
                                        {(()=>{
                                            return this.state.recommand.map((item,index)=>{
                                                return (
                                                    <div key={index} className="item" ><img className="icon imgLazyLoad"  src={item.src} />
                                                    <p className="title">{item.title}</p>
                                                </div>
                                                )
                                            })
                                        })()}
                                        
                                    </div>
                                </div>
                                <div className="row wholebanner ">
                                    <div className="wrap">
                                        <div className="item" ><img className="icon imgLazyLoad" src="https://img12.360buyimg.com/jrpmobile/jfs/t1/1588/26/16755/35032/5be2946eE4195898c/21a99c3f5d7c4c3d.jpg?width=750&amp;height=200" /></div>
                                    </div>
                                </div>
                                <div className="row banner ">
                                    <div className="group-title">
                                        <div className="title">热销保险</div>
                                    </div>
                                    <div className="swiper-container swiper-container-horizontal swiper-container-free-mode" data-swiper="[object Object]">
                                        <div className="swiper-wrapper" style={{transform:"translate3d(0px, 0px, 0px)",transitionDuration:"0ms"}}>

                                            {(()=>{
                                                return this.state.insurance.map((item,index)=>{
                                                    return (
                                                         <div  key={index} className="swiper-slide swiper-slide-active"  style={{marginRight:"8px"}}><img className="imgLazyLoad"  src={item.src} />
                                                         </div>
                                                    )
                                                })
                                            })()}

                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            <div className="floor" style={{background:"rgb(255, 255, 255)", marginBottom:"10px"}}>
                                <div className="row floor-title">
                                    <div className="title">股票</div>
                                </div>
                                <div className="row stock bottomMargin">
                                    <div className="stock-wrap">
                                        <div className="banner-left" ><img className="bg imgLazyLoad"  src="https://img12.360buyimg.com/jrpmobile/jfs/t26923/258/154024707/4564/402f3e22/5b8748afNef25cf99.jpg?width=335&amp;height=200"/><img className="header-img" src="http://img30.360buyimg.com/jr_image/jfs/t5848/216/253631918/136369/1894b4a7/591e5567Ncfb35e99.jpg" alt="" />
                                            <p className="benifit">
                                                906.88
                                                <span className="per">%</span></p>
                                            <p className="title">累计收益排行榜</p>
                                            <p className="desc"><span className="label">牛人</span><span className="name">zangyn</span></p><img className="btn-img imgLazyLoad" src="https://m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png" />
                                        </div>
                                        <div className="banner-right" ><img className="bg imgLazyLoad" src="https://img12.360buyimg.com/jrpmobile/jfs/t24751/54/1036835300/6171/bca5b98a/5b8748cbNa372d6a3.jpg?width=335&amp;height=200" />
                                            <p className="benifit">新用户狂欢</p>
                                            <p className="title">专享三重礼</p>
                                            <p className="desc"><span className="name">立即前往</span></p><img className="btn-img imgLazyLoad"  src="https://m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row wholebanner bottomMargin">
                                    <div className="wrap">
                                        <div className="item" ><img className="icon imgLazyLoad"  src="https://img12.360buyimg.com/jrpmobile/jfs/t25603/15/1053175366/15557/ab0e663d/5b874874N4c490fc5.png?width=750&amp;height=200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="floor mb0" style={{background:"rgb(255, 255, 255)",marginBottom:" 0px"}}>
                                <div></div>
                            </div>

                            <div className="floor" style={{background:"rgb(255, 255, 255)",marginBottom:"0px"}}></div>
                            

                            <div className="floor mb0" style={{background:"rgb(243, 245, 247)",marginBottom:"0px"}}>
                                <div className="row fixedbottom ">
                                    {(()=>{
                                        return this.state.tabs.map((item,index)=>{
                                            return (
                                                <Link to={`/${item.href}/`}  onClick={this.props.skipTo.bind(this,item,index)}  key={index} className="item" clstag="pageclick|keycount|Qing_1176_4013|6012_33023|null"><img className="user-img" src={item.src} alt="" />
                                                    <p className="title" style={this.props.tab===index? {color:"rgb(70, 104, 255)"} : {color:"rgb(177, 180, 187)"}}>{item.title}</p>
                                                </Link>
                                            )
                                        })
                                    })()}

                                  
                                </div>
                            </div>


                            <div className="floor" style={{background:"rgb(255, 255, 255)", marginBottom:"10px"}}>
                                <div className="row floor-title"><div className="title">特色推荐</div></div> 
                                <div className="row zcsku ">
                                    
                                    {(()=>{
                                        return this.state.special.map((item,index)=>{
                                            return (
                                                <div key={index} className="item" >
                                                    <div className="bg">
                                                        <div className="img-wrap"><img className="zc-img imgLazyLoad"  src={item.src} />
                                                        </div>
                                                        <p className="title">{item.title}</p>
                                                        <p className="price"><span className="per">￥</span>{item.price}
                                                            <span className="up">起</span></p>
                                                        
                                                        <div className="progress-wrap">
                                                            <div className="progress">
                                                                <div className="progress-inner" style={{width:"0%"}}></div>
                                                            </div><span className="percent">{item.percent}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    })()}
                                </div>

                                <div className="row textRow "><p className="text" >-   京东金融出品  -</p></div>

                                <div className="row textRow ">
                                    <p className="text" ></p>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
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
})(Makemoney);