import React, { Component } from 'react'


import { connect} from 'react-redux';

import { Link } from "react-router-dom";
import $ from  'jquery';
import "../../assets/css/Dmserchmin.css";


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
           min:"search_head",
           cur:0,
           gongneng:["综合","价格","销量","筛选"],
           jia:true,
           zonglei:''
        }
    }
    
    // 获取数据
    huoqu(){
        if(this.props.lei.length==0){
            this.setState({
                zonglei:"shouji"
            })
        }else{
            this.setState({
                zonglei:this.props.lei
            })
        }
        $.ajax({
            type: "post",
            data: {
                lei:this.props.lei
            },
            url: "http://localhost:3001/list/huoqu",
            async: true,
            success: (data)=>{
              this.setState({
                  zong:data,
                  zon:data.slice(0,this.state.ge*10)
              })
            }
        });
    }
    // 吸顶效果
    xd=()=>{
            
                if (document.body.scrollTop>45){
                    this.setState({
                        min:"search_head xiding"
                    })
                }
                if (document.body.scrollTop<=10){
                    this.setState({
                        min:"search_head"
                    })
                }
                // console.log(document.body.scrollTop,document.body.scrollHeight,window.outerHeight,window,document.body.height,window.innerheight,document.body.outheight)
                if (document.body.scrollTop>=document.body.scrollHeight-window.outerHeight) {
                    console.log("底部");
                    this.setState({
                        ge:this.state.ge+1
                    })
                    this.setState({
                        zon:this.state.zong.slice(0,this.state.ge*10)
                    })

                }
        
    }
    // 点击：综合 价格 销量 筛选
    cur(idx){
        // 更改功能样式
        this.setState({
            cur:idx,
            ge:1
        })
        setTimeout(()=>{
            document.body.scrollTop=0;
            
            // 综合
            if(this.state.cur==0){
                this.huoqu();                
            }
            // 价格排序
            if(this.state.cur==1){
                console.log(1);
                console.log(this.state.yuan);
                if(this.state.jia){
                    this.setState({
                        ge:1,
                        jia:!this.state.jia,
                        zong:this.state.zong.sort((a,b)=>{ return a.price-b.price}),
                        zon:this.state.zong.slice(0,this.state.ge*10),
                    })
                }else{
                    this.setState({
                        ge:1,
                        jia:!this.state.jia,
                        zong:this.state.zong.sort((a,b)=>{ return b.price-a.price}),
                        zon:this.state.zong.slice(0,this.state.ge*10),
                    })
                }
            }
            
        },30)
        
        
        
    }
    //跳转详情页
    tz(item,e){
        console.log(item);
        // var e=e.target;
        // e=$(e).closest(".search_prolist_item");
        // console.log(e);
        this.props.xiangqing(item);
        this.props.history.push("details");
        document.body.scrollTop=0;
    }
    render() {
        return (
            <div>
                
                <div className="wx_wrap">
                    <div className="pro_filter_mask" id="pFilterMask"></div>
                    <div ref="xi" className={this.state.min} id="searchHead" style={{height:"86px"}}>
                        <div className="" id="searchHeadFixer" style={{transition:"transform 0.5s ease 0s"}}>
                            <div id="mCommonTips" style={{maxHeight:"50px"}}>
                                <div id="mTipsContent"></div>
                            </div>
                            <div id="tsearchwrap" className="search-land" style={{display:"block"}}>
                                <div className="mjd-header">
                                    <div className="m_common_container">
                                        <div className="m_cc_header_inner">
                                            <header className="jd-header">
                                                <div className="jd-header-new-bar">
                                                    <a href="javascript:history.go(-1)" id="msCancelBtn"  
                                                        className="jd-header-icon-back J_ping" style={{display:"block"}}><span></span></a>
                                                    <div className="jd-header-new-title"></div>
                                                    <div id="msShortcutLogin" className="jd-header-icon-new-shortcut-text J_ping" style={{display:"none"}}><span>登录</span></div>
                                                    <div id="msShortcutMenu" 
                                                        className="jd-header-icon-new-shortcut J_ping"
                                                        style={{display:"block"}}><span></span></div>
                                                </div>
                                            </header>
                                        </div>
                                        <div className="m-common-header-search">
                                            <form action="/search/search.action" className="jd-header-search-form">
                                                <div className="jd-header-search-box" id="msSearchBox" style={{marginRight:"32px"}}><i id="search-input-left-jd"
                                                        className="jd-header-icon-jd"></i><i id="search-input-left-icon" className="jd-header-icon-fdj"></i>
                                                    <div className="jd-header-search-input"><input  name="keyword"
                                                            id="msKeyWord" type="text" placeholder="赢雀巢4999旅游基金"
                                                            className="hilight2"/><input name="catelogyList" type="text" style={{display:"none"}} />
                                                        <div className="head-input-icon J_ping" id="msSearchTab" 
                                                            style={{display:"none"}}></div>
                                                    </div><a  className="jd-header-icon-close" id="msSearchClearBtn"
                                                        style={{display:"none"}}></a>
                                                </div><a  style={{display:"none"}} id="msSearchBtn" className="jd-header-icon-search1"><span>搜索</span></a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="msContentWraper" style={{display:"none"}}>
                                    <div id="msHistory" className="recent-search" style={{display:"none"}}>
                                        <div className="recent-search-head cf">
                                            <p>最近搜索</p><i id="msHistoryDel" className="garbage-pic"></i>
                                        </div>
                                        <div id="msHistoryTags" className="recent-search-tags"></div>
                                    </div>
                                    <div id="msClearToast" className="search-toast" style={{display:"none"}}>
                                        <div id="msClearFloor" className="black-floor"></div>
                                        <div className="ground-toast">
                                            <div className="toast-content"> 确定要清空吗? </div>
                                            <div className="toast-btn"><a className="no" id="msClearCancel">取消</a><a className="sure" id="msClearSure">确定</a></div>
                                        </div>
                                    </div>
                                    <div id="msHotSearch" className="hot-search" style={{display:"none"}}>
                                        <div className="hot-search-head cf">
                                            <p>热门搜索</p><i id="msHotSearchReflash" className="around-pic" style={{display:"none"}}></i>
                                        </div>
                                        <div id="msHotSearchTags" className="hot-search-tags"></div>
                                    </div>
                                    <ul id="msKeys" className="association-normal"></ul>
                                </div>
                                <div id="msHeaderMask" className="header-mask" style={{display:"none"}}></div>
                                <ul id="msShortcut" className="jd-header-vertical-shortcut-v2" style={{position:"absolute",top:"53px",right:"10px",display:"none"}}>
                                    <li><a className="J_ping"  
                                            ><span className="shortcut-index" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAAG2bMCoAAAAAXNSR0IArs4c6QAAA2hJREFUWAnNmD1IVmEUx30tizAUDKPACBIcbWqwtsB2Q9obmgJdCxsDA1sFQWiMpqZaQ1tToiV0iQbBFoWgoC+q3/96z+O53x+vL3Xg9JyP//9/nue993ov9fUV2R/MeoRzFuevQmND+qdjECUWh5Xa25AooDAcr1l0QJqWrVEjkQSoCwCs4fsqZcAUxjPFJPlG6BNsuV4iTPQCw420mq3+F1o0qU6ncx+A5W/In1svrACSv17ouMDGsO7ja651EFKcM5A1yYd9rT9OtthH2K/ApJ9VUx8bN4F6K4xmvyOE6K7SLBvh43BdrWirwBb3G7NqjU4K6ybAKwJzUH9VorxKRGOnNDplU2XEzBYhnzIBiNP6zb2pZn1hC8Vp7sbAzUJQqgF+M+bshhaFD/i3UGgZSENaLek1aKhHVgOagKR5mYvi0YB3YsIiq1y24zGF8QH28JYWMF1L53kYv8MnHiCy8jwzYYeJuHnYTA3SLfyr1kyzSQEB3U7emt8SsMecwqw2QD7ramO1NgVhJSb9Yj3mScpx1WUrvpeJAejulj3LNF1B/QiV90TR8A/3hOMVhnAmYkEt0xGQYCMuHj7IhRLZBlz747FhN+h8Fla/guC8NlSf8c+Qbbfpef757PogpWJMXddkZ+tlE8NLXQS9WDxYNfJVfA8/g9/Jw6Rr0S0COGGxWKilczV8rfSYQaVmcKRix/1Qv2Vf93EZxosNQHqAn/TkVPwolX8nf5iqtUvZpb6xnmq3Oab6UDvlliwG6vtzAf+Je1slOY9r9SbcAn6k1zuxfcRn8D3c22uSCwlgnKiOq+9N/Jk8fOMaQpP4e69O/BG/2kQM/LWYxxJMupNNdPQQj+IvgsRB8IXldiOhArB0cOl507zRXAqNAXwJ/42bKX6Mn8gldVmUbqyfnql96EmP/txtk3h7SXK2y9mN6JqHa663bV3GQfwSfrqRYo/A2ke8n8EejeiRLLu+iN/V2qMRCdmyeYn3u1iAw1dY5j2ekD2apGyefxc2noawDncdv4z7p/oH+Tv8FQcMhyXvznQSszIlMMuGq1iXK3QCPY1rfVmlaGJ5l7+qb9wyXO9exja9i/W/3lzeA/GJw57TgfnJl1j0Zd6VoXOvQEBf/GaaW24IjeD2X0aE1ZanWM1KIDRvJK3zF+VnwY9g2V+mAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>首页</strong></a></li>
                                    <li className="current"><a className="J_ping"  
                                            ><span className="shortcut-search"
                                                style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAFp3oPPAAAAAXNSR0IArs4c6QAAAzJJREFUWAnVljtrVFEQx3dN8IVY+UphUmgjVkq00VLER2LrB/CDCEISQcTCTrBTCYpgtLC3UAv1A5hYWEaEKFlNNmZdf//rmbOzd+9rV1l0YPbM4z//M3vPnXtvreak3W5vOrdWI9BWQOsWl/kSbFs7qQTJz6wME6XrhiF4HHvN/Lh6xCTR6HcQIoyeDPy4U/AbxFSu3DF0RXaXEOxiSXx+ZmRIDI15BP2BvrNY4Qqwt2tVkHiDvojVOCazAeC3jbYv6FSHKAwv/bEovDNWFBna2/LRlhFkxiVfE3uluMVyVzBX0d25AEsAqtf5KaOcs4LCFZ4VkWVIIxaSjOfrgMkfxdc5S5I7JxYFg7juJMnR7PPtADVAI3UkTWK+WLCb6YOzvK0nZYDN6+hEAE52DYHYgyT3lbER02BkSecaGXiQNTC/VW3uf69KLDKwvY+XqgQ9OAizjj90XXmJc9GzQToA5U30K/oZrXYnGwkFl9A8OZfgyDZTiKYjmAi5RYvZSvx9yI3r3lkPji3rDqhYy/z0Sm4T/ZmOd/liQKa6gs4hNy2AC/WaAiDbezO/I+R2CFA2U0KfySOxXOHdq10Athjw0Swi0rpe9bJOJgCNAM46nSVyqj+k08k9YgDKX0Dz5KwwhUecAMIPLNdRPUqX0WuoZN5j+rYheJDQcDiFF7aMWSRgPpXhCvNwXA5EhbjSJCS5N2NpsQfoLaip3eqDfdobulmKB6ic8U/rOzvwj8bR52gVeQJI0/B3BdLz6IbrQM+qeyG+h3UU3Ydqgu6jypuobjp2hLNqmZJ1NRYFA/yCq1nC3p/GZPng9qL2pBbFsyxc5RgEc2IJMtBYU/vICFj7e6n5TinWW9FkzOeq2hQfMALW5bJHbhGvf5YXv8/yWfz+ld5EeVR3XeK2s/sxbznwHWf3b3Jp/Sgv6rJXYREO/YCaPK5SV4qBTR9HfrRb+PPoFDqGbkM12vqyeIimR/ti3ITkwKMdSTDgmUCfolXlO8BxzzF0mwZOpbo9PfQm/IY0cxD95pq64vNDt2lEH5YfXUM3/JwPtSG+OddQvSztVXB4qA38V5vpy0pv413/QNeNXxjWvZIdtAPeAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>分类搜索</strong></a></li>
                                    <li><a className="J_ping"  
                                            ><span className="shortcut-cart" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAF9MBMNAAAAAXNSR0IArs4c6QAAAvNJREFUWAnNWDtOHEEQ3TWWFwksITniADiFBB/AOaEtgSUOQYhDG0JSDoGELYGPQL6k+AAOWGmDxRKgxetXreqe6u6q+e14cUtDd1W9eq96aqYZ6M1ms+NeMvpkIzBL/LnzJSO2LPSEqSYqnxNiRC7m1cE9zUrqY7zwCDL8OsxIy3YWgnKh1s4AigUZ+H7KxGT9NrFLTKLFeCyBFCFCFpa+8jW6+oA/oiRlDF06Aps6j2txvBGAjzQw/NPIT3KRgw3v9w+Lc3unltDOlzJGNoz0lmy1k1GySAkjPBtYHztP/R9fIlrkfaXcyFnTYM39DM6BRttGzinlZWTkYMIbNWg4OedUDSPomqQGFSfw+0SohAoX4o8EajCqjw2QjZlwu5AqVlbcv6YFct4VlB64EpqqSy8R7BMZ4q88Rj1XfbDuDNLWD3OmAbJNXFHLYcpbQOGycR+agO1dkwLQjd4KUdUgkAnnB7+GwIDuYdUA/ofPCTPvIZwqIVCx4LzbCAbnDQUiZw2DyQ4jKJyNO4qcVSZbTcmyjkYAxQDRZyJTQuFYqt1R8Iw8mdZNEgkdVRVj5xuYl7GLLVJpMd5bZE1/ydT73FDVmjqxzW3e6ljLrYpHOQBPmExteVU8JXvHZFZlapwOR/qajZ/egpq+hV7jRb8vXM+8QsHnvFOaPj1XOdZLdSYKavKCibT5l/nfDeDE3Rpg+o1rCdcfXCtpa4EpexyQMve4Mxkg/g2XHwtpLcTcocui+iccVQzArq8M83dzFx0GoOMOcdbdMKkBWMY1ZeAT2Sa4gwD43Tcq611UUgK4sNZCa8iF0aT/opEVA7QnEv5Za6kYoTOUNZhrJCyktdC5FMXlf2lZFSJJtnbPwrX1g39DFDaSPNYhLDHyQP4oAx2tDwTPiVj31ENYArArekvpwI3+iyAxHa2fwLOGw94+fDsS6oSm8s6lKriT6/DtsP8CO/2VYsrsefNNbhBf4UrHlZmQBJDYKL/OC5FILM78r9v6Fx346V9Ef2tUAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>购物车</strong></a></li>
                                    <li><a className="J_ping"  
                                            ><span className="shortcut-home" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAjCAYAAAFgNSO1AAAAAXNSR0IArs4c6QAAA8VJREFUWAm9mF9ojlEcx/duM2PZFnZjqV0oRSLZFe3CBVfcTdxQUtxYcYXQ8ifKJZKiGCEXXGBlKDUpiuRKLS2WEuVPW2hmr8/v2Tnv+zvPc877Ps/el199d35/vr/vOc/7vOect9XUGMvn89esH40k1jgJHVCcLMQET22An68BgzaRGCmOJJKSiFptxQlM9aAqtlnfGX1decugWFyzTcpIIfGkCSVDbJRCzE5asZwh/cnlcnU2qUcaFxOv1DmZXlR/gW1OgaDeJigex29FWcgzQB4/mtFyolEKOkH4WMe1Okjlo3ACnBUyYzS1t5Hid+BYgijVRHJKuZgPkWyjrad5mNW2yTui1CdqAWvxNpH0ziwi1NrlxfiM2jcoD0KiTh5ijxF08jqgvq8cR/OjPUbDIyepAhHDgnVFLbo03Ija/H9ai8wSHr27Vf8WH5V6HRg0vOBubjeEAZ9IKEdPrekbL3BILDLJjkIyo0N/tC2iNoJjQPZyRYbGWFkBSJvAMBgHt8Ccsk1xAk0zQcj64/ySsVKZrYnke03tss4HfciXTEPyDKSL2hWpBwV0wQgN6VzcN5zN8bz3IIB0P070xO49ACEktt7THE+9iCcSMY9gz7rKPzNRN5+JDKG32ZdYRSiBiO9ytXM8DPUl8nTst10lxp/UmhPNOgFBto3YK9Cga9Ynv0EIxo7avDPaKmOHUwgE8O6ZnnMOhaS9Yb2rccgqoC/aDYzLojROFxBL/PRRfUGXvh/SbMUm8SeC7DIFeltEDOuy36nuMj0ly1Na+eEczigXcfZDT8mj0UO4XKXSuzRvBe9BOfsMQS780BmQftJSTJkA3AXaPhAcACtAM2gCS8AeMAS0PSNoLDXHtGqIyk1rN5xM6N9MHnW4O6VBWelffR6NYApR+cn7VYl3BsmBAr0LwYTRkHFegJotjdB2IyrD9WzdRTa9p5TO4WIl7KX5oqa7f8Nz2Iq+r6qjydPKdTOmnrrS1yqH4AK74opHxJaC32qBlWyItRUvKC7AwupBv1qguFmOkufwm+K6VYkRngv2gjcgq72j4RCo6uvsRPCtZyVfyMn1vAOsAm2gAcinKw8hh7LcIhfARxA3ya2b1qdGY29MbZRYDlO94zJr098NPgFt5wnKnxqQNgLZTdYGcJxfmJlX5GlAUz7hq3YSM+7yUKdSEG4q8gj+/CC5SgXmmAVeq3mf4Ltvh8QdRbhYpblTyzD3ETX/y0Ijyej/E6Z4u1D4zw7zn1ELPB1NT8Ke/nIhp/s3xT9YOHPXATkFrNX+BSB8ooU9mPUcAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>我的京东</strong></a></li>
                                    <li><a className="J_ping"  
                                            ><span
                                                className="shortcut-footprint" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAEDGXMMAAAAAXNSR0IArs4c6QAABMZJREFUWAmlmF+oFVUUxu+RMMoe0ohSQS4ZmBAU9P9BTAkFq5eghKDo3XpM0CL6A2VZcoUEIYgIIgp6sfIhIuuhMiJ7KpMsiEhvD964GZWWnn7fPnvtWXvPPnPn3hZ8Z6/9fd9aM3NmZs+cMzERYzgcnrB8kRKInQy/xHyoUeSdISk/EEJVyTdzv4HAQihuAc82tphJsd0YbRrBtrAj2XGdkFUhshyT0UQMK400s83DWCNrnJnTvnSZpL2nD2JgleuYHNCEcRdYHAT/ARkimpTLGI44+SDOSYmmd0mPgNBNPDETzCTa5HmrJN8N0rdrppyAxfOpFSUT5MUZOTI+nHGYPgZZR6bTmUmTiikU2RmvFWyFXFcT1OwwOJt1ZaLD93HOqh0ZbgLm+qJDmCeNsAeiloYkFgmGxUBnbJckxikwA6qnewtCV8xaf2eaMi6MUUiHlolxgmd59H1f07Wbg2i4p2pwJL7roneVo5sUcWU0aPgWjO6BxpKy6DuYiHEJxkXR/HjNE7Xsyqv5dKiro3ltzRC1z2taxmHcFs3ZqYVbE/nOk1I2W0bRr7HQhjcyk5/g0EWpCy3dE+TZxef9rRxzWEYYLUIjJmoawopszhiuauPDbexEpWPvJ+cLnq4mYZlMBpfQxFZEHaqge2tKe/IYsAjfPBNdM0+DQ+A78A7Y4PqpTg1CeD7ksD9FbdzwkIyIustDhEL7gAmLEuMrxtkINwnOAMVu47MR4ZEgD4dbMqGY4LGz1l5CEf9Qk6KmOpWPeLslQs5KaQkVQj5FS4K7PyjD4astsSDw6Yy1m8gHf1xijPuK2jRFf0meRJQJ2q0yxPi61DVHu1d6Tcs4PFrtqkZoWzYvUlH7NDWtTjdpK1semXCFdzW5uVXaELcrHQwGZxuqkulQiOpSOJKaQ+3aE7WeLPvT4Hjk1pdaa475YNyi7qe3wFdxrmF/q2AcgflJV6j0NLim6kfYCc6DMrR06m05C7j0FuEKsiUTXouWLWK6aZVnT5CsqSYYWm8gcGVkqyairQjely29fTzlzuhE31iSlXnpmcTzPDgZoXwS+HjdT2Je4xobR6CXvPJJ5o9YWnpENpULz+i3128g5s1rmTYI7Pms06DcHq+XkL8Iyoc91Nj4DeU5cGW523Dp+eWqZ8a+cakBxm0ML5fNmH8DPgQ/gz/BX+BysBrcAMrTCjWxj5Uk/A6gry7kF8CDEgidvu0hKz8wLwXTwEIPmNtK31xzataCH6wJo+7YO+aqy3QKvnQNXsvEBUzotdn1U3p3rzYYlxSF1/cqnMNEz0ddX92F/YKiT1zhR+Sd11afrvS4ANirkdpv7lOnC1dvdEdU4eJH8geA1qYFBbV+gd07ryYUXwreBLX4DLL+Q2nMVvDbDwv1OzrG1o+mwSZwWJ1cbOpXHZaKja7u7751nT4avu+aPtNpdiI1N7k6pcuc3PlO5X1l7h8Px0qxY77GabMsgqP/XRw5r5Sj2eqO7nfyXhc0Pv14P+pq98xrwzUzzZ5wDT+oeUoO/1XglKv7ovQsaE7Dq11TpXoFvKJsBqdHyg6gb8/HU6X3f83pvAIc81uYI/8HfTvoXDw7xT57zAYuxHcXuBZcBv4F0yA82blIz5D3iv8AygYvrfqZyYcAAAAASUVORK5CYII=) no-repeat center center",backgroundSize:"15px"}}></span><strong>浏览记录</strong></a></li>
                                </ul>
                            </div>
                            <div id="smartboxBlock" style={{display:"none"}}></div>
                            <div className="search_head_fixer_folder unfold" id="searchHeadff">
                                <div className="hide" id="keyshop"></div>
                                <div className="search_brand_list hide" id="brandOutBlock"></div>
                                <div className="banner hide J_ping" id="topBranner"   
                                    ></div>
                                <div className="hide" id="carBlock"></div>
                                <div className="hide" id="newuserCoupon"></div>
                            </div>
                            <div className="pro_filter_wrap" id="proFilterWrap" style={{height:"40px"}}>
                                <div className="inner xi" id="sortBlock">
                                    <div className="pro_filter" id="sortProBlock">
                                        <div className="pro_filter_items" id="barTabs" style={{height:"40px"}}>
                                            {(()=>{
                                                return this.state.gongneng.map((item,idx)=>{
                                                    return(
                                                        <a  key={idx}  onClick={this.cur.bind(this,idx)} className={this.state.cur==idx?"item has J_ping ad1":"item J_ping ad1"} id="sortTab" >
                                                            <span >{item}<i className="icon_tri"></i></span>
                                                        </a>
                                                    )
                                                })
                                            })()}
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="searchResBlock" >
                        
                        
                        
                        <div id="sFound4" className="search_tips fixed hide"></div>
                        <div className="search_prolist cols_1" id="itemList">
                            
                            
                            {(()=>{
                                return this.state.zon.map((item,idx)=>{
                                    return(
                                        <div lei={this.state.zonglei} index={item.ID} onClick={this.tz.bind(this,item)} key={idx} className="search_prolist_item" >
                                            <div className="search_prolist_item_inner J_ping" id="link_5089253" lb="0" ind="1" page="1"  pos="1"
                                                vid="1000000127"  csid="63d954c24194e476c4d2d7859438e234_1542870799183_1_1542870799183"
                                                ss_projid="0" ss_expid="0" ss_ruleid="0" ss_sexpid="0" ss_sruleid="0" symbol="8" ifad="1" ver="2"
                                                eventid="135"   >
                                                <div className="search_prolist_cover" >
                                                    <img className="photo"  src={item.imgurl}
                                                        inited="1" skuid="5089253" lpmark="0" />
                                                </div>
                                                <div className="search_prolist_info" >
                                                    <div className="search_prolist_title" data-line="2"  data-line-img="1">
                                                        {item.name}</div>
                                                    <div className="search_prolist_attr"> <span className="word">{item.price}</span>
                                                        <div></div>
                                                    </div>
                                                    <div className="search_prolist_price" id="price_5089253" >
                                                        <strong >
                                                            <em id="dp_J_5089253"  pri="6999.00">¥ <span className="int">{item.price}</span>.00</em>
                                                        </strong>
                                                    </div>
                                                    <div className="search_prolist_line"  id="nprice_5089253" can-fill="1">
                                                        <span className="search_prolist_coupon">券6000-300</span></div>
                                                    <div className="search_prolist_other text_small"  id="comtag_5089253"><i className="mod_tag"
                                                            ><img src="//img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png"/></i>
                                                        <span className="search_prolist_comment" ><span id="com_5089253" >107万+</span>条评价</span>
                                                        <span className="search_prolist_rate hide" >好评率<span id="rate_5089253">99</span>%</span>
                                                    </div>
                                                    <div className="search_prolist_other text_small hide"  id="bomtag_5089253"></div>
                                                    {/* <div className="search_prolist_secondHand" skuid="5089253" >查看同款二手</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            })()}
                        </div>
                        
                    </div>
                    
                    
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