import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyles';
import Order from './order/Order';
import Home from './home/Home';
import { Provider } from '../contextAPI/context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/order' component={Order} />
          </Switch>
          <GlobalStyle />
        </Router>
      </Provider>
    );
  }
}

export default App;
