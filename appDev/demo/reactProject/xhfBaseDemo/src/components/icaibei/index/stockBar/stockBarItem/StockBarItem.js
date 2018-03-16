/*StockBarItem--单个股票的数据展示列*/
import React, { Component } from 'react';

class StockBarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	
        }
        
    }
    
	componentWillMount() {
		
    }
	componentDidMount() {
		
    }
	
    render() {
    	if(this.props.stock.updown>0){
    		return  (<div className="StockBar-flexCol">
	    				{this.props.stock.name}<br />
						<div className="font-red">
							{this.props.stock.price}<br />
	    					{this.props.stock.updown} {this.props.stock.percent}%
						</div>
					</div>)			
		}else{
			return  (<div className="StockBar-flexCol">
	    				{this.props.stock.name}<br />
						<div className="font-green">
							{this.props.stock.price}<br />
	    					{this.props.stock.updown} {this.props.stock.percent}%
						</div>
					</div>)			
		}
    }
    
}

export default StockBarItem
