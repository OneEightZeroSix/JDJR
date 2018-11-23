import React, { Component } from 'react';

import './UploadPic.scss';

import { Upload, Icon, Modal } from 'antd';


class UploadPic extends Component {
    constructor(props){
        super(props);
        this.state={
            isShowLayer:true,
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
                
                    <div className="header cl pos-re upheader">
                        <p id="realname-tip" className="basicAttention ft-24px col-999999">
                        请上传你的证件图片
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

                    <div id="confirmBtn"  className="makeSurebtn col-btn1Gray btn-can-press">
                        上传
                    </div>

                    <div className="textcont top col-999999 marginauto">以上图片用于身份验证</div>
                    <img src="https://static.360buyimg.com/finance/mobile/serviceCenter/certification/2.0.1//img/footer.png" className="confirm-footer-mt" alt="" />
                    <div style={{paddingTop:"30px"}}></div>

                    <div className="layer" style={{transformOrigin:"0px 0px 0px", opacity:"1", transform:"scale(1, 1)", display:this.state.isShowLayer?'block':'none'}}></div>
                </div>
        );
    }
    
}

export default UploadPic;
