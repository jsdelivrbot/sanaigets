/*banner广告位*/

import React from 'react';
//import imgOne from './h.png';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	
        }
    }
	
    render() {
    	return (<div>
					<a href={this.props.banner.url}><img src={this.props.banner.pic} title="banner图" style={this.props.style} /></a>  	
				
				</div>)        
    }
    
}

export default List
