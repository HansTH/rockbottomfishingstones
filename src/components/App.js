import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyles';
import Order from './order/Order';
import Home from './home/Home';
import { Provider } from '../contextAPI/context';
import AboutInfo from './pages/AboutInfo';
import TermsConditions from './pages/TermsConditions';

// TODO: Verzendkosten berekenen naar gewicht (<10kg, >10kg)
// TODO: Privary wetgegeving
// TODO: Retour policy
// TODO: Gebruikshandleiding.
// TODO: Betere fotos met afmeting

export default function App() {
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
