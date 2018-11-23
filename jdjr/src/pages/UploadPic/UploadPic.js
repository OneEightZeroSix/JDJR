import React, { Component } from 'react';

import './UploadPic.scss';

import { Upload, Icon, Modal,Progress} from 'antd';
import Cookie from '../../libs/cookie.js';


class UploadPic extends Component {
    constructor(props){
        super(props);
        console.log(this);
        this.state={
            isShowLayer:false,
            switchClass:true,
            progressNum:1,
            previewVisible: false,
            previewImage: '',
            fileList: [{
              uid: '-1',
              name: 'xxx.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        }
    }
    
    handleCancel = () => this.setState({ previewVisible: false })
    

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    
    
    /*设置定时器,点击上传的时候启动*/
    clickUpload(){
        /*获得cookie*/
        /*let uname=Cookie.getCookie('yonghuming');*/

        /*遮罩层*/
        this.setState({
            isShowLayer:true
        })

        /*动态进度条*/
        let i=0;
        let timer=setInterval(()=>{
            if(i<=100){
                i++;
                this.setState({
                    progressNum:i
                })
            }else{
                clearInterval(timer);
                this.setState({
                    isShowLayer:false  
                })
                console.log("跳转其他页面=====================================待做");
            }
        },30)
    }
    


    /*开启摄像头*/
    /*openCreame(){
        let video=this.props.refs.vdo,
        canvas= this.props.refs.cvs,
        img = this.props.refs.img,
        vendorUrl = window.URL || window.webkitURL;

        //媒体对象
        navigator.getMedia = navigator.getUserMedia ||
                             navagator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia;
        navigator.getMedia({
            video: true, //使用摄像头对象
            audio: false  //不适用音频
        }, function(strem){
            console.log(strem);
            video.src = vendorUrl.createObjectURL(strem);
            video.play();
        }, function(error) {
            //error.code
            console.log(error);
        });
    }*/


    render() { 
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
                <div className="uploadPic">
                    <div  style={{display:"block"}}>
                        <div className="header cl pos-re upheader">
                            <p id="realname-tip" className="basicAttention ft-24px col-999999">
                                <span>请上传你的证件图片</span>
                                <span className="headerCreame" onClick={this.openCreame}>开启摄像头</span>
                            </p>
                        </div>
         
                        <div className="uploadArea">
                            <div  className="decoration">请依次上传身份证的正、反面</div>
                            <div className="clearfix">
                                <Upload
                                  action="//jsonplaceholder.typicode.com/posts/"
                                  listType="picture-card"
                                  fileList={fileList}
                                  onPreview={this.handlePreview}
                                  onChange={this.handleChange}
                                >
                                  {fileList.length >= 2 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </div>

                        <div onClick={this.clickUpload.bind(this)}  id="confirmBtn"  className="makeSurebtn col-btn1Gray btn-can-press">
                            上传
                        </div>

                        <div className="textcont top col-999999 marginauto">以上图片用于身份验证</div>
                        <img src="https://static.360buyimg.com/finance/mobile/serviceCenter/certification/2.0.1//img/footer.png" className="confirm-footer-mt" alt="" />
                        <div style={{paddingTop:"30px"}}></div>
                        
                        {/*上传进度条*/}
                        <div className="layer" style={{transformOrigin:"0px 0px 0px", opacity:"1", transform:"scale(1, 1)", display:this.state.isShowLayer?'block':'none'}}>
                            <div className="select-box size18 select-anim">
                                <div className="select-list">
                                    <Progress type="circle" percent={this.state.progressNum} />
                                </div>
                            </div>
                        </div>
                    </div>

                        {/*摄像头*/}
                    {/*<div style={{display:"none"}}>
                        <div className="shexiang">
                            <video id="video" ref="vdo"></video>
                            <button >开始</button>
                            <canvas id='canvas' ref="cvs"></canvas>
                            <img id='img' src='' ref="img" />
                        </div>
                    </div>*/}
                    
                </div>
        );
    }
    
}

export default UploadPic;
