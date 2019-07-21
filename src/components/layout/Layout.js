import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../styles/elements';
import Navbar from './Navbar';
import Footer from './Footer';
import Overlay from './sidebar/Overlay';
import Sidebar from './sidebar/Sidebar';

export default class Layout extends Component {
	state = {
		sideBarOpen: false,
		navBarFixed: this.props.navBarFixed
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
		const { sideBarOpen, navBarFixed } = this.state;
		return (
			<LayoutContainer>
				<Navbar
					toogleSidebarOpen={this.handleToggleSidebarOpen}
					sideBarOpen={sideBarOpen}
					navBarFixed={navBarFixed}
					navLinks={this.props.navLinks}
				/>
				{this.props.children}
				{/* <ChildrenContainer>{this.props.children}</ChildrenContainer> */}
				<Footer />
				<Overlay sidebarClose={this.handleSidebarClose} show={sideBarOpen} />
				<Sidebar
					sidebarClose={this.handleSidebarClose}
					show={sideBarOpen}
					navBarFixed={navBarFixed}
					navLinks={this.props.navLinks}
				/>
			</LayoutContainer>
		);
	}
}

const LayoutContainer = styled.div`
	background-color: ${ThemeColors.white};
`;
