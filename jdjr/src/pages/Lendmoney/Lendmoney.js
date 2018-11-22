import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { Carousel } from 'antd'
import '../../assets/antd.css'
import './Lendmoney.scss';




class Lendmoney extends Component {
  constructor(props){
      super(props);
      this.state={
          isShowSmallCart:false,
          Banner:[{
            src:"https://img12.360buyimg.com/jrpmobile/jfs/t29287/168/126707867/159829/12bfec37/5be8d3b5N22c85dc1.png?width=1080&amp;height=240",
            href:""
          },{
            src:"https://img12.360buyimg.com/jrpmobile/jfs/t30595/13/280997098/57324/f8c24347/5bee212dN45cd3aec.png?width=1080&amp;height=240",
            href:""
          },{
            src:"https://img12.360buyimg.com/jrpmobile/jfs/t29287/168/126707867/159829/12bfec37/5be8d3b5N22c85dc1.png?width=1080&amp;height=240",
            href:""
          },{
            src:"https://img12.360buyimg.com/jrpmobile/jfs/t30595/13/280997098/57324/f8c24347/5bee212dN45cd3aec.png?width=1080&amp;height=240",
            href:""
          }],
          tabs:this.props.tabs
      }
  }

  showSmallCart(){
    this.setState({
        isShowSmallCart: !this.state.isShowSmallCart
    })
  }

