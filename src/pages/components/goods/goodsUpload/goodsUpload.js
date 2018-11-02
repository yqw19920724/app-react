import React, { Component } from 'react';
import './goodsUpload.less';
import { Input, Button, Icon } from 'antd';
import CommonModule from '../../../../common/commonModule'

class GoodsUpload extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {
            imageData: undefined,
            imageUrl: undefined,
            loading: false,
            goodName: null,
            goodPrice: null
        }
    }

    handleChange = () => {
        const image = document.getElementById('file-upload');
        console.log(image);
        if(image && image.files && image.files.length === 1){
            const file = image.files[0];
            var reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onloadstart = () => {
                this.setState({
                    loading: true
                })
            }
			reader.onload = (e) => {
                this.setState({
                    imageData: file,
                    imageUrl: e.target.result,
                    loading: false
                })
			}
		}
    }

    changeGoodName = (event) => {
        this.setState({goodName: event.target.value})
    }

    changeGoodPrice = (event) => {
        this.setState({goodPrice: event.target.value})
    }

    commitGood = () => {
        CommonModule.http.handler('createGood', {
            name: this.state.goodName,
            price: this.state.goodPrice
        }).then(data => {
            const formData = new FormData();
            formData.append('img', this.state.imageData);
            return CommonModule.http.handler('uploadImage', data._id, formData)
        }).then(data => {
            CommonModule.msgSuccess(CommonModule.resourceManager.getString('upload_success'));
        }).catch(err => {
            CommonModule.msgError(err.err)
        })
    }

    render() {
        const uploadPanel = (
            <div className='upload-image'>
                <input id='file-upload' onChange={this.handleChange} type='file' title={this.state.imageData && this.state.imageData.name ? this.state.imageData.name : null}/>
                    <div className='preview-box'>
                        {
                            this.state.imageUrl ? <img src={this.state.imageUrl} alt='' /> : 
                            <div>
                                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                                <div className="ant-upload-text">上传图片</div>
                            </div>
                        }
                    </div>  
            </div>
        );
        return (
            <div className="goods-upload">
               <Input id='good-name' size="large" placeholder="请输入商品名称" value={this.state.goodName} onChange={this.changeGoodName}/>
               <Input id='good-price' size="large" placeholder="请输入商品价格" value={this.state.goodPrice} onChange={this.changeGoodPrice}/>
               {uploadPanel}
               <Button type='primary' size='large' onClick={this.commitGood}>确认上传</Button>
            </div>
        );
    }
}

export default GoodsUpload;