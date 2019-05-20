import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyles';
import Order from './Order';
import Home from './Home';

class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path='/' component={Home} />
				<Route path='/order' component={Order} />
				<GlobalStyle />
			</Router>
		);
	}
}

export default App;
