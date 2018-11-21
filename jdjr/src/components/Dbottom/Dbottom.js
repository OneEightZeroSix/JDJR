import React, {
    Component
} from 'react'

import '../../assets/css/search.css';
import './Dbottom.css';
import cookie from "../../libs/cookie.js";



import { Link } from "react-router-dom";
// import { browserHistory } from 'react-router';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();


export class Dtop extends Component {
    constructor(props) {
        super(props)
        // this.props=props;
        this.state = {
            jin:'1'
        }
    }
    luyou(id){
        // console.log(this);
        this.setState({
            jin:id
        })
    }
    // 点击我的跳转判断是否登入
    wd(){
        var yhm=cookie.getCookie("yonghuming")||[];
        console.log(yhm);
        // console.log(this);
        if(yhm.length>0){
            // this.props.history.push("mine");
            // this.props.history.push("mine");
            // return <Link to={"mine"}></Link>
            window.location.href="http://localhost:3000/#/mine";
        };
        if(yhm.length==0){
            // this.props.history.push("login");
            window.location.href="http://localhost:3000/#/login";
        }
    }
    render() {
        return ( 
            <div id="commonNav" style={{backgroundColor:"rgb(255, 255, 255)"}}>
                
                <Link to={"/classify"} replace id="mCommonType" style={{width: "33.3%"}} className="J_ping" report-eventid="MCommonBottom_Category">
                    <div className="icon-center">
                        {(()=>{
                            if(history.location.hash.slice(2)=="classify" || history.location.hash.slice(2)=="Classify"){
                                return (
                                    <img className="nav-img" src="https://m.360buyimg.com/mobilecms/jfs/t17578/307/690695366/3731/8695ed50/5aa10cdbNf3977e9f.png"/>
                                )
                            }else{
                                return(
                                    <img className="nav-img" src="https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png"/>
                                )
                            }
                        })()}
                    </div>
                </Link>
                
                <Link to={"/cart"} replace id="mCommonCart" style={{width: "33.3%"}} >
                    <div className="icon-center">
                        <img className="nav-img" src="https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png"/>
                        <span className="cart-money"></span>
                    </div>
                </Link>
                <a  onClick={this.wd.bind(this)} id="mCommonMy" style={{width: "33.3%"}}className="J_ping">
                    <div className="icon-center">
                        {(()=>{
                            if(history.location.hash.slice(2)=="mine"){
                                return (
                                    <img className="nav-img" src="https://m.360buyimg.com/mobilecms/jfs/t18598/41/712219415/3756/7828621f/5aa10cf6Nbfbdc1af.png"/>
                                )
                            }else{
                                return(
                                    <img className="nav-img" src="https://m.360buyimg.com/mobilecms/jfs/t16849/271/702371255/4462/d55edd83/5aa10cf6Nee5122a5.png"/>
                                )
                            }
                        })()}
                    </div>
                </a>
            </div>
        )
    }
    
    componentDidMount() {
        //监控路由执行
        // var jin=location.hash.slice(2);
        // this.luyou.bind(this,jin);
        history.listen( (location) => {
            var jin=location.hash.slice(2)
            this.luyou.bind(this,jin)
        })
    }
}

export default Dtop