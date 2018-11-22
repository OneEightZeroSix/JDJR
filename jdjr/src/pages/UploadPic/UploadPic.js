import React, { Component } from 'react';

import './UploadPic.scss';




class UploadPic extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }

    }

    render() { 
        return (
                <div className="uploadPic">
                
                    <div className="header cl pos-re upheader">
                        <p id="realname-tip" className="basicAttention ft-24px col-999999">
                        请上传你的证件图片
                        </p>
                    </div>

                    <div className="pic">
                        你好
                    </div>

                    <div id="confirmBtn"  className="makeSurebtn col-btn1Gray btn-can-press">
                        下一步
                    </div>


                    <div className="textcont top col-999999 marginauto">以上图片用于身份验证</div>
                    <img src="https://static.360buyimg.com/finance/mobile/serviceCenter/certification/2.0.1//img/footer.png" className="confirm-footer-mt" alt="" />
                    <div style={{paddingTop:"30px"}}></div>
                </div>
        );
    }
    
}

export default UploadPic;
