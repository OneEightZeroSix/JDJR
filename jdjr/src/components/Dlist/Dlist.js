import React, {
    Component
} from 'react'
import $ from  'jquery';

import '../../assets/css/Dindexcurtain.css';
import '../../assets/css/Ddex.css';
import './Dlist.css';

export class Dtop extends Component {
    constructor(props) {
        super(props)

        this.state = {
                cur:0,
                height:"100%",
                lei:[{
                        name:"热门推荐"
                },{
                        name:"手机数码"
                },{
                        name:"家用电器"
                },{
                        name:"电脑办公"
                },{
                        name:"计生情趣"
                },{
                        name:"美妆护肤"
                },{
                        name:"个护清洁"
                },{
                        name:"汽车用品"
                },{
                        name:"京东超市"
                },{
                        name:"男装"
                },{
                        name:"男鞋"
                },{
                        name:"女装"
                },{
                        name:"女鞋"
                },{
                        name:"母婴童装"
                },{
                        name:"图书音像"
                },{
                        name:"运动户外"
                },{
                        name:"内衣配饰"
                },{
                        name:"食品生鲜"
                },{
                        name:"酒水饮料"
                },{
                        name:"家具家装"
                },{
                        name:"家居厨具"
                },{
                        name:"箱包手袋"
                },{
                        name:"钟表珠宝"
                },{
                        name:"玩具乐器"
                },{
                        name:"医药保健"
                },{
                        name:"宠物生活"
                },{
                        name:"礼品鲜花"
                },{
                        name:"农资绿植"
                },{
                        name:"生活旅行"
                },{
                        name:"奢侈品"
                },{
                        name:"全球购"
                },{
                        name:"艺术邮币"
                },{
                        name:"二手商品"
                },{
                        name:"特产馆"
                },{
                        name:"京东金融"
                },{
                        name:"国际名牌"
                },{
                        name:"拍卖"
                },{
                        name:"房产"
                }],
                
                lan:[
                        [       
                                [
                                        
                                ],[       
                                        ["浏览记录"],
                                        [{name:"手机",url:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"}],
                                        [{name:"洗衣机",url:"https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png"}],
                                        [{name:"蓝牙耳机",url:"https://img30.360buyimg.com/focus/s140x140_jfs/t1/6167/13/2827/3094/5bd2dbc8Edd449236/647416c61d30f0a4.jpg"}]  
                                ],[       
                                        ["热门分类"],
                                        [{name:"手机",url:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"}],
                                        [{name:"充电宝",url:"https://img20.360buyimg.com/focus/s140x140_jfs/t24253/294/2182777138/4059/429945c9/5b76990bNde226fbc.png"}],
                                        [{name:"华为",url:"https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png"}], 
                                        [{name:"路由器",url:"https://img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png"}],
                                        [{name:"蓝牙耳机",url:"https://img30.360buyimg.com/focus/s140x140_jfs/t1/6167/13/2827/3094/5bd2dbc8Edd449236/647416c61d30f0a4.jpg"}],
                                        [{name:"保暖内衣",url:"https://img13.360buyimg.com/focus/s140x140_jfs/t1/8075/17/2528/6114/5bd2e6adE0393f846/f14954f284a56cc3.png"}],
                                        [{name:"袜子",url:"https://img13.360buyimg.com/focus/s140x140_jfs/t1/2218/31/12406/9370/5bd2e748E843c7885/a143d0c4244bb145.png"}],
                                        [{name:"iPhoneX",url:"https://img14.360buyimg.com/focus/s140x140_jfs/t1/5163/2/12280/5740/5bd2e5ecEc3fc56ad/ab2d17a2ae3002c0.png"}],
                                        [{name:"面膜",url:"https://img20.360buyimg.com/focus/s140x140_jfs/t28384/233/81224514/37765/8da180d4/5be6f0bbNcbb7f449.png"}],
                                        [{name:"男士内裤",url:"https://img10.360buyimg.com/focus/s140x140_jfs/t1/5330/25/9335/25245/5baca7a4E7b11c7aa/f207304f560ea653.jpg"}],
                                        [{name:"洗发水",url:"https://img13.360buyimg.com/focus/s140x140_jfs/t27148/342/1635695637/15397/d4ed72c2/5be6f2e8Nfcdab97b.png"}],
                                        [{name:"抽纸",url:"https://img11.360buyimg.com/focus/s140x140_jfs/t25981/3/2531207827/28017/74a9cf02/5be6f2edNbe45f02b.png"}],  
                                        [{name:"剃须刀",url:"https://img13.360buyimg.com/focus/s140x140_jfs/t1/1860/37/9649/15932/5baca7b1Ecf514d87/02361661c2a70908.png"}],
                                        [{name:"洗衣液",url:"https://img30.360buyimg.com/focus/s140x140_jfs/t1/9/15/10624/7280/5baca797E43b008fe/9bbe27f6503a4fd6.png"}],
                                        [{name:"鼠标",url:"https://img20.360buyimg.com/focus/s140x140_jfs/t27205/124/1568993455/17417/c6e116aa/5be6f126N9aea8ef3.png"}]
                                ],[       
                                        ["加点热搜"],
                                        [{name:"冰箱",url:"https://img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png"}],
                                        [{name:"洗衣机",url:"https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png"}],
                                        [{name:"电视",url:"https://img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png"}]  
                                ],[       
                                        ["热卖手机"],
                                        [{name:"华为手机",url:"https://img30.360buyimg.com/focus/s140x140_jfs/t16333/58/1091559738/36108/3a56903e/5a4f4872Ndb69555f.png"}],
                                        [{name:"小米手机",url:"https://img20.360buyimg.com/focus/s140x140_jfs/t16366/16/1307996090/39842/dbaa3c73/5a4f4867Ncb588473.png"}],
                                        [{name:"苹果",url:"https://img30.360buyimg.com/focus/s140x140_jfs/t14245/137/2069922478/30524/1e8fc597/5a69d582N25086304.png"}]  
                                ]
                        ]
                ]
        }
    }
    togglecur(idx,e){
        
        var branchList=document.getElementById("branchList");
        // 更改值从而改变类别橙色字体
        branchList.scrollTop=0;
        this.setState(
            {cur:idx}
        );
        
        console.log(branchList);
        console.log(branchList.scrollTop);
        // branchList.scrollTop=0;
        // 减速运动
        
        var e=e.target.parentElement.parentElement;
        console.log(e.scrollTop);
        
        var timer = setInterval(() => {
                console.log(666);
                var currentTop = e.scrollTop;
                var speed = Math.floor((46*idx) / 10);
                currentTop += speed;
                // console.log(e.scrollTop);
                if (currentTop >= 46*(idx-1) ||e.scrollTop==1344) {
                        currentTop = 46*idx;
                        clearInterval(timer);
                }
                e.scrollTo(0, currentTop);
        }, 30);
    }
    //数据请求
    loadMore(){
        React.axios.get("/json/Dlist.json", {
             
        }).then((response) => {
                console.log(response);
                this.setState({
                        lan:this.state.lan.concat(response.data.lan)
                })
        }).catch(function (error) {
            console.log(error);
        });
        
    }
    render() {
        return ( 
            <div id="categoryBody" className="category-viewport category-categoryNewUi">
                <div id="rootList" className="jd-category-tab">
                    <div style={{overflow: "hidden",height: "100%"}} id="category3">
                        <ul style={{overflowX:"scroll",height:"100%",position:"fixed",padding:"46px 0 60px 0"}} id="category2">
                                {(()=>{
                                      return  this.state.lei.map((item,idx)=>{
                                               return(
                                                   <li onClick={this.togglecur.bind(this,idx)} className={this.state.cur==idx?"cur":""} key={idx} m_cid="WQR2006" id="category6" commonused="false">
                                                        <a className="J_ping" report-eventparam="2006_null" report-eventid="MCategory_1st" report-eventlevel="2">{item.name}</a>
                                                   </li>    
                                               ) 
                                        })
                                })()}
                            
                        </ul>
                    </div>
                </div>
                <div className="jd-category-content">
                    <div id="branchScroll" style={{overflow: "hidden", height: "100%",paddingBottom:"60px", position:"fixed",width: "80%"}} className="jd-category-content-wrapper">
                        <div id="branchList" style={{overflowY:"scroll",height:"100%",marginTop:"38px"}}>
                            <div className="jd-category-third-promotion">
                                <ul data-slide-ul="firstUl" style={{margin:" 0px auto", width: "230px"}}>
                                    <li data-ul-child="child" style={{transition: "all 0ms ease 0s",height: "auto",position:"absolute",left:"0px",top: "0px",transform: "translate3d(0px, 0px, 0px)",zIndex: "10"}}><a
                                            className="J_ping" report-eventparam="null_1971" report-eventid="MCategory_Banner"
                                            report-eventlevel="2"  ><img
                                                src="//img30.360buyimg.com/mcoss/jfs/t13219/268/1743066918/91817/3175b47d/5a28ede8Nea02839c.jpg"/></a>
                                    </li>
                                </ul>
                                {/* 右侧顶部的大图 */}
                                {(()=>{
                                        if(this.state.lan[this.state.cur][0].length>0){
                                                var url=this.state.lan[this.state.cur][0][0].url;
                                                return(
                                                        <img src={url}  style={{opacity: "0"}}/>
                                                 )
                                        }
                                })()}
                                <div className="focus-btn" data-small-btn="smallbtn" style={{display: "none"}}><span className="active"
                                        data-ol-btn="btn"></span></div>
                            </div>
                            {/* 生成右侧的列表项 */}
                            {(()=>{
                                        var shuju=this.state.lan[this.state.cur].slice(1);
                                        return shuju.map((item,idx)=>{
                                                var qie=item.slice(1);
                                                return(
                                                        <div className="jd-category-div cur" key={idx}>
                                                                <h4>{item[0]}</h4>
                                                                <ul className="jd-category-style-1">
                                                                        {(()=>{
                                                                                return qie.map((item,idx)=>{
                                                                                        return(
                                                                                                <li key={idx}>
                                                                                                        <a className="J_ping" report-eventparam="65002_1971_64986_null" report-eventid="MCategory_3rd"
                                                                                                        report-eventlevel="2" id="branch_92"  >
                                                                                                                <img src={item[0].url} id="Imglazyload178"/>
                                                                                                                <span style={{
                                                                                                                        display:"inline-block",
                                                                                                                        textAlign:"center"
                                                                                                                }}>{item[0].name}</span>
                                                                                                        </a>
                                                                                                </li>
                                                                                        )
                                                                                })
                                                                        })()}
                                                                        
                                                                </ul>
                                                        </div>
                                                )
                                        })
                                })()}
                            
                        </div>
                        <div id="category4" className="jd-category-loadfail" style={{display:"none"}}>
                            <div className="loadfail-content">
                                <div className="failing"></div><span>加载失败</span><a id="category5" className="btn-loadfail"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
    componentDidMount() {
        this.loadMore();
        console.log(this.state.lan);
    }
}


export default Dtop