/*顶部导航栏*/

import React from 'react';
//import imgOne from './h.png';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
            		{desc:"彩贝P",url:"https://www.icaibei.net"},
            		{desc:"彩贝M",url:"https://m.icaibei.net"},            		
            		{desc:"彩贝T",url:"http://f01.icaibei.net"},
            		{desc:"百度",url:"http://www.baidu.com"},
            	]
        }
    }
	
    render() {
    	var repoList = this.state.arr.map(function (repo, index) {// 这里用repo和下面的key={index}配合map实现循环(repo等价与repos[index])功能
	        return (
	          <a key={index} href={repo.url}>{repo.desc}</a>
	        );
        });
        if(this.props.arr){
        	return (
	            <div className="list" title="列表fromProps" style={this.props.style}>
	                {repoList}
	            </div>
	        )
        }else{
        	return (
	            <div className="list" title="列表fromState" style={this.props.style}>
	                {repoList}
	            </div>
	        )
        }
        
    }
}

export default List
