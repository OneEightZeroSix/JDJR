import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Link } from "react-router-dom";



 import './Member.scss';


class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberList: [{
                title: "我的资产",
                subTitle: "查看全部资产",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的优惠券",
                subTitle: "查看全部",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的金币",
                subTitle: "赚金币兑好物",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&amp;height=90",
                href: ""
            }, {
                title: "我的金条",
                subTitle: "查看额度",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&amp;height=90",
                href: ""
            }, {
                title: "我的借钱",
                subTitle: "查看全部产品",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的白条",
                subTitle: "去提额",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的众筹",
                subTitle: "查订单/物流",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的保障",
                subTitle: "全方位保障",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&amp;height=70",
                href: ""
            }, {
                title: "我的爱车",
                subTitle: "绑车享专属福利",
                src: "https://img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&amp;height=54",
                href: ""
            }],
            tabs:this.props.tabs
        }
    }
    render() {
        return (
            <div className="jMember">
                <div className="qyy-body qyy" style={{marginTop:"45px"}}>
                    <input id="qyy-usertype" type="hidden" />
                    <div id="qyy-page-loading" className="page-loading hide">
                        <div className="page-loading-bg"></div>
                    </div>
                   
                    <div className="wrap-container">
                        <div className="wrap">
                            <div className="section section-42  hasTopPadding hasFloorBottom" style={{background:"#ffffff"}}>
                                <div className="row personal-assets ">
                                    <section className="personal-assets-user" ><img className="header" id="qyy-personal-assets-user-img" src="http://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png?width=100&amp;height=100" alt="" />
                                        <div className="info">
                                            <div className="name" id="qyy-personal-assets-user-name">jd_157707ujs</div><span className="user-pin" id="qyy-personal-assets-user-pin">jd_6cafe92b6922e</span>
                                        </div>
                                        <div className="right"><span style={{color:""}}>会员福利</span><img className="arrow" src="//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt=""/></div>
                                    </section>
                                </div>
                            </div>
                            <div className="section section-4  hasTopPadding hasFloorBottom" style={{background:""}}>
                                {(()=>{
                                    return this.state.memberList.map((item,index)=>{
                                        return (
                                            <div key={index} className="row classify singleTitle" >
                                                <div className="icon">
                                                    <div className="img-wrap bg-none min-height-0">
                                                        <img src={item.src} className="test-lazyload" alt="" /></div>
                                                </div>
                                                <div className="info"><span className="name" style={{color:"",lineHeight:"auto"}}>{item.title}</span></div>
                                                <div className="benifit" id="qyy-benifit" style={{color: index>7? "":"#999999"}}>{item.subTitle}</div>
                                            </div>
                                        )
                                    })
                                })()}
                            </div>
                            <div className="section section-4  hasTopPadding hasFloorBottom" style={{background:""}}>
                                <div className="row classify singleTitle">
                                    <div className="icon">
                                        <div className="img-wrap bg-none min-height-0">
                                        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&amp;height=70" className="test-lazyload" alt="" /></div>
                                    </div>
                                    <div className="info"><span className="name" style={{color:"",lineHeight:"auto"}}>实名认证</span></div>
                                    <div className="benifit" id="qyy-classNameify-user-check" style={{color:"#999999"}}>去认证</div>
                                </div>
                            </div>
                            <div className="section section-4  hasTopPadding hasFloorBottom" style={{background:"#FFFFFF"}}>
                                <div className="row classify singleTitle" >
                                    <div className="icon">
                                        <div className="img-wrap bg-none min-height-0">
                                            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&amp;height=70" className="test-lazyload" alt=""/>
                                        </div>
                                    </div>
                                    <div className="info"><span className="name" style={{color:"",lineHeight:"auto"}}>帮助中心</span></div>
                                    <div className="benifit" id="qyy-benifit" style={{color:""}}></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="error-wrap hide" id="system-error-wrap">
                        <img src="//m.jr.jd.com/spe/qyy/main/images/web_error.png" alt="" />
                        <p className="desc">功能故障，正在抢修…</p>
                        <button className="reload-btn" id="system-error-reload">刷新试试看</button>
                    </div>

                    <input  id="qyy-usertype" type="hidden" />

                    <div className="add-bottom-seize"></div>

                    <div className="black-cover" id="qyy-black-cover" style={{display:"none"}}></div>

                    <div id="m_common_header2" className="m_common_header2">
                        <header className="jd-header">
                            <div className="jd-header-new-bar">
                                <div  id="m_common_header2_goback" className="jd-header-icon-back J_ping"><span></span></div>
                                <div className="jd-header-new-title">金融会员</div>
                                <div  id="m_common_header2_jdkey" className="jd-header-icon-new-shortcut J_ping"><span></span></div>
                            </div>
                        </header>
                    </div>
                    
                    <div className="section section-38  hasTopPadding hasFloorBottom" style={{background:"#FFFFFF"}}>
                        <div className="add-bottom" id="qyy-add-bottom">

                            {(()=>{
                                return this.state.tabs.map((item,index)=>{
                                    return (
                                        <Link to={`/${item.href}/`} onClick={this.props.skipTo.bind(this,item,index)}  key={index} className="item" ><img src={item.src} className="user-img" alt="" />
                                            <p className="blue" style={this.props.tab===index?{color:"#4668FF"}:{color:"#B1B4BB"}}>{item.title}</p>
                                        </Link>
                                    )
                                })
                            })()}
                            
                        </div>
                    </div>

                    <div id="header-shortcut-ul">
                      <ul id="m_common_header_shortcut" className="jd-header-vertical-shortcut" style={{display:"none"}}>
                        <li id="m_common_header_shortcut_m_index"><a className="J_ping" report-eventid="MCommonHead_home" report-eventparam="https://m.jr.jd.com/spe/qyy/hzq/index.html" href="https://m.jd.com"><span className="shortcut-index" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAAG2bMCoAAAAAXNSR0IArs4c6QAAA2hJREFUWAnNmD1IVmEUx30tizAUDKPACBIcbWqwtsB2Q9obmgJdCxsDA1sFQWiMpqZaQ1tToiV0iQbBFoWgoC+q3/96z+O53x+vL3Xg9JyP//9/nue993ov9fUV2R/MeoRzFuevQmND+qdjECUWh5Xa25AooDAcr1l0QJqWrVEjkQSoCwCs4fsqZcAUxjPFJPlG6BNsuV4iTPQCw420mq3+F1o0qU6ncx+A5W/In1svrACSv17ouMDGsO7ja651EFKcM5A1yYd9rT9OtthH2K/ApJ9VUx8bN4F6K4xmvyOE6K7SLBvh43BdrWirwBb3G7NqjU4K6ybAKwJzUH9VorxKRGOnNDplU2XEzBYhnzIBiNP6zb2pZn1hC8Vp7sbAzUJQqgF+M+bshhaFD/i3UGgZSENaLek1aKhHVgOagKR5mYvi0YB3YsIiq1y24zGF8QH28JYWMF1L53kYv8MnHiCy8jwzYYeJuHnYTA3SLfyr1kyzSQEB3U7emt8SsMecwqw2QD7ramO1NgVhJSb9Yj3mScpx1WUrvpeJAejulj3LNF1B/QiV90TR8A/3hOMVhnAmYkEt0xGQYCMuHj7IhRLZBlz747FhN+h8Fla/guC8NlSf8c+Qbbfpef757PogpWJMXddkZ+tlE8NLXQS9WDxYNfJVfA8/g9/Jw6Rr0S0COGGxWKilczV8rfSYQaVmcKRix/1Qv2Vf93EZxosNQHqAn/TkVPwolX8nf5iqtUvZpb6xnmq3Oab6UDvlliwG6vtzAf+Je1slOY9r9SbcAn6k1zuxfcRn8D3c22uSCwlgnKiOq+9N/Jk8fOMaQpP4e69O/BG/2kQM/LWYxxJMupNNdPQQj+IvgsRB8IXldiOhArB0cOl507zRXAqNAXwJ/42bKX6Mn8gldVmUbqyfnql96EmP/txtk3h7SXK2y9mN6JqHa663bV3GQfwSfrqRYo/A2ke8n8EejeiRLLu+iN/V2qMRCdmyeYn3u1iAw1dY5j2ekD2apGyefxc2noawDncdv4z7p/oH+Tv8FQcMhyXvznQSszIlMMuGq1iXK3QCPY1rfVmlaGJ5l7+qb9wyXO9exja9i/W/3lzeA/GJw57TgfnJl1j0Zd6VoXOvQEBf/GaaW24IjeD2X0aE1ZanWM1KIDRvJK3zF+VnwY9g2V+mAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>首页</strong></a></li>
                        <li id="m_common_header_shortcut_category_search"><a className="J_ping" report-eventid="MCommonHead_CategorySearch" report-eventparam="https://m.jr.jd.com/spe/qyy/hzq/index.html" href="https://so.m.jd.com/category/all.html"><span className="shortcut-search" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAFp3oPPAAAAAXNSR0IArs4c6QAAAzJJREFUWAnVljtrVFEQx3dN8IVY+UphUmgjVkq00VLER2LrB/CDCEISQcTCTrBTCYpgtLC3UAv1A5hYWEaEKFlNNmZdf//rmbOzd+9rV1l0YPbM4z//M3vPnXtvreak3W5vOrdWI9BWQOsWl/kSbFs7qQTJz6wME6XrhiF4HHvN/Lh6xCTR6HcQIoyeDPy4U/AbxFSu3DF0RXaXEOxiSXx+ZmRIDI15BP2BvrNY4Qqwt2tVkHiDvojVOCazAeC3jbYv6FSHKAwv/bEovDNWFBna2/LRlhFkxiVfE3uluMVyVzBX0d25AEsAqtf5KaOcs4LCFZ4VkWVIIxaSjOfrgMkfxdc5S5I7JxYFg7juJMnR7PPtADVAI3UkTWK+WLCb6YOzvK0nZYDN6+hEAE52DYHYgyT3lbER02BkSecaGXiQNTC/VW3uf69KLDKwvY+XqgQ9OAizjj90XXmJc9GzQToA5U30K/oZrXYnGwkFl9A8OZfgyDZTiKYjmAi5RYvZSvx9yI3r3lkPji3rDqhYy/z0Sm4T/ZmOd/liQKa6gs4hNy2AC/WaAiDbezO/I+R2CFA2U0KfySOxXOHdq10Athjw0Swi0rpe9bJOJgCNAM46nSVyqj+k08k9YgDKX0Dz5KwwhUecAMIPLNdRPUqX0WuoZN5j+rYheJDQcDiFF7aMWSRgPpXhCvNwXA5EhbjSJCS5N2NpsQfoLaip3eqDfdobulmKB6ic8U/rOzvwj8bR52gVeQJI0/B3BdLz6IbrQM+qeyG+h3UU3Ydqgu6jypuobjp2hLNqmZJ1NRYFA/yCq1nC3p/GZPng9qL2pBbFsyxc5RgEc2IJMtBYU/vICFj7e6n5TinWW9FkzOeq2hQfMALW5bJHbhGvf5YXv8/yWfz+ld5EeVR3XeK2s/sxbznwHWf3b3Jp/Sgv6rJXYREO/YCaPK5SV4qBTR9HfrRb+PPoFDqGbkM12vqyeIimR/ti3ITkwKMdSTDgmUCfolXlO8BxzzF0mwZOpbo9PfQm/IY0cxD95pq64vNDt2lEH5YfXUM3/JwPtSG+OddQvSztVXB4qA38V5vpy0pv413/QNeNXxjWvZIdtAPeAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>分类搜索</strong></a></li>
                        <li id="m_common_header_shortcut_p_cart"><a className="J_ping" report-eventid="MCommonHead_Cart" report-eventparam="https://m.jr.jd.com/spe/qyy/hzq/index.html" href="https://p.m.jd.com/cart/cart.action"><span className="shortcut-cart" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAF9MBMNAAAAAXNSR0IArs4c6QAAAvNJREFUWAnNWDtOHEEQ3TWWFwksITniADiFBB/AOaEtgSUOQYhDG0JSDoGELYGPQL6k+AAOWGmDxRKgxetXreqe6u6q+e14cUtDd1W9eq96aqYZ6M1ms+NeMvpkIzBL/LnzJSO2LPSEqSYqnxNiRC7m1cE9zUrqY7zwCDL8OsxIy3YWgnKh1s4AigUZ+H7KxGT9NrFLTKLFeCyBFCFCFpa+8jW6+oA/oiRlDF06Aps6j2txvBGAjzQw/NPIT3KRgw3v9w+Lc3unltDOlzJGNoz0lmy1k1GySAkjPBtYHztP/R9fIlrkfaXcyFnTYM39DM6BRttGzinlZWTkYMIbNWg4OedUDSPomqQGFSfw+0SohAoX4o8EajCqjw2QjZlwu5AqVlbcv6YFct4VlB64EpqqSy8R7BMZ4q88Rj1XfbDuDNLWD3OmAbJNXFHLYcpbQOGycR+agO1dkwLQjd4KUdUgkAnnB7+GwIDuYdUA/ofPCTPvIZwqIVCx4LzbCAbnDQUiZw2DyQ4jKJyNO4qcVSZbTcmyjkYAxQDRZyJTQuFYqt1R8Iw8mdZNEgkdVRVj5xuYl7GLLVJpMd5bZE1/ydT73FDVmjqxzW3e6ljLrYpHOQBPmExteVU8JXvHZFZlapwOR/qajZ/egpq+hV7jRb8vXM+8QsHnvFOaPj1XOdZLdSYKavKCibT5l/nfDeDE3Rpg+o1rCdcfXCtpa4EpexyQMve4Mxkg/g2XHwtpLcTcocui+iccVQzArq8M83dzFx0GoOMOcdbdMKkBWMY1ZeAT2Sa4gwD43Tcq611UUgK4sNZCa8iF0aT/opEVA7QnEv5Za6kYoTOUNZhrJCyktdC5FMXlf2lZFSJJtnbPwrX1g39DFDaSPNYhLDHyQP4oAx2tDwTPiVj31ENYArArekvpwI3+iyAxHa2fwLOGw94+fDsS6oSm8s6lKriT6/DtsP8CO/2VYsrsefNNbhBf4UrHlZmQBJDYKL/OC5FILM78r9v6Fx346V9Ef2tUAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>购物车</strong></a></li>
                        <li id="m_common_header_shortcut_h_home" className=" current"><a className="J_ping" report-eventid="MCommonHead_MYJD" report-eventparam="https://m.jr.jd.com/spe/qyy/hzq/index.html" href="https://home.m.jd.com"><span className="shortcut-home" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAjCAYAAAFgNSO1AAAAAXNSR0IArs4c6QAAA8VJREFUWAm9mF9ojlEcx/duM2PZFnZjqV0oRSLZFe3CBVfcTdxQUtxYcYXQ8ifKJZKiGCEXXGBlKDUpiuRKLS2WEuVPW2hmr8/v2Tnv+zvPc877Ps/el199d35/vr/vOc/7vOect9XUGMvn89esH40k1jgJHVCcLMQET22An68BgzaRGCmOJJKSiFptxQlM9aAqtlnfGX1decugWFyzTcpIIfGkCSVDbJRCzE5asZwh/cnlcnU2qUcaFxOv1DmZXlR/gW1OgaDeJigex29FWcgzQB4/mtFyolEKOkH4WMe1Okjlo3ACnBUyYzS1t5Hid+BYgijVRHJKuZgPkWyjrad5mNW2yTui1CdqAWvxNpH0ziwi1NrlxfiM2jcoD0KiTh5ijxF08jqgvq8cR/OjPUbDIyepAhHDgnVFLbo03Ija/H9ai8wSHr27Vf8WH5V6HRg0vOBubjeEAZ9IKEdPrekbL3BILDLJjkIyo0N/tC2iNoJjQPZyRYbGWFkBSJvAMBgHt8Ccsk1xAk0zQcj64/ySsVKZrYnke03tss4HfciXTEPyDKSL2hWpBwV0wQgN6VzcN5zN8bz3IIB0P070xO49ACEktt7THE+9iCcSMY9gz7rKPzNRN5+JDKG32ZdYRSiBiO9ytXM8DPUl8nTst10lxp/UmhPNOgFBto3YK9Cga9Ynv0EIxo7avDPaKmOHUwgE8O6ZnnMOhaS9Yb2rccgqoC/aDYzLojROFxBL/PRRfUGXvh/SbMUm8SeC7DIFeltEDOuy36nuMj0ly1Na+eEczigXcfZDT8mj0UO4XKXSuzRvBe9BOfsMQS780BmQftJSTJkA3AXaPhAcACtAM2gCS8AeMAS0PSNoLDXHtGqIyk1rN5xM6N9MHnW4O6VBWelffR6NYApR+cn7VYl3BsmBAr0LwYTRkHFegJotjdB2IyrD9WzdRTa9p5TO4WIl7KX5oqa7f8Nz2Iq+r6qjydPKdTOmnrrS1yqH4AK74opHxJaC32qBlWyItRUvKC7AwupBv1qguFmOkufwm+K6VYkRngv2gjcgq72j4RCo6uvsRPCtZyVfyMn1vAOsAm2gAcinKw8hh7LcIhfARxA3ya2b1qdGY29MbZRYDlO94zJr098NPgFt5wnKnxqQNgLZTdYGcJxfmJlX5GlAUz7hq3YSM+7yUKdSEG4q8gj+/CC5SgXmmAVeq3mf4Ltvh8QdRbhYpblTyzD3ETX/y0Ijyej/E6Z4u1D4zw7zn1ELPB1NT8Ke/nIhp/s3xT9YOHPXATkFrNX+BSB8ooU9mPUcAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>我的京东</strong></a></li>
                        <li id="m_common_header_shortcut_h_footprint"><a className="J_ping" report-eventid="MCommonHead_FootPrint" report-eventparam="https://m.jr.jd.com/spe/qyy/hzq/index.html" href="https://home.m.jd.com/myJd/history/wareHistory.action?functionId=liulanjilu"><span className="shortcut-footprint" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAEDGXMMAAAAAXNSR0IArs4c6QAABMZJREFUWAmlmF+oFVUUxu+RMMoe0ohSQS4ZmBAU9P9BTAkFq5eghKDo3XpM0CL6A2VZcoUEIYgIIgp6sfIhIuuhMiJ7KpMsiEhvD964GZWWnn7fPnvtWXvPPnPn3hZ8Z6/9fd9aM3NmZs+cMzERYzgcnrB8kRKInQy/xHyoUeSdISk/EEJVyTdzv4HAQihuAc82tphJsd0YbRrBtrAj2XGdkFUhshyT0UQMK400s83DWCNrnJnTvnSZpL2nD2JgleuYHNCEcRdYHAT/ARkimpTLGI44+SDOSYmmd0mPgNBNPDETzCTa5HmrJN8N0rdrppyAxfOpFSUT5MUZOTI+nHGYPgZZR6bTmUmTiikU2RmvFWyFXFcT1OwwOJt1ZaLD93HOqh0ZbgLm+qJDmCeNsAeiloYkFgmGxUBnbJckxikwA6qnewtCV8xaf2eaMi6MUUiHlolxgmd59H1f07Wbg2i4p2pwJL7roneVo5sUcWU0aPgWjO6BxpKy6DuYiHEJxkXR/HjNE7Xsyqv5dKiro3ltzRC1z2taxmHcFs3ZqYVbE/nOk1I2W0bRr7HQhjcyk5/g0EWpCy3dE+TZxef9rRxzWEYYLUIjJmoawopszhiuauPDbexEpWPvJ+cLnq4mYZlMBpfQxFZEHaqge2tKe/IYsAjfPBNdM0+DQ+A78A7Y4PqpTg1CeD7ksD9FbdzwkIyIustDhEL7gAmLEuMrxtkINwnOAMVu47MR4ZEgD4dbMqGY4LGz1l5CEf9Qk6KmOpWPeLslQs5KaQkVQj5FS4K7PyjD4astsSDw6Yy1m8gHf1xijPuK2jRFf0meRJQJ2q0yxPi61DVHu1d6Tcs4PFrtqkZoWzYvUlH7NDWtTjdpK1semXCFdzW5uVXaELcrHQwGZxuqkulQiOpSOJKaQ+3aE7WeLPvT4Hjk1pdaa475YNyi7qe3wFdxrmF/q2AcgflJV6j0NLim6kfYCc6DMrR06m05C7j0FuEKsiUTXouWLWK6aZVnT5CsqSYYWm8gcGVkqyairQjely29fTzlzuhE31iSlXnpmcTzPDgZoXwS+HjdT2Je4xobR6CXvPJJ5o9YWnpENpULz+i3128g5s1rmTYI7Pms06DcHq+XkL8Iyoc91Nj4DeU5cGW523Dp+eWqZ8a+cakBxm0ML5fNmH8DPgQ/gz/BX+BysBrcAMrTCjWxj5Uk/A6gry7kF8CDEgidvu0hKz8wLwXTwEIPmNtK31xzataCH6wJo+7YO+aqy3QKvnQNXsvEBUzotdn1U3p3rzYYlxSF1/cqnMNEz0ddX92F/YKiT1zhR+Sd11afrvS4ANirkdpv7lOnC1dvdEdU4eJH8geA1qYFBbV+gd07ryYUXwreBLX4DLL+Q2nMVvDbDwv1OzrG1o+mwSZwWJ1cbOpXHZaKja7u7751nT4avu+aPtNpdiI1N7k6pcuc3PlO5X1l7h8Px0qxY77GabMsgqP/XRw5r5Sj2eqO7nfyXhc0Pv14P+pq98xrwzUzzZ5wDT+oeUoO/1XglKv7ovQsaE7Dq11TpXoFvKJsBqdHyg6gb8/HU6X3f83pvAIc81uYI/8HfTvoXDw7xT57zAYuxHcXuBZcBv4F0yA82blIz5D3iv8AygYvrfqZyYcAAAAASUVORK5CYII=) no-repeat center center",backgroundSize:"15px"}}></span><strong>浏览记录</strong></a></li>
                      </ul>
                    </div>

                    <div id="header-mask" style={{display:"none"}}></div>
                </div>
            </div>
        );
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
})(Member);