  render() {
    return (
      
      <div className="jLendmoney">
        <aside id="pageLoading" className="page-loading" hidden="hidden" style={{display:"none"}}>
          <img src="//m.jr.jd.com/statics/pageLoading/loading.svg" />
        </aside>
        
        <div id="m_common_header" min-height="40px">
          <header className="jd-header">
              <div className="jd-header-new-bar">
                  <div id="m_common_header_goback" className="jd-header-icon-back J_ping">
                      <span></span>
                  </div>
                  <div className="jd-header-new-title">借钱</div>
                  <div  id="m_common_header_jdkey" className="jd-header-icon-new-shortcut J_ping">
                      <span onClick={this.showSmallCart.bind(this)}></span>
                  </div>
              </div>
          </header>
        </div>


        <section className="container mainIn">
          <div className="addBanner" id="addBanner">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t19783/355/938803703/27459/b16b944a/5ab0e9d7Na5432129.png?width=1863&amp;height=285" />
          </div>

          <section className="jdGoldContainer">
            <div className="jdGold"><img src="https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" />
                <p className="txt1">最高可借</p>
                <p className="txt2"><span>¥</span>300,000</p>
                <p clstag="pageclick|keycount|borrowmoney20180105|jintiao" className="txt3">申请开通</p>
            </div>
          </section>

          <section id="hasCarAndMoney" className="bannerAndCarContainer">
          
            <section id="bannerCont" className="swiper-container bannerContainer bannerLoginStatus swiper-container-horizontal">
                <Carousel autoplay>
                  <div className="swiper-slide "  ><img src="https://img12.360buyimg.com/jrpmobile/jfs/t30277/153/410933370/62629/1bde9d7f/5bf2678fN9ace94da.png?width=1080&amp;height=240"  className="imgPic" /></div>
                  <div className="swiper-slide" ><img src="https://img12.360buyimg.com/jrpmobile/jfs/t30595/13/280997098/57324/f8c24347/5bee212dN45cd3aec.png?width=1080&amp;height=240"  className="imgPic" /></div>
                  <div className="swiper-slide "  ><img src="https://img12.360buyimg.com/jrpmobile/jfs/t30277/153/410933370/62629/1bde9d7f/5bf2678fN9ace94da.png?width=1080&amp;height=240"  className="imgPic" /></div>
                  <div className="swiper-slide" ><img src="https://img12.360buyimg.com/jrpmobile/jfs/t30595/13/280997098/57324/f8c24347/5bee212dN45cd3aec.png?width=1080&amp;height=240"  className="imgPic" /></div>
                </Carousel>
            </section>
            
            <section className="hasCarAndMoney">
              <h2>有车有钱</h2>
              <div className="imgBox">
                  <img src="https://img12.360buyimg.com/jrpmobile/jfs/t26410/82/1197118504/78608/76eb9a19/5bc40c2bNa6734d34.png?width=375&amp;height=233" />
                  <img src="https://img12.360buyimg.com/jrpmobile/jfs/t26107/112/1207936110/82835/78b44bc9/5bc40c53N864d17dc.png?width=375&amp;height=233"  />
              </div>
              <section id="mySwiperIconGroup" className="swiper-container mySwiper swiper-container-horizontal">
                      <div className="iconSwiper swiper-wrapper">
                          <div className="iconSwiperSlide swiper-slide swiper-slide-active" style={{width:"320px"}}>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/5099/26/7010/4745/5ba49a45E04bce36d/6275b5c0b703416a.png?width=90&amp;height=90" />
                                  <p>机票</p>
                              </div>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&amp;height=88" />
                                  <p>租房</p>
                              </div>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&amp;height=90" />
                                  <p>房抵贷</p>
                              </div>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&amp;height=88" />
                                  <p>分期用</p>
                              </div>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&amp;height=90" />
                                  <p>分期商城</p>
                              </div>
                          </div>
                          <div className="iconSwiperSlide swiper-slide swiper-slide-next" style={{width:"320px"}}>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&amp;height=90" />
                                  <p>教育</p>
                              </div>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&amp;height=90" />
                                  <p>车险</p>
                              </div>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&amp;height=88" />
                                  <p>家装</p>
                              </div>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&amp;height=90" />
                                  <p>医美</p>
                              </div>
                              <div  className="iconBox"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&amp;height=90" />
                                  <p>驾校</p>
                              </div>
                          </div>
                      </div>
                      <div id="iconPagination" className="swiper-pagination swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span className="swiper-pagination-bullet"></span></div>
              </section>
            </section>          
  
            <section className="whitServiceContainer"><h2>白条服务</h2>
              <div className="whiteServiceBox">
                  <div className="whiteLeft"><img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png"/>
                  </div>
                  <div  className="whiteRight"><img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" />
                      <p className="txt1">60.3</p>
                      <p className="txt2">小白信用</p>
                      <p className="txt3">立即开通</p>
                  </div>
              </div>
            </section>
            
            <input  id="qyy-usertype" type="hidden" />
          </section>
        </section>

        <section className="signBox" id="signBtn" ></section>

        <div className="qyy-body qyy">
          <input type="hidden" id="qyy-data-input" />
          <div className="wrap">
            <div className="section section-48 hasPadding  hasFloorBottom" style={{background:""}}>
              <div className="row row-title">
                  <div className="com-title maxWidth100" style={{color:""}}>精品活动</div><div className="com-desc bg-none" style={{color:""}}>
                  </div>
              </div>
              <div className=" row row-48 double-banner "><div className=" item">
                  <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t27052/245/1773499928/78249/ffb0dbbf/5bed689cN9ade6333.png?width=376&amp;height=264" className="test-lazyload" alt="" /></div>
                  </div>
                  <div className="item">
                      <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t22264/337/1504407440/65624/b7d95603/5b2afbeaN7987d0b2.png?width=376&amp;height=264" className="test-lazyload" alt="" />
                      </div>
                  </div>
              </div>
              <div className="row whole-banner ">
                  <div className="img-wrap bg-none min-height-0"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/5039/38/8730/119823/5baa0522Ef94e26bc/bbd1d4dd4fd62e77.png?width=730&amp;height=264" className="test-lazyload" alt="" />
                  </div>
              </div>
              <div style={{marginBottom:"55px"}}></div>
            </div>
            
            <div className="section section-38  hasTopPadding noFloorBottom" style={{background:"#f3f5f7"}}>
              <div className="add-bottom" id="qyy-add-bottom">

                  {(()=>{
                        return this.state.tabs.map((item,index)=>{
                          return (
                            <Link to={`/${item.href}/`} onClick={this.props.skipTo.bind(this,item,index)}  key={index} className="item"><img src={item.src} className="user-img" alt="" />
                              <p className="blue" style={this.props.tab===index?{color:"#4668FF"}:{color:"#B1B4BB"}}>{item.title}</p>
                            </Link>
                          )
                        })
                  })()}
              </div>
          </div>

          </div>
        </div>

        <div id="header-shortcut-ul">
          <ul id="m_common_header_shortcut" className="jd-header-vertical-shortcut" style={{display:this.state.isShowSmallCart? 'block':'none'}}>
            <li id="m_common_header_shortcut_m_index"><a className="J_ping"  href="https://m.jd.com"><span className="shortcut-index" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAYAAAG2bMCoAAAAAXNSR0IArs4c6QAAA2hJREFUWAnNmD1IVmEUx30tizAUDKPACBIcbWqwtsB2Q9obmgJdCxsDA1sFQWiMpqZaQ1tToiV0iQbBFoWgoC+q3/96z+O53x+vL3Xg9JyP//9/nue993ov9fUV2R/MeoRzFuevQmND+qdjECUWh5Xa25AooDAcr1l0QJqWrVEjkQSoCwCs4fsqZcAUxjPFJPlG6BNsuV4iTPQCw420mq3+F1o0qU6ncx+A5W/In1svrACSv17ouMDGsO7ja651EFKcM5A1yYd9rT9OtthH2K/ApJ9VUx8bN4F6K4xmvyOE6K7SLBvh43BdrWirwBb3G7NqjU4K6ybAKwJzUH9VorxKRGOnNDplU2XEzBYhnzIBiNP6zb2pZn1hC8Vp7sbAzUJQqgF+M+bshhaFD/i3UGgZSENaLek1aKhHVgOagKR5mYvi0YB3YsIiq1y24zGF8QH28JYWMF1L53kYv8MnHiCy8jwzYYeJuHnYTA3SLfyr1kyzSQEB3U7emt8SsMecwqw2QD7ramO1NgVhJSb9Yj3mScpx1WUrvpeJAejulj3LNF1B/QiV90TR8A/3hOMVhnAmYkEt0xGQYCMuHj7IhRLZBlz747FhN+h8Fla/guC8NlSf8c+Qbbfpef757PogpWJMXddkZ+tlE8NLXQS9WDxYNfJVfA8/g9/Jw6Rr0S0COGGxWKilczV8rfSYQaVmcKRix/1Qv2Vf93EZxosNQHqAn/TkVPwolX8nf5iqtUvZpb6xnmq3Oab6UDvlliwG6vtzAf+Je1slOY9r9SbcAn6k1zuxfcRn8D3c22uSCwlgnKiOq+9N/Jk8fOMaQpP4e69O/BG/2kQM/LWYxxJMupNNdPQQj+IvgsRB8IXldiOhArB0cOl507zRXAqNAXwJ/42bKX6Mn8gldVmUbqyfnql96EmP/txtk3h7SXK2y9mN6JqHa663bV3GQfwSfrqRYo/A2ke8n8EejeiRLLu+iN/V2qMRCdmyeYn3u1iAw1dY5j2ekD2apGyefxc2noawDncdv4z7p/oH+Tv8FQcMhyXvznQSszIlMMuGq1iXK3QCPY1rfVmlaGJ5l7+qb9wyXO9exja9i/W/3lzeA/GJw57TgfnJl1j0Zd6VoXOvQEBf/GaaW24IjeD2X0aE1ZanWM1KIDRvJK3zF+VnwY9g2V+mAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>首页</strong></a></li>
            <li id="m_common_header_shortcut_category_search"><a className="J_ping"  href="https://so.m.jd.com/category/all.html"><span className="shortcut-search" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAFp3oPPAAAAAXNSR0IArs4c6QAAAzJJREFUWAnVljtrVFEQx3dN8IVY+UphUmgjVkq00VLER2LrB/CDCEISQcTCTrBTCYpgtLC3UAv1A5hYWEaEKFlNNmZdf//rmbOzd+9rV1l0YPbM4z//M3vPnXtvreak3W5vOrdWI9BWQOsWl/kSbFs7qQTJz6wME6XrhiF4HHvN/Lh6xCTR6HcQIoyeDPy4U/AbxFSu3DF0RXaXEOxiSXx+ZmRIDI15BP2BvrNY4Qqwt2tVkHiDvojVOCazAeC3jbYv6FSHKAwv/bEovDNWFBna2/LRlhFkxiVfE3uluMVyVzBX0d25AEsAqtf5KaOcs4LCFZ4VkWVIIxaSjOfrgMkfxdc5S5I7JxYFg7juJMnR7PPtADVAI3UkTWK+WLCb6YOzvK0nZYDN6+hEAE52DYHYgyT3lbER02BkSecaGXiQNTC/VW3uf69KLDKwvY+XqgQ9OAizjj90XXmJc9GzQToA5U30K/oZrXYnGwkFl9A8OZfgyDZTiKYjmAi5RYvZSvx9yI3r3lkPji3rDqhYy/z0Sm4T/ZmOd/liQKa6gs4hNy2AC/WaAiDbezO/I+R2CFA2U0KfySOxXOHdq10Athjw0Swi0rpe9bJOJgCNAM46nSVyqj+k08k9YgDKX0Dz5KwwhUecAMIPLNdRPUqX0WuoZN5j+rYheJDQcDiFF7aMWSRgPpXhCvNwXA5EhbjSJCS5N2NpsQfoLaip3eqDfdobulmKB6ic8U/rOzvwj8bR52gVeQJI0/B3BdLz6IbrQM+qeyG+h3UU3Ydqgu6jypuobjp2hLNqmZJ1NRYFA/yCq1nC3p/GZPng9qL2pBbFsyxc5RgEc2IJMtBYU/vICFj7e6n5TinWW9FkzOeq2hQfMALW5bJHbhGvf5YXv8/yWfz+ld5EeVR3XeK2s/sxbznwHWf3b3Jp/Sgv6rJXYREO/YCaPK5SV4qBTR9HfrRb+PPoFDqGbkM12vqyeIimR/ti3ITkwKMdSTDgmUCfolXlO8BxzzF0mwZOpbo9PfQm/IY0cxD95pq64vNDt2lEH5YfXUM3/JwPtSG+OddQvSztVXB4qA38V5vpy0pv413/QNeNXxjWvZIdtAPeAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>分类搜索</strong></a></li>
            <li id="m_common_header_shortcut_p_cart"><a className="J_ping"  href="https://p.m.jd.com/cart/cart.action"><span className="shortcut-cart" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAF9MBMNAAAAAXNSR0IArs4c6QAAAvNJREFUWAnNWDtOHEEQ3TWWFwksITniADiFBB/AOaEtgSUOQYhDG0JSDoGELYGPQL6k+AAOWGmDxRKgxetXreqe6u6q+e14cUtDd1W9eq96aqYZ6M1ms+NeMvpkIzBL/LnzJSO2LPSEqSYqnxNiRC7m1cE9zUrqY7zwCDL8OsxIy3YWgnKh1s4AigUZ+H7KxGT9NrFLTKLFeCyBFCFCFpa+8jW6+oA/oiRlDF06Aps6j2txvBGAjzQw/NPIT3KRgw3v9w+Lc3unltDOlzJGNoz0lmy1k1GySAkjPBtYHztP/R9fIlrkfaXcyFnTYM39DM6BRttGzinlZWTkYMIbNWg4OedUDSPomqQGFSfw+0SohAoX4o8EajCqjw2QjZlwu5AqVlbcv6YFct4VlB64EpqqSy8R7BMZ4q88Rj1XfbDuDNLWD3OmAbJNXFHLYcpbQOGycR+agO1dkwLQjd4KUdUgkAnnB7+GwIDuYdUA/ofPCTPvIZwqIVCx4LzbCAbnDQUiZw2DyQ4jKJyNO4qcVSZbTcmyjkYAxQDRZyJTQuFYqt1R8Iw8mdZNEgkdVRVj5xuYl7GLLVJpMd5bZE1/ydT73FDVmjqxzW3e6ljLrYpHOQBPmExteVU8JXvHZFZlapwOR/qajZ/egpq+hV7jRb8vXM+8QsHnvFOaPj1XOdZLdSYKavKCibT5l/nfDeDE3Rpg+o1rCdcfXCtpa4EpexyQMve4Mxkg/g2XHwtpLcTcocui+iccVQzArq8M83dzFx0GoOMOcdbdMKkBWMY1ZeAT2Sa4gwD43Tcq611UUgK4sNZCa8iF0aT/opEVA7QnEv5Za6kYoTOUNZhrJCyktdC5FMXlf2lZFSJJtnbPwrX1g39DFDaSPNYhLDHyQP4oAx2tDwTPiVj31ENYArArekvpwI3+iyAxHa2fwLOGw94+fDsS6oSm8s6lKriT6/DtsP8CO/2VYsrsefNNbhBf4UrHlZmQBJDYKL/OC5FILM78r9v6Fx346V9Ef2tUAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>购物车</strong></a></li>
            <li id="m_common_header_shortcut_h_home" className=" current"><a className="J_ping"  href="https://home.m.jd.com"><span className="shortcut-home" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAjCAYAAAFgNSO1AAAAAXNSR0IArs4c6QAAA8VJREFUWAm9mF9ojlEcx/duM2PZFnZjqV0oRSLZFe3CBVfcTdxQUtxYcYXQ8ifKJZKiGCEXXGBlKDUpiuRKLS2WEuVPW2hmr8/v2Tnv+zvPc877Ps/el199d35/vr/vOc/7vOect9XUGMvn89esH40k1jgJHVCcLMQET22An68BgzaRGCmOJJKSiFptxQlM9aAqtlnfGX1decugWFyzTcpIIfGkCSVDbJRCzE5asZwh/cnlcnU2qUcaFxOv1DmZXlR/gW1OgaDeJigex29FWcgzQB4/mtFyolEKOkH4WMe1Okjlo3ACnBUyYzS1t5Hid+BYgijVRHJKuZgPkWyjrad5mNW2yTui1CdqAWvxNpH0ziwi1NrlxfiM2jcoD0KiTh5ijxF08jqgvq8cR/OjPUbDIyepAhHDgnVFLbo03Ija/H9ai8wSHr27Vf8WH5V6HRg0vOBubjeEAZ9IKEdPrekbL3BILDLJjkIyo0N/tC2iNoJjQPZyRYbGWFkBSJvAMBgHt8Ccsk1xAk0zQcj64/ySsVKZrYnke03tss4HfciXTEPyDKSL2hWpBwV0wQgN6VzcN5zN8bz3IIB0P070xO49ACEktt7THE+9iCcSMY9gz7rKPzNRN5+JDKG32ZdYRSiBiO9ytXM8DPUl8nTst10lxp/UmhPNOgFBto3YK9Cga9Ynv0EIxo7avDPaKmOHUwgE8O6ZnnMOhaS9Yb2rccgqoC/aDYzLojROFxBL/PRRfUGXvh/SbMUm8SeC7DIFeltEDOuy36nuMj0ly1Na+eEczigXcfZDT8mj0UO4XKXSuzRvBe9BOfsMQS780BmQftJSTJkA3AXaPhAcACtAM2gCS8AeMAS0PSNoLDXHtGqIyk1rN5xM6N9MHnW4O6VBWelffR6NYApR+cn7VYl3BsmBAr0LwYTRkHFegJotjdB2IyrD9WzdRTa9p5TO4WIl7KX5oqa7f8Nz2Iq+r6qjydPKdTOmnrrS1yqH4AK74opHxJaC32qBlWyItRUvKC7AwupBv1qguFmOkufwm+K6VYkRngv2gjcgq72j4RCo6uvsRPCtZyVfyMn1vAOsAm2gAcinKw8hh7LcIhfARxA3ya2b1qdGY29MbZRYDlO94zJr098NPgFt5wnKnxqQNgLZTdYGcJxfmJlX5GlAUz7hq3YSM+7yUKdSEG4q8gj+/CC5SgXmmAVeq3mf4Ltvh8QdRbhYpblTyzD3ETX/y0Ijyej/E6Z4u1D4zw7zn1ELPB1NT8Ke/nIhp/s3xT9YOHPXATkFrNX+BSB8ooU9mPUcAAAAAElFTkSuQmCC) no-repeat center center",backgroundSize:"15px"}}></span><strong>我的京东</strong></a></li>
            <li id="m_common_header_shortcut_h_footprint"><a className="J_ping"  href="https://home.m.jd.com/myJd/history/wareHistory.action?functionId=liulanjilu"><span className="shortcut-footprint" style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAEDGXMMAAAAAXNSR0IArs4c6QAABMZJREFUWAmlmF+oFVUUxu+RMMoe0ohSQS4ZmBAU9P9BTAkFq5eghKDo3XpM0CL6A2VZcoUEIYgIIgp6sfIhIuuhMiJ7KpMsiEhvD964GZWWnn7fPnvtWXvPPnPn3hZ8Z6/9fd9aM3NmZs+cMzERYzgcnrB8kRKInQy/xHyoUeSdISk/EEJVyTdzv4HAQihuAc82tphJsd0YbRrBtrAj2XGdkFUhshyT0UQMK400s83DWCNrnJnTvnSZpL2nD2JgleuYHNCEcRdYHAT/ARkimpTLGI44+SDOSYmmd0mPgNBNPDETzCTa5HmrJN8N0rdrppyAxfOpFSUT5MUZOTI+nHGYPgZZR6bTmUmTiikU2RmvFWyFXFcT1OwwOJt1ZaLD93HOqh0ZbgLm+qJDmCeNsAeiloYkFgmGxUBnbJckxikwA6qnewtCV8xaf2eaMi6MUUiHlolxgmd59H1f07Wbg2i4p2pwJL7roneVo5sUcWU0aPgWjO6BxpKy6DuYiHEJxkXR/HjNE7Xsyqv5dKiro3ltzRC1z2taxmHcFs3ZqYVbE/nOk1I2W0bRr7HQhjcyk5/g0EWpCy3dE+TZxef9rRxzWEYYLUIjJmoawopszhiuauPDbexEpWPvJ+cLnq4mYZlMBpfQxFZEHaqge2tKe/IYsAjfPBNdM0+DQ+A78A7Y4PqpTg1CeD7ksD9FbdzwkIyIustDhEL7gAmLEuMrxtkINwnOAMVu47MR4ZEgD4dbMqGY4LGz1l5CEf9Qk6KmOpWPeLslQs5KaQkVQj5FS4K7PyjD4astsSDw6Yy1m8gHf1xijPuK2jRFf0meRJQJ2q0yxPi61DVHu1d6Tcs4PFrtqkZoWzYvUlH7NDWtTjdpK1semXCFdzW5uVXaELcrHQwGZxuqkulQiOpSOJKaQ+3aE7WeLPvT4Hjk1pdaa475YNyi7qe3wFdxrmF/q2AcgflJV6j0NLim6kfYCc6DMrR06m05C7j0FuEKsiUTXouWLWK6aZVnT5CsqSYYWm8gcGVkqyairQjely29fTzlzuhE31iSlXnpmcTzPDgZoXwS+HjdT2Je4xobR6CXvPJJ5o9YWnpENpULz+i3128g5s1rmTYI7Pms06DcHq+XkL8Iyoc91Nj4DeU5cGW523Dp+eWqZ8a+cakBxm0ML5fNmH8DPgQ/gz/BX+BysBrcAMrTCjWxj5Uk/A6gry7kF8CDEgidvu0hKz8wLwXTwEIPmNtK31xzataCH6wJo+7YO+aqy3QKvnQNXsvEBUzotdn1U3p3rzYYlxSF1/cqnMNEz0ddX92F/YKiT1zhR+Sd11afrvS4ANirkdpv7lOnC1dvdEdU4eJH8geA1qYFBbV+gd07ryYUXwreBLX4DLL+Q2nMVvDbDwv1OzrG1o+mwSZwWJ1cbOpXHZaKja7u7751nT4avu+aPtNpdiI1N7k6pcuc3PlO5X1l7h8Px0qxY77GabMsgqP/XRw5r5Sj2eqO7nfyXhc0Pv14P+pq98xrwzUzzZ5wDT+oeUoO/1XglKv7ovQsaE7Dq11TpXoFvKJsBqdHyg6gb8/HU6X3f83pvAIc81uYI/8HfTvoXDw7xT57zAYuxHcXuBZcBv4F0yA82blIz5D3iv8AygYvrfqZyYcAAAAASUVORK5CYII=) no-repeat center center",backgroundSize:"15px"}}></span><strong>浏览记录</strong></a></li>
          </ul>
        </div>

        <div id="header-mask" style={{display:"none"}}></div>
      </div>
    )
  }


//   componentDidMount (){
//     this.init()
//   }
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
})(Lendmoney);
