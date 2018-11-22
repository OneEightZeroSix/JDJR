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

  /*跳转到验证身份页面*/
  goConfrimId(){
      this.props.history.push('/confrimid/');
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
                <p clstag="pageclick|keycount|borrowmoney20180105|jintiao" className="txt3" onClick={this.goConfrimId.bind(this)}>申请开通</p>
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
