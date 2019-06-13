import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyles';
import Order from './order/Order';
import Home from './home/Home';
import { Provider } from '../contextAPI/context';
import AboutInfo from './pages/AboutInfo';
import TermsConditions from './pages/TermsConditions';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/order' component={Order} />
						<Route path='/terms' component={TermsConditions} />
						<Route path='/info' component={AboutInfo} />
					</Switch>
					<GlobalStyle />
				</Router>
			</Provider>
		);
	}
}

export default App;
