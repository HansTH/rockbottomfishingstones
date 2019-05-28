import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';
import Navbar from './Navbar';
import Footer from './Footer';
import Overlay from './sidebar/Overlay';
import Sidebar from './sidebar/Sidebar';

export default class Layout extends Component {
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
      <LayoutContainer>
        <Navbar
          showNavbar={this.state.showNavbar}
          toogleSidebarOpen={this.handleToggleSidebarOpen}
          sideBarOpen={sideBarOpen}
        />
        <ChildrenContainer>{this.props.children}</ChildrenContainer>
        <Footer />
        <Overlay sidebarClose={this.handleSidebarClose} show={sideBarOpen} />
        <Sidebar sidebarClose={this.handleSidebarClose} show={sideBarOpen} />
      </LayoutContainer>
    );
  }
}

const LayoutContainer = styled.div`
  background-color: ${ThemeColors.black};
`;

const ChildrenContainer = styled.div`
  /* display: inline-block; */
`;
