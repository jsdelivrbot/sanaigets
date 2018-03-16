import React from 'react';
//import imgOne from './h.png';
import imgOne from 'asset/images/h.png';
class TestImagesUrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demo: '引入图片组件'
        }
    }
	
    render() {
        return (
            <div className="col-sm-12" title="module.js">
            	<hr />
                {this.state.demo}                  
                <img src={imgOne} alt="测试公共图片2" style={{width:"100%"}}/>
                <img src={require('./f.png')} alt="测试公共图片1" />
                <hr />	
            </div>
        )
    }
}

export default TestImagesUrl