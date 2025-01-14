/*
 * @Author: xhf
 * @Date:   2017-07-14 09:00
 * @Last Modified time: 2017-11-14 12:00
 */

import '../asset/css/style.scss';
import '../asset/css/reset.css';
import '../asset/css/testless.less';
//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*react-router-dom用法*/
import {
	BrowserRouter,	
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import HelloMessage from 'root/src/components/helloMessage/HelloMessage';




const About = () => (
  <div>
  	<hr />
    <h3>About</h3>
  </div>
)

const Home = () => (
  <div>
  	<hr />
    <h3>Home</h3>
  </div>
)

const Message = ({ match }) => (
  <div>
  	<hr />
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
)

const Inbox = ({ match }) => (
  <div>
  	 <hr />
    <h2>Topics</h2>
    <Route path={`${match.url}/messages/:id`} component={Message}/>

  </div>
) 

class App extends Component {
	render() {
	    return (
	      	<BrowserRouter basename="">      		
	      		<div>
			        <h1>App</h1>
			        <ul>
			          <li><Link to="/">Home</Link></li>
			          <li><Link to="/about">About</Link></li>
			          <li><Link to="/inbox/messages/123">Inbox</Link></li>
			        </ul>
			        <Route exact path="/" component={HelloMessage} />
			        <Route path="/about" component={About} />
			        <Route path="/inbox" component={Inbox} />
	      		</div>
		    </BrowserRouter>		
	    );
	}
}



ReactDOM.render(<App></App>,  document.getElementById("container"));


/*复制进main.js则可查看基本路由功能*/