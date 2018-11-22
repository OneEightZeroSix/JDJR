import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// import './Xfooter.css';

class Xfooter extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            tab:0,
            tabs:[{
                title:"首页",
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90',
                href:"home",
                dot:false
            },{
                title:"赚钱",
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60',
                href:"makemoney",
                dot:false
            },{
                title:"借钱",
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60',
                href:"lendmoney",
                dot:true
            },{
                title:"省钱",
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60',
                href:"savemoney",
                dot:false
            },{
                title:"金融会员",
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60',
                href:"member",
                dot:false
            }]
        }
    }
    toggleTab(index){
        this.setState({
            tab:index
        })
    }
    render() {
        return (
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
                                <Link to={`/${item.href}/`} onClick={this.toggleTab.bind(this,index)} key={index} className="item"  data-qyy-eredid="0" data-qyy-eid="33340" jrmsc="on" data-qyy-click="" clstag="pageclick|keycount|Qing_67_4796|7674_33340|null" data-qyy-cardpageinfos="" data-qyy-ejumptype="1" data-qyy-jumpt="https://m.jr.jd.com/spe/qyy/main/index.html?userType=67&amp;sid=">
                                    <img src={item.src} alt=""/>
                                    <p className="blue" style={this.state.tab===index ? {color:'#4668FF'}:{color:'#B1B4BB'}}>{item.title}</p>
                                    {
                                        showDot()
                                    }
                                </Link>
                            )
                        })
                    })()}
                </div>
            </div>
            )
        }
    }

    export default Xfooter;