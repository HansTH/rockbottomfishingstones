import React, { Component } from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Showcase from './Showcase';
import About from './About';
import Product from './Product';
import Who from './Who';
import Contact from './Contact';
import Footer from './Footer';
import Overlay from './sidebar/Overlay';
import Sidebar from './sidebar/Sidebar';

class App extends Component {
  state = {
    sideBarOpen: false
  };

  handleToggleSidebarOpen = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };

  handleSidebarClose = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    const { sideBarOpen } = this.state;
    return (
      <div>
        <Navbar
          toogleSidebarOpen={this.handleToggleSidebarOpen}
          sideBarOpen={this.state.sideBarOpen}
        />
        <Overlay sidebarClose={this.handleSidebarClose} show={sideBarOpen} />
        <Sidebar sidebarClose={this.handleSidebarClose} show={sideBarOpen} />
        <Showcase />
        <About />
        <Product />
        <Who />
        <Contact />
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